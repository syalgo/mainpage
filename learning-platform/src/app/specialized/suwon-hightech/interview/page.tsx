import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SuwonHightechInterviewPage() {
  return (
    <ProtectedCoursePage
      permission="suwon"
      eyebrow="SUWON HITECH · INTERVIEW"
      title="심층면접"
      description="수원하이텍고 심층면접을 준비하는 학습 공간입니다."
      hideIntro
      items={[]}
    />
  );
}
