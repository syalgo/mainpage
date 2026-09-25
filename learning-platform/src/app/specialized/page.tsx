import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SpecializedPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="SPECIALIZED HIGH SCHOOL"
      title="특성화고 대비반"
      description="디미고·대덕소마고 등 특성화고 지원을 위한 전용 학습 공간입니다."
      hideIntro
      items={[
        {
          title: "중학교 정보 교과서",
          description: "2022 개정 정보 교과서의 핵심 내용을 단원별로 학습합니다.",
          href: "/specialized/middle-school-info",
        },
        {
          title: "중학교 정보 문제풀이",
          description: "정보 자습서 4권의 보충 내용과 문제를 단원별로 통합해 학습합니다.",
          href: "/specialized/middle-school-info-practice",
        },
        {
          title: "사고력 수학",
          description: "경우의 수, 그래프 경로, 논리 추론 등 사고력 수학 주제를 학습합니다.",
          href: "/specialized/thinking-math",
        },
        { title: "심층 면접", description: "프로젝트·진로·문제 해결 과정 설명을 연습합니다." },
        { title: "포트폴리오", description: "활동 기록과 프로젝트 결과물을 체계적으로 준비합니다." },
      ]}
    />
  );
}
