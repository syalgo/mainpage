import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function InformationGlossaryPage() {
  return (
    <ProtectedCoursePage
      permission="dimigo"
      eyebrow="INFORMATION GLOSSARY"
      title="정보용어 백과"
      description="정보 교과와 컴퓨터 과학에서 자주 사용하는 핵심 용어를 수준별로 정리합니다."
      items={[
        {
          title: "초등 정보용어",
          description: "첨부된 초등 소프트웨어 용어 자료를 바탕으로 4개 영역의 핵심 용어를 정리합니다.",
          href: "/specialized/information-glossary/elementary",
        },
        {
          title: "중등 정보용어",
          description: "중학교 정보 교과에서 사용하는 핵심 개념과 용어를 정리하는 공간입니다.",
          href: "/specialized/information-glossary/middle",
        },
      ]}
      hideIntro
    />
  );
}
