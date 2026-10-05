"use client";

import { useMemo, useState } from "react";

type DimensionKey =
  | "curiosity"
  | "analysis"
  | "persistence"
  | "responsibility"
  | "creativity"
  | "cooperation"
  | "communication"
  | "reflection";

type Dimension = {
  key: DimensionKey;
  title: string;
  keywords: string;
  description: string;
  images: string[];
};

type Question = {
  text: string;
  dimension: DimensionKey;
};

const dimensions: Dimension[] = [
  {
    key: "curiosity",
    title: "탐구·호기심형",
    keywords: "호기심 · 탐구 · 학습확장",
    description: "모르는 것을 그냥 넘기지 않고 질문을 만들고 원리를 확인하며 배움을 넓혀 가는 모습입니다.",
    images: [
      "궁금한 것을 끝까지 파고드는 학생",
      "원리를 이해하려는 학생",
      "질문을 잘 만드는 학생",
      "배운 것을 다른 문제로 확장하는 학생",
      "스스로 찾아 배우는 학생",
    ],
  },
  {
    key: "analysis",
    title: "분석·논리형",
    keywords: "분석 · 근거 · 정확성",
    description: "문제를 감으로 넘기지 않고 원인과 조건을 나누어 보고 근거를 확인하며 해결하는 모습입니다.",
    images: [
      "문제 원인을 차근차근 분석하는 학생",
      "근거를 확인하고 판단하는 학생",
      "여러 해결 방법을 비교하는 학생",
      "정확성을 중요하게 생각하는 학생",
      "복잡한 문제를 구조화하는 학생",
    ],
  },
  {
    key: "persistence",
    title: "끈기·성장형",
    keywords: "끈기 · 회복 · 성장",
    description: "어려움이나 실패가 있어도 중단하기보다 다시 시도하고, 피드백을 다음 행동에 반영하는 모습입니다.",
    images: [
      "어려워도 끝까지 해내는 학생",
      "실패에서 배우는 학생",
      "피드백을 반영해 성장하는 학생",
      "꾸준히 반복하며 실력을 쌓는 학생",
      "긴 목표를 포기하지 않고 이어가는 학생",
    ],
  },
  {
    key: "responsibility",
    title: "자기주도·책임형",
    keywords: "계획 · 책임 · 신뢰",
    description: "해야 할 일을 스스로 정리하고, 맡은 역할과 약속을 끝까지 지키며 신뢰를 만드는 모습입니다.",
    images: [
      "스스로 계획하고 실행하는 학생",
      "맡은 일을 끝까지 책임지는 학생",
      "약속과 규칙을 지키는 학생",
      "필요한 준비를 미리 하는 학생",
      "주변에서 믿고 맡길 수 있는 학생",
    ],
  },
  {
    key: "creativity",
    title: "창의·실행형",
    keywords: "아이디어 · 도전 · 실행",
    description: "기존 방법만 따르지 않고 새로운 방법을 생각하며, 아이디어를 실제 행동과 결과물로 옮기는 모습입니다.",
    images: [
      "새로운 아이디어를 연결하는 학생",
      "기존 방식에 의문을 던지는 학생",
      "아이디어를 실제 결과물로 만드는 학생",
      "여러 방법을 실험하고 비교하는 학생",
      "낯선 문제에도 먼저 도전하는 학생",
    ],
  },
  {
    key: "cooperation",
    title: "협력·배려형",
    keywords: "경청 · 배려 · 공동체",
    description: "내 몫만 끝내는 것이 아니라 다른 사람의 상황을 살피고, 팀이 함께 움직일 수 있는 방법을 찾는 모습입니다.",
    images: [
      "다른 사람의 말을 잘 듣는 학생",
      "도움이 필요한 사람을 먼저 살피는 학생",
      "팀원과 역할을 조율하는 학생",
      "갈등을 차분하게 해결하는 학생",
      "공동체의 결과를 함께 생각하는 학생",
    ],
  },
  {
    key: "communication",
    title: "소통·리더십형",
    keywords: "설명 · 조율 · 참여",
    description: "자신의 생각을 명확히 설명하고, 필요한 순간에는 팀의 방향을 정리하거나 다른 사람의 참여를 이끄는 모습입니다.",
    images: [
      "자신의 생각을 명확하게 설명하는 학생",
      "질문으로 대화를 이끄는 학생",
      "팀의 방향을 정리하는 학생",
      "다른 사람의 참여를 이끌어내는 학생",
      "필요한 역할을 먼저 찾아 움직이는 학생",
    ],
  },
  {
    key: "reflection",
    title: "성찰·적응형",
    keywords: "성찰 · 개선 · 유연성",
    description: "자신의 부족한 점과 실수를 돌아보고, 상황이 바뀌면 방법도 유연하게 바꾸며 더 나은 방향을 찾는 모습입니다.",
    images: [
      "자기 실수를 인정하고 고치는 학생",
      "자신의 부족한 점을 점검하는 학생",
      "결과를 다시 확인하고 개선하는 학생",
      "변화에 유연하게 대응하는 학생",
      "감정을 조절하고 차분하게 대처하는 학생",
    ],
  },
];

const questions: Question[] = [
  { text: "모르는 내용이 생기면 그냥 넘어가기보다 이유나 원리를 더 찾아보는 편이다.", dimension: "curiosity" },
  { text: "수업에서 배운 내용이 다른 상황에서는 어떻게 적용될지 궁금해지는 편이다.", dimension: "curiosity" },
  { text: "정답을 맞히는 것보다 ‘왜 그런지’를 이해했을 때 더 만족스럽다.", dimension: "curiosity" },

  { text: "문제가 생기면 원인을 한꺼번에 추측하기보다 조건을 나누어 하나씩 확인한다.", dimension: "analysis" },
  { text: "한 가지 풀이만 찾기보다 다른 방법과 비교해 보는 편이다.", dimension: "analysis" },
  { text: "중요한 판단을 할 때 느낌보다 근거나 자료를 먼저 확인하려고 한다.", dimension: "analysis" },

  { text: "과제가 생각보다 어렵더라도 가능한 방법을 다시 찾아 끝까지 해보는 편이다.", dimension: "persistence" },
  { text: "실패하거나 틀렸을 때 포기하기보다 무엇이 잘못되었는지 확인하고 다시 시도한다.", dimension: "persistence" },
  { text: "시간이 오래 걸려도 시작한 일은 가능한 한 마무리하려고 한다.", dimension: "persistence" },

  { text: "누가 계속 확인하지 않아도 해야 할 일을 스스로 정리해 진행하는 편이다.", dimension: "responsibility" },
  { text: "내가 맡은 역할이나 약속한 기한은 가능한 한 지키려고 한다.", dimension: "responsibility" },
  { text: "중요한 일이 있으면 마지막 순간보다 미리 준비해 두는 편이다.", dimension: "responsibility" },

  { text: "정해진 방법이 잘되지 않으면 다른 방식으로 해볼 생각이 자주 떠오른다.", dimension: "creativity" },
  { text: "좋은 아이디어가 떠오르면 생각으로 끝내기보다 직접 만들어 보거나 시험해 보는 편이다.", dimension: "creativity" },
  { text: "처음 해보는 과제라도 흥미가 생기면 먼저 도전해 보는 편이다.", dimension: "creativity" },

  { text: "모둠 활동에서는 내 의견을 말하기 전에 다른 사람의 의견도 충분히 들으려고 한다.", dimension: "cooperation" },
  { text: "친구가 어려움을 겪고 있으면 내가 도울 수 있는 부분이 있는지 살피는 편이다.", dimension: "cooperation" },
  { text: "의견이 다를 때 누가 이기는지보다 모두가 함께 할 수 있는 방법을 찾으려고 한다.", dimension: "cooperation" },

  { text: "다른 사람에게 설명할 때 결론만 말하기보다 이유와 순서를 함께 설명하는 편이다.", dimension: "communication" },
  { text: "팀이 무엇부터 해야 할지 혼란스러우면 해야 할 일을 정리해 제안하는 편이다.", dimension: "communication" },
  { text: "말이 적은 친구도 의견을 낼 수 있도록 질문하거나 참여를 도와주는 편이다.", dimension: "communication" },

  { text: "일이 끝난 뒤 잘한 점과 아쉬운 점을 스스로 돌아보는 편이다.", dimension: "reflection" },
  { text: "선생님이나 친구에게 받은 피드백 중 필요한 부분은 다음 행동에 반영하려고 한다.", dimension: "reflection" },
  { text: "계획대로 되지 않을 때 고집하기보다 상황에 맞게 방법을 바꾸는 편이다.", dimension: "reflection" },
];

const scale = [
  { value: 1, label: "전혀 아니다" },
  { value: 2, label: "아니다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "그렇다" },
  { value: 5, label: "매우 그렇다" },
];

export default function StudentImageFinder() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const answeredCount = Object.keys(answers).length;

  const ranked = useMemo(() => {
    const scores = dimensions.map((dimension) => {
      const related = questions
        .map((question, index) => ({ question, index }))
        .filter(({ question }) => question.dimension === dimension.key);

      const score = related.reduce((sum, { index }) => sum + (answers[index] ?? 0), 0);
      const answered = related.filter(({ index }) => answers[index] !== undefined).length;

      return {
        ...dimension,
        score,
        max: related.length * 5,
        answered,
      };
    });

    return scores.sort((a, b) => b.score - a.score);
  }, [answers]);

  const topDimensions = ranked.slice(0, 3);

  function selectImage(image: string) {
    setSelectedImages((current) => {
      if (current.includes(image)) return current.filter((item) => item !== image);
      if (current.length >= 3) return [...current.slice(1), image];
      return [...current, image];
    });
  }

  function resetTest() {
    setAnswers({});
    setShowResult(false);
    setSelectedImages([]);
  }

  return (
    <section className="student-image-finder">
      <div className="student-image-heading">
        <span>REPRESENTATIVE IMAGE LIBRARY</span>
        <h3>중학생이 만들 수 있는 대표 이미지 후보</h3>
        <p>
          아래 표현은 성격을 단정하는 이름이 아니라, 자기소개서와 면접에서
          <b> 실제 경험으로 증명할 수 있는 행동 이미지</b>의 예시입니다.
          자신의 경험과 가장 잘 맞는 표현을 1~3개 정도 골라 보는 것이 좋습니다.
        </p>
      </div>

      <div className="student-image-library">
        {dimensions.map((dimension) => (
          <article key={dimension.key}>
            <header>
              <strong>{dimension.title}</strong>
              <span>{dimension.keywords}</span>
            </header>
            <div>
              {dimension.images.map((image) => (
                <button
                  type="button"
                  key={image}
                  className={selectedImages.includes(image) ? "selected" : ""}
                  onClick={() => selectImage(image)}
                >
                  {image}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="student-image-test">
        <div className="student-image-test-head">
          <div>
            <span>SELF-REFLECTION TEST</span>
            <h3>질문으로 대표 이미지 찾아보기</h3>
            <p>
              각 문장을 읽고 평소의 나와 얼마나 비슷한지 선택하세요.
              ‘좋아 보이는 답’을 고르기보다 실제 학교생활에서 자주 보이는 행동을 기준으로 답하는 것이 중요합니다.
            </p>
          </div>
          <b>{answeredCount} / {questions.length}</b>
        </div>

        <div className="student-image-basis">
          <strong>검사에 대해</strong>
          <p>
            이 자기점검은 학생의 호기심·끈기·책임감·협력 등 사회정서적 역량을 다루는 OECD SSES와,
            공개 성격 문항 체계인 IPIP의 구성개념을 참고해 자기소개서 소재 탐색용으로 새롭게 구성한 문항입니다.
            공식 심리검사나 IQ검사가 아니며, 합격 가능성을 판단하는 도구도 아닙니다.
          </p>
          <div>
            <a href="https://www.oecd.org/en/about/programmes/oecd-survey-on-social-and-emotional-skills.html" target="_blank" rel="noreferrer">OECD SSES</a>
            <a href="https://ipip.ori.org/" target="_blank" rel="noreferrer">IPIP</a>
          </div>
        </div>

        <div className="student-image-questions">
          {questions.map((question, index) => (
            <article key={index}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question.text}</p>
              </div>
              <div className="student-image-scale" role="group" aria-label={String(index + 1) + "번 문항 응답"}>
                {scale.map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    className={answers[index] === item.value ? "selected" : ""}
                    onClick={() => {
                      setAnswers((current) => ({ ...current, [index]: item.value }));
                      setShowResult(false);
                    }}
                  >
                    <b>{item.value}</b>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="student-image-actions">
          <button
            type="button"
            className="primary-button"
            disabled={answeredCount !== questions.length}
            onClick={() => setShowResult(true)}
          >
            나의 대표 이미지 후보 보기
          </button>
          <button type="button" className="secondary-button" onClick={resetTest}>
            처음부터 다시
          </button>
        </div>

        {answeredCount !== questions.length && (
          <p className="student-image-incomplete">
            결과를 보려면 {questions.length - answeredCount}개 문항에 더 답해주세요.
          </p>
        )}

        {showResult && answeredCount === questions.length && (
          <section className="student-image-results">
            <div className="student-image-result-title">
              <span>RESULT</span>
              <h3>나에게 비교적 강하게 나타난 이미지 영역</h3>
              <p>
                높은 점수 순으로 세 영역을 보여줍니다. 결과를 그대로 자기소개서에 쓰기보다,
                <b> 실제 경험을 떠올렸을 때 가장 잘 증명되는 표현</b>을 최종 선택하세요.
              </p>
            </div>

            <div className="student-image-result-grid">
              {topDimensions.map((dimension, index) => (
                <article key={dimension.key}>
                  <span>{index + 1}순위</span>
                  <h4>{dimension.title}</h4>
                  <b>{dimension.keywords}</b>
                  <div className="student-image-score">
                    <span style={{ width: String((dimension.score / dimension.max) * 100) + "%" }} />
                  </div>
                  <p>{dimension.description}</p>
                  <strong>추천 대표 이미지</strong>
                  <div className="student-image-result-options">
                    {dimension.images.slice(0, 3).map((image) => (
                      <button
                        type="button"
                        key={image}
                        className={selectedImages.includes(image) ? "selected" : ""}
                        onClick={() => selectImage(image)}
                      >
                        {image}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedImages.length > 0 && (
          <div className="student-image-selected">
            <span>내가 선택한 대표 이미지</span>
            <div>
              {selectedImages.map((image) => (
                <button type="button" key={image} onClick={() => selectImage(image)}>
                  {image} <b>×</b>
                </button>
              ))}
            </div>
            <p>
              이제 각 이미지가 실제로 드러난 <b>교과 활동 · 학교 내 활동 · 도덕·인성 경험</b>을 하나씩 찾아보세요.
              세 문항에서 같은 문장을 반복할 필요는 없지만, 여러 경험을 읽었을 때 비슷한 학생상이 느껴지면 좋습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
