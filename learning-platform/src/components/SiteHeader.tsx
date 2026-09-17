import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { getSessionUser } from "@/lib/auth-server";

export default async function SiteHeader() {
  const user = await getSessionUser();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">SY</span>
          <span><strong>세영 학습 플랫폼</strong><small>SEYOUNG ONLINE CLASSROOM</small></span>
        </Link>
        <nav className="nav-links">
          <Link href="/materials">기본 교재</Link>
          <Link href="/specialized">특성화고</Link>
          <Link href="/koi">정보올림피아드</Link>
          {user?.admin && <Link href="/admin">관리자</Link>}
          {user ? (
            <span className="header-account">
              <Link href="/account">내 계정</Link>
              <LogoutButton />
            </span>
          ) : (
            <Link className="login-link" href="/login">로그인</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
