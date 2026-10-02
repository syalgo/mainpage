import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function HwaseongGiftedFirstRoundPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="HWASEONG GIFTED · FIRST ROUND"
      title="1차 전형(지필 평가)"
      description="1차 전형 준비 항목을 순서대로 학습합니다."
      hideIntro
      items={[
        {
          title: "자기소개서 및 학업계획서 작성",
          description: "자신의 경험과 강점, 학습 과정과 계획을 논리적으로 정리합니다.",
          href: "/specialized/hwaseong-gifted/first-round/application",
        },
        {
          title: "자기보고식 영재성 판별 검사(객관식)",
          description: "자기보고식 영재성 판별 검사의 객관식 문항 유형을 익히고 연습합니다.",
          href: "/specialized/hwaseong-gifted/first-round/giftedness-test",
        },
        {
          title: "창의적 문제해결력(서, 논술형)",
          description: "문제 해결 과정과 자신의 생각을 논리적으로 서술하는 문항을 준비합니다.",
          href: "/specialized/hwaseong-gifted/first-round/creative-problem-solving",
        },
      ]}
    />
  );
}
