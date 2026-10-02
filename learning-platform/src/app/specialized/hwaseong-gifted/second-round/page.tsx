import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function HwaseongGiftedSecondRoundPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="HWASEONG GIFTED · SECOND ROUND"
      title="2차 전형(심층 면접)"
      description="심층 면접을 준비하는 학습 공간입니다."
      hideIntro
      items={[
        {
          title: "심층 면접",
          description: "질문의 의도를 파악하고 자신의 생각과 문제 해결 과정을 논리적으로 설명하는 연습을 합니다.",
        },
      ]}
    />
  );
}
