"use client";

import Link from "next/link";
import { useState } from "react";

type Unit = {
  roman: string;
  title: string;
  description: string;
};

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

const sections = [
  {
    tag: "CONCEPT",
    title: "개념 보충",
    description: "자습서에서 교과서보다 자세하게 설명한 개념과 보충 내용을 정리합니다.",
  },
  {
    tag: "BASIC",
    title: "기본 문제",
    description: "핵심 개념을 정확히 이해했는지 확인하는 기본 문제를 풉니다.",
  },
  {
    tag: "APPLIED",
    title: "응용 문제",
    description: "여러 개념을 함께 적용하거나 상황을 분석해야 하는 문제를 풉니다.",
  },
  {
    tag: "ADVANCED",
    title: "심화 문제",
    description: "난도가 높은 사고력·서술형·종합 문제를 중심으로 학습합니다.",
  },
];

export default function MiddleSchoolInfoPractice() {
  const [activeUnit, setActiveUnit] = useState(0);
  const unit = units[activeUnit];

  return (
    <section className="practice-page">
      <div className="textbook-topbar">
        <div>
          <span className="eyebrow">MIDDLE SCHOOL INFORMATION · PRACTICE</span>
          <h1>중학교 정보 문제풀이</h1>
          <p>
            정보 자습서 4권의 내용을 책별로 나누지 않고, 2022 개정 정보의 5개 대단원에 맞춰
            보충 설명과 문제를 통합해 학습합니다.
          </p>
        </div>
        <Link className="secondary-button" href="/specialized" prefetch={false}>
          ← 특성화고 대비반
        </Link>
      </div>

      <div className="practice-unit-tabs">
        {units.map((item, index) => (
          <button
            type="button"
            key={item.roman}
            className={activeUnit === index ? "active" : ""}
            onClick={() => setActiveUnit(index)}
          >
            <span>{item.roman}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <section className="practice-unit-heading">
        <span className="eyebrow">{unit.roman} UNIT</span>
        <h2>{unit.title}</h2>
        <p>{unit.description}</p>
      </section>

      <div className="practice-section-grid">
        {sections.map((section) => (
          <article className="practice-section-card" key={section.title}>
            <span className="content-number">{section.tag}</span>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <div className="practice-empty-state">
              <strong>자료 준비 중</strong>
              <span>자습서 PDF가 등록되면 이 영역에 순서대로 반영됩니다.</span>
            </div>
          </article>
        ))}
      </div>

      <div className="practice-structure-note">
        <strong>자료 등록 방식</strong>
        <p>
          각 문제에는 단원·소단원·유형·난이도·자습서 출처 정보를 내부적으로 저장합니다.
          학생 화면에서는 출판사나 책 순서보다 학습 단원과 난이도를 중심으로 보여줄 예정입니다.
        </p>
      </div>
    </section>
  );
}
