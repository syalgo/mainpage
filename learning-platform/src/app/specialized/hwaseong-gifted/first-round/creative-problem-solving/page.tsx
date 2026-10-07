import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function CreativeProblemSolvingPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="CREATIVE PROBLEM SOLVING"
      title="창의적 문제해결력(서, 논술형)"
      description="문제 유형별로 사고 과정을 정리하고 논리적으로 서술하는 연습을 합니다."
      hideIntro
      items={[
        {
          title: "현실상황형",
          description: "실제 생활이나 사회에서 만날 수 있는 상황을 바탕으로 문제를 분석하고 해결 방안을 논리적으로 서술합니다.",
          href: "/specialized/hwaseong-gifted/first-round/creative-problem-solving/real-world",
        },
        {
          title: "사고실험,탐구형",
          description: "가상의 조건이나 탐구 상황을 바탕으로 가설을 세우고 사고 과정을 단계적으로 설명합니다.",
          href: "/specialized/hwaseong-gifted/first-round/creative-problem-solving/thought-experiment",
        },
      ]}
    />
  );
}
