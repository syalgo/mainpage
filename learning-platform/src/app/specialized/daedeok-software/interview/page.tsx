import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function DaedeokSoftwareInterviewPage() {
  return (
    <ProtectedCoursePage
      permission="daedeok"
      eyebrow="DAEDEOK SW · INTERVIEW"
      title="심층 면접"
      description="대덕소마고 심층 면접을 준비하는 학습 공간입니다."
      hideIntro
      items={[]}
    />
  );
}
