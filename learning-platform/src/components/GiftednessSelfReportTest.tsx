"use client";

import { useMemo, useState } from "react";

type DomainKey =
  | "curiosity"
  | "persistence"
  | "creativity"
  | "sensitivity"
  | "independence"
  | "problemSolving"
  | "selfManagement"
  | "collaboration"
  | "leadership"
  | "vision";

type Item = {
  text: string;
  reverse?: boolean;
};

type Domain = {
  key: DomainKey;
  title: string;
  short: string;
  description: string;
  advice: string;
  items: Item[];
};

const domains: Domain[] = [
  {
    key: "curiosity",
    title: "호기심·탐구성",
    short: "궁금한 것을 스스로 질문하고 깊게 알아가려는 경향",
    description: "새로운 현상이나 개념을 그냥 지나치지 않고 질문을 만들고, 이유와 원리를 찾아보려는 성향입니다.",
    advice: "궁금증을 질문으로 적고, 스스로 자료를 찾아 확인하는 탐구 습관을 계속 키워보세요.",
    items: [
      { text: "새로운 내용을 배우면 ‘왜 그런지’가 궁금해지는 편이다." },
      { text: "모르는 현상을 보면 그냥 넘어가기보다 이유를 찾아보고 싶어진다." },
      { text: "수업에서 배운 내용과 관련된 다른 사례도 찾아보는 편이다." },
      { text: "궁금한 것이 생기면 질문을 만들어 보는 것을 좋아한다." },
      { text: "처음 보는 주제라도 흥미가 생기면 관련 내용을 더 찾아본다." },
      { text: "정답만 알면 충분해서 원리까지 알아볼 필요는 없다고 느끼는 편이다.", reverse: true },
      { text: "익숙한 내용보다 새로운 주제를 탐색하는 것이 재미있다." },
      { text: "누군가 설명해 준 내용도 ‘정말 그런가?’ 하고 확인해보는 편이다." },
      { text: "궁금한 점이 생겨도 시간이 들면 그냥 넘어가는 편이다.", reverse: true },
      { text: "하나를 배우면 그와 연결된 다른 질문이 자연스럽게 떠오른다." },
    ],
  },
  {
    key: "persistence",
    title: "과제집착·끈기",
    short: "어려운 문제도 포기하지 않고 끝까지 해결하려는 경향",
    description: "쉽게 풀리지 않는 과제에서도 방법을 바꾸어 다시 시도하고, 끝까지 해결하려는 성향입니다.",
    advice: "어려운 문제를 만났을 때 시도한 방법과 실패 원인을 기록하면 끈기를 더 효과적으로 사용할 수 있습니다.",
    items: [
      { text: "어려운 문제를 만나도 가능한 방법을 바꾸어 다시 시도하는 편이다." },
      { text: "한 번 시작한 과제는 가능한 한 끝까지 마무리하려고 한다." },
      { text: "처음에 잘되지 않아도 바로 포기하지 않는다." },
      { text: "해결 방법이 보이지 않으면 금방 다른 일로 넘어가는 편이다.", reverse: true },
      { text: "시간이 오래 걸리더라도 중요한 문제라면 계속 생각해본다." },
      { text: "틀린 문제를 다시 풀어 원인을 확인하는 편이다." },
      { text: "결과가 바로 나오지 않으면 흥미가 빠르게 떨어지는 편이다.", reverse: true },
      { text: "어려운 과제를 해결했을 때 큰 만족을 느낀다." },
      { text: "중간에 실패해도 배운 점을 이용해 다시 시작할 수 있다." },
      { text: "누가 시키지 않아도 해결하지 못한 문제를 다시 살펴보는 편이다." },
    ],
  },
  {
    key: "creativity",
    title: "창의성·융통성",
    short: "여러 관점과 새로운 방법을 떠올리고 시도하는 경향",
    description: "한 가지 방식에 머무르지 않고 여러 해결 방법을 떠올리며, 새로운 조합이나 관점으로 문제를 바라보는 성향입니다.",
    advice: "한 문제에 최소 세 가지 다른 해결 방법이나 아이디어를 만들어 보는 연습이 도움이 됩니다.",
    items: [
      { text: "한 문제를 보면 여러 가지 해결 방법을 떠올려 보는 편이다." },
      { text: "기존 방법이 잘되지 않으면 다른 방식을 시험해본다." },
      { text: "서로 관계없어 보이는 아이디어를 연결해 새로운 생각을 만드는 것을 좋아한다." },
      { text: "정해진 방법이 있으면 다른 방법을 생각할 필요가 없다고 느끼는 편이다.", reverse: true },
      { text: "친구들과 다른 생각이 떠올라도 말해보는 편이다." },
      { text: "하나의 물건을 원래 용도와 다르게 사용할 방법을 생각해본 적이 많다." },
      { text: "답이 하나로 정해져 있지 않은 문제를 흥미롭게 느낀다." },
      { text: "새로운 방법은 실패할 수 있어서 되도록 피하는 편이다.", reverse: true },
      { text: "평범한 아이디어를 조금 바꾸어 더 재미있거나 유용하게 만드는 편이다." },
      { text: "문제를 다른 사람의 입장이나 다른 조건에서 다시 생각해보는 편이다." },
    ],
  },
  {
    key: "sensitivity",
    title: "감수성·심미성",
    short: "미세한 차이와 표현, 아름다움과 의미를 민감하게 느끼는 경향",
    description: "사물과 현상의 작은 차이를 알아차리고, 글·그림·음악·자연·디자인 등에서 의미와 아름다움을 느끼는 성향입니다.",
    advice: "관찰한 장면이나 느낌을 말, 글, 그림, 사진 등으로 표현해 보면 세밀한 감수성을 더 잘 활용할 수 있습니다.",
    items: [
      { text: "다른 사람이 그냥 지나치는 작은 차이나 변화를 잘 알아차리는 편이다." },
      { text: "글, 그림, 음악, 자연에서 인상적인 부분을 발견하는 것을 좋아한다." },
      { text: "내 생각이나 느낌을 글이나 그림 등으로 표현하는 것을 좋아한다." },
      { text: "작품이나 결과물의 내용뿐 아니라 모양과 표현 방식도 중요하다고 생각한다." },
      { text: "비슷해 보이는 것들 사이의 미묘한 차이를 찾는 것이 재미있다." },
      { text: "주변의 색, 소리, 모양 같은 세부적인 요소에는 별 관심이 없는 편이다.", reverse: true },
      { text: "어떤 장면이나 이야기를 보면 그 분위기나 느낌이 오래 기억에 남는 편이다." },
      { text: "결과만 맞으면 표현 방법이나 완성도는 중요하지 않다고 생각하는 편이다.", reverse: true },
      { text: "새로운 디자인이나 표현 방식을 보면 왜 그렇게 만들었는지 생각해본다." },
      { text: "자연이나 일상에서 아름답거나 독특한 장면을 발견하는 편이다." },
    ],
  },
  {
    key: "independence",
    title: "판단의 독자성·비판적 사고",
    short: "다수 의견에 휩쓸리지 않고 근거를 바탕으로 스스로 판단하는 경향",
    description: "다른 사람의 의견을 존중하면서도 근거를 확인하고 자신의 판단을 만들어 가는 성향입니다.",
    advice: "찬성과 반대의 근거를 모두 적어 본 뒤 자신의 결론을 내리는 연습을 해보세요.",
    items: [
      { text: "많은 사람이 같은 의견을 말해도 근거가 부족하면 다시 생각해보는 편이다." },
      { text: "내 생각과 다른 의견을 들으면 어느 쪽 근거가 더 타당한지 비교한다." },
      { text: "선생님이나 책의 설명도 이해되지 않으면 질문하거나 확인해보는 편이다." },
      { text: "친구들이 모두 동의하면 이유를 잘 몰라도 따라가는 편이다.", reverse: true },
      { text: "결론을 내리기 전에 반대 입장도 생각해보려고 한다." },
      { text: "내가 틀릴 수도 있다는 가능성을 생각하면서 판단한다." },
      { text: "정보를 볼 때 사실과 의견을 구분하려고 한다." },
      { text: "유명한 사람이 말한 내용이면 대체로 맞다고 생각하는 편이다.", reverse: true },
      { text: "주장을 들으면 그 근거가 무엇인지 살펴보는 편이다." },
      { text: "내 의견을 바꿀 만한 충분한 근거가 있다면 생각을 수정할 수 있다." },
    ],
  },
  {
    key: "problemSolving",
    title: "논리·문제해결",
    short: "복잡한 문제를 구조화하고 규칙과 관계를 찾아 해결하는 경향",
    description: "문제의 조건을 나누어 보고, 규칙·관계·원인을 찾아 단계적으로 해결하려는 성향입니다.",
    advice: "문제를 ‘조건-목표-가능한 방법’으로 나누고, 풀이 과정을 다른 사람에게 설명해 보는 것이 좋습니다.",
    items: [
      { text: "복잡한 문제를 만나면 작은 부분으로 나누어 생각하는 편이다." },
      { text: "문제에서 중요한 조건과 그렇지 않은 정보를 구분하려고 한다." },
      { text: "여러 사례를 보며 공통된 규칙을 찾는 것을 좋아한다." },
      { text: "답을 찾았더라도 다른 조건에서도 성립하는지 확인해보는 편이다." },
      { text: "풀이 과정을 순서대로 설명하는 것을 비교적 잘하는 편이다." },
      { text: "문제가 복잡해 보이면 어디서부터 시작해야 할지 몰라 바로 포기하는 편이다.", reverse: true },
      { text: "예상한 결과와 실제 결과가 다르면 원인을 찾아본다." },
      { text: "문제를 해결할 때 표, 그림, 식, 목록 등으로 정리해보는 편이다." },
      { text: "정답만 맞으면 풀이 과정은 크게 중요하지 않다고 생각하는 편이다.", reverse: true },
      { text: "새로운 문제에서도 전에 사용한 원리나 전략을 적용해보는 편이다." },
    ],
  },
  {
    key: "selfManagement",
    title: "자기관리·책임감",
    short: "목표를 세우고 시간과 행동을 조절하며 책임 있게 수행하는 경향",
    description: "해야 할 일을 스스로 계획하고, 시간과 감정을 조절하며 맡은 일을 책임 있게 수행하는 성향입니다.",
    advice: "큰 목표를 작은 일정으로 나누고 스스로 점검하는 습관을 만들면 자기관리 능력을 더 키울 수 있습니다.",
    items: [
      { text: "해야 할 일이 많을 때 우선순위를 정해 처리하는 편이다." },
      { text: "누가 계속 확인하지 않아도 해야 할 일을 스스로 진행하는 편이다." },
      { text: "약속한 기한이나 규칙을 지키려고 노력한다." },
      { text: "중요한 일이 있어도 그때그때 기분에 따라 미루는 편이다.", reverse: true },
      { text: "계획이 틀어지면 상황에 맞게 다시 조정할 수 있다." },
      { text: "실수했을 때 변명보다 내가 고칠 부분을 먼저 생각하는 편이다." },
      { text: "공부나 활동을 시작하기 전에 필요한 준비를 확인한다." },
      { text: "하고 싶은 일이 생기면 해야 할 일을 자주 잊는 편이다.", reverse: true },
      { text: "감정이 올라올 때 바로 행동하기보다 잠시 생각하려고 한다." },
      { text: "내가 맡은 역할은 다른 사람이 믿을 수 있도록 마무리하려고 한다." },
    ],
  },
  {
    key: "collaboration",
    title: "배려·협력·도덕성",
    short: "타인의 입장을 존중하고 공동의 목표와 공정성을 생각하는 경향",
    description: "다른 사람의 의견과 감정을 고려하고, 공정한 규칙과 공동의 목표를 위해 협력하려는 성향입니다.",
    advice: "모둠 활동에서 다른 사람의 역할과 의견을 먼저 확인하고, 결정 이유를 공정하게 설명하는 연습이 좋습니다.",
    items: [
      { text: "친구의 의견이 나와 달라도 끝까지 들어보려고 한다." },
      { text: "모둠에서 누군가 참여하기 어려워하면 함께할 방법을 찾으려고 한다." },
      { text: "나에게 불리하더라도 모두에게 적용되는 규칙은 지켜야 한다고 생각한다." },
      { text: "팀 결과보다 내 역할만 잘하면 충분하다고 생각하는 편이다.", reverse: true },
      { text: "갈등이 생기면 누가 이기는지보다 해결 방법을 찾으려고 한다." },
      { text: "친구가 실수했을 때 바로 비난하기보다 이유를 먼저 들어보려고 한다." },
      { text: "공동으로 한 일의 성과를 혼자 차지하는 것은 옳지 않다고 생각한다." },
      { text: "내 의견이 맞다고 생각하면 다른 사람의 사정은 크게 고려하지 않는 편이다.", reverse: true },
      { text: "도움이 필요한 사람을 보면 내가 할 수 있는 일을 생각해본다." },
      { text: "팀의 목표를 위해 필요하면 맡은 역할을 조정할 수 있다." },
    ],
  },
  {
    key: "leadership",
    title: "의사소통·조직관리",
    short: "생각을 명확히 전달하고 사람과 역할을 조율하는 경향",
    description: "자신의 생각을 분명하게 설명하고, 공동의 목표를 위해 역할과 의견을 조정하며 참여를 이끄는 성향입니다.",
    advice: "리더 역할 자체보다 ‘왜 그렇게 결정했는지 설명하고 다른 사람을 참여시키는 능력’을 연습해보세요.",
    items: [
      { text: "여럿이 함께할 때 해야 할 일을 정리해서 제안하는 편이다." },
      { text: "내 생각을 말할 때 이유와 근거를 함께 설명하려고 한다." },
      { text: "의견이 여러 개 나오면 공통점과 차이를 정리해보는 편이다." },
      { text: "모둠에서 누군가 방향을 정해주기 전에는 가능하면 가만히 있는 편이다.", reverse: true },
      { text: "다른 사람도 참여할 수 있도록 질문하거나 역할을 나누는 편이다." },
      { text: "발표나 설명에서 상대가 이해했는지 확인하려고 한다." },
      { text: "팀이 목표를 잃으면 다시 해야 할 일을 정리해보는 편이다." },
      { text: "내 의견을 설명하는 것이 부담스러워 필요한 상황에서도 말하지 않는 편이다.", reverse: true },
      { text: "친구들의 장점을 보고 역할을 나누는 것을 잘하는 편이다." },
      { text: "문제가 생기면 사람을 탓하기보다 해결을 위해 필요한 행동을 제안하려고 한다." },
    ],
  },
  {
    key: "vision",
    title: "비전·도전·성장",
    short: "미래 목표를 그리고 새로운 도전에 의미를 두며 성장하려는 경향",
    description: "현재의 성과에만 머무르지 않고 앞으로 배우고 싶은 것과 이루고 싶은 목표를 생각하며 도전하는 성향입니다.",
    advice: "‘잘하고 싶은 것’보다 ‘어떤 문제를 해결하고 싶은가’를 기준으로 중장기 목표를 구체화해보세요.",
    items: [
      { text: "앞으로 더 잘하고 싶은 분야나 이루고 싶은 목표가 있다." },
      { text: "처음 해보는 활동이라도 배울 점이 있다면 도전해보는 편이다." },
      { text: "지금 부족한 점을 알아도 연습하면 나아질 수 있다고 생각한다." },
      { text: "실패할 가능성이 있으면 새로운 도전은 되도록 피하는 편이다.", reverse: true },
      { text: "내가 배우는 내용이 앞으로 어디에 쓰일지 생각해보는 편이다." },
      { text: "목표를 이루기 위해 지금 해야 할 작은 행동을 정해보는 편이다." },
      { text: "잘하는 것만 계속하고 어려운 분야는 시도하지 않는 것이 편하다.", reverse: true },
      { text: "다른 사람의 성공 사례를 보면 나에게 적용할 점을 찾아본다." },
      { text: "결과가 기대와 달라도 그 경험에서 다음 목표를 찾으려고 한다." },
      { text: "내가 가진 능력을 다른 사람이나 사회에 어떻게 쓸 수 있을지 생각해본 적이 있다." },
    ],
  },
];

const options = [
  { value: 5, label: "매우 그렇다" },
  { value: 4, label: "그렇다" },
  { value: 3, label: "보통이다" },
  { value: 2, label: "아니다" },
  { value: 1, label: "매우 아니다" },
];

const mixedQuestions = Array.from({ length: 10 }, (_, round) =>
  domains.map((domain) => ({
    domain: domain.key,
    domainTitle: domain.title,
    ...domain.items[round],
  })),
).flat();

function levelOf(score: number) {
  if (score >= 85) return "매우 강하게 나타남";
  if (score >= 70) return "강하게 나타남";
  if (score >= 55) return "비교적 나타남";
  if (score >= 40) return "보통 수준";
  return "현재 응답에서 상대적으로 덜 나타남";
}

export default function GiftednessSelfReportTest() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [page, setPage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const perPage = 10;
  const pageCount = 10;
  const start = page * perPage;
  const visible = mixedQuestions.slice(start, start + perPage);
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / mixedQuestions.length) * 100);

  const results = useMemo(() => {
    return domains
      .map((domain) => {
        const indexes = mixedQuestions
          .map((question, index) => ({ question, index }))
          .filter(({ question }) => question.domain === domain.key);

        let raw = 0;
        let count = 0;

        indexes.forEach(({ question, index }) => {
          const value = answers[index];
          if (value === undefined) return;
          raw += question.reverse ? 6 - value : value;
          count += 1;
        });

        const score = count === 10 ? Math.round(((raw - 10) / 40) * 100) : 0;
        return { ...domain, raw, score };
      })
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const selectedCounts = useMemo(() => {
    const counts = new Map<number, number>(options.map((option) => [option.value, 0]));
    Object.values(answers).forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));
    return counts;
  }, [answers]);

  const maxSameResponse = Math.max(...Array.from(selectedCounts.values()));
  const responseWarning =
    maxSameResponse >= 70
      ? "한 선택지에 응답이 매우 많이 집중되어 있습니다. 평소 실제 행동을 기준으로 다시 확인해보는 것이 좋습니다."
      : maxSameResponse >= 50
        ? "같은 선택지를 반복해서 고른 비율이 높은 편입니다. 문항을 충분히 구분해 답했는지 확인해보세요."
        : "응답이 한 선택지에 지나치게 집중되지는 않았습니다.";

  const top = results.slice(0, 3);
  const lower = results.slice(-2).reverse();

  function answer(index: number, value: number) {
    setAnswers((current) => ({ ...current, [index]: value }));
    setShowResult(false);
  }

  function goNext() {
    if (page < pageCount - 1) {
      setPage((current) => current + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goPrev() {
    if (page > 0) {
      setPage((current) => current - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function reset() {
    setAnswers({});
    setPage(0);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showResult && answeredCount === 100) {
    return (
      <section className="gifted-self-page">
        <header className="gifted-self-hero">
          <span className="eyebrow">SELF-REPORT RESULT</span>
          <h1>자기보고식 영재성 판별 검사(객관식)</h1>
          <p>100문항 응답 결과를 영역별로 정리했습니다.</p>
        </header>

        <section className="gifted-self-result">
          <div className="gifted-self-result-head">
            <span>RESULT</span>
            <h2>나의 응답 특성</h2>
            <p>
              이 결과는 연습용 자기보고 검사에서 나타난 <b>상대적인 특성 프로필</b>입니다.
              특정 점수만으로 영재 여부나 실제 선발 결과를 판단하지 않습니다.
            </p>
          </div>

          <div className="gifted-self-top-grid">
            {top.map((domain, index) => (
              <article key={domain.key}>
                <span>{index + 1}순위</span>
                <h3>{domain.title}</h3>
                <strong>{domain.score}점 · {levelOf(domain.score)}</strong>
                <p>{domain.description}</p>
                <div className="gifted-self-result-bar">
                  <span style={{ width: domain.score + "%" }} />
                </div>
              </article>
            ))}
          </div>

          <div className="gifted-self-conclusion">
            <h3>결론</h3>
            <p>
              이번 응답에서는 <b>{top[0].title}</b>, <b>{top[1].title}</b>, <b>{top[2].title}</b> 영역이
              상대적으로 강하게 나타났습니다. 특히 가장 높은 <b>{top[0].title}</b>은
              {top[0].short}을 보여주는 영역입니다.
            </p>
            <p>
              상대적으로 낮게 나온 <b>{lower[0].title}</b>, <b>{lower[1].title}</b>은 약점이라고 단정하는 영역이 아닙니다.
              현재 응답에서 다른 특성보다 덜 드러난 부분이며, 실제 학교생활이나 활동 경험에 따라 다르게 나타날 수 있습니다.
            </p>
            <p><b>추천:</b> {top[0].advice}</p>
          </div>

          <div className="gifted-self-domain-list">
            {results.map((domain) => (
              <article key={domain.key}>
                <div className="gifted-self-domain-row">
                  <div>
                    <strong>{domain.title}</strong>
                    <span>{levelOf(domain.score)}</span>
                  </div>
                  <b>{domain.score}</b>
                </div>
                <div className="gifted-self-result-bar">
                  <span style={{ width: domain.score + "%" }} />
                </div>
                <p>{domain.short}</p>
              </article>
            ))}
          </div>

          <div className="gifted-self-response-check">
            <strong>응답 패턴 확인</strong>
            <p>{responseWarning}</p>
            <p>
              이 검사에는 반대 방향의 문항도 섞여 있습니다. ‘좋아 보이는 답’을 고르기보다 평소 자신의 실제 행동에 가깝게 답하는 것이 중요합니다.
            </p>
          </div>

          <div className="gifted-self-result-actions">
            <button type="button" className="secondary-button" onClick={() => setShowResult(false)}>
              응답 다시 보기
            </button>
            <button type="button" className="secondary-button" onClick={reset}>
              처음부터 다시
            </button>
          </div>
        </section>
      </section>
    );
  }

  return (
    <section className="gifted-self-page">
      <header className="gifted-self-hero">
        <span className="eyebrow">GIFTEDNESS SELF-REPORT PRACTICE</span>
        <h1>자기보고식 영재성 판별 검사(객관식)</h1>
        <p>
          각 문장이 평소의 나와 얼마나 비슷한지 선택합니다.
          정답을 찾는 문제가 아니라 <b>자신의 실제 행동과 생각을 솔직하게 돌아보는 검사</b>입니다.
        </p>
      </header>

      <section className="gifted-self-intro">
        <div className="gifted-self-guide">
          <article>
            <span>01</span>
            <strong>100문항</strong>
            <p>10개 영역을 각 10문항씩 확인합니다.</p>
          </article>
          <article>
            <span>02</span>
            <strong>5단계 응답</strong>
            <p>매우 그렇다 · 그렇다 · 보통이다 · 아니다 · 매우 아니다</p>
          </article>
          <article>
            <span>03</span>
            <strong>반대 문항 포함</strong>
            <p>무조건 좋은 답만 반복하지 않도록 일부 문항은 반대 방향으로 구성했습니다.</p>
          </article>
          <article>
            <span>04</span>
            <strong>완료 후 결과</strong>
            <p>영역별 점수와 상대적으로 강하게 나타난 특성을 확인합니다.</p>
          </article>
        </div>

        <div className="gifted-self-notice">
          <strong>응답 방법</strong>
          <p>
            ‘영재처럼 보이는 답’이 무엇인지 생각하지 말고, 최근 학교생활과 일상에서 실제로 자주 보이는 자신의 모습을 기준으로 답하세요.
            같은 뜻을 다른 방향에서 묻는 문항도 있습니다.
          </p>
        </div>

        <details className="gifted-self-basis">
          <summary>검사 구성의 참고 기준</summary>
          <div>
            <p>
              이 연습검사는 KEDI 창의적 인성검사에서 다루는 호기심·과제집착·심미성·위험감수·사고의 개방성·판단의 독자성,
              KEDI 리더십 연구의 자기관리·타인 및 공동체 배려·조직관리 등의 구성개념과,
              GED가 제시하는 창의성·문제해결·추론·탐구·정보활용 역량을 참고하여 새 문항으로 구성했습니다.
            </p>
            <p>
              공개된 공식 선발 문항을 복제한 검사가 아니며, 실제 화성시 영재교육원 선발 문항과 동일하다는 의미도 아닙니다.
            </p>
            <div>
              <a href="https://ged.kedi.re.kr/intro/gedinfo/intro4_1.do" target="_blank" rel="noreferrer">GED KEDI 영재성 검사</a>
              <a href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001750846" target="_blank" rel="noreferrer">KEDI 리더십특성검사 연구</a>
            </div>
          </div>
        </details>
      </section>

      <section className="gifted-self-test">
        <div className="gifted-self-progress-head">
          <div>
            <span>PAGE {page + 1} / {pageCount}</span>
            <h2>{start + 1}번 ~ {start + visible.length}번</h2>
          </div>
          <b>{answeredCount} / 100</b>
        </div>
        <div className="gifted-self-progress">
          <span style={{ width: progress + "%" }} />
        </div>

        <div className="gifted-self-questions">
          {visible.map((question, localIndex) => {
            const index = start + localIndex;
            return (
              <article key={index}>
                <div className="gifted-self-question-text">
                  <span>{String(index + 1).padStart(3, "0")}</span>
                  <p>{question.text}</p>
                </div>
                <div className="gifted-self-options" role="group" aria-label={String(index + 1) + "번 문항"}>
                  {options.map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      className={answers[index] === option.value ? "selected" : ""}
                      onClick={() => answer(index, option.value)}
                    >
                      <b>{option.value}</b>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="gifted-self-nav">
          <button type="button" className="secondary-button" disabled={page === 0} onClick={goPrev}>
            이전 10문항
          </button>

          {page < pageCount - 1 ? (
            <button type="button" className="primary-button" onClick={goNext}>
              다음 10문항
            </button>
          ) : (
            <button
              type="button"
              className="primary-button"
              disabled={answeredCount !== 100}
              onClick={() => {
                setShowResult(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              결과 확인
            </button>
          )}
        </div>

        {page === pageCount - 1 && answeredCount !== 100 && (
          <p className="gifted-self-incomplete">결과를 확인하려면 남은 {100 - answeredCount}문항에 답해주세요.</p>
        )}
      </section>
    </section>
  );
}
