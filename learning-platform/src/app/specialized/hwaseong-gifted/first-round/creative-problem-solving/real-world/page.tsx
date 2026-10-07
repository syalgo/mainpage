import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function RealWorldCreativeProblemSolvingPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="CREATIVE PROBLEM SOLVING · REAL WORLD"
      title="현실상황형"
      description="실제 상황을 분석하고 해결 방안을 논리적으로 서술하는 문제를 학습합니다."
      hideIntro
      items={[]}
    />
  );
}
