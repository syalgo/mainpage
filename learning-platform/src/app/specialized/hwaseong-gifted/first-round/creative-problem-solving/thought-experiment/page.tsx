import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ThoughtExperimentCreativeProblemSolvingPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="CREATIVE PROBLEM SOLVING · THOUGHT EXPERIMENT"
      title="사고실험,탐구형"
      description="가상의 조건이나 탐구 상황에서 가설을 세우고 사고 과정을 단계적으로 설명하는 문제를 학습합니다."
      hideIntro
      items={[]}
    />
  );
}
