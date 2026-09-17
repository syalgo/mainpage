import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SpecializedPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="SPECIALIZED HIGH SCHOOL"
      title="특성화고 대비반"
      description="디미고·대덕소마고 등 특성화고 지원을 위한 전용 학습 공간입니다."
      items={[
        { title: "학교별 전형", description: "지원 학교의 전형 구조와 준비 항목을 정리합니다." },
        { title: "지필 평가", description: "수학적 사고력·알고리즘·프로그래밍 평가를 대비합니다." },
        { title: "심층 면접", description: "프로젝트·진로·문제 해결 과정 설명을 연습합니다." },
        { title: "포트폴리오", description: "활동 기록과 프로젝트 결과물을 체계적으로 준비합니다." },
      ]}
    />
  );
}
