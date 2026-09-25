import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ThinkingMathPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="THINKING MATH"
      title="사고력 수학"
      description=""
      hideIntro
      items={[
        {
          title: "경우의 수",
          description: "왜 더하기가 아니라 곱하기일까?",
          href: "/specialized/thinking-math/counting",
        },
        {
          title: "그래프 경로",
          description: "복잡한 길을, 점과 선만 남기면",
        },
        {
          title: "규칙과 일반화",
          description: "100번째를 한 번에 아는 법",
        },
        {
          title: "관계와 비교",
          description: "쫓아가는 둘의 차이는 어떻게 변할까?",
        },
        {
          title: "최적화",
          description: "가장 큰 것만 고르면 정말 1등일까?",
        },
        {
          title: "창의적 문제해결력",
          description: "정답이 하나가 아닐 때, 어떻게?",
        },
        {
          title: "도형의 분해와 비",
          description: "자르고 옮겨서 알아내는 넓이",
        },
        {
          title: "수의 배열",
          description: "합이 똑같아지는 신비한 사각형",
        },
        {
          title: "논리추론",
          description: "단서만으로 진실을 가려내는 법",
        },
        {
          title: "비둘기집의 원리",
          description: "세어 보지 않고도 확신하는 법",
        },
        {
          title: "창의적 문제해결력",
          description: "정답이 하나가 아닐 때, 어떻게?",
        },
      ]}
    />
  );
}
