import Link from "next/link";
import { redirect } from "next/navigation";
import ThinkingMathRelationsComparison from "@/components/ThinkingMathRelationsComparison";
import { getSessionUser } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

export default async function RelationsComparisonPage() {
  if (!isFirebaseAdminConfigured()) {
    return (
      <section className="access-state">
        <span className="eyebrow">SETUP MODE</span>
        <h1>관계와 비교</h1>
        <p>Firebase 연결 후 승인된 특성화고 대비반 계정만 이용할 수 있습니다.</p>
        <Link className="secondary-button" href="/specialized/thinking-math">돌아가기</Link>
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
        <p>관리자 승인 후 사고력 수학 학습 페이지를 이용할 수 있습니다.</p>
        <Link className="secondary-button" href="/account">내 계정 확인</Link>
      </section>
    );
  }

  if (!user.admin && !user.permissions.specialized) {
    return (
      <section className="access-state">
        <span className="eyebrow">NO COURSE ACCESS</span>
        <h1>특성화고 대비반 권한이 없습니다.</h1>
        <p>관리자에게 특성화고 대비반 이용 권한을 요청해주세요.</p>
        <Link className="secondary-button" href="/account">내 권한 확인</Link>
      </section>
    );
  }

  return <ThinkingMathRelationsComparison />;
}
