"use client";
import { useState } from "react";

type Q={number:number;question:string;choices:string[];answer:number;explanation:string};

const questions:Q[]=[
{number:1,question:"다음 중 웜(Worm)에 대한 설명으로 옳은 것은?",choices:["네트워크를 통해 연속적으로 자신을 복제하여 시스템의 부하를 높이는 프로그램이다.","정상적인 기능을 하는 프로그램으로 가장하여 프로그램 내에 숨어 있다가 해당 프로그램이 동작할 때 활성화되어 부작용을 일으키는 프로그램이다.","컴퓨터 시스템에 불법적으로 접근, 침투하여 시스템과 데이터를 파괴하는 행위이다.","네트워크 주변을 지나다니는 패킷을 엿보면서 계정과 패스워드를 알아내는 행위이다."],answer:0,explanation:"네트워크를 통해 연속적으로 자신을 복제하여 시스템의 부하를 높이는 프로그램은 웜(Worm)입니다."},
{number:2,question:"다음 중 컴퓨터 범죄와 거리가 먼 것은?",choices:["전자문서의 불법 복사","전산망을 이용한 개인 정보 유출","컴퓨터 시스템 해킹을 통한 중요 정보의 위조 또는 변조","인터넷 쇼핑몰 상품 가격 비교표 작성"],answer:3,explanation:"인터넷 쇼핑몰 상품 가격 비교표 작성은 컴퓨터 범죄가 아닙니다."},
{number:3,question:"다음 중 컴퓨터 범죄 예방과 대책에 관한 설명으로 옳지 않은 것은?",choices:["해킹 여부를 정기적으로 검사한다.","의심이 가는 이메일은 열어서 내용을 확인하고 삭제한다.","백신 프로그램을 설치하고 자동 업데이트 기능을 설정한다.","회원 가입한 사이트의 패스워드를 주기적으로 변경한다."],answer:1,explanation:"의심이 가는 이메일은 열어보지 않고 바로 삭제하거나 백신 프로그램으로 검사한 뒤 처리해야 합니다."},
{number:4,question:"다음 중 정보 보안을 위협하는 형태에 대한 설명으로 옳은 것은?",choices:["스니핑(Sniffing) : 검증된 사람이 네트워크를 통해 데이터를 보낸 것처럼 데이터를 변조하여 접속을 시도한다.","피싱(Phishing) : 적절한 사용자 동의 없이 사용자 정보를 수집하는 프로그램 또는 적절한 사용자 동의 없이 설치되어 사용을 불편하게 하거나 사생활을 침해하는 프로그램이다.","스푸핑(Spoofing) : 실제로는 악성코드로 행동하지 않으면서 겉으로는 악성코드인 것처럼 가장한다.","키로거(Key Logger) : 키보드 상의 키 입력 캐시 프로그램을 이용하여 개인 정보를 빼낸다."],answer:3,explanation:"④번은 키로거(Key Logger)에 대한 올바른 설명입니다. ①은 스푸핑, ②는 스파이웨어, ③은 혹스(Hoax)에 대한 설명입니다."},
{number:5,question:"다음 중 컴퓨터 바이러스의 예방방법으로 적절하지 않은 것은?",choices:["최신 버전의 백신 프로그램을 사용한다.","다운로드 받은 파일은 사용하기 전에 바이러스 검사 후 사용한다.","전자우편에 첨부된 파일은 파일명을 다른 이름으로 저장하여 사용한다.","네트워크 공유 폴더에 있는 파일을 사용하기 전에 바이러스 검사 후 사용한다."],answer:2,explanation:"전자우편 첨부 파일은 파일명만 바꾼다고 안전해지는 것이 아니므로 반드시 바이러스 검사를 수행한 후 사용해야 합니다."},
{number:6,question:"다음 중 정보 보안을 위협하는 유형에서 가로채기에 해당하는 것은?",choices:["데이터의 정상적인 전달을 가로막아 흐름을 방해하는 행위로, 가용성을 저해함","전송되는 데이터가 전송 도중에 도청 및 몰래 보는 행위","전송된 원래의 데이터를 다른 내용으로 수정하여 변조하는 행위","다른 송신자로부터 데이터가 송신된 것처럼 꾸미는 행위"],answer:1,explanation:"전송 중인 데이터를 도청하거나 몰래 보는 행위는 가로채기(Interception)에 해당합니다."},
{number:7,question:"다음 중 컴퓨터 사용 시 발생할 수 있는 바이러스 감염에 대한 예방방법으로 적절하지 않은 것은?",choices:["방화벽을 설정하여 사용한다.","의심이 가는 메일은 열지 않고 삭제한다.","백신 프로그램을 최신 버전으로 업데이트하여 실행한다.","정기적으로 Windows 10의 [디스크 정리]를 실행한다."],answer:3,explanation:"디스크 정리는 디스크의 여유 공간을 확보하기 위해 필요 없는 파일을 삭제하는 기능으로 바이러스 예방과 직접적인 관련이 없습니다."},
{number:8,question:"해커를 유인하기 위해 의도적으로 취약한 서버를 만들어 이를 모니터링하는 시스템으로 공격자의 공격 경로와 공격 수법을 알아내기 위한 목적으로 사용하는 것은?",choices:["VPN(Virtual Private Network)","허니팟(Honeypot)","침입 탐지 시스템(IDS)","방화벽(Firewall)"],answer:1,explanation:"공격자의 공격 경로와 수법을 알아내기 위해 의도적으로 취약한 시스템을 운영하는 것은 허니팟(Honeypot)입니다."}
];

export default function ComputerLiteracySystemSecurityStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>8장 컴퓨터 시스템 보호</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>컴퓨터 시스템 보호</h2></div>

   <article className="win10-theory-card"><h3><span>01</span> 정보 사회의 개요</h3><ul>
    <li>정보의 축적과 활용이 확대되고 처리하고자 하는 정보의 종류와 양이 증가함</li>
    <li>사회의 변화 속도가 빨라짐</li>
    <li>사이버 공간상의 새로운 인간 관계와 문화가 형성됨</li>
    <li>정보 사회에서는 대중화 현상이 약화되고 개성과 자유를 중요시하게 됨</li>
    <li>통신 기술의 발달로 시간과 공간의 제약에서 벗어나게 됨</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>02</span> 컴퓨터 범죄</h3><p>컴퓨터 범죄란 컴퓨터 및 통신 기술을 이용하여 저지르는 불법적·비윤리적 범죄를 총칭함.</p>
   <h4>유형</h4><ul>
    <li>소프트웨어, 웹 콘텐츠, 전자문서의 도난 및 불법 복사</li>
    <li>타인의 하드웨어나 기억 매체에 기록된 자료를 손상하거나 교란시키는 행위</li>
    <li>컴퓨터를 이용한 금융 횡령 또는 사기 판매</li>
    <li>컴퓨터 시스템 해킹으로 인한 중요 정보의 위·변조, 삭제, 유출</li>
    <li>전산망을 이용한 개인 신용 정보 유출</li>
    <li>음란물의 유통 및 사이트 운영</li>
    <li>컴퓨터 바이러스 제작 및 유포</li>
    <li>다른 사람의 ID와 비밀번호의 불법 사용 및 유출</li>
   </ul>
   <h4>예방 및 대책</h4><ul>
    <li>정보 누출이나 해킹 방지를 위해 방화벽 체계를 정비하고 보안 관련 프로그램의 보급 및 정기적인 보안 교육을 실시함</li>
    <li>중요한 데이터는 암호화하여 관리함</li>
    <li>보호 패스워드를 시스템에 도입하고 수시로 변경함</li>
    <li>패스워드를 만들 때는 알파벳과 숫자, 특수문자 등을 섞어서 복잡하게 만드는 것이 바람직함</li>
    <li>백신 프로그램을 설치하고 자동 업데이트 기능을 설정하거나 수시로 업데이트함</li>
    <li>인터넷을 통해 다운로드한 프로그램은 백신으로 진단한 후 사용함</li>
    <li>의심이 가는 이메일이나 호기심을 자극하는 표현이 담긴 메일은 열어보지 않음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>03</span> 컴퓨터 바이러스</h3><ul>
    <li>컴퓨터의 정상적인 작동을 방해하기 위해 운영체제나 저장된 데이터에 손상을 입히는 프로그램</li>
    <li>기능적 특징에는 복제 기능, 은폐 기능, 파괴 기능 등이 있음</li>
    <li>보통 소프트웨어 형태로 감염되지만 하드웨어의 성능에도 영향을 미칠 수 있음</li>
   </ul>
   <h4>바이러스 감염 경로와 예방법</h4><ul>
    <li>인터넷을 이용해 다운로드한 파일이나 외부에서 복사해 온 파일은 반드시 바이러스 검사를 수행한 후 사용함</li>
    <li>네트워크를 통해 감염될 수 있으므로 공유 폴더의 속성은 읽기 전용으로 지정함</li>
    <li>전자우편을 통해 감염될 수 있으므로 발신자가 불분명한 전자우편은 열어보지 않고 삭제하거나 바이러스 검사를 수행한 후 열어봄</li>
    <li>외부의 불법적인 침입을 막을 수 있는 방화벽을 설정하여 사용함</li>
    <li>가장 최신 버전의 백신 프로그램을 사용하여 주기적으로 바이러스 검사를 수행함</li>
   </ul>
   <h4>매크로 바이러스</h4><ul>
    <li>주로 MS-Office에서 사용하는 매크로 기능을 이용하여 다른 파일을 감염시키는 바이러스</li>
    <li>종류: 멜리사, Laroux 등</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>04</span> 보안 위협의 유형</h3><table className="win10-table"><tbody>
    <tr><th>가로막기(Interruption, 흐름 차단)</th><td>데이터의 정상적인 전달을 가로막아서 흐름을 방해하는 행위로, 가용성을 저해함</td></tr>
    <tr><th>가로채기(Interception)</th><td>송신된 데이터가 수신자까지 가는 도중에 몰래 보거나 도청하여 정보를 유출하는 행위로, 기밀성을 저해함</td></tr>
    <tr><th>수정/변조(Modification)</th><td>전송된 데이터를 원래의 데이터가 아닌 다른 내용으로 바꾸는 행위로, 무결성을 저해함</td></tr>
    <tr><th>위조(Fabrication)</th><td>마치 다른 송신자로부터 데이터가 송신된 것처럼 꾸미는 행위로, 무결성을 저해함</td></tr>
   </tbody></table>
   <h4>위협 보안 요건</h4><ul>
    <li><b>기밀성</b> : 시스템 내의 정보와 자원은 인가된 사용자에게만 접근이 허용됨</li>
    <li><b>무결성</b> : 시스템 내의 정보는 인가된 사용자만 수정이 가능함</li>
    <li><b>가용성</b> : 인가받은 사용자는 언제라도 사용할 수 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>05</span> 위협의 구체적인 형태</h3><table className="win10-table"><tbody>
    <tr><th>웜(Worm)</th><td>네트워크를 통해 연속적으로 자신을 복제하여 시스템의 부하를 높여 결국 시스템을 다운시키는 바이러스의 일종</td></tr>
    <tr><th>트로이 목마(Trojan Horse)</th><td>정상적인 기능을 하는 프로그램으로 가장하여 프로그램 내에 숨어 있다가 해당 프로그램이 동작할 때 활성화되어 부작용을 일으키는 것</td></tr>
    <tr><th>백도어(Back Door, Trap Door)</th><td>서비스 기술자나 유지 보수 프로그램들의 액세스 편의를 위해 만든 보안이 제거된 비밀 통로를 이르는 말로, 시스템에 무단 접근하기 위한 일종의 비상구로 사용함</td></tr>
    <tr><th>스푸핑(Spoofing)</th><td>누속수(Spoof)에서 파생된 것으로, 검증된 사람이 네트워크를 통해 데이터를 보낸 것처럼 데이터를 변조(위조)하여 접속을 시도하는 침입 형태</td></tr>
    <tr><th>스니핑(Sniffing)</th><td>네트워크 주변을 지나다니는 패킷을 엿보면서 계정과 패스워드를 알아내는 행위</td></tr>
    <tr><th>분산 서비스 거부 공격(DDoS; Distributed Denial of Service)</th><td>여러 대의 장비를 이용하여 대량의 데이터를 특정한 서버에 집중적으로 전송함으로써 서버의 정상적인 기능을 방해하는 행위</td></tr>
    <tr><th>피싱(Phishing)</th><td>개인정보(Private Data)와 낚시(Fishing)의 합성어로, 금융기관을 가장한 이메일 발송 후 이메일에 있는 인터넷 주소를 클릭하면 허위 은행 사이트로 유도하여 개인 금융 정보를 빼내는 행위</td></tr>
    <tr><th>키로거(Key Logger)</th><td>키 입력 캐치 프로그램을 이용하여 키보드를 통해 입력되는 ID나 암호 등의 개인 정보를 빼내어 악용하는 기법</td></tr>
    <tr><th>랜섬웨어(Ransomware)</th><td>인터넷 사용자의 컴퓨터에 잠입해 내부 문서나 파일 등을 암호화해 열지 못하게 한 뒤 암호 해독용 프로그램의 전달을 조건으로 사용자에게 돈을 요구하기도 함</td></tr>
    <tr><th>허니팟(Honeypot)</th><td>비정상적인 접근을 탐지하기 위해 설치해 둔 시스템. 침입자를 속여 실제 공격을 당하는 것처럼 보여줌으로써 추적 및 공격기법에 대한 정보를 수집함</td></tr>
    <tr><th>스파이웨어(Spyware)</th><td>적절한 사용자 동의 없이 사용자 정보를 수집하는 프로그램 또는 적절한 사용자 동의 없이 설치되어 사용을 불편하게 하거나 사생활을 침해하는 프로그램</td></tr>
    <tr><th>혹스(Hoax)</th><td>실제로는 악성코드로 행동하지 않으면서 겉으로는 악성코드인 것처럼 가장하여 행동하는 소프트웨어</td></tr>
    <tr><th>피기배킹(Piggybacking)</th><td>정당한 사용자가 정상적으로 시스템을 종료하지 않고 자리를 떠났을 때 비인가된 사용자가 바로 그 자리에서 계속 작업을 수행하여 불법적 접근을 행하는 범죄 행위</td></tr>
   </tbody></table></article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>8장 문제</h2></div><div className="win10-quiz-list">
  {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}><div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div><div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div><button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>{isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}</article>})}
  </div></section>
 </section>
}
