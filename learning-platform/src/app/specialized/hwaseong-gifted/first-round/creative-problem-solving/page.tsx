import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function CreativeProblemSolvingPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="CREATIVE PROBLEM SOLVING"
      title="창의적 문제해결력(서, 논술형)"
      description="문제 해결 과정과 자신의 생각을 논리적으로 서술하는 문항을 학습합니다."
      hideIntro
      items={[]}
    />
  );
}
