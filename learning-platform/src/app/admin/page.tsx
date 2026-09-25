import { redirect } from "next/navigation";
import AdminUsersTable from "@/components/AdminUsersTable";
import { getStrictSessionUser, listPlatformUsers } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

export default async function AdminPage() {
  if (!isFirebaseAdminConfigured()) {
    return (
      <section className="access-state">
        <span className="eyebrow">ADMIN SETUP</span>
        <h1>Firebase 연결이 필요합니다.</h1>
        <p>관리자 기능 코드는 준비되어 있습니다. Firebase 프로젝트와 Vercel 환경변수를 연결하면 실제 가입자 관리가 시작됩니다.</p>
      </section>
    );
  }

  const admin = await getStrictSessionUser();
  if (!admin) redirect("/login");
  if (!admin.admin) {
    return <section className="access-state"><h1>관리자 전용 메뉴입니다.</h1><p>현재 계정에는 관리자 권한이 없습니다.</p></section>;
  }

  const users = await listPlatformUsers();

  return (
    <section className="admin-page">
      <div className="section-heading">
        <span className="eyebrow">ADMIN</span>
        <h1>회원 승인 및 권한 관리</h1>
        <p>승인 여부와 기본 교재·특성화고·정보올림피아드 이용 권한을 각각 설정합니다.</p>
      </div>
      <AdminUsersTable initialUsers={users} />
      <div className="pending-box wide">
        <strong>운영 원칙</strong>
        <p>회원가입 직후에는 모든 과정 권한이 꺼져 있습니다. 학생 확인 후 승인과 필요한 과정만 체크하세요.</p>
      </div>
    </section>
  );
}
