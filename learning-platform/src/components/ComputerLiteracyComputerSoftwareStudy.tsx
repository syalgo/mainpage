"use client";
import { useState } from "react";
type Q={number:number;question:string;choices:string[];answer:number;explanation:string};
const questions:Q[]=[
{number:1,question:"아래의 ㉠, ㉡, ㉢에 해당하는 소프트웨어의 종류를 바르게 짝지어 나열한 것은? 홍길동은 어떤 프로그램이 좋은지 알아보기 위해 ㉠ 누구나 임의의 용도로 사용할 수 있는 프로그램과 ㉡ 주로 일정 기간 동안 일부 기능을 제한한 상태로 사용하는 프로그램을 먼저 사용해 보고, 가장 적합한 ㉢ 프로그램을 구입하여 사용하려고 한다.",choices:["㉠ 프리웨어, ㉡ 셰어웨어, ㉢ 상용 소프트웨어","㉠ 셰어웨어, ㉡ 프리웨어, ㉢ 상용 소프트웨어","㉠ 상용 소프트웨어, ㉡ 셰어웨어, ㉢ 프리웨어","㉠ 셰어웨어, ㉡ 상용 소프트웨어, ㉢ 프리웨어"],answer:0,explanation:"누구나 임의의 용도로 사용할 수 있는 프로그램은 프리웨어, 일정 기간 동안 일부 기능을 제한한 상태로 사용하는 프로그램은 셰어웨어, 정식으로 대가를 지불하고 사용하는 프로그램은 상용 소프트웨어입니다."},
{number:2,question:"운영체제에 대한 설명으로 옳지 않은 것은?",choices:["운영체제는 제어 프로그램, 감시 프로그램, 응용 프로그램으로 구성된다.","자원의 효율적인 관리를 위해 자원의 스케줄링을 제공한다.","시스템과 사용자간의 편리한 인터페이스를 제공한다.","데이터 및 자원 공유 기능을 제공한다."],answer:0,explanation:"운영체제는 크게 제어 프로그램과 처리 프로그램으로 나뉩니다."},
{number:3,question:"유틸리티 프로그램에 대한 설명으로 적절하지 않은 것은?",choices:["다수의 작업이나 목적에 대하여 적용되는 편리한 서비스 프로그램이나 루틴을 말한다.","컴퓨터의 동작에 필수적이고, 컴퓨터를 이용하는 주목적에 대한 일부 특정 작업을 수행하는 소프트웨어들을 가리킨다.","컴퓨터 하드웨어, 운영체제, 응용 소프트웨어를 관리하는 데 도움을 주도록 설계된 프로그램을 의미한다.","Windows에서 제공하는 유틸리티 프로그램으로는 메모장, 그림판, 계산기 등을 예로 들 수 있다."],answer:1,explanation:"유틸리티 프로그램은 컴퓨터 동작에 필수적이지는 않지만, 컴퓨터를 이용하는 주목적에 대한 특정 작업을 수행하는 소프트웨어를 말합니다."},
{number:4,question:"운영체제의 운용 방식으로 옳지 않은 것은?",choices:["일괄 처리는 컴퓨터에 입력하는 데이터를 일정량 모았다가 한꺼번에 처리하는 시스템으로, 오프라인으로 사용한다.","시분할 시스템은 한 대의 시스템을 여러 사용자가 동시에 사용하는 시스템이다.","실시간 처리 시스템은 처리할 데이터가 생겨날 때마다 바로 처리하는 시스템이다.","분산 처리 시스템은 지역적으로 분산된 여러 대의 컴퓨터를 연결하여 작업을 분담하여 처리하는 시스템이다."],answer:0,explanation:"일괄 처리 시스템은 오프라인뿐만 아니라 온라인에서도 흔히 사용됩니다."},
{number:5,question:"추상화, 캡슐화, 상속성, 다형성 등의 특징을 지니고 있으며, 크고 복잡한 프로그램 구성에 어려운 절차형 언어의 문제점을 해결하기 위해 개발된 프로그래밍 기법은?",choices:["구조적 프로그래밍","객체지향 프로그래밍","하향식 프로그래밍","비주얼 프로그래밍"],answer:1,explanation:"추상화, 캡슐화, 상속성, 다형성 등의 특징을 지니는 프로그래밍 기법은 객체지향 프로그래밍입니다."},
{number:6,question:"차세대 웹 표준으로, 텍스트와 하이퍼링크를 이용한 문서 작성 중심으로 구성된 기존 표준에 비디오, 오디오 등의 다양한 부가기능을 추가하여 최신 멀티미디어 콘텐츠를 ActiveX 없이도 웹 서비스로 제공할 수 있는 언어는?",choices:["XML","VRML","HTML5","JSP"],answer:2,explanation:"차세대 웹 표준으로 다양한 부가기능을 추가하여 최신 멀티미디어 콘텐츠를 ActiveX 없이도 웹 서비스로 제공할 수 있는 언어는 HTML5입니다."},
{number:7,question:"웹 프로그래밍 언어에 대한 설명으로 옳지 않은 것은?",choices:["ASP는 Windows 계열에서만 사용할 수 있지만 JSP와 PHP는 다양한 운영체제에서 사용할 수 있다.","XML은 HTML의 단점을 보완하여 웹에서 구조화된 폭넓고 다양한 문서들을 상호 교환할 수 있도록 설계된 언어이다.","SGML은 멀티미디어 전자 문서들을 다른 기종의 시스템들과 효율적으로 전송, 저장 및 자동 처리하기 위한 언어이다.","DHTML은 가상현실 모델링 언어라는 뜻으로, 웹에서 3차원 가상공간을 표현하고 조작할 수 있게 하는 언어이다."],answer:3,explanation:"④번은 VRML에 대한 설명입니다. DHTML은 HTML에 비해 애니메이션이 강화되고 사용자의 상호 작용에 좀 더 민감한 동적인 웹 페이지를 만들 수 있는 언어입니다."}
];

export default function ComputerSoftwareStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>5장 컴퓨터 소프트웨어</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>컴퓨터 소프트웨어</h2></div>
   <article className="win10-theory-card"><h3><span>01</span> 사용권에 따른 소프트웨어 분류</h3><ul>
    <li><b>상용 소프트웨어</b> : 정식으로 대가를 지불하고 사용해야 하는 것</li>
    <li><b>셰어웨어(Shareware)</b> : 기능 혹은 사용 기간에 제한을 두어 배포하는 것으로, 정식 프로그램의 구입을 유도하기 위해 배포하는 버전</li>
    <li><b>트라이얼(Trial) 버전</b> : 셰어웨어와 마찬가지로 제품을 구매하기 전에 해당 프로그램을 미리 사용해 볼 수 있도록 제작한 것으로, 셰어웨어는 일부 기능을 제외한 대부분의 기능을 사용할 수 있는 반면 트라이얼 버전은 일부 기본적인 기능만 사용할 수 있다는 것임</li>
    <li><b>프리웨어(Freeware)</b> : 무료로 사용 또는 배포가 가능한 프로그램</li>
    <li><b>공개 소프트웨어(Open Source Software)</b> : 개발자가 소스를 공개한 소프트웨어로, 누구나 자유롭게 사용하고 수정 및 재배포할 수 있음</li>
    <li><b>데모(Demo) 버전</b> : 정식 프로그램의 기능을 홍보하기 위해 사용 기간이나 기능을 제한하여 배포하는 프로그램</li>
    <li><b>알파(Alpha) 버전</b> : 베타테스트를 하기 전, 제작 회사 내에서 테스트할 목적으로 제작하는 프로그램</li>
    <li><b>베타(Beta) 버전</b> : 정식 프로그램을 출시하기 전, 테스트를 목적으로 일반인에게 공개하는 프로그램</li>
    <li><b>패치(Patch) 버전</b> : 이미 제작하여 배포된 프로그램의 오류 수정이나 성능 향상을 위해 프로그램의 일부 파일을 변경해 주는 프로그램</li>
    <li><b>번들(Bundle)</b> : 하드웨어나 소프트웨어를 구매했을 때 무료로 제공하는 프로그램</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>02</span> 운영체제의 개요</h3><ul>
    <li>사용자의 편의를 도모하는 동시에 시스템의 생산성을 높이기 위한 프로그램의 모임으로 사용자와 컴퓨터 사이에서 중개자 역할을 함(Man-Machine Interface)</li>
    <li>운영체제의 목적은 응답시간(Turnaround Time) 단축, 처리능력(Throughput) 증대, 신뢰도(Reliability) 향상, 사용 가능도(Availability) 증대에 있음</li>
    <li>운영체제는 컴퓨터가 동작하는 동안 주기억장치에 위치함</li>
   </ul>
   <h4>주요 기능</h4><ul>
    <li>프로세스, 기억장치, 주변장치, 파일 및 정보 등의 자원을 관리함</li>
    <li>자원을 효율적으로 관리하기 위해 자원의 스케줄링 기능을 제공함</li>
    <li>사용자와 시스템 간의 편리한 인터페이스를 제공함</li>
    <li>데이터를 관리하고, 데이터 및 자원의 공유 기능을 제공함</li>
   </ul>
   <p>운영체제는 크게 제어 프로그램과 처리 프로그램으로 나뉨.</p>
   <ul><li><b>제어 프로그램</b> : 감시 프로그램, 작업 관리 프로그램, 데이터 관리 프로그램</li><li><b>처리 프로그램</b> : 언어 번역 프로그램, 서비스 프로그램, 문제 프로그램</li></ul>
   </article>

   <article className="win10-theory-card"><h3><span>03</span> 유틸리티 프로그램</h3><ul>
    <li>컴퓨터 동작에 필수적이지는 않지만, 컴퓨터 시스템에 있는 기존 프로그램을 지원하거나 기능을 향상 또는 확장하기 위해 사용하는 소프트웨어를 의미함</li>
    <li>유틸리티 프로그램은 서비스 프로그램, 유틸리티 루틴이라고도 함</li>
    <li>컴퓨터 하드웨어, 운영체제, 응용 소프트웨어를 관리하는 데 도움을 주도록 설계됨</li>
    <li>Windows에서 제공하는 유틸리티 프로그램에는 메모장, 그림판, 계산기 등이 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>04</span> 운영체제의 운용 방식</h3><ul>
    <li><b>일괄 처리 시스템</b> : 처리할 데이터를 일정량 또는 일정 기간 모았다가 한꺼번에 처리하는 방식으로, 온라인 일괄 처리 시스템과 오프라인 일괄 처리 시스템이 있음</li>
    <li><b>실시간 처리 시스템</b> : 처리할 데이터가 생겨날 때마다 바로 처리하는 방식으로, 일반적으로 온라인 실시간 시스템을 의미함</li>
    <li><b>분산 처리 시스템</b> : 지역적으로 분산된 여러 대의 컴퓨터를 연결하여 작업을 분담하여 처리하는 방식</li>
    <li><b>임베디드 시스템</b> : 마이크로프로세서에 특정 기능을 수행하는 응용 프로그램을 탑재하여 컴퓨터의 기능을 수행하는 것으로, 컴퓨터의 하드웨어와 소프트웨어가 조합된 전자 제어 시스템</li>
   </ul>
   <h4>운영체제 운용 기법의 발달 과정</h4><p>일괄 처리 시스템 → 다중 프로그래밍 시스템/다중 처리 시스템/시분할 시스템/실시간 처리 시스템 → 다중 모드 → 분산 처리 시스템</p>
   </article>

   <article className="win10-theory-card"><h3><span>05</span> 프로그래밍 언어</h3><table className="win10-table"><tbody>
    <tr><th>문제 중심 언어</th><td>처리 방법이나 절차보다는 해결하려는 문제에 중심을 두고 프로그램할 수 있는 언어로, 비절차적이며 대화식으로 구성됨. 인공지능, 모의실험 등에 사용. 종류 : LISP, GPSS, SPSS, SAS, COGO 등</td></tr>
    <tr><th>절차 중심 언어</th><td>정해진 문법에 맞게 일련의 처리 절차를 순서대로 기술해 나가는 언어. 종류 : C, COBOL, ALGOL, FORTRAN, PASCAL 등</td></tr>
    <tr><th>객체 지향 프로그래밍 언어</th><td>동작보다는 객체, 논리보다는 자료를 바탕으로 구성된 프로그래밍 언어임. 특징 : 상속성, 캡슐화, 추상화, 다형성, 오버로딩 등. 종류 : Smalltalk, C++, C#, JAVA 등</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>06</span> 웹 프로그래밍 언어</h3><table className="win10-table"><tbody>
    <tr><th>HTML5</th><td>웹 표준 기관인 W3C에서 제안한 HTML의 최신 규격으로, HTML에 비디오, 오디오 등 다양한 부가기능을 포함시킴. 최신 멀티미디어 콘텐츠를 액티브X 없이 브라우저에서 쉽게 볼 수 있음</td></tr>
    <tr><th>DHTML</th><td>이전 버전의 HTML에 비해 애니메이션이 강화되고 사용자와의 상호 작용에 좀 더 민감한 동적인 웹 페이지를 만들 수 있게 해주는 HTML임</td></tr>
    <tr><th>SGML</th><td>텍스트, 이미지, 오디오 및 비디오 등을 포함하는 멀티미디어 전자 문서들을 다른 기종의 시스템들과 정보의 손실 없이 효율적으로 전송, 저장 및 자동 처리하기 위한 언어임</td></tr>
    <tr><th>XML</th><td>확장성 생성 언어라는 뜻으로, 기존 HTML의 단점을 보완하여 웹에서 구조화된 폭넓고 다양한 문서를 상호 교환할 수 있도록 설계된 언어. 사용자가 HTML에서 새로운 태그(Tag)를 정의할 수 있는 기능이 추가되어 있음</td></tr>
    <tr><th>VRML</th><td>가상현실 모델링 언어라는 뜻으로, 웹에서 3차원 가상공간을 표현하고 조작할 수 있게 하는 언어</td></tr>
    <tr><th>ASP</th><td>서버측에서 동적으로 수행되는 페이지를 만들기 위한 언어로, 마이크로소프트 사에서 제작하였으며 Windows 계열에서만 수행 가능함</td></tr>
    <tr><th>JSP</th><td>자바로 만들어진 서버 스크립트로 다양한 운영체제에서 사용 가능하며 데이터베이스와 연결하기 쉽고 시스템을 효율적으로 사용할 수 있음. Linux, Unix, Windows 등의 다양한 운영체제에서 사용할 수 있음</td></tr>
    <tr><th>JAVA</th><td>웹 상에서 멀티미디어 데이터를 효율적으로 처리할 수 있는 객체 지향 언어로, 네트워크 환경에서 분산 작업이 가능하도록 설계된 프로그래밍 언어임</td></tr>
    <tr><th>PHP</th><td>라스무스 러돌프에 의해 개발된 언어로, 초기에는 아주 간단한 유틸리티들로만 구성되어 개인용 홈페이지 제작 도구로 사용되었으나 PHP 4.0 버전 이후 강력한 웹 스크립트 언어로 자리하고 있음. Linux, Unix, Windows 등의 다양한 운영체제에서 사용할 수 있음</td></tr>
   </tbody></table></article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>5장 문제</h2></div><div className="win10-quiz-list">
  {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}><div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div><div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div><button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>{isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}</article>})}
  </div></section>
 </section>
}
