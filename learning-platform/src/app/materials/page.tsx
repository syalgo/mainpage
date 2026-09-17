import CoursePage from "@/components/CoursePage";

export default function MaterialsPage() {
  return (
    <CoursePage
      eyebrow="BASIC MATERIALS"
      title="기본 교재"
      description="정규 수업에서 공통으로 활용하는 프로그래밍·로봇·AI 학습 자료를 모아두는 공간입니다."
      items={["프로그래밍 기초", "알고리즘 기초", "로봇·피지컬 컴퓨팅", "AI·바이브 코딩"]}
    />
  );
}
