import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function HwaseongGiftedPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="HWASEONG GIFTED EDUCATION"
      title="화성시 영재교육원 대비"
      description="화성시 영재교육원 전형 단계별 학습 공간입니다."
      hideIntro
      items={[
        {
          title: "1차 전형(지필 평가)",
          description: "서류 작성과 객관식·서논술형 지필 평가를 단계별로 준비합니다.",
          href: "/specialized/hwaseong-gifted/first-round",
        },
        {
          title: "2차 전형(심층 면접)",
          description: "심층 면접에서 자신의 사고 과정과 답변을 논리적으로 설명하는 연습을 합니다.",
          href: "/specialized/hwaseong-gifted/second-round",
        },
      ]}
    />
  );
}
