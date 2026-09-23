"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Question = {
  id: string;
  label: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Concept = {
  title: string;
  body: string;
  points?: string[];
};

type Lesson = {
  id: string;
  chapter: string;
  title: string;
  sourcePages: string;
  goals: string[];
  summary: string;
  concepts: Concept[];
  flow?: string[];
  activity?: {
    title: string;
    body: string;
  };
  questions: Question[];
};

const curriculum = [
  { roman: "I", title: "컴퓨팅 시스템", ready: true },
  { roman: "II", title: "데이터", ready: false },
  { roman: "III", title: "알고리즘과 프로그래밍", ready: false },
  { roman: "IV", title: "인공지능", ready: false },
  { roman: "V", title: "디지털 문화", ready: false },
];

const lessons: Lesson[] = [
  {
    id: "system-understanding",
    chapter: "1-1",
    title: "컴퓨팅 시스템의 이해",
    sourcePages: "교과서 14~17쪽",
    goals: [
      "컴퓨팅 시스템이 무엇인지 설명할 수 있다.",
      "생활 속 다양한 컴퓨팅 시스템과 그 역할을 찾을 수 있다.",
    ],
    summary:
      "컴퓨팅 시스템은 주어진 문제를 컴퓨팅으로 해결하기 위해 하드웨어와 소프트웨어가 함께 동작하는 시스템이다. 사람의 문제 해결 작업을 자동화하여 많은 양의 데이터를 빠르고 정확하게 처리할 수 있다.",
    concepts: [
      {
        title: "컴퓨팅 시스템이란?",
        body:
          "전자 회로나 기계 장치 같은 하드웨어와, 하드웨어에 작업을 지시하는 소프트웨어가 함께 동작하여 입력된 데이터를 처리하고 결과를 만드는 시스템이다.",
        points: [
          "하드웨어: 눈으로 보거나 만질 수 있는 장치와 부품",
          "소프트웨어: 하드웨어가 해야 할 일을 지시하는 프로그램과 명령",
        ],
      },
      {
        title: "컴퓨팅 시스템을 사용하는 이유",
        body:
          "사람이 직접 처리하기 어려운 반복 작업이나 대량의 데이터를 컴퓨터가 빠르게 처리하면서 문제 해결의 범위가 넓어졌다.",
        points: [
          "빠른 작업 속도",
          "큰 저장 공간",
          "반복 작업의 자동화",
          "정확한 처리",
        ],
      },
      {
        title: "생활 속 컴퓨팅 시스템",
        body:
          "스마트홈, 키오스크, 무인 주문 시스템, 자동차, 교통 신호, 온라인 서비스 등은 센서·처리 장치·네트워크·소프트웨어가 결합하여 특정 문제를 해결한다.",
      },
    ],
    activity: {
      title: "교과서 활동 재구성 - 컴퓨터가 없는 하루",
      body:
        "어제 하루 동안 컴퓨터나 스마트폰을 사용했던 일을 3가지 떠올려 보세요. 각각의 일을 컴퓨팅 시스템 없이 처리한다면 무엇이 달라질지 비교해 보면 컴퓨팅 시스템의 역할을 더 분명하게 이해할 수 있습니다.",
    },
    questions: [
      {
        id: "u1-1-q1",
        label: "개념 확인",
        prompt: "컴퓨팅 시스템을 가장 알맞게 설명한 것은?",
        options: [
          "인터넷에 연결된 모든 전자 제품",
          "하드웨어와 소프트웨어가 함께 동작하여 문제를 해결하는 시스템",
          "자료를 저장하는 장치만 모아 둔 시스템",
          "프로그램 없이 동작하는 기계 장치",
        ],
        answer: 1,
        explanation:
          "교과서에서는 컴퓨팅 시스템을 주어진 문제를 컴퓨팅으로 해결하기 위한 시스템으로 설명하며, 하드웨어와 소프트웨어가 함께 동작합니다.",
      },
      {
        id: "u1-1-q2",
        label: "교과서 핵심",
        prompt: "다음 중 컴퓨팅 시스템 활용의 장점으로 보기 어려운 것은?",
        options: [
          "반복 작업을 자동화할 수 있다.",
          "많은 양의 데이터를 저장하고 처리할 수 있다.",
          "주어진 작업을 빠르게 처리할 수 있다.",
          "어떤 상황에서도 오류가 절대로 발생하지 않는다.",
        ],
        answer: 3,
        explanation:
          "빠른 처리, 큰 저장 공간, 자동화, 정확한 처리는 장점이지만 컴퓨팅 시스템도 오류나 잘못된 입력·프로그램 때문에 문제가 생길 수 있습니다.",
      },
      {
        id: "u1-1-q3",
        label: "적용",
        prompt: "사람이 직접 하던 실험 대신 컴퓨터 프로그램으로 시뮬레이션하는 가장 큰 이유로 적절한 것은?",
        options: [
          "컴퓨터는 항상 실제 실험보다 재미있기 때문에",
          "위험하거나 오래 걸리는 과정을 빠르고 안전하게 반복할 수 있기 때문에",
          "실험 결과를 저장할 수 없기 때문에",
          "컴퓨터는 데이터를 입력할 필요가 없기 때문에",
        ],
        answer: 1,
        explanation:
          "컴퓨팅 시스템은 빠른 처리와 자동화를 활용하여 오래 걸리거나 위험한 과정을 반복·분석하는 데 도움을 줍니다.",
      },
      {
        id: "u1-1-q4",
        label: "생활 속 정보",
        prompt: "다음 중 컴퓨팅 시스템이 사용된 사례로 가장 거리가 먼 것은?",
        options: [
          "센서와 프로그램으로 실내 온도를 조절하는 스마트홈",
          "주문을 입력받아 결제를 처리하는 키오스크",
          "종이에 연필로만 적어 계산하는 수기 장부",
          "교통량을 감지하여 신호 시간을 조절하는 신호 시스템",
        ],
        answer: 2,
        explanation:
          "수기 장부는 사람이 직접 기록하고 계산하는 방식입니다. 나머지는 하드웨어와 소프트웨어가 함께 문제를 해결하는 사례입니다.",
      },
    ],
  },
  {
    id: "system-principle",
    chapter: "1-2",
    title: "컴퓨팅 시스템의 원리",
    sourcePages: "교과서 18~25쪽",
    goals: [
      "컴퓨팅 시스템의 구성 요소와 각 장치의 역할을 설명할 수 있다.",
      "운영체제의 필요성과 주요 기능을 설명할 수 있다.",
    ],
    summary:
      "컴퓨팅 시스템은 중앙 처리 장치, 주기억 장치, 입력·출력 장치, 보조 기억 장치 등의 하드웨어와 소프트웨어로 구성된다. 소프트웨어의 명령에 따라 입력된 데이터가 처리되고 출력·저장되며, 운영체제가 하드웨어 자원과 응용 소프트웨어 실행을 관리한다.",
    concepts: [
      {
        title: "하드웨어의 주요 구성",
        body:
          "컴퓨터의 장치들은 역할에 따라 처리, 기억, 입력, 출력, 저장 장치로 나눌 수 있다.",
        points: [
          "중앙 처리 장치(CPU): 명령어를 읽고 해석하여 계산과 제어 수행",
          "주기억 장치(RAM): 실행 중인 프로그램과 데이터를 일시적으로 저장",
          "입력 장치: 키보드, 마우스, 카메라, 마이크 등",
          "출력 장치: 모니터, 스피커 등",
          "보조 기억 장치: HDD, SSD 등 데이터를 오래 저장하는 장치",
        ],
      },
      {
        title: "소프트웨어",
        body:
          "하드웨어에게 작업을 지시하는 명령어들의 집합이다. 특정 목적의 작업을 돕는 응용 소프트웨어와 시스템을 관리하는 시스템 소프트웨어로 나눌 수 있다.",
        points: [
          "응용 소프트웨어: 문서 작성, 웹 브라우저, 카메라 앱 등",
          "시스템 소프트웨어: 운영체제, 장치 드라이버 등",
        ],
      },
      {
        title: "입력 → 처리 → 출력·저장",
        body:
          "컴퓨팅 시스템은 입력 장치로 데이터를 받아 CPU가 명령에 따라 처리하고, 처리 결과를 출력 장치에 보여 주거나 보조 기억 장치에 저장한다.",
      },
      {
        title: "운영체제의 역할",
        body:
          "운영체제는 사용자가 컴퓨터를 쉽게 사용할 수 있도록 인터페이스를 제공하고, 응용 소프트웨어의 실행과 하드웨어 자원을 관리한다.",
        points: [
          "사용자 인터페이스 제공",
          "파일과 보조 기억 장치의 데이터 관리",
          "주기억 장치·CPU 등 자원 할당과 관리",
          "여러 응용 프로그램의 실행 순서 관리",
          "장치 드라이버를 통한 외부 입출력 장치 관리",
        ],
      },
    ],
    flow: ["입력", "주기억 장치", "중앙 처리 장치", "출력·저장"],
    activity: {
      title: "교과서 활동 재구성 - 스마트폰 카메라의 동작",
      body:
        "카메라 앱을 실행하고 사진을 찍는 과정을 생각해 보세요. 카메라 센서가 장면을 입력하고, 처리 장치가 데이터를 처리한 뒤 이미지 파일이 저장 장치에 저장되고 디스플레이에 출력됩니다.",
    },
    questions: [
      {
        id: "u1-2-q1",
        label: "구성 요소",
        prompt: "실행 중인 프로그램과 데이터를 일시적으로 저장하는 장치는?",
        options: ["중앙 처리 장치", "주기억 장치", "출력 장치", "보조 기억 장치"],
        answer: 1,
        explanation:
          "주기억 장치는 CPU가 실행할 프로그램과 데이터를 일시적으로 저장하며 대표적으로 RAM이 사용됩니다.",
      },
      {
        id: "u1-2-q2",
        label: "장치 분류",
        prompt: "다음 연결 중 올바르지 않은 것은?",
        options: [
          "키보드 - 입력 장치",
          "모니터 - 출력 장치",
          "SSD - 보조 기억 장치",
          "RAM - 출력 장치",
        ],
        answer: 3,
        explanation:
          "RAM은 실행 중인 프로그램과 데이터를 임시로 저장하는 주기억 장치입니다.",
      },
      {
        id: "u1-2-q3",
        label: "동작 원리",
        prompt: "사진 촬영 과정에서 카메라 센서가 맡는 역할은?",
        options: ["입력", "처리", "출력", "장기 저장"],
        answer: 0,
        explanation:
          "카메라 센서는 주변의 시각 정보를 받아들이므로 입력 장치에 해당합니다.",
      },
      {
        id: "u1-2-q4",
        label: "소프트웨어",
        prompt: "운영체제와 가장 관계가 깊은 설명은?",
        options: [
          "특정 문서를 작성하는 기능만 제공한다.",
          "하드웨어 자원을 관리하고 응용 프로그램 실행을 돕는다.",
          "전원이 꺼져도 RAM의 모든 데이터를 영구 보존한다.",
          "CPU의 물리적인 연산 속도를 자동으로 두 배로 만든다.",
        ],
        answer: 1,
        explanation:
          "운영체제는 시스템 소프트웨어로서 CPU, 메모리, 저장 장치, 입출력 장치 등의 자원을 관리하고 응용 프로그램 실행을 지원합니다.",
      },
      {
        id: "u1-2-q5",
        label: "운영체제",
        prompt: "여러 응용 프로그램이 동시에 실행되는 것처럼 보일 수 있는 이유로 가장 적절한 것은?",
        options: [
          "모든 프로그램이 서로 다른 CPU를 반드시 하나씩 사용하기 때문에",
          "운영체제가 CPU 사용 순서와 자원을 빠르게 나누어 관리하기 때문에",
          "보조 기억 장치가 프로그램을 직접 계산하기 때문에",
          "입력 장치가 프로그램의 실행 순서를 정하기 때문에",
        ],
        answer: 1,
        explanation:
          "운영체제는 실행 중인 프로그램들의 CPU 사용 순서와 필요한 자원을 관리하여 여러 작업을 효율적으로 수행하도록 돕습니다.",
      },
    ],
  },
  {
    id: "physical-understanding",
    chapter: "2-1",
    title: "피지컬 컴퓨팅의 이해",
    sourcePages: "교과서 28~33쪽",
    goals: [
      "피지컬 컴퓨팅의 의미를 설명할 수 있다.",
      "피지컬 컴퓨팅 시스템의 입력·처리·출력 요소를 구분할 수 있다.",
    ],
    summary:
      "피지컬 컴퓨팅은 하드웨어와 소프트웨어를 이용하여 우리가 사는 물리적 세계와 상호 작용하는 시스템을 설계하고 만드는 활동이다. 센서가 주변 환경을 감지하고, 마이크로컨트롤러가 정보를 처리하며, 구동기가 실제 동작으로 반응한다.",
    concepts: [
      {
        title: "피지컬 컴퓨팅",
        body:
          "센서와 마이크로컨트롤러, 구동기, 소프트웨어를 이용해 주변 환경의 상태를 감지하고 실제 세계에 반응하도록 만드는 컴퓨팅 방식이다.",
        points: [
          "에어컨 자동 온도 조절",
          "자동문",
          "스마트 워치",
          "드론·로봇·스마트팜",
        ],
      },
      {
        title: "입력 - 센서",
        body:
          "센서는 빛, 온도, 소리, 움직임, 거리처럼 주변 환경의 상태를 감지하여 처리 장치로 전달한다.",
      },
      {
        title: "처리 - 마이크로컨트롤러",
        body:
          "센서에서 받은 값을 프로그램에 따라 판단하고, 어떤 출력 장치를 어떻게 움직일지 결정한다.",
      },
      {
        title: "출력 - 구동기",
        body:
          "처리 결과에 따라 움직이거나 빛·소리 등을 발생시키는 장치이다. 모터, LED, 스피커, 밸브 등이 대표적이다.",
      },
    ],
    flow: ["센서로 감지", "마이크로컨트롤러에서 판단", "구동기가 반응"],
    activity: {
      title: "교과서 사례 재구성 - 인체 인식 자동 수도꼭지",
      body:
        "적외선 센서가 손의 접근을 감지하면 그 값이 마이크로컨트롤러로 전달됩니다. 프로그램이 조건을 판단한 후 밸브를 움직이는 구동기에 명령을 보내 물이 흐르게 합니다.",
    },
    questions: [
      {
        id: "u2-1-q1",
        label: "개념 확인",
        prompt: "피지컬 컴퓨팅의 설명으로 가장 적절한 것은?",
        options: [
          "화면 안에서만 계산을 수행하는 프로그램",
          "하드웨어와 소프트웨어로 실제 환경을 감지하고 반응하는 시스템",
          "인터넷에 연결되지 않은 모든 컴퓨터",
          "문서 작성을 위한 응용 소프트웨어",
        ],
        answer: 1,
        explanation:
          "피지컬 컴퓨팅은 컴퓨팅 시스템이 실제 물리적 세계의 상태를 감지하고 그에 따라 반응하도록 설계하는 활동입니다.",
      },
      {
        id: "u2-1-q2",
        label: "입력·처리·출력",
        prompt: "자동 수도꼭지에서 사람의 손을 감지하는 적외선 센서의 역할은?",
        options: ["입력", "처리", "출력", "저장"],
        answer: 0,
        explanation:
          "센서는 주변 환경의 정보를 감지하여 처리 장치로 보내므로 입력에 해당합니다.",
      },
      {
        id: "u2-1-q3",
        label: "장치 구분",
        prompt: "다음 중 구동기에 해당하는 것은?",
        options: ["온도 센서", "빛 센서", "모터", "마이크로컨트롤러"],
        answer: 2,
        explanation:
          "모터는 명령에 따라 실제 움직임을 만들어 내는 대표적인 구동기입니다.",
      },
      {
        id: "u2-1-q4",
        label: "사례 적용",
        prompt: "보행자가 지나가면 자동으로 열리는 자동문의 입력과 출력 연결로 알맞은 것은?",
        options: [
          "입력: 보행자 감지 / 출력: 문 열기",
          "입력: 문 열기 / 출력: 보행자 감지",
          "입력: CPU 계산 / 출력: 거리 측정",
          "입력: 파일 저장 / 출력: 센서 값",
        ],
        answer: 0,
        explanation:
          "센서가 보행자의 접근을 입력으로 감지하고, 처리 결과에 따라 모터가 문을 여는 동작을 출력합니다.",
      },
    ],
  },
  {
    id: "physical-build",
    chapter: "2-2",
    title: "피지컬 컴퓨팅 시스템 구현",
    sourcePages: "교과서 34~39쪽",
    goals: [
      "목적에 맞는 피지컬 컴퓨팅 장치 구성을 선택할 수 있다.",
      "입력 장치와 출력 장치를 활용하는 프로그램의 원리를 이해할 수 있다.",
    ],
    summary:
      "피지컬 컴퓨팅 시스템을 만들 때는 해결할 문제를 정하고 필요한 입력과 출력을 결정한 뒤, 센서·마이크로컨트롤러·구동기를 연결하고 프로그램으로 동작을 제어한다. 교과서에서는 마이크로비트와 프로그래밍 도구를 이용해 입력 장치와 출력 장치에 반응하는 활동을 진행한다.",
    concepts: [
      {
        title: "마이크로비트의 주요 구성",
        body:
          "마이크로비트는 작은 보드에 입력·출력 기능과 마이크로컨트롤러가 모여 있어 피지컬 컴퓨팅을 실습하기에 적합하다.",
        points: [
          "A/B 버튼: 사용자 입력",
          "LED 디스플레이와 빛 센서: 표시 및 주변 밝기 감지",
          "엣지 커넥터: 외부 센서·구동기 연결",
          "3V/GND 핀: 외부 장치에 전원 연결",
          "내장 센서: 움직임 등 상태 감지",
          "마이크 LED: 마이크 사용 상태 표시",
        ],
      },
      {
        title: "입력 장치로 제어하기",
        body:
          "버튼이나 센서 값을 프로그램에서 읽은 뒤 조건에 따라 캐릭터를 움직이거나 다음 동작을 결정할 수 있다.",
      },
      {
        title: "출력 장치로 반응하기",
        body:
          "프로그램의 결과를 LED, 소리, 모터 같은 출력 장치로 표현한다. 입력 조건과 출력 동작을 연결하는 것이 핵심이다.",
      },
      {
        title: "설계 순서",
        body:
          "문제 상황을 분석한 뒤 입력과 출력을 정하고, 필요한 하드웨어를 구성하고, 프로그램을 작성한 후 실제 동작을 시험하며 수정한다.",
        points: [
          "문제 정의",
          "입력·출력 결정",
          "하드웨어 구성",
          "프로그램 작성",
          "실행·평가·수정",
        ],
      },
    ],
    flow: ["문제 찾기", "입력·출력 설계", "장치 연결", "프로그램 작성", "테스트·수정"],
    activity: {
      title: "교과서 구현 활동 재구성",
      body:
        "버튼이나 센서 입력에 따라 화면 속 캐릭터가 움직이게 만들고, 조건이 만족되면 LED 같은 출력 장치가 반응하도록 프로그램을 설계해 보세요. 입력 조건과 출력 결과를 표로 먼저 정리하면 프로그램을 만들기 쉽습니다.",
    },
    questions: [
      {
        id: "u2-2-q1",
        label: "마이크로비트",
        prompt: "마이크로비트에서 사용자가 직접 누르는 대표적인 입력 장치는?",
        options: ["A/B 버튼", "LED 디스플레이", "스피커", "모터"],
        answer: 0,
        explanation:
          "A/B 버튼은 사용자의 누름을 감지하는 대표적인 입력 장치입니다.",
      },
      {
        id: "u2-2-q2",
        label: "외부 장치",
        prompt: "마이크로비트에 새로운 센서나 구동기를 연결할 때 주로 사용하는 부분은?",
        options: ["엣지 커넥터", "LED 한 개", "화면 보호 필름", "배터리 케이스의 뚜껑"],
        answer: 0,
        explanation:
          "엣지 커넥터의 핀을 이용해 외부 센서, 구동기, 전원 등을 연결할 수 있습니다.",
      },
      {
        id: "u2-2-q3",
        label: "프로그램",
        prompt: "'A 버튼을 누르면 캐릭터가 왼쪽으로 이동한다'에서 조건에 해당하는 것은?",
        options: [
          "캐릭터가 왼쪽으로 이동한다.",
          "A 버튼을 누른다.",
          "LED가 꺼져 있다.",
          "프로그램을 저장한다.",
        ],
        answer: 1,
        explanation:
          "입력 조건은 A 버튼이 눌렸는지 여부이고, 그 조건이 참일 때 이동이라는 동작을 실행합니다.",
      },
      {
        id: "u2-2-q4",
        label: "설계 과정",
        prompt: "피지컬 컴퓨팅 시스템을 만들 때 가장 먼저 해야 할 일로 적절한 것은?",
        options: [
          "아무 센서나 먼저 연결한다.",
          "해결할 문제와 필요한 기능을 정한다.",
          "프로그램을 완성한 뒤 목적을 정한다.",
          "출력 장치만 고르고 입력은 고려하지 않는다.",
        ],
        answer: 1,
        explanation:
          "먼저 해결할 문제와 목적을 분명히 한 뒤 필요한 입력·처리·출력 요소를 설계해야 합니다.",
      },
    ],
  },
  {
    id: "unit-review",
    chapter: "마무리",
    title: "1단원 핵심 정리 · 문제",
    sourcePages: "교과서 40~45쪽",
    goals: [
      "1단원의 핵심 개념을 서로 연결하여 설명할 수 있다.",
      "컴퓨팅 시스템과 피지컬 컴퓨팅의 차이와 공통점을 문제에 적용할 수 있다.",
    ],
    summary:
      "1단원에서는 컴퓨팅 시스템의 구성과 동작 원리를 이해한 뒤 실제 세계와 상호 작용하는 피지컬 컴퓨팅으로 확장한다. 하드웨어와 소프트웨어가 함께 동작한다는 점은 공통이며, 피지컬 컴퓨팅에서는 센서와 구동기를 통해 현실의 입력과 출력을 직접 다룬다는 점이 특징이다.",
    concepts: [
      {
        title: "한눈에 연결하기",
        body:
          "컴퓨팅 시스템은 하드웨어와 소프트웨어로 구성되고, 입력된 데이터는 처리되어 출력·저장된다. 운영체제는 자원을 관리한다. 피지컬 컴퓨팅은 이 구조에 센서와 구동기를 연결하여 실제 환경과 상호 작용한다.",
      },
      {
        title: "창의·융합 프로젝트",
        body:
          "교과서에서는 마이크로비트를 활용해 모둠원과 협력하여 소리와 동작을 만드는 프로젝트를 진행한다. 설계 → 모둠 역할 분담 → 프로그램 개발 → 실행·평가의 과정을 경험하는 것이 핵심이다.",
      },
      {
        title: "진로 탐색 - 메이커",
        body:
          "디지털 제작 도구와 컴퓨팅 기술을 활용해 아이디어를 실제 작품으로 구현하는 메이커 활동을 소개한다. 문제를 발견하고 만들고 수정하는 과정 자체가 중요한 학습 경험이다.",
      },
    ],
    flow: ["컴퓨팅 시스템 이해", "동작 원리", "피지컬 컴퓨팅 이해", "직접 구현"],
    questions: [
      {
        id: "review-q1",
        label: "단원 마무리",
        prompt: "컴퓨팅 시스템의 기본 구성으로 가장 적절한 것은?",
        options: [
          "하드웨어와 소프트웨어",
          "센서와 네트워크만",
          "CPU와 인터넷만",
          "모니터와 키보드만",
        ],
        answer: 0,
        explanation:
          "컴퓨팅 시스템은 물리적인 장치인 하드웨어와 이를 제어하는 소프트웨어가 함께 구성합니다.",
      },
      {
        id: "review-q2",
        label: "단원 마무리",
        prompt: "입력 → 처리 → 출력·저장 과정에서 '처리'를 중심적으로 수행하는 장치는?",
        options: ["키보드", "중앙 처리 장치", "모니터", "SSD"],
        answer: 1,
        explanation:
          "중앙 처리 장치는 명령어를 해석하고 계산·제어를 수행하여 입력된 데이터를 처리합니다.",
      },
      {
        id: "review-q3",
        label: "단원 마무리",
        prompt: "다음 중 운영체제의 역할이 아닌 것은?",
        options: [
          "사용자 인터페이스 제공",
          "하드웨어 자원 관리",
          "응용 프로그램 실행 지원",
          "센서의 물리적 크기를 자동으로 변경",
        ],
        answer: 3,
        explanation:
          "운영체제는 시스템 자원과 프로그램 실행을 관리하지만 장치의 물리적 크기를 바꾸지는 않습니다.",
      },
      {
        id: "review-q4",
        label: "단원 마무리",
        prompt: "피지컬 컴퓨팅 시스템의 기본 동작 순서로 가장 적절한 것은?",
        options: [
          "구동기 → 센서 → 마이크로컨트롤러",
          "센서 → 마이크로컨트롤러 → 구동기",
          "저장 장치 → 센서 → 키보드",
          "운영체제 → 모니터 → 센서",
        ],
        answer: 1,
        explanation:
          "센서가 환경을 입력으로 감지하고, 마이크로컨트롤러가 처리한 뒤, 구동기가 실제 동작으로 반응합니다.",
      },
    ],
  },
];

const STORAGE_KEY = "seyoung-middle-school-info-2022-unit1-v2";

export default function MiddleSchoolInfoStudy() {
  const [activeId, setActiveId] = useState(lessons[0].id);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [solved, setSolved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSolved(JSON.parse(saved));
    } catch {
      // 저장 데이터가 손상되어도 학습 화면은 정상 동작합니다.
    }
  }, []);

  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0];
  const totalQuestions = useMemo(
    () => lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0),
    [],
  );
  const progress = Math.round((solved.length / totalQuestions) * 100);

  function selectLesson(id: string) {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAnswer(questionId: string) {
    setChecked((prev) => ({ ...prev, [questionId]: true }));

    if (!solved.includes(questionId)) {
      const next = [...solved, questionId];
      setSolved(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }

  return (
    <section className="textbook-page">
      <div className="textbook-topbar">
        <div>
          <span className="eyebrow">2022 REVISED CURRICULUM · INFORMATION</span>
          <h1>중학교 정보 교과서</h1>
          <p>
            2022 개정 정보 교과서의 흐름을 바탕으로 핵심 개념을 다시 설명하고,
            교과서 활동과 문제 유형을 웹 학습용으로 재구성했습니다.
          </p>
        </div>
        <Link className="secondary-button" href="/specialized" prefetch={false}>
          ← 특성화고 대비반
        </Link>
      </div>

      <section
        className="notice-card"
        style={{ alignItems: "stretch", flexDirection: "column", gap: 14 }}
      >
        <div>
          <span className="eyebrow">TEXTBOOK MAP</span>
          <strong style={{ display: "block", marginTop: 6 }}>교과서 전체 5개 대단원</strong>
          <p>현재는 업로드된 I. 컴퓨팅 시스템을 먼저 학습할 수 있습니다.</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
          }}
        >
          {curriculum.map((unit) => (
            <div
              key={unit.roman}
              style={{
                padding: "14px 15px",
                borderRadius: 12,
                border: unit.ready ? "1px solid #b8c8f5" : "1px solid #e5e7eb",
                background: unit.ready ? "#f8faff" : "#f8fafc",
                opacity: unit.ready ? 1 : 0.55,
              }}
            >
              <b style={{ color: unit.ready ? "#2457d6" : "#667085" }}>{unit.roman}</b>
              <div style={{ marginTop: 5, fontWeight: 700 }}>{unit.title}</div>
              <small style={{ color: "#667085" }}>{unit.ready ? "학습 가능" : "자료 준비 중"}</small>
            </div>
          ))}
        </div>
      </section>

      <div className="progress-card">
        <div>
          <strong>I. 컴퓨팅 시스템 진행률</strong>
          <span>
            {solved.length} / {totalQuestions}문제 확인
          </span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
        <b>{progress}%</b>
      </div>

      <div className="textbook-layout">
        <aside className="unit-nav">
          <strong>I. 컴퓨팅 시스템</strong>
          {lessons.map((lesson) => {
            const lessonSolved = lesson.questions.filter((q) => solved.includes(q.id)).length;
            return (
              <button
                type="button"
                key={lesson.id}
                className={activeId === lesson.id ? "active" : ""}
                onClick={() => selectLesson(lesson.id)}
              >
                <span>
                  <b style={{ display: "block", fontSize: 11, marginBottom: 3 }}>
                    {lesson.chapter}
                  </b>
                  {lesson.title}
                </span>
                <small>
                  {lessonSolved}/{lesson.questions.length}
                </small>
              </button>
            );
          })}
        </aside>

        <div className="study-panel">
          <div className="study-heading">
            <span className="eyebrow">
              {activeLesson.chapter} · {activeLesson.sourcePages}
            </span>
            <h2>{activeLesson.title}</h2>
            <p>{activeLesson.summary}</p>
          </div>

          <section className="concept-card" style={{ borderColor: "#dce6ff" }}>
            <h3>학습 목표</h3>
            <ul>
              {activeLesson.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>

          {activeLesson.flow && (
            <section className="example-card">
              <span>FLOW</span>
              <h3>핵심 흐름</h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 14,
                }}
              >
                {activeLesson.flow.map((step, index) => (
                  <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <b
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: 38,
                        padding: "0 14px",
                        borderRadius: 10,
                        background: "#fff",
                        border: "1px solid #c9d7fb",
                        color: "#2457d6",
                      }}
                    >
                      {step}
                    </b>
                    {index < activeLesson.flow!.length - 1 && (
                      <span style={{ color: "#98a2b3", fontWeight: 800 }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <div style={{ display: "grid", gap: 14, marginBottom: 20 }}>
            {activeLesson.concepts.map((concept, index) => (
              <section className="concept-card" key={concept.title} style={{ marginBottom: 0 }}>
                <span className="content-number">KEY {String(index + 1).padStart(2, "0")}</span>
                <h3 style={{ marginTop: 8 }}>{concept.title}</h3>
                <p style={{ color: "#344054", lineHeight: 1.78, margin: 0 }}>{concept.body}</p>
                {concept.points && (
                  <ul style={{ marginTop: 12 }}>
                    {concept.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {activeLesson.activity && (
            <section className="example-card">
              <span>TEXTBOOK ACTIVITY</span>
              <h3>{activeLesson.activity.title}</h3>
              <p>{activeLesson.activity.body}</p>
              <p style={{ marginTop: 10, fontSize: 12, color: "#667085" }}>
                ※ 교과서의 활동·문제 유형을 웹 학습용으로 요약·재구성한 내용입니다.
              </p>
            </section>
          )}

          <section className="question-section">
            <div className="question-section-title">
              <span className="eyebrow">PRACTICE</span>
              <h3>개념 확인 · 교과서 유형 문제</h3>
              <p className="muted" style={{ marginTop: 0 }}>
                답을 고른 뒤 정답 확인을 누르면 바로 해설을 볼 수 있습니다.
              </p>
            </div>

            {activeLesson.questions.map((question, qIndex) => {
              const selected = answers[question.id];
              const isChecked = checked[question.id];
              const isCorrect = isChecked && selected === question.answer;

              return (
                <article className="question-card" key={question.id}>
                  <strong>
                    {question.label} · 문제 {qIndex + 1}
                  </strong>
                  <h4>{question.prompt}</h4>

                  <div className="option-list">
                    {question.options.map((option, index) => (
                      <button
                        type="button"
                        key={option}
                        className={selected === index ? "selected" : ""}
                        onClick={() => {
                          setAnswers((prev) => ({ ...prev, [question.id]: index }));
                          setChecked((prev) => ({ ...prev, [question.id]: false }));
                        }}
                      >
                        <span>{index + 1}</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="primary-button question-check"
                    disabled={selected === undefined}
                    onClick={() => checkAnswer(question.id)}
                  >
                    정답 확인
                  </button>

                  {isChecked && (
                    <div className={`answer-feedback ${isCorrect ? "correct" : "wrong"}`}>
                      <strong>
                        {isCorrect ? "정답입니다." : `정답은 ${question.answer + 1}번입니다.`}
                      </strong>
                      <p>{question.explanation}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </section>

          <div
            className="notice-card"
            style={{ marginTop: 28, justifyContent: "space-between", flexWrap: "wrap" }}
          >
            <div>
              <strong>다음 학습으로 이동</strong>
              <p>
                현재 구간을 충분히 이해했다면 다음 구간으로 넘어가세요. 학습 기록은 이 브라우저에
                저장됩니다.
              </p>
            </div>
            {lessons.findIndex((lesson) => lesson.id === activeId) < lessons.length - 1 ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  const index = lessons.findIndex((lesson) => lesson.id === activeId);
                  selectLesson(lessons[index + 1].id);
                }}
              >
                다음 학습 →
              </button>
            ) : (
              <Link className="secondary-button" href="/specialized" prefetch={false}>
                특성화고 대비반으로
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
