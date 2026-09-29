"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  jobBasicQuestions,
  jobBasicSections,
  type JobBasicQuestion,
} from "@/data/jobBasicLiteracy";

const optionMarks = ["①", "②", "③", "④"];
type ViewMode = "workbook" | "solutions";

function QuestionCard({
  question,
  mode,
  selected,
  onSelect,
}: {
  question: JobBasicQuestion;
  mode: ViewMode;
  selected?: number;
  onSelect: (option: number) => void;
}) {
  return (
    <article className="job-basic-question" id={`job-basic-q-${question.id}`}>
      <div className="job-basic-question-meta">
        <div className="job-basic-question-number">
          <span>문제</span>
          <strong>{question.id}</strong>
        </div>
        <span className="job-basic-category">{question.category}</span>
        <span className="job-basic-difficulty">난이도 {question.difficulty}</span>
        <span className="job-basic-time">권장 {question.seconds}초</span>
      </div>

      <div className="job-basic-prompt">{question.prompt}</div>

      <div className="job-basic-options">
        {question.options.map((option, index) => {
          const isCorrect = mode === "solutions" && index === question.answer;
          const isSelected = mode === "workbook" && selected === index;

          return mode === "workbook" ? (
            <button
              type="button"
              key={index}
              className={`job-basic-option${isSelected ? " selected" : ""}`}
              onClick={() => onSelect(index)}
            >
              <span>{optionMarks[index]}</span>
              <p>{option}</p>
            </button>
          ) : (
            <div
              key={index}
              className={`job-basic-option static${isCorrect ? " correct" : ""}`}
            >
              <span>{optionMarks[index]}</span>
              <p>{option}</p>
            </div>
          );
        })}
      </div>

      {mode === "solutions" && (
        <section className="job-basic-solution">
          <div className="job-basic-solution-answer">
            <span>정답</span>
            <strong>{optionMarks[question.answer]}</strong>
          </div>
          <div>
            <span className="job-basic-solution-label">풀이</span>
            <p>{question.explanation}</p>
          </div>
        </section>
      )}
    </article>
  );
}

export default function JobBasicLiteracyStudy() {
  const [mode, setMode] = useState<ViewMode>("workbook");
  const [sectionId, setSectionId] = useState(jobBasicSections[0].id);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const activeSection =
    jobBasicSections.find((section) => section.id === sectionId) ?? jobBasicSections[0];

  const activeQuestions = useMemo(
    () => jobBasicQuestions.filter((question) => question.sectionId === activeSection.id),
    [activeSection.id],
  );

  const answeredCount = activeQuestions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;

  const activeIndex = jobBasicSections.findIndex((section) => section.id === activeSection.id);

  function moveSection(direction: -1 | 1) {
    const next = jobBasicSections[activeIndex + direction];
    if (!next) return;
    setSectionId(next.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="job-basic-page">
      <div className="job-basic-topbar">
        <div>
          <span className="eyebrow">JOB BASIC LITERACY</span>
          <h1>직업기초 소양 평가</h1>
          <p>
            언어이해·논리추리·수열·계산·자료해석·도형·공간·주의집중을
            회차별로 연습합니다.
          </p>
        </div>
        <Link className="secondary-button" href="/specialized">
          입학전형 준비로
        </Link>
      </div>

      <div className="job-basic-summary">
        <div>
          <strong>280</strong>
          <span>전체 문항</span>
        </div>
        <div>
          <strong>4회</strong>
          <span>집중 과정</span>
        </div>
        <div>
          <strong>8개</strong>
          <span>핵심 유형</span>
        </div>
        <p>연습문항으로 구성된 학습 자료이며 공식 기출문제가 아닙니다.</p>
      </div>

      <div className="job-basic-mode-tabs" role="tablist" aria-label="학습 자료 선택">
        <button
          type="button"
          className={mode === "workbook" ? "active" : ""}
          onClick={() => setMode("workbook")}
        >
          문제집
        </button>
        <button
          type="button"
          className={mode === "solutions" ? "active" : ""}
          onClick={() => setMode("solutions")}
        >
          정답·해설
        </button>
      </div>

      <div className="job-basic-section-tabs">
        {jobBasicSections.map((section) => (
          <button
            type="button"
            key={section.id}
            className={section.id === activeSection.id ? "active" : ""}
            onClick={() => setSectionId(section.id)}
          >
            <strong>{section.title}</strong>
            <span>{section.start}~{section.end}번</span>
          </button>
        ))}
      </div>

      <div className="job-basic-section-head">
        <div>
          <span>
            {activeSection.start}~{activeSection.end}번
          </span>
          <h2>{activeSection.title}</h2>
          <p>{activeSection.subtitle}</p>
        </div>
        {mode === "workbook" && (
          <div className="job-basic-progress">
            <strong>{answeredCount}</strong>
            <span>/ {activeQuestions.length} 선택</span>
          </div>
        )}
      </div>

      <div className="job-basic-question-list">
        {activeQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            mode={mode}
            selected={answers[question.id]}
            onSelect={(option) =>
              setAnswers((current) => ({ ...current, [question.id]: option }))
            }
          />
        ))}
      </div>

      <div className="job-basic-pagination">
        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={() => moveSection(-1)}
        >
          ← 이전 과정
        </button>
        <span>
          {activeIndex + 1} / {jobBasicSections.length}
        </span>
        <button
          type="button"
          disabled={activeIndex === jobBasicSections.length - 1}
          onClick={() => moveSection(1)}
        >
          다음 과정 →
        </button>
      </div>
    </section>
  );
}
