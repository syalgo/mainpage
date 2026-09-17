import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">SY</span>
          <span>
            <strong>세영 학습 플랫폼</strong>
            <small>SEYOUNG LEARNING</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="주요 메뉴">
          <Link href="/materials">기본 교재</Link>
          <Link href="/specialized">특성화고 대비반</Link>
          <Link href="/koi">정보올림피아드</Link>
          <Link href="/login" className="login-link">로그인</Link>
        </nav>
      </div>
    </header>
  );
}
