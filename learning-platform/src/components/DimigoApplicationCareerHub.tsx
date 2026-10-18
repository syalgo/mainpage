"use client";

import { useState } from "react";
import Link from "next/link";
import DimigoApplicationWritingStudy from "@/components/DimigoApplicationWritingStudy";
import DimigoHackingCareerPlan from "@/components/DimigoHackingCareerPlan";
import styles from "./DimigoApplicationCareer.module.css";

type DocumentKind = "personal" | "career";
type Department = "web" | "hacking" | "business" | "content";

const documents: { id: DocumentKind; index: string; title: string; description: string }[] = [
  { id: "personal", index: "01", title: "자기소개서", description: "교과 활동, 교과 외 활동, 도덕·인성 문항의 실제 경험과 글쓰기 원칙을 살펴봅니다." },
  { id: "career", index: "02", title: "취업(창업)계획서", description: "학과 교육과정, 진학·취업 현황, 산업 트렌드를 참고하여 구체적인 진로 목표를 세웁니다." },
];
const departments: { id: Department; title: string; description: string }[] = [
  { id: "web", title: "웹프로그래밍과", description: "웹서비스·소프트웨어 개발에 관심 있는 학생" },
  { id: "hacking", title: "해킹방어과", description: "사이버보안·취약점 분석·보안 소프트웨어에 관심 있는 학생" },
  { id: "business", title: "E-비즈니스과", description: "IT 비즈니스·데이터·서비스 기획에 관심 있는 학생" },
  { id: "content", title: "디지털콘텐츠과", description: "디지털콘텐츠·디자인·제작에 관심 있는 학생" },
];

export default function DimigoApplicationCareerHub() {
  const [document, setDocument] = useState<DocumentKind | null>(null);
  const [department, setDepartment] = useState<Department | null>(null);
  const selectedDocument = documents.find((item) => item.id === document);
  const selectedDepartment = departments.find((item) => item.id === department);

  return (
    <div className={styles.hub}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>DIMIGO · APPLICATION WRITING</span>
        <h1>자기소개서, 취업(창업)계획서 작성</h1>
        <p>작성할 서류와 지원 학과를 순서대로 선택한 후, 학과별 참고 자료와 문항 작성 방법을 확인합니다.</p>
      </header>

      <nav className={styles.crumbs} aria-label="현재 위치">
        <Link href="/specialized" className={styles.backLink}>디미고 입학전형 대비</Link>
        <span aria-hidden="true">/</span>
        {document ? (
          <button type="button" onClick={() => { setDocument(null); setDepartment(null); }}>서류 선택</button>
        ) : <strong>서류 선택</strong>}
        {selectedDocument && (
          <>
            <span aria-hidden="true">/</span>
            {department ? <button type="button" onClick={() => setDepartment(null)}>{selectedDocument.title}</button> : <strong>{selectedDocument.title}</strong>}
          </>
        )}
        {selectedDepartment && <><span aria-hidden="true">/</span><strong>{selectedDepartment.title}</strong></>}
      </nav>

      {!document && (
        <section className={styles.panel}>
          <h2>1. 작성할 서류를 선택하세요</h2>
          <p>자기소개서와 취업(창업)계획서는 서로 다른 서류입니다.</p>
          <div className={styles.cardGrid}>
            {documents.map((item) => (
              <button className={styles.card} type="button" key={item.id} onClick={() => { setDocument(item.id); setDepartment(null); }}>
                <span>{item.index} · DOCUMENT</span>
                <b>{item.title}</b>
                <p>{item.description}</p>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {document && !department && (
        <section className={styles.panel}>
          <h2>2. 지원 학과를 선택하세요</h2>
          <p><strong>{selectedDocument?.title}</strong> 자료를 확인할 학과를 선택하세요.</p>
          <div className={styles.cardGrid}>
            {departments.map((item, index) => (
              <button className={styles.card} type="button" key={item.id} onClick={() => setDepartment(item.id)}>
                <span>{String(index + 1).padStart(2, "0")} · DEPARTMENT</span>
                <b>{item.title}</b>
                <p>{item.description}</p>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {document && department && (
        <>
          <div className={styles.contentTitle}>
            <b>{selectedDocument?.title} · {selectedDepartment?.title}</b>
            <h2>{selectedDepartment?.title} {selectedDocument?.title}</h2>
            <p>{document === "personal" ? "세 문항의 공통 작성 원칙과 실전 예시입니다. 문항 자체는 지원 학과와 관계없이 동일하게 적용됩니다." : "지원 학과의 진로와 교육과정을 살펴보고, 구체적인 취업(창업)계획을 세우는 공간입니다."}</p>
          </div>

          {document === "personal" ? (
            <DimigoApplicationWritingStudy />
          ) : department === "hacking" ? (
            <DimigoHackingCareerPlan />
          ) : (
            <section className={styles.empty}>
              <h2>{selectedDepartment?.title} 취업(창업)계획서</h2>
              <p>학과별 공식 교육과정과 졸업생 진로 현황을 검증하여 참고 자료를 추가할 공간입니다.<br />다른 학과의 정보를 이 학과의 실적으로 표기하지 않습니다.</p>
            </section>
          )}
          <button type="button" className={styles.backLink} onClick={() => setDepartment(null)}>← 다른 학과 선택</button>
        </>
      )}
    </div>
  );
}
