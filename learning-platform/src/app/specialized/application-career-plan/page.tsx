import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ApplicationCareerPlanPage() {
  return (
    <ProtectedCoursePage
      permission="dimigo"
      eyebrow="DIMIGO APPLICATION WRITING"
      title="자기소개서, 취업(창업) 계획서 작성"
      description="자기소개서와 취업·창업 계획서를 준비하는 학습 공간입니다."
      hideIntro
      items={[]}
    />
  );
}
