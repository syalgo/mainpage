import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SuwonHightechAptitudeTestPage() {
  return (
    <ProtectedCoursePage
      permission="suwon"
      eyebrow="SUWON HITECH · APTITUDE TEST"
      title="적성시험"
      description="수원하이텍고 적성시험을 준비하는 학습 공간입니다."
      hideIntro
      items={[]}
    />
  );
}
