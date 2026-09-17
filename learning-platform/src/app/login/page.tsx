export default function LoginPage() {
  return (
    <section className="auth-wrap">
      <div className="auth-card">
        <span className="eyebrow">MEMBER LOGIN</span>
        <h1>로그인</h1>
        <p className="muted">현재는 UI 구축 단계입니다. Firebase 연결 후 실제 로그인이 활성화됩니다.</p>
        <form className="auth-form">
          <label>
            이메일
            <input type="email" placeholder="student@example.com" disabled />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="••••••••" disabled />
          </label>
          <button type="button" className="primary-button full" disabled>로그인</button>
        </form>
        <div className="pending-box">
          <strong>가입 후에는 관리자 승인이 필요합니다.</strong>
          <p>승인 전에는 교재 메뉴에 접근할 수 없도록 구성할 예정입니다.</p>
        </div>
      </div>
    </section>
  );
}
