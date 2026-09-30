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
    "description": "디지털·인터넷의 기본 개념과 사이버 공간에서 지켜야 할 정보 윤리를 학습합니다.",
    "terms": [
      {
        "name": "디지털",
        "english": "Digital",
        "definition": "값을 연속적으로 나타내지 않고 일정한 단계로 끊어 숫자로 표현하는 방식입니다."
      },
      {
        "name": "아날로그",
        "english": "Analog",
        "definition": "밝기·온도·무게처럼 연속적으로 변하는 물리량을 이어진 값으로 나타내는 방식입니다."
      },
      {
        "name": "네트워크",
        "english": "Network",
        "definition": "컴퓨터들이 서로 정보를 주고받을 수 있도록 연결한 통신망입니다."
      },
      {
        "name": "인터넷",
        "english": "Internet",
        "definition": "전 세계의 컴퓨터와 네트워크가 서로 연결되어 정보를 주고받는 거대한 네트워크입니다."
      },
      {
        "name": "도메인 네임",
        "english": "Domain Name",
        "definition": "숫자로 된 인터넷 주소를 사람이 기억하기 쉬운 문자 이름으로 나타낸 주소입니다.",
        "example": "www. mest. go. kr 컴퓨터이름 기관 이름 기관의 성격 국가명"
      },
      {
        "name": "IP 주소",
        "english": "Internet Protocol Address",
        "definition": "인터넷에 연결된 컴퓨터나 기기를 서로 구분하기 위해 사용하는 숫자 형태의 주소입니다.",
        "example": "<IP 주소의 예> 단, ①, ②, ③, ④각각은 0~255의 수"
      },
      {
        "name": "URL",
        "english": "Uniform Resource Locator",
        "definition": "인터넷에서 서비스의 종류와 정보 자원의 위치를 나타내는 주소 규칙입니다.",
        "related": "인터넷, 도메인 네임, IP 주소"
      },
      {
        "name": "WiFi",
        "english": "Wireless Fidelity",
        "definition": "비교적 좁은 공간에서 기기를 무선 네트워크에 연결할 수 있게 하는 통신 기술입니다."
      },
      {
        "name": "블루투스",
        "english": "Bluetooth",
        "definition": "가까운 거리의 휴대폰·컴퓨터·이어폰 같은 기기끼리 정보를 주고받게 하는 무선 기술입니다."
      },
      {
        "name": "웹 브라우저",
        "english": "Web Browser",
        "definition": "웹 페이지와 웹 문서를 열어 보고 이용할 수 있게 해 주는 프로그램입니다.",
        "related": "인터넷, 네트워크, 도메인 네임, URL"
      },
      {
        "name": "사이트",
        "english": "Site",
        "definition": "하나의 주소를 중심으로 서로 관련된 여러 웹 페이지가 모여 있는 공간입니다."
      },
      {
        "name": "홈페이지",
        "english": "Homepage",
        "definition": "웹 사이트의 주소로 접속했을 때 처음 보여 주도록 정해 둔 웹 페이지입니다.",
        "related": "인터넷, 사이트"
      },
      {
        "name": "포털",
        "english": "Portal",
        "definition": "검색·뉴스·메일 등 여러 인터넷 서비스를 이용하기 위한 출발점 역할을 하는 사이트입니다."
      },
      {
        "name": "검색 엔진",
        "english": "Search Engine",
        "definition": "인터넷에 있는 많은 정보 중에서 원하는 자료를 찾도록 도와주는 소프트웨어 또는 서비스입니다.",
        "detail": "인터넷에는 정보의 바다라 불릴만큼 엄청난 양의 정보가 있습니다. 따라서 이들이 있는 위치를 기억해서 찾아가는 것은 불가능에 가깝기 때문에 등장한 것이 원하는 파일이나 자료의 위치를 쉽게 찾아주는 검색 엔진입니다. 검색 엔진은 엔진이라고 하지만 하드웨어가 아닌 소프트웨어입니다. 검색 엔진의 검색 능력은 높은 관련이 있는 자료를 얼마나 많이 찾아내는가에 따라 결정됩니다.",
        "example": "사이트, 홈페이지, 포털"
      },
      {
        "name": "이메일",
        "english": "Email",
        "definition": "컴퓨터 네트워크를 이용해 편지나 자료를 주고받는 서비스입니다.",
        "related": "인터넷, 도메인 네임"
      },
      {
        "name": "업로드 / 다운로드",
        "english": "Upload / Download",
        "definition": "내 기기의 파일을 서버로 보내는 것을 업로드, 서버의 파일을 내 기기로 받는 것을 다운로드라고 합니다.",
        "example": "수업 자료를 다운로드 받아야지!"
      },
      {
        "name": "사이버 공간",
        "english": "Cyber Space",
        "definition": "정보 기기·통신망·소프트웨어를 통해 사람들이 활동하는 가상의 공간입니다.",
        "example": "메신저로 ‘똑똑이’한테 만나자고 말해야지 쇼핑몰에 티셔츠가 싼 값에 나왔네 바로 사야지! 인터넷 강의가 어느 과목이 있는지 찾아봐야겠다 은행 홈페이지로 접속해서 엄마한테 계좌이체해야겠다 이번주는 커뮤니티에 고아원으로 봉사를 가자고 해야지"
      },
      {
        "name": "네티즌 / 네티켓",
        "english": "Netizen / Netiquette",
        "definition": "네티즌은 사이버 공간에서 활동하는 사람이고, 네티켓은 그 공간에서 지켜야 할 예절입니다.",
        "example": "대화 중 ‘존칭어’ 사용하기 입장과 퇴장 시 인사하기 상대방이 ‘모르는 은어’ 사용하지 않기"
      },
      {
        "name": "저작권",
        "english": "Copyright",
        "definition": "창작자가 자신의 저작물을 이용하고 다른 사람의 무단 이용을 막을 수 있는 권리입니다.",
        "related": "저작물, 네티즌-네티켓, 사이버 공간"
      },
      {
        "name": "저작물",
        "english": "Copyrightable Works",
        "definition": "사람의 생각이나 감정을 창의적으로 표현해 저작권의 보호를 받는 결과물입니다.",
        "related": "저작권"
      },
      {
        "name": "개인정보",
        "english": "Personal Information",
        "definition": "이름·주소·전화번호·계정 정보처럼 개인을 알아보거나 구분할 수 있게 하는 정보입니다.",
        "related": "사이버 공간, 네티즌 - 네티켓"
      },
      {
        "name": "게임 중독",
        "english": "Game Addiction",
        "definition": "게임에 지나치게 몰두하여 학습·건강·관계 등 일상생활에 큰 지장을 받는 상태입니다.",
        "related": "인터넷 중독"
      },
      {
        "name": "인터넷 중독",
        "english": "Internet Addiction",
        "definition": "인터넷을 지나치게 사용하여 건강·학습·가족 관계 등 일상생활에 큰 지장을 받는 상태입니다.",
        "related": "게임 중독, 사이버 공간"
      },
      {
        "name": "블로그",
        "english": "Blog",
        "definition": "자신의 관심사나 생각을 일기·기사 등의 형식으로 자유롭게 기록하고 공개하는 웹 공간입니다.",
        "related": "사이버 공간, 네티즌 - 네티켓"
      },
      {
        "name": "스팸",
        "english": "Spam",
        "definition": "이메일·게시판·메시지 등을 통해 불특정 다수에게 원하지 않는 광고나 홍보 내용을 반복해서 보내는 것입니다.",
        "related": "사이버 공간, 네티즌 - 네티켓"
      },
      {
        "name": "SNS",
        "english": "Social Network Service",
        "definition": "관심이나 활동을 공유하는 사람들이 온라인에서 관계를 맺고 소통하도록 돕는 서비스입니다.",
        "related": "사이버 공간, 네티즌 - 네티켓, 블로그"
      },
      {
        "name": "컴퓨터 바이러스",
        "english": "Computer Virus",
        "definition": "스스로 복제하면서 다른 프로그램을 감염시키고 프로그램이나 자료에 피해를 줄 수 있는 악성 프로그램입니다.",
        "detail": "‘컴퓨터 바이러스’라는 용어는 1983년 프레드 코헨(Fred Cohen) 박사가 “컴퓨터 바이러스 : 그 경험과 이론” 이라는 논문에서 처음 사용하였으며, 대량 유포된 바이러스 중에서 처음 발견된 것은 1986년에 파키스탄에서 발견된 브레인(Brain)이라는 바이러스입니다.",
        "related": "사이버 공간, 네티즌 - 네티켓, 컴퓨터 백신"
      },
      {
        "name": "컴퓨터 백신",
        "english": "Computer Vaccine",
        "definition": "컴퓨터 바이러스를 찾아내어 제거하거나 동작을 막도록 만든 프로그램입니다.",
        "related": "사이버 공간, 컴퓨터 바이러스"
      },
      {
        "name": "해킹",
        "english": "Hacking",
        "definition": "다른 사람의 컴퓨터 시스템에 허가 없이 침입해 프로그램이나 자료에 접근·변경·복사하는 행위를 말합니다.",
        "related": "사이버 공간, 네티즌 - 네티켓, 컴퓨터, 소프트웨어"
      }
    ]
  },
  {
    "title": "정보기기의 구성",
    "description": "컴퓨터를 이루는 장치와 소프트웨어, 자료가 저장되고 처리되는 기본 원리를 학습합니다.",
    "terms": [
      {
        "name": "컴퓨터",
        "english": "Computer",
        "definition": "전자 회로를 이용해 여러 종류의 자료를 입력받고 처리하여 결과를 만드는 기기입니다.",
        "related": "하드웨어, 소프트웨어"
      },
      {
        "name": "하드웨어",
        "english": "Hardware",
        "definition": "컴퓨터 본체·모니터·키보드처럼 눈으로 보고 만질 수 있는 전자·기계 장치를 말합니다.",
        "related": "소프트웨어, 컴퓨터"
      },
      {
        "name": "소프트웨어",
        "english": "Software",
        "definition": "컴퓨터가 일을 수행하도록 하는 프로그램과 그 실행에 필요한 절차·규칙 등을 말합니다.",
        "related": "컴퓨터, 하드웨어, 프로그램"
      },
      {
        "name": "중앙처리장치",
        "english": "CPU; Central Processing Unit",
        "definition": "프로그램의 명령을 해석하고 계산과 제어를 수행하는 컴퓨터의 핵심 장치입니다.",
        "related": "컴퓨터, 하드웨어"
      },
      {
        "name": "모니터",
        "english": "Monitor",
        "definition": "컴퓨터가 처리한 결과를 화면으로 보여 주는 대표적인 출력 장치입니다.",
        "related": "하드웨어, 출력"
      },
      {
        "name": "마우스",
        "english": "Mouse",
        "definition": "화면의 위치를 가리키고 선택하거나 이동하는 데 사용하는 입력 장치입니다.",
        "related": "하드웨어, 입력"
      },
      {
        "name": "키보드",
        "english": "Keyboard",
        "definition": "문자·숫자·기호 등을 컴퓨터에 입력할 때 사용하는 자판 형태의 입력 장치입니다.",
        "related": "하드웨어, 입력"
      },
      {
        "name": "운영체제",
        "english": "OS; Operating System",
        "definition": "하드웨어를 관리하고 응용 소프트웨어가 실행될 수 있는 환경을 제공하는 시스템 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램"
      },
      {
        "name": "USB",
        "english": "Universal Serial Bus",
        "definition": "컴퓨터와 다양한 주변 기기를 연결하기 위해 만든 공통 연결 규격입니다.",
        "related": "하드웨어, 입력, 출력"
      },
      {
        "name": "메모리",
        "english": "Memory",
        "definition": "정보를 저장해 두었다가 필요한 때 꺼내 사용할 수 있게 하는 기억 장치입니다.",
        "related": "하드웨어"
      },
      {
        "name": "하드 디스크",
        "english": "Hard Disk",
        "definition": "자성 디스크에 자료를 저장하는 대표적인 보조기억장치입니다.",
        "related": "하드웨어, 메모리"
      },
      {
        "name": "파일",
        "english": "File",
        "definition": "서로 관련된 자료나 정보를 하나의 이름으로 묶어 저장한 논리적인 단위입니다.",
        "related": "메모리, 비트, 바이트"
      },
      {
        "name": "비트",
        "english": "Bit",
        "definition": "컴퓨터에서 정보를 표현하는 가장 작은 단위로, 0 또는 1 두 상태로 나타냅니다.",
        "example": "on off",
        "related": "메모리, 바이트"
      },
      {
        "name": "바이트",
        "english": "Byte",
        "definition": "8개의 비트를 묶은 정보 표현 단위로, 1Byte는 8bit입니다.",
        "related": "메모리, 비트"
      },
      {
        "name": "백업",
        "english": "Backup",
        "definition": "자료가 손상되거나 사라질 때를 대비해 원본 자료를 다른 곳에 복사해 두는 것입니다.",
        "related": "메모리, 파일"
      },
      {
        "name": "드라이버",
        "english": "Driver",
        "definition": "컴퓨터에 연결된 주변 기기를 운영체제가 사용할 수 있도록 도와주는 프로그램입니다.",
        "related": "컴퓨터, 하드웨어, 소프트웨어"
      },
      {
        "name": "피지컬 컴퓨팅",
        "english": "Physical Computing",
        "definition": "센서로 현실 세계의 정보를 입력받고 모터·LED 등으로 결과를 출력하며 컴퓨터와 실제 세계를 연결하는 활동입니다.",
        "related": "아두이노, 센서, 프로그래밍 도구"
      },
      {
        "name": "아두이노",
        "english": "Arduino",
        "definition": "센서와 전자 부품을 연결해 실제 세계를 감지하고 제어하는 디지털 장치를 만들 때 사용하는 도구입니다.",
        "related": "피지컬 컴퓨팅, 센서"
      },
      {
        "name": "센서",
        "english": "Sensor",
        "definition": "빛·온도·압력·소리 같은 물리적인 양이나 변화를 감지해 신호로 알려 주는 부품입니다.",
        "related": "피지컬 컴퓨팅, 아두이노"
      },
      {
        "name": "자료",
        "english": "Data",
        "definition": "관찰이나 측정을 통해 얻은 가공 전의 단순한 사실이나 값을 말합니다.",
        "related": "프로그램, 정보"
      },
      {
        "name": "정보",
        "english": "Information",
        "definition": "자료를 목적에 맞게 선택하거나 가공하여 사용자에게 의미 있고 필요한 형태로 만든 것입니다.",
        "related": "자료, 프로그램"
      }
    ]
  },
  {
    "title": "정보 표현 및 관리",
    "description": "프로그래밍에서 자료를 저장·표현하는 방법과 다양한 응용 소프트웨어의 역할을 학습합니다.",
    "terms": [
      {
        "name": "변수",
        "english": "Variable",
        "definition": "프로그램에서 값이나 자료를 저장할 수 있도록 이름을 붙여 둔 기억 공간입니다.",
        "related": "프로그램, 상수"
      },
      {
        "name": "상수",
        "english": "Constant",
        "definition": "프로그램이 실행되는 동안 바뀌지 않도록 정해 둔 값입니다.",
        "related": "프로그램, 변수"
      },
      {
        "name": "배열",
        "english": "Array",
        "definition": "비슷한 성격의 여러 자료를 하나의 이름 아래 번호를 붙여 묶어 저장하는 구조입니다.",
        "related": "프로그램, 변수, 리스트"
      },
      {
        "name": "리스트",
        "english": "List",
        "definition": "비슷한 자료들을 순서 있게 연결해 저장하고 항목을 추가하거나 삭제하며 관리할 수 있는 구조입니다.",
        "detail": "프로그램에서 많은 자료를 처리하는 경우에 변수로 처리하면 모두에게 이름을 주는 것도 어렵고, 변수별로 명령들을 사용하는 것도 복잡합니다. 예를 들어, 100명의 학생에 대한 평균 점수를 계산하고자 할 때 변수로 사용하면 평균 점수를 계산하는 명령들을 100번 작성해야 하지만 리스트를 사용하면 각 학생들에 대하여 정수로 된 첨자를 사용함으로써 평균 점수를 계산하는 것을 100번 반복하는 사용명령을 하여 간단하게 프로그램을 작성할 수 있습니다.",
        "example": "점수 점수(1) 점수(2) 점수(3) 점수(4) 점수(5) 점수(6) 점수(7) 점수 점수(1) 점수(2) 점수(3) 점수(4) 점수(5) 점수(6) 점수(7) 점수 점수(1) 점수(2) 점수(3) 점수(4) 점수(5) 점수(6) 점수(7) 점수 점수(1) 점수(2) 점수(3) 점수(4) 점수(5) 점수(6) 점수(7) 점수(8) - 삭제 전 - 삽입 전 - 3번째 항목 삭제 후 - 5번째 444를 삽입 후",
        "related": "프로그램, 변수, 배열"
      },
      {
        "name": "이벤트",
        "english": "Event",
        "definition": "마우스 클릭·키 입력처럼 프로그램이 반응하도록 만드는 사건이나 동작입니다.",
        "example": "마우스를 누르면 음악이 나옵니다.",
        "related": "프로그램"
      },
      {
        "name": "언플러그드",
        "english": "Unplugged",
        "definition": "컴퓨터를 직접 사용하지 않고 놀이·카드·활동 등을 통해 컴퓨터 과학의 원리를 배우는 방법입니다.",
        "related": "컴퓨팅 사고력, 알고리즘"
      },
      {
        "name": "입력",
        "english": "Input",
        "definition": "컴퓨터 밖의 자료를 컴퓨터가 처리할 수 있는 형태로 바꾸어 안으로 전달하는 것입니다.",
        "related": "프로그램, 출력"
      },
      {
        "name": "출력",
        "english": "Output",
        "definition": "컴퓨터가 처리한 결과를 사람이 알아볼 수 있는 형태로 바꾸어 밖으로 내보내는 것입니다.",
        "related": "입력"
      },
      {
        "name": "함수",
        "english": "Function",
        "definition": "특정 작업을 수행하고 결과값을 돌려주도록 이름을 붙여 만든 프로그램의 일정 부분입니다.",
        "related": "프로그램, 추상화, 프로시져"
      },
      {
        "name": "프로시져",
        "english": "Procedure",
        "definition": "특정 동작을 필요할 때마다 실행할 수 있도록 이름을 붙여 묶어 둔 프로그램의 일정 부분입니다.",
        "related": "프로그램, 추상화, 함수"
      },
      {
        "name": "좌표",
        "english": "Coordinates",
        "definition": "평면에서 위치를 나타내기 위해 x값과 y값을 한 쌍으로 표현한 것입니다.",
        "detail": "일반적으로 모니터 위에 표현하는 경우에 평면 좌표계를 사용하는데, 이는 (x, y)와 같이 x좌표 값과 y좌표 값의 쌍으로 나타냅니다.",
        "related": "프로그램, 코딩"
      },
      {
        "name": "난수",
        "english": "Random Number",
        "definition": "정해진 범위에서 어떤 값이 나올지 미리 알기 어렵도록 만들어지는 수입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 코딩"
      },
      {
        "name": "RGB",
        "english": "Red, Green, Blue",
        "definition": "빛의 삼원색인 빨강·초록·파랑의 세 값을 조합해 화면의 색을 표현하는 방식입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 코딩, 모니터"
      },
      {
        "name": "해상도",
        "english": "Resolution",
        "definition": "모니터·TV·카메라 등이 화면이나 이미지를 얼마나 세밀하게 표현하는지를 나타내는 척도입니다.",
        "related": "모니터, RGB, 운영체제"
      },
      {
        "name": "화소",
        "english": "Picture Element; Pixel",
        "definition": "디지털 화면이나 이미지를 구성하는 가장 작은 점 단위이며 픽셀이라고도 합니다.",
        "related": "모니터, 해상도"
      },
      {
        "name": "타이머",
        "english": "Timer",
        "definition": "프로그램에서 흐른 시간을 재거나 시간의 진행을 이용할 수 있게 하는 기능입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 프로그램, 코딩"
      },
      {
        "name": "워드 프로세서",
        "english": "Word Processor",
        "definition": "문서를 작성·편집·저장·인쇄할 때 사용하는 응용 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램, 프레젠테이션 도구, 스프레드 시트, 데이터베이스"
      },
      {
        "name": "프레젠테이션 도구",
        "english": "Presentation Tool",
        "definition": "발표에 사용할 화면 자료를 만들고 보여 주는 데 사용하는 응용 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램, 워드 프로세서, 스프레드 시트, 데이터베이스"
      },
      {
        "name": "데이터베이스 / DBMS",
        "english": "Database / Database Management System",
        "definition": "데이터베이스는 관련 자료를 체계적으로 모은 집합이고, DBMS는 그 데이터베이스를 관리하는 소프트웨어입니다.",
        "related": "자료, 정보, 소프트웨어, 프로그램, 워드 프로세서, 프레젠테이션 도구"
      },
      {
        "name": "스프레드 시트",
        "english": "Spread Sheet",
        "definition": "셀에 자료를 입력하고 계산·검색·관리·도표 작성을 할 수 있게 만든 응용 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램, 워드 프로세서, 데이터베이스-DBMS"
      },
      {
        "name": "그래픽 편집기",
        "english": "Graphic Editor",
        "definition": "컴퓨터에서 그림이나 이미지를 만들고 수정할 수 있도록 만든 응용 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램, 워드 프로세서, 프레젠테이션 도구, 스프레드 시트"
      },
      {
        "name": "유틸리티",
        "english": "Utility",
        "definition": "파일 관리·디스크 정리처럼 컴퓨터를 더 쉽고 편리하게 사용하도록 도와주는 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램"
      },
      {
        "name": "멀티미디어",
        "english": "Multimedia",
        "definition": "문자·소리·그림·동영상처럼 여러 종류의 매체가 함께 사용되는 형태입니다.",
        "related": "UCC"
      },
      {
        "name": "UCC",
        "english": "User Created Contents",
        "definition": "전문 제작자가 아니라 일반 사용자가 직접 만들어 인터넷 등에 공유하는 콘텐츠입니다.",
        "related": "멀티미디어"
      },
      {
        "name": "애플리케이션",
        "english": "Application",
        "definition": "문서 작성·그림 편집·모바일 앱처럼 특정한 일을 수행하기 위해 만든 응용 소프트웨어입니다.",
        "related": "소프트웨어, 프로그램"
      },
      {
        "name": "로그인 / 로그아웃",
        "english": "Log In / Log Out",
        "definition": "로그인은 사용자임을 확인받아 시스템 이용 권한을 얻는 과정이고, 로그아웃은 그 이용 상태를 끝내는 과정입니다.",
        "related": "컴퓨터, 인터넷, 이메일, 네티즌-네티켓, 개인 정보"
      }
    ]
  },
  {
    "title": "문제해결방법 및 절차",
    "description": "컴퓨팅 사고력과 알고리즘, 프로그램의 기본 구조와 코딩 과정에서 사용하는 핵심 용어를 학습합니다.",
    "terms": [
      {
        "name": "컴퓨팅 사고력",
        "english": "Computational Thinking",
        "definition": "컴퓨터 과학의 개념과 원리를 활용해 문제를 논리적이고 절차적으로 해결해 가는 사고 능력입니다.",
        "related": "문제 분할, 추상화, 알고리즘"
      },
      {
        "name": "문제 분할",
        "english": "Problem Decomposition",
        "definition": "크고 복잡한 문제를 해결하기 쉬운 여러 개의 작은 문제로 나누는 방법입니다.",
        "related": "컴퓨팅 사고력, 추상화"
      },
      {
        "name": "추상화",
        "english": "Abstraction",
        "definition": "문제 해결에 꼭 필요한 특징만 남기고 불필요한 부분을 줄여 단순하게 표현하는 방법입니다.",
        "related": "컴퓨팅 사고력, 문제 분할"
      },
      {
        "name": "알고리즘",
        "english": "Algorithm",
        "definition": "문제를 해결하기 위한 절차와 방법을 실행 순서에 맞게 정리한 것입니다.",
        "related": "프로그램, 컴퓨팅 사고력, 순서도"
      },
      {
        "name": "순서도",
        "english": "Flowchart",
        "definition": "정해진 기호와 연결선을 사용해 알고리즘이나 프로그램의 흐름을 그림으로 나타내는 방법입니다.",
        "example": "기호 명칭 사용 용도 기호 명칭 사용 용도 처리 각종 연산, 데이터 이동 등의 처리 터미널 순서도의 시작과 끝 표시 연결자 흐름이 다른 곳과 연결되는 입출구를 나타냄 천공카드 천공카드의 입출력 입출력 테이터의 입력과 출력 서류 서류를 매체로 하는 입출력 표시 흐름선 처리의 흐름과 기호를 연결하는 기능 수동입력 콘솔에 의한 입력 준비 기억장소, 초기값 등 작업의 준비 과정 나타냄 반복 조건을 만족하면 반복 미리 정의된 처리 미리 정의된 처리로 옮길 때 사용 디스플레이 결과를 모니터로 나타냄 반복 조건",
        "related": "알고리즘, 프로그램"
      },
      {
        "name": "순차 구조",
        "english": "Sequential Structure",
        "definition": "명령을 작성된 순서대로 하나씩 실행하는 가장 기본적인 프로그램 제어 구조입니다.",
        "example": "순서도 설명 “명령 1”을 실행합니다. 다음으로 “명령 2”를 실행합니다. 명령 1 명령 2",
        "related": "알고리즘, 프로그램, 반복 구조, 선택 구조"
      },
      {
        "name": "반복 구조",
        "english": "Repeating / Iterative / Loop Structure",
        "definition": "같은 명령이나 작업을 정해진 횟수 또는 조건에 따라 여러 번 실행하는 제어 구조입니다.",
        "example": "명령 1 명령 1 명령 2 명령 2 명령 3 명령 3 반복 횟수 반복 조건",
        "related": "알고리즘, 프로그램, 순차 구조, 선택 구조"
      },
      {
        "name": "선택 구조",
        "english": "Select / Alternative / Choice Structure",
        "definition": "조건을 검사한 결과에 따라 서로 다른 명령을 실행하도록 하는 제어 구조입니다.",
        "example": "명령 1 명령 1 명령 2 명령 2 명령 3 거짓 거짓 참 참 조건 조건",
        "related": "알고리즘, 프로그램, 순차 구조, 반복 구조"
      },
      {
        "name": "산술 연산",
        "english": "Arithmetic Operation",
        "definition": "덧셈·뺄셈·곱셈·나눗셈·나머지처럼 수치를 계산하는 연산입니다.",
        "related": "프로그램, 프로그래밍 언어, 프로그래밍 도구, 관계 연산, 논리 연산"
      },
      {
        "name": "관계 연산",
        "english": "Relational Operation",
        "definition": "두 값의 크기나 같고 다름을 비교하여 참 또는 거짓을 판단하는 연산입니다.",
        "example": "거짓 거짓 참",
        "related": "프로그램, 프로그래밍 언어, 프로그래밍 도구, 산술 연산, 논리 연산"
      },
      {
        "name": "논리 연산",
        "english": "Logical Operation",
        "definition": "AND·OR·NOT처럼 여러 참·거짓 조건을 조합하거나 반대로 만드는 연산입니다.",
        "example": "거짓 참 참",
        "related": "프로그램, 프로그래밍 언어, 프로그래밍 도구, 산술 연산, 관계 연산"
      },
      {
        "name": "정렬",
        "english": "Sort",
        "definition": "자료를 크기·이름 등 정해진 기준에 따라 일정한 순서로 나열하는 것입니다.",
        "detail": "정렬 방식에는 작은 것부터 큰 것 순으로 정렬하는 오름차순 정렬과 큰 것부터 작은 것 순으로 정렬하는 내림차순 정렬이 있습니다. 대표적인 정렬 알고리즘에는 선택 정렬, 삽입 정렬, 버블 정렬 및 퀵 정렬 등이 있습니다.",
        "related": "알고리즘, 프로그램, 탐색"
      },
      {
        "name": "탐색",
        "english": "Search",
        "definition": "저장된 여러 자료 중에서 원하는 자료가 어디에 있는지 찾아내는 것입니다.",
        "detail": "컴퓨터에 저장되어 있는 많은 자료 중에서 원하는 자료가 어디에 있는지 찾아내는 것은 컴퓨터로 업무를 처리하는 경우에 많이 쓰이는 동작입니다. 만약 저장되어 있는 자료가 아무렇게나 저장되어 있다면 처음부터 하나씩 비교해야 되는데 이러한 자료 찾기 방법을 순차 탐색이라고 부릅니다. 그러나 자료가 순서대로 되어 있다면 좀 더 효과적으로 찾아낼 수 있으며 여러 방법들이 있습니다. 그 중에 대표적인 방법이 중간부터 찾아가는 방법인데 이를 이진탐색이라고 부릅니다.",
        "related": "알고리즘, 프로그램, 정렬"
      },
      {
        "name": "프로그램",
        "english": "Program",
        "definition": "컴퓨터가 처리할 일을 수행 순서에 맞게 명령으로 작성해 놓은 것입니다.",
        "related": "알고리즘, 프로그래밍 언어, 프로그래밍 도구, 코딩"
      },
      {
        "name": "프로그래밍 언어",
        "english": "Programming Language",
        "definition": "사람이 컴퓨터에게 수행할 명령을 프로그램으로 작성하기 위해 사용하는 기호와 규칙의 체계입니다.",
        "related": "프로그램, 프로그래밍 도구, 코딩"
      },
      {
        "name": "프로그래밍 도구",
        "english": "Programming Tool",
        "definition": "프로그램을 더 쉽게 작성·실행·수정할 수 있도록 만들어진 소프트웨어입니다.",
        "related": "프로그램, 프로그래밍 언어, 코딩"
      },
      {
        "name": "코딩",
        "english": "Coding",
        "definition": "알고리즘을 선택한 프로그래밍 언어의 명령으로 옮겨 작성하는 작업입니다.",
        "related": "알고리즘, 프로그래밍 언어, 프로그래밍 도구, 프로그램, 명령어"
      },
      {
        "name": "명령어",
        "english": "Instruction",
        "definition": "프로그래밍 언어에서 컴퓨터가 수행할 동작을 나타내는 기본 명령 요소입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 프로그램, 코딩"
      },
      {
        "name": "조건문",
        "english": "Conditional Statement",
        "definition": "주어진 조건의 참·거짓에 따라 서로 다른 명령을 실행하도록 작성하는 명령문입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 프로그램, 코딩, 명령어, 선택 구조"
      },
      {
        "name": "반복문",
        "english": "Repetitive Statement",
        "definition": "지정한 명령들을 정해진 횟수나 조건에 따라 여러 번 실행하도록 하는 명령문입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 프로그램, 코딩, 명령어, 반복 구조"
      },
      {
        "name": "디버깅",
        "english": "Debugging",
        "definition": "프로그램에서 잘못된 부분이나 오류를 찾아 원인을 확인하고 고치는 작업입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 프로그램, 코딩"
      },
      {
        "name": "프로젝트",
        "english": "Project",
        "definition": "스크래치·엔트리 같은 교육용 프로그래밍 도구에서 사용자가 만들어 저장한 프로그램 결과물을 말합니다.",
        "related": "프로그래밍 도구, 프로그램, 코딩"
      },
      {
        "name": "오브젝트 / 스프라이트",
        "english": "Object / Sprite",
        "definition": "엔트리나 스크래치에서 캐릭터의 모습·소리·스크립트를 묶어 다루는 프로그램 단위입니다.",
        "related": "프로그래밍 언어, 프로그래밍 도구, 코딩"
      },
      {
        "name": "시뮬레이션",
        "english": "Simulation; 모의실험",
        "definition": "현실의 현상이나 사건을 컴퓨터 프로그램으로 가상 실행하여 결과를 관찰하거나 예측하는 방법입니다.",
        "related": "컴퓨팅 사고력, 프로그램, 코딩"
      }
    ]
  }
];

const quickComparisons = [
  {
    title: "디지털 ↔ 아날로그",
    body: "디지털은 값을 단계적으로 끊어 표현하고, 아날로그는 연속적으로 변화하는 값을 나타냅니다.",
  },
  {
    title: "자료 ↔ 정보",
    body: "자료는 관찰·측정으로 얻은 값이고, 정보는 자료를 목적에 맞게 가공해 의미 있게 만든 것입니다.",
  },
  {
    title: "하드웨어 ↔ 소프트웨어",
    body: "하드웨어는 만질 수 있는 장치이고, 소프트웨어는 컴퓨터가 일을 수행하도록 하는 프로그램과 절차입니다.",
  },
  {
    title: "변수 ↔ 상수",
    body: "변수는 실행 중 값이 바뀔 수 있는 저장 공간이고, 상수는 바뀌지 않도록 정한 값입니다.",
  },
  {
    title: "입력 → 처리 → 출력",
    body: "외부의 자료를 입력하고, 컴퓨터가 프로그램에 따라 처리한 뒤, 사람이 확인할 수 있게 결과를 출력합니다.",
  },
  {
    title: "순차 · 선택 · 반복",
    body: "순차는 차례대로 실행, 선택은 조건에 따라 갈라짐, 반복은 같은 작업을 여러 번 실행하는 구조입니다.",
  },
];

export default function ElementaryInformationGlossary() {
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
          <span className="eyebrow">ELEMENTARY INFORMATION GLOSSARY</span>
          <h1>초등 정보용어 백과</h1>
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
          <p>용어 이름·영문 이름·설명 내용으로 검색할 수 있습니다.</p>
        </div>

        <div className="elementary-glossary-search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 알고리즘, CPU, 인터넷, 변수"
            aria-label="초등 정보용어 검색"
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
