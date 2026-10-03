import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function DaedeokSoftwareAdmissionPage() {
  return (
    <ProtectedCoursePage
      permission="daedeok"
      eyebrow="DAEDEOK SOFTWARE MEISTER HIGH SCHOOL"
      title="대덕소마고 입학전형 대비"
      description="대덕소프트웨어마이스터고등학교 입학전형을 단계별로 준비합니다."
      hideIntro
      items={[
        {
          title: "직업기초 소양 평가",
          description: "언어·논리·수열·수리·자료·도형·공간·주의집중 유형을 회차별로 연습합니다.",
          href: "/specialized/job-basic-literacy",
        },
        {
          title: "심층 면접",
          description: "질문의 의도를 파악하고 자신의 경험과 생각을 논리적으로 설명하는 연습을 합니다.",
          href: "/specialized/daedeok-software/interview",
        },
      ]}
    />
  );
}
