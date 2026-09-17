"use client";

import { useState } from "react";
import type { PlatformUser } from "@/lib/auth-server";

type EditableField = "approved" | "basic" | "specialized" | "koi";

export default function AdminUsersTable({ initialUsers }: { initialUsers: PlatformUser[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [savingUid, setSavingUid] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function updateUser(uid: string, field: EditableField, value: boolean) {
    setSavingUid(uid);
    setError("");

    const response = await fetch(`/api/admin/users/${uid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error || "권한 변경에 실패했습니다.");
      setSavingUid(null);
      return;
    }

    setUsers((current) =>
      current.map((user) => {
        if (user.uid !== uid) return user;
        if (field === "approved") return { ...user, approved: value };
        return { ...user, permissions: { ...user.permissions, [field]: value } };
      }),
    );
    setSavingUid(null);
  }

  return (
    <>
      {error && <p className="form-error">{error}</p>}
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>이름</th><th>이메일</th><th>승인</th><th>기본 교재</th><th>특성화고</th><th>KOI</th><th>구분</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><input aria-label={`${user.name} 승인`} type="checkbox" checked={user.approved} disabled={user.admin || savingUid === user.uid} onChange={(event) => updateUser(user.uid, "approved", event.target.checked)} /></td>
                <td><input aria-label={`${user.name} 기본 교재`} type="checkbox" checked={user.permissions.basic} disabled={user.admin || savingUid === user.uid} onChange={(event) => updateUser(user.uid, "basic", event.target.checked)} /></td>
                <td><input aria-label={`${user.name} 특성화고`} type="checkbox" checked={user.permissions.specialized} disabled={user.admin || savingUid === user.uid} onChange={(event) => updateUser(user.uid, "specialized", event.target.checked)} /></td>
                <td><input aria-label={`${user.name} KOI`} type="checkbox" checked={user.permissions.koi} disabled={user.admin || savingUid === user.uid} onChange={(event) => updateUser(user.uid, "koi", event.target.checked)} /></td>
                <td>{user.admin ? <span className="status approved">관리자</span> : user.approved ? <span className="status approved">승인</span> : <span className="status pending">대기</span>}</td>
              </tr>
            ))}
            {!users.length && <tr><td colSpan={7}>가입 신청자가 아직 없습니다.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}
