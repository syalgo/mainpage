import Link from "next/link";
import { redirect } from "next/navigation";
import ComputerLiteracyWindows10AdvancedStudy from "@/components/ComputerLiteracyWindows10AdvancedStudy";
import { getSessionUser } from "@/lib/auth-server";
import { isFirebaseAdminConfigured } from "@/lib/firebase-admin";

export default async function Windows10AdvancedPage() {
  if (!isFirebaseAdminConfigured()) {
    return (
      <section className="access-state">
        <span className="eyebrow">SETUP MODE</span>
        <h1>2장 한글 Windows 10의 고급 기능</h1>
        <Link className="secondary-button" href="/computer-literacy-2/written/computer-general">돌아가기</Link>
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
        <Link className="secondary-button" href="/account">내 계정 확인</Link>
      </section>
    );
  }

  if (!user.admin && !user.permissions.computer2) {
    return (
      <section className="access-state">
        <span className="eyebrow">NO COURSE ACCESS</span>
        <h1>컴퓨터활용능력 2급 이용 권한이 없습니다.</h1>
        <Link className="secondary-button" href="/account">내 권한 확인</Link>
      </section>
    );
  }

  return <ComputerLiteracyWindows10AdvancedStudy />;
}
