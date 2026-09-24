"use client";

import Link from "next/link";
import { useState } from "react";

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

const sections = [
  {
    tag: "CONCEPT",
    title: "개념 보충",
    description: "해당 자습서에서 교과서보다 자세히 설명한 개념과 보충 내용을 정리합니다.",
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
  const [activePublisher, setActivePublisher] = useState(0);
  const [activeUnit, setActiveUnit] = useState(0);

  const publisher = publishers[activePublisher];
  const unit = units[activeUnit];

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
              onClick={() => {
                setActivePublisher(index);
                setActiveUnit(0);
              }}
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
              onClick={() => setActiveUnit(index)}
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

      <div className="practice-section-grid">
        {sections.map((section) => (
          <article className="practice-section-card" key={section.title}>
            <span className="content-number">{section.tag}</span>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <div className="practice-empty-state">
              <strong>{publisher.name} · {unit.roman}단원 자료 준비 중</strong>
              <span>
                해당 출판사의 자습서 PDF가 등록되면 이 단원의 자료와 문제를 별도로 반영합니다.
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="practice-structure-note">
        <strong>출판사별 독립 관리</strong>
        <p>
          금성·길벗·씨마스·천재의 문제는 서로 합치지 않고 출판사별로 구분합니다.
          각 문제에는 출판사, 단원, 소단원, 문제 유형, 난이도 정보를 연결해 관리할 예정입니다.
        </p>
      </div>
    </section>
  );
}
