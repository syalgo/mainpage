"use client";
import { useState } from "react";

type Q={number:number;question:string;choices:string[];answer:number;explanation:string};

const questions:Q[]=[
{number:1,question:"소형화, 경량화를 비롯해 음성과 동작인식 등 다양한 기술이 적용되어 장소에 구애받지 않고 컴퓨터를 활용할 수 있도록 몸에 착용하는 컴퓨터를 의미하는 것은?",choices:["웨어러블 컴퓨터","마이크로 컴퓨터","인공지능 컴퓨터","서버 컴퓨터"],answer:0,explanation:"다양한 기술이 적용되어 장소에 구애받지 않고 컴퓨터를 활용할 수 있도록 몸에 착용하는 컴퓨터를 웨어러블 컴퓨터라고 합니다."},
{number:2,question:"디지털 컴퓨터와 아날로그 컴퓨터의 차이점에 관한 설명으로 옳은 것은?",choices:["디지털 컴퓨터는 전류, 전압, 온도 등 다양한 입력 값을 처리하며, 아날로그 컴퓨터는 숫자 데이터를 처리한다.","디지털 컴퓨터는 증폭 회로로 구성되며, 아날로그 컴퓨터는 논리 회로로 구성된다.","아날로그 컴퓨터는 미분이나 적분 연산을 주로 하며, 디지털 컴퓨터는 산술이나 논리 연산을 주로 한다.","아날로그 컴퓨터는 범용이며, 디지털 컴퓨터는 특수 목적용으로 많이 사용된다."],answer:2,explanation:"디지털 컴퓨터는 숫자·문자 데이터를 산술·논리 연산으로 처리하고 논리 회로로 구성됩니다. 아날로그 컴퓨터는 전류·전압·온도 등의 연속적인 데이터를 미·적분 연산으로 처리하며 증폭 회로로 구성됩니다."},
{number:3,question:"자료의 구성 단위에 대한 설명으로 옳지 않은 것은?",choices:["워드(Word)는 명령 처리 단위이며, 전워드(Full Word)는 8Byte이다.","필드(Field)는 파일 구성의 최소 단위이다.","니블(Nibble)은 4개의 비트로 16가지를 표현할 수 있다.","여러 개의 파일이 모여 데이터베이스가 된다."],answer:0,explanation:"전워드(Full Word)는 4Byte입니다. 8Byte의 크기를 갖는 워드는 더블워드(Double Word)입니다."},
{number:4,question:"컴퓨터에서 문자 데이터를 표현하는 방법으로 옳지 않은 것은?",choices:["EBCDIC","Unicode","ASCII","Hamming Code"],answer:3,explanation:"해밍 코드(Hamming Code)는 에러 검출 및 교정의 기능을 갖는 코드로, 문자 데이터를 표현하기 위해 사용하는 코드는 아닙니다."},
{number:5,question:"컴퓨터에서 사용하는 유니코드(Unicode)에 관한 설명으로 옳은 것은?",choices:["표현 가능한 문자수는 최대 256자이다.","문자를 2Byte로 표현한다.","영문자를 7bit, 한글이나 한자를 16bit로 처리한다.","한글은 KS 완성형으로 표현한다."],answer:1,explanation:"유니코드는 데이터의 교환을 원활하게 하기 위해 문자 1개에 부여되는 값을 2Byte(16Bit)로 통일한 국제 표준 코드입니다."}
];

export default function ComputerSystemOverviewStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>3장 컴퓨터 시스템의 개요</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>컴퓨터 시스템의 개요</h2></div>

   <article className="win10-theory-card"><h3><span>01</span> 휴대용 컴퓨터</h3>
    <p>가볍고 크기가 작아 휴대가 가능한 개인용(Personal) 컴퓨터를 말한다.</p>
    <ul>
     <li><b>태블릿PC(Tablet PC)</b> : 노트북의 기능에 PDA의 휴대성을 더한 컴퓨터로, 키보드 대신 터치스크린이나 스타일러스 펜을 입력 장치로 사용함</li>
     <li><b>PDA(Personal Digital Assistant)</b> : 팜톱 컴퓨터의 일종으로 전자수첩 기능, 이동통신 기능, 비서 기능, 개인정보 관리 기능 등을 가진 컴퓨터로 크기가 작아 펜이나 터치 스크린을 입력 방식으로 사용함</li>
     <li><b>웨어러블 컴퓨터(Wearable Computer)</b> : 의류, 시계, 안경 등의 형태로 사람이 몸에 착용하고 다닐 수 있는 컴퓨터. 소형화 및 경량화, 음성과 동작 인식 등 다양한 기술이 적용되어 장소에 구애받지 않고 컴퓨터를 활용할 수 있음</li>
    </ul>
   </article>

   <article className="win10-theory-card"><h3><span>02</span> 컴퓨터의 분류 - 데이터 취급(형태)</h3>
    <ul>
     <li><b>디지털 컴퓨터</b> : 문자나 숫자화된 비연속적인 데이터(디지털형)를 처리하는 컴퓨터로, 사회 각 분야에서 일반적으로 사용함</li>
     <li><b>아날로그 컴퓨터</b> : 온도, 전류, 속도 등과 같이 연속적으로 변화하는 데이터(아날로그형)를 처리하기 위한 특수 목적용 컴퓨터</li>
     <li><b>하이브리드 컴퓨터</b> : 디지털 컴퓨터와 아날로그 컴퓨터의 장점을 혼합하여 만든 컴퓨터</li>
    </ul>
    <table className="win10-table"><thead><tr><th>항목</th><th>디지털 컴퓨터</th><th>아날로그 컴퓨터</th></tr></thead><tbody>
     <tr><th>입력 형태</th><td>숫자, 문자</td><td>전류, 전압, 온도</td></tr>
     <tr><th>출력 형태</th><td>숫자, 문자</td><td>곡선, 그래프</td></tr>
     <tr><th>연산 형식</th><td>산술·논리 연산</td><td>미·적분 연산</td></tr>
     <tr><th>연산 속도</th><td>느림</td><td>빠름</td></tr>
     <tr><th>구성 회로</th><td>논리 회로</td><td>증폭 회로</td></tr>
     <tr><th>프로그래밍</th><td>필요</td><td>불필요</td></tr>
     <tr><th>정밀도</th><td>필요한 한도까지</td><td>제한적임</td></tr>
     <tr><th>기억 기능</th><td>있음</td><td>없음</td></tr>
     <tr><th>적용성</th><td>범용</td><td>특수 목적용</td></tr>
    </tbody></table>
   </article>

   <article className="win10-theory-card"><h3><span>03</span> 자료 구성의 단위</h3>
    <table className="win10-table"><tbody>
     <tr><th>비트(Bit)</th><td>자료(정보) 표현의 최소 단위. 두 가지 상태(0과 1)를 표시하는 2진수 1자리임</td></tr>
     <tr><th>니블(Nibble)</th><td>4개의 비트가 모여 1개의 니블을 구성함. 4비트로 구성되며 16진수 1자리를 표현하기에 적합함</td></tr>
     <tr><th>바이트(Byte)</th><td>문자를 표현하는 최소 단위로 8개의 비트가 모여 1Byte를 구성함. 1Byte는 256(2⁸)가지의 정보를 표현할 수 있음</td></tr>
     <tr><th>워드(Word)</th><td>CPU가 한 번에 처리할 수 있는 명령 단위. 반워드(Half Word) 2Byte, 전워드(Full Word) 4Byte, 더블워드(Double Word) 8Byte</td></tr>
     <tr><th>필드(Field)</th><td>파일 구성의 최소 단위이며 의미 있는 정보를 표현하는 최소 단위. 자료 처리의 최소 단위이며 여러 개의 필드가 모여 레코드가 됨</td></tr>
     <tr><th>레코드(Record)</th><td>하나 이상의 관련된 필드가 모여서 구성됨(논리 레코드)</td></tr>
     <tr><th>블록(Block)</th><td>하나 이상의 논리 레코드가 모여서 구성됨</td></tr>
     <tr><th>파일(File)</th><td>프로그램 구성의 기본 단위로, 여러 레코드가 모여서 구성됨</td></tr>
     <tr><th>데이터베이스(Database)</th><td>여러 개의 관련된 파일(File)의 집합</td></tr>
    </tbody></table>
   </article>

   <article className="win10-theory-card"><h3><span>04</span> 문자 표현 코드</h3>
    <table className="win10-table"><tbody>
     <tr><th>BCD 코드<br/>(2진화 10진)</th><td>하나의 문자를 2개의 Zone 비트와 4개의 Digit 비트로 표현함. 2⁶=64가지의 문자를 표현할 수 있음. 영문 소문자를 표현하지 못함</td></tr>
     <tr><th>ASCII 코드<br/>(미국 표준)</th><td>하나의 문자를 3개의 Zone 비트와 4개의 Digit 비트로 표현하며 영문 대·소문자, 숫자, 문장 부호, 미국 영어에 사용되는 특수 제어 문자를 나타냄. 2⁷=128가지의 문자를 표현할 수 있음. 7비트 코드는 실제로는 패리티 비트를 포함하여 8비트로 사용됨. 데이터 통신 또는 PC의 문자 표현 등에 사용됨. 확장 ASCII 코드는 ASCII에 1bit를 추가한 코드로 특수 기호 외에 문자, 그래픽 기호 등 128개의 문자를 더 표현할 수 있음</td></tr>
     <tr><th>EBCDIC 코드<br/>(확장 2진화 10진)</th><td>BCD 코드를 확장한 것으로 하나의 문자를 4개의 Zone 비트와 4개의 Digit 비트로 표현함. 2⁸=256가지의 문자를 표현할 수 있음. 대형 컴퓨터에서 사용함</td></tr>
     <tr><th>KS X 1005-1<br/>(유니코드)</th><td>전 세계의 모든 문자를 2바이트로 표현할 수 있는 국제 표준 코드로 정보 처리 및 정보 교환용으로 사용함. 데이터의 교환을 원활하게 하기 위하여 문자 1개에 부여된 값을 16비트(2바이트)로 통일함</td></tr>
    </tbody></table>
   </article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>3장 문제</h2></div><div className="win10-quiz-list">
   {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}>
    <div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div>
    <div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div>
    <button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>
    {isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}
   </article>})}
  </div></section>
 </section>
}
