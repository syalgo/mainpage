/* eslint-disable @next/next/no-img-element */
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

const questions = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
  ...questionsPart5,
  ...questionsPart6,
  ...questionsPart7,
  ...questionsPart8,
  ...questionsPart9,
  ...questionsPart10,
];

export default function SuwonHightech2024PastTest() {
  return (
    <section className="suwon-2024-page">
      <header className="suwon-2024-hero">
        <span className="eyebrow">2024 GSAT</span>
        <h1>24년 기출</h1>
      </header>

      <nav className="suwon-2024-jump" aria-label="문제 구간 바로가기">
        <a href="#q1">1~10</a>
        <a href="#q11">11~20</a>
        <a href="#q21">21~30</a>
        <a href="#q31">31~40</a>
        <a href="#q41">41~50</a>
      </nav>

      <div className="suwon-2024-list">
        {questions.map((question) => (
          <article className="suwon-2024-question" id={`q${question.number}`} key={question.number}>
            <div className="suwon-2024-question-head">
              <span>{String(question.number).padStart(2, "0")}</span>
              <strong>{question.category}</strong>
            </div>

            <div className="suwon-2024-source">
              <img
                src={question.image}
                alt={`24년 기출 ${question.number}번 문제`}
                loading="lazy"
              />
            </div>

            <details className="suwon-2024-answer">
              <summary>정답 확인</summary>
              <div>
                <span>정답</span>
                <strong>{question.answer}</strong>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
