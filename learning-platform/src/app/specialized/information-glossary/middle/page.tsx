import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function MiddleInformationGlossaryPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="MIDDLE SCHOOL INFORMATION GLOSSARY"
      title="중등 정보용어 백과"
      description="중학교 정보 교과에서 사용하는 핵심 용어를 정리하는 공간입니다."
      items={[
        {
          title: "중등 정보용어",
          description: "중등용 자료를 추가하면 교과 영역별 용어와 설명을 정리합니다.",
        },
      ]}
      hideIntro
    />
  );
}
