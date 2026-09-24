"use client";

import Link from "next/link";
import { useState } from "react";
import {
  keumsungUnit1,
  type PracticeQuestion,
} from "@/data/practice/keumsungUnit1";

type Publisher = {
  id: string;
  name: string;
  fullName: string;
};

type Unit = {
  roman: string;
  title: string;
  description: string;
};

type PracticeSectionKey = "concept" | "basic" | "applied" | "advanced";

const publishers: Publisher[] = [
  { id: "keumsung", name: "금성", fullName: "금성출판사" },
  { id: "gilbut", name: "길벗", fullName: "길벗" },
  { id: "cimass", name: "씨마스", fullName: "씨마스" },
  { id: "chunjae", name: "천재", fullName: "천재교과서" },
];

const units: Unit[] = [
  {
    roman: "I",
    title: "컴퓨팅 시스템",
    description: "컴퓨팅 시스템의 구성과 동작 원리, 피지컬 컴퓨팅 관련 문제를 풉니다.",
  },
  {
    roman: "II",
    title: "데이터",
    description: "디지털 데이터 표현, 수집·관리·구조화·분석 관련 문제를 풉니다.",
  },
  {
    roman: "III",
    title: "알고리즘과 프로그래밍",
    description: "문제 해결, 알고리즘, 변수·리스트·연산자·제어 구조·함수 관련 문제를 풉니다.",
  },
  {
    roman: "IV",
    title: "인공지능",
    description: "인공지능 시스템, 학습 데이터, 인공지능 활용과 윤리 관련 문제를 풉니다.",
  },
  {
    roman: "V",
    title: "디지털 문화",
    description: "디지털 사회, 진로, 디지털 윤리, 개인 정보와 저작권 관련 문제를 풉니다.",
  },
];

const sections: Array<{
  key: PracticeSectionKey;
  tag: string;
  title: string;
  description: string;
}> = [
  {
    key: "concept",
    tag: "CONCEPT",
    title: "개념 보충",
    description: "해당 자습서에서 교과서보다 자세히 설명한 개념과 보충 내용을 정리합니다.",
  },
  {
    key: "basic",
    tag: "BASIC",
    title: "기본 문제",
    description: "핵심 개념을 정확히 이해했는지 확인하는 기본 문제를 풉니다.",
  },
  {
    key: "applied",
    tag: "APPLIED",
    title: "응용 문제",
    description: "시험대비 객관식 문제를 통해 여러 개념을 종합적으로 확인합니다.",
  },
  {
    key: "advanced",
    tag: "ADVANCED",
    title: "심화 문제",
    description: "서·논술형과 수행평가 문제를 중심으로 자신의 생각을 정리합니다.",
  },
];

function normalizeAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll("→", "-")
    .replaceAll(" ", "")
    .replaceAll("－", "-");
}

export default function MiddleSchoolInfoPractice() {
  const [activePublisher, setActivePublisher] = useState(0);
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeSection, setActiveSection] = useState<PracticeSectionKey>("concept");
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const publisher = publishers[activePublisher];
  const unit = units[activeUnit];
  const hasKeumsungUnit1 = publisher.id === "keumsung" && activeUnit === 0;

  function changePublisher(index: number) {
    setActivePublisher(index);
    setActiveUnit(0);
    setActiveSection("concept");
  }

  function changeUnit(index: number) {
    setActiveUnit(index);
    setActiveSection("concept");
  }

  function checkQuestion(question: PracticeQuestion) {
    setChecked((prev) => ({ ...prev, [question.id]: true }));
  }

  function questionIsCorrect(question: PracticeQuestion) {
    const value = answers[question.id];
    if (value === undefined) return false;

    if (question.type === "ox") {
      return value === question.answer;
    }

    if (question.type === "choice") {
      return value === question.answer;
    }

    if (question.type === "short" && question.answers) {
      const normalized = normalizeAnswer(String(value));
      return question.answers.some((answer) => normalizeAnswer(answer) === normalized);
    }

    return false;
  }

  function renderQuestion(question: PracticeQuestion, number: number, gradeable = true) {
    const value = answers[question.id];
    const isChecked = checked[question.id];
    const isCorrect = isChecked && gradeable && questionIsCorrect(question);

    return (
      <article className="question-card practice-question-card" key={question.id}>
        <strong>문제 {number}</strong>
        <h4>{question.prompt}</h4>

        {question.type === "ox" && (
          <div className="option-list practice-ox-options">
            {(["O", "X"] as const).map((option) => (
              <button
                type="button"
                key={option}
                className={value === option ? "selected" : ""}
                onClick={() => {
                  setAnswers((prev) => ({ ...prev, [question.id]: option }));
                  setChecked((prev) => ({ ...prev, [question.id]: false }));
                }}
              >
                <span>{option}</span>
                {option === "O" ? "맞다" : "틀리다"}
              </button>
            ))}
          </div>
        )}

        {question.type === "choice" && (
          <div className="option-list">
            {question.options.map((option, index) => (
              <button
                type="button"
                key={option}
                className={value === index ? "selected" : ""}
                onClick={() => {
                  setAnswers((prev) => ({ ...prev, [question.id]: index }));
                  setChecked((prev) => ({ ...prev, [question.id]: false }));
                }}
              >
                <span>{index + 1}</span>
                {option}
              </button>
            ))}
          </div>
        )}

        {question.type === "short" && (
          <input
            className="practice-answer-input"
            value={typeof value === "string" ? value : ""}
            placeholder="정답을 입력하세요."
            onChange={(event) => {
              setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }));
              setChecked((prev) => ({ ...prev, [question.id]: false }));
            }}
          />
        )}

        {question.type === "essay" && (
          <textarea
            className="practice-answer-textarea"
            value={typeof value === "string" ? value : ""}
            placeholder="여기에 답안을 작성해 보세요."
            onChange={(event) =>
              setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))
            }
          />
        )}

        {question.type === "essay" ? (
          <>
            <div className="practice-source-note">
              <strong>작성 안내</strong>
              <span>{question.guide}</span>
            </div>
            {question.modelAnswer && (
              <>
                <button
                  type="button"
                  className="secondary-button question-check"
                  onClick={() =>
                    setChecked((prev) => ({ ...prev, [question.id]: !prev[question.id] }))
                  }
                >
                  {isChecked ? "예시 답안 닫기" : "예시 답안 보기"}
                </button>
                {isChecked && (
                  <div className="answer-feedback correct">
                    <strong>예시 답안</strong>
                    <p>{question.modelAnswer}</p>
                  </div>
                )}
              </>
            )}
          </>
        ) : gradeable ? (
          <>
            <button
              type="button"
              className="primary-button question-check"
              disabled={value === undefined || value === ""}
              onClick={() => checkQuestion(question)}
            >
              정답 확인
            </button>

            {isChecked && (
              <div className={`answer-feedback ${isCorrect ? "correct" : "wrong"}`}>
                <strong>{isCorrect ? "정답입니다." : "다시 확인해 보세요."}</strong>
                {!isCorrect && question.type === "ox" && <p>정답: {question.answer}</p>}
                {!isCorrect && question.type === "choice" && question.answer !== undefined && (
                  <p>정답: {question.answer + 1}번</p>
                )}
                {!isCorrect && question.type === "short" && (
                  <p>정답: {question.displayAnswer}</p>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="practice-source-note pending">
            <strong>정답 자료 미등록</strong>
            <span>
              첨부된 시험대비 자료는 정답·해설 181쪽을 안내하지만, 이번 정답 PDF에는 해당
              페이지가 포함되어 있지 않아 임의로 정답을 만들지 않았습니다.
            </span>
          </div>
        )}
      </article>
    );
  }

  function renderKeumsungContent() {
    if (activeSection === "concept") {
      return (
        <div className="practice-concept-list">
          {keumsungUnit1.conceptSections.map((section) => (
            <article className="concept-card" key={section.title}>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p className="practice-concept-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      );
    }

    if (activeSection === "basic") {
      let questionNumber = 0;
      return (
        <div className="practice-question-area">
          {keumsungUnit1.basicGroups.map((group) => (
            <section className="practice-question-group" key={group.title}>
              <div className="question-section-title">
                <span className="eyebrow">KEUMSUNG · BASIC</span>
                <h3>{group.title}</h3>
                <p className="muted">{group.description}</p>
              </div>
              {group.questions.map((question) => {
                questionNumber += 1;
                return renderQuestion(question, questionNumber, true);
              })}
            </section>
          ))}
        </div>
      );
    }

    if (activeSection === "applied") {
      return (
        <section className="practice-question-group">
          <div className="question-section-title">
            <span className="eyebrow">KEUMSUNG · TEST PREP</span>
            <h3>시험대비 성취도 평가 문제</h3>
            <p className="muted">
              자습서 시험대비 객관식 11문제를 등록했습니다. 추가로 제공된 정답·해설 자료를
              연결해 모든 문제를 바로 채점할 수 있습니다.
            </p>
          </div>
          {keumsungUnit1.appliedQuestions.map((question, index) =>
            renderQuestion(question, index + 1, true),
          )}
        </section>
      );
    }

    return (
      <section className="practice-question-group">
        <div className="question-section-title">
          <span className="eyebrow">KEUMSUNG · ADVANCED</span>
          <h3>서·논술형 · 수행평가</h3>
          <p className="muted">
            시험대비 자료의 서·논술형 및 수행평가 문제를 답안 작성형으로 정리했습니다.
          </p>
        </div>
        {keumsungUnit1.advancedQuestions.map((question, index) =>
          renderQuestion(question, index + 1, false),
        )}
      </section>
    );
  }

  return (
    <section className="practice-page">
      <div className="textbook-topbar">
        <div>
          <span className="eyebrow">MIDDLE SCHOOL INFORMATION · PRACTICE</span>
          <h1>중학교 정보 문제풀이</h1>
          <p>
            금성·길벗·씨마스·천재 자습서를 출판사별로 구분하고,
            각 자습서의 1~5단원 문제와 보충 내용을 별도로 학습합니다.
          </p>
        </div>
        <Link className="secondary-button" href="/specialized" prefetch={false}>
          ← 특성화고 대비반
        </Link>
      </div>

      <section className="practice-picker-block">
        <div className="practice-picker-heading">
          <span className="eyebrow">PUBLISHER</span>
          <h2>자습서 선택</h2>
        </div>

        <div className="practice-publisher-tabs">
          {publishers.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={activePublisher === index ? "active" : ""}
              onClick={() => changePublisher(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <small>{item.fullName}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="practice-picker-block">
        <div className="practice-picker-heading">
          <span className="eyebrow">UNIT</span>
          <h2>{publisher.name} 자습서 · 단원 선택</h2>
        </div>

        <div className="practice-unit-tabs">
          {units.map((item, index) => (
            <button
              type="button"
              key={item.roman}
              className={activeUnit === index ? "active" : ""}
              onClick={() => changeUnit(index)}
            >
              <span>{item.roman}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="practice-unit-heading">
        <span className="eyebrow">
          {publisher.name.toUpperCase()} · {unit.roman} UNIT
        </span>
        <h2>{publisher.name} · {unit.title}</h2>
        <p>{unit.description}</p>
      </section>

      <div className="practice-section-tabs">
        {sections.map((section) => (
          <button
            type="button"
            key={section.key}
            className={activeSection === section.key ? "active" : ""}
            onClick={() => setActiveSection(section.key)}
          >
            <span className="content-number">{section.tag}</span>
            <strong>{section.title}</strong>
            <small>{section.description}</small>
          </button>
        ))}
      </div>

      {hasKeumsungUnit1 ? (
        <div className="practice-material-content">{renderKeumsungContent()}</div>
      ) : (
        <div className="practice-empty-state practice-page-empty">
          <strong>{publisher.name} · {unit.roman}단원 자료 준비 중</strong>
          <span>
            해당 출판사의 자습서 PDF가 등록되면 개념 보충과 실제 문제를 이 위치에 반영합니다.
          </span>
        </div>
      )}

    </section>
  );
}
