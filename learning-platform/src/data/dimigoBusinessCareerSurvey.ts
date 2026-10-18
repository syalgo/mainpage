export type CareerTrackId = "data" | "commerce" | "marketing" | "product" | "fintech" | "startup";
export type CareerRoute = "employment" | "university" | "startup" | "explore";
export type SurveyChoice = { label: string; weights: Partial<Record<CareerTrackId, number>> };
export type SurveyQuestion = { title: string; description: string; options: SurveyChoice[] };
export type CareerTrack = {
  id: CareerTrackId; title: string; role: string; description: string; activities: string;
  basics: string; advanced: string; project: string; validation: string; collaboration: string;
  outcome: string; contribution: string;
};
export const careerTracks: CareerTrack[] = [
  {
    "id": "data",
    "title": "비즈니스 데이터 분석",
    "role": "비즈니스 데이터 분석가",
    "description": "판매·고객·이용 데이터를 분석해 경영 의사결정과 서비스 개선에 기여하는 분야",
    "activities": "데이터로 소비자의 불편과 서비스의 개선점을 발견하는 일",
    "basics": "엑셀, 기초 통계, Python과 데이터 시각화",
    "advanced": "빅데이터 분석, 소비자 행동 분석과 데이터 기반 의사결정",
    "project": "익명화한 가상 쇼핑몰 데이터를 분석해 구매 시간대와 재방문 경향을 살피고 개선안을 제안하는 프로젝트",
    "validation": "분석 전제와 지표의 변화가 담긴 데이터 보고서",
    "collaboration": "팀원과 데이터 분석 기준을 정하고 해석 결과를 검증하는 활동",
    "outcome": "직관만이 아니라 객관적인 근거를 바탕으로 서비스를 개선하는",
    "contribution": "청소년이 일상 소비 데이터를 올바르게 해석하도록 돕는 시각화 자료"
  },
  {
    "id": "commerce",
    "title": "전자상거래·온라인 플랫폼 운영",
    "role": "전자상거래 서비스 운영 전문가",
    "description": "온라인 판매·주문·배송·고객 경험을 개선해 신뢰할 수 있는 거래를 설계하는 분야",
    "activities": "온라인 거래에서 소비자와 판매자가 겪는 불편을 줄이는 일",
    "basics": "상업경제, 전자상거래 구조와 기본적인 웹서비스 이해",
    "advanced": "고객관리, 유통·재고 흐름, 온라인 플랫폼 운영 지표",
    "project": "가상 온라인 상점을 기획해 상품 검색부터 주문·배송 안내까지 이용 흐름을 점검하고 개선하는 프로젝트",
    "validation": "이용자 시나리오와 전환·이탈 지표를 정리한 운영 개선 보고서",
    "collaboration": "상품기획·개발·고객지원 역할을 나눠 이용자의 문제를 해결하는 팀 활동",
    "outcome": "편리하면서도 믿을 수 있는 온라인 거래 경험을 만드는",
    "contribution": "안전한 온라인 구매와 환불·교환 절차를 설명하는 안내 자료"
  },
  {
    "id": "marketing",
    "title": "디지털 마케팅·브랜드 전략",
    "role": "데이터 기반 디지털 마케팅 기획자",
    "description": "소비자 특성과 광고 성과를 분석하고 브랜드 메시지를 설계하는 분야",
    "activities": "사용자에게 필요한 제품과 서비스를 정확하게 알리는 일",
    "basics": "마케팅과 광고, 소비자 심리, 콘텐츠 기획과 스프레드시트",
    "advanced": "광고 성과 측정, 고객 세분화, A/B 테스트와 브랜드 전략",
    "project": "동일한 제품에 대한 두 가지 광고·콘텐츠 시안을 제작해 설문과 모의 데이터를 비교하는 프로젝트",
    "validation": "도달·클릭·전환 가설과 결과를 정리한 마케팅 분석 보고서",
    "collaboration": "디자인·기획·분석 담당과 메시지의 효과를 검토하는 활동",
    "outcome": "과장 없이 소비자에게 필요한 정보를 전달하는",
    "contribution": "청소년을 위한 충동구매 예방 및 광고 정보 판별 안내"
  },
  {
    "id": "product",
    "title": "디지털 서비스·플랫폼 기획",
    "role": "디지털 서비스 기획자(PM)",
    "description": "사용자 요구를 찾아 앱·웹서비스의 기능과 비즈니스 모델을 설계하는 분야",
    "activities": "생활 속 문제를 실제로 사용할 수 있는 디지털 서비스로 해결하는 일",
    "basics": "상업경제, 기초 프로그래밍, 사용자 조사와 서비스 흐름도",
    "advanced": "문제 정의, 비즈니스 모델 설계, UX와 기능 우선순위 결정",
    "project": "소비 관리나 학교생활 문제를 해결하는 앱의 화면을 시제품으로 만들고 사용성 테스트를 수행하는 프로젝트",
    "validation": "사용자 피드백과 기능 변경 근거를 기록한 서비스 기획서",
    "collaboration": "개발·디자인·운영 담당의 의견을 조율해 시제품을 개선하는 팀 활동",
    "outcome": "사용자의 실제 어려움을 파악하고 해결책을 제시하는",
    "contribution": "학생들이 쉽게 이용할 수 있는 생활 관리 서비스를 설계하는 활동"
  },
  {
    "id": "fintech",
    "title": "핀테크·디지털 금융 서비스",
    "role": "핀테크 서비스 기획·운영 전문가",
    "description": "디지털 결제·가계부·금융정보 서비스를 편리하고 안전하게 운영하는 분야",
    "activities": "누구나 합리적이고 안전하게 금융 서비스를 이용하도록 돕는 일",
    "basics": "회계원리, 상업경제, 기초 통계와 금융 기초",
    "advanced": "디지털 결제 흐름, 소비자 보호와 데이터 기반 금융 서비스",
    "project": "가상 지출 데이터를 바탕으로 예산 초과를 알려주고 소비 경향을 설명하는 개인 재무관리 서비스 프로젝트",
    "validation": "가계부 분류 정확도와 사용자 이해도를 점검한 개선 보고서",
    "collaboration": "기획·개발·사용자 관점에서 오류와 정보 이해도를 확인하는 공동 점검",
    "outcome": "금융 정보를 쉽고 투명하게 전달하는",
    "contribution": "청소년의 올바른 지출 관리와 디지털 결제 안전 사용을 돕는 자료"
  },
  {
    "id": "startup",
    "title": "스타트업·창업 및 비즈니스 모델",
    "role": "디지털 서비스 창업가",
    "description": "문제 해결 아이디어를 제품·서비스로 검증하고 지속 가능한 사업 모델을 설계하는 분야",
    "activities": "작은 불편에서 사업 기회를 찾아 유용한 서비스를 만드는 일",
    "basics": "상업경제, 회계원리, 청소년 기업가정신과 시장조사",
    "advanced": "비즈니스 모델, 고객검증, 가격·원가 분석과 초기 사업 운영",
    "project": "생활 문제 해결 아이디어를 선정해 잠재 고객 인터뷰와 간단한 서비스 시제품을 만드는 프로젝트",
    "validation": "시장조사·비용·고객 피드백과 사업 지속 가능성을 정리한 창업계획서",
    "collaboration": "기획·개발·홍보 역할을 나누고 고객 의견에 따라 제품 방향을 조정하는 팀 프로젝트",
    "outcome": "실제 수요와 사회적 가치를 함께 고려하여 사업을 운영하는",
    "contribution": "학교 및 지역사회의 불편을 해소하는 작은 서비스 실험"
  }
];
export const careerSurveyQuestions: SurveyQuestion[] = [
  {
    "title": "온라인 서비스를 볼 때 가장 궁금한 것은?",
    "description": "평소 자연스럽게 더 찾아보는 주제를 선택하세요.",
    "options": [
      {
        "label": "서비스가 수집한 데이터를 어떻게 분석하는지",
        "weights": {
          "data": 3,
          "product": 1
        }
      },
      {
        "label": "온라인 쇼핑몰의 주문·배송·교환 과정",
        "weights": {
          "commerce": 3,
          "fintech": 1
        }
      },
      {
        "label": "브랜드가 광고 문구와 이미지를 정하는 방법",
        "weights": {
          "marketing": 3,
          "commerce": 1
        }
      },
      {
        "label": "앱에 어떤 기능을 추가하면 사용자에게 좋을지",
        "weights": {
          "product": 3,
          "startup": 1
        }
      },
      {
        "label": "간편결제와 가계부가 소비를 관리하는 방식",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "새로운 서비스 아이디어를 실제 사업으로 만드는 과정",
        "weights": {
          "startup": 3,
          "product": 1
        }
      }
    ]
  },
  {
    "title": "직접 하나의 프로젝트를 만든다면?",
    "description": "지금 잘하는 것보다 앞으로 해 보고 싶은 활동으로 답하세요.",
    "options": [
      {
        "label": "가상 쇼핑몰의 판매 데이터를 분석한 대시보드",
        "weights": {
          "data": 3,
          "commerce": 1
        }
      },
      {
        "label": "상품 검색·주문 과정을 개선한 온라인 상점",
        "weights": {
          "commerce": 3,
          "product": 1
        }
      },
      {
        "label": "광고 문구와 콘텐츠 성과를 비교한 캠페인",
        "weights": {
          "marketing": 3,
          "data": 1
        }
      },
      {
        "label": "불편을 해결하는 앱의 화면과 기능 시제품",
        "weights": {
          "product": 3,
          "startup": 1
        }
      },
      {
        "label": "예산 초과를 알려주는 스마트 가계부",
        "weights": {
          "fintech": 3,
          "product": 1
        }
      },
      {
        "label": "고객 인터뷰를 바탕으로 만든 창업 시제품",
        "weights": {
          "startup": 3,
          "marketing": 1
        }
      }
    ]
  },
  {
    "title": "문제를 해결할 때 더 끌리는 방법은?",
    "description": "내가 주도하고 싶은 과정을 선택하세요.",
    "options": [
      {
        "label": "숫자와 그래프를 비교해 원인을 찾기",
        "weights": {
          "data": 3,
          "fintech": 1
        }
      },
      {
        "label": "서비스 이용 단계에서 불편한 과정을 바꾸기",
        "weights": {
          "commerce": 3,
          "product": 1
        }
      },
      {
        "label": "대상 고객에 맞게 메시지와 디자인 수정하기",
        "weights": {
          "marketing": 3,
          "product": 1
        }
      },
      {
        "label": "사용자 인터뷰 후 기능 우선순위를 정하기",
        "weights": {
          "product": 3,
          "startup": 1
        }
      },
      {
        "label": "돈의 흐름과 비용을 계산해 선택 기준 만들기",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "아이디어가 실제 고객에게 필요한지 검증하기",
        "weights": {
          "startup": 3,
          "marketing": 1
        }
      }
    ]
  },
  {
    "title": "팀 프로젝트에서 맡고 싶은 역할은?",
    "description": "혼자 잘하는 역할보다 해보고 싶은 역할을 고르세요.",
    "options": [
      {
        "label": "설문과 이용 기록을 표·차트로 분석하기",
        "weights": {
          "data": 3,
          "marketing": 1
        }
      },
      {
        "label": "상품·주문·고객응대 운영 과정 설계하기",
        "weights": {
          "commerce": 3,
          "fintech": 1
        }
      },
      {
        "label": "홍보 전략을 세우고 콘텐츠를 실험하기",
        "weights": {
          "marketing": 3,
          "startup": 1
        }
      },
      {
        "label": "기능 목록과 사용자 경험을 정리하기",
        "weights": {
          "product": 3,
          "commerce": 1
        }
      },
      {
        "label": "가격·예산·결제 과정을 이해하기 쉽게 설명하기",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "사업 아이디어와 운영 전략을 제안하기",
        "weights": {
          "startup": 3,
          "product": 1
        }
      }
    ]
  },
  {
    "title": "어떤 불편을 가장 먼저 해결하고 싶나요?",
    "description": "학생이나 소비자의 관점에서 생각하세요.",
    "options": [
      {
        "label": "좋은 제품인데 어떤 고객이 필요한지 모르는 문제",
        "weights": {
          "data": 3,
          "marketing": 1
        }
      },
      {
        "label": "온라인 쇼핑에서 주문 과정이 복잡한 문제",
        "weights": {
          "commerce": 3,
          "product": 1
        }
      },
      {
        "label": "광고가 과장되어 고객이 잘못 판단하는 문제",
        "weights": {
          "marketing": 3,
          "fintech": 1
        }
      },
      {
        "label": "필요한 기능이 없어 앱 사용이 번거로운 문제",
        "weights": {
          "product": 3,
          "commerce": 1
        }
      },
      {
        "label": "자신의 소비 내역과 예산을 관리하지 못하는 문제",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "좋은 아이디어가 있지만 실행 방법을 모르는 문제",
        "weights": {
          "startup": 3,
          "product": 1
        }
      }
    ]
  },
  {
    "title": "만든 결과물을 어떤 방식으로 평가하고 싶나요?",
    "description": "결과의 성공 기준을 생각하며 답하세요.",
    "options": [
      {
        "label": "데이터 분석 결과가 정확하고 재현 가능한지",
        "weights": {
          "data": 3,
          "fintech": 1
        }
      },
      {
        "label": "쇼핑 과정의 이탈이 줄고 만족도가 올랐는지",
        "weights": {
          "commerce": 3,
          "product": 1
        }
      },
      {
        "label": "고객이 메시지를 이해하고 관심을 보였는지",
        "weights": {
          "marketing": 3,
          "data": 1
        }
      },
      {
        "label": "사용자 피드백으로 기능이 개선되었는지",
        "weights": {
          "product": 3,
          "commerce": 1
        }
      },
      {
        "label": "지출 관리나 금융정보 이해에 도움이 되었는지",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "고객의 실제 수요와 사업 지속 가능성이 있는지",
        "weights": {
          "startup": 3,
          "product": 1
        }
      }
    ]
  },
  {
    "title": "고등학교에서 더 배우고 싶은 내용은?",
    "description": "공식 과목 이름과 무관하게 선호하는 학습 주제를 고르세요.",
    "options": [
      {
        "label": "통계·Python·데이터 분석·시각화",
        "weights": {
          "data": 3,
          "fintech": 1
        }
      },
      {
        "label": "전자상거래·유통·고객 서비스 운영",
        "weights": {
          "commerce": 3,
          "startup": 1
        }
      },
      {
        "label": "마케팅·광고·브랜드 메시지",
        "weights": {
          "marketing": 3,
          "commerce": 1
        }
      },
      {
        "label": "서비스 기획·앱 프로토타입·문제 정의",
        "weights": {
          "product": 3,
          "startup": 1
        }
      },
      {
        "label": "회계원리·금융·디지털 결제",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "시장조사·창업·비즈니스 모델",
        "weights": {
          "startup": 3,
          "marketing": 1
        }
      }
    ]
  },
  {
    "title": "사회에 가장 기여하고 싶은 방식은?",
    "description": "직업인으로서 남기고 싶은 가치를 선택하세요.",
    "options": [
      {
        "label": "데이터를 올바르게 해석해 합리적 의사결정을 돕기",
        "weights": {
          "data": 3,
          "fintech": 1
        }
      },
      {
        "label": "누구나 편리하고 신뢰할 수 있는 온라인 거래 만들기",
        "weights": {
          "commerce": 3,
          "product": 1
        }
      },
      {
        "label": "소비자가 사실에 근거하여 광고를 판단하도록 돕기",
        "weights": {
          "marketing": 3,
          "commerce": 1
        }
      },
      {
        "label": "어린이·고령자도 이용하기 쉬운 서비스 만들기",
        "weights": {
          "product": 3,
          "startup": 1
        }
      },
      {
        "label": "청소년의 합리적인 소비와 금융 이해 높이기",
        "weights": {
          "fintech": 3,
          "data": 1
        }
      },
      {
        "label": "지역사회 문제를 해결하는 작은 사업 시작하기",
        "weights": {
          "startup": 3,
          "product": 1
        }
      }
    ]
  }
];
export const careerRouteQuestion = {
  title: "고교 졸업 이후의 진로를 어떻게 생각하나요?",
  options: [
    {value:"employment" as const,label:"전공 관련 기업에 취업하여 실무 경험을 쌓고 싶어요."},
    {value:"university" as const,label:"경영·경제·데이터·IT 전공 등을 심화한 뒤 취업하고 싶어요."},
    {value:"startup" as const,label:"창업을 목표로 작은 아이디어부터 사업성을 검증하고 싶어요."},
    {value:"explore" as const,label:"취업·진학·창업 가능성을 살펴보며 정하고 싶어요."},
  ],
};
export function rankCareerTracks(answers: number[]) {
 const scores=Object.fromEntries(careerTracks.map(t=>[t.id,0])) as Record<CareerTrackId,number>;
 careerSurveyQuestions.forEach((question,index)=>{
  const choice=question.options[answers[index]]; if(!choice)return;
  Object.entries(choice.weights).forEach(([id,point])=>{scores[id as CareerTrackId]+=point??0;});
 });
 return [...careerTracks].sort((a,b)=>scores[b.id]-scores[a.id]||careerTracks.indexOf(a)-careerTracks.indexOf(b))
 .map(track=>({...track,score:scores[track.id]}));
}
export function getCareerRouteSentence(route:CareerRoute):string {
 if(route==="employment")return "졸업 후에는 관련 기업에서 서비스 기획·운영과 데이터 활용 경험을 쌓고, 현장의 문제를 개선하는 실무자로 성장하겠습니다.";
 if(route==="university")return "졸업 후에는 경영·경제·데이터·IT 관련 전공을 심화하고, 프로젝트와 현장 경험을 쌓아 관심 직무로 취업하겠습니다.";
 if(route==="startup")return "졸업 후에는 고객 검증과 소규모 시제품 운영으로 사업성을 확인하고, 필요한 실무 역량과 협업 경험을 쌓아 창업에 도전하겠습니다.";
 return "학교에서 현장실습·전공 탐구·창업 프로젝트를 경험한 뒤 적합한 경로를 선택하고, 장기적으로 디지털 비즈니스 분야에서 일하겠습니다.";
}
export function makeCareerPlanSamples(track: CareerTrack,route:CareerRoute):{title:string;focus:string;body:string}[]{
 const destination=getCareerRouteSentence(route);
 return [
 {title:"예시 1 · 전공·직무 역량 중심",focus:"기초 학습 → 프로젝트 → 객관적 검증 → 진로",body:`저는 ${track.activities}에 관심이 있으며, ${track.role}를 목표로 합니다. 디미고 E-비즈니스과에서 ${track.basics}를 익혀 비즈니스와 기술의 기본기를 쌓겠습니다. 이후 ${track.advanced}에 관한 이해를 넓히고, 학습한 내용과 의문점을 꾸준히 정리하여 스스로 부족한 점을 점검하겠습니다. 특히 교내 활동에서 ${track.project}를 수행하고 싶습니다. 진행 과정에서는 조사 대상을 분명히 하고 자료의 신뢰성을 확인하며, ${track.validation}를 만들어 결과를 비교하겠습니다. 의견이 다른 팀원과도 근거를 공유해 개선 방향을 찾겠습니다. ${destination} 나아가 ${track.outcome} 전문가가 되고 싶습니다.`},
 {title:"예시 2 · 사용자 문제 해결 중심",focus:"실제 불편 발견 → 실험 → 협업 → 결과 개선",body:`저는 ${track.activities}을 통해 사람들에게 도움이 되는 ${track.role}가 되고 싶습니다. 이를 위해 먼저 디미고에서 ${track.basics}를 체계적으로 학습하고, ${track.advanced}를 실제 서비스 사례에 연결해 이해하겠습니다. 가장 도전해 보고 싶은 과제는 ${track.project}입니다. 우선 가설과 성공 기준을 정한 뒤 소규모 설문 및 가상 데이터를 활용해 결과를 확인하겠습니다. 예상과 다른 결과가 나오면 원인을 분석하여 설계와 운영 방식을 수정하겠습니다. 또 ${track.collaboration}을 수행하면서 협력과 소통을 배우고 싶습니다. ${track.validation}를 완성해 성장 과정을 기록하겠습니다. ${destination} 고객의 입장을 존중하며 ${track.outcome} 인재로 성장하겠습니다.`},
 {title:"예시 3 · 학년별 성장·사회 기여 중심",focus:"1~3학년 활동 계획 → 사회 문제 해결",body:`저는 ${track.role}를 희망합니다. 디미고 입학 후 1학년에는 ${track.basics}를 배우며 숫자와 사용자 행동을 읽는 기초를 다지겠습니다. 2학년에는 ${track.advanced}를 심화하며 ${track.collaboration}에 참여하고, 역할을 책임감 있게 수행하겠습니다. 3학년에는 ${track.project}를 주제로 결과물을 만들겠습니다. 실험 과정에서 세운 가설, 수집한 자료의 한계, 개선 과정을 ${track.validation}로 기록하겠습니다. 완성도뿐 아니라 서비스를 실제로 이용할 사람에게 유용한지 점검하고, 피드백에 따라 수정하겠습니다. ${destination} 또 ${track.contribution}를 만들어 배운 지식을 나누겠습니다. 장기적으로는 ${track.outcome} 전문가가 되고 싶습니다.`},
 ];
}
