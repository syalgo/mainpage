"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Question = {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Unit = {
  id: string;
  title: string;
  subtitle: string;
  concepts: string[];
  example: string;
  questions: Question[];
};

const units: Unit[] = [
  {
    id: "digital-culture",
    title: "1. 정보 사회와 디지털 윤리",
    subtitle: "정보의 가치와 책임 있는 디지털 생활",
    concepts: [
      "자료는 관찰이나 측정으로 얻은 값이고, 정보는 자료를 목적에 맞게 처리하여 의미를 갖게 한 결과입니다.",
      "개인정보는 개인을 알아볼 수 있는 정보이며, 필요한 범위에서 안전하게 다루어야 합니다.",
      "디지털 공간에서도 저작권, 개인정보, 온라인 예절과 같은 책임 있는 행동이 필요합니다.",
    ],
    example: "온라인 설문 결과를 표와 그래프로 정리해 반별 선호도를 비교했다면, 원래 응답은 자료이고 비교할 수 있도록 정리한 결과는 정보라고 볼 수 있습니다.",
    questions: [
      {
        id: "dc-1",
        prompt: "다음 중 '정보'에 가장 가까운 것은?",
        options: ["학생 30명의 원점수 목록", "온도 센서가 1초마다 측정한 값", "시험 점수를 분석한 반 평균과 등수", "카메라가 저장한 원본 사진"],
        answer: 2,
        explanation: "자료를 목적에 맞게 처리해 의미 있는 결과로 만든 것이 정보입니다.",
      },
      {
        id: "dc-2",
        prompt: "개인정보를 다루는 태도로 가장 적절한 것은?",
        options: ["필요하지 않아도 최대한 많이 수집한다", "친구의 연락처를 허락 없이 공유한다", "필요한 정보만 수집하고 안전하게 관리한다", "공개된 정보라면 언제든 재배포한다"],
        answer: 2,
        explanation: "개인정보는 목적에 필요한 범위에서 최소한으로 수집하고 안전하게 관리해야 합니다.",
      },
    ],
  },
  {
    id: "data",
    title: "2. 자료와 정보의 표현",
    subtitle: "컴퓨터가 문자·수·이미지를 표현하는 방법",
    concepts: [
      "컴퓨터는 전기적 상태를 구분하기 쉬운 0과 1의 이진 형태로 자료를 표현합니다.",
      "문자는 각 문자에 약속된 숫자 값을 대응시키는 문자 코드로 표현할 수 있습니다.",
      "디지털 이미지는 작은 점인 픽셀의 집합으로 표현되며, 해상도와 색 표현 방식에 따라 필요한 데이터 양이 달라집니다.",
    ],
    example: "10진수 13은 이진수로 1101입니다. 8+4+1을 더하면 13이 되기 때문입니다.",
    questions: [
      {
        id: "data-1",
        prompt: "10진수 10을 이진수로 바르게 표현한 것은?",
        options: ["1001", "1010", "1100", "1110"],
        answer: 1,
        explanation: "10 = 8 + 2이므로 이진수로 1010입니다.",
      },
      {
        id: "data-2",
        prompt: "같은 크기의 이미지에서 일반적으로 해상도가 높아지면 어떻게 되는가?",
        options: ["픽셀 수가 줄어든다", "표현할 수 있는 세부 정보가 늘어난다", "항상 파일 크기가 작아진다", "색상 표현이 불가능해진다"],
        answer: 1,
        explanation: "해상도가 높아지면 더 많은 픽셀로 이미지를 표현할 수 있어 세부 표현이 늘어납니다.",
      },
    ],
  },
  {
    id: "algorithm",
    title: "3. 문제 해결과 알고리즘",
    subtitle: "문제를 작은 단계로 나누고 절차를 설계하기",
    concepts: [
      "알고리즘은 문제를 해결하기 위한 명확하고 유한한 절차입니다.",
      "순차 구조는 명령을 차례대로, 선택 구조는 조건에 따라, 반복 구조는 같은 작업을 여러 번 수행합니다.",
      "좋은 알고리즘은 정답을 만들 뿐 아니라 이해하기 쉽고 불필요한 작업이 적어야 합니다.",
    ],
    example: "세 수 중 가장 큰 값을 찾을 때 '현재 최댓값'을 하나 정하고 다음 수와 차례대로 비교하면 반복 가능한 알고리즘으로 만들 수 있습니다.",
    questions: [
      {
        id: "algo-1",
        prompt: "비밀번호가 맞으면 로그인하고, 틀리면 오류 메시지를 보여주는 구조는?",
        options: ["순차 구조", "선택 구조", "반복 구조", "병렬 구조"],
        answer: 1,
        explanation: "조건의 참/거짓에 따라 실행 내용이 달라지므로 선택 구조입니다.",
      },
      {
        id: "algo-2",
        prompt: "1부터 100까지 모든 수를 차례대로 더할 때 가장 직접적으로 사용하는 구조는?",
        options: ["선택", "반복", "입력", "출력"],
        answer: 1,
        explanation: "같은 덧셈 동작을 여러 번 수행하므로 반복 구조를 사용할 수 있습니다.",
      },
    ],
  },
  {
    id: "programming",
    title: "4. 프로그래밍",
    subtitle: "변수·조건·반복으로 알고리즘 구현하기",
    concepts: [
      "변수는 프로그램이 실행되는 동안 값을 저장하거나 변경하기 위한 이름 있는 공간입니다.",
      "조건문은 조건에 따라 서로 다른 명령을 실행하고, 반복문은 일정한 작업을 여러 번 실행합니다.",
      "프로그램을 만들 때는 입력 → 처리 → 출력의 흐름을 생각하면 구조를 정리하기 쉽습니다.",
    ],
    example: "점수 score가 80 이상이면 '합격'을 출력하는 프로그램은 score라는 변수와 조건문을 함께 사용합니다.",
    questions: [
      {
        id: "prog-1",
        prompt: "프로그램에서 값을 저장해 두고 나중에 다시 사용하기 위한 것은?",
        options: ["변수", "주석", "출력", "오류"],
        answer: 0,
        explanation: "변수는 값을 저장하고 필요할 때 참조하거나 변경하는 데 사용합니다.",
      },
      {
        id: "prog-2",
        prompt: "게임 캐릭터의 체력이 0보다 클 동안 계속 움직이게 하려면 가장 적절한 것은?",
        options: ["한 번만 실행하는 출력문", "반복문", "문자열", "주석"],
        answer: 1,
        explanation: "조건을 만족하는 동안 같은 동작을 계속 수행해야 하므로 반복문이 적절합니다.",
      },
    ],
  },
  {
    id: "system",
    title: "5. 컴퓨팅 시스템",
    subtitle: "하드웨어·소프트웨어와 네트워크 이해하기",
    concepts: [
      "컴퓨팅 시스템은 입력, 처리, 저장, 출력 장치와 이를 제어하는 소프트웨어가 함께 동작합니다.",
      "운영체제는 하드웨어 자원을 관리하고 응용 프로그램이 실행될 수 있는 환경을 제공합니다.",
      "네트워크는 여러 컴퓨터와 장치를 연결하여 데이터와 자원을 주고받게 합니다.",
    ],
    example: "키보드로 문자를 입력하고 CPU가 처리한 뒤 모니터에 표시하는 과정은 입력 → 처리 → 출력의 대표적인 예입니다.",
    questions: [
      {
        id: "sys-1",
        prompt: "다음 중 운영체제의 역할로 가장 적절한 것은?",
        options: ["모니터 화면의 물리적 크기를 늘린다", "하드웨어 자원과 프로그램 실행을 관리한다", "인터넷 속도를 항상 두 배로 만든다", "모든 파일을 자동으로 공개한다"],
        answer: 1,
        explanation: "운영체제는 CPU, 메모리, 저장장치 등의 자원을 관리하고 프로그램 실행 환경을 제공합니다.",
      },
      {
        id: "sys-2",
        prompt: "여러 장치가 연결되어 데이터를 주고받는 구조를 무엇이라고 하는가?",
        options: ["알고리즘", "변수", "네트워크", "픽셀"],
        answer: 2,
        explanation: "장치들을 연결해 데이터를 교환하는 구조가 네트워크입니다.",
      },
    ],
  },
];

const STORAGE_KEY = "seyoung-middle-school-info-progress-v1";

export default function MiddleSchoolInfoStudy() {
  const [activeId, setActiveId] = useState(units[0].id);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [solved, setSolved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSolved(JSON.parse(saved));
    } catch {
      // 저장 데이터가 손상되어도 학습 화면은 정상 동작합니다.
    }
  }, []);

  const activeUnit = units.find((unit) => unit.id === activeId) ?? units[0];
  const totalQuestions = useMemo(() => units.reduce((sum, unit) => sum + unit.questions.length, 0), []);
  const progress = Math.round((solved.length / totalQuestions) * 100);

  function checkAnswer(questionId: string) {
    setChecked((prev) => ({ ...prev, [questionId]: true }));
    if (!solved.includes(questionId)) {
      const next = [...solved, questionId];
      setSolved(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }

  return (
    <section className="textbook-page">
      <div className="textbook-topbar">
        <div>
          <span className="eyebrow">MIDDLE SCHOOL INFORMATION</span>
          <h1>중학교 정보 교과서</h1>
          <p>핵심 개념을 읽고, 바로 예제를 풀어 확인하는 학습 공간입니다.</p>
        </div>
        <Link className="secondary-button" href="/specialized">← 특성화고 대비반</Link>
      </div>

      <div className="progress-card">
        <div>
          <strong>학습 진행률</strong>
          <span>{solved.length} / {totalQuestions}문제 확인</span>
        </div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
        <b>{progress}%</b>
      </div>

      <div className="textbook-layout">
        <aside className="unit-nav">
          <strong>단원</strong>
          {units.map((unit) => {
            const unitSolved = unit.questions.filter((q) => solved.includes(q.id)).length;
            return (
              <button
                type="button"
                key={unit.id}
                className={activeId === unit.id ? "active" : ""}
                onClick={() => setActiveId(unit.id)}
              >
                <span>{unit.title}</span>
                <small>{unitSolved}/{unit.questions.length}</small>
              </button>
            );
          })}
        </aside>

        <div className="study-panel">
          <div className="study-heading">
            <span className="eyebrow">UNIT</span>
            <h2>{activeUnit.title}</h2>
            <p>{activeUnit.subtitle}</p>
          </div>

          <section className="concept-card">
            <h3>핵심 개념</h3>
            <ul>
              {activeUnit.concepts.map((concept) => <li key={concept}>{concept}</li>)}
            </ul>
          </section>

          <section className="example-card">
            <span>EXAMPLE</span>
            <h3>개념 예시</h3>
            <p>{activeUnit.example}</p>
          </section>

          <section className="question-section">
            <div className="question-section-title">
              <span className="eyebrow">PRACTICE</span>
              <h3>예제 문제</h3>
            </div>

            {activeUnit.questions.map((question, qIndex) => {
              const selected = answers[question.id];
              const isChecked = checked[question.id];
              const isCorrect = isChecked && selected === question.answer;

              return (
                <article className="question-card" key={question.id}>
                  <strong>문제 {qIndex + 1}</strong>
                  <h4>{question.prompt}</h4>
                  <div className="option-list">
                    {question.options.map((option, index) => (
                      <button
                        type="button"
                        key={option}
                        className={selected === index ? "selected" : ""}
                        onClick={() => {
                          setAnswers((prev) => ({ ...prev, [question.id]: index }));
                          setChecked((prev) => ({ ...prev, [question.id]: false }));
                        }}
                      >
                        <span>{index + 1}</span>{option}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="primary-button question-check"
                    disabled={selected === undefined}
                    onClick={() => checkAnswer(question.id)}
                  >
                    정답 확인
                  </button>

                  {isChecked && (
                    <div className={`answer-feedback ${isCorrect ? "correct" : "wrong"}`}>
                      <strong>{isCorrect ? "정답입니다." : `정답은 ${question.answer + 1}번입니다.`}</strong>
                      <p>{question.explanation}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
