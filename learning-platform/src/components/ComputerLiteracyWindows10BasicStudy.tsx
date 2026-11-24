"use client";

import { useState } from "react";

type QuizQuestion = {
  number: number;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const shortcuts = [
  ["F2", "폴더 및 파일의 이름을 변경함"],
  ["F3", "파일 탐색기에서 검색 상자를 선택함"],
  ["F4", "파일 탐색기에서 ‘주소 표시줄’ 목록을 표시함"],
  ["F5", "최신 정보로 고침"],
  ["F6", "창이나 바탕 화면의 요소들을 순서대로 전환함"],
  ["F10", "현재 실행 중인 앱의 메뉴 모음을 활성화함"],
  ["Alt + ← / →", "현재 실행 중인 화면의 다음 화면이나 이전 화면으로 이동함"],
  ["Alt + Esc", "현재 실행 중인 앱들을 순서대로 전환함"],
  ["Alt + Tab", "현재 실행 중인 앱들의 목록을 화면 중앙에 나타내고, Alt를 누른 상태에서 Tab으로 이동할 작업 창을 선택함"],
  ["Alt + Enter", "선택된 항목의 속성 대화상자를 실행함"],
  ["Alt + Spacebar", "활성창의 바로 가기 메뉴를 표시함"],
  ["Alt + F4", "실행 중인 창이나 앱을 종료함. 실행 중인 앱이 없으면 ‘Windows 종료’ 창을 나타냄"],
  ["Alt + PrintScreen", "현재 작업 중인 활성 창을 클립보드로 복사함"],
  ["Alt + F8", "로그인 화면에서 암호를 입력할 때 ● 기호 대신 입력한 내용을 확인할 수 있음"],
  ["Ctrl + A", "폴더 및 파일을 모두 선택함"],
  ["Ctrl + Esc", "시작 메뉴를 표시함"],
  ["Ctrl + Shift + Esc", "‘작업 관리자’ 대화상자를 실행하여 문제가 있는 앱을 강제로 종료함"],
  ["Ctrl + 마우스 스크롤", "바탕 화면의 아이콘 크기를 변경함"],
  ["Shift + Delete", "폴더나 파일을 휴지통을 거치지 않고 바로 삭제함"],
  ["Shift + F10", "바로 가기 메뉴를 표시함"],
  ["Windows", "시작 단추를 클릭한 것처럼 시작 메뉴를 표시함"],
  ["Windows + D", "열려 있는 모든 창과 대화상자를 최소화하여 바탕 화면을 표시하거나 이전 크기로 나타냄"],
  ["Windows + E", "파일 탐색기를 실행함"],
  ["Windows + F", "피드백 허브 앱을 실행함"],
  ["Windows + L", "컴퓨터를 잠그거나 사용자를 전환함"],
  ["Windows + M / Windows + Shift + M", "열려 있는 모든 창을 최소화 / 이전 크기로 나타냄"],
  ["Windows + R", "실행 창을 나타냄"],
  ["Windows + U", "설정의 접근성 창을 나타냄"],
  ["Windows + T", "작업 표시줄의 앱을 차례로 선택함"],
  ["Windows + A", "알림 센터를 표시함"],
  ["Windows + B", "알림 영역으로 포커스를 옮김"],
  ["Windows + Alt + D", "알림 영역에 날짜 및 시간을 표시하거나 숨김"],
  ["Windows + I", "설정 창을 화면에 나타냄"],
  ["Windows + S", "검색 상자로 포커스를 옮김"],
  ["Windows + Ctrl + D", "가상 데스크톱을 추가함"],
  ["Windows + Ctrl + F4", "사용 중인 가상 데스크톱을 삭제함"],
  ["Windows + Home", "선택된 창을 제외한 모든 창을 최소화하거나 이전 크기로 나타냄"],
  ["Windows + ↑ / ← / → / ↓", "선택된 창 최대화 / 화면 왼쪽 최대화 / 화면 오른쪽 최대화 / 창 최소화"],
  ["Windows + Ctrl + F", "컴퓨터 찾기 대화상자를 나타냄"],
  ["Windows + Tab", "작업 보기를 실행함"],
  ["Windows + Pause/Break", "설정 → 시스템 → 정보 창을 나타냄"],
];

const questions: QuizQuestion[] = [
  {
    number: 1,
    question: "Plug and Play 기능에 대해 올바르게 설명한 것은?",
    choices: [
      "새로운 장치를 설치하면 자동적으로 감지하여 적절한 조치를 취하여 사용자가 쉽게 새로운 부품이나 주변 장치를 설치할 수 있도록 지원하는 기능이다.",
      "새로운 장치를 설정한 후 수동적으로 Setting만 시켜주면 사용자가 쉽게 사용할 수 있도록 하는 기능이다.",
      "윈도우에서 여러 개의 작업을 동시에 수행할 수 있게 지원하는 기능이다.",
      "기존의 도스 시스템보다 수행 속도를 저해시키는 윈도우의 앱 수행 방식이다.",
    ],
    answer: 0,
    explanation: "Plug and Play 기능은 컴퓨터 시스템에 하드웨어를 설치했을 때, 해당 하드웨어를 사용하는 데 필요한 시스템 환경을 운영체제가 자동으로 구성해 주는 것을 말합니다.",
  },
  {
    number: 2,
    question: "한글 Windows 10에서 실행 중인 프로그램 사이의 작업 전환을 위한 바로 가기 키는?",
    choices: ["Alt + Enter", "Alt + F4", "Alt + Tab", "Alt + Delete"],
    answer: 2,
    explanation: "Alt + Enter는 선택된 항목의 속성 대화상자를 실행하고, Alt + F4는 실행 중인 창이나 앱을 종료합니다. Alt + Tab은 작업 창을 전환하는 바로 가기 키입니다.",
  },
  {
    number: 3,
    question: "Windows에서 Winkey와 함께 사용하는 바로 가기 키에 대한 설명으로 틀린 것은?",
    choices: [
      "Windows + I : ‘설정’ 창을 표시함",
      "Windows + D : 모든 창을 최소화함",
      "Windows + L : 컴퓨터를 잠금",
      "Windows + E : ‘실행’ 창을 표시함",
    ],
    answer: 3,
    explanation: "Windows + E는 파일 탐색기를 실행하는 바로 가기 키입니다. ‘실행’ 창을 표시하는 바로 가기 키는 Windows + R입니다.",
  },
  {
    number: 4,
    question: "Windows에서 바로 가기 아이콘에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "원본 파일이 있는 위치와 관계없이 만들 수 있다.",
      "하나의 원본 파일에 대하여 여러 개의 바로 가기 아이콘을 만들 수 없다.",
      "바로 가기 아이콘의 확장자는 LNK이다.",
      "원본 파일을 삭제하면 바로 가기 아이콘을 실행할 수 없다.",
    ],
    answer: 1,
    explanation: "하나의 원본 파일에 대하여 여러 개의 바로 가기 아이콘을 만들 수 있습니다.",
  },
  {
    number: 5,
    question: "작업 표시줄의 바로 가기 메뉴에서 선택할 수 없는 항목은?",
    choices: ["작업 표시줄에 피플 표시", "터치 키보드 단추 표시", "작업 보기 단추 표시", "개인 설정 표시"],
    answer: 3,
    explanation: "작업 표시줄의 바로 가기 메뉴에 ‘개인 설정 표시’라는 항목은 없습니다.",
  },
  {
    number: 6,
    question: "한글 Windows 10의 작업 표시줄 설정에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "자주 사용하는 앱을 작업 표시줄에 표시할 수 있다.",
      "데스크톱 모드에서 작업 표시줄 자동 숨기기를 설정할 수 있다.",
      "화면에서 작업 표시줄의 위치를 왼쪽, 위쪽, 오른쪽, 아래쪽 중에서 설정할 수 있다.",
      "작업 표시줄이 꽉 차면 같은 앱은 그룹으로 묶어서 하나의 단추로 표시되도록 할 수 있다.",
    ],
    answer: 0,
    explanation: "작업 표시줄 설정에 자주 사용하는 앱을 직접 표시하게 하는 옵션은 없습니다. 작업 표시줄에 앱을 추가하려면 앱을 작업 표시줄에 놓거나 시작 메뉴의 앱 바로 가기 메뉴에서 ‘자세히 → 작업 표시줄에 고정’을 선택합니다.",
  },
  {
    number: 7,
    question: "하나의 컴퓨터에서 A 사용자가 여러 개의 프로그램을 실행시킨 상태에서 잠시 B 사용자가 사용할 수 있도록 하는 방법으로 옳은 것은? (단, 해당 컴퓨터에 사용자 A와 사용자 B의 계정은 모두 등록되어 있다.)",
    choices: ["로그오프를 수행한다.", "사용자 전환을 수행한다.", "시스템을 다시 시작한다.", "전원을 종료한 후 재부팅한다."],
    answer: 1,
    explanation: "시작 메뉴에서 사용자 계정을 클릭한 후 등록된 다른 사용자를 선택하면 기존 사용자가 실행 중인 프로그램이 종료되지 않고 다른 사용자로 전환됩니다.",
  },
  {
    number: 8,
    question: "Windows 10 작업 표시줄의 점프 목록 사용에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "프로그램의 점프 목록을 보려면 작업 표시줄의 프로그램 아이콘을 마우스 오른쪽 단추로 클릭한다.",
      "점프 목록에서 항목을 열려면 프로그램의 점프 목록에서 해당 항목을 클릭한다.",
      "점프 목록에 항목을 고정하려면 프로그램의 점프 목록에서 항목을 가리킨 다음 압정 아이콘을 클릭한다.",
      "점프 목록에서 항목을 제거하려면 프로그램의 점프 목록에서 항목을 가리킨 다음 Delete를 누른다.",
    ],
    answer: 3,
    explanation: "점프 목록에 고정된 항목을 해제하려면 항목 위로 마우스 포인터를 가져가면 표시되는 ‘이 목록에서 제거’ 아이콘을 클릭합니다.",
  },
  {
    number: 9,
    question: "한글 Windows 10의 파일 탐색기에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "폴더와 파일을 계층 구조로 확인할 수 있다.",
      "공유 메뉴를 이용하여 사용자 전환이나 로그오프를 수행할 수 있다.",
      "파일 및 폴더를 복사하고, 옮기고, 이름을 바꾸고 검색할 수 있다.",
      "파일을 선택한 후 바로 가기 메뉴에서 인쇄를 선택하면 해당 파일을 사용자가 직접 열지 않고 바로 인쇄할 수 있다.",
    ],
    answer: 1,
    explanation: "공유 리본 메뉴를 이용하여 파일 및 폴더를 공유하거나 압축, 메일 발송 등을 수행할 수 있지만 사용자 전환이나 로그오프는 수행할 수 없습니다.",
  },
  {
    number: 10,
    question: "한글 Windows 10의 폴더 옵션에서 설정할 수 있는 작업에 해당되지 않는 것은?",
    choices: [
      "숨김 파일 및 폴더를 표시할 수 있다.",
      "색인된 위치에서는 파일 이름뿐만 아니라 내용도 검색하도록 설정할 수 있다.",
      "숨긴 파일 및 폴더의 숨김 속성을 일괄 해제할 수 있다.",
      "파일이나 폴더를 한 번 클릭해서 열 것인지, 두 번 클릭해서 열 것인지를 설정할 수 있다.",
    ],
    answer: 2,
    explanation: "폴더 옵션에서는 숨김 파일·폴더의 표시 여부를 지정할 수 있습니다. 숨김 파일·폴더의 숨김 속성을 해제하려면 해당 파일이나 폴더의 속성 대화상자에서 숨김 속성을 해제해야 합니다.",
  },
  {
    number: 11,
    question: "한글 Windows 10에서 하드디스크를 포맷하기 위한 [포맷] 창에서 설정 가능한 항목으로 옳지 않은 것은?",
    choices: ["볼륨 레이블 입력", "파티션 제거", "파일 시스템 선택", "빠른 포맷 선택"],
    answer: 1,
    explanation: "포맷 대화상자에서는 파티션 제거를 설정할 수 없습니다.",
  },
  {
    number: 12,
    question: "폴더의 [속성] 창에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "폴더의 저장 위치를 변경할 수 있다.",
      "폴더가 포함하고 있는 하위 폴더 및 파일의 개수를 알 수 있다.",
      "폴더에 ‘읽기 전용’ 속성을 설정하거나 해제할 수 있다.",
      "해당 폴더의 만든 날짜를 알 수 있다.",
    ],
    answer: 0,
    explanation: "폴더의 속성 창에서는 폴더의 저장 위치를 확인할 수 있지만 변경할 수는 없습니다.",
  },
  {
    number: 13,
    question: "한글 Windows 10에서 작업 표시줄의 [검색 상자]에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "검색 항목은 모두, 앱, 문서, 웹, 동영상, 설정, 전자 메일, 폴더 등이다.",
      "작업 표시줄의 바로 가기 메뉴에서 [검색]을 선택하여 검색 상자를 표시하거나 숨길 수 있다.",
      "검색된 앱을 선택하여 바로 실행할 수 있다.",
      "Windows + F를 누르면 검색 상자로 포커스가 옮겨진다.",
    ],
    answer: 3,
    explanation: "Windows + F를 누르면 피드백 허브 앱이 실행됩니다. 작업 표시줄의 검색 상자로 이동하는 바로 가기 키는 Windows + S입니다.",
  },
  {
    number: 14,
    question: "파일이나 폴더를 복사하거나 이동하는 방법으로 옳지 않은 것은?",
    choices: [
      "폴더를 마우스로 선택한 후 동일한 드라이브의 다른 폴더로 끌어서 놓으면 이동이 된다.",
      "USB에 저장되어 있는 파일을 마우스로 선택한 후 바탕 화면으로 끌어서 놓으면 복사가 된다.",
      "파일을 마우스로 선택한 후 Ctrl을 누른 채 같은 드라이브의 다른 폴더로 끌어서 놓으면 복사가 된다.",
      "폴더를 마우스로 선택한 후 Alt를 누른 채 같은 드라이브의 다른 폴더로 끌어서 놓으면 이동이 된다.",
    ],
    answer: 3,
    explanation: "폴더를 마우스로 선택한 후 Alt를 누른 채 다른 폴더로 끌어서 놓으면 폴더의 바로 가기 아이콘이 생성됩니다.",
  },
  {
    number: 15,
    question: "한글 Windows 10의 클립보드에 대한 설명으로 가장 옳지 않은 것은?",
    choices: [
      "클립보드는 Windows뿐만 아니라 설치된 모든 앱에서 공통으로 이용한다.",
      "화면 전체 내용을 그대로 클립보드에 복사하는 키는 PrintScreen이다.",
      "현재 사용 중인 활성창의 내용을 클립보드에 복사하는 키는 Ctrl + PrintScreen이다.",
      "클립보드의 내용은 시스템을 재부팅하면 모두 삭제된다.",
    ],
    answer: 2,
    explanation: "활성창의 내용을 클립보드에 복사하려면 Alt + PrintScreen을 눌러야 합니다.",
  },
  {
    number: 16,
    question: "파일 삭제 시 파일이 [휴지통]에 임시 보관되어 복원이 가능한 경우는?",
    choices: [
      "바탕 화면에 있는 파일을 [휴지통]으로 드래그 앤 드롭하여 삭제한 경우",
      "USB 메모리에 저장되어 있는 파일을 Delete로 삭제한 경우",
      "네트워크 드라이브의 파일을 바로 가기 메뉴의 [삭제]를 클릭하여 삭제한 경우",
      "[휴지통]의 크기를 0%로 설정한 후 파일 탐색기 안의 파일을 삭제한 경우",
    ],
    answer: 0,
    explanation: "USB 메모리, 네트워크 드라이브에서 삭제한 파일과 휴지통의 최대 크기를 0으로 설정한 상태에서 삭제한 파일은 휴지통에 보관되지 않으므로 복원할 수 없습니다.",
  },
  {
    number: 17,
    question: "한글 Windows 10의 [메모장]에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "작성한 문서를 저장할 때 확장자는 기본적으로 .txt가 부여된다.",
      "특정한 문자열을 찾을 수 있는 찾기 기능이 있다.",
      "그림, 차트 등의 OLE 개체를 삽입할 수 있다.",
      "현재 시간을 삽입하는 기능이 있다.",
    ],
    answer: 2,
    explanation: "메모장에는 그림, 차트 등의 OLE 개체를 삽입할 수 없습니다.",
  },
  {
    number: 18,
    question: "Windows에서 사용하는 바로 가기 키에 대한 설명으로 옳은 것은?",
    choices: [
      "Alt + Delete : 휴지통을 거치지 않고 바로 삭제한다.",
      "Ctrl + Esc : 시작 화면을 표시한다.",
      "Alt + A : 모든 개체를 선택한다.",
      "Ctrl + Tab : 실행된 프로그램 순서대로 전환한다.",
    ],
    answer: 1,
    explanation: "휴지통을 거치지 않고 바로 삭제하는 바로 가기 키는 Shift + Delete이고, 모든 개체를 선택하는 키는 Ctrl + A이며, 실행 중인 프로그램을 순서대로 전환하는 키는 Alt + Esc입니다.",
  },
  {
    number: 19,
    question: "한글 Windows 10의 [휴지통]에 관한 설명으로 옳지 않은 것은?",
    choices: [
      "휴지통의 실제 파일이 저장된 폴더의 위치는 일반적으로 C:\\$Recycle.Bin이다.",
      "휴지통에 보관된 파일은 삭제된 위치, 삭제된 날짜와 시간, 크기 등의 정보를 갖는다.",
      "휴지통에 보관된 파일은 이름을 변경하거나 실행할 수 없다.",
      "휴지통의 크기는 드라이브 용량의 10%~20% 범위 내에서 시스템이 자동으로 설정하며, 변경할 수 없다.",
    ],
    answer: 3,
    explanation: "휴지통의 기본적인 크기는 드라이브 용량의 5%~10% 범위에서 시스템이 자동으로 설정하지만 사용자가 원하는 크기를 MB 단위로 지정할 수 있습니다.",
  },
];

export default function ComputerLiteracyWindows10BasicStudy() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  function printTheory() {
    document.body.classList.add("print-win10-theory");
    const cleanup = () => document.body.classList.remove("print-win10-theory");
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
    window.setTimeout(cleanup, 1000);
  }

  return (
    <section className="win10-study-page">
      <header className="win10-study-hero">
        <span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span>
        <h1>1장 한글 Windows 10의 기본</h1>
      </header>

      <div className="win10-print-actions">
        <button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button>
      </div>

      <section className="win10-print-area">
        <div className="win10-section-title">
          <span>핵심요약</span>
          <h2>한글 Windows 10의 기본</h2>
        </div>

        <article className="win10-theory-card">
          <h3><span>01</span> 한글 Windows 10의 특징</h3>
          <ul>
            <li><b>그래픽 사용자 인터페이스(GUI) 사용</b> : 키보드로 명령어를 직접 입력하지 않고, 아이콘이나 메뉴를 마우스로 선택하여 모든 작업을 수행하는 사용자 작업 환경</li>
            <li><b>선점형 멀티태스킹(Preemptive Multi-tasking)</b> : 운영체제가 각 작업의 CPU 이용 시간을 제어하여 앱 실행 중 문제가 발생하면 해당 앱을 강제 종료시키고 모든 시스템 자원을 반환하는 멀티태스킹 운영 방식</li>
            <li><b>플러그 앤 플레이(PnP, Plug & Play)</b> : 컴퓨터 시스템에 하드웨어를 설치했을 때 해당 하드웨어를 사용하는 데 필요한 시스템 환경을 운영체제가 자동으로 구성해 주는 것</li>
            <li><b>OLE(Object Linking and Embedding)</b> : 다른 앱에서 작성된 문자나 그림 등의 개체(Object)를 현재 작성 중인 문서에 자유롭게 연결(Linking)하거나 삽입(Embedding)하여 편집할 수 있게 하는 기능</li>
            <li><b>64비트 데이터 처리</b> : 완전한 64비트로 데이터를 처리하므로 더 많은 양의 데이터를 빠르게 처리할 수 있으며, 사용자가 좀 더 빠르고 효율적인 시스템을 구축할 수 있게 함</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>02</span> 바로 가기 키</h3>
          <div className="win10-shortcut-grid">
            {shortcuts.map(([key, value]) => (
              <div key={key}><kbd>{key}</kbd><p>{value}</p></div>
            ))}
          </div>
        </article>

        <article className="win10-theory-card">
          <h3><span>03</span> 바로 가기 아이콘(단축 아이콘)</h3>
          <ul>
            <li>자주 사용하는 문서나 앱을 빠르게 실행시키기 위한 아이콘으로, 원본 파일의 위치 정보를 가지고 있음</li>
            <li>바로 가기 아이콘을 실행시키면 연결된 원본 파일이 실행됨</li>
            <li>폴더나 파일, 디스크 드라이브, 다른 컴퓨터, 프린터 등 모든 개체에 대해 만들 수 있음</li>
            <li>왼쪽 아래에 화살표 표시가 있어 일반 아이콘과 구별됨</li>
            <li>확장자는 LNK이며 컴퓨터에 여러 개 존재할 수 있음</li>
            <li>하나의 원본 파일에 대해 여러 개의 바로 가기 아이콘을 만들 수 있고 이름도 변경할 수 있음</li>
            <li>원본 파일이 있는 위치와 관계없이 만들 수 있음</li>
            <li>바로 가기 아이콘을 삭제하거나 이동하더라도 원본 파일은 삭제되거나 이동되지 않음</li>
            <li>원본 파일을 삭제하면 해당 파일의 바로 가기 아이콘은 실행되지 않음</li>
          </ul>
          <h4>바로 가기 아이콘 만들기</h4>
          <table className="win10-table">
            <tbody>
              <tr><th>바로 가기 메뉴 이용</th><td>개체 선택 후 바로 가기 메뉴에서 [바로 가기 만들기] 또는 [보내기] → [바탕 화면에 바로 가기 만들기] 선택. 바탕 화면의 바로 가기 메뉴에서 [새로 만들기] → [바로 가기]를 선택하여 실행 파일 지정 가능</td></tr>
              <tr><th>오른쪽 버튼으로 끌기</th><td>마우스 오른쪽 버튼으로 개체를 원하는 위치로 끌어다 놓은 뒤 [여기에 바로 가기 만들기] 선택</td></tr>
              <tr><th>Ctrl + Shift + 드래그</th><td>개체를 선택한 후 Ctrl + Shift를 누른 채 원하는 위치로 끌어다 놓음</td></tr>
              <tr><th>복사 - 붙여넣기</th><td>바로 가기 아이콘을 복사(Ctrl + C)하여 다른 위치에 붙여넣음(Ctrl + V)</td></tr>
            </tbody>
          </table>
        </article>

        <article className="win10-theory-card">
          <h3><span>04</span> 작업 표시줄</h3>
          <ul>
            <li>현재 실행되고 있는 앱 단추와 앱을 빠르게 실행하기 위해 등록한 고정 앱 단추 등이 표시되는 곳으로, 기본적으로 바탕 화면의 맨 아래쪽에 있음</li>
            <li>작업 표시줄의 위치를 변경할 수 있음</li>
            <li>작업 표시줄의 크기를 화면의 1/2까지 늘릴 수 있음</li>
            <li>작업 표시줄 잠금을 지정하면 작업 표시줄의 크기나 위치 등을 변경할 수 없음</li>
            <li>작업 표시줄을 자동으로 숨길 것인지 선택할 수 있음</li>
            <li>작업 표시줄의 단추를 그룹으로 표시할 수 있음</li>
            <li>여러 디스플레이를 사용하는 경우 모든 디스플레이에 작업 표시줄을 표시할 수 있음</li>
          </ul>
          <h4>작업 표시줄 바로 가기 메뉴의 주요 항목</h4>
          <p>작업 보기 단추 표시, 작업 표시줄에 피플 표시, 터치 키보드 단추 표시, 계단식 창 배열, 창 가로 정렬 보기, 모든 창 옆 표시, 바탕 화면 보기</p>
          <h4>작업 표시줄 도구 모음</h4>
          <ul>
            <li><b>링크</b> : 자주 사용하는 문서나 앱, 웹 페이지(URL)의 바로 가기 아이콘을 추가하여 해당 문서·앱·웹 페이지로 이동 가능</li>
            <li><b>바탕 화면</b> : 바탕 화면 아이콘인 내 PC, 휴지통, 문서, 제어판, 네트워크와 바탕 화면에 추가된 모든 폴더와 아이콘 등을 표시</li>
            <li><b>새 도구 모음</b> : 사용자가 임의로 새로운 도구 모음을 만들어 표시할 때 사용</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>05</span> 시작 메뉴의 ‘사용자 계정’</h3>
          <ul>
            <li>현재 사용 중인 사용자 계정이 표시됨</li>
            <li>사용자 계정을 클릭하면 ‘계정 설정 변경’, ‘잠금’, ‘로그아웃’ 메뉴와 다른 사용자의 계정이 표시됨</li>
            <li>다른 사용자의 계정을 클릭하면 현재 로그인한 계정이 실행 중인 앱을 종료하지 않고 선택한 다른 사용자의 계정으로 전환됨</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>06</span> 시작 메뉴의 ‘점프 목록’ 설정</h3>
          <ul>
            <li>점프 목록은 파일, 폴더, 웹 사이트 등 최근에 사용했던 문서나 작업을 빠르고 간편하게 이용할 수 있도록 프로그램별로 구성한 목록</li>
            <li>표시된 항목 위로 마우스 포인터를 가져가면 항목 오른쪽에 ‘이 목록에 고정’ 아이콘이 표시되며, 이 아이콘을 클릭하면 점프 목록 상단에 고정됨</li>
            <li>점프 목록에 고정된 항목을 해제하려면 항목 위에 마우스 포인터를 가져가면 표시되는 ‘이 목록에서 제거’ 아이콘을 클릭함</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>07</span> 파일 탐색기의 구조와 기능</h3>
          <ul>
            <li>컴퓨터에 설치된 디스크 드라이브, 제어판, 웹 파일 및 폴더 등을 관리할 수 있는 곳으로, 파일이나 폴더, 디스크 드라이브에 관련된 모든 작업을 수행할 수 있음</li>
            <li>파일 탐색기는 컴퓨터의 파일과 폴더를 계층(Tree) 구조로 표시함</li>
            <li>파일 탐색기는 크게 탐색 창과 파일 영역으로 나누어져 있음</li>
            <li>탐색 창에는 컴퓨터에 존재하는 모든 폴더가 표시되고, 파일 영역에는 탐색 창에서 선택한 폴더의 내용(하위 폴더, 파일)이 표시됨</li>
            <li>Backspace : 선택된 폴더의 상위 폴더가 선택됨</li>
            <li>영문자를 입력하면 해당 영문자로 시작하는 폴더나 파일 중 첫 번째 항목으로 이동함</li>
          </ul>
          <h4>파일 탐색기의 기능</h4>
          <ul>
            <li><b>파일이나 폴더 관리 기능</b> : 파일과 폴더의 열기(실행), 선택, 복사, 이동, 삭제, 이름 변경, 속성 확인, 공유, 압축, 메일 발송, 파일 인쇄 등</li>
            <li><b>드라이브 관리 기능</b> : 최적화, 정리, 포맷, 속성 확인, 네트워크 드라이브 연결 및 끊기 등</li>
            <li><b>기타 기능</b> : 검색, 바로 가기 만들기, 휴지통 내용 확인 등</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>08</span> 폴더 옵션</h3>
          <h4>실행 방법</h4>
          <ul>
            <li>파일 탐색기에서 [파일] → [폴더 및 검색 옵션 변경] 또는 [파일] → [옵션] 선택</li>
            <li>파일 탐색기의 리본 메뉴 [보기] → [옵션] 클릭</li>
            <li>파일 탐색기의 리본 메뉴 [보기] → [옵션] → [폴더 및 검색 옵션 변경] 선택</li>
          </ul>
          <table className="win10-table">
            <tbody>
              <tr><th>일반</th><td>파일 탐색기의 기본 위치를 ‘즐겨찾기’나 ‘내 PC’에서 선택, 새 폴더를 같은 창/다른 창에서 열도록 지정, 한 번 클릭/두 번 클릭 실행 설정, 최근 사용한 파일 목록 삭제</td></tr>
              <tr><th>보기</th><td>탐색 창의 모든 폴더 표시, 메뉴 모음 항상 표시, 숨김 파일과 폴더의 표시 여부, 알려진 파일 형식의 확장명 표시 여부, 보호된 운영체제 파일의 숨김 여부 등 지정</td></tr>
              <tr><th>검색</th><td>폴더에서 시스템 파일을 검색할 때 색인을 사용할지 여부와 색인되지 않은 위치 검색 시 포함할 대상을 지정</td></tr>
            </tbody>
          </table>
        </article>

        <article className="win10-theory-card">
          <h3><span>09</span> 디스크 포맷</h3>
          <ul>
            <li>디스크를 초기화(트랙과 섹터 형성)하여 사용 가능한 상태로 만들어 주는 작업</li>
            <li>옵션의 종류 : 용량, 파일 시스템, 할당 단위 크기, 볼륨 레이블, 포맷 옵션</li>
            <li><b>빠른 포맷</b> : 사용하던 디스크를 포맷할 때 사용하는 옵션으로, 디스크의 불량 섹터는 검출하지 않고 디스크의 모든 파일을 삭제함</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>10</span> 파일/폴더 속성</h3>
          <p>파일/폴더의 속성을 이용하여 파일/폴더의 기본 정보를 확인하거나 특정 및 공유 여부를 설정할 수 있음.</p>
          <table className="win10-table">
            <thead><tr><th>대상</th><th>탭</th><th>기능</th></tr></thead>
            <tbody>
              <tr><td rowSpan={4}>파일</td><td>일반</td><td>파일 이름 및 파일 형식, 연결 프로그램, 저장 위치, 크기, 디스크 할당 크기, 만든 날짜, 수정한 날짜, 액세스한 날짜 등이 표시됨. 읽기 전용, 숨김 속성 설정 가능</td></tr>
              <tr><td>보안</td><td>사용자별 사용 권한을 설정함</td></tr>
              <tr><td>자세히</td><td>파일의 제목, 주제, 태그, 만든 이 등의 속성을 확인하거나 제거할 수 있음</td></tr>
              <tr><td>이전 버전</td><td>복원 지점이나 백업으로 만들어진 파일·폴더의 복사본으로 실수로 수정 또는 삭제되거나 손상된 파일 및 폴더를 복원할 수 있음</td></tr>
              <tr><td rowSpan={3}>폴더</td><td>일반</td><td>폴더의 이름, 종류, 저장 위치, 크기, 디스크 할당 크기, 폴더 안에 들어 있는 하위 폴더 및 파일의 수, 만든 날짜가 표시되고 읽기 전용·숨김 속성 설정 가능</td></tr>
              <tr><td>공유</td><td>폴더 공유를 위한 공유 설정 및 옵션을 설정할 수 있음</td></tr>
              <tr><td>사용자 지정</td><td>폴더의 유형, 폴더에 표시할 사진, 폴더의 아이콘 모양을 변경할 수 있음</td></tr>
            </tbody>
          </table>
        </article>

        <article className="win10-theory-card">
          <h3><span>11</span> 파일 탐색기와 작업 표시줄의 ‘검색 상자’ 차이점</h3>
          <table className="win10-table">
            <thead><tr><th></th><th>파일 탐색기의 ‘검색 상자’</th><th>작업 표시줄의 ‘검색 상자’</th></tr></thead>
            <tbody>
              <tr><th>실행</th><td>F3 또는 Ctrl + F</td><td>Windows + S</td></tr>
              <tr><th>검색 항목</th><td>파일, 폴더</td><td>모두, 앱, 문서, 웹, 동영상, 설정, 음악, 전자 메일, 폴더</td></tr>
              <tr><th>검색 위치</th><td>지정 가능</td><td>컴퓨터 전체와 웹</td></tr>
              <tr><th>검색 필터</th><td>사용 가능</td><td>사용 못함</td></tr>
              <tr><th>검색 결과</th><td>검색어에 노란색 표시</td><td>범주별로 그룹화되어 표시</td></tr>
            </tbody>
          </table>
        </article>

        <article className="win10-theory-card">
          <h3><span>12</span> 파일과 폴더 - 선택/복사/이동</h3>
          <h4>파일/폴더 선택</h4>
          <table className="win10-table">
            <tbody>
              <tr><th>하나의 항목 선택</th><td>항목을 마우스 왼쪽 버튼으로 클릭함</td></tr>
              <tr><th>연속적인 항목 선택</th><td>선택할 항목의 범위를 마우스로 드래그하거나 첫 항목을 클릭한 후 Shift를 누른 상태에서 마지막 항목 클릭</td></tr>
              <tr><th>비연속적인 항목 선택</th><td>Ctrl을 누른 상태에서 선택할 항목을 차례로 클릭함</td></tr>
              <tr><th>모든 항목 선택</th><td>리본 메뉴 [홈] → [선택] → [모두 선택] 또는 Ctrl + A</td></tr>
              <tr><th>선택 영역 반전</th><td>리본 메뉴 [홈] → [선택] → [선택 영역 반전]</td></tr>
            </tbody>
          </table>
          <h4>파일/폴더 복사 및 이동</h4>
          <table className="win10-table">
            <thead><tr><th></th><th>복사</th><th>이동</th></tr></thead>
            <tbody>
              <tr><th>같은 드라이브</th><td>Ctrl을 누른 상태에서 마우스로 드래그 앤 드롭</td><td>마우스로 드래그 앤 드롭</td></tr>
              <tr><th>다른 드라이브</th><td>마우스로 드래그 앤 드롭</td><td>Shift를 누른 상태에서 마우스로 드래그 앤 드롭</td></tr>
            </tbody>
          </table>
        </article>

        <article className="win10-theory-card">
          <h3><span>13</span> 클립보드</h3>
          <ul>
            <li>데이터를 일시적으로 보관해 두는 임시 저장 공간으로, 서로 다른 앱 간에 데이터를 쉽게 전환할 수 있음</li>
            <li>한글 Windows 10에 설치된 모든 앱에서 여러 번 사용 가능하지만, 가장 최근에 저장된 것 하나만 기억함</li>
            <li>복사(Ctrl + C), 잘라내기(Ctrl + X), 붙여넣기(Ctrl + V)할 때 사용됨</li>
            <li>시스템을 재시작하면 클립보드에 저장된 데이터는 지워짐</li>
            <li>화면 전체 내용을 클립보드에 복사하는 키는 PrintScreen, 현재 사용 중인 활성창만 복사하는 키는 Alt + PrintScreen</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>14</span> 휴지통</h3>
          <ul>
            <li>삭제된 파일이나 폴더가 임시 보관되는 장소로 필요 시 복원이 가능함</li>
            <li>크기는 기본적으로 드라이브 용량의 5%~10% 범위 내에서 시스템이 자동 설정하지만 사용자가 원하는 크기를 MB 단위로 지정할 수 있음</li>
            <li>디스크 드라이브마다 한 개씩 만들 수 있으며 크기를 다르게 설정할 수 있음</li>
            <li>휴지통 아이콘을 통해 휴지통이 비워진 경우와 차 있는 경우를 구분할 수 있음</li>
            <li>삭제된 파일뿐 아니라 삭제된 시간, 날짜, 파일의 경로 등에 대한 정보도 저장됨</li>
            <li>휴지통 용량을 초과하면 가장 오래 전에 삭제된 파일부터 자동으로 지워짐</li>
            <li>삭제된 파일이나 폴더는 복원하기 전까지 사용할 수 없음</li>
          </ul>
          <h4>휴지통에 보관되지 않는 경우</h4>
          <ul>
            <li>플로피디스크, USB 메모리, DOS 모드, 네트워크 드라이브에서 삭제된 항목</li>
            <li>Shift + Delete를 사용하여 삭제한 항목</li>
            <li>휴지통 속성에서 ‘파일을 휴지통에 버리지 않고 삭제할 때 바로 제거’를 선택한 경우</li>
            <li>휴지통 속성에서 최대 크기를 0MB로 지정한 경우</li>
            <li>같은 이름의 항목을 복사/이동 작업으로 덮어쓴 경우</li>
          </ul>
        </article>

        <article className="win10-theory-card">
          <h3><span>15</span> 메모장</h3>
          <ul>
            <li>특별한 서식이 필요 없는 간단한 텍스트 파일을 작성할 수 있는 문서 작성 앱</li>
            <li>메모장은 텍스트(.TXT) 형식의 문서만을 열거나 저장할 수 있음</li>
            <li>메모장에서는 그림, 차트 등의 OLE 개체를 삽입할 수 없음</li>
            <li>문서 전체에 대해서는 글꼴의 종류, 속성, 크기를 변경할 수 있으나 지정할 수 있는 속성의 종류는 다양하지 않음</li>
            <li>문서의 첫 행 왼쪽에 .LOG를 입력하면 문서를 열 때마다 현재의 시간과 날짜가 문서의 맨 마지막 줄에 자동으로 표시됨</li>
            <li>커서 위치에 시간과 날짜 표시 : [편집] → [시간/날짜] 선택 또는 F5</li>
            <li>주요 기능 : 찾기, 바꾸기, 페이지 설정, 자동 줄 바꿈, 글꼴 등</li>
          </ul>
        </article>
      </section>

      <section className="win10-quiz">
        <div className="win10-section-title">
          <span>대표기출문제</span>
          <h2>1장 문제</h2>
        </div>

        <div className="win10-quiz-list">
          {questions.map((q) => {
            const picked = selected[q.number];
            const isChecked = checked[q.number];
            return (
              <article className="win10-question-card" key={q.number}>
                <div className="win10-question-title">
                  <span>{q.number}</span>
                  <h3>{q.question}</h3>
                </div>
                <div className="win10-choice-list">
                  {q.choices.map((choice, index) => (
                    <button
                      key={choice}
                      type="button"
                      className={
                        "win10-choice " +
                        (picked === index ? "selected " : "") +
                        (isChecked && index === q.answer ? "correct " : "") +
                        (isChecked && picked === index && picked !== q.answer ? "wrong" : "")
                      }
                      onClick={() => {
                        setSelected((current) => ({ ...current, [q.number]: index }));
                        setChecked((current) => ({ ...current, [q.number]: false }));
                      }}
                    >
                      <span>{["①", "②", "③", "④"][index]}</span>
                      <p>{choice}</p>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="win10-check-button"
                  disabled={picked === undefined}
                  onClick={() => setChecked((current) => ({ ...current, [q.number]: true }))}
                >
                  확인
                </button>
                {isChecked && (
                  <div className={"win10-explanation " + (picked === q.answer ? "correct" : "wrong")}>
                    <strong>{picked === q.answer ? "정답입니다." : "다시 확인해 보세요."} 정답 {["①", "②", "③", "④"][q.answer]}</strong>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
