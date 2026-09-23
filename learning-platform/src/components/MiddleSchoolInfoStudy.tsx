"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { unitTwoLessons } from "@/data/middleSchoolInfoUnit2";
import { unitThreeLessons } from "@/data/middleSchoolInfoUnit3";
import { unitFourLessons } from "@/data/middleSchoolInfoUnit4";
import { unitFiveLessons } from "@/data/middleSchoolInfoUnit5";

type StudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type TextbookProblem = {
  id: string;
  prompt: string;
  answer: string;
  explanation?: string;
};

type Lesson = {
  id: string;
  chapter: string;
  title: string;
  kind?: "학습" | "프로젝트" | "진로";
  goals?: string[];
  intro: string;
  sections: StudySection[];
  textbookProblems?: TextbookProblem[];
};

const curriculum = [
  { roman: "I", title: "컴퓨팅 시스템", ready: true },
  { roman: "II", title: "데이터", ready: true },
  { roman: "III", title: "알고리즘과 프로그래밍", ready: true },
  { roman: "IV", title: "인공지능", ready: true },
  { roman: "V", title: "디지털 문화", ready: true },
];

const unitOneLessons: Lesson[] = [
  {
    id: "system-understanding",
    chapter: "1-1",
    title: "컴퓨팅 시스템의 이해",
    kind: "학습",
    goals: [
      "컴퓨팅 시스템이 무엇인지 설명할 수 있다.",
      "다양한 형태의 컴퓨팅 시스템과 생활 속 역할을 설명할 수 있다.",
    ],
    intro:
      "컴퓨팅 시스템은 단순히 ‘컴퓨터 한 대’를 뜻하지 않는다. 주어진 문제를 컴퓨팅으로 해결하기 위해 필요한 하드웨어와 소프트웨어가 함께 동작하는 전체 시스템을 뜻한다. 오늘날에는 개인용 컴퓨터뿐 아니라 스마트폰, 웨어러블 장치, 가전제품, 자동차, 키오스크, 서버 등 매우 다양한 형태로 우리 생활 속에 들어와 있다.",
    sections: [
      {
        title: "1. 컴퓨팅 시스템의 개념",
        paragraphs: [
          "초기의 컴퓨터는 주로 숫자 계산을 대신하는 장치였지만, 기술이 발전하면서 계산뿐 아니라 데이터 분석, 예측, 제어, 자동화처럼 더 복잡한 문제 해결에도 활용되기 시작했다.",
          "현재의 컴퓨팅 시스템은 사람이 원하는 작업을 소프트웨어로 지시하고, 하드웨어가 그 지시에 따라 데이터를 입력받고 처리하며 결과를 출력하거나 저장하는 방식으로 동작한다.",
          "따라서 컴퓨팅 시스템을 이해할 때는 장치 자체만 보는 것이 아니라 ‘어떤 문제를 해결하기 위해 어떤 데이터가 들어오고, 어떤 처리를 거쳐, 어떤 결과를 내는가’를 함께 살펴보는 것이 중요하다.",
        ],
      },
      {
        title: "2. 컴퓨팅 시스템을 활용하는 이유",
        paragraphs: [
          "사람이 직접 하기 어렵거나 시간이 오래 걸리는 일을 컴퓨팅 시스템이 대신 처리하면 문제 해결의 속도와 범위를 크게 넓힐 수 있다. 특히 같은 작업을 반복하거나 많은 양의 데이터를 다루는 상황에서 장점이 크다.",
        ],
        bullets: [
          "빠른 작업 속도: 빠른 연산 능력을 활용하여 많은 계산과 작업을 짧은 시간에 수행할 수 있다.",
          "큰 저장 공간: 많은 양의 데이터를 저장하고 필요할 때 다시 불러와 처리할 수 있다.",
          "작업의 자동화: 프로그램에 정해진 절차를 넣어 반복적인 작업을 자동으로 수행하게 할 수 있다.",
          "정확한 처리: 주어진 명령에 따라 정밀하게 작업하여 일관된 결과를 얻을 수 있다.",
        ],
      },
      {
        title: "3. 사람의 작업 방식이 어떻게 달라졌을까?",
        paragraphs: [
          "기계와 컴퓨팅 기술의 발전은 사람이 직접 해야 했던 일을 새로운 방식으로 바꾸어 왔다. 예를 들어 과거에는 사람이 베틀을 직접 움직여 천을 짰지만, 오늘날에는 방직 기계가 정해진 절차에 따라 빠르게 섬유를 생산한다.",
          "실험이나 분석에서도 변화가 크다. 사람이 직접 모든 실험을 수행하면 시간과 비용이 많이 들거나 위험할 수 있지만, 컴퓨터 프로그램을 이용하면 복잡한 계산과 시뮬레이션을 반복하면서 결과를 분석할 수 있다.",
        ],
      },
      {
        title: "4. 우리 주변의 컴퓨팅 시스템",
        paragraphs: [
          "컴퓨팅 시스템은 데스크톱이나 노트북 같은 전통적인 컴퓨터 형태에만 존재하지 않는다. 사용 목적과 환경에 따라 다양한 형태로 만들어지며, 서로 다른 장치와 서비스를 통해 일상생활의 문제를 해결한다.",
        ],
        bullets: [
          "개인용 컴퓨터: 데스크톱·노트북처럼 개인이 여러 목적에 사용하는 범용 컴퓨팅 시스템이다.",
          "모바일 기기: 스마트폰·태블릿처럼 휴대가 쉽고 장소의 제약을 적게 받는 컴퓨팅 시스템이다.",
          "웨어러블 장치: 스마트 워치처럼 신체에 착용하여 센서 정보와 다양한 기능을 활용하는 장치이다.",
          "임베디드 시스템: 가전제품, 키오스크, 자동차처럼 특정 제품 안에 들어가 정해진 기능을 수행하는 컴퓨팅 시스템이다.",
          "서버 컴퓨터: 인터넷을 통해 다른 컴퓨팅 시스템의 요청을 받아 정보나 서비스를 제공하는 컴퓨터이다.",
        ],
      },
      {
        title: "5. 생활 속 사례를 보는 방법",
        paragraphs: [
          "키오스크에는 주문을 입력받는 화면과 결제를 처리하는 장치, 주문 정보를 처리하는 프로그램이 함께 들어 있다. 자동차에는 내비게이션, 엔진 제어, 안전 기능 등을 담당하는 여러 임베디드 시스템이 포함될 수 있다.",
          "데이터 센터에서는 여러 서버 컴퓨터가 사용자의 요청을 처리해 웹 서비스나 다양한 온라인 정보를 제공한다. 이처럼 겉모습은 서로 달라도 ‘입력된 데이터를 처리하고 결과를 제공해 문제를 해결한다’는 공통점을 가진다.",
        ],
      },
    ],
  },
  {
    id: "system-principle",
    chapter: "1-2",
    title: "컴퓨팅 시스템의 원리",
    kind: "학습",
    goals: [
      "컴퓨팅 시스템의 구성 요소와 각 장치의 역할을 설명할 수 있다.",
      "소프트웨어의 종류와 역할을 설명할 수 있다.",
      "컴퓨팅 시스템의 동작 과정과 운영체제의 역할을 설명할 수 있다.",
    ],
    intro:
      "컴퓨팅 시스템은 여러 종류의 하드웨어와 소프트웨어가 유기적으로 연결되어 동작한다. 하드웨어는 실제 장치와 부품이고, 소프트웨어는 하드웨어가 어떤 작업을 수행해야 하는지 지시하는 명령과 데이터의 집합이다.",
    sections: [
      {
        title: "1. 하드웨어와 소프트웨어",
        paragraphs: [
          "하드웨어는 특정 기능을 수행하도록 설계된 전자 회로나 기계 장치이다. 키보드와 마우스처럼 사용자의 의도를 입력하는 장치, CPU처럼 명령을 처리하는 장치, RAM처럼 실행 중인 정보와 프로그램을 잠시 보관하는 장치, 모니터와 스피커처럼 결과를 보여 주는 장치, HDD와 SSD처럼 데이터를 오래 저장하는 장치가 모두 하드웨어에 해당한다.",
          "소프트웨어는 하드웨어에게 작업을 지시하는 명령어와 작업에 필요한 데이터의 모음이다. 물리적인 장치는 아니지만 하드웨어가 어떤 일을 할지 결정하기 때문에 컴퓨팅 시스템을 구성하는 핵심 요소이다.",
        ],
      },
      {
        title: "2. 중앙 처리 장치와 주기억 장치",
        paragraphs: [
          "중앙 처리 장치(CPU)는 주기억 장치에 저장된 명령어를 읽어 해석하고, 계산과 제어를 수행한다. 컴퓨팅 시스템의 핵심 처리 장치이기 때문에 흔히 컴퓨터의 두뇌에 비유한다.",
          "주기억 장치는 CPU가 실행하고 있는 프로그램과 필요한 데이터를 일시적으로 저장한다. 대표적으로 RAM을 사용한다. RAM에 저장된 내용은 전원이 꺼지면 사라지는 휘발성 기억 장치라는 특징이 있다.",
        ],
      },
      {
        title: "3. 입력·출력 장치와 보조 기억 장치",
        paragraphs: [
          "입력 장치는 사용자의 명령이나 외부의 데이터를 컴퓨팅 시스템으로 전달한다. 키보드와 마우스, 카메라와 웹캠, 마이크 등이 대표적이다.",
          "출력 장치는 처리 결과를 사람이 확인할 수 있는 형태로 보여 준다. 모니터·디스플레이는 시각 정보, 스피커는 소리 정보를 출력한다.",
          "보조 기억 장치는 데이터를 전원이 꺼진 뒤에도 보관하기 위한 장치이다. HDD, SSD, USB 저장 장치 등이 이에 해당한다.",
          "컴퓨팅 시스템의 여러 장치는 시스템 버스를 통해 명령어와 데이터를 주고받으며 함께 동작한다.",
        ],
      },
      {
        title: "4. 소프트웨어의 종류",
        paragraphs: [
          "소프트웨어는 크게 응용 소프트웨어와 시스템 소프트웨어로 나눌 수 있다.",
          "응용 소프트웨어는 문서 작성, 사진 촬영, 인터넷 탐색처럼 특정 목적의 작업을 수행하도록 만들어진 프로그램이다. 사용자는 자신의 목적에 맞는 응용 소프트웨어를 실행하여 원하는 작업을 수행한다.",
          "시스템 소프트웨어는 하드웨어를 효율적으로 사용할 수 있도록 시스템을 관리하는 소프트웨어이다. 운영체제, 장치 드라이버, 펌웨어 등이 여기에 포함된다.",
        ],
      },
      {
        title: "5. 컴퓨팅 시스템의 동작 과정",
        paragraphs: [
          "컴퓨팅 시스템은 소프트웨어의 명령에 따라 하드웨어가 체계적으로 역할을 나누어 동작한다.",
          "먼저 사용자가 프로그램을 실행하면 실행에 필요한 명령어와 데이터가 주기억 장치에 준비된다. CPU는 주기억 장치에서 명령어를 읽고 해석하여 데이터를 처리한다. 처리 결과는 모니터나 스피커 등의 출력 장치로 전달되거나 보조 기억 장치에 저장된다.",
          "스마트폰 카메라를 예로 들면 카메라 센서가 주변 장면을 입력하고, 처리 장치가 촬영 명령에 따라 이미지 데이터를 처리한다. 완성된 사진 파일은 저장 장치에 보관되며 디스플레이를 통해 사용자에게 보여진다.",
        ],
        bullets: [
          "입력: 외부 데이터와 사용자의 명령을 받아들인다.",
          "처리: CPU가 주기억 장치의 명령어를 해석하고 데이터를 처리한다.",
          "출력: 처리 결과를 모니터·스피커 등으로 전달한다.",
          "저장: 필요한 결과나 데이터를 보조 기억 장치에 보관한다.",
        ],
      },
      {
        title: "6. 운영체제가 필요한 이유",
        paragraphs: [
          "컴퓨터와 스마트폰에서는 여러 프로그램이 동시에 실행되고 다양한 하드웨어가 함께 사용된다. 이 모든 자원을 프로그램마다 직접 관리하게 하면 사용하기 어렵고 충돌이 발생하기 쉽다.",
          "운영체제는 컴퓨팅 시스템의 하드웨어와 응용 소프트웨어 사이에서 자원을 관리하고, 사용자가 컴퓨터를 편리하게 사용할 수 있도록 돕는 시스템 소프트웨어이다.",
        ],
      },
      {
        title: "7. 운영체제의 주요 역할",
        paragraphs: [
          "운영체제는 사용자가 컴퓨팅 시스템을 쉽게 사용할 수 있도록 사용자 인터페이스를 제공한다. 오늘날 대부분의 운영체제는 아이콘과 메뉴를 이용하는 그래픽 사용자 인터페이스를 제공한다.",
          "또한 저장 장치에 있는 프로그램을 주기억 장치로 불러와 실행을 돕고, 주기억 장치와 CPU 같은 자원을 필요한 프로그램에 나누어 준다. 여러 응용 소프트웨어가 함께 실행될 때는 CPU를 사용할 순서를 정하여 관리한다.",
          "파일과 데이터가 보조 기억 장치에 저장될 수 있도록 관리하고, 새로 연결된 입출력 장치를 장치 드라이버를 통해 인식하고 사용할 수 있게 한다.",
        ],
        bullets: [
          "사용자 인터페이스 제공",
          "응용 소프트웨어의 실행 지원",
          "파일과 보조 기억 장치의 데이터 관리",
          "CPU·주기억 장치 등 하드웨어 자원의 할당과 관리",
          "여러 응용 소프트웨어의 실행 순서 관리",
          "장치 드라이버를 통한 외부 입출력 장치의 인식과 관리",
        ],
      },
      {
        title: "8. 전원을 켰을 때: 펌웨어와 부팅",
        paragraphs: [
          "컴퓨터의 전원을 켜면 곧바로 운영체제가 실행되는 것이 아니다. 먼저 비휘발성 메모리에 저장된 펌웨어가 실행되어 하드웨어 상태를 점검한다.",
          "펌웨어는 하드웨어를 점검한 뒤 보조 기억 장치에 저장된 운영체제를 주기억 장치로 불러오고, 운영체제가 시스템을 사용할 수 있는 상태로 준비하도록 한다. 이러한 시작 과정을 부팅이라고 한다.",
        ],
      },
    ],
    textbookProblems: [
      {
        id: "tb-system-1",
        prompt:
          "컴퓨팅 시스템은 전자 회로 또는 기계 장치인 ( ① )와 이를 제어하는 ( ② )으로 구성된다. 빈칸에 들어갈 말을 써 보자.",
        answer: "① 하드웨어  ② 소프트웨어",
      },
      {
        id: "tb-system-2",
        prompt:
          "컴퓨팅 시스템의 동작 원리를 정리해 보자. 소프트웨어를 실행하면 명령어와 데이터가 ( ① )에 저장되고, ( ② )는 그 명령어에 따라 데이터를 처리한다. 출력하거나 보관할 데이터는 ( ③ )에 저장한다.",
        answer: "① 주기억 장치  ② 중앙 처리 장치(CPU)  ③ 보조 기억 장치",
      },
      {
        id: "tb-system-3",
        prompt:
          "운영체제의 역할을 정리해 보자. ‘사용자 인터페이스 제공 및 ( ① )의 실행 지원’, ‘새로운 ( ② ) 장치의 추가와 관리’, ‘여러 응용 소프트웨어를 동시에 실행할 수 있도록 하드웨어 ( ③ ) 관리’의 빈칸을 채워 보자.",
        answer: "① 응용 소프트웨어  ② 하드웨어  ③ 자원",
      },
    ],
  },
  {
    id: "physical-understanding",
    chapter: "2-1",
    title: "피지컬 컴퓨팅의 이해",
    kind: "학습",
    goals: [
      "피지컬 컴퓨팅의 의미를 설명할 수 있다.",
      "피지컬 컴퓨팅 시스템의 입력·처리·출력 구성 요소를 설명할 수 있다.",
      "생활 속 피지컬 컴퓨팅 사례에서 동작 원리를 찾을 수 있다.",
    ],
    intro:
      "피지컬 컴퓨팅은 하드웨어와 소프트웨어를 함께 이용하여 우리가 사는 물리적 세계와 상호 작용하는 시스템을 설계하고 만드는 것이다. 주변 환경을 감지하고, 감지한 정보를 처리하며, 처리 결과에 따라 실제 장치가 움직이거나 반응하도록 만든다.",
    sections: [
      {
        title: "1. 피지컬 컴퓨팅이 필요한 이유",
        paragraphs: [
          "실내 온도에 맞춰 에어컨 바람이 자동으로 조절되고, 사람이 가까이 가면 자동문이 열리며, 스마트 워치가 몸의 상태를 측정하는 것처럼 컴퓨팅 시스템은 현실 세계의 상태를 직접 감지하고 반응할 수 있다.",
          "이러한 방식은 단순히 화면 속 데이터를 처리하는 데 그치지 않고 실제 환경과 상호 작용한다는 점에서 특징이 있다.",
        ],
        bullets: [
          "에어컨",
          "자동문",
          "스마트 워치",
          "드론",
          "동작 인식 게임",
          "인터랙티브 아트",
          "로봇",
          "스마트팜",
        ],
      },
      {
        title: "2. 피지컬 컴퓨팅 시스템의 구성",
        paragraphs: [
          "피지컬 컴퓨팅 시스템은 마이크로컨트롤러, 센서, 구동기, 소프트웨어로 구성된다. 센서가 주변 환경의 상태를 입력으로 받아들이고, 마이크로컨트롤러가 프로그램에 따라 그 값을 처리하며, 구동기가 처리 결과에 따라 실제 동작을 수행한다.",
        ],
      },
      {
        title: "3. 입력: 센서",
        paragraphs: [
          "센서는 주변 환경의 상태를 감지하는 장치이다. 소리, 빛, 온도, 압력, 움직임, 방향 같은 물리적인 변화를 측정하여 처리 장치가 사용할 수 있는 정보로 전달한다.",
          "예를 들어 자동 수도꼭지에서는 적외선 센서가 사람의 손이 가까이 있는지를 감지한다. 감지된 값은 마이크로컨트롤러의 입력이 된다.",
        ],
      },
      {
        title: "4. 처리: 마이크로컨트롤러",
        paragraphs: [
          "마이크로컨트롤러는 특정 목적의 작업을 수행하도록 중앙 처리 장치, 주기억 장치, 입출력 기능 등을 하나의 칩에 집적한 작은 컴퓨팅 시스템이다.",
          "센서가 전달한 값을 읽고 프로그램에 정해진 조건을 판단한 뒤 구동기에 어떤 명령을 보낼지 결정한다.",
        ],
      },
      {
        title: "5. 출력: 구동기",
        paragraphs: [
          "구동기는 마이크로컨트롤러의 명령에 따라 움직이거나 반응하는 기계 장치이다. 모터, 밸브, LED, 스피커처럼 실제로 움직임·빛·소리 등을 만들어 내는 장치가 출력 역할을 한다.",
          "자동 수도꼭지의 경우 손이 감지되었다고 판단되면 마이크로컨트롤러가 밸브를 열도록 명령하고, 밸브가 움직이면서 물이 흐른다.",
        ],
      },
      {
        title: "6. 입력 → 처리 → 출력으로 이해하기",
        paragraphs: [
          "피지컬 컴퓨팅 사례를 이해할 때는 ‘무엇을 감지하는가’, ‘어떤 장치가 판단하는가’, ‘무엇이 실제로 반응하는가’를 구분하면 된다.",
          "자동문을 예로 들면 보행자의 접근을 센서가 감지하고, 마이크로컨트롤러가 입력값을 처리하며, 모터가 문을 여는 동작을 수행한다. 스마트 워치나 로봇, 스마트팜도 같은 구조로 분석할 수 있다.",
        ],
      },
    ],
  },
  {
    id: "physical-build",
    chapter: "2-2",
    title: "피지컬 컴퓨팅 시스템 구현",
    kind: "학습",
    goals: [
      "목적에 맞는 피지컬 컴퓨팅 구성 요소를 선택할 수 있다.",
      "마이크로비트의 주요 입출력 장치와 센서를 설명할 수 있다.",
      "입력 장치와 출력 장치를 이용한 프로그램의 동작을 이해할 수 있다.",
    ],
    intro:
      "피지컬 컴퓨팅 시스템을 만들려면 해결하려는 문제에 맞는 입력 장치와 출력 장치를 정하고, 이를 처리할 마이크로컨트롤러를 연결한 뒤 소프트웨어를 작성해야 한다. 교과서에서는 마이크로비트와 엔트리를 이용해 입력 장치와 출력 장치를 직접 제어하는 과정을 다룬다.",
    sections: [
      {
        title: "1. 목적에 맞는 하드웨어 구성",
        paragraphs: [
          "피지컬 컴퓨팅 시스템을 만들기 전에는 먼저 무엇을 감지할지, 어떤 반응을 만들지 결정해야 한다. 그다음 필요한 센서와 구동기를 선택해 마이크로컨트롤러에 연결한다.",
          "여러 센서와 입출력 장치가 미리 연결된 보드를 사용하면 각각의 부품을 처음부터 따로 조립하는 부담을 줄이고 빠르게 시스템을 구성할 수 있다.",
        ],
      },
      {
        title: "2. 마이크로비트의 앞면 구성",
        paragraphs: [
          "마이크로비트는 교육용 피지컬 컴퓨팅 보드로, 여러 입력·출력 장치와 센서가 하나의 작은 보드에 포함되어 있다. USB 케이블을 통해 컴퓨터와 연결하면 전원 공급과 프로그램 전송을 할 수 있다.",
        ],
        bullets: [
          "A·B 버튼: 사용자가 직접 누를 수 있는 입력 장치",
          "LED 디스플레이: 25개의 LED를 이용해 문자와 그림을 표시하는 출력 장치",
          "빛 센서: LED 디스플레이를 이용해 주변 밝기를 측정할 수 있음",
          "엣지 커넥터: 외부 센서와 구동기를 연결하기 위한 여러 개의 핀",
          "3V·GND 핀: 외부 장치에 전원을 공급하거나 회로를 연결할 때 사용",
          "터치 센서: 로고를 터치하는 입력을 프로그램에 활용할 수 있음",
          "마이크 LED: 마이크 사용 상태를 확인할 수 있음",
        ],
      },
      {
        title: "3. 마이크로비트의 뒷면 구성",
        paragraphs: [
          "뒷면에는 컴퓨터와 연결하기 위한 Micro USB 단자, 무선 통신을 위한 라디오·블루투스 안테나, 프로그램을 처리하는 마이크로컨트롤러, 방향을 감지하는 자기 센서, 움직임을 감지하는 가속도 센서, 소리를 내는 스피커와 소리를 입력받는 마이크 등이 있다.",
          "전원 상태와 USB 통신 상태를 나타내는 LED, 재시작 및 전원 버튼, 배터리 단자도 포함되어 있어 컴퓨터에서 분리한 뒤에도 전지를 연결해 사용할 수 있다.",
        ],
      },
      {
        title: "4. 외부 장치 연결",
        paragraphs: [
          "마이크로비트의 엣지 커넥터에는 큰 핀과 작은 핀이 있어 새로운 센서나 구동기를 연결할 수 있다. 3V와 GND 핀은 전원 공급에 이용하고, 여러 입출력 핀은 프로그램에서 값을 읽거나 출력하는 데 사용한다.",
          "악어 케이블을 이용해 서보모터나 토양 습도 센서 같은 외부 장치를 연결할 수 있고, 더 많은 핀을 편리하게 사용하기 위해 확장 보드를 연결하기도 한다.",
        ],
      },
      {
        title: "5. 동작을 위한 소프트웨어 개발",
        paragraphs: [
          "하드웨어가 준비되면 센서의 입력을 읽고 출력 장치를 제어할 소프트웨어를 작성해야 한다. 개발 환경을 이용하면 코드를 작성하고 완성된 프로그램을 마이크로비트에 전달할 수 있다.",
          "교과서에서는 엔트리의 블록 프로그래밍 환경에서 마이크로비트를 연결해 프로그램을 작성한다. 마이크로비트와 컴퓨터를 USB로 연결한 뒤 하드웨어 연결 기능에서 마이크로비트를 선택하고 연결한다.",
          "프로그램을 작성한 뒤 연결된 포트를 선택하고 실행하면 작성한 소프트웨어가 마이크로비트에 업로드되어 실제 장치에서 동작한다. 케이블 없이 활용하려는 경우에는 다른 개발 환경을 이용해 프로그램을 저장하여 실행할 수도 있다.",
        ],
      },
      {
        title: "6. 입력 장치로 감지하기",
        paragraphs: [
          "입력 장치를 활용하는 예로 교과서는 마이크를 이용한 달리기 장면을 제시한다. 마이크가 응원 소리의 크기를 감지하고, 프로그램은 측정된 소리 크기에 따라 화면 속 달리기 선수의 이동 정도를 바꾼다.",
          "프로그램을 만들 때는 먼저 오브젝트와 마이크로비트 하드웨어를 준비하고, 시작 명령과 반복 명령, 오브젝트의 위치를 바꾸는 명령, 마이크 소리 크기 값을 읽는 명령 등을 조합한다.",
          "센서 값이 커질수록 이동량을 크게 하도록 만들 수 있기 때문에 실제 소리 입력이 화면 속 움직임에 영향을 주는 피지컬 컴퓨팅 구조를 경험할 수 있다.",
        ],
      },
      {
        title: "7. 출력 장치로 반응하기",
        paragraphs: [
          "출력 장치를 활용하는 예로 교과서는 응원 플래카드 프로그램을 제시한다. 화면의 오브젝트를 클릭하면 마이크로비트의 LED 디스플레이가 정해진 하트 모양, 화살표 모양, 문자 등을 출력한다.",
          "LED 디스플레이에서는 25개의 LED를 선택하여 원하는 모양을 만들 수 있고, 각 LED의 밝기도 조절할 수 있다. 프로그램의 조건과 출력 명령을 연결하면 사용자의 동작에 따라 실제 장치가 다른 결과를 보여 주도록 만들 수 있다.",
        ],
      },
      {
        title: "8. 피지컬 컴퓨팅 시스템 구현의 핵심",
        paragraphs: [
          "피지컬 컴퓨팅 구현은 단순히 장치를 연결하는 것에서 끝나지 않는다. 목적을 정하고 입력과 출력을 설계한 뒤, 적절한 하드웨어를 선택하고, 소프트웨어를 작성하여 실제 동작을 확인하는 과정이 모두 포함된다.",
          "원하는 결과가 나오지 않으면 센서 값, 연결 상태, 프로그램의 조건과 명령을 확인하고 수정하면서 시스템을 개선한다.",
        ],
      },
    ],
    textbookProblems: [
      {
        id: "tb-physical-1",
        prompt:
          "( ① )은 하드웨어와 소프트웨어를 함께 이용하여 우리가 사는 세상과 상호 작용하는 시스템을 설계하고 만드는 것이다. 빈칸에 들어갈 말을 써 보자.",
        answer: "① 피지컬 컴퓨팅",
      },
      {
        id: "tb-physical-2",
        prompt:
          "피지컬 컴퓨팅 시스템의 구성 요소를 정리해 보자. ‘주변 환경 상태를 감지하고 소리, 빛, 온도, 압력 등을 측정하는 부품’과 ‘명령어에 의해 움직이거나 반응하는 기계 장치’의 이름을 각각 써 보자.",
        answer: "센서 / 구동기",
        explanation:
          "마이크로컨트롤러는 센서가 전달한 값을 처리하고, 구동기는 처리 결과에 따라 실제 동작이나 반응을 만든다.",
      },
    ],
  },
  {
    id: "project",
    chapter: "창의·융합",
    title: "마이크로비트 콰이어",
    kind: "프로젝트",
    intro:
      "교과서의 창의·융합 프로젝트는 마이크로비트를 이용해 여러 사람이 함께 연주하는 ‘마이크로비트 콰이어’를 구성하는 활동이다. 핸드벨처럼 각 장치가 하나의 음을 담당하도록 만들고, 모둠원과 역할을 나누어 하나의 곡을 완성한다.",
    sections: [
      {
        title: "1. 프로젝트의 생각",
        paragraphs: [
          "핸드벨은 하나의 악기가 한 가지 높이의 음을 내며, 여러 연주자가 서로 다른 음을 맡아 함께 연주하면 하나의 곡이 완성된다. 마이크로비트도 이와 비슷하게 각 장치가 하나의 음을 내도록 프로그래밍하여 여러 장치를 함께 사용할 수 있다.",
        ],
      },
      {
        title: "2. 연주곡 선정과 장치 수 결정",
        paragraphs: [
          "먼저 연주할 곡을 고르고 악보에서 사용되는 음의 종류를 확인한다. 필요한 음의 종류에 따라 필요한 마이크로비트의 수와 연주자의 수를 결정한다.",
        ],
      },
      {
        title: "3. 모둠 구성과 역할 분담",
        paragraphs: [
          "모둠에서 사용할 마이크로비트와 연주할 음을 나누고, 누가 어떤 역할을 맡을지 정한다. 협력 프로젝트이므로 각 장치의 기능뿐 아니라 전체 연주의 순서와 팀원 간의 협력이 중요하다.",
        ],
      },
      {
        title: "4. 프로그램 개발과 실행",
        paragraphs: [
          "각 마이크로비트가 담당한 음을 내도록 프로그램을 작성하고 실제로 실행해 본다. 연주 결과를 확인하면서 프로그램이나 연주 순서를 수정하고, 최종적으로 모둠 전체가 함께 연주한다.",
        ],
      },
    ],
  },
  {
    id: "career-review",
    chapter: "진로·마무리",
    title: "메이커와 1단원 정리",
    kind: "진로",
    intro:
      "1단원의 마지막에서는 컴퓨팅 기술을 이용해 아이디어를 실제 작품으로 구현하는 ‘메이커’ 활동을 살펴보고, 컴퓨팅 시스템과 피지컬 컴퓨팅의 핵심 개념을 다시 연결해 정리한다.",
    sections: [
      {
        title: "1. 메이커란?",
        paragraphs: [
          "메이커는 단순히 발명가만을 뜻하는 것이 아니라 자신이 필요한 것을 직접 만들고, 아이디어를 실제 결과물로 구현하는 사람을 넓게 가리킨다.",
          "2000년대 이후에는 디지털 제작 도구와 오픈 소스 기술이 널리 보급되면서 개인도 제품을 설계하고 시제품을 만들어 볼 수 있게 되었고, 제작 방법과 아이디어를 공유하는 메이커 문화가 활발해졌다.",
        ],
      },
      {
        title: "2. 메이커 활동과 진로",
        paragraphs: [
          "메이커 활동은 다양한 직업과 연결될 수 있다. 과거에는 제품을 만들기 위해 큰 기업이나 많은 제작비가 필요했지만, 오늘날에는 소형 컴퓨팅 보드와 디지털 제작 도구를 이용해 개인이 직접 아이디어를 시험하고 시제품을 만들 수 있다.",
          "작품의 기획, 디자인, 제작까지 혼자 시도해 볼 수도 있고, 제작 과정을 콘텐츠로 공유하거나 문제 해결 경험을 새로운 진로로 확장할 수도 있다.",
        ],
      },
      {
        title: "3. 1단원 전체 흐름",
        paragraphs: [
          "컴퓨팅 시스템은 하드웨어와 소프트웨어가 연결되어 동작한다. 입력된 데이터는 주기억 장치와 CPU를 중심으로 처리되고, 결과는 출력되거나 보조 기억 장치에 저장된다. 운영체제는 이러한 자원과 프로그램 실행을 관리한다.",
          "피지컬 컴퓨팅은 이 컴퓨팅 시스템의 원리를 현실 세계와 연결한다. 센서가 환경을 감지하고, 마이크로컨트롤러가 값을 처리하며, 구동기가 실제 동작으로 반응한다. 목적에 맞는 하드웨어를 구성하고 소프트웨어를 개발하면 생활 속 문제를 해결하는 시스템을 직접 만들 수 있다.",
        ],
        bullets: [
          "컴퓨팅 시스템: 입력된 데이터를 처리하고 결과를 출력하는 전자 장치와 시스템",
          "컴퓨팅 시스템의 특징: 빠른 작업 속도, 큰 저장 공간, 작업 자동화, 정확한 처리",
          "하드웨어: CPU, RAM, 입력·출력 장치, 보조 기억 장치 등",
          "소프트웨어: 응용 소프트웨어와 시스템 소프트웨어",
          "운영체제: 사용자 인터페이스 제공, 프로그램 실행 지원, 하드웨어 자원 관리",
          "피지컬 컴퓨팅: 센서와 구동기를 이용해 현실 세계와 상호 작용하는 컴퓨팅 시스템",
          "피지컬 컴퓨팅 동작: 센서 입력 → 마이크로컨트롤러 처리 → 구동기 출력",
          "구현: 목적에 맞는 하드웨어 구성 + 이를 동작시키는 소프트웨어 개발",
        ],
      },
    ],
  },
];

const studyUnits: Record<"I" | "II" | "III" | "IV" | "V", Lesson[]> = {
  I: unitOneLessons,
  II: unitTwoLessons,
  III: unitThreeLessons,
  IV: unitFourLessons,
  V: unitFiveLessons,
};

type ReadyUnit = keyof typeof studyUnits;

const STORAGE_KEY = "seyoung-middle-school-info-2022-unit1-v3";

export default function MiddleSchoolInfoStudy() {
  const [activeUnit, setActiveUnit] = useState<ReadyUnit>("I");
  const [activeId, setActiveId] = useState(unitOneLessons[0].id);
  const [revealed, setRevealed] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setRevealed(JSON.parse(saved));
    } catch {
      // 저장 데이터가 손상되어도 학습 화면은 정상 동작합니다.
    }
  }, []);

  const activeLessons = studyUnits[activeUnit];
  const activeLesson = activeLessons.find((lesson) => lesson.id === activeId) ?? activeLessons[0];
  const totalProblems = useMemo(
    () =>
      Object.values(studyUnits)
        .flat()
        .reduce((sum, lesson) => sum + (lesson.textbookProblems?.length ?? 0), 0),
    [],
  );
  const progress = totalProblems === 0 ? 0 : Math.round((revealed.length / totalProblems) * 100);
  const currentUnitTitle =
    curriculum.find((unit) => unit.roman === activeUnit)?.title ?? "컴퓨팅 시스템";

  function selectUnit(unit: ReadyUnit) {
    setActiveUnit(unit);
    setActiveId(studyUnits[unit][0].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectLesson(id: string) {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function revealAnswer(id: string) {
    if (revealed.includes(id)) return;
    const next = [...revealed, id];
    setRevealed(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <section className="textbook-page">
      <div className="textbook-topbar">
        <div>
          <span className="eyebrow">2022 REVISED CURRICULUM · INFORMATION</span>
          <h1>중학교 정보</h1>
          <p>
            교과서를 별도로 보지 않아도 학습할 수 있도록 본문 내용을 충분히 풀어 정리했습니다.
            문제는 교과서에 실제로 실린 문제만 제공합니다.
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
          <span className="eyebrow">CURRICULUM</span>
          <strong style={{ display: "block", marginTop: 6 }}>2022 개정 정보 · 전체 대단원</strong>
          <p>I. 컴퓨팅 시스템부터 V. 디지털 문화까지 2022 개정 정보 교과서 전체 대단원의 학습 자료가 준비되어 있습니다.</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
          }}
        >
          {curriculum.map((unit) => {
            const selected = activeUnit === unit.roman;
            return (
              <button
                type="button"
                key={unit.roman}
                disabled={!unit.ready}
                onClick={() => unit.ready && selectUnit(unit.roman as ReadyUnit)}
                style={{
                  padding: "14px 15px",
                  borderRadius: 12,
                  border: selected
                    ? "2px solid #2457d6"
                    : unit.ready
                      ? "1px solid #b8c8f5"
                      : "1px solid #e5e7eb",
                  background: selected ? "#eaf0ff" : unit.ready ? "#f8faff" : "#f8fafc",
                  opacity: unit.ready ? 1 : 0.55,
                  textAlign: "left",
                  cursor: unit.ready ? "pointer" : "default",
                  color: "inherit",
                }}
              >
                <b style={{ color: unit.ready ? "#2457d6" : "#667085" }}>{unit.roman}</b>
                <div style={{ marginTop: 5, fontWeight: 700 }}>{unit.title}</div>
                <small style={{ color: "#667085" }}>
                  {selected ? "학습 중" : unit.ready ? "학습 가능" : "자료 준비 중"}
                </small>
              </button>
            );
          })}
        </div>
      </section>

      <div className="progress-card">
        <div>
          <strong>교과서 문제 확인</strong>
          <span>
            {revealed.length} / {totalProblems}문제 정답 확인
          </span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
        <b>{progress}%</b>
      </div>

      <div className="textbook-layout">
        <aside className="unit-nav">
          <strong>{activeUnit}. {currentUnitTitle}</strong>
          {activeLessons.map((lesson) => (
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
              <small>{lesson.kind ?? "학습"}</small>
            </button>
          ))}
        </aside>

        <div className="study-panel">
          <div className="study-heading">
            <span className="eyebrow">{activeLesson.chapter}</span>
            <h2>{activeLesson.title}</h2>
            <p>{activeLesson.intro}</p>
          </div>

          {activeLesson.goals && (
            <section className="concept-card" style={{ borderColor: "#dce6ff" }}>
              <h3>학습 목표</h3>
              <ul>
                {activeLesson.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </section>
          )}

          <div style={{ display: "grid", gap: 14, marginBottom: 24 }}>
            {activeLesson.sections.map((section) => (
              <section className="concept-card" key={section.title} style={{ marginBottom: 0 }}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      color: "#344054",
                      lineHeight: 1.9,
                      margin: "0 0 12px",
                      wordBreak: "keep-all",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul style={{ marginTop: 12 }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {activeLesson.textbookProblems && activeLesson.textbookProblems.length > 0 && (
            <section className="question-section">
              <div className="question-section-title">
                <span className="eyebrow">TEXTBOOK QUESTIONS</span>
                <h3>교과서 문제</h3>
                <p className="muted" style={{ marginTop: 0 }}>
                  아래 문제는 업로드된 교과서의 「문제로 정리」 내용을 바탕으로 옮긴 것입니다.
                  먼저 스스로 답한 뒤 정답을 확인하세요.
                </p>
              </div>

              {activeLesson.textbookProblems.map((problem, index) => {
                const isRevealed = revealed.includes(problem.id);
                return (
                  <article className="question-card" key={problem.id}>
                    <strong>교과서 문제 {index + 1}</strong>
                    <h4 style={{ whiteSpace: "pre-line" }}>{problem.prompt}</h4>

                    <button
                      type="button"
                      className="primary-button question-check"
                      onClick={() => revealAnswer(problem.id)}
                    >
                      {isRevealed ? "정답 확인 완료" : "정답 보기"}
                    </button>

                    {isRevealed && (
                      <div className="answer-feedback correct">
                        <strong>정답</strong>
                        <p>{problem.answer}</p>
                        {problem.explanation && <p>{problem.explanation}</p>}
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          )}

          <div
            className="notice-card"
            style={{ marginTop: 28, justifyContent: "space-between", flexWrap: "wrap" }}
          >
            <div>
              <strong>다음 학습으로 이동</strong>
              <p>본문을 충분히 읽은 뒤 다음 구간으로 넘어가세요.</p>
            </div>
            {activeLessons.findIndex((lesson) => lesson.id === activeId) < activeLessons.length - 1 ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  const index = activeLessons.findIndex((lesson) => lesson.id === activeId);
                  selectLesson(activeLessons[index + 1].id);
                }}
              >
                다음 학습 →
              </button>
            ) : activeUnit === "I" ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => selectUnit("II")}
              >
                II. 데이터 학습 →
              </button>
            ) : activeUnit === "II" ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => selectUnit("III")}
              >
                III. 알고리즘과 프로그래밍 학습 →
              </button>
            ) : activeUnit === "III" ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => selectUnit("IV")}
              >
                IV. 인공지능 학습 →
              </button>
            ) : activeUnit === "IV" ? (
              <button
                type="button"
                className="primary-button"
                onClick={() => selectUnit("V")}
              >
                V. 디지털 문화 학습 →
              </button>
            ) : (
              <Link className="secondary-button" href="/specialized" prefetch={false}>
                전체 단원 학습 완료 · 특성화고 대비반으로
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
