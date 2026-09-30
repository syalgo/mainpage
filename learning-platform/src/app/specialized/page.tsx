import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SpecializedPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="DIMIGO ADMISSION"
      title="디미고 입학전형 대비"
      description="디미고 입학전형을 준비하기 위한 전용 학습 공간입니다."
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
          title: "사고력 수학 - 기초",
          description: "경우의 수, 그래프 경로, 논리 추론 등 사고력 수학 주제를 학습합니다.",
          href: "/specialized/thinking-math",
        },
        {
          title: "직업기초 소양 평가",
          description: "언어·논리·수열·수리·자료·도형·공간·주의집중 유형을 회차별로 연습합니다.",
          href: "/specialized/job-basic-literacy",
        },
        {
          title: "대회입상자 심화면접",
          description: "정보올림피아드 등 대회 실적을 바탕으로 알고리즘·문제해결력·진로·인성 면접을 준비합니다.",
          href: "/specialized/competition-interview",
        },
      ]}
    />
  );
}
