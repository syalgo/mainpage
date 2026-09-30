"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Term = {
  name: string;
  english: string;
  definition: string;
  detail?: string;
  example?: string;
  related?: string;
};

type TermGroup = {
  title: string;
  description: string;
  terms: Term[];
};

const glossaryGroups: TermGroup[] = [
  {
    "title": "정보과학 및 윤리",
    "description": "데이터·인공지능·웹 기술과 정보보호, 저작권 등 정보사회에서 알아야 할 핵심 개념을 학습합니다.",
    "terms": [
      {
        "name": "빅데이터",
        "english": "Big Data",
        "definition": "규모가 매우 크고, 다양한 형태로 빠르게 생성되는 대량의 데이터를 말합니다.",
        "detail": "빅데이터의 대표적인 특징은 규모(Volume), 다양성(Variety), 속도(Velocity)의 3V로 설명할 수 있습니다. 많은 데이터를 모으는 것보다 그 안에서 의미 있는 패턴과 정보를 찾아 활용하는 것이 중요합니다.",
        "example": "검색 기록, 위치정보, 쇼핑 기록, 센서 데이터 등을 분석해 교통 흐름이나 소비 패턴을 예측할 수 있습니다.",
        "related": "인공지능, 머신러닝"
      },
      {
        "name": "인공지능",
        "english": "Artificial Intelligence",
        "definition": "기계가 사람의 지능과 비슷한 판단·학습·문제 해결 능력을 수행하도록 만드는 기술입니다.",
        "detail": "인공지능은 언어 처리, 이미지 인식, 게임, 자율주행 등 다양한 분야에 활용됩니다. 자료에서는 사람이 하는 지적 활동의 일부를 기계가 수행하도록 만드는 기술로 설명합니다.",
        "example": "음성 비서가 질문을 이해하고 답하거나, 사진 속 사람이나 사물을 알아보는 기능이 인공지능의 활용 예입니다.",
        "related": "머신러닝, 스마트머신"
      },
      {
        "name": "머신러닝",
        "english": "Machine Learning / Deep Learning",
        "definition": "컴퓨터가 많은 데이터에서 규칙과 패턴을 찾아 스스로 성능을 개선하도록 하는 학습 방법입니다.",
        "detail": "머신러닝에서는 사람이 모든 규칙을 직접 정하기보다 학습 데이터를 제공해 컴퓨터가 패턴을 찾게 합니다. 딥러닝은 여러 층으로 구성된 인공신경망을 이용하는 대표적인 머신러닝 방법입니다.",
        "example": "많은 고양이 사진을 학습시킨 뒤 새로운 사진이 고양이인지 판단하게 할 수 있습니다.",
        "related": "빅데이터, 인공지능"
      },
      {
        "name": "클라우드",
        "english": "Cloud Computing",
        "definition": "자료와 소프트웨어를 인터넷상의 서버에 저장하고 필요할 때 이용하는 컴퓨팅 환경입니다.",
        "detail": "내 컴퓨터에 모든 파일과 프로그램을 저장하지 않아도 인터넷을 통해 서버의 저장공간이나 소프트웨어를 사용할 수 있습니다. 여러 기기에서 같은 자료에 접근하거나 공동 작업하기 좋습니다.",
        "example": "학교에서 작성한 문서를 클라우드에 저장하고 집의 컴퓨터나 스마트폰에서 이어서 편집하는 경우입니다.",
        "related": "인터넷, 서버"
      },
      {
        "name": "웹",
        "english": "World Wide Web / Hypertext",
        "definition": "인터넷에서 하이퍼텍스트 방식으로 연결된 문서와 멀티미디어 정보를 이용하는 서비스입니다.",
        "detail": "인터넷은 컴퓨터들이 연결된 네트워크 자체이고, 웹은 그 인터넷 위에서 동작하는 서비스 중 하나입니다. 웹 문서들은 하이퍼링크로 서로 연결되어 사용자가 원하는 순서로 이동할 수 있습니다.",
        "example": "웹 브라우저에서 링크를 눌러 다른 페이지로 이동하며 글·그림·영상 정보를 보는 활동입니다.",
        "related": "웹 2.0, 웹 3.0"
      },
      {
        "name": "웹 2.0",
        "english": "Web 2.0",
        "definition": "사용자가 정보를 보기만 하는 것을 넘어 직접 참여하고 공유하는 형태로 발전한 웹 환경을 말합니다.",
        "detail": "자료에서는 웹 2.0의 특징으로 플랫폼으로서의 웹과 집단지성을 강조합니다. 참여·공유·개방을 바탕으로 사용자들이 콘텐츠를 만들고 서로 협력합니다.",
        "example": "블로그, 카페, 동영상 공유 서비스, 위키처럼 사용자가 직접 글과 자료를 올리고 수정하는 서비스가 대표적입니다.",
        "related": "웹, 위키피디아"
      },
      {
        "name": "위키피디아",
        "english": "Wikipedia",
        "definition": "여러 사용자가 함께 문서를 작성하고 수정하는 위키 방식의 온라인 백과사전입니다.",
        "detail": "위키는 여러 사람이 문서를 쉽게 수정·추가할 수 있는 협업형 웹 서비스입니다. 많은 사람이 함께 지식을 만들어 간다는 점에서 집단지성의 사례로 볼 수 있지만, 내용의 신뢰성은 출처를 확인하며 판단해야 합니다.",
        "example": "한 사람이 작성한 문서에 다른 사용자가 내용을 보완하거나 잘못된 부분을 수정할 수 있습니다.",
        "related": "웹 2.0, 집단지성"
      },
      {
        "name": "웹 3.0",
        "english": "Web 3.0 / Semantic Web",
        "definition": "웹이 정보의 의미와 사용자의 상황을 이해해 더 적합한 정보를 제공하려는 발전 방향을 말합니다.",
        "detail": "자료에서는 웹 3.0을 시맨틱 웹 또는 지능형 웹과 연결해 설명합니다. 단순히 검색어가 같은 문서를 찾는 것을 넘어 정보의 의미와 맥락을 파악하는 방향입니다.",
        "example": "'블록'을 검색했을 때 사용자의 학습 맥락을 이해해 장난감이 아니라 프로그래밍 블록 정보를 우선 보여주는 경우를 생각할 수 있습니다.",
        "related": "웹, 인공지능"
      },
      {
        "name": "사물인터넷",
        "english": "IoT; Internet of Things",
        "definition": "여러 사물에 센서와 통신 기능을 넣어 인터넷으로 정보를 주고받고 제어하는 기술입니다.",
        "detail": "사물은 센서로 주변 정보를 감지하고, 유무선 통신으로 다른 기기나 서버와 데이터를 교환합니다. 수집한 정보에 따라 자동으로 동작하거나 다른 사물과 협력할 수 있습니다.",
        "example": "스마트폰으로 현관문을 잠그거나, 주차 공간의 센서가 빈 자리를 알려주는 시스템입니다.",
        "related": "센서, 네트워크, 스마트머신"
      },
      {
        "name": "스마트머신",
        "english": "Smart Machine",
        "definition": "사람이 계속 직접 조작하지 않아도 상황을 인식·판단하고 스스로 동작하는 지능형 시스템입니다.",
        "detail": "스마트머신은 센싱, 제어, 데이터 분석, 인공지능 기술 등을 함께 사용합니다. 자율주행차·로봇·가상 비서처럼 사용자의 의도나 주변 환경을 파악해 행동합니다.",
        "example": "자율주행차가 차선과 주변 차량을 인식해 속도와 방향을 스스로 조절하는 경우입니다.",
        "related": "인공지능, 사물인터넷"
      },
      {
        "name": "증강현실",
        "english": "AR; Augmented Reality",
        "definition": "현실의 모습 위에 가상의 정보나 이미지를 겹쳐 보여주는 기술입니다.",
        "detail": "가상현실이 주변 환경 전체를 가상으로 만드는 것과 달리, 증강현실은 실제 현실을 바탕으로 필요한 정보만 추가합니다. 현실과 가상 정보가 실시간으로 함께 보인다는 점이 특징입니다.",
        "example": "스마트폰 카메라로 방을 비추면서 가구가 실제 공간에 놓인 것처럼 미리 배치해 보는 기능입니다.",
        "related": "가상현실, 사용자 인터페이스"
      },
      {
        "name": "지식재산권",
        "english": "Intellectual Property Rights",
        "definition": "사람의 창작과 지적 활동으로 만들어진 결과물에 대해 인정되는 권리를 말합니다.",
        "detail": "눈에 보이는 물건의 소유권과 달리 아이디어·창작물·기술처럼 무형의 결과를 보호합니다. 자료에서는 산업재산권, 저작권, 신지식재산권 등으로 구분해 설명합니다.",
        "example": "소프트웨어 프로그램, 그림, 음악, 발명 기술 등에 대한 권리가 지식재산권과 관련됩니다.",
        "related": "저작권, 카피레프트"
      },
      {
        "name": "저작권(카피라이트)",
        "english": "Copyright",
        "definition": "창작물을 만든 사람이 자신의 저작물에 대해 가지는 법적 권리입니다.",
        "detail": "자료에서는 저작권을 저작인격권과 저작재산권으로 나누어 설명합니다. 디지털 문서·음악·사진·영상·컴퓨터 프로그램도 저작권 보호 대상이 될 수 있습니다.",
        "example": "인터넷에서 받은 사진이나 폰트를 발표 자료에 사용할 때도 이용 조건과 출처를 확인해야 합니다.",
        "related": "지식재산권, 카피레프트"
      },
      {
        "name": "카피레프트",
        "english": "Copyleft",
        "definition": "저작권을 없애는 것이 아니라 저작권을 바탕으로 창작물의 자유로운 이용과 공유를 넓히려는 생각입니다.",
        "detail": "일정한 조건을 지키면 다른 사람이 저작물을 사용·수정·배포할 수 있도록 허용하는 방식입니다. 자료에서는 자유 소프트웨어 운동과 CCL을 함께 소개합니다.",
        "example": "출처 표시 등 정해진 조건을 지키면 다른 사람이 자유롭게 활용하도록 허용한 저작물이 있습니다.",
        "related": "저작권, GNU 프로젝트"
      },
      {
        "name": "GNU프로젝트, FSF",
        "english": "GNU Project / Free Software Foundation",
        "definition": "소프트웨어의 소스 코드를 자유롭게 사용·수정·배포할 수 있는 환경을 추구한 자유 소프트웨어 운동과 프로젝트입니다.",
        "detail": "FSF는 자유 소프트웨어의 사용·수정·공유의 자유를 강조하며 GNU 프로젝트를 추진했습니다. 'free'는 단순히 무료라는 뜻보다 자유롭게 사용할 수 있다는 의미에 가깝습니다.",
        "example": "소스가 공개되어 사용자가 수정하거나 배포할 수 있는 자유 소프트웨어가 이 철학과 연결됩니다.",
        "related": "카피레프트, 오픈소스"
      },
      {
        "name": "개인정보보호법",
        "english": "Personal Information Protection",
        "definition": "개인을 알아볼 수 있는 정보를 안전하게 수집·이용·보관하도록 정한 보호 원칙과 법적 기준입니다.",
        "detail": "개인정보에는 이름·주소처럼 직접 식별되는 정보뿐 아니라 여러 정보를 결합했을 때 개인을 알아볼 수 있는 정보도 포함될 수 있습니다. 정보를 수집할 때는 목적과 이용 범위를 분명히 하고 동의를 받아야 합니다.",
        "example": "회원가입에서 필요한 정보만 요구하고, 수집 목적과 보관 기간을 안내하는 절차가 개인정보 보호와 관련됩니다.",
        "related": "개인정보, 정보보안"
      },
      {
        "name": "방화벽",
        "english": "Firewall",
        "definition": "외부 네트워크와 내부 네트워크 사이에서 통신을 검사해 허용하거나 차단하는 보안 시스템입니다.",
        "detail": "미리 정한 보안 규칙에 따라 들어오고 나가는 네트워크 데이터를 확인합니다. 하드웨어 장비나 소프트웨어 형태로 구현될 수 있습니다.",
        "example": "허가되지 않은 외부 접속을 차단하거나 특정 프로그램의 네트워크 연결을 제한하는 기능입니다.",
        "related": "네트워크 보안, 악성프로그램"
      },
      {
        "name": "암호화기법",
        "english": "Encryption / Symmetric & Asymmetric Key",
        "definition": "데이터를 허가받지 않은 사람이 알아보기 어렵게 변환하고 필요할 때 다시 복원하는 방법입니다.",
        "detail": "대칭키 방식은 암호화와 복호화에 같은 비밀키를 사용하고, 비대칭키 방식은 공개키와 개인키처럼 서로 다른 키를 사용합니다. 각각 속도와 키 전달 방식에 차이가 있습니다.",
        "example": "인터넷에서 중요한 정보를 주고받을 때 내용을 암호화해 전송하면 중간에서 데이터를 보더라도 쉽게 이해하기 어렵습니다.",
        "related": "대칭키, 비대칭키, 정보보안"
      },
      {
        "name": "악성프로그램",
        "english": "Malware",
        "definition": "컴퓨터나 사용자에게 피해를 주거나 원하지 않는 동작을 수행하도록 만든 프로그램을 말합니다.",
        "detail": "자료에서는 바이러스·웜·트로이목마·스파이웨어를 구분합니다. 바이러스는 다른 프로그램에 붙어 복제되고, 웜은 스스로 실행·복제되며, 트로이목마는 정상 프로그램처럼 보이고, 스파이웨어는 몰래 정보를 수집할 수 있습니다.",
        "example": "정상적인 게임이나 유틸리티처럼 보이는 파일을 실행했는데 시스템 파일을 손상시키거나 개인정보를 빼내는 경우입니다.",
        "related": "컴퓨터 바이러스, 방화벽"
      }
    ]
  },
  {
    "title": "정보기기의 구성",
    "description": "컴퓨터가 자료를 표현하고 처리하는 방식, 운영체제와 네트워크의 기본 원리를 학습합니다.",
    "terms": [
      {
        "name": "이진수",
        "english": "Binary Number",
        "definition": "0과 1 두 숫자만 사용하는 2진법으로 표현한 수입니다.",
        "detail": "컴퓨터 회로는 전기가 통하는 상태와 통하지 않는 상태처럼 두 상태를 구분하기 쉬워 0과 1을 기본 단위로 사용합니다. 각 자리의 값은 1, 2, 4, 8, 16처럼 2의 거듭제곱으로 증가합니다.",
        "example": "십진수 13은 이진수로 1101이며, 8+4+0+1로 해석할 수 있습니다.",
        "related": "비트, 이진코드, 수의 표현"
      },
      {
        "name": "논리연산",
        "english": "Logical Operation",
        "definition": "참과 거짓을 대상으로 AND·OR·NOT 같은 규칙에 따라 결과를 계산하는 연산입니다.",
        "detail": "OR은 조건 중 하나 이상이 참이면 참, AND는 모든 조건이 참일 때 참, NOT은 참과 거짓을 반대로 바꿉니다. 컴퓨터의 조건 판단과 디지털 회로에서 기본적으로 사용됩니다.",
        "example": "아이디와 비밀번호가 모두 맞아야 로그인할 수 있도록 하려면 AND 조건을 사용할 수 있습니다.",
        "related": "논리연산자, 선택문"
      },
      {
        "name": "디지털(아날로그)",
        "english": "Digital / Analog",
        "definition": "디지털은 끊어진 값으로, 아날로그는 연속적으로 변하는 값으로 정보를 표현하는 방식입니다.",
        "detail": "컴퓨터는 0과 1처럼 구분된 상태를 이용하는 디지털 방식으로 자료를 처리합니다. 실제 세계의 소리·빛·온도처럼 연속적인 아날로그 정보는 컴퓨터에서 사용하려면 디지털 데이터로 변환해야 합니다.",
        "example": "아날로그 시계의 바늘은 연속적으로 움직이지만 디지털 시계는 정해진 숫자 단위로 시간을 표시합니다.",
        "related": "이진수, 소리표현, 이미지표현"
      },
      {
        "name": "사용자인터페이스",
        "english": "UI; User Interface",
        "definition": "사람과 컴퓨터가 정보를 주고받고 명령을 전달하는 방법과 화면 구성을 말합니다.",
        "detail": "문자로 명령을 입력하는 CLI/CUI 방식과 아이콘·창·버튼을 사용하는 GUI 방식 등이 있습니다. 좋은 인터페이스는 사용자가 기능을 쉽게 이해하고 조작할 수 있도록 도와줍니다.",
        "example": "명령 프롬프트에 명령어를 입력하는 것은 CLI, 화면의 폴더 아이콘을 마우스로 클릭하는 것은 GUI의 예입니다.",
        "related": "GUI, CLI, 운영체제"
      },
      {
        "name": "가상메모리",
        "english": "Virtual Memory",
        "definition": "보조기억장치의 일부를 주기억장치처럼 활용해 실제 RAM보다 큰 작업을 실행할 수 있게 하는 기법입니다.",
        "detail": "프로그램의 필요한 부분만 주기억장치에 올리고 나머지는 보조기억장치에 두었다가 필요할 때 교체합니다. 페이지 단위로 관리하는 페이징 방식이 대표적입니다.",
        "example": "RAM이 부족한 상황에서도 여러 프로그램을 실행할 수 있도록 저장장치의 일부 공간을 활용하는 경우입니다.",
        "related": "주기억장치, 로딩, 페이지"
      },
      {
        "name": "주기억장치",
        "english": "Main Memory Management",
        "definition": "실행 중인 프로그램과 데이터를 저장하는 주기억장치 공간을 운영체제가 할당하고 회수하는 관리 과정입니다.",
        "detail": "여러 프로그램이 동시에 실행되면 운영체제는 각 프로그램이 사용할 메모리 영역을 정해야 합니다. 자료에서는 최초 적합, 최적 적합, 최악 적합 같은 할당 방법을 예로 들어 설명합니다.",
        "example": "프로그램 크기에 맞는 빈 메모리 공간을 찾아 배치하고 프로그램이 끝나면 그 공간을 다시 사용할 수 있게 돌려놓습니다.",
        "related": "기억장치, 가상메모리, 운영체제"
      },
      {
        "name": "기억장치",
        "english": "Memory / Storage",
        "definition": "컴퓨터에서 프로그램과 데이터를 저장하는 장치를 말합니다.",
        "detail": "주기억장치는 접근 속도가 빠르지만 전원이 꺼지면 내용이 사라지는 경우가 많고, 보조기억장치는 속도는 상대적으로 느리지만 큰 용량을 오래 보관할 수 있습니다. RAM은 대표적인 주기억장치, HDD·SSD는 대표적인 보조기억장치입니다.",
        "example": "실행 중인 프로그램은 RAM에서 처리하고, 사진·문서 파일은 SSD나 HDD에 저장하는 식으로 함께 사용합니다.",
        "related": "RAM, HDD, SSD, 로딩"
      },
      {
        "name": "로딩",
        "english": "Loading",
        "definition": "실행할 프로그램이나 필요한 데이터를 보조기억장치에서 주기억장치로 가져오는 과정입니다.",
        "detail": "CPU는 실행에 필요한 명령과 데이터를 주기억장치에서 빠르게 가져와 처리합니다. 그래서 저장장치에 있는 프로그램을 실행하려면 먼저 RAM으로 적재하는 과정이 필요합니다.",
        "example": "게임 실행 버튼을 누른 뒤 로딩 화면이 나타나는 동안 필요한 프로그램과 자료가 메모리로 옮겨집니다.",
        "related": "기억장치, 주기억장치"
      },
      {
        "name": "프로세스",
        "english": "Process",
        "definition": "컴퓨터에서 현재 실행 중인 프로그램을 말합니다.",
        "detail": "프로그램이 저장된 파일 상태라면, 실행되어 CPU와 메모리 자원을 사용하기 시작한 것은 프로세스라고 볼 수 있습니다. 자료에서는 생성·준비·실행·대기·소멸 같은 상태 변화를 소개합니다.",
        "example": "웹 브라우저와 음악 재생 프로그램을 동시에 실행하면 각각 하나 이상의 프로세스로 동작합니다.",
        "related": "스케줄링, 운영체제"
      },
      {
        "name": "스케줄링",
        "english": "Process Scheduling Methods",
        "definition": "여러 프로세스 중 어느 작업에 CPU를 먼저 사용할 기회를 줄지 정하는 방법입니다.",
        "detail": "자료에서는 먼저 도착한 작업부터 처리하는 FCFS와 짧은 작업을 우선하는 SJF 등을 예로 듭니다. 어떤 기준을 선택하느냐에 따라 대기 시간과 효율이 달라집니다.",
        "example": "은행 창구에서 선착순으로 고객을 처리하는 방식은 FCFS와 비슷합니다.",
        "related": "프로세스, 스케줄링방법"
      },
      {
        "name": "스케줄링방법",
        "english": "Scheduling",
        "definition": "한정된 자원을 여러 작업이 사용할 때 처리 순서와 사용 시간을 정하는 일을 말합니다.",
        "detail": "CPU 스케줄링뿐 아니라 디스크 작업 순서처럼 다양한 자원 관리에 적용됩니다. 목표는 자원을 효율적으로 사용하고 여러 작업이 너무 오래 기다리지 않도록 하는 것입니다.",
        "example": "컴퓨터가 여러 프로그램의 CPU 사용 순서를 매우 짧은 시간 단위로 조정하는 과정입니다.",
        "related": "프로세스, 운영체제"
      },
      {
        "name": "다중작업",
        "english": "Multitasking",
        "definition": "여러 프로그램이 동시에 실행되는 것처럼 보이도록 컴퓨터가 작업을 번갈아 처리하는 방식입니다.",
        "detail": "하나의 CPU 코어가 여러 작업을 아주 빠르게 번갈아 실행하면 사용자는 여러 프로그램이 동시에 동작하는 것처럼 느낍니다. 각 작업을 짧은 시간씩 나누어 처리하는 것이 핵심입니다.",
        "example": "음악을 들으면서 웹 검색을 하고 문서를 편집하는 상황입니다.",
        "related": "프로세스, 스케줄링"
      },
      {
        "name": "교착상태",
        "english": "Deadlock",
        "definition": "여러 프로세스가 서로 상대가 가진 자원을 기다리며 어느 쪽도 진행하지 못하는 상태입니다.",
        "detail": "각 프로세스가 자신이 가진 자원은 놓지 않은 채 다른 프로세스의 자원을 기다리면 무한 대기가 발생할 수 있습니다. 운영체제는 이런 상황을 예방하거나 해결해야 합니다.",
        "example": "프로세스 A는 자원 1을 가진 채 자원 2를 기다리고, 프로세스 B는 자원 2를 가진 채 자원 1을 기다리는 경우입니다.",
        "related": "프로세스, 운영체제"
      },
      {
        "name": "인터럽트",
        "english": "Interrupt",
        "definition": "중요한 사건이 발생했을 때 CPU가 현재 작업을 잠시 멈추고 그 사건을 먼저 처리하도록 하는 신호입니다.",
        "detail": "인터럽트 처리가 끝나면 원래 하던 작업으로 돌아와 실행을 이어갈 수 있습니다. 여러 인터럽트가 동시에 발생할 수 있어 우선순위를 정하기도 합니다.",
        "example": "키보드를 누르거나 마우스를 클릭했을 때 입력을 처리하기 위해 현재 작업을 잠시 멈추는 상황입니다.",
        "related": "운영체제, 프로세스"
      },
      {
        "name": "운영체제",
        "english": "OS; Operating System",
        "definition": "컴퓨터 하드웨어와 소프트웨어 자원을 관리하고 사용자가 컴퓨터를 편리하게 사용할 수 있게 해 주는 시스템 소프트웨어입니다.",
        "detail": "CPU·메모리·저장장치·입출력장치 같은 자원을 여러 프로그램에 배분하고, 파일 관리와 프로그램 실행 환경도 제공합니다. 응용 프로그램과 하드웨어 사이에서 중재자 역할을 합니다.",
        "example": "Windows, macOS, Linux, Android 같은 운영체제가 프로그램 실행과 장치 사용을 관리합니다.",
        "related": "프로세스, 스케줄링, 기억장치"
      },
      {
        "name": "프로토콜",
        "english": "Protocol",
        "definition": "컴퓨터끼리 통신할 때 서로 지켜야 하는 약속과 규칙의 모음입니다.",
        "detail": "데이터의 형식, 전송 순서, 오류 처리 방식 등이 서로 맞아야 통신이 가능합니다. 사람끼리 대화할 때 같은 언어와 대화 규칙이 필요한 것과 비슷합니다.",
        "example": "웹 통신의 HTTP, 인터넷 통신의 TCP/IP처럼 목적에 따라 다양한 프로토콜이 사용됩니다.",
        "related": "네트워크, DNS, 라우터"
      },
      {
        "name": "DNS",
        "english": "Domain Name System",
        "definition": "사람이 읽기 쉬운 도메인 이름을 컴퓨터가 사용하는 IP 주소로 바꾸어 주는 시스템입니다.",
        "detail": "사용자는 숫자로 된 IP 주소를 모두 외우기 어렵기 때문에 문자 형태의 도메인 이름을 사용합니다. DNS 서버는 도메인 이름에 해당하는 IP 주소를 찾아 연결을 도와줍니다.",
        "example": "브라우저에 example.com을 입력하면 DNS가 해당 서버의 IP 주소를 찾아 접속할 수 있게 합니다.",
        "related": "도메인, IP 주소, 프로토콜"
      },
      {
        "name": "라우터",
        "english": "Router",
        "definition": "네트워크 사이에서 데이터가 목적지까지 갈 수 있도록 적절한 경로를 선택해 전달하는 장치입니다.",
        "detail": "라우터는 목적지 IP 주소 등을 확인해 다음에 어느 네트워크로 패킷을 보낼지 결정합니다. 여러 경로 중 효율적인 경로를 선택하는 역할을 합니다.",
        "example": "집의 공유기나 인터넷 통신망의 라우터가 데이터를 다음 네트워크 구간으로 전달합니다.",
        "related": "네트워크, 프로토콜, IP 주소"
      }
    ]
  },
  {
    "title": "정보 표현 및 관리",
    "description": "자료구조와 데이터 표현 방식, 컴퓨터가 수·문자·이미지·소리를 저장하는 원리를 학습합니다.",
    "terms": [
      {
        "name": "자료구조",
        "english": "Data Structure",
        "definition": "자료를 효율적으로 저장하고 사용하기 위해 일정한 형태로 조직하는 방법입니다.",
        "detail": "같은 자료라도 어떤 구조로 저장하느냐에 따라 탐색·삽입·삭제 속도와 필요한 메모리가 달라집니다. 문제의 성격에 맞는 자료구조를 선택하는 것이 중요합니다.",
        "example": "학생 목록을 배열로 저장할지, 연결리스트로 저장할지에 따라 자료를 찾고 추가하는 방식이 달라집니다.",
        "related": "선형구조, 비선형구조"
      },
      {
        "name": "선형구조",
        "english": "Linear Structure",
        "definition": "자료가 앞뒤 순서를 가지고 한 줄처럼 연결되는 자료구조입니다.",
        "detail": "각 자료가 순서대로 배치되므로 처음부터 차례로 접근하기 쉽습니다. 배열·연결리스트·스택·큐가 대표적인 선형 자료구조입니다.",
        "example": "급식 줄처럼 앞뒤 순서가 분명한 자료 구조를 떠올리면 이해하기 쉽습니다.",
        "related": "배열, 연결리스트, 스택, 큐"
      },
      {
        "name": "코드",
        "english": "Code",
        "definition": "정보를 표현하거나 의사소통하기 위해 정한 기호와 규칙의 체계를 말합니다.",
        "detail": "사람은 문자·점자·수신호처럼 여러 코드를 사용하고, 컴퓨터는 0과 1을 이용한 이진코드로 정보를 표현합니다. 코드가 같아야 서로 의미를 정확히 해석할 수 있습니다.",
        "example": "문자 'A'를 특정한 이진수 값으로 대응해 저장하는 문자 코드가 있습니다.",
        "related": "이진코드, 문자표현"
      },
      {
        "name": "배열",
        "english": "Array",
        "definition": "같은 종류의 여러 자료를 연속된 공간에 저장하고 번호로 접근하는 자료구조입니다.",
        "detail": "각 원소는 인덱스를 이용해 빠르게 접근할 수 있습니다. 하지만 크기가 정해져 있거나 중간에 자료를 삽입·삭제할 때 여러 원소를 이동해야 하는 단점이 있을 수 있습니다.",
        "example": "학생 30명의 점수를 0번부터 29번까지 번호를 붙여 저장할 수 있습니다.",
        "related": "선형구조, 연결리스트"
      },
      {
        "name": "연결리스트",
        "english": "Linked List",
        "definition": "각 자료가 다음 자료의 위치 정보를 함께 저장하며 연결되는 선형 자료구조입니다.",
        "detail": "자료들이 메모리에 연속해서 놓이지 않아도 연결할 수 있어 삽입·삭제가 비교적 유연합니다. 대신 특정 위치를 바로 찾아가기보다 앞에서부터 연결을 따라가야 합니다.",
        "example": "기차 객차가 다음 객차와 연결되어 이어지는 모습을 생각하면 이해하기 쉽습니다.",
        "related": "배열, 선형구조"
      },
      {
        "name": "스택",
        "english": "Stack",
        "definition": "마지막에 넣은 자료를 가장 먼저 꺼내는 LIFO 방식의 자료구조입니다.",
        "detail": "자료를 넣는 연산을 push, 꺼내는 연산을 pop이라고 부릅니다. 한쪽 끝에서만 삽입과 삭제가 이루어지는 구조입니다.",
        "example": "접시를 쌓아 두면 마지막에 올린 접시부터 꺼내게 되는 것과 같습니다.",
        "related": "큐, 선형구조"
      },
      {
        "name": "큐",
        "english": "Queue",
        "definition": "먼저 들어온 자료를 가장 먼저 꺼내는 FIFO 방식의 자료구조입니다.",
        "detail": "한쪽에서는 자료를 넣고 다른 쪽에서는 자료를 꺼냅니다. 처리 순서를 공정하게 유지해야 하는 대기열에 적합합니다.",
        "example": "버스를 기다리는 줄에서 먼저 줄을 선 사람이 먼저 타는 것과 같습니다.",
        "related": "스택, 선형구조"
      },
      {
        "name": "비선형 구조",
        "english": "Non-linear Structure",
        "definition": "자료가 한 줄 순서가 아니라 계층이나 여러 연결 관계로 구성되는 자료구조입니다.",
        "detail": "하나의 자료가 여러 자료와 연결될 수 있어 복잡한 관계를 표현하기 좋습니다. 트리와 그래프가 대표적인 비선형 자료구조입니다.",
        "example": "가족관계도, 지하철 노선도, 친구 관계처럼 여러 방향으로 연결되는 정보를 표현할 때 사용합니다.",
        "related": "트리, 그래프"
      },
      {
        "name": "트리",
        "english": "Tree",
        "definition": "하나의 시작점에서 가지가 뻗어 나가는 계층 구조의 비선형 자료구조입니다.",
        "detail": "가장 위의 노드를 루트라고 하고, 노드 사이에는 부모·자식 관계가 생깁니다. 계층적인 정보를 표현하고 탐색하는 데 유용합니다.",
        "example": "폴더 안에 하위 폴더가 들어가는 파일 구조나 조직도가 트리 구조와 비슷합니다.",
        "related": "비선형 구조, 이진탐색트리"
      },
      {
        "name": "이진탐색트리",
        "english": "Binary Search Tree",
        "definition": "각 노드의 왼쪽에는 더 작은 값, 오른쪽에는 더 큰 값이 오도록 구성한 이진 트리입니다.",
        "detail": "이 규칙을 이용하면 찾는 값과 현재 노드를 비교해 왼쪽 또는 오른쪽 중 한쪽만 탐색할 수 있습니다. 트리가 균형을 잘 유지하면 탐색이 효율적입니다.",
        "example": "50을 기준으로 30은 왼쪽, 70은 오른쪽에 두고 원하는 수를 비교하며 내려갑니다.",
        "related": "트리, 이진탐색"
      },
      {
        "name": "그래프",
        "english": "Graph",
        "definition": "정점과 정점 사이의 연결 관계를 간선으로 나타내는 비선형 자료구조입니다.",
        "detail": "그래프는 길찾기, 관계망, 네트워크처럼 복잡한 연결을 표현하는 데 사용합니다. 간선에 방향이나 거리·비용 같은 값을 함께 저장할 수도 있습니다.",
        "example": "지하철역을 정점, 역 사이 연결을 간선으로 표현하면 지하철 노선도를 그래프로 나타낼 수 있습니다.",
        "related": "비선형 구조, 트리"
      },
      {
        "name": "이진코드",
        "english": "Binary Code",
        "definition": "컴퓨터가 정보를 0과 1의 조합으로 표현하는 코드입니다.",
        "detail": "수·문자·그림·소리·영상처럼 서로 다른 정보도 결국 컴퓨터 안에서는 비트들의 조합으로 저장됩니다. 어떤 비트 조합이 무엇을 의미하는지는 정해진 표현 규칙에 따라 달라집니다.",
        "example": "문자도 문자 코드표에 따라 특정 이진값으로 변환되어 저장됩니다.",
        "related": "이진수, 문자표현, 이미지표현"
      },
      {
        "name": "수의 표현",
        "english": "Number Representation",
        "definition": "십진수 같은 사람의 수 표현을 컴퓨터에서 사용할 수 있는 이진수 형태로 바꾸어 저장하는 방법입니다.",
        "detail": "컴퓨터는 0과 1만 사용하므로 십진수를 이진수로 변환해 표현합니다. 같은 비트 수로 표현할 수 있는 값의 범위가 정해져 있다는 점도 중요합니다.",
        "example": "십진수 10은 이진수 1010으로 표현할 수 있습니다.",
        "related": "이진수, 이진코드"
      },
      {
        "name": "문자표현",
        "english": "Character Encoding",
        "definition": "문자마다 고유한 숫자 값을 약속하고 그 값을 이진수로 저장하는 방법입니다.",
        "detail": "컴퓨터는 문자 자체를 이해하는 것이 아니라 문자 코드표에서 정한 번호를 저장합니다. ASCII, 유니코드처럼 문자와 숫자를 대응시키는 다양한 표준이 있습니다.",
        "example": "영문자 A를 정해진 코드 값으로 바꾸고 다시 이진수로 저장합니다.",
        "related": "코드, 이진코드"
      },
      {
        "name": "이미지표현(래스터방식)",
        "english": "Raster Image",
        "definition": "이미지를 매우 작은 점인 픽셀들의 모음으로 표현하는 방식입니다.",
        "detail": "각 픽셀에 색상 정보를 저장해 전체 그림을 만듭니다. 확대하면 픽셀의 경계가 보이고 이미지가 거칠어질 수 있으며, 해상도가 높을수록 더 많은 픽셀이 필요합니다.",
        "example": "사진 파일과 디지털 카메라 이미지가 대표적인 래스터 이미지입니다.",
        "related": "픽셀, RGB, 벡터 이미지"
      },
      {
        "name": "이미지표현(벡터방식)",
        "english": "Vector Image",
        "definition": "선·곡선·도형을 좌표와 수학식으로 표현하는 이미지 방식입니다.",
        "detail": "픽셀을 그대로 저장하는 것이 아니라 도형을 그리는 규칙을 저장하므로 크기를 확대하거나 축소해도 비교적 선명하게 유지됩니다. 단순한 도형·로고·아이콘에 적합합니다.",
        "example": "원 하나를 중심 좌표와 반지름으로 저장해 화면 크기에 맞게 다시 그릴 수 있습니다.",
        "related": "래스터 이미지, 그래픽"
      },
      {
        "name": "소리표현",
        "english": "Digital Audio",
        "definition": "연속적인 소리 파형을 일정한 시간 간격으로 측정해 숫자로 저장하는 방법입니다.",
        "detail": "아날로그 소리를 디지털로 바꿀 때 샘플링을 사용합니다. 얼마나 자주 측정하는지와 각 측정값을 얼마나 세밀하게 표현하는지에 따라 음질과 데이터 크기가 달라집니다.",
        "example": "마이크로 녹음한 음성은 일정 간격으로 소리의 크기를 측정한 디지털 값들의 모음으로 저장됩니다.",
        "related": "디지털, 샘플링, 압축기술"
      },
      {
        "name": "동영상표현",
        "english": "Digital Video",
        "definition": "여러 장의 이미지를 빠르게 연속해서 보여 주고 소리를 함께 저장해 움직임을 표현하는 방식입니다.",
        "detail": "동영상의 한 장면을 프레임이라고 하며, 1초에 표시하는 프레임 수가 많을수록 움직임이 더 부드럽게 보일 수 있습니다. 영상은 데이터 양이 매우 크기 때문에 압축 기술이 중요합니다.",
        "example": "초당 30장의 프레임을 연속해서 보여 주면 자연스러운 움직임처럼 느낄 수 있습니다.",
        "related": "이미지표현, 소리표현, 압축기술"
      },
      {
        "name": "압축기술",
        "english": "Data Compression",
        "definition": "데이터의 표현 방법을 바꾸어 저장 공간이나 전송량을 줄이는 기술입니다.",
        "detail": "원래 내용을 완전히 복원할 수 있는 무손실 압축과 일부 정보를 버리는 대신 더 많이 줄일 수 있는 손실 압축이 있습니다. 압축 전후의 데이터 크기 비율을 통해 압축 효과를 비교할 수 있습니다.",
        "example": "문서나 프로그램 파일은 무손실 압축을, 사진·음악·영상은 목적에 따라 손실 압축을 사용하기도 합니다.",
        "related": "인코딩, 디코딩, 동영상표현"
      }
    ]
  },
  {
    "title": "문제해결방법 및 절차",
    "description": "알고리즘과 프로그래밍의 기본 구조, 탐색·정렬, 시간·공간복잡도까지 문제 해결에 필요한 핵심 개념을 학습합니다.",
    "terms": [
      {
        "name": "알고리즘",
        "english": "Algorithm",
        "definition": "문제를 해결하기 위한 방법과 절차를 순서대로 정리한 것입니다.",
        "detail": "좋은 알고리즘은 단계가 명확하고 실제로 실행 가능하며, 정해진 과정을 거쳐 종료되어야 합니다. 같은 문제도 어떤 알고리즘을 선택하느냐에 따라 실행 시간과 메모리 사용량이 크게 달라질 수 있습니다.",
        "example": "라면 끓이는 순서나 최대공약수를 구하는 절차도 순서와 조건을 명확히 정하면 알고리즘으로 표현할 수 있습니다.",
        "related": "프로그래밍 언어, 시간복잡도"
      },
      {
        "name": "프로그래밍 언어",
        "english": "Programming Language",
        "definition": "사람이 컴퓨터에게 수행할 명령을 프로그램으로 작성하기 위해 사용하는 언어입니다.",
        "detail": "프로그래밍 언어는 정해진 문법과 명령어를 이용해 알고리즘을 코드로 표현합니다. C, Python, Java 등 여러 언어가 있으며 목적과 특징이 서로 다릅니다.",
        "example": "알고리즘에서 '두 수를 더한다'는 절차를 프로그래밍 언어의 덧셈 연산과 변수로 표현할 수 있습니다.",
        "related": "알고리즘, 코드"
      },
      {
        "name": "선택문",
        "english": "if / if-else",
        "definition": "조건의 참·거짓에 따라 실행할 명령을 선택하는 제어문입니다.",
        "detail": "if문은 조건이 참일 때만 특정 명령을 실행하고, if-else문은 참과 거짓일 때 각각 다른 명령을 실행합니다. 여러 조건을 연결해 복잡한 분기를 만들 수도 있습니다.",
        "example": "나이가 8세 미만이면 '무료', 그렇지 않으면 '유료'를 출력하도록 만들 수 있습니다.",
        "related": "관계연산자, 논리연산자"
      },
      {
        "name": "반복문",
        "english": "while / for",
        "definition": "같은 명령이나 비슷한 작업을 여러 번 실행하도록 하는 제어문입니다.",
        "detail": "for문은 반복 횟수가 비교적 분명할 때, while문은 어떤 조건이 유지되는 동안 반복할 때 자주 사용합니다. 반복을 잘못 설계하면 끝나지 않는 무한 반복이 생길 수 있습니다.",
        "example": "1부터 100까지의 수를 차례로 출력할 때 반복문을 사용할 수 있습니다.",
        "related": "알고리즘, 선택문"
      },
      {
        "name": "구조적 프로그래밍",
        "english": "Structured Programming",
        "definition": "프로그램을 순차·선택·반복 구조와 작은 기능 단위로 나누어 체계적으로 작성하는 방법입니다.",
        "detail": "복잡한 프로그램을 여러 함수나 모듈로 나누면 이해·수정·테스트하기 쉬워집니다. 프로그램 흐름을 명확하게 만들어 오류를 줄이고 유지보수를 쉽게 하는 것이 목적입니다.",
        "example": "입력 처리, 계산, 출력 기능을 각각 함수로 나누어 작성하는 방식입니다.",
        "related": "함수, 선택문, 반복문"
      },
      {
        "name": "전역변수,지역변수",
        "english": "Global / Local Variable",
        "definition": "전역변수는 여러 함수에서 접근할 수 있고, 지역변수는 선언된 함수나 블록 안에서만 사용할 수 있는 변수입니다.",
        "detail": "변수가 사용 가능한 범위를 스코프라고 합니다. 지역변수는 필요한 곳에서만 존재해 이름 충돌과 불필요한 변경을 줄이는 데 도움이 되고, 전역변수는 여러 함수가 함께 써야 하는 값을 공유할 때 사용할 수 있습니다.",
        "example": "main 밖에 선언한 변수는 전역으로, 함수 안에 선언한 변수는 보통 그 함수의 지역변수로 사용됩니다.",
        "related": "변수, 함수"
      },
      {
        "name": "변수",
        "english": "Variable / Constant / Initialization",
        "definition": "변수는 실행 중 값이 바뀔 수 있는 저장 공간이고, 상수는 바뀌지 않도록 정한 값입니다.",
        "detail": "변수에는 이름과 자료형을 정해 값을 저장하며 처음 값을 넣는 과정을 초기화라고 합니다. 변수의 값은 연산이나 입력에 따라 계속 변경될 수 있습니다.",
        "example": "점수 합계를 저장하는 total 변수는 계산하면서 값이 바뀌지만, 원주율처럼 고정해 사용하는 값은 상수로 둘 수 있습니다.",
        "related": "상수, 초기화, 자료형"
      },
      {
        "name": "매개변수",
        "english": "Parameter",
        "definition": "함수에 값을 전달하여 함수의 동작을 바꾸는 입력 역할의 변수입니다.",
        "detail": "같은 함수를 여러 상황에 재사용하려면 매개변수를 이용해 필요한 값을 함수 안으로 전달합니다. 함수를 호출할 때 실제로 넘겨주는 값을 인수라고 부르기도 합니다.",
        "example": "add(a, b) 함수에 3과 5를 전달하면 같은 함수로 여러 숫자의 합을 계산할 수 있습니다.",
        "related": "함수, 변수"
      },
      {
        "name": "함수",
        "english": "Function",
        "definition": "특정 작업을 수행하도록 여러 명령을 하나의 이름으로 묶은 프로그램 단위입니다.",
        "detail": "반복되는 코드를 함수로 만들면 같은 내용을 여러 번 작성하지 않아도 되고, 프로그램을 작은 기능 단위로 나누어 이해하기 쉬워집니다. 함수는 매개변수를 받고 결과값을 돌려줄 수도 있습니다.",
        "example": "두 수의 합을 계산하는 add() 함수를 만들어 필요한 곳에서 반복 호출할 수 있습니다.",
        "related": "매개변수, 재귀함수"
      },
      {
        "name": "객체지향 프로그래밍",
        "english": "OOP; Object Oriented Programming",
        "definition": "데이터와 그 데이터를 다루는 기능을 객체라는 단위로 묶어 프로그램을 설계하는 방법입니다.",
        "detail": "객체는 상태를 나타내는 데이터와 행동을 나타내는 기능을 함께 가질 수 있습니다. 큰 프로그램을 현실 세계의 대상처럼 여러 객체로 나누어 설계하면 재사용과 관리가 쉬워질 수 있습니다.",
        "example": "게임에서 캐릭터 객체가 체력·위치 데이터와 이동·공격 기능을 함께 가지도록 설계할 수 있습니다.",
        "related": "객체, 클래스, 함수"
      },
      {
        "name": "연산자",
        "english": "Operator",
        "definition": "값을 계산하거나 비교하는 등 어떤 연산을 수행할지 나타내는 기호입니다.",
        "detail": "연산의 대상이 되는 값을 피연산자라고 합니다. 연산자마다 우선순위와 결합 방향이 있어 복잡한 식에서는 괄호를 사용해 계산 순서를 명확히 하는 것이 좋습니다.",
        "example": "a + b에서 +는 연산자이고 a와 b는 피연산자입니다.",
        "related": "산술연산자, 논리연산자, 관계연산자"
      },
      {
        "name": "산술연산자",
        "english": "Arithmetic Operator",
        "definition": "더하기·빼기·곱하기·나누기·나머지처럼 수치 계산에 사용하는 연산자입니다.",
        "detail": "대표적으로 +, -, *, /, %가 있습니다. 정수끼리 나누는 경우 언어에 따라 소수 부분이 버려질 수 있으므로 자료형과 연산 규칙을 함께 확인해야 합니다.",
        "example": "17 % 5의 결과는 2이며, 짝수 판별에는 n % 2 == 0 같은 식을 사용할 수 있습니다.",
        "related": "연산자, 변수"
      },
      {
        "name": "논리연산자",
        "english": "Logical Operator",
        "definition": "참과 거짓을 대상으로 AND·OR·NOT 같은 논리 계산을 하는 연산자입니다.",
        "detail": "AND는 두 조건이 모두 참일 때 참, OR은 하나 이상 참이면 참, NOT은 조건 결과를 반대로 바꿉니다. 여러 조건을 하나의 조건식으로 결합할 때 사용합니다.",
        "example": "나이가 14 이상이고 19 이하인지 검사할 때 두 비교 조건을 AND로 연결할 수 있습니다.",
        "related": "관계연산자, 선택문"
      },
      {
        "name": "관계(비교)연산자",
        "english": "Relational / Comparison Operator",
        "definition": "두 값의 크기나 같고 다름을 비교해 참 또는 거짓 결과를 만드는 연산자입니다.",
        "detail": "대표적으로 >, >=, <, <=, ==, !=가 있습니다. 대입 연산자 =와 같은지 비교하는 ==는 역할이 다르므로 구분해야 합니다.",
        "example": "score >= 80은 점수가 80 이상이면 참이 됩니다.",
        "related": "논리연산자, 선택문"
      },
      {
        "name": "재귀함수",
        "english": "Recursive Function",
        "definition": "함수가 자기 자신을 다시 호출하도록 만든 함수입니다.",
        "detail": "큰 문제를 더 작은 같은 형태의 문제로 줄일 수 있을 때 유용합니다. 반드시 더 이상 재귀하지 않는 종료 조건이 있어야 하며, 호출이 깊어질수록 호출 스택 메모리를 사용합니다.",
        "example": "팩토리얼 n!을 n × (n-1)! 형태로 정의해 재귀 함수로 구현할 수 있습니다.",
        "related": "함수, 스택, 공간복잡도"
      },
      {
        "name": "정렬",
        "english": "Sorting",
        "definition": "자료를 일정한 기준에 따라 오름차순 또는 내림차순으로 나열하는 작업입니다.",
        "detail": "정렬을 해 두면 자료를 보기 쉽고 이진탐색 같은 알고리즘을 사용할 수 있습니다. 정렬 방법에 따라 비교와 교환 횟수, 실행 시간이 달라집니다.",
        "example": "학생 점수를 낮은 순서부터 높은 순서로 정리하거나 이름을 가나다순으로 정리하는 작업입니다.",
        "related": "버블정렬, 삽입정렬, 선택정렬"
      },
      {
        "name": "버블정렬",
        "english": "Bubble Sort",
        "definition": "서로 이웃한 두 값을 반복해서 비교하고 순서가 잘못되면 교환하는 정렬 방법입니다.",
        "detail": "한 번 끝까지 비교하면 가장 큰 값 또는 가장 작은 값 하나가 제자리로 이동합니다. 이 과정을 반복하며 전체를 정렬하며, 일반적인 시간복잡도는 O(N²)입니다.",
        "example": "5 2 4 1을 앞에서부터 두 개씩 비교하고 큰 값을 뒤로 보내는 과정을 반복합니다.",
        "related": "정렬, 시간복잡도"
      },
      {
        "name": "삽입정렬",
        "english": "Insertion Sort",
        "definition": "앞부분을 정렬된 상태로 유지하면서 새 값을 알맞은 위치에 끼워 넣는 정렬 방법입니다.",
        "detail": "현재 값을 앞쪽의 정렬된 값들과 비교해 더 적절한 위치로 이동시킵니다. 거의 정렬된 자료에서는 비교적 효율적일 수 있지만 일반적인 시간복잡도는 O(N²)입니다.",
        "example": "정렬된 줄에 늦게 온 학생이 자신의 키에 맞는 위치를 찾아 들어가는 것과 비슷합니다.",
        "related": "정렬, 시간복잡도"
      },
      {
        "name": "선택정렬",
        "english": "Selection Sort",
        "definition": "남아 있는 자료 중 가장 작은 값을 찾아 앞자리와 교환하는 과정을 반복하는 정렬 방법입니다.",
        "detail": "첫 번째 자리에는 전체 최솟값, 두 번째 자리에는 남은 값 중 최솟값을 놓는 방식으로 진행합니다. 비교 횟수가 많아 일반적인 시간복잡도는 O(N²)입니다.",
        "example": "5 2 4 1에서 가장 작은 1을 찾아 첫 번째 값 5와 교환한 뒤 남은 부분에서 다시 최솟값을 찾습니다.",
        "related": "정렬, 시간복잡도"
      },
      {
        "name": "API",
        "english": "Application Programming Interface",
        "definition": "다른 프로그램이나 기능을 정해진 방식으로 호출해 사용할 수 있도록 제공하는 사용 규칙과 연결 방법입니다.",
        "detail": "개발자는 내부 구현을 모두 알지 못해도 API가 정한 함수·요청 형식을 사용해 기능을 이용할 수 있습니다. 라이브러리 함수나 웹 서비스 기능을 호출할 때 자주 접하게 됩니다.",
        "example": "지도 서비스 API를 이용해 내 프로그램에 지도나 위치 검색 기능을 추가할 수 있습니다.",
        "related": "라이브러리, 함수"
      },
      {
        "name": "이진탐색",
        "english": "Binary Search",
        "definition": "정렬된 자료에서 가운데 값을 비교하며 탐색 범위를 절반씩 줄여 원하는 값을 찾는 방법입니다.",
        "detail": "찾는 값이 가운데 값보다 작으면 왼쪽, 크면 오른쪽 절반만 다시 탐색합니다. 한 번 비교할 때마다 범위가 절반으로 줄어 시간복잡도는 O(log N)입니다.",
        "example": "정렬된 1~1000에서 값을 찾을 때 약 10번 정도의 비교로 범위를 크게 줄일 수 있습니다.",
        "related": "선형탐색, 정렬, 시간복잡도"
      },
      {
        "name": "선형탐색",
        "english": "Linear Search",
        "definition": "자료의 처음부터 끝까지 차례대로 비교하면서 원하는 값을 찾는 탐색 방법입니다.",
        "detail": "정렬되지 않은 자료에서도 사용할 수 있고 구현이 간단하지만, 원하는 값이 뒤에 있거나 없으면 모든 자료를 확인해야 합니다. 시간복잡도는 O(N)입니다.",
        "example": "서랍을 첫 번째 칸부터 하나씩 열어 물건을 찾는 방법과 비슷합니다.",
        "related": "이진탐색, 시간복잡도"
      },
      {
        "name": "공간복잡도",
        "english": "Space Complexity",
        "definition": "알고리즘이 문제를 해결하는 동안 필요한 메모리의 양이 입력 크기에 따라 어떻게 증가하는지 나타내는 개념입니다.",
        "detail": "배열·자료구조·재귀 호출 등 알고리즘이 추가로 사용하는 메모리를 분석합니다. 같은 문제를 해결하더라도 어떤 자료구조를 선택하는지에 따라 공간 사용량이 달라질 수 있습니다.",
        "example": "정수 N개를 저장하는 배열을 만들면 필요한 저장 공간은 N에 비례하므로 O(N)으로 볼 수 있습니다.",
        "related": "시간복잡도, 배열, 재귀함수"
      },
      {
        "name": "시간복잡도",
        "english": "Time Complexity",
        "definition": "알고리즘의 실행 횟수가 입력 크기에 따라 얼마나 증가하는지 나타내는 개념입니다.",
        "detail": "실제 초 단위 시간을 재기보다 중요한 연산이 몇 번 실행되는지를 기준으로 O(N), O(N²), O(log N)처럼 표현합니다. 입력이 커질수록 알고리즘 간 효율 차이가 크게 나타납니다.",
        "example": "N개의 자료를 한 번씩 확인하면 O(N), 모든 쌍을 확인하면 보통 O(N²)입니다.",
        "related": "공간복잡도, Big-O"
      },
      {
        "name": "주석문",
        "english": "Comment",
        "definition": "프로그램 실행에는 영향을 주지 않고 코드의 의미나 작성 이유를 설명하기 위해 적는 문장입니다.",
        "detail": "나중에 코드를 다시 보거나 다른 사람이 코드를 읽을 때 이해를 돕습니다. 언어마다 //, /* */처럼 주석을 표시하는 방법이 다릅니다.",
        "example": "// 학생 점수의 합 계산 처럼 코드 앞에 설명을 적을 수 있습니다.",
        "related": "코드, 프로그래밍 언어"
      },
      {
        "name": "프로토타입",
        "english": "Prototype",
        "definition": "완성 제품을 만들기 전에 핵심 기능과 구조를 미리 시험해 보기 위해 만든 초기 모델입니다.",
        "detail": "사용자의 요구가 제대로 반영되었는지 확인하고 문제점을 빨리 발견하기 위해 사용합니다. 프로토타입을 테스트한 뒤 피드백을 반영해 설계를 계속 개선할 수 있습니다.",
        "example": "앱을 완전히 개발하기 전에 주요 화면과 버튼 동작만 구현해 사용자가 직접 사용해 보게 합니다.",
        "related": "소프트웨어 개발, 테스트"
      }
    ]
  }
];

const quickComparisons = [
  {
    title: "인공지능 ↔ 머신러닝",
    body: "인공지능은 기계가 지능적인 작업을 하게 만드는 큰 분야이고, 머신러닝은 데이터를 통해 규칙을 학습하는 대표적인 방법입니다.",
  },
  {
    title: "인터넷 ↔ 웹",
    body: "인터넷은 컴퓨터들이 연결된 네트워크이고, 웹은 그 인터넷 위에서 하이퍼텍스트 문서를 이용하는 서비스입니다.",
  },
  {
    title: "주기억장치 ↔ 보조기억장치",
    body: "주기억장치는 빠르게 처리할 작업을 올려두는 공간이고, 보조기억장치는 파일을 오래 저장하는 큰 저장 공간입니다.",
  },
  {
    title: "선형구조 ↔ 비선형구조",
    body: "선형구조는 자료가 한 줄 순서를 가지고, 비선형구조는 트리나 그래프처럼 여러 방향의 관계를 표현합니다.",
  },
  {
    title: "stack ↔ queue",
    body: "stack은 마지막에 넣은 것을 먼저 꺼내고, queue는 먼저 넣은 것을 먼저 꺼냅니다.",
  },
  {
    title: "선형탐색 ↔ 이진탐색",
    body: "선형탐색은 처음부터 하나씩 확인하고, 이진탐색은 정렬된 자료의 범위를 절반씩 줄입니다.",
  },
  {
    title: "시간복잡도 ↔ 공간복잡도",
    body: "시간복잡도는 연산 횟수의 증가를, 공간복잡도는 필요한 메모리의 증가를 입력 크기와 연결해 분석합니다.",
  },
  {
    title: "전역변수 ↔ 지역변수",
    body: "전역변수는 여러 함수가 공유할 수 있고, 지역변수는 선언된 함수나 블록 안에서만 사용할 수 있습니다.",
  },
];

export default function MiddleInformationGlossary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");

  const filteredGroups = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return glossaryGroups
      .filter((group) => category === "전체" || group.title === category)
      .map((group) => ({
        ...group,
        terms: group.terms.filter((term) => {
          if (!keyword) return true;
          return (
            term.name.toLowerCase().includes(keyword) ||
            term.english.toLowerCase().includes(keyword) ||
            term.definition.toLowerCase().includes(keyword) ||
            term.detail?.toLowerCase().includes(keyword) ||
            term.example?.toLowerCase().includes(keyword) ||
            term.related?.toLowerCase().includes(keyword)
          );
        }),
      }))
      .filter((group) => group.terms.length > 0);
  }, [query, category]);

  const visibleCount = filteredGroups.reduce((sum, group) => sum + group.terms.length, 0);

  return (
    <section className="elementary-glossary-page">
      <div className="elementary-glossary-topbar">
        <div>
          <span className="eyebrow">MIDDLE SCHOOL INFORMATION GLOSSARY</span>
          <h1>중등 정보용어 백과</h1>
        </div>
        <Link className="secondary-button" href="/specialized/information-glossary">
          정보용어 백과로
        </Link>
      </div>

      <section className="elementary-glossary-quick">
        <div className="elementary-glossary-section-heading">
          <span>QUICK START</span>
          <h2>먼저 구분해 두면 좋은 핵심 개념</h2>
        </div>
        <div className="elementary-glossary-compare-grid">
          {quickComparisons.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="elementary-glossary-browser">
        <div className="elementary-glossary-section-heading">
          <span>TERM FINDER</span>
          <h2>용어 찾아보기</h2>
          <p>용어 이름·영문 이름·설명·예시 내용으로 검색할 수 있습니다.</p>
        </div>

        <div className="elementary-glossary-search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 인공지능, 스택, 운영체제, 시간복잡도"
            aria-label="중등 정보용어 검색"
          />
          <span>{visibleCount}개 표시</span>
        </div>

        <div className="elementary-glossary-filters" role="group" aria-label="용어 영역 선택">
          {["전체", ...glossaryGroups.map((group) => group.title)].map((item) => (
            <button
              type="button"
              className={category === item ? "is-active" : ""}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="elementary-glossary-groups">
          {filteredGroups.map((group, groupIndex) => (
            <section className="elementary-glossary-group" key={group.title}>
              <div className="elementary-glossary-group-heading">
                <div>
                  <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.description}</p>
                <b>{group.terms.length}개</b>
              </div>

              <div className="elementary-glossary-term-grid">
                {group.terms.map((term) => (
                  <details className="elementary-glossary-term" key={term.name}>
                    <summary>
                      <div>
                        <strong>{term.name}</strong>
                        <span>{term.english}</span>
                      </div>
                      <i aria-hidden="true" />
                    </summary>
                    <div className="elementary-glossary-term-body">
                      <div className="elementary-glossary-term-definition">
                        <strong>핵심 정의</strong>
                        <p>{term.definition}</p>
                      </div>

                      {term.detail && (
                        <div className="elementary-glossary-term-detail">
                          <strong>더 알아보기</strong>
                          <p>{term.detail}</p>
                        </div>
                      )}

                      {term.example && (
                        <div className="elementary-glossary-term-example">
                          <strong>예시</strong>
                          <p>{term.example}</p>
                        </div>
                      )}

                      {term.related && (
                        <div className="elementary-glossary-term-related">
                          <strong>함께 알아둘 용어</strong>
                          <p>{term.related}</p>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {filteredGroups.length === 0 && (
            <div className="elementary-glossary-empty">
              <strong>검색 결과가 없습니다.</strong>
              <p>다른 용어나 더 짧은 검색어로 다시 찾아보세요.</p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
