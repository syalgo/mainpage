import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function KoiPage() {
  return (
    <ProtectedCoursePage
      permission="koi"
      eyebrow="KOREA OLYMPIAD IN INFORMATICS"
      title="정보올림피아드 대비반"
      description="알고리즘 개념부터 기출 유형 분석과 실전 문제 풀이까지 단계적으로 구성합니다."
      items={[
        { title: "핵심 알고리즘", description: "정렬·탐색·그리디·DP·그래프 등 핵심 개념을 학습합니다." },
        { title: "유형별 문제", description: "난이도와 주제별로 문제를 묶어 반복 훈련합니다." },
        { title: "기출 분석", description: "정보올림피아드 기출 문제의 접근법과 풀이를 정리합니다." },
        { title: "실전 연습", description: "시간 제한을 두고 대회 형식으로 문제를 해결합니다." },
      ]}
    />
  );
}
