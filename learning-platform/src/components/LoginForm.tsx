"use client";

import { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase-client";

type Mode = "login" | "signup";

const messages: Record<string, string> = {
  "auth/email-already-in-use": "이미 가입된 이메일입니다.",
  "auth/invalid-credential": "이메일 또는 비밀번호가 올바르지 않습니다.",
  "auth/invalid-email": "이메일 형식을 확인해 주세요.",
  "auth/weak-password": "비밀번호는 6자 이상으로 입력해 주세요.",
  "auth/too-many-requests": "로그인 시도가 너무 많습니다. 잠시 후 다시 시도해 주세요.",
};

export default function LoginForm() {
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const auth = getFirebaseAuth();
      if (!auth) throw new Error("Firebase 웹 설정이 아직 연결되지 않았습니다.");

      await setPersistence(auth, inMemoryPersistence);
      const credential =
        mode === "signup"
          ? await createUserWithEmailAndPassword(auth, email.trim(), password)
          : await signInWithEmailAndPassword(auth, email.trim(), password);

      if (mode === "signup" && name.trim()) {
        await updateProfile(credential.user, { displayName: name.trim() });
      }

      const idToken = await credential.user.getIdToken(true);
      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, name: name.trim() }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "로그인 처리에 실패했습니다.");

      await signOut(auth);
      window.location.assign(mode === "signup" ? "/account" : "/");
    } catch (unknownError) {
      const errorObject = unknownError as { code?: string; message?: string };
      setError(
        (errorObject.code && messages[errorObject.code]) ||
          errorObject.message ||
          "처리 중 오류가 발생했습니다.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-card">
      <span className="eyebrow">MEMBER ACCESS</span>
      <h1>{mode === "login" ? "로그인" : "회원가입"}</h1>
      <p className="muted">
        {mode === "login"
          ? "승인된 계정으로 학습 자료에 접속하세요."
          : "가입 후 관리자의 승인을 받아야 교재를 이용할 수 있습니다."}
      </p>

      <div className="auth-tabs" role="tablist" aria-label="로그인 방식">
        <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")} type="button">로그인</button>
        <button className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")} type="button">회원가입</button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <label>
            이름
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="학생 이름" required />
          </label>
        )}
        <label>
          이메일
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="student@example.com" required />
        </label>
        <label>
          비밀번호
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="6자 이상" minLength={6} required />
        </label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button full" type="submit" disabled={loading}>
          {loading ? "처리 중..." : mode === "login" ? "로그인" : "가입 신청"}
        </button>
      </form>

      <div className="pending-box">
        <strong>승인 방식</strong>
        <p>회원가입 → 관리자 승인 → 과정별 권한 부여 후 해당 교재가 열립니다.</p>
      </div>
    </div>
  );
}
