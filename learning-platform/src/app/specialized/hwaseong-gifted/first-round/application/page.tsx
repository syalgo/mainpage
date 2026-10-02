import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function GiftedApplicationPage() {
  return (
    <ProtectedCoursePage
      permission="hwaseong"
      eyebrow="APPLICATION"
      title="자기소개서 및 학업계획서 작성"
      description="자신의 경험과 강점, 학습 과정과 계획을 논리적으로 정리합니다."
      hideIntro
      items={[]}
    />
  );
}
