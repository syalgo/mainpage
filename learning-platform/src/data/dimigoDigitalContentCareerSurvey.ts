export type CareerTrackId = "video" | "graphic" | "animation" | "game" | "ux" | "xr";
export type CareerRoute = "employment" | "university" | "explore";
export type SurveyChoice = { label: string; weights: Partial<Record<CareerTrackId, number>> };
export type SurveyQuestion = { title: string; description: string; options: SurveyChoice[] };
export type CareerTrack = {
  id: CareerTrackId; title: string; role: string; description: string;
  activities: string; basics: string; advanced: string; project: string;
  validation: string; collaboration: string; outcome: string; contribution: string;
};
export const careerTracks: CareerTrack[] = [
  {
    "id": "video",
    "title": "영상 제작·편집·모션그래픽",
    "role": "영상 편집·모션그래픽 디자이너",
    "description": "촬영·편집·자막·움직이는 그래픽으로 정보를 전달하고 몰입감을 높이는 분야",
    "activities": "영상과 움직이는 그래픽으로 이야기를 효과적으로 전달하는 일",
    "basics": "영상제작기초, 촬영 구도, 컷 편집과 음향 기초",
    "advanced": "방송 제작 과정, 색보정, 자막과 모션그래픽 표현",
    "project": "학교생활의 정보를 짧은 영상으로 기획하고 촬영·편집한 뒤 다양한 시청자의 반응을 비교하는 프로젝트",
    "validation": "스토리보드, 편집 의도와 시청자 피드백을 정리한 제작 보고서",
    "collaboration": "기획·촬영·편집·음향 역할을 나눠 의견을 조율하는 팀 제작",
    "outcome": "이해하기 쉬운 영상으로 사람들의 공감과 소통을 돕는",
    "contribution": "학생들을 위한 안전·생활 안내 영상을 제작하는 활동"
  },
  {
    "id": "graphic",
    "title": "그래픽·브랜드·콘텐츠 디자인",
    "role": "디지털 그래픽·브랜드 디자이너",
    "description": "포스터, 카드뉴스, 캐릭터 등 시각 언어를 설계해 브랜드와 정보의 의미를 전달하는 분야",
    "activities": "복잡한 정보를 그림과 시각 디자인으로 알기 쉽게 바꾸는 일",
    "basics": "컴퓨터그래픽, 색채·타이포그래피와 디자인 구성 원리",
    "advanced": "브랜드 아이덴티티, 광고 콘텐츠 제작과 시각정보 구조화",
    "project": "교내 행사나 지역사회 캠페인을 위한 로고·포스터·카드뉴스를 제작하고 전달력을 비교하는 프로젝트",
    "validation": "디자인 초안과 최종안, 대상자 설문과 개선 기준을 정리한 포트폴리오",
    "collaboration": "콘셉트·이미지·문구 담당과 소통하며 일관된 디자인을 만드는 팀 활동",
    "outcome": "디자인의 심미성과 정보 전달 효과를 함께 고려하는",
    "contribution": "지역사회와 학교 행사 정보를 누구나 쉽게 읽도록 돕는 홍보물"
  },
  {
    "id": "animation",
    "title": "3D 모델링·애니메이션·VFX",
    "role": "3D 콘텐츠·애니메이션 제작자",
    "description": "디지털 캐릭터·배경을 모델링하고 애니메이션·시각효과로 장면을 구현하는 분야",
    "activities": "3차원 공간과 캐릭터에 움직임을 부여해 이야기를 표현하는 일",
    "basics": "애니메이션콘텐츠제작, 드로잉, 형태와 공간 표현 기초",
    "advanced": "3D 모델링·텍스처·리깅·렌더링과 합성 기법",
    "project": "짧은 스토리에 맞춰 캐릭터와 배경을 설계하고 3D 애니메이션 장면을 제작하는 프로젝트",
    "validation": "콘셉트 스케치, 작업 단계와 렌더링 개선 결과가 담긴 쇼릴",
    "collaboration": "스토리·모델링·애니메이션·합성 역할을 나눠 완성도를 점검하는 협업",
    "outcome": "창의적 세계를 설득력 있는 화면으로 구현하는",
    "contribution": "친숙한 캐릭터로 학교생활 예절을 설명하는 짧은 애니메이션"
  },
  {
    "id": "game",
    "title": "게임 그래픽·인터랙티브 콘텐츠",
    "role": "게임 콘텐츠·인터랙션 디자이너",
    "description": "게임 화면, 캐릭터, 인터페이스와 플레이 경험을 설계·검증하는 분야",
    "activities": "사용자가 직접 참여하고 선택하는 재미있는 디지털 경험을 만드는 일",
    "basics": "컴퓨터그래픽, 스토리보드, 기본적인 게임 규칙과 인터랙션 이해",
    "advanced": "게임 UI, 레벨·캐릭터 디자인, 프로토타입 제작과 플레이 테스트",
    "project": "학습이나 안전 행동을 주제로 간단한 인터랙티브 게임을 기획하고 그래픽·화면 흐름을 제작하는 프로젝트",
    "validation": "플레이 테스트 결과, 난이도·이해도와 사용자의 의견을 기록한 기획서",
    "collaboration": "기획·그래픽·프로그래밍 담당과 플레이 경험을 개선하는 팀 활동",
    "outcome": "즐거움과 교육적 가치를 함께 전달하는",
    "contribution": "어린 학생의 안전한 인터넷 생활을 돕는 교육용 미니게임"
  },
  {
    "id": "ux",
    "title": "UI·UX·디지털 서비스 디자인",
    "role": "UI·UX·디지털 프로덕트 디자이너",
    "description": "앱과 웹의 화면 구조를 기획하고 사용자 조사·사용성 검증으로 서비스를 개선하는 분야",
    "activities": "사용자가 불편 없이 이해하고 조작할 수 있는 화면을 만드는 일",
    "basics": "컴퓨터그래픽, 화면 구성, 시각적 위계와 기초 사용자 조사",
    "advanced": "와이어프레임, 인터랙션 디자인, 디자인 시스템과 사용성 테스트",
    "project": "학생들이 자주 사용하는 학교 안내·신청 서비스의 화면을 다시 설계하고 시제품을 평가하는 프로젝트",
    "validation": "이용자 과제 수행률·피드백과 수정 전후를 정리한 UX 분석 보고서",
    "collaboration": "기획·디자인·개발 담당과 피드백을 나누며 시제품을 개선하는 협업",
    "outcome": "다양한 사용자의 요구를 존중하는 편리한 디지털 경험을 설계하는",
    "contribution": "정보 접근에 어려움을 겪는 사람도 사용할 수 있는 쉬운 화면"
  },
  {
    "id": "xr",
    "title": "AI·XR·융합형 디지털 콘텐츠",
    "role": "AI·XR 융합 콘텐츠 기획·제작자",
    "description": "생성형 AI, AR·VR과 인터랙티브 미디어를 활용하되 창작자의 판단과 사용자의 경험을 검증하는 분야",
    "activities": "AI와 가상·증강현실을 활용해 새로운 방식의 체험 콘텐츠를 만드는 일",
    "basics": "영상제작기초, 컴퓨터그래픽, 인공지능기초와 스토리텔링",
    "advanced": "생성형 AI 결과물 검증, XR 기획, 몰입형 상호작용과 저작권·윤리",
    "project": "학교나 지역 문화재를 소개하는 가상 체험형 콘텐츠 시제품을 만들고 사용자의 이해도와 몰입감을 평가하는 프로젝트",
    "validation": "기획서, 사용성 테스트와 AI 제작물의 출처·저작권 검토가 담긴 보고서",
    "collaboration": "스토리·그래픽·기술 담당과 결과물을 반복 제작하고 시험하는 공동 프로젝트",
    "outcome": "새로운 기술을 책임 있게 활용해 학습과 문화 체험을 넓히는",
    "contribution": "지역 문화를 쉽게 배우도록 돕는 체험형 디지털 콘텐츠"
  }
];
export const careerSurveyQuestions: SurveyQuestion[] = [
  {
    "title": "디지털 콘텐츠를 볼 때 무엇이 가장 궁금한가요?",
    "description": "현재 실력보다는 순수하게 관심이 가는 요소를 선택하세요.",
    "options": [
      {
        "label": "영상의 컷 전환·자막·음악이 분위기를 바꾸는 방식",
        "weights": {
          "video": 3,
          "graphic": 1
        }
      },
      {
        "label": "로고·포스터·색상이 브랜드 인상을 만드는 방식",
        "weights": {
          "graphic": 3,
          "video": 1
        }
      },
      {
        "label": "캐릭터와 배경이 3차원으로 움직이는 제작 과정",
        "weights": {
          "animation": 1
        }
      },
      {
        "label": "게임에서 선택과 반응이 재미를 만드는 방식",
        "weights": {
          "game": 1
        }
      },
      {
        "label": "앱 화면 배치가 사용하기 편한 이유",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "AI나 가상현실이 새로운 체험을 만들어내는 방식",
        "weights": {
          "xr": 3,
          "animation": 1
        }
      }
    ]
  },
  {
    "title": "직접 만든다면 어떤 작품이 가장 끌리나요?",
    "description": "완성해 보고 싶은 결과물을 선택하세요.",
    "options": [
      {
        "label": "학교생활을 소개하는 짧은 영상이나 모션그래픽",
        "weights": {
          "video": 3,
          "graphic": 1
        }
      },
      {
        "label": "행사 브랜드 로고와 포스터·카드뉴스 세트",
        "weights": {
          "graphic": 3,
          "ux": 1
        }
      },
      {
        "label": "직접 모델링한 캐릭터가 등장하는 3D 애니메이션",
        "weights": {
          "animation": 3,
          "video": 1
        }
      },
      {
        "label": "직접 조작하며 배울 수 있는 간단한 미니게임",
        "weights": {
          "game": 3,
          "ux": 1
        }
      },
      {
        "label": "불편한 앱을 더 쉽게 쓰도록 고친 화면 시제품",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "AI·XR을 이용한 체험형 전시나 문화 콘텐츠",
        "weights": {
          "xr": 3,
          "game": 1
        }
      }
    ]
  },
  {
    "title": "창작 과정 중 특히 즐거울 것 같은 일은?",
    "description": "경험 유무에 관계없이 흥미에 따라 답하세요.",
    "options": [
      {
        "label": "촬영 분량을 선택하고 장면의 리듬을 편집하기",
        "weights": {
          "video": 3,
          "animation": 1
        }
      },
      {
        "label": "글자·색상·구도를 조합해 메시지 표현하기",
        "weights": {
          "graphic": 3,
          "ux": 1
        }
      },
      {
        "label": "캐릭터 표정·동작과 공간을 자세히 만들기",
        "weights": {
          "animation": 3,
          "video": 1
        }
      },
      {
        "label": "게임 규칙과 단계별 재미를 직접 시험하기",
        "weights": {
          "game": 3,
          "ux": 1
        }
      },
      {
        "label": "이용자 인터뷰로 불편한 사용 흐름 발견하기",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "새 기술로 예상하지 못한 상호작용 실험하기",
        "weights": {
          "xr": 3,
          "game": 1
        }
      }
    ]
  },
  {
    "title": "팀 프로젝트에서 맡고 싶은 역할은?",
    "description": "가장 해 보고 싶은 협업 역할을 선택하세요.",
    "options": [
      {
        "label": "영상 콘티·촬영·편집과 음향을 담당하기",
        "weights": {
          "video": 1
        }
      },
      {
        "label": "디자인 콘셉트와 시각 홍보물 구성하기",
        "weights": {
          "graphic": 1
        }
      },
      {
        "label": "모델링·애니메이션 장면·시각효과 제작하기",
        "weights": {
          "animation": 3,
          "game": 1
        }
      },
      {
        "label": "게임 화면·캐릭터와 플레이 경험 기획하기",
        "weights": {
          "game": 3,
          "animation": 1
        }
      },
      {
        "label": "사용자 조사·화면 구조·프로토타입 설계하기",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "AI 결과 검토·XR 체험 시나리오 기획하기",
        "weights": {
          "xr": 3,
          "ux": 1
        }
      }
    ]
  },
  {
    "title": "가장 해결해 보고 싶은 문제는 무엇인가요?",
    "description": "콘텐츠로 누구를 어떻게 돕고 싶은지 생각해 보세요.",
    "options": [
      {
        "label": "중요한 정보를 영상으로 알기 쉽게 전달하기",
        "weights": {
          "video": 3,
          "graphic": 1
        }
      },
      {
        "label": "복잡한 정보를 보기 쉬운 시각 자료로 바꾸기",
        "weights": {
          "graphic": 3,
          "ux": 1
        }
      },
      {
        "label": "상상 속 이야기를 살아 움직이는 장면으로 표현하기",
        "weights": {
          "animation": 3,
          "video": 1
        }
      },
      {
        "label": "어려운 내용을 게임으로 즐겁게 익히게 하기",
        "weights": {
          "game": 3,
          "animation": 1
        }
      },
      {
        "label": "누구나 앱을 쉽게 쓰도록 화면의 혼란 줄이기",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "직접 가기 어려운 장소를 가상 체험으로 소개하기",
        "weights": {
          "xr": 3,
          "game": 1
        }
      }
    ]
  },
  {
    "title": "더 깊이 배우고 싶은 기술은 무엇인가요?",
    "description": "낯선 기술을 선택해도 괜찮습니다.",
    "options": [
      {
        "label": "촬영·컷 편집·색보정·모션그래픽",
        "weights": {
          "video": 3,
          "animation": 1
        }
      },
      {
        "label": "컴퓨터그래픽·타이포그래피·브랜드 디자인",
        "weights": {
          "graphic": 3,
          "video": 1
        }
      },
      {
        "label": "3D 모델링·리깅·애니메이션·렌더링",
        "weights": {
          "animation": 3,
          "graphic": 1
        }
      },
      {
        "label": "게임 UI·레벨 디자인·인터랙티브 표현",
        "weights": {
          "game": 3,
          "ux": 1
        }
      },
      {
        "label": "UI 디자인·프로토타입·사용성 테스트",
        "weights": {
          "ux": 3,
          "game": 1
        }
      },
      {
        "label": "AI 기반 제작·XR·실감 미디어 기술",
        "weights": {
          "xr": 3,
          "animation": 1
        }
      }
    ]
  },
  {
    "title": "작품의 완성도를 어떻게 확인하고 싶나요?",
    "description": "어떤 피드백을 받으면 의미 있을까요?",
    "options": [
      {
        "label": "시청자가 내용을 이해하고 끝까지 보는지",
        "weights": {
          "video": 3,
          "ux": 1
        }
      },
      {
        "label": "이미지와 문구가 정확히 기억되고 전달되는지",
        "weights": {
          "graphic": 3,
          "video": 1
        }
      },
      {
        "label": "캐릭터 동작과 화면의 표현이 자연스러운지",
        "weights": {
          "animation": 1
        }
      },
      {
        "label": "플레이하는 사람이 규칙을 이해하고 즐기는지",
        "weights": {
          "game": 3,
          "ux": 1
        }
      },
      {
        "label": "사람들이 화면을 헤매지 않고 목적을 달성하는지",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "체험자가 몰입하면서도 내용의 정확성을 느끼는지",
        "weights": {
          "xr": 3,
          "game": 1
        }
      }
    ]
  },
  {
    "title": "작품을 통해 남기고 싶은 사회적 가치는?",
    "description": "내가 만든 콘텐츠가 도울 사람을 상상하세요.",
    "options": [
      {
        "label": "공익 정보를 쉽게 전달하는 영상",
        "weights": {
          "video": 3,
          "graphic": 1
        }
      },
      {
        "label": "다양한 사람들이 읽기 쉬운 디자인",
        "weights": {
          "graphic": 3,
          "video": 1
        }
      },
      {
        "label": "따뜻한 이야기를 담은 애니메이션",
        "weights": {
          "animation": 3,
          "game": 1
        }
      },
      {
        "label": "학습과 안전 습관을 돕는 기능성 게임",
        "weights": {
          "game": 3,
          "animation": 1
        }
      },
      {
        "label": "장애·연령과 관계없이 쓰기 쉬운 서비스",
        "weights": {
          "ux": 3,
          "graphic": 1
        }
      },
      {
        "label": "지역의 문화와 역사를 체험하는 융합 콘텐츠",
        "weights": {
          "xr": 3,
          "ux": 1
        }
      }
    ]
  }
];
export const careerRouteQuestion = {
  title: "고교 졸업 이후에는 어떤 길을 생각하고 있나요?",
  options: [
    { value:"employment" as const, label:"디지털 콘텐츠 제작·디자인 관련 직무로 취업하고 싶어요." },
    { value:"university" as const, label:"미디어·디자인·게임·융합콘텐츠를 대학에서 더 배우고 취업하고 싶어요." },
    { value:"explore" as const, label:"현장실습과 포트폴리오 활동을 경험한 뒤 취업·진학을 정하고 싶어요." },
  ]
};
export function rankCareerTracks(answers:number[]){
  const scores=Object.fromEntries(careerTracks.map(t=>[t.id,0])) as Record<CareerTrackId,number>;
  careerSurveyQuestions.forEach((q,i)=>{
    const choice=q.options[answers[i]];
    if(!choice)return;
    Object.entries(choice.weights).forEach(([id,pt])=>{scores[id as CareerTrackId]+=pt??0;});
  });
  return [...careerTracks].sort((a,b)=>scores[b.id]-scores[a.id]||careerTracks.indexOf(a)-careerTracks.indexOf(b))
    .map(t=>({...t,score:scores[t.id]}));
}
export function getCareerRouteSentence(route:CareerRoute):string{
  if(route==="employment")return "졸업 후에는 관련 콘텐츠 제작·디자인 직무에 지원하고, 작업물과 피드백을 꾸준히 축적하며 전문성을 높이겠습니다.";
  if(route==="university")return "졸업 후에는 미디어·디자인·게임·융합콘텐츠 관련 전공을 심화하고, 포트폴리오와 현장 경험을 쌓아 희망 직무에 취업하겠습니다.";
  return "고교에서 작품 제작과 현장실습 경험을 비교해 적합한 진로를 정하고, 궁극적으로 디지털 콘텐츠 전문 직무에서 일하겠습니다.";
}
export function makeCareerPlanSamples(track:CareerTrack,route:CareerRoute):{title:string;focus:string;body:string}[]{
  const destination=getCareerRouteSentence(route);
  return [
    {title:"예시 1 · 전문 제작 역량 중심",focus:"기초 학습 → 실무 작품 → 검증 → 진로",body:`저는 ${track.activities}에 관심이 있으며, ${track.role}를 목표로 하고 있습니다. 디미고 디지털콘텐츠과에서 ${track.basics}에 관해 배우며 기초를 다지겠습니다. 이후 ${track.advanced}에 관한 이해를 넓히고, 작업 과정과 수정 이유를 기록하겠습니다. 학교 프로젝트에서는 ${track.project}에 도전하고 싶습니다. 단순히 결과물을 완성하는 데 그치지 않고, 검증 과정과 결과를 ${track.validation}에 정리하여 의도한 메시지가 잘 전달되었는지 확인하겠습니다. 또한 ${track.collaboration}에 참여해 서로의 의견을 존중하고 작업을 개선하겠습니다. ${destination} 나아가 ${track.outcome} 창작자가 되고 싶습니다.`},
    {title:"예시 2 · 문제 해결과 사용자 반응 중심",focus:"대상 이해 → 제작 → 피드백 → 개선",body:`저는 ${track.role}라는 진로를 생각하고 있습니다. 특히 ${track.activities}에 관심이 많습니다. 디미고에서 ${track.basics}에 관한 내용을 학습하고, ${track.advanced}에 관한 실습을 심화하겠습니다. 가장 해 보고 싶은 활동은 ${track.project}입니다. 먼저 콘텐츠를 이용할 사람들의 필요를 조사하고, 기획 의도와 평가 기준을 분명히 정하겠습니다. 시제품을 완성한 뒤에는 직접 사용·시청한 사람들의 의견을 모아 표현과 구성을 수정하겠습니다. 검증 결과는 ${track.validation} 형태로 정리하고, ${track.collaboration}에 참여하며 다른 시각도 받아들이겠습니다. ${destination} 장기적으로는 ${track.outcome} 전문가가 되겠습니다.`},
    {title:"예시 3 · 3년간 성장과 사회적 기여 중심",focus:"학년별 학습 → 포트폴리오 → 공익 활용",body:`저는 ${track.role}를 희망합니다. 1학년에는 ${track.basics}를 익히고 작은 작품을 완성하며 기본기를 다지겠습니다. 2학년에는 ${track.advanced}에 관한 내용을 깊이 탐구하고, ${track.collaboration}에 참여하겠습니다. 3학년에는 ${track.project}를 진행해 기획부터 제작과 평가까지 경험하겠습니다. 작업 중 생긴 어려움과 해결 과정은 기록하고, 작품과 검증 과정을 ${track.validation}에 정리해 포트폴리오를 완성하겠습니다. 결과물을 여러 이용자에게 보여주고 피드백을 받아 개선하는 태도를 기르겠습니다. ${destination} 또한 ${track.contribution} 등을 실천하며 ${track.outcome} 콘텐츠 제작자로 성장하겠습니다.`},
  ];
}
