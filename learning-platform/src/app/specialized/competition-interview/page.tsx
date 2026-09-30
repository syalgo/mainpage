import Link from "next/link";
import { redirect } from "next/navigation";
import CompetitionWinnerInterviewStudy from "@/components/CompetitionWinnerInterviewStudy";
import { getSessionUser } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

export default async function CompetitionWinnerInterviewPage() {
  if (!isFirebaseAdminConfigured()) {
    return (
      <section className="access-state">
        <span className="eyebrow">SETUP MODE</span>
        <h1>대회입상자 심화면접</h1>
        <p>Firebase 연결 후 승인된 디미고 입학전형 대비 계정만 이용할 수 있습니다.</p>
        <Link className="secondary-button" href="/specialized">돌아가기</Link>
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
        <p>관리자 승인 후 대회입상자 심화면접 학습 페이지를 이용할 수 있습니다.</p>
        <Link className="secondary-button" href="/account">내 계정 확인</Link>
      </section>
    );
  }

  if (!user.admin && !user.permissions.specialized) {
    return (
      <section className="access-state">
        <span className="eyebrow">NO COURSE ACCESS</span>
        <h1>디미고 입학전형 대비 권한이 없습니다.</h1>
        <p>관리자에게 디미고 입학전형 대비 이용 권한을 요청해주세요.</p>
        <Link className="secondary-button" href="/account">내 권한 확인</Link>
      </section>
    );
  }

  return <CompetitionWinnerInterviewStudy />;
}
