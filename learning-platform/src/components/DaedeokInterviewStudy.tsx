"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  coreChecklist,
  interviewGroups,
  interviewQuestions,
  mockFollowUps,
  rubric,
} from "@/data/daedeokInterview";
import styles from "./DaedeokInterviewStudy.module.css";
import { useDaedeokInterviewProgress } from "@/lib/useDaedeokInterviewProgress";

export default function DaedeokInterviewStudy() {
  const [section, setSection] = useState("all");
  const [search, setSearch] = useState("");
  const [priorityOnly, setPriorityOnly] = useState(false);
  const [opened, setOpened] = useState<number[]>([]);
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0]);

  const {
    progress, loadStatus, loadError, saveStatus, saveError,
    saveNow, legacy, importLegacy, dismissLegacy,
    toggleCompleted, toggleCore, updateNote, clearCore,
  } = useDaedeokInterviewProgress();

  const visibleQuestions = useMemo(() => {
    const keyword = search.trim().toLocaleLowerCase();
    return interviewQuestions.filter(
      (question) =>
        (section === "all" || question.sectionId === section) &&
        (!priorityOnly || question.priority) &&
        (!keyword ||
          question.prompt.toLocaleLowerCase().includes(keyword) ||
          question.category.toLocaleLowerCase().includes(keyword)),
    );
  }, [section, search, priorityOnly]);

  const completedCount = progress.completed.length;
  const checkedCore = progress.checklist.length;
  const scoreTotal = scores.reduce((sum, n) => sum + n, 0);

  function copyChecklist() {
    const text = coreChecklist
      .map((question, index) => `${progress.checklist.includes(index) ? "[완료]" : "[미완료]"} ${index + 1}. ${question}`)
      .join("\n");
    if (navigator.clipboard) void navigator.clipboard.writeText(text);
  }

  function changeSection(next: string) {
    setSection(next);
    document.getElementById("interview-questions")?.scrollIntoView({ behavior: "smooth" });
  }

  if (loadStatus !== "ready") {
    return (
      <section className="access-state" aria-live="polite">
        <span className="eyebrow">DAEDEOK INTERVIEW · FIREBASE</span>
        <h1>{loadStatus === "loading" ? "저장된 답변을 불러오는 중입니다." : "답변을 불러오지 못했습니다."}</h1>
        <p>{loadStatus === "loading"
          ? "로그인 계정에 저장된 면접 준비 기록을 확인하고 있습니다."
          : loadError + " 저장된 기록을 덮어쓰지 않도록 답변 입력을 일시 중단했습니다."}</p>
        {loadStatus === "error" && (
          <button type="button" className="primary-button" onClick={() => window.location.reload()}>
            다시 불러오기
          </button>
        )}
      </section>
    );
  }

  return (
    <main className={styles.page} id="interview-top">
      <div className={styles.topbar}>
        <div>
          <span className="eyebrow">2027 ADMISSION · DAEDEOK SOFTWARE</span>
          <h1>심층 면접 준비</h1>
          <p>공식 평가 요소 5개를 바탕으로 만든 예상 질문 60개와 실전 모의면접 훈련</p>
        </div>
        <Link href="/specialized/daedeok-software" className="secondary-button">
          ← 대덕소마고 메뉴
        </Link>
      </div>

      <div className={styles.saveBanner} role="status" aria-live="polite">
        <div>
          <strong>Firebase 계정별 자동 저장</strong>
          <span>답변 메모와 준비 완료 표시가 로그인한 학생의 계정에 저장됩니다. 다른 기기에서도 같은 계정으로 이어서 공부할 수 있습니다.</span>
        </div>
        <div className={styles.saveRight}>
          <span className={saveStatus === "error" ? styles.saveError : styles.saveStatus}>
            {saveStatus === "saved" && "✓ 모든 변경사항 저장됨"}
            {saveStatus === "pending" && "● 저장 대기 중"}
            {saveStatus === "saving" && "↻ 서버에 저장 중"}
            {saveStatus === "error" && "⚠ 저장 실패"}
          </span>
          {(saveStatus === "pending" || saveStatus === "error") && (
            <button type="button" className={styles.retryButton} onClick={() => { void saveNow(); }}>
              {saveStatus === "error" ? "다시 저장" : "지금 저장"}
            </button>
          )}
          {saveStatus === "error" && <small className={styles.saveError}>{saveError}</small>}
        </div>
      </div>

      {legacy && (
        <div className={styles.legacyNotice}>
          <div>
            <strong>이 브라우저에 이전 방식으로 저장된 답변이 있습니다.</strong>
            <p>본인의 예전 기록이라면 Firebase로 가져올 수 있습니다. 다른 학생이 사용했던 브라우저라면 가져오지 마세요. 기존 서버 답변은 덮어쓰지 않습니다.</p>
          </div>
          <div className={styles.legacyActions}>
            <button type="button" onClick={importLegacy}>내 이전 기록 가져오기</button>
            <button type="button" onClick={dismissLegacy}>나중에</button>
          </div>
        </div>
      )}

      <div className={styles.heroStats}>
        <div><strong>5</strong><span>공식 평가 요소</span></div>
        <div><strong>50</strong><span>기본 예상 질문</span></div>
        <div><strong>10</strong><span>상황형 심화 질문</span></div>
        <div><strong>{completedCount}<small> / 60</small></strong><span>답변 준비 완료</span></div>
      </div>

      <nav className={styles.quickNav} aria-label="면접 준비 단원 이동">
        <a href="#interview-overview">평가 방향</a>
        <a href="#interview-questions">예상 질문 60개</a>
        <a href="#interview-mock">꼬리 질문 연습</a>
        <a href="#interview-core">핵심 12문항</a>
        <a href="#interview-rubric">모의면접 평가표</a>
      </nav>

      <section id="interview-overview" className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.step}>01 / EVALUATION</span>
          <h2>학교가 확인하는 면접 평가 방향</h2>
          <p>
            학교생활에 대한 자세, 학업의지, 소프트웨어 이해도, 소프트웨어에 대한
            열정 및 발전가능성을 종합적으로 심사합니다.
          </p>
        </div>
        <div className={styles.overviewGrid}>
          {interviewGroups.slice(0, 5).map((group, index) => (
            <article key={group.id} className={styles.overviewCard}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <h3>{group.title}</h3>
              <strong>{group.goal}</strong>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.caution}>
          이 페이지의 60문항은 평가 요소와 일반적인 면접 유형을 바탕으로 자체 구성한
          <b> 예상 질문</b>이며, 학교가 공식 공개한 기출문제 또는 실제 채점표가 아닙니다.
          일반전형의 별도 컴퓨팅 사고력 측정과 구분하여, 이 페이지는 <b>면접에서 말로 설명하는 연습</b>에 집중합니다.
        </p>
      </section>

      <section id="interview-questions" className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.step}>02 / QUESTION BANK</span>
          <h2>영역별 예상 질문 60문항</h2>
          <p>질문을 읽고 자신의 경험과 근거를 정리해 보세요. ★는 우선 준비할 질문입니다.</p>
        </div>
        <div className={styles.questionPanel}>
          <div className={styles.progressHead}>
            <div>
              <strong>나의 답변 준비 현황</strong>
              <span>질문을 스스로 설명할 수 있게 되면 &apos;준비 완료&apos;를 체크하세요.</span>
            </div>
            <b>{completedCount} / 60</b>
          </div>
          <div className={styles.track} role="progressbar" aria-label="질문 준비 완료율" aria-valuenow={completedCount} aria-valuemin={0} aria-valuemax={60}>
            <div style={{ width: `${(completedCount / 60) * 100}%` }} />
          </div>
          <div className={styles.filters}>
            <label className={styles.searchLabel}>
              <span className={styles.srOnly}>질문 검색</span>
              <input
                type="search"
                placeholder="질문 또는 키워드 검색"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <label className={styles.filterCheckbox}>
              <input type="checkbox" checked={priorityOnly} onChange={(event) => setPriorityOnly(event.target.checked)} />
              ★ 핵심 질문만
            </label>
          </div>
          <div className={styles.categoryTabs} aria-label="질문 영역 선택">
            <button type="button" className={section === "all" ? styles.active : ""} onClick={() => changeSection("all")}>
              전체 <small>60</small>
            </button>
            {interviewGroups.map((group) => (
              <button key={group.id} type="button" className={section === group.id ? styles.active : ""} onClick={() => changeSection(group.id)}>
                {group.title} <small>10</small>
              </button>
            ))}
          </div>
          <p className={styles.resultCount}>검색 결과 <b>{visibleQuestions.length}문항</b></p>
        </div>

        <div className={styles.questionList}>
          {visibleQuestions.map((question) => {
            const expanded = opened.includes(question.id);
            const completed = progress.completed.includes(question.id);
            return (
              <article className={styles.questionCard} key={question.id}>
                <div className={styles.questionTop}>
                  <span className={styles.questionNumber}>Q{String(question.id).padStart(2, "0")}</span>
                  <span className={styles.questionCategory}>{question.category}</span>
                  {question.priority && <span className={styles.priority}>★ 핵심</span>}
                  {completed && <span className={styles.done}>✓ 준비 완료</span>}
                </div>
                <h3>{question.prompt}</h3>
                <div className={styles.questionActions}>
                  <button
                    type="button"
                    className={styles.noteButton}
                    aria-expanded={expanded}
                    onClick={() => setOpened((current) => expanded ? current.filter((id) => id !== question.id) : [...current, question.id])}
                  >
                    {expanded ? "답변 메모 접기 ↑" : "내 답변 정리하기 ↓"}
                  </button>
                  <label className={styles.completeToggle}>
                    <input type="checkbox" checked={completed} onChange={() => toggleCompleted(question.id)} />
                    준비 완료
                  </label>
                </div>
                {expanded && (
                  <div className={styles.noteArea}>
                    <label htmlFor={`interview-answer-${question.id}`}>나의 답변 메모</label>
                    <p>핵심 주장 → 구체적인 경험이나 사례 → 배운 점·앞으로의 계획 순서로 정리하세요.</p>
                    <textarea
                      id={`interview-answer-${question.id}`}
                      value={progress.notes[question.id] ?? ""}
                      onChange={(event) => updateNote(question.id, event.target.value)}
                      onBlur={() => { void saveNow(); }}
                      maxLength={3000}
                      rows={5}
                      placeholder="나의 실제 경험을 바탕으로 답변을 적어 보세요."
                    />
                    <small>답변은 로그인한 학생의 Firebase 계정에 자동 저장됩니다. 저장 완료 표시를 확인해 주세요.</small>
                  </div>
                )}
              </article>
            );
          })}
          {visibleQuestions.length === 0 && (
            <div className={styles.empty}>일치하는 질문이 없습니다. 검색어 또는 선택한 영역을 바꿔 주세요.</div>
          )}
        </div>
      </section>

      <section id="interview-mock" className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.step}>03 / MOCK INTERVIEW</span>
          <h2>실전 꼬리 질문 연습</h2>
          <p>단순히 준비한 문장을 암기하기보다 하나의 답변에서 이어지는 질문에 대응하는 연습입니다.</p>
        </div>
        <div className={styles.mockGrid}>
          <div className={styles.mockDialogue}>
            <span className={styles.smallLabel}>면접관 · 기본 질문</span>
            <p>지금까지 직접 만든 프로그램 중 가장 기억에 남는 프로그램을 소개해 주세요.</p>
            <span className={styles.smallLabel}>학생 · 답변 예시</span>
            <p>
              저는 파이썬을 이용해 숫자 야구 게임을 만들었습니다.
              컴퓨터가 임의의 숫자를 정하고, 사용자가 숫자를 입력하면
              스트라이크와 볼을 알려주는 프로그램입니다.
            </p>
            <div className={styles.tip}>
              <b>연습 포인트</b>
              <span>만들게 된 이유 → 직접 구현한 부분 → 문제와 해결 → 개선할 점을 말로 설명합니다.</span>
            </div>
          </div>
          <div className={styles.followupPanel}>
            <h3>이어서 나올 수 있는 질문</h3>
            <ol>
              {mockFollowUps.map((question, index) => <li key={index}>{question}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="interview-core" className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.step}>04 / ESSENTIAL 12</span>
          <h2>가장 먼저 준비할 핵심 12문항</h2>
          <p>60개 문항을 모두 외우기보다, 먼저 아래 질문에 본인의 말로 답하는 연습을 하세요.</p>
        </div>
        <div className={styles.corePanel}>
          <div className={styles.coreProgress}>
            <div><strong>필수 답변 준비표</strong><span>체크한 항목은 로그인한 학생의 계정에 저장됩니다.</span></div>
            <div><b>{checkedCore}</b> / 12</div>
          </div>
          <div className={styles.track}><div style={{ width: `${(checkedCore / 12) * 100}%` }} /></div>
          <div className={styles.coreList}>
            {coreChecklist.map((question, index) => (
              <label key={index} className={styles.coreItem}>
                <input type="checkbox" checked={progress.checklist.includes(index)} onChange={() => toggleCore(index)} />
                <span className={styles.coreIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span>{question}</span>
              </label>
            ))}
          </div>
          <div className={styles.coreActions}>
            <button type="button" onClick={copyChecklist}>준비 현황 복사</button>
            <button type="button" onClick={clearCore}>체크 초기화</button>
          </div>
        </div>
      </section>

      <section id="interview-rubric" className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.step}>05 / FEEDBACK</span>
          <h2>모의면접 자가 평가</h2>
          <p>아래는 수업용으로 만든 25점 평가표이며, 학교 공식 채점 기준이 아닙니다.</p>
        </div>
        <div className={styles.rubricPanel}>
          {rubric.map((item, index) => (
            <div className={styles.rubricRow} key={item.title}>
              <div><strong>{item.title}</strong><p>{item.detail}</p></div>
              <label>
                <span className={styles.srOnly}>{item.title} 점수</span>
                <select
                  value={scores[index]}
                  onChange={(event) => setScores((current) => current.map((value, i) => i === index ? Number(event.target.value) : value))}
                >
                  {[0, 1, 2, 3, 4, 5].map((point) => <option key={point} value={point}>{point}점</option>)}
                </select>
              </label>
            </div>
          ))}
          <div className={styles.rubricTotal}>
            <div><strong>모의면접 평가 합계</strong><span>스스로 또는 선생님과 함께 점검해 보세요.</span></div>
            <b>{scoreTotal}<small> / 25점</small></b>
          </div>
        </div>
        <div className={styles.finishNote}>
          <h3>추천 연습 순서</h3>
          <p>
            1차: 핵심 12문항의 답변 뼈대 만들기 → 2차: 5개 평가 영역의 경험 질문 연습
            → 3차: 실전 상황형 10문항 → 4차: 꼬리 질문과 자가 평가.
            기본 질문은 40~60초, 설명형 질문은 2~3분을 목표로 연습해 보세요.
            이는 공식 면접 제한시간이 아닌 수업용 권장 시간입니다.
          </p>
        </div>
      </section>

      <div className={styles.bottomLink}>
        <Link href="/specialized/daedeok-software">← 대덕소마고 입학전형 대비로 돌아가기</Link>
      </div>
      <a href="#interview-top" className={styles.toTop} aria-label="페이지 맨 위로 이동">TOP ↑</a>
    </main>
  );
}
