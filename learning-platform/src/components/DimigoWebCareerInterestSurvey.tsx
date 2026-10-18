"use client";

import { useMemo, useState } from "react";
import {
  careerRouteQuestion,
  careerSurveyQuestions,
  careerTracks,
  getCareerRouteSentence,
  makeCareerPlanSamples,
  rankCareerTracks,
  type CareerRoute,
  type CareerTrackId,
} from "@/data/dimigoWebCareerSurvey";
import styles from "./DimigoCareerInterestSurvey.module.css";

const totalSteps = careerSurveyQuestions.length + 1;

export default function DimigoWebCareerInterestSurvey() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => careerSurveyQuestions.map(() => null));
  const [route, setRoute] = useState<CareerRoute | null>(null);
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [chosenTrack, setChosenTrack] = useState<CareerTrackId | null>(null);
  const [copyStatus, setCopyStatus] = useState("");

  const ranking = useMemo(
    () => rankCareerTracks(answers.map((answer) => answer ?? -1)),
    [answers]
  );
  const topThree = ranking.slice(0, 3);
  const resultTrack = ranking.find((track) => track.id === chosenTrack) ?? topThree[0];
  const samples = useMemo(
    () => makeCareerPlanSamples(resultTrack, route ?? "explore"),
    [resultTrack, route]
  );
  const selectedAnswer = step === careerSurveyQuestions.length ? route : answers[step];
  const canProceed = step === careerSurveyQuestions.length ? route !== null : selectedAnswer !== null;

  const primaryReasons = useMemo(() => {
    if (!resultTrack) return [];
    return careerSurveyQuestions
      .map((question, index) => {
        const optionIndex = answers[index];
        const choice = optionIndex === null ? undefined : question.options[optionIndex];
        return {
          title: question.title,
          response: choice?.label ?? "",
          weight: choice?.weights[resultTrack.id] ?? 0,
        };
      })
      .filter((item) => item.weight > 0)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 3);
  }, [answers, resultTrack]);

  const selectAnswer = (index: number) => {
    setAnswers((prev) => prev.map((answer, questionIndex) => questionIndex === step ? index : answer));
  };

  const goNext = () => {
    if (!canProceed) return;
    if (step < totalSteps - 1) {
      setStep((previous) => previous + 1);
      return;
    }
    if (answers.some((answer) => answer === null) || route === null) return;
    setFinished(true);
    setChosenTrack(ranking[0].id);
    setCopyStatus("");
  };

  const reset = () => {
    setAnswers(careerSurveyQuestions.map(() => null));
    setRoute(null);
    setStep(0);
    setFinished(false);
    setChosenTrack(null);
    setCopyStatus("");
  };

  const copyText = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(`${index + 1}번 예시문을 복사했습니다.`);
    } catch {
      setCopyStatus("복사 권한을 확인해 주세요. 예시문을 직접 선택해 복사할 수도 있습니다.");
    }
  };

  return (
    <section className={styles.shell} aria-label="웹프로그래밍과 진로 탐색 설문">
      <header className={styles.intro}>
        <span>09 · CAREER DISCOVERY</span>
        <h2>나에게 맞는 웹 개발 진로 찾기</h2>
        <p>8개의 관심 질문과 1개의 진로 계획 질문에 답하면, 관심이 높은 웹 개발 분야 3가지를 추천하고 선택한 분야의 <strong>취업계획서 예시문 3개</strong>를 보여줍니다.</p>
      </header>

      {!finished ? (
        <div className={styles.quizCard}>
          <div className={styles.progressLine}>
            <span>질문 {step + 1} / {totalSteps}</span>
            <strong>{Math.round((step / totalSteps) * 100)}% 진행</strong>
          </div>
          <div className={styles.progressTrack} aria-hidden="true"><span style={{ width: `${(step / totalSteps) * 100}%` }} /></div>
          {step < careerSurveyQuestions.length ? (
            <>
              <div className={styles.questionHead}>
                <span>관심 분야 탐색</span>
                <h3>{careerSurveyQuestions[step].title}</h3>
                <p>{careerSurveyQuestions[step].description}</p>
              </div>
              <div className={styles.choiceGrid} role="radiogroup" aria-label={careerSurveyQuestions[step].title}>
                {careerSurveyQuestions[step].options.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    className={`${styles.choice} ${answers[step] === index ? styles.chosen : ""}`}
                    role="radio"
                    aria-checked={answers[step] === index}
                    onClick={() => selectAnswer(index)}
                  >
                    <span className={styles.choiceMarker}>{answers[step] === index ? "✓" : String.fromCharCode(65 + index)}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={styles.questionHead}>
                <span>진로 계획</span>
                <h3>{careerRouteQuestion.title}</h3>
                <p>선택한 경로에 따라 아래 취업계획서 예시문의 졸업 후 계획이 달라집니다.</p>
              </div>
              <div className={styles.choiceGrid} role="radiogroup" aria-label={careerRouteQuestion.title}>
                {careerRouteQuestion.options.map((option, index) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`${styles.choice} ${route === option.value ? styles.chosen : ""}`}
                    role="radio"
                    aria-checked={route === option.value}
                    onClick={() => setRoute(option.value)}
                  >
                    <span className={styles.choiceMarker}>{route === option.value ? "✓" : String.fromCharCode(65 + index)}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          <div className={styles.quizFooter}>
            <button type="button" className={styles.secondaryButton} disabled={step === 0} onClick={() => setStep((previous) => Math.max(previous - 1, 0))}>
              ← 이전 질문
            </button>
            <button type="button" className={styles.primaryButton} disabled={!canProceed} onClick={goNext}>
              {step === totalSteps - 1 ? "분석 결과 확인 →" : "다음 질문 →"}
            </button>
          </div>
          <p className={styles.privacy}>이 설문은 탐색을 위한 간단한 자기보고형 질문입니다. 답변은 이 화면에서만 계산하며 서버에 전송하거나 저장하지 않습니다.</p>
        </div>
      ) : (
        <div className={styles.results} aria-live="polite">
          <div className={styles.summaryHead}>
            <div>
              <span>설문 완료 · 관심 분야 분석</span>
              <h3>가장 관심이 높은 분야는 <em>{topThree[0].title}</em>입니다.</h3>
              <p>정답이나 적성검사 결과가 아니라, 선택한 답변과 각 분야의 연관성을 비교한 추천입니다. 아래에서 2·3순위 분야의 예시문도 확인할 수 있습니다.</p>
            </div>
            <button type="button" className={styles.secondaryButton} onClick={reset}>설문 다시 하기</button>
          </div>

          <div className={styles.rankGrid} aria-label="관심 분야 상위 3개">
            {topThree.map((track, index) => (
              <button
                type="button"
                key={track.id}
                className={`${styles.rankCard} ${resultTrack.id === track.id ? styles.activeRank : ""}`}
                onClick={() => { setChosenTrack(track.id); setCopyStatus(""); }}
                aria-pressed={resultTrack.id === track.id}
              >
                <span>{index + 1}순위 · 관심 일치 점수 {track.score}점</span>
                <strong>{track.title}</strong>
                <p>{track.description}</p>
                <span className={styles.rankSelect}>{resultTrack.id === track.id ? "예시문 확인 중 ✓" : "이 분야의 예시문 보기 →"}</span>
              </button>
            ))}
          </div>
          <div className={styles.miniChart} aria-label="상위 분야 관심 점수 비교">
            {topThree.map((track) => (
              <div key={track.id} className={styles.barLine}>
                <span>{track.title}</span>
                <div aria-hidden="true"><i style={{ width: `${(track.score / Math.max(topThree[0].score, 1)) * 100}%` }} /></div>
                <b>{track.score}</b>
              </div>
            ))}
          </div>
          <p className={styles.scoreNote}>점수는 문항별 관심 선택에 부여한 가중치의 합계이며, 취업 가능성이나 능력을 뜻하는 백분율이 아닙니다. 동점인 분야는 고정된 순서로 표시됩니다.</p>

          <div className={styles.recommendation}>
            <div>
              <span>선택한 분야</span>
              <h4>{resultTrack.title}</h4>
              <p>{resultTrack.description}</p>
              <dl>
                <div><dt>추천 직무</dt><dd>{resultTrack.role}</dd></div>
                <div><dt>기초 학습</dt><dd>{resultTrack.basics}</dd></div>
                <div><dt>심화 학습</dt><dd>{resultTrack.advanced}</dd></div>
                <div><dt>도전해 볼 프로젝트</dt><dd>{resultTrack.project}</dd></div>
              </dl>
            </div>
            <aside>
              <strong>이 분야가 추천된 이유</strong>
              {primaryReasons.length > 0 ? (
                <ul>{primaryReasons.map((reason) => <li key={reason.title}>{reason.response}</li>)}</ul>
              ) : <p>응답에서 드러난 관심 영역을 참고하세요.</p>}
              <p className={styles.routeChoice}><b>졸업 후 계획</b> {getCareerRouteSentence(route ?? "explore")}</p>
            </aside>
          </div>

          <div className={styles.examplesHead}>
            <span>CAREER PLAN · 3 EXAMPLES</span>
            <h4>{resultTrack.title} 취업(창업)계획서 예시</h4>
            <p>서로 다른 강조점의 예시 3개입니다. 제시된 예시 분량(공백 포함 약 544자)을 참고하여 구성했으며 실제 모집요강의 공식 글자 수 제한을 뜻하지는 않습니다.</p>
          </div>
          <div className={styles.exampleGrid}>
            {samples.map((sample, index) => (
              <article className={styles.exampleCard} key={sample.title}>
                <div className={styles.exampleHeader}>
                  <div><strong>{sample.title}</strong><span>{sample.focus}</span></div>
                  <button type="button" className={styles.copyButton} onClick={() => void copyText(sample.body, index)}>문장 복사</button>
                </div>
                <p>{sample.body}</p>
                <div className={styles.charCount}>공백 포함 {sample.body.length}자 · 공백 제외 {sample.body.replace(/\s/g, "").length}자</div>
              </article>
            ))}
          </div>
          {copyStatus && <p className={styles.copyStatus} role="status">{copyStatus}</p>}
          <div className={styles.caution}>
            <strong>작성할 때 반드시 확인하세요</strong>
            <p>이 예시들은 제출용 완성본이 아니라 작성 방향을 비교하는 학습 자료입니다. 학생이 실제로 해 본 활동을 임의로 만들어 넣지 말고, 본인의 관심과 가능한 학습 계획으로 수정하세요. 웹프로그래밍과 교육과정, 동아리, 자격증 등은 해당 학년도 실제 운영 여부를 확인한 뒤 구체화하세요.</p>
          </div>
          <div className={styles.bottomAction}><button className={styles.secondaryButton} type="button" onClick={reset}>← 다른 답변으로 다시 분석하기</button></div>
        </div>
      )}
    </section>
  );
}
