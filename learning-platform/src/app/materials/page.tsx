import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function MaterialsPage() {
  return (
    <ProtectedCoursePage
      permission="basic"
      eyebrow="BASIC MATERIALS"
      title="기본 교재"
      description="정규 수업에서 공통으로 사용하는 개념 정리, 실습, 문제 풀이 자료입니다."
      items={[
        { title: "코딩 기초", description: "엔트리·스크래치·기초 프로그래밍 수업 자료를 구성합니다." },
        { title: "프로그래밍 언어", description: "Python·C/C++ 등 언어별 학습 자료를 정리합니다." },
        { title: "실습 자료", description: "수업 중 사용하는 예제와 단계별 실습을 제공합니다." },
        { title: "문제 풀이", description: "수업 진도에 맞는 확인 문제와 복습 자료를 제공합니다." },
      ]}
    />
  );
}
