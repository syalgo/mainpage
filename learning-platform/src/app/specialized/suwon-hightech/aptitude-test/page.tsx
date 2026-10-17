import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SuwonHightechAptitudeTestPage() {
  return (
    <ProtectedCoursePage
      permission="suwon"
      eyebrow="SUWON HITECH · APTITUDE TEST"
      title="적성시험"
      description="수원하이텍고 적성시험을 준비하는 학습 공간입니다."
      hideIntro
      items={[
        {
          title: "24년 기출",
          description: "2024년 문제를 순서대로 풀고 각 문항의 정답을 확인합니다.",
          href: "/specialized/suwon-hightech/aptitude-test/2024-past",
        },
      ]}
    />
  );
}
