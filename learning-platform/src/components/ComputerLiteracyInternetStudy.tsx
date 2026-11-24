"use client";
import { useState } from "react";

type Q={number:number;question:string;choices:string[];answer:number;explanation:string};

const questions:Q[]=[
{number:1,question:"다음 중 라디오와 같이 한쪽은 송신만, 다른 한쪽은 수신만 가능한 정보 전송 방식은?",choices:["단방향 통신","반이중 통신","전이중 통신","양방향 통신"],answer:0,explanation:"한쪽은 송신만 하고 다른 한쪽은 수신만 하는 방식은 단방향(Simplex) 통신입니다."},
{number:2,question:"다음의 보기가 의미하는 분산 시스템 모델로 옳은 것은? · 시스템에 소속된 컴퓨터들은 누구든지 서버가 될 수 있으며, 클라이언트도 될 수 있다. · 워크스테이션 혹은 개인용 컴퓨터를 단말기로 사용한다. · 고속 LAN을 기반으로 한다.",choices:["주/종속 시스템(Master/Slave System)","동배간 처리 시스템(Peer to Peer System)","호스트 기반(Host Based) 시스템","클라이언트/서버 시스템(Client/Server System)"],answer:1,explanation:"제시된 내용은 모든 컴퓨터가 서버와 클라이언트 역할을 할 수 있는 동배간 처리 시스템(Peer to Peer System)의 특징입니다."},
{number:3,question:"다음 중 근거리 통신망(LAN)에 관한 설명으로 옳지 않은 것은?",choices:["비교적 전송 거리가 짧아 에러 발생률이 낮다.","반이중 방식의 통신을 한다.","자원 공유를 목적으로 컴퓨터들을 상호 연결한다.","프린터, 보조기억장치 등 주변장치들을 쉽게 공유할 수 있다."],answer:1,explanation:"근거리 통신망(LAN)은 전이중 방식으로 데이터를 송·수신할 수 있습니다."},
{number:4,question:"다음 중 초고속 인터넷을 이용하여 동영상 콘텐츠, 정보 서비스 등 기본 텔레비전 기능에 인터넷 검색이 가능하게 한 서비스는?",choices:["VoIP","IPTV","IPv6","TCP/IP"],answer:1,explanation:"기본 텔레비전 기능에 인터넷 검색과 다양한 양방향 서비스를 결합한 서비스는 IPTV입니다."},
{number:5,question:"다음 중 정보통신에서 네트워크 관련 장비에 대한 설명으로 옳지 않은 것은?",choices:["라우터(Router) : 네트워크를 구성하기 위해 반드시 필요한 장비로 정보 전송을 위한 최적의 경로를 찾아 통신망에 연결하는 장치","허브(Hub) : 네트워크를 구성할 때 여러 대의 컴퓨터를 연결하고, 각 회선을 통합적으로 관리하는 장치","브리지(Bridge) : 네트워크를 구성할 때 디지털 신호를 아날로그 신호로 변환하여 전송하고 다시 수신된 신호를 원래대로 변환하기 위한 전송 장치","게이트웨이(Gateway) : 한 네트워크에서 다른 네트워크로 들어가는 입구 역할을 하는 장치로 서로 다른 프로토콜을 사용하는 네트워크를 연결할 때 사용되는 장치"],answer:2,explanation:"③번은 모뎀(MODEM)에 대한 설명입니다. 브리지는 서로 독립적으로 동작하면서 같은 프로토콜을 사용하는 두 LAN을 연결하는 네트워크 장치입니다."},
{number:6,question:"다음 중 인터넷 주소 체계인 IPv6에 대한 설명으로 옳은 것은?",choices:["주소는 8비트씩 16개 부분으로 총 128비트로 구성되어 있다.","주소를 네트워크 부분의 길이에 따라 A클래스에서 E클래스까지 총 5단계로 구분한다.","IPv4와의 호환성은 낮으나 IPv4에 비해 품질 보장은 용이하다.","주소의 한 부분이 0으로 연속되는 경우 연속된 0은 '::'으로 생략하여 표시할 수 있다."],answer:3,explanation:"IPv6는 16비트씩 8부분으로 총 128비트이며, 유니캐스트·멀티캐스트·애니캐스트를 사용합니다. 연속된 0은 '::'으로 생략할 수 있습니다."},
{number:7,question:"다음 중 인터넷에서 사용하는 도메인 네임에 대한 설명으로 옳지 않은 것은?",choices:["숫자로 구성된 IP 주소를 사람들이 기억하고 이해하기 쉽도록 문자열로 만든 주소이다.","우리나라에서 도메인 네임을 관리하는 기관은 KISA이다.","인터넷의 모든 도메인 네임은 전 세계적으로 유일하게 존재해야 한다.","도메인 네임을 사용자가 컴퓨터에서 임의로 설정하여 사용할 수 있다."],answer:3,explanation:"도메인 네임은 전 세계적으로 중복되지 않는 고유한 주소이므로 사용자가 임의로 설정하여 사용할 수 없습니다."},
{number:8,question:"다음 중 인터넷의 표준 주소 체계인 URL(Uniform Resource Locator)의 형식으로 옳은 것은?",choices:["프로토콜://호스트 서버 주소[:포트번호][/파일 경로]","프로토콜://호스트 서버 주소[/파일 경로][:포트번호]","호스트 서버 주소://프로토콜[/파일 경로][:포트번호]","호스트 서버 주소://프로토콜[:포트번호][/파일 경로]"],answer:0,explanation:"URL의 기본 형식은 '프로토콜://호스트 서버 주소[:포트번호][/파일 경로]'입니다."},
{number:9,question:"다음 중 이기종 단말 간 통신과 호환성 등 모든 네트워크상의 원활한 통신을 위해 최소한의 네트워크 구조를 제공하는 모델로, 네트워크 프로토콜을 여러 계층으로 나누어 정의한 통신 규약 명칭은?",choices:["ISO 7계층","Network 7계층","TCP/IP 7계층","OSI 7계층"],answer:3,explanation:"네트워크 프로토콜을 물리, 데이터 링크, 네트워크, 전송, 세션, 표현, 응용의 7계층으로 나누어 정의한 통신 규약은 OSI 7계층입니다."},
{number:10,question:"다음 중 한글 Windows에서 전자우편에 관한 설명으로 옳지 않은 것은?",choices:["인터넷에 접속하여 사용자끼리 서로 편지를 주고 받는 서비스를 말한다.","일반적으로 편지를 받을 때는 SMTP 서버를 이용하고, 편지를 보낼 때는 POP 서버를 이용한다.","전자우편 주소는 '사용자 ID@호스트 주소'의 형식으로 이루어진다.","MIME은 웹 브라우저가 지원하지 않는 각종 멀티미디어 파일의 내용을 확인하고 실행시켜 주는 프로토콜이다."],answer:1,explanation:"편지를 보낼 때는 SMTP 서버를 사용하고, 편지를 받을 때는 POP3 서버를 사용합니다."},
{number:11,question:"다음 중 인터넷에서 웹 서버와 사용자의 인터넷 브라우저 사이에 하이퍼텍스트 문서를 전송하기 위해 사용되는 통신 규약은?",choices:["TCP","HTTP","FTP","SMTP"],answer:1,explanation:"웹 서버와 웹 브라우저 사이에서 하이퍼텍스트 문서를 전송하기 위해 사용되는 통신 규약은 HTTP입니다."},
{number:12,question:"다음 중 웹 브라우저의 기능에 관한 설명으로 옳지 않은 것은?",choices:["'설정'에서 멀티미디어 편집기를 선택할 수 있다.","전자우편을 보내거나 FTP 서버에 접속할 수 있다.","웹 페이지를 사용자 컴퓨터에 저장하거나 인쇄할 수 있다.","자주 방문하는 웹 사이트 주소를 관리할 수 있다."],answer:0,explanation:"웹 브라우저의 설정에서 멀티미디어 편집기를 선택하는 기능은 일반적인 웹 브라우저 기능에 해당하지 않습니다."},
{number:13,question:"다음 중 사용자의 기본 설정을 사이트가 인식하도록 하거나, 사용자가 웹 사이트로 이동할 때마다 로그인해야 하는 번거로움을 생략할 수 있도록 사용자 환경을 향상시키는 것은?",choices:["쿠키(Cookie)","즐겨찾기(Favorites)","웹 서비스(Web Service)","히스토리(History)"],answer:0,explanation:"인터넷 접속 시 아이디와 비밀번호를 넣지 않고 자동으로 접속할 수 있도록 관련 정보를 저장하는 작은 파일이 쿠키(Cookie)입니다."},
{number:14,question:"다음 중 통신 기술의 이용 현황을 올바르게 설명한 것은?",choices:["NFC - 노트북을 화상캠을 이용하여 연결한다.","BlueTooth - 출·퇴근용 태그를 이용하여 관리한다.","WiFi - 헤드폰과 핸드폰을 연결한다.","RFID - 도서관에서 도서 대출/반납 시 태그를 이용하여 도서의 출납을 실시간으로 확인한다."],answer:3,explanation:"RFID는 태그를 이용해 도서 대출·반납, 출입 통제, 모바일 결제 등에 활용됩니다. 헤드폰과 핸드폰 연결은 Bluetooth, WiFi는 무선 인터넷 접속 기술입니다."},
{number:15,question:"다음 중 모든 사물을 네트워크로 연결하여 인간과 사물, 사물과 사물 간에 언제나 서로 소통할 수 있게 하는 새로운 정보 통신 환경을 의미하는 것은?",choices:["클라우드 컴퓨팅(Cloud Computing)","RSS(Rich Site Summary)","IoT(Internet of Things)","빅 데이터(Big Data)"],answer:2,explanation:"모든 사물을 네트워크로 연결하여 서로 소통할 수 있게 하는 정보 통신 환경은 사물 인터넷(IoT)입니다."},
{number:16,question:"무선 광대역을 의미하는 것으로, 핸드폰, 노트북, PDA 등의 모바일 기기를 이용하여 언제 어디서나 이동하면서 고속으로 무선 인터넷 접속이 가능한 서비스를 의미하는 것은?",choices:["와이파이","와이브로","블루투스","UWB"],answer:1,explanation:"이동하면서 고속으로 무선 인터넷 접속이 가능한 무선 광대역 서비스는 와이브로(Wibro)입니다."}
];

export default function ComputerLiteracyInternetStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>6장 인터넷 활용</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>인터넷 활용</h2></div>

   <article className="win10-theory-card"><h3><span>01</span> 정보 전송 방식</h3><table className="win10-table"><tbody>
    <tr><th>단방향 방식(Simplex)</th><td>한쪽은 수신만, 다른 한쪽은 송신만 가능한 방식. 예: TV, 라디오</td></tr>
    <tr><th>반이중 방식(Half-Duplex)</th><td>양쪽 모두 송·수신이 가능하지만 동시에 송·수신할 수는 없는 방식. 예: 무전기</td></tr>
    <tr><th>전이중 방식(Full-Duplex)</th><td>양쪽 모두 동시에 송·수신이 가능한 방식. 예: 전화</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>02</span> 네트워크 운영 방식</h3><table className="win10-table"><tbody>
    <tr><th>중앙 집중식</th><td>작업에 필요한 모든 처리를 담당하는 중앙 컴퓨터와 데이터의 입·출력 기능을 담당하는 단말기로 구성되며, 메인 프레임에서 사용함</td></tr>
    <tr><th>클라이언트/서버 방식</th><td>정보를 제공하는 서버와 정보를 요구하는 클라이언트로 구성되며, 서버와 클라이언트 모두 독자적인 처리 능력이 있어 분산 처리 환경에 적합함</td></tr>
    <tr><th>동배간 처리 방식(피어 투 피어)</th><td>모든 컴퓨터를 동등하게 연결하는 방식으로, 시스템에 소속된 컴퓨터들은 누구든 서버가 될 수 있으며 동시에 클라이언트도 될 수 있음. 워크스테이션 혹은 개인용 컴퓨터를 단말기로 사용하는 작은 규모의 네트워크 구성에 많이 사용되며 고속 LAN을 기반으로 함</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>03</span> 통신망의 종류</h3><ul>
    <li><b>LAN</b> : 자원 공유를 목적으로 전송 거리가 짧은 학교, 연구소, 병원 등의 구내에서 사용하는 통신망. 전송 거리가 짧아 고속 전송이 가능하고 에러 발생률이 낮으며, 프린터·보조기억장치 등 주변장치를 쉽게 공유할 수 있음. 전이중 방식으로 데이터를 송·수신함</li>
    <li><b>무선 랜(WLAN)</b> : 무선접속장치(AP)를 중심으로 일정 거리 안에서 초고속 인터넷을 사용할 수 있는 근거리 통신망. 주요 구성 요소에는 무선 랜카드, 무선접속장치(AP), 안테나(Antenna) 등이 있음</li>
    <li><b>MAN</b> : LAN과 WAN의 중간 형태로, LAN의 기능을 충분히 수용하면서 도시 전역 또는 도시와 도시 등 넓은 지역을 연결하는 통신망. LAN과 마찬가지로 높은 데이터 전송률을 가짐</li>
    <li><b>WAN</b> : MAN보다 넓은 범위인 국가와 국가 혹은 대륙과 대륙을 하나로 연결하는 통신망으로 에러 발생률이 높음</li>
    <li><b>VAN</b> : 기간 통신 사업자로부터 통신 회선을 빌려 기존의 정보에 새로운 가치를 더해 다수의 이용자에게 판매하는 통신망</li>
    <li><b>B-ISDN</b> : 광대역 네트워크에서 데이터, 음성, 고해상도의 동영상 등 다양한 서비스를 디지털 통신망을 이용해 제공. 비동기식 전달 방식(ATM)을 사용하여 150~600Mbps의 초고속 대용량 데이터를 디지털로 전송할 수 있음</li>
    <li><b>ATM</b> : 비동기식 전송 모드로 음성, 동화상, 텍스트와 같은 여러 형식의 정보를 고정된 크기로 작게 나누어 빠르게 전송하는 B-ISDN의 핵심 기술</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>04</span> 네트워크 관련 장비</h3><table className="win10-table"><tbody>
    <tr><th>네트워크 인터페이스 카드(NIC)</th><td>컴퓨터와 컴퓨터 또는 컴퓨터와 네트워크를 연결하는 장치. 정보 전송 시 정보가 케이블을 통해 전송될 수 있도록 정보 형태를 변경함. 이더넷 카드(LAN 카드) 혹은 네트워크 어댑터라고도 함</td></tr>
    <tr><th>허브(Hub)</th><td>네트워크를 구성할 때 한꺼번에 여러 대의 컴퓨터를 연결하는 장치로 각 회선을 통합적으로 관리함. 더미 허브는 단순 연결 기능만 제공하고 네트워크 노드는 물리적인 성형 구조로 연결됨. 스위칭 허브는 네트워크상의 흐르는 데이터의 유무 및 흐름을 제어하여 각각의 노드가 허브의 최대 대역폭을 사용할 수 있게 하며 더미 허브보다 안정적이고 속도가 빠름</td></tr>
    <tr><th>리피터(Repeater)</th><td>거리가 멀어질수록 감쇠하는 디지털 신호의 장거리 전송을 위해 수신한 신호를 재생시키거나 출력 전압을 높여 전송하는 장치</td></tr>
    <tr><th>브리지(Bridge)</th><td>단순 신호 증폭뿐 아니라 네트워크 분할을 통해 트래픽을 감소시키며, 같은 프로토콜을 사용하는 여러 다른 네트워크를 연결할 때 사용함</td></tr>
    <tr><th>라우터(Router)</th><td>인터넷 접속할 때 반드시 필요한 장비로 최적의 경로를 설정하여 전송함. 각 데이터들이 효율적인 속도로 전송될 수 있도록 데이터의 흐름을 제어함</td></tr>
    <tr><th>게이트웨이(Gateway)</th><td>주로 LAN에서 다른 네트워크에 데이터를 보내거나 다른 네트워크로부터 데이터를 받아들이는 출입구 역할을 함</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>05</span> 인터넷 관련 용어</h3><ul>
    <li><b>인트라넷(Intranet)</b> : 인터넷 기술을 기업 내 정보 시스템에 적용한 것으로 전자우편, 전자결재 시스템 등을 인터넷 환경으로 통합하여 사용하는 것</li>
    <li><b>엑스트라넷(Extranet)</b> : 기업과 기업 간에 인트라넷을 서로 연결하여 납품업체나 고객업체 등 자기 회사와 관련 있는 기업체와의 원활한 통신을 위해 인트라넷의 이용 범위를 확대한 것</li>
    <li><b>IPTV(Internet Protocol TeleVision)</b> : 초고속 광대역 네트워크를 통해 디지털 채널 방송과 양방향 서비스를 제공. 시간에 구애받지 않고 동영상 콘텐츠를 이용할 수 있고, 인터넷 검색으로 다양한 정보를 찾아볼 수 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>06</span> IP 주소</h3><ul>
    <li>인터넷에 연결된 모든 컴퓨터의 자원을 구분하기 위한 인터넷 주소이며, 전 세계의 모든 IT 기기는 IP 주소가 중복되지 않아야 함</li>
    <li><b>IPv4</b> : 숫자로 8비트씩 4부분, 총 32비트로 구성. 각 부분은 10진수 0~255까지 3자리 숫자로 표현함</li>
   </ul><table className="win10-table"><tbody>
    <tr><th>Class A</th><td>국가나 대형 통신망에 사용(16,777,214개의 호스트)</td></tr>
    <tr><th>Class B</th><td>중대형 통신망에 사용(65,534개의 호스트)</td></tr>
    <tr><th>Class C</th><td>소규모 통신망에 사용(254개의 호스트)</td></tr>
    <tr><th>Class D</th><td>멀티캐스트용으로 사용</td></tr>
    <tr><th>Class E</th><td>실험용으로 사용</td></tr>
   </tbody></table>
   <ul>
    <li><b>IPv6</b> : IPv4의 주소 부족 문제를 해결하기 위해 개발. 16비트씩 8부분, 총 128비트로 구성하며 각 부분은 16진수로 표현하고 콜론(:)으로 구분함</li>
    <li>IPv4와의 호환성 및 주소의 확장성, 융통성, 연동성이 뛰어남</li>
    <li>주소 각 부분이 0으로 연속된 경우 0을 생략하고 '::'만 표시할 수 있음</li>
    <li>IPv6 주소는 <b>유니캐스트</b>(단일 송신자와 단일 수신자 간 1대1 통신), <b>멀티캐스트</b>(단일 송신자와 다중 수신자 간 1대다 통신), <b>애니캐스트</b>(단일 송신자와 가장 가까이 있는 단일 수신자 간 통신)의 3종류로 분류함</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>07</span> 도메인 네임</h3><ul>
    <li>숫자로 된 IP 주소를 사람이 이해하기 쉬운 문자 형태로 표현한 것으로 중복되지 않는 주소</li>
    <li>호스트 컴퓨터 이름, 소속 기관 이름, 소속 기관의 종류, 소속 국가명 순으로 구성되며 왼쪽에서 오른쪽으로 갈수록 상위 도메인을 의미함</li>
    <li>도메인 네임은 보통 영문과 숫자, 하이픈(-)을 섞어서 만들며 단어와 단어 사이는 마침표(.)로 구분함</li>
    <li>도메인 네임은 전 세계에서 중복되지 않는 고유한 주소로 사용됨</li>
    <li>전 세계 도메인 네임을 총괄하는 곳은 ICANN이며, 우리나라는 KISA에서 관리함</li>
    <li><b>DNS(Domain Name System)</b> : 문자로 된 도메인 네임을 숫자로 된 IP 주소로 바꾸는 시스템</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>08</span> URL(Uniform Resource Locator)</h3><ul>
    <li>인터넷상에 존재하는 각종 자원이 있는 위치를 나타내는 표준 주소 체계</li>
    <li><b>형식</b> : 프로토콜://호스트(서버) 주소[:포트 번호][/파일 경로]</li>
    <li><b>프로토콜</b> : 인터넷 서비스의 종류로 http(WWW), ftp(FTP), telnet(TELNET), news(USENET), mailto(e-mail) 등을 기입함</li>
    <li><b>://</b> : 프로토콜과 나머지 URL을 분리하는 표준 기호</li>
    <li><b>호스트(서버) 주소</b> : 검색할 정보가 위치한 서버의 호스트 주소</li>
    <li><b>포트 번호</b> : TCP 접속에 사용되는 포트 번호</li>
    <li><b>파일 경로</b> : 서비스에 접속한 후 실제 정보가 있는 경로</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>09</span> OSI 7계층</h3><ul>
    <li>기종이 서로 다른 컴퓨터 간의 정보 교환을 원활히 하기 위해 국제표준화기구(ISO)에서 제정한 통신 규약</li>
    <li>네트워크를 이루고 있는 구성 요소들을 계층적 방법으로 나누고 각 계층의 표준을 정함</li>
    <li><b>물리(Physical) → 데이터 링크(Data Link) → 네트워크(Network) → 전송(Transport) → 세션(Session) → 표현(Presentation) → 응용(Application)</b>의 7개 계층으로 구성됨</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>10</span> 전자우편</h3><ul>
    <li>인터넷을 통해 다른 사람과 편지뿐만 아니라 그림, 동영상 등 다양한 형식의 데이터를 주고받을 수 있도록 해주는 서비스</li>
    <li>전자우편은 보내는 즉시 수신자에게 도착하므로 빠른 의견 교환이 가능하고, 한 사람이 동시에 여러 사람에게 동일한 전자우편을 보낼 수 있음</li>
    <li>수신자가 인터넷에 접속되어 있지 않더라도 메일이 발송되어 메일 서버에 저장되며, 수신자가 언제라도 인터넷에 접속하여 메일을 확인할 수 있음</li>
    <li>기본적으로 7비트의 ASCII 문자를 사용하여 메시지를 전달함</li>
    <li><b>주소 형식</b> : ID@호스트 주소(예: admin@gilbut.co.kr)</li>
   </ul><table className="win10-table"><tbody>
    <tr><th>SMTP</th><td>사용자의 컴퓨터에서 작성한 메일을 다른 사람의 계정이 있는 곳으로 전송하는 프로토콜</td></tr>
    <tr><th>POP3</th><td>메일 서버에 도착한 E-mail을 사용자가 컴퓨터로 가져올 수 있도록 메일 서버에서 제공하는 프로토콜</td></tr>
    <tr><th>MIME</th><td>웹 브라우저가 지원하지 않는 각종 멀티미디어 파일의 내용을 확인하고 실행시켜 주는 프로토콜</td></tr>
    <tr><th>IMAP</th><td>로컬 서버에서 프로그램을 이용하여 전자우편을 액세스하기 위한 표준 프로토콜로, 사용자는 메일 서버에 도착한 편지의 제목과 송신자를 확인하고 메일을 실제로 다운로드할 것인지를 결정할 수 있음</td></tr>
   </tbody></table><p><b>스팸 메일</b> : 통신망이나 인터넷을 통해 불특정 다수에게 원하지도, 요청하지도 않은 메일을 대량으로 보내는 광고성 메일로 정크 메일(Junk Mail) 또는 벌크 메일(Bulk Mail)이라고도 함</p></article>

   <article className="win10-theory-card"><h3><span>11</span> 기타 인터넷 서비스</h3><table className="win10-table"><tbody>
    <tr><th>WWW</th><td>텍스트, 그림, 동영상, 음성 등 인터넷에 존재하는 다양한 정보를 거미줄처럼 연결해 놓은 종합 정보 서비스로 HTTP 프로토콜을 사용하는 하이퍼텍스트 기반의 멀티미디어 서비스. HTTP는 하이퍼텍스트 문서를 전송하기 위해 사용하는 프로토콜임</td></tr>
    <tr><th>FTP</th><td>컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고받을 수 있도록 하는 원격 파일 전송 프로토콜. 파일의 전송(업로드), 수신(다운로드), 삭제, 이름 변경 등의 작업을 할 수 있음. FTP 서버에 있는 프로그램은 다운로드한 후 실행이 가능하며 데이터 전송을 위해 Binary 모드와 ASCII 모드를 제공함</td></tr>
    <tr><th>텔넷(Telnet)</th><td>멀리 떨어져 있는 컴퓨터에 접속하여 자신의 컴퓨터처럼 사용할 수 있도록 해주는 서비스</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>12</span> 웹 브라우저 관련 용어</h3><ul>
    <li><b>웹 브라우저</b> : 웹 서버와 HTTP 프로토콜로 통신하여 사용자가 요구한 홈페이지에 접근하여 웹 문서를 사용자에게 보여주는 프로그램. 플러그인 프로그램을 설치하여 동영상이나 소리 등 다양한 멀티미디어 데이터를 처리할 수 있고, 전자우편이나 FTP 서버 접속, 웹 페이지 저장·인쇄, 방문 주소 관리, HTML 문서 편집 등을 할 수 있음. 종류: 크롬(Chrome), 마이크로소프트 엣지(Edge), 파이어폭스(Firefox) 등</li>
    <li><b>플러그인(Plug-In)</b> : 웹 브라우저의 기능을 확장하기 위해 설치하는 프로그램으로 인터넷에서 오디오 듣기, 비디오 보기, 애니메이션 보기 등이 가능하도록 함</li>
    <li><b>쿠키(Cookie)</b> : 인터넷 사용자의 특정 웹 사이트에 대한 접속 정보를 저장하고 있는 작은 파일로, 인터넷 접속 시 매번 아이디와 비밀번호를 넣지 않고 자동으로 접속할 수 있게 함</li>
    <li><b>포털 사이트(Portal Site)</b> : 사용자가 웹에서 접속할 때 제일 먼저 방문하거나 가장 많이 머무르는 사이트로, 전자우편·뉴스·쇼핑·게시판 등 다양한 서비스를 통합하여 제공함</li>
    <li><b>미러 사이트(Mirror Site)</b> : 인터넷상에서 특정 사이트로 동시에 많은 이용자들이 접속하는 것을 방지하기 위해 같은 내용을 복사해 놓은 사이트</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>13</span> ICT 신기술 관련 용어</h3><ul>
    <li><b>그리드 컴퓨팅(Grid Computing)</b> : 지리적으로 분산되어 있는 컴퓨터를 초고속 인터넷 망으로 연결하여 공유함으로써 하나의 고성능 컴퓨터처럼 활용하는 기술</li>
    <li><b>위치 기반 서비스(LBS; Location Based Service)</b> : 통신 기술과 GPS, 그리고 컴퓨터에 저장된 데이터베이스를 이용하여 주변의 위치와 부가 서비스를 제공하는 기술</li>
    <li><b>Wibro(와이브로)</b> : 무선 광대역을 의미하며 휴대폰, 노트북, PDA 등의 모바일 기기를 이용하여 언제 어디서나 이동하면서 고속으로 무선 인터넷 접속이 가능한 서비스</li>
    <li><b>와이파이(WiFi; Wireless-Fidelity)</b> : Wireless Fidelity의 약어로, 2.4GHz대를 사용하는 무선 랜(WLAN) 규격에 적합한 제품에 주어지는 인증 마크</li>
    <li><b>유비쿼터스 컴퓨팅(Ubiquitous Computing)</b> : 언제 어디서나 어떤 기기를 통해서도 컴퓨팅이 가능하고, 초소형 칩을 모든 사물에 내장시켜 네트워크로 연결함으로써 사물끼리 통신이 가능한 환경</li>
   </ul><table className="win10-table"><tbody>
    <tr><th>RFID</th><td>사물에 전자 태그를 부착하고 무선 통신을 이용하여 사물의 정보 및 주변 정보를 감지하는 센서 기술</td></tr>
    <tr><th>USN</th><td>모든 사물에 부착된 RFID 태그 또는 센서를 통해 탐지된 사물의 인식 정보는 물론 주변의 온도, 습도, 위치정보, 압력, 오염 및 균열 정도 등과 같은 환경 정보를 네트워크와 연결하여 실시간으로 수집하고 관리하는 네트워크 시스템</td></tr>
   </tbody></table><ul>
    <li><b>사물 인터넷(IoT; Internet of Things)</b> : 세상에 존재하는 모든 사물을 네트워크로 연결해 인간과 사물, 사물과 사물 간 언제 어디서나 서로 소통할 수 있게 하는 새로운 정보 통신 환경. 인터넷을 기반으로 하므로 통신 비용이 추가될 수 있고 기존의 정보 보안 기술을 적용하기 어려워 해킹 등의 외부 위협에 대한 보안이 취약함</li>
    <li><b>NFC(Near Field Communication)</b> : 10cm 이내의 가까운 거리에서 무선으로 데이터를 전송하는 무선 태그 기술로, 전자태그(RFID)에 기록된 정보를 단말기 등에 전송함</li>
    <li><b>블루투스(Bluetooth)</b> : 10m 안팎의 근거리에서 저전력 무선 연결을 가능하게 해주는 근거리 무선 기술 표준으로, 휴대 가능한 장치들 간의 양방향 정보 전송이 가능함</li>
   </ul></article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>6장 문제</h2></div><div className="win10-quiz-list">
  {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}><div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div><div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div><button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>{isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}</article>})}
  </div></section>
 </section>
}
