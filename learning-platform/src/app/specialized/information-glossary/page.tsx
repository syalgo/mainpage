import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function InformationGlossaryPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="INFORMATION GLOSSARY"
      title="정보용어 백과"
      description="정보 교과·컴퓨터 과학·알고리즘에서 자주 사용하는 핵심 용어를 정리하는 학습 공간입니다."
      items={[
        {
          title: "정보용어 백과",
          description: "용어 목록과 세부 설명을 순차적으로 추가합니다.",
        },
      ]}
      hideIntro
    />
  );
}
