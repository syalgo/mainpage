import Link from "next/link";
import { redirect } from "next/navigation";
import CoursePage from "@/components/CoursePage";
import { getSessionUser, type CoursePermission } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

type Props = {
  permission: CoursePermission;
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; description: string; href?: string }[];
};

export default async function ProtectedCoursePage(props: Props) {
  if (!isFirebaseAdminConfigured()) {
    return (
      <section className="access-state">
        <span className="eyebrow">SETUP MODE</span>
        <h1>{props.title}</h1>
        <p>화면과 권한 로직은 준비되었습니다. Firebase 환경변수를 연결하면 로그인 보호가 활성화됩니다.</p>
        <Link className="secondary-button" href="/">메인으로</Link>
      </section>
    );
  }

  const user = await getSessionUser();
  if (!user) redirect("/login");

  if (!user.approved) {
    return (
      <section className="access-state">
        <span className="status pending">승인 대기</span>
        <h1>관리자 승인 대기 중입니다.</h1>
        <p>가입은 완료되었습니다. 관리자가 계정을 승인하고 과정 권한을 부여하면 이 메뉴를 사용할 수 있습니다.</p>
        <Link className="secondary-button" href="/account">내 계정 확인</Link>
      </section>
    );
  }

  if (!user.admin && !user.permissions[props.permission]) {
    return (
      <section className="access-state">
        <span className="eyebrow">NO COURSE ACCESS</span>
        <h1>이 과정의 이용 권한이 없습니다.</h1>
        <p>계정은 승인되었지만 현재 수강 과정에 이 메뉴가 포함되어 있지 않습니다.</p>
        <Link className="secondary-button" href="/account">내 권한 확인</Link>
      </section>
    );
  }

  return <CoursePage eyebrow={props.eyebrow} title={props.title} description={props.description} items={props.items} />;
}
