import CoursePage from "@/components/CoursePage";

export default function KoiPage() {
  return (
    <CoursePage
      eyebrow="KOREA OLYMPIAD IN INFORMATICS"
      title="정보올림피아드 대비반"
      description="자료구조와 알고리즘 개념부터 유형별 문제, 기출 분석까지 단계적으로 학습하는 공간입니다."
      items={["알고리즘 개념", "유형별 문제", "기출문제 분석", "모의평가·오답"]}
    />
  );
}
