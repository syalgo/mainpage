"use client";
import { useState } from "react";

type Q={number:number;question:string;choices:string[];answer:number;explanation:string};

const questions:Q[]=[
{number:1,question:"컴퓨터의 CPU에 있는 레지스터(Register)에 관한 설명으로 옳지 않은 것은?",choices:["CPU 내부에서 자료를 일시적으로 저장하는 저장장치이다.","주기억장치보다 저장 용량이 적고 속도가 느리다.","ALU(산술/논리장치)에서 연산된 자료를 일시적으로 저장한다.","레지스터에는 명령 레지스터, 주소 레지스터, 프로그램 카운터 등 여러 유형의 레지스터가 있다."],answer:1,explanation:"레지스터는 주기억장치보다 저장 용량은 작지만 속도는 빠릅니다."},
{number:2,question:"제어장치에서 사용되는 레지스터로, 다음 번에 실행할 명령어의 번지를 기억하는 것은?",choices:["프로그램 카운터(PC)","누산기(AC)","메모리 주소 레지스터(MAR)","메모리 버퍼 레지스터(MBR)"],answer:0,explanation:"다음 번에 실행할 명령어의 번지를 기억하는 레지스터는 프로그램 카운터(PC)입니다."},
{number:3,question:"컴퓨터의 연산장치에 있는 누산기(Accumulator)에 관한 설명으로 옳은 것은?",choices:["연산 결과를 일시적으로 기억하는 장치이다.","명령의 순서를 기억하는 장치이다.","명령어를 기억하는 장치이다.","명령을 해독하는 장치이다."],answer:0,explanation:"누산기(Accumulator)는 연산 결과를 일시적으로 기억하는 장치입니다."},
{number:4,question:"주기억장치에 대한 설명으로 가장 옳지 않은 것은?",choices:["주기억장치는 비휘발성 메모리로 대용량의 데이터와 프로그램을 영구적으로 보관하는데 사용된다.","ROM에는 주로 기본 입/출력 시스템(BIOS), 글자 폰트, 자가 진단 프로그램(POST) 등이 저장되어 있다.","주기억장치는 CPU가 직접 접근하여 데이터를 처리할 수 있는 기억장치로 현재 수행되는 프로그램과 데이터를 저장하고 있다.","RAM(Random Access Memory)은 자유롭게 읽기/쓰기가 가능한 기억장치이다."],answer:0,explanation:"주기억장치의 종류에는 ROM과 RAM이 있는데 ROM은 비휘발성 메모리, RAM은 휘발성 메모리입니다. 또한 주기억장치는 용량이 적기 때문에 데이터를 장기간 보관하기 위해서는 보조기억장치를 사용해야 합니다."},
{number:5,question:"컴퓨터에서 사용하는 캐시 메모리에 관한 설명으로 옳은 것은?",choices:["보조기억장치의 일부를 주기억장치처럼 사용하는 메모리이다.","기억된 정보의 내용 일부를 이용하여 주기억장치에 접근하는 장치이다.","EEPROM의 일종으로 비휘발성 메모리이다.","중앙처리장치(CPU)와 주기억장치 사이에 위치하여 컴퓨터 처리 속도를 향상시키는 메모리이다."],answer:3,explanation:"캐시 메모리는 CPU와 주기억장치 사이에 위치하여 컴퓨터 처리 속도를 향상시키는 메모리입니다."},
{number:6,question:"플래시 메모리(Flash Memory)에 관한 설명으로 옳지 않은 것은?",choices:["정보의 입출력이 자유롭고, 전송 속도가 빠르다.","비휘발성 기억장치이다.","트랙 단위로 저장된다.","전력 소모가 적다."],answer:2,explanation:"플래시 메모리는 트랙 단위가 아닌 블록 단위로 저장됩니다."},
{number:7,question:"일반 하드디스크에 비하여 속도가 빠르고 기계적 지연이나 에러의 확률 및 발열소음이 적으며, 경량화할 수 있는 하드디스크 대체 저장 장치로 옳은 것은?",choices:["DVD","HDD","SSD","ZIP"],answer:2,explanation:"문제에 제시된 내용은 SSD(Solid State Drive)에 대한 설명입니다."},
{number:8,question:"컴퓨터의 연산 속도 단위로 가장 빠른 것은?",choices:["1ms","1μs","1ns","1ps"],answer:3,explanation:"연산 속도 단위를 빠른 것부터 나열하면 피코초(ps, 10⁻¹²) → 나노초(ns, 10⁻⁹) → 마이크로초(μs, 10⁻⁶) → 밀리초(ms, 10⁻³)입니다."},
{number:9,question:"기억장치의 기억 용량 단위로 가장 큰 것은?",choices:["1TB","1KB","1GB","1MB"],answer:0,explanation:"기억 용량의 단위를 작은 것부터 큰 것까지 나열하면 Byte < KB < MB < GB < TB < PB < EB 순입니다."},
{number:10,question:"컴퓨터 출력장치인 모니터에 관한 용어의 설명으로 가장 거리가 먼 것은?",choices:["픽셀(Pixel) : 화면을 이루는 최소의 단위로서 그림의 화소라는 뜻을 의미하며 픽셀 수가 많을수록 해상도가 높아진다.","재생률(Refresh Rate) : 픽셀들이 밝게 빛나는 것을 유지하도록 하기 위한 1초당 재충전 횟수를 의미한다.","점 간격(Dot Pitch) : 픽셀들 사이의 공간을 나타내는 것으로 간격이 가까울수록 영상은 선명하다.","해상도(Resolution) : 모니터 화면의 명확성을 나타내는 것으로, 1인치(inch) 사각형에 픽셀의 수가 많을수록 표시할 수 있는 색상의 수가 증가한다."],answer:3,explanation:"해상도는 모니터 등 출력장치의 내용을 얼마나 선명하게 표현할 수 있느냐를 나타내는 단위로, 픽셀 수가 많을수록 선명해지는 것을 의미합니다."},
{number:11,question:"컴퓨터에서 사용하는 레이저 프린터에 관한 설명으로 옳지 않은 것은?",choices:["회전하는 드럼에 토너를 묻혀서 인쇄하는 방식이다.","비충격식이라 비교적 인쇄 소음이 적고 인쇄 속도가 빠르다.","인쇄 방식에는 드럼식, 체인식, 밴드식 등이 있다.","인쇄 해상도가 높으며 복사기와 같은 원리를 사용한다."],answer:2,explanation:"드럼식, 체인식, 밴드식은 라인 프린터의 인쇄 방식입니다."},
{number:12,question:"컴퓨터 시스템에서 사용하는 채널(Channel)에 관한 설명으로 옳지 않은 것은?",choices:["주변장치에 대한 제어 권한을 CPU로부터 넘겨받아 CPU 대신 입출력을 관리한다.","입출력 작업이 끝나면 CPU에게 인터럽트 신호를 보낸다.","CPU와 주기억장치의 속도 차이를 해결하기 위하여 사용된다.","채널에는 셀렉터(Selector), 멀티플렉서(Multiplexer), 블록 멀티플렉서(Block Multiplexer) 등이 있다."],answer:2,explanation:"채널은 CPU와 입·출력장치 사이의 속도 차이를 해결하기 위해 사용됩니다. CPU와 주기억장치의 속도 차이를 해결하기 위해 사용되는 것은 캐시 메모리입니다."},
{number:13,question:"USB 포트에 대한 설명으로 옳지 않은 것은?",choices:["주변장치를 127개까지 연결할 수 있다.","컴퓨터의 전원이 켜진 상태에서도 장치를 연결하거나 제거할 수 있다.","기존의 직렬, 병렬, PS/2 포트 등을 하나의 포트로 대체하기 위한 범용 직렬 버스이다.","한번에 8비트의 데이터가 동시에 전송되는 방식을 사용한다."],answer:3,explanation:"USB 포트는 직렬 포트로서 한 번에 1비트씩 데이터를 전송합니다. 한 번에 8비트의 데이터를 동시에 전송하는 것은 병렬 포트입니다."},
{number:14,question:"컴퓨터의 롬(ROM)에 기록되어 하드웨어를 제어하며, 하드웨어의 성능 향상을 위해 업그레이드할 수 있는 마이크로프로그램의 집합을 의미하는 것은?",choices:["프리웨어(Freeware)","셰어웨어(Shareware)","미들웨어(Middleware)","펌웨어(Firmware)"],answer:3,explanation:"ROM에 기록되어 하드웨어를 제어하는 마이크로프로그램의 집합을 펌웨어(Firmware)라고 합니다."},
{number:15,question:"컴퓨터를 관리하는 효율적인 방법으로 옳지 않은 것은?",choices:["컴퓨터를 이동하거나 부품을 교체할 경우에는 전원을 끄고 작업하는 것이 바람직하다.","시스템에 문제가 발생하면 시스템을 재부팅하고 하드디스크의 모든 파티션을 제거한다.","정기적으로 최신 바이러스 백신 프로그램을 사용하여 바이러스 감염을 방지하며, 중요한 데이터는 백업하여 둔다.","가급적 불필요한 프로그램은 설치하지 않도록 하며, 정기적으로 시스템을 점검한다."],answer:1,explanation:"하드디스크의 모든 파티션을 제거하면 저장된 내용도 모두 삭제되므로 시스템에 문제가 발생하면 [시작] → [설정] → [업데이트 및 보안] → [복구]를 통해 문제를 해결하는 것이 좋습니다."},
{number:16,question:"컴퓨터의 하드웨어를 업그레이드할 때 수치가 작을수록 좋은 항목은?",choices:["CPU 클럭 속도","하드디스크 용량","RAM 접근 속도","모뎀 전송 속도"],answer:2,explanation:"하드웨어를 업그레이드할 때 수치가 작을수록 좋은 항목은 RAM 접근 속도입니다."},
{number:17,question:"컴퓨터에서 사용하는 하드디스크의 파티션에 대한 설명으로 옳지 않은 것은?",choices:["하나의 물리적인 하드디스크를 여러 개의 파티션으로 나눌 수 있다.","파티션을 나눈 후에 하드디스크를 사용하기 위해서는 포맷을 해야 한다.","하나의 하드디스크 내의 모든 파티션에는 동일한 운영체제만 설치할 수 있다.","하나의 파티션에는 한 가지 파일 시스템만을 설치할 수 있다."],answer:2,explanation:"하나의 하드디스크 내 각각의 파티션에는 서로 다른 운영체제를 설치할 수 있습니다."},
{number:18,question:"하드디스크 용량이 부족할 경우의 해결 방법으로 옳지 않은 것은?",choices:["USB 파일 정리","휴지통 파일 정리","디스크 정리 수행","Windows 기능 제거"],answer:0,explanation:"USB 파일을 정리한다고 해서 하드디스크의 용량이 증가하지는 않습니다. 하드디스크의 파일을 USB로 백업한 후 하드디스크의 파일을 삭제해야 하드디스크의 용량이 증가됩니다."},
{number:19,question:"가상 메모리(Virtual Memory)에 대한 설명으로 옳지 않은 것은?",choices:["주기억장치의 용량보다 큰 대용량의 프로그램을 수행할 수 있는 장점이 있다.","가상 메모리를 사용하면 개별 프로그램의 수행 속도가 향상된다.","전원이 꺼지면 가상 메모리에 저장된 데이터는 사라진다.","가상 메모리를 이용하면 한 번에 여러 개의 프로그램을 수행시킬 수 있다."],answer:1,explanation:"가상 메모리는 보조기억장치를 이용하여 프로그램을 처리하는 것으로, 주기억장치를 이용하여 프로그램을 처리하는 일반적인 방법에 비해 수행 속도가 느려질 수 있습니다."},
{number:20,question:"보조기억장치에 대한 설명으로 옳지 않은 것은?",choices:["주기억장치에 비해 속도가 느리다.","주기억장치보다 저장 용량이 크다.","전원이 꺼지면 기억된 내용이 모두 소멸된다.","하드디스크, SSD, Blu-Ray 등이 사용된다."],answer:2,explanation:"보조기억장치는 전원이 차단되어도 내용이 그대로 유지됩니다."}
];

export default function ComputerHardwareStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>4장 컴퓨터 하드웨어</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>컴퓨터 하드웨어</h2></div>

   <article className="win10-theory-card"><h3><span>01</span> 중앙처리장치(CPU)</h3><ul>
    <li>사람의 두뇌와 같이 컴퓨터 시스템에 부착된 모든 장치의 동작을 제어하고, 명령을 실행하는 장치임</li>
    <li>중앙처리장치는 제어장치(Control Unit), 연산장치(ALU; Arithmetic & Logic Unit), 레지스터(Register)로 구성됨</li>
    <li><b>레지스터(Register)</b> : CPU 내부에서 처리할 명령어나 연산의 중간 결과값 등을 일시적으로 기억하는 소량의 임시 기억장소임. 플립플롭(Flip-Flop)이나 래치(Latch)들을 연결하여 만들며, 메모리 중에서 속도가 가장 빠름</li>
   </ul>
   <table className="win10-table"><tbody><tr><th>MIPS</th><td>1초당 명령 실행 수 - 백만</td></tr><tr><th>FLOPS</th><td>1초당 부동 소수점 연산 횟수</td></tr><tr><th>클럭 속도(Hz)</th><td>CPU 동작 클럭 주파수로, 1Hz는 1초에 1번 주기가 반복됨</td></tr></tbody></table>
   <p>중앙처리장치(CPU)의 성능에 영향을 미치는 요인 : 클럭 주파수, 캐시 메모리, 워드(명령어)의 크기, FSB(시스템 버스) 등</p>
   </article>

   <article className="win10-theory-card"><h3><span>02</span> 제어장치</h3><ul>
    <li>입·출력, 저장, 연산장치 등 컴퓨터의 모든 동작을 지시하고 제어하는 장치임</li>
    <li>주기억장치에서 읽어 들인 명령어를 해독하여 해당하는 장치에게 제어 신호를 보내 정확하게 수행하도록 지시함</li>
   </ul>
   <table className="win10-table"><tbody>
    <tr><th>프로그램 카운터(PC; Program Counter)</th><td>다음에 실행할 명령어의 번지를 기억하는 레지스터</td></tr>
    <tr><th>명령 레지스터(IR; Instruction Register)</th><td>현재 실행 중인 명령의 내용을 기억하는 레지스터</td></tr>
    <tr><th>명령 해독기(Decoder)</th><td>명령 레지스터에 있는 명령어를 해독하는 회로</td></tr>
    <tr><th>부호기(Encoder)</th><td>해독된 명령에 따라 각 장치로 보낼 제어 신호를 생성하는 회로</td></tr>
    <tr><th>메모리 주소 레지스터(MAR)</th><td>기억장치를 출입하는 데이터의 번지를 기억하는 레지스터</td></tr>
    <tr><th>메모리 버퍼 레지스터(MBR)</th><td>기억장치를 출입하는 데이터를 잠시 기억하는 레지스터</td></tr>
   </tbody></table>
   <h4>제어장치의 명령 실행 순서(기계 사이클)</h4><p>호출 → 해독 → 실행 → 저장</p>
   </article>

   <article className="win10-theory-card"><h3><span>03</span> 연산장치(ALU)</h3><ul>
    <li>제어장치의 명령에 따라 실제로 연산을 수행하는 장치임</li>
    <li>연산장치가 수행하는 연산에는 산술 연산, 논리 연산, 관계 연산, 이동 등이 있음</li>
   </ul>
   <table className="win10-table"><tbody>
    <tr><th>가산기(Adder)</th><td>2진수의 덧셈을 수행하는 회로</td></tr>
    <tr><th>보수기(Complementor)</th><td>뺄셈의 수행을 위해 입력된 값을 보수로 변환하는 회로</td></tr>
    <tr><th>누산기(AC; Accumulator)</th><td>연산된 결과를 일시적으로 저장하는 레지스터</td></tr>
    <tr><th>데이터 레지스터(Data Register)</th><td>연산에 사용될 데이터를 기억하는 레지스터</td></tr>
    <tr><th>상태 레지스터(Status Register)</th><td>연산 중에 발생하는 여러 가지 상태값을 기억하는 레지스터(부호, 오버플로, 언더플로, 자리올림, 인터럽트 등)</td></tr>
    <tr><th>인덱스 레지스터(Index Register)</th><td>주소 변경을 위해 사용되는 레지스터</td></tr>
   </tbody></table>
   </article>

   <article className="win10-theory-card"><h3><span>04</span> 주기억장치</h3><ul>
    <li>주기억장치는 CPU가 직접 접근하여 데이터를 처리할 수 있는 기억장치로, 현재 수행되는 프로그램과 데이터를 저장하고 있음</li>
    <li><b>ROM</b> : 비휘발성 메모리로, 입·출력 시스템, 글자 폰트, 자가 진단 프로그램 등을 저장함. 읽기는 가능하나 쓰기는 불가능함</li>
    <li><b>RAM</b> : 휘발성 메모리로, 사용 중인 프로그램이나 데이터를 저장함. 자유롭게 읽고 쓰기 가능</li>
   </ul>
   <h4>주기억장치의 단점</h4><ul><li>접근 속도가 빠르지만 가격이 비싸고 저장 용량이 적음</li><li>대부분 전원 공급이 중단되면 기억된 내용이 모두 지워지는 휘발성 메모리이므로, 작업한 문서를 오랜 기간 보관할 수 없음</li></ul>
   </article>

   <article className="win10-theory-card"><h3><span>05</span> 기타 메모리</h3><ul>
    <li><b>플래시 메모리(Flash Memory)</b> : EEPROM의 일종인 비휘발성 메모리로, 하드디스크에 비해 전력 소모가 적음. 블록 단위로 데이터를 전송하며 전송 속도가 빨라 개인용 정보 단말기, 스마트폰, 디지털 카메라 등에 주로 사용됨</li>
    <li><b>캐시 메모리(Cache Memory)</b> : CPU와 주기억장치 사이에서 컴퓨터의 처리 속도를 향상시키기 위해 저용량의 SRAM을 사용함</li>
    <li><b>가상 메모리(Virtual Memory)</b> : 보조기억장치의 일부를 주기억장치처럼 사용하는 메모리 기법으로, 대용량의 프로그램을 수행할 수 있고 한 번에 여러 개의 프로그램을 수행시킬 수 있지만 전원이 꺼지면 데이터가 소실됨</li>
    <li><b>버퍼 메모리(Buffer Memory)</b> : 두 장치 간에 데이터를 주고 받을 때 속도 차이를 해결하기 위한 저장 공간</li>
    <li><b>연상(연관) 메모리(Associative Memory)</b> : 기억장치에 저장된 정보에 접근할 때 주소 대신 기억된 내용의 일부를 이용하여 직접 접근하는 장치로 정보 검색이 신속하고 캐시 메모리가 가상 메모리 관리 기법에서 사용하는 매핑 테이블에 사용됨</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>06</span> 보조기억장치</h3><ul>
    <li>주기억장치에 비해 속도는 느리지만 전원이 차단되어도 내용이 유지되고 저장 용량이 큼</li>
    <li><b>하드디스크(Hard Disk)</b> : 자성 물질을 입힌 금속 원판을 여러 장 겹쳐서 만든 기억매체로 개인용 컴퓨터에서 보조기억장치로 널리 사용됨</li>
    <li><b>SSD(Solid State Drive)</b> : HDD와 비슷하게 동작하면서 HDD와는 달리 기계적 장치가 없는 반도체를 이용하여 정보를 저장하는 보조기억장치로, 고속으로 데이터를 입·출력할 수 있음. 기계적 지연이나 에러의 확률 및 발열·소음과 전력 소모가 적으며 소형화, 경량화할 수 있음</li>
    <li><b>DVD</b> : 4.7~17GB의 대용량 저장이 가능한 차세대 기억 매체로, 뛰어난 화질과 음질의 멀티미디어 데이터를 저장할 수 있음</li>
    <li><b>Blu-Ray</b> : 고선명(HD) 비디오를 위한 디지털 데이터를 저장할 수 있도록 만든 저장매체로 25GB 이상 저장할 수 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>07</span> 기억장치 관련 단위</h3>
    <h4>기억 용량 단위</h4><table className="win10-table"><thead><tr><th>단위</th><th>Byte</th><th>KB</th><th>MB</th><th>GB</th><th>TB</th><th>PB</th><th>EB</th></tr></thead><tbody><tr><th>저장 용량</th><td>8Bit</td><td>1024Byte</td><td>1024KB</td><td>1024MB</td><td>1024GB</td><td>1024TB</td><td>1024PB</td></tr></tbody></table>
    <h4>처리 속도 단위</h4><table className="win10-table"><thead><tr><th>단위</th><th>ms</th><th>μs</th><th>ns</th><th>ps</th><th>fs</th><th>as</th></tr></thead><tbody><tr><th>처리 속도</th><td>10⁻³</td><td>10⁻⁶</td><td>10⁻⁹</td><td>10⁻¹²</td><td>10⁻¹⁵</td><td>10⁻¹⁸</td></tr></tbody></table>
    <p>기억장치 접근 속도 비교(빠름 &gt; 느림) : 레지스터 &gt; 주기억장치(캐시(SRAM) &gt; DRAM &gt; ROM) &gt; 보조기억장치(하드디스크 &gt; Zip Disk &gt; CD-ROM &gt; 플로피디스크) &gt; 자기 테이프</p>
   </article>

   <article className="win10-theory-card"><h3><span>08</span> 표시장치 관련 용어</h3><table className="win10-table"><tbody>
    <tr><th>픽셀(Pixel, 화소)</th><td>모니터 화면을 구성하는 가장 작은 단위. 화면 해상도가 1,024×768이라고 하면 가로 1,024개, 세로 768개의 픽셀로 화면을 표시한다는 뜻임</td></tr>
    <tr><th>해상도(Resolution)</th><td>모니터 등의 출력장치가 내용을 얼마나 선명하게 표현할 수 있느냐를 나타내는 단위로, 픽셀 수가 많을수록 선명함</td></tr>
    <tr><th>재생률(Refresh Rate)</th><td>픽셀들이 밝게 빛나는 것을 유지하도록 하기 위한 1초당 재충전 횟수</td></tr>
    <tr><th>점 간격(Dot Pitch)</th><td>픽셀들 사이의 공간을 나타내는 것으로 간격이 가까울수록 해상도가 높음</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>09</span> 레이저 프린터</h3><ul>
    <li>회전하는 둥근 막대(드럼)에 레이저 빛을 이용해 인쇄할 문자나 그림 모양으로 토너(Toner) 가루를 묻힌 뒤 종이에 인쇄하는 방식으로 복사기와 같은 원리임</li>
    <li>인쇄 소음이 적고 인쇄 속도가 빠름</li>
    <li>인쇄 속도의 단위는 PPM(Page Per Minute)을 사용함</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>10</span> 채널</h3><ul>
    <li>주변장치에 대한 제어 권한을 CPU로부터 넘겨받아 CPU 대신 입·출력을 관리함</li>
    <li>채널은 중앙처리장치와 입·출력장치 사이의 속도 차이로 인한 문제점을 해결하기 위해 사용됨</li>
    <li>채널은 입·출력 작업이 끝나면 CPU에게 인터럽트 신호를 보냄</li>
    <li>채널에는 셀렉터(Selector), 멀티플렉서(Multiplexer), 블록 멀티플렉서(Block Multiplexer) 등이 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>11</span> 포트</h3><table className="win10-table"><tbody>
    <tr><th>USB 포트<br/>(범용 직렬 버스)</th><td>기존의 직렬, 병렬, PS/2 포트 등 다양한 직렬 포트의 일종. 주변장치를 최대 127개까지 연결할 수 있음. 핫 플러그 인(Hot Plug-in)과 플러그 앤 플레이(Plug and Play)를 지원함. 연결 단자 색상 : USB 2.0 이하 검정색 또는 흰색, USB 3.0 파란색, USB 3.1 하늘색 또는 빨간색</td></tr>
    <tr><th>HDMI</th><td>영상과 음향 신호를 압축하지 않고 통합하여 전송하는 고선명 멀티미디어 인터페이스. S-비디오, 컴포지트 등의 아날로그 케이블보다 고품질의 음향 및 영상을 전송함</td></tr>
    <tr><th>블루투스(Bluetooth)</th><td>근거리 무선 통신을 가능하게 해주는 통신 방식. 핸드폰, PDA, 노트북과 같은 휴대 가능한 장치들 간의 양방향 정보 전송이 가능함</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>12</span> 펌웨어</h3><ul>
    <li>하드웨어의 동작을 지시하는 소프트웨어이지만 하드웨어적으로 구성되어 하드웨어의 일부로 볼 수도 있는 제품임</li>
    <li>주로 ROM에 반영구적으로 저장되어 하드웨어를 제어(관리)하는 역할을 수행함</li>
    <li>읽기/쓰기가 가능한 플래시 롬(Flash ROM)에 저장되기 때문에 내용을 쉽게 변경하거나 추가·삭제할 수 있음</li>
    <li>펌웨어로 만들어져 있는 프로그램을 마이크로프로그램이라고 함</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>13</span> 시스템 관리</h3><ul>
    <li>컴퓨터는 평평하고 흔들림이 없는 곳에 설치하는 것이 바람직함</li>
    <li>컴퓨터를 이동하거나 부품을 교체할 때는 반드시 전원을 끄고 작업함</li>
    <li>직사광선을 피하고 습기가 적으며 통풍이 잘되고 먼지 발생이 적은 곳에 설치함</li>
    <li>먼지가 많은 환경의 경우 메인보드 내에 먼지가 쌓이지 않도록 주의하고 자주 확인하여 청소함</li>
    <li>주기적으로 디스크 정리, 디스크 검사, 드라이브 조각 모음 및 최적화를 수행하여 저장 매체(하드디스크 등)를 최적화함</li>
    <li>중요한 데이터는 사용하지 않는 별도의 저장 매체에 주기적으로 백업함</li>
    <li>저장 매체의 주변에 자성이 강한 물체를 두지 않도록 주의함</li>
    <li>시스템에 문제가 발생하면 [설정] → [업데이트 및 보안] → [복구]를 통해 문제를 해결함</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>14</span> 업그레이드</h3><ul>
    <li>컴퓨터의 하드웨어나 소프트웨어를 일부 교체하거나 추가하여 컴퓨터 시스템의 성능을 향상시키는 작업으로 하드웨어 업그레이드와 소프트웨어 업그레이드로 나눔</li>
    <li><b>소프트웨어 업그레이드</b> : 기존 소프트웨어의 버그를 수정하거나 새로운 기능을 추가한 새 버전의 소프트웨어를 구입 또는 통신망에서 다운받아 시스템에 설치하는 것을 말함</li>
    <li>예 : Windows 7 → Windows 10, 한글 2010 → 한글 2020, MS-오피스 2016 → MS-오피스 2021</li>
   </ul>
   <h4>업그레이드 시 고려할 사항</h4>
   <table className="win10-table"><thead><tr><th>수치가 클수록 좋은 것</th><th>수치가 작을수록 좋은 것</th></tr></thead><tbody><tr><td>CPU 클럭 속도 : MHz 또는 GHz<br/>모뎀 전송 속도 : bps 또는 cps<br/>DVD-ROM 드라이브 전송 속도 : 배속<br/>하드디스크 용량 : GB<br/>하드디스크 회전 수 : RPM<br/>하드디스크 전송 속도 : MB/s</td><td>RAM 접근 속도 : ns</td></tr></tbody></table>
   </article>

   <article className="win10-theory-card"><h3><span>15</span> 파티션</h3><ul>
    <li>하나의 물리적인 하드디스크를 여러 개의 논리적인 영역으로 나누는 작업으로, 기본 파티션과 확장 파티션이 있음</li>
    <li>목적 : 특정 데이터만 별도로 보관할 드라이브를 확보하거나 하나의 하드디스크에 서로 다른 운영체제를 설치하기 위함</li>
    <li>운영체제에서는 파티션이 하나의 드라이브로 인식됨</li>
    <li>하나의 파티션에는 한 가지의 파일 시스템만 사용할 수 있으며, 파티션을 설정한 후 데이터 저장을 위해서는 포맷 과정을 거쳐야 함</li>
    <li>파티션 설정 : [시작] → [Windows 관리 도구] → [컴퓨터 관리] → [저장소] → [디스크 관리] 이용</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>16</span> 하드디스크 용량 문제 해결</h3><ul>
    <li>자주 사용하지 않는 파일을 백업한 다음 하드디스크에서 삭제함</li>
    <li>사용하지 않는 Windows 기능이나 불필요한 프로그램을 제거함</li>
    <li>휴지통에 있는 파일을 삭제함</li>
    <li>디스크 정리를 수행하여 휴지통 파일, 임시 인터넷 파일, 다운로드한 프로그램 파일 등의 불필요한 파일들을 삭제함</li>
    <li>웹 브라우저에서 사용한 캐시 폴더의 내용을 삭제함</li>
    <li>확장명이 .bak(백업 파일) 또는 .tmp(임시 파일)인 파일을 삭제함</li>
   </ul></article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>4장 문제</h2></div><div className="win10-quiz-list">
  {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}><div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div><div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div><button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>{isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}</article>})}
  </div></section>
 </section>
}
