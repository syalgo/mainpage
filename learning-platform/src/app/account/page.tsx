import { redirect } from "next/navigation";
import Link from "next/link";
import { getSessionUser } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

export default async function AccountPage() {
  if (!isFirebaseAdminConfigured()) {
    return <section className="access-state"><span className="eyebrow">SETUP MODE</span><h1>Firebase 연결 대기</h1><p>인증 코드 준비는 완료되었습니다. 환경변수를 연결하면 계정 상태가 표시됩니다.</p></section>;
  }

  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <section className="account-page">
      <span className="eyebrow">MY ACCOUNT</span>
      <h1>{user.name}님의 계정</h1>
      <p className="muted">{user.email}</p>
      <div className="account-status-card">
        <div><span>가입 상태</span><strong>{user.approved ? "승인 완료" : "관리자 승인 대기"}</strong></div>
        <div><span>기본 교재</span><strong>{user.admin || user.permissions.basic ? "이용 가능" : "권한 없음"}</strong></div>
        <div><span>특성화고 대비반</span><strong>{user.admin || user.permissions.specialized ? "이용 가능" : "권한 없음"}</strong></div>
        <div><span>정보올림피아드 대비반</span><strong>{user.admin || user.permissions.koi ? "이용 가능" : "권한 없음"}</strong></div>
      </div>
      <div className="hero-actions">
        <Link className="secondary-button" href="/">메인으로</Link>
        {user.admin && <Link className="primary-button" href="/admin">관리자 페이지</Link>}
      </div>
    </section>
  );
}
