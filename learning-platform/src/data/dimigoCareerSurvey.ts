export type CareerTrackId = "web" | "malware" | "ai" | "response" | "cloud" | "iot";
export type CareerRoute = "employment" | "university" | "explore";

export type SurveyChoice = {
  label: string;
  weights: Partial<Record<CareerTrackId, number>>;
};

export type SurveyQuestion = {
  title: string;
  description: string;
  options: SurveyChoice[];
};

export type CareerTrack = {
  id: CareerTrackId;
  title: string;
  role: string;
  description: string;
  activities: string;
  basics: string;
  advanced: string;
  project: string;
  validation: string;
  collaboration: string;
  outcome: string;
  contribution: string;
};

export const careerTracks: CareerTrack[] = [
  {
    id: "web",
    title: "웹 취약점 진단·모의해킹",
    role: "모의해킹·애플리케이션 보안 전문가",
    description: "웹서비스의 로그인·입력·권한 처리 과정을 분석하고 문제를 개선하는 직무",
    activities: "웹사이트의 보안 취약점을 직접 찾아 개선하는 일",
    basics: "Python과 C, 리눅스, HTTP·네트워크 기초",
    advanced: "웹 프로그래밍, 데이터베이스, 인증·접근권한 보안",
    project: "직접 구현한 실습용 웹사이트의 입력 검증과 로그인 권한을 점검하고 취약점 개선 전후를 비교하는 프로젝트",
    validation: "테스트 시나리오와 재현 조건을 정리한 취약점 점검 보고서",
    collaboration: "팀원과 공격 가능성과 방어 방법을 나누어 검증하는 모의 점검",
    outcome: "실제 서비스의 위험을 사전에 발견하고 안전한 개발을 돕는",
    contribution: "학교에서 사용할 수 있는 안전한 계정 관리·비밀번호 사용 안내",
  },
  {
    id: "malware",
    title: "악성코드·소프트웨어 공급망 보안",
    role: "악성코드 분석·소프트웨어 보안 전문가",
    description: "다운로드 파일과 배포 소프트웨어를 분석해 악성 동작을 발견하는 직무",
    activities: "파일의 동작과 구조를 조사하여 악성코드 유입을 막는 일",
    basics: "Python과 C, 리눅스, 파일 구조와 운영체제 기초",
    advanced: "정적·동적 분석, 악성코드 행위, 소프트웨어 배포 과정의 보안",
    project: "안전한 실습 환경에서 정상 파일과 모의 악성 행위 데이터를 비교하고 위험 신호를 분류하는 탐지 도구 프로젝트",
    validation: "정탐·오탐 사례 및 파일 검사 결과를 정리한 분석 보고서",
    collaboration: "분석 담당과 탐지 로직 담당이 결과를 교차 확인하는 공동 실험",
    outcome: "이용자가 신뢰할 수 있는 프로그램을 선택하도록 돕는",
    contribution: "안전한 소프트웨어 다운로드·업데이트 방법 안내",
  },
  {
    id: "ai",
    title: "AI 기반 피싱·딥페이크 보안",
    role: "AI 사이버 위협 탐지 솔루션 개발자",
    description: "AI·데이터 분석을 활용해 피싱 사이트, 보이스피싱, 합성음 등의 위협을 판별하는 직무",
    activities: "AI로 사람을 속이는 공격을 탐지하고 피해를 예방하는 일",
    basics: "Python, 데이터 처리, 네트워크와 정보보안 기초",
    advanced: "AI 모델 평가, 피싱 패턴 분석, 오탐·미탐 관리",
    project: "의심 URL·문구 또는 합성음의 특징을 비교하고 AI 판정 결과의 정확도와 오탐 원인을 분석하는 프로젝트",
    validation: "정확도·재현율·오탐 사례를 정리한 탐지 성능 보고서",
    collaboration: "팀원과 테스트 데이터를 분리하고 모델 결과를 재검증하는 공동 실험",
    outcome: "새롭게 변하는 디지털 사기 수법에 대응하는",
    contribution: "청소년·고령층을 위한 피싱 및 AI 합성음 주의 안내",
  },
  {
    id: "response",
    title: "보안관제·침해사고 대응",
    role: "보안관제·침해사고 대응 분석가",
    description: "보안 로그에서 수상한 징후를 찾아 사고의 원인을 조사하고 대응하는 직무",
    activities: "공격 흔적을 추적해 보안 사고를 빠르게 발견하고 대응하는 일",
    basics: "리눅스, 네트워크 구조, Python과 로그 분석 기초",
    advanced: "침해사고 대응 절차, 네트워크 패킷 분석, 디지털 증거 보존",
    project: "가상 실습망에서 발생한 정상·이상 접속 기록을 분류하고 경보 기준과 대응 절차를 정리하는 프로젝트",
    validation: "경보 발생 원인과 사고 대응 과정을 정리한 분석 보고서",
    collaboration: "탐지·분석·복구 역할을 나누어 수행하는 모의 침해사고 대응 훈련",
    outcome: "사이버 공격의 피해를 줄이고 서비스의 신뢰를 지키는",
    contribution: "학교 내 의심 로그인·계정 침해 시 대처 안내",
  },
  {
    id: "cloud",
    title: "클라우드·네트워크 인프라 보안",
    role: "클라우드·네트워크 보안 엔지니어",
    description: "서버·클라우드·통신 환경의 접근권한과 보안 설정을 관리하는 직무",
    activities: "서버와 클라우드 서비스에 안전한 접근 통제 체계를 만드는 일",
    basics: "리눅스, TCP/IP, Python과 서버 운영 기초",
    advanced: "클라우드 접근권한, 네트워크 분리, 제로트러스트 보안 원리",
    project: "가상 서버 환경에서 사용자별 접근권한과 네트워크 규칙을 설정하고 차단 결과를 검증하는 프로젝트",
    validation: "권한 설정 변경 전후와 보안 점검 결과를 정리한 운영 보고서",
    collaboration: "서비스 운영·개발 담당과 위험 요소를 조율하는 설정 점검 활동",
    outcome: "안정적인 디지털 서비스를 뒷받침하는",
    contribution: "공용 Wi-Fi와 계정 보안을 위한 안전 이용 수칙",
  },
  {
    id: "iot",
    title: "IoT·임베디드 기기 보안",
    role: "IoT·임베디드 보안 엔지니어",
    description: "스마트 기기와 연결 장치의 통신·인증·소프트웨어를 보호하는 직무",
    activities: "인터넷 연결 기기와 스마트 장비의 보안 문제를 해결하는 일",
    basics: "C와 Python, 센서·마이크로컨트롤러, 네트워크 기초",
    advanced: "임베디드 소프트웨어, 장치 인증, 안전한 펌웨어 업데이트",
    project: "실습용 스마트 장치의 통신과 접근권한을 점검하고 안전한 설정을 적용하는 프로젝트",
    validation: "인증·통신·업데이트 과정의 위험 요소를 정리한 점검 보고서",
    collaboration: "하드웨어·소프트웨어 개발 역할을 나누어 안전성을 검증하는 팀 실습",
    outcome: "일상 속 스마트 장치의 개인정보와 안전을 지키는",
    contribution: "가정용 스마트 기기 비밀번호·업데이트 점검 안내",
  },
];

export const careerSurveyQuestions: SurveyQuestion[] = [
  {
    title: "보안 관련 소식 중 가장 궁금한 것은?",
    description: "평소 스스로 더 찾아보고 싶은 주제를 고르세요.",
    options: [
      { label: "웹사이트의 로그인이나 결제 기능에서 발견된 취약점", weights: { web: 3, cloud: 1 } },
      { label: "정상 프로그램으로 위장한 악성코드와 랜섬웨어", weights: { malware: 3, response: 1 } },
      { label: "AI 합성음이나 피싱 사이트를 이용한 사기", weights: { ai: 3, web: 1 } },
      { label: "회사 서버에 침입한 공격자의 흔적과 대응 과정", weights: { response: 3, cloud: 1 } },
      { label: "클라우드 계정 정보 유출과 권한 설정 사고", weights: { cloud: 3, response: 1 } },
      { label: "스마트폰·가전·로봇 같은 기기의 보안 문제", weights: { iot: 3, cloud: 1 } },
    ],
  },
  {
    title: "직접 만들 프로젝트를 하나 고른다면?",
    description: "기존 경험과 관계없이 해보고 싶은 것을 선택하세요.",
    options: [
      { label: "일부러 취약하게 만든 웹페이지를 점검하고 개선하기", weights: { web: 3, malware: 1 } },
      { label: "다운로드 파일의 위험 신호를 분석하는 프로그램", weights: { malware: 3, ai: 1 } },
      { label: "의심 URL이나 AI 합성음을 구분하는 탐지 프로그램", weights: { ai: 3, response: 1 } },
      { label: "서버 로그를 분석해 수상한 접속에 경보 보내기", weights: { response: 3, cloud: 1 } },
      { label: "가상 서버의 접속 권한과 방화벽 설정 실험", weights: { cloud: 3, response: 1 } },
      { label: "센서·스마트 장치의 무단 접근을 막는 기능", weights: { iot: 3, web: 1 } },
    ],
  },
  {
    title: "배우는 과정에서 더 즐거울 것 같은 활동은?",
    description: "성적이나 숙련도보다 흥미를 기준으로 답하세요.",
    options: [
      { label: "웹 코드를 수정해 입력 오류와 취약점 없애기", weights: { web: 3, malware: 1 } },
      { label: "프로그램 실행 전후의 동작을 차근차근 분석하기", weights: { malware: 3, response: 1 } },
      { label: "여러 데이터를 비교해 탐지 규칙·AI 모델 개선하기", weights: { ai: 3, malware: 1 } },
      { label: "기록 속 단서를 이어 사건의 원인 추론하기", weights: { response: 3, ai: 1 } },
      { label: "리눅스 서버와 네트워크 환경을 직접 설정하기", weights: { cloud: 3, response: 1 } },
      { label: "하드웨어를 연결하고 기기 프로그램을 제어하기", weights: { iot: 3, cloud: 1 } },
    ],
  },
  {
    title: "팀 프로젝트에서 맡고 싶은 역할은?",
    description: "내가 가장 집중해서 잘해 보고 싶은 역할을 고르세요.",
    options: [
      { label: "웹서비스의 취약점을 찾아 재현 방법 설명하기", weights: { web: 3, response: 1 } },
      { label: "문제 있는 파일의 내부 동작을 파악하기", weights: { malware: 3, iot: 1 } },
      { label: "탐지 결과의 정확도를 비교하고 모델 개선하기", weights: { ai: 3, malware: 1 } },
      { label: "사고 기록을 시간순으로 정리해 대응하기", weights: { response: 3, cloud: 1 } },
      { label: "서버 접근권한과 네트워크를 안전하게 구성하기", weights: { cloud: 3, web: 1 } },
      { label: "스마트 장치의 통신 오류와 보안 설정을 검증하기", weights: { iot: 3, cloud: 1 } },
    ],
  },
  {
    title: "다음 중 가장 막고 싶은 사고는?",
    description: "내 기술이 어떤 문제를 해결하면 뿌듯할지 생각하세요.",
    options: [
      { label: "회원 정보가 유출되는 웹사이트 취약점", weights: { web: 3, cloud: 1 } },
      { label: "파일 다운로드로 퍼지는 악성코드 감염", weights: { malware: 3, response: 1 } },
      { label: "피싱·보이스피싱·딥페이크에 의한 피해", weights: { ai: 3, web: 1 } },
      { label: "침입을 뒤늦게 발견해 커지는 기업의 피해", weights: { response: 3, ai: 1 } },
      { label: "잘못된 서버 권한 때문에 생기는 정보 유출", weights: { cloud: 3, response: 1 } },
      { label: "스마트카메라·로봇 등 기기의 불법 제어", weights: { iot: 3, cloud: 1 } },
    ],
  },
  {
    title: "어떤 형태의 결과물이 더 마음에 드나요?",
    description: "완성했을 때 보람을 느낄 결과물을 고르세요.",
    options: [
      { label: "취약점 발견·개선 전후를 보여주는 웹 점검 보고서", weights: { web: 3, response: 1 } },
      { label: "위험 파일을 구분하는 검사 도구와 분석 보고서", weights: { malware: 3, ai: 1 } },
      { label: "정확도와 오탐을 비교한 AI 탐지 프로그램", weights: { ai: 3, malware: 1 } },
      { label: "이상 접속의 원인을 찾는 로그 분석 대시보드", weights: { response: 3, cloud: 1 } },
      { label: "안전한 서버 권한 및 네트워크 구성도", weights: { cloud: 3, web: 1 } },
      { label: "보안 설정이 적용된 스마트 장치 시제품", weights: { iot: 3, web: 1 } },
    ],
  },
  {
    title: "스스로 가장 해 보고 싶은 실습은?",
    description: "학교에서 배울 기술을 미리 상상해 보세요.",
    options: [
      { label: "허가된 웹 실습 환경에서 CTF 문제 풀기", weights: { web: 3, response: 1 } },
      { label: "안전한 격리 환경에서 악성 동작 살펴보기", weights: { malware: 3, response: 1 } },
      { label: "피싱 데이터로 탐지 정확도 실험하기", weights: { ai: 3, web: 1 } },
      { label: "가상 공격의 로그를 분석해 대응 순서 만들기", weights: { response: 3, cloud: 1 } },
      { label: "가상 네트워크의 방화벽과 계정 권한 점검하기", weights: { cloud: 3, response: 1 } },
      { label: "마이크로컨트롤러 통신의 인증 실험하기", weights: { iot: 3, malware: 1 } },
    ],
  },
  {
    title: "지식을 활용해 다른 사람에게 알려 주고 싶은 것은?",
    description: "보안 전문가로서 기여하고 싶은 모습을 고르세요.",
    options: [
      { label: "웹서비스를 안전하게 개발하고 이용하는 방법", weights: { web: 3, cloud: 1 } },
      { label: "안전하게 파일을 내려받고 업데이트하는 방법", weights: { malware: 3, response: 1 } },
      { label: "가짜 사이트·합성음·피싱 메시지 구별 방법", weights: { ai: 3, web: 1 } },
      { label: "계정 침해를 의심할 때의 신고·대응 절차", weights: { response: 3, cloud: 1 } },
      { label: "공용 Wi-Fi와 클라우드 계정을 안전하게 쓰는 방법", weights: { cloud: 3, response: 1 } },
      { label: "스마트 기기를 안전하게 설정하고 관리하는 방법", weights: { iot: 3, cloud: 1 } },
    ],
  },
];

export const careerRouteQuestion = {
  title: "졸업 후 진로는 어떻게 생각하고 있나요?",
  options: [
    { value: "employment" as const, label: "졸업 후 정보보안 관련 직무로 취업하고 싶어요." },
    { value: "university" as const, label: "관련 대학 전공을 더 깊이 공부한 뒤 취업하고 싶어요." },
    { value: "explore" as const, label: "취업과 대학 진학을 함께 살펴보고 결정하고 싶어요." },
  ],
};

export function rankCareerTracks(answers: number[]) {
  const scores = Object.fromEntries(careerTracks.map((track) => [track.id, 0])) as Record<CareerTrackId, number>;
  careerSurveyQuestions.forEach((question, index) => {
    const choiceIndex = answers[index];
    const choice = choiceIndex === undefined ? undefined : question.options[choiceIndex];
    if (!choice) return;
    Object.entries(choice.weights).forEach(([key, weight]) => {
      scores[key as CareerTrackId] += weight ?? 0;
    });
  });
  return [...careerTracks].sort((a, b) => scores[b.id] - scores[a.id] || careerTracks.indexOf(a) - careerTracks.indexOf(b))
    .map((track) => ({ ...track, score: scores[track.id] }));
}

export function getCareerRouteSentence(route: CareerRoute): string {
  if (route === "employment") return "졸업 후에는 보안 관련 기업의 실무 직무에 지원하고, 현장에서 발견한 문제를 스스로 해결할 수 있는 전문성을 지속적으로 높이겠습니다.";
  if (route === "university") return "졸업 후에는 정보보호·컴퓨터공학 관련 전공 학습을 심화하고, 프로젝트와 현장 경험을 쌓아 해당 보안 직무로 취업하겠습니다.";
  return "졸업 전 현장실습과 전공 탐구 경험을 비교해 취업과 진학 가운데 적합한 경로를 선택하고, 궁극적으로 보안 전문 직무에 진출하겠습니다.";
}

export function makeCareerPlanSamples(track: CareerTrack, route: CareerRoute): { title: string; focus: string; body: string }[] {
  const destination = getCareerRouteSentence(route);
  return [
    {
      title: "예시 1 · 직무 역량 중심",
      focus: "전공 학습 → 실습 → 검증 → 취업 목표",
      body: `저는 ${track.activities}에 관심이 있으며, ${track.role}를 목표로 합니다. 디미고 해킹방어과에서 ${track.basics}를 익혀 기본기를 다지겠습니다. 이후 ${track.advanced} 등을 공부하고 학습 과정을 Git 저장소에 정리하겠습니다. 학교의 전공 활동과 팀 프로젝트에서는 ${track.project}를 수행해 보고 싶습니다. 단순히 프로그램을 만드는 데 그치지 않고 ${track.validation}를 완성하여 결과를 객관적으로 검토하겠습니다. 필요한 자격증과 실무 지식을 단계적으로 준비하며 부족한 부분을 찾아 보완하겠습니다. ${destination} 나아가 ${track.outcome} 인재가 되고 싶습니다.`,
    },
    {
      title: "예시 2 · 문제 해결·프로젝트 중심",
      focus: "관심 있는 보안 문제 → 개선 실험 → 성과 검증",
      body: `저는 ${track.role}가 되어 ${track.activities}을 실천하고 싶습니다. 디미고에서 ${track.basics}를 익히고, ${track.advanced} 등 실무 지식을 공부하겠습니다. 가장 해 보고 싶은 활동은 ${track.project}입니다. 안전한 실습 환경을 구성한 뒤 정상 사례와 문제 사례를 비교해 원인을 찾아보겠습니다. 결과는 ${track.validation}로 남겨 다른 사람이 같은 조건에서 확인할 수 있도록 하겠습니다. 또한 ${track.collaboration}을 통해 다른 관점의 의견도 반영하고 싶습니다. ${destination} 장기적으로는 ${track.outcome} 전문가로 성장하겠습니다.`,
    },
    {
      title: "예시 3 · 성장 계획·사회 기여 중심",
      focus: "학년별 목표 → 협업·기록 → 사회적 활용",
      body: `저는 ${track.role}를 희망하며, ${track.activities}을 실천하고 싶습니다. 1학년에는 ${track.basics}를 익히고, 모르는 부분을 직접 실습해 이해하겠습니다. 2학년에는 ${track.advanced} 등 심화 기술을 공부하고, ${track.collaboration}에 참여하겠습니다. 3학년에는 ${track.project}를 완성하는 것을 목표로 삼고, ${track.validation}를 통해 작업 과정을 돌아보겠습니다. 실습 중 발견한 오류와 해결책은 기록하여 후배들과 공유하겠습니다. ${destination} 또한 ${track.contribution} 자료를 만들어 일상 속 보안 실천을 돕는 ${track.outcome} 전문가가 되고 싶습니다.`,
    },
  ];
}
