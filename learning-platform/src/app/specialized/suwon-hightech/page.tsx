import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SuwonHightechAdmissionPage() {
  return (
    <ProtectedCoursePage
      permission="suwon"
      eyebrow="SUWON HITECH HIGH SCHOOL"
      title="수원하이텍고 입학전형 대비"
      description="수원하이텍고 입학전형을 단계별로 준비합니다."
      hideIntro
      items={[
        {
          title: "적성시험",
          description: "수원하이텍고 적성시험을 유형별로 학습하고 연습합니다.",
          href: "/specialized/suwon-hightech/aptitude-test",
        },
        {
          title: "심층면접",
          description: "면접 질문의 의도를 파악하고 자신의 경험과 생각을 논리적으로 설명하는 연습을 합니다.",
          href: "/specialized/suwon-hightech/interview",
        },
      ]}
    />
  );
}
