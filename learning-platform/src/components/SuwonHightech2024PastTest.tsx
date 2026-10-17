import SuwonQuestionVisual from "@/components/SuwonQuestionVisual";
import { questionsPart1 } from "@/data/suwon-2024/part1";
import { questionsPart2 } from "@/data/suwon-2024/part2";
import { questionsPart3 } from "@/data/suwon-2024/part3";
import { questionsPart4 } from "@/data/suwon-2024/part4";
import { questionsPart5 } from "@/data/suwon-2024/part5";
import { questionsPart6 } from "@/data/suwon-2024/part6";
import { questionsPart7 } from "@/data/suwon-2024/part7";
import { questionsPart8 } from "@/data/suwon-2024/part8";
import { questionsPart9 } from "@/data/suwon-2024/part9";
import { questionsPart10 } from "@/data/suwon-2024/part10";
import { questionsTextPart1 } from "@/data/suwon-2024-text/part1";
import { questionsTextPart2 } from "@/data/suwon-2024-text/part2";
import { questionsTextPart3 } from "@/data/suwon-2024-text/part3";
import { questionsTextPart4 } from "@/data/suwon-2024-text/part4";
import { questionsTextPart5 } from "@/data/suwon-2024-text/part5";

const sourceQuestions = [
  ...questionsPart1,...questionsPart2,...questionsPart3,...questionsPart4,...questionsPart5,
  ...questionsPart6,...questionsPart7,...questionsPart8,...questionsPart9,...questionsPart10,
];

const questions = [
  ...questionsTextPart1,...questionsTextPart2,...questionsTextPart3,...questionsTextPart4,...questionsTextPart5,
];

const imageByNumber = new Map(sourceQuestions.map((question) => [question.number, question.image]));

function TextLines({ text }: { text: string }) {
  return (
    <div className="suwon-2024-question-text">
      {text.split("\n").map((line, index) => (
        <p
          key={index}
          className={
            line === "<보기>" || line === "＜보기＞" || line === "<조건>"
              ? "section-label"
              : /^[①②③④⑤]/.test(line)
                ? "choice-line"
                : /^[㉠㉡㉢㉣㉤㉥㉦㉧]/.test(line)
                  ? "condition-line"
                  : line.startsWith("※") || line.startsWith("*")
                    ? "note-line"
                    : ""
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function SuwonHightech2024PastTest() {
  return (
    <section className="suwon-2024-page">
      <header className="suwon-2024-hero">
        <span className="eyebrow">2024 GSAT</span>
        <h1>24년 기출</h1>
      </header>

      <nav className="suwon-2024-jump" aria-label="문제 구간 바로가기">
        <a href="#q1">1~10</a><a href="#q11">11~20</a><a href="#q21">21~30</a><a href="#q31">31~40</a><a href="#q41">41~50</a>
      </nav>

      <div className="suwon-2024-list">
        {questions.map((question) => {
          const sourceImage = imageByNumber.get(question.number);
          const lines = question.text.split("\n");
          const firstLine = lines[0] ?? "";
          const restText = lines.slice(1).join("\n");

          return (
            <article className="suwon-2024-question" id={`q${question.number}`} key={question.number}>
              <div className="suwon-2024-question-head">
                <span>{String(question.number).padStart(2, "0")}</span>
                <strong>{question.category}</strong>
              </div>

              {question.context ? <div className="suwon-2024-context">{question.context}</div> : null}

              {question.visual && sourceImage ? (
                question.context ? (
                  <>
                    <SuwonQuestionVisual number={question.number} src={sourceImage} />
                    <TextLines text={question.text} />
                  </>
                ) : (
                  <>
                    <TextLines text={firstLine} />
                    <SuwonQuestionVisual number={question.number} src={sourceImage} />
                    {restText ? <TextLines text={restText} /> : null}
                  </>
                )
              ) : (
                <TextLines text={question.text} />
              )}

              <details className="suwon-2024-answer">
                <summary>정답 확인</summary>
                <div><span>정답</span><strong>{question.answer}</strong></div>
              </details>
            </article>
          );
        })}
      </div>
    </section>
  );
}
