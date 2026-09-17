const mockUsers = [
  { name: "김학생", email: "student1@example.com", status: "승인 대기", basic: true, specialized: false, koi: false },
  { name: "이학생", email: "student2@example.com", status: "승인", basic: true, specialized: true, koi: false },
  { name: "박학생", email: "student3@example.com", status: "승인", basic: true, specialized: false, koi: true },
];

export default function AdminPage() {
  return (
    <section className="admin-page">
      <div className="section-heading">
        <span className="eyebrow">ADMIN PREVIEW</span>
        <h1>회원 승인 및 권한 관리</h1>
        <p>현재는 예시 데이터입니다. Firebase 연결 후 실제 가입자가 여기에 표시됩니다.</p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>이름</th><th>이메일</th><th>상태</th><th>기본</th><th>특성화고</th><th>KOI</th></tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><span className={user.status === "승인" ? "status approved" : "status pending"}>{user.status}</span></td>
                <td>{user.basic ? "✓" : "—"}</td>
                <td>{user.specialized ? "✓" : "—"}</td>
                <td>{user.koi ? "✓" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pending-box wide">
        <strong>다음 구현 단계</strong>
        <p>실제 로그인 → 승인 대기 → 관리자 승인 → 과정별 권한 체크 → 서버 측 접근 차단 순서로 연결합니다.</p>
      </div>
    </section>
  );
}
