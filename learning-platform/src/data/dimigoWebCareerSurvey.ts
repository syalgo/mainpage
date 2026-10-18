export type CareerTrackId = "frontend" | "backend" | "fullstack" | "ai" | "cloud" | "quality";
export type CareerRoute = "employment" | "university" | "explore";
export type SurveyChoice={label:string;weights:Partial<Record<CareerTrackId,number>>};
export type SurveyQuestion={title:string;description:string;options:SurveyChoice[]};
export type CareerTrack={
 id:CareerTrackId;title:string;role:string;description:string;activities:string;
 basics:string;advanced:string;project:string;validation:string;collaboration:string;
 outcome:string;contribution:string;
};
export const careerTracks:CareerTrack[]=[
  {
    "id": "frontend",
    "title": "프론트엔드·웹 UI 개발",
    "role": "프론트엔드 개발자",
    "description": "웹 화면을 구현하고 반응형 화면·접근성·상호작용을 개선하는 분야",
    "activities": "누구나 쉽게 이해하고 이용할 수 있는 웹 화면을 만드는 일",
    "basics": "HTML·CSS·JavaScript와 웹 표준, Git 활용법",
    "advanced": "TypeScript, 반응형 웹, 컴포넌트 설계와 웹 접근성",
    "project": "학생들이 이용하는 정보 안내 웹사이트의 화면을 설계하고 모바일·키보드 조작까지 점검하는 프로젝트",
    "validation": "사용성 설문과 모바일 대응·접근성 점검 결과를 담은 개선 보고서",
    "collaboration": "디자인과 개발 역할을 나눠 화면 사용성을 반복 검토하는 활동",
    "outcome": "이용자의 입장에서 편리하고 접근 가능한 웹서비스를 만드는",
    "contribution": "누구나 쉽게 이용할 수 있는 학교 안내 웹페이지 제작"
  },
  {
    "id": "backend",
    "title": "백엔드·API·데이터베이스 개발",
    "role": "백엔드 개발자",
    "description": "로그인·데이터 저장·API 등 웹서비스가 안정적으로 동작하는 서버 기능을 구축하는 분야",
    "activities": "웹서비스 뒤에서 데이터와 기능이 정확하게 작동하도록 만드는 일",
    "basics": "Python 또는 JavaScript, 데이터베이스 기초와 HTTP 통신",
    "advanced": "서버 API 설계, 인증·권한, SQL과 데이터 무결성",
    "project": "동아리 활동 기록을 저장·조회하는 서버 API를 구현하고 입력값 검증·오류 처리를 시험하는 프로젝트",
    "validation": "API 테스트 결과와 데이터 오류 처리 사례를 정리한 기술 보고서",
    "collaboration": "프론트엔드 담당과 API 규격을 합의하고 기능을 통합하는 팀 활동",
    "outcome": "신뢰할 수 있는 서비스의 데이터 흐름과 서버 기능을 책임지는",
    "contribution": "학교의 소규모 활동 신청 시스템을 안전하고 편리하게 만드는 활동"
  },
  {
    "id": "fullstack",
    "title": "풀스택·문제 해결형 웹서비스",
    "role": "풀스택 웹서비스 개발자",
    "description": "화면·서버·데이터베이스를 연결해 하나의 서비스를 처음부터 끝까지 구현하는 분야",
    "activities": "생활 속 불편을 발견해 웹서비스로 직접 해결하는 일",
    "basics": "HTML·CSS·JavaScript, Python과 데이터베이스 기초",
    "advanced": "프론트엔드·백엔드 연동, API 설계와 배포·유지보수",
    "project": "학교 일정이나 공동 과제 관리를 돕는 웹앱을 기획하고 화면·저장 기능을 연결하는 프로젝트",
    "validation": "사용자 피드백과 기능 개선 이력을 정리한 서비스 개발 보고서",
    "collaboration": "기획·디자인·개발 역할을 조율하여 서비스를 완성하는 팀 프로젝트",
    "outcome": "문제를 발견하면 기술과 협업으로 서비스 전체를 구현하는",
    "contribution": "학교생활의 반복적인 불편을 해결하는 간단한 웹서비스"
  },
  {
    "id": "ai",
    "title": "AI 연동 웹앱·지능형 서비스",
    "role": "AI 응용 웹서비스 개발자",
    "description": "AI 모델·API를 웹서비스와 연결하고 출력의 정확성·안전성을 검증하는 분야",
    "activities": "AI를 웹서비스에 연결하여 복잡한 업무를 더 쉽게 해결하는 일",
    "basics": "Python·JavaScript, HTTP API와 데이터 처리 기초",
    "advanced": "AI API 연동, 프롬프트·응답 검증, 개인정보 보호와 평가 지표",
    "project": "학습 자료의 핵심 내용을 요약하고 근거를 표시하는 AI 웹앱을 구현해 실제 오류를 비교하는 프로젝트",
    "validation": "AI 답변의 오류·출처·개선 전후 정확성을 기록한 평가 보고서",
    "collaboration": "기획자·개발자·테스터가 함께 AI 응답 기준을 정하고 검증하는 활동",
    "outcome": "AI의 장점은 활용하고 오류는 직접 검증하는 책임 있는",
    "contribution": "학습 과정의 정보 탐색을 돕는 투명한 AI 웹 도구"
  },
  {
    "id": "cloud",
    "title": "클라우드·웹 배포·DevOps",
    "role": "클라우드·웹서비스 운영 엔지니어",
    "description": "웹 애플리케이션을 배포하고 자동화·모니터링으로 안정적 서비스 운영을 돕는 분야",
    "activities": "개발한 웹서비스를 안정적으로 배포하고 운영하는 일",
    "basics": "리눅스, Git, HTTP·DNS와 서버 운영 기초",
    "advanced": "클라우드 배포, CI/CD 자동화, 로그·성능 모니터링",
    "project": "팀 웹앱의 테스트·배포 절차를 자동화하고 장애 상황에서 복구 과정을 기록하는 프로젝트",
    "validation": "배포 성공률·오류 로그·복구 절차를 비교한 운영 점검 보고서",
    "collaboration": "개발팀과 테스트·배포 기준을 정하고 운영 문제를 함께 해결하는 활동",
    "outcome": "사용자가 서비스를 안정적으로 이용하도록 기술 기반을 관리하는",
    "contribution": "학교 동아리의 웹 프로젝트를 안정적으로 운영하도록 돕는 배포 안내"
  },
  {
    "id": "quality",
    "title": "웹 품질·접근성·테스트 자동화",
    "role": "웹 품질·테스트 자동화 엔지니어",
    "description": "오류·성능·접근성 문제를 찾아 자동화 테스트와 개선 기준을 설계하는 분야",
    "activities": "누구나 불편 없이 쓸 수 있도록 웹서비스의 오류를 찾아 개선하는 일",
    "basics": "JavaScript, 웹 표준, 테스트 케이스와 오류 재현 방법",
    "advanced": "자동화 테스트, 웹 성능 지표, WCAG 접근성 및 기초 보안 점검",
    "project": "학교 안내 웹페이지의 검색·입력·키보드 조작을 자동 테스트하고 오류를 수정하는 프로젝트",
    "validation": "오류 재현·수정 전후 성능과 접근성을 정리한 품질 보고서",
    "collaboration": "개발자와 오류의 재현 조건·우선순위를 공유하며 검증하는 팀 활동",
    "outcome": "품질과 사용자 신뢰를 높이는",
    "contribution": "다양한 학생이 편리하게 이용할 수 있는 웹 접근성 점검표"
  }
];
export const careerSurveyQuestions:SurveyQuestion[]=[
  {
    "title": "웹사이트를 볼 때 가장 흥미로운 부분은?",
    "description": "실력보다 순수한 관심을 기준으로 선택하세요.",
    "options": [
      {
        "label": "화면 구성과 버튼·애니메이션 같은 상호작용",
        "weights": {
          "frontend": 3,
          "backend": 1
        }
      },
      {
        "label": "로그인·검색·정보 저장이 작동하는 서버",
        "weights": {
          "backend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "처음부터 끝까지 연결된 하나의 웹서비스",
        "weights": {
          "fullstack": 3,
          "ai": 1
        }
      },
      {
        "label": "질문에 답하거나 추천해 주는 AI 기능",
        "weights": {
          "ai": 3,
          "cloud": 1
        }
      },
      {
        "label": "서비스가 끊기지 않고 배포·운영되는 과정",
        "weights": {
          "cloud": 3,
          "quality": 1
        }
      },
      {
        "label": "오류 없이 빠르고 누구나 쓸 수 있는 품질",
        "weights": {
          "quality": 3,
          "frontend": 1
        }
      }
    ]
  },
  {
    "title": "직접 만든다면 가장 해 보고 싶은 결과물은?",
    "description": "실제로 시간을 들여 완성해 보고 싶은 것 하나를 고르세요.",
    "options": [
      {
        "label": "반응형 디자인과 다양한 상호작용이 있는 웹페이지",
        "weights": {
          "frontend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "회원·게시글 데이터가 저장되는 서버 API",
        "weights": {
          "backend": 3,
          "ai": 1
        }
      },
      {
        "label": "학교생활 불편을 해결하는 통합 웹앱",
        "weights": {
          "fullstack": 3,
          "cloud": 1
        }
      },
      {
        "label": "학습 질문을 분석해 설명해 주는 AI 웹 도구",
        "weights": {
          "ai": 3,
          "quality": 1
        }
      },
      {
        "label": "자동 배포와 장애 알림이 설정된 웹서비스",
        "weights": {
          "cloud": 3,
          "frontend": 1
        }
      },
      {
        "label": "입력·검색 동작을 자동으로 검사하는 테스트 도구",
        "weights": {
          "quality": 3,
          "backend": 1
        }
      }
    ]
  },
  {
    "title": "코딩할 때 가장 뿌듯할 순간은?",
    "description": "문제를 해결하는 방식에 주목하세요.",
    "options": [
      {
        "label": "작은 디자인 개선으로 화면이 훨씬 편해질 때",
        "weights": {
          "frontend": 3,
          "backend": 1
        }
      },
      {
        "label": "복잡한 데이터 오류의 원인을 정확히 찾을 때",
        "weights": {
          "backend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "여러 기능을 연결해 하나의 서비스가 완성될 때",
        "weights": {
          "fullstack": 3,
          "ai": 1
        }
      },
      {
        "label": "AI 답변의 오류를 줄이고 유용성을 높일 때",
        "weights": {
          "ai": 3,
          "cloud": 1
        }
      },
      {
        "label": "배포 문제를 해결해 서비스가 안정적으로 열릴 때",
        "weights": {
          "cloud": 3,
          "quality": 1
        }
      },
      {
        "label": "테스트로 놓쳤던 버그를 재현해 수정할 때",
        "weights": {
          "quality": 3,
          "frontend": 1
        }
      }
    ]
  },
  {
    "title": "팀 프로젝트에서 맡고 싶은 역할은?",
    "description": "평소 행동보다는 앞으로 도전할 역할을 골라도 좋습니다.",
    "options": [
      {
        "label": "사용자 화면·컴포넌트 구현 및 디자인 협업",
        "weights": {
          "frontend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "데이터베이스·서버 기능 및 API 담당",
        "weights": {
          "backend": 3,
          "ai": 1
        }
      },
      {
        "label": "화면·서버·기획을 연결하는 전체 통합 담당",
        "weights": {
          "fullstack": 3,
          "cloud": 1
        }
      },
      {
        "label": "AI 기능의 입력·응답 처리와 결과 평가 담당",
        "weights": {
          "ai": 3,
          "quality": 1
        }
      },
      {
        "label": "Git 협업·자동 배포·서버 상태 확인 담당",
        "weights": {
          "cloud": 3,
          "frontend": 1
        }
      },
      {
        "label": "테스트 계획·접근성 검증·품질 기준 담당",
        "weights": {
          "quality": 3,
          "backend": 1
        }
      }
    ]
  },
  {
    "title": "가장 해결하고 싶은 웹서비스 문제는?",
    "description": "어떤 문제를 해결하는 개발자가 되고 싶나요?",
    "options": [
      {
        "label": "모바일에서 화면이 깨지거나 조작이 어려운 문제",
        "weights": {
          "frontend": 3,
          "ai": 1
        }
      },
      {
        "label": "로그인 오류와 데이터 저장 실패 문제",
        "weights": {
          "backend": 3,
          "cloud": 1
        }
      },
      {
        "label": "여러 기능이 따로 놀아 서비스 사용이 불편한 문제",
        "weights": {
          "fullstack": 3,
          "quality": 1
        }
      },
      {
        "label": "AI 답변이 틀리거나 근거를 제시하지 않는 문제",
        "weights": {
          "ai": 3,
          "frontend": 1
        }
      },
      {
        "label": "서비스 접속 장애와 배포 과정의 반복 실수",
        "weights": {
          "cloud": 3,
          "backend": 1
        }
      },
      {
        "label": "보이지 않는 오류로 특정 사용자가 이용하지 못하는 문제",
        "weights": {
          "quality": 3,
          "fullstack": 1
        }
      }
    ]
  },
  {
    "title": "고등학교에서 가장 배우고 싶은 주제는?",
    "description": "지금 잘 모르는 기술을 선택해도 됩니다.",
    "options": [
      {
        "label": "JavaScript·TypeScript·웹 UI·반응형 설계",
        "weights": {
          "frontend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "Python·SQL·서버·데이터베이스",
        "weights": {
          "backend": 3,
          "ai": 1
        }
      },
      {
        "label": "프론트엔드와 백엔드를 연결하는 통합 개발",
        "weights": {
          "fullstack": 3,
          "cloud": 1
        }
      },
      {
        "label": "인공지능 기초·AI API·데이터 활용",
        "weights": {
          "ai": 3,
          "quality": 1
        }
      },
      {
        "label": "리눅스·클라우드·CI/CD·서버 운영",
        "weights": {
          "cloud": 3,
          "frontend": 1
        }
      },
      {
        "label": "자동화 테스트·웹 접근성·품질 관리",
        "weights": {
          "quality": 3,
          "backend": 1
        }
      }
    ]
  },
  {
    "title": "어떤 방식으로 프로젝트 성과를 증명하고 싶나요?",
    "description": "완성했다는 주장보다 무엇으로 검증할지 선택하세요.",
    "options": [
      {
        "label": "다양한 화면 크기에서의 사용성 비교",
        "weights": {
          "frontend": 3,
          "backend": 1
        }
      },
      {
        "label": "API 테스트와 데이터 오류 처리 결과",
        "weights": {
          "backend": 3,
          "fullstack": 1
        }
      },
      {
        "label": "실제 사용자의 피드백과 기능 개선 이력",
        "weights": {
          "fullstack": 3,
          "ai": 1
        }
      },
      {
        "label": "AI의 정확도·오답·근거 검증 보고서",
        "weights": {
          "ai": 3,
          "cloud": 1
        }
      },
      {
        "label": "배포 로그·가동 시간·장애 복구 기록",
        "weights": {
          "cloud": 3,
          "quality": 1
        }
      },
      {
        "label": "자동화 테스트 통과율과 접근성 평가 결과",
        "weights": {
          "quality": 3,
          "frontend": 1
        }
      }
    ]
  },
  {
    "title": "기술로 다른 사람에게 가장 돕고 싶은 것은?",
    "description": "직업인으로서 추구할 가치를 생각하세요.",
    "options": [
      {
        "label": "누구나 보기 쉽고 직관적인 웹 화면 제공",
        "weights": {
          "frontend": 3,
          "ai": 1
        }
      },
      {
        "label": "개인정보와 중요 데이터를 정확히 처리하기",
        "weights": {
          "backend": 3,
          "cloud": 1
        }
      },
      {
        "label": "일상의 번거로운 절차를 웹서비스로 간소화하기",
        "weights": {
          "fullstack": 3,
          "quality": 1
        }
      },
      {
        "label": "사람들이 AI 정보를 안전하고 책임 있게 활용하도록 돕기",
        "weights": {
          "ai": 3,
          "frontend": 1
        }
      },
      {
        "label": "필요한 서비스가 언제든 안정적으로 열리도록 돕기",
        "weights": {
          "cloud": 3,
          "backend": 1
        }
      },
      {
        "label": "장애·기기 차이와 관계없이 웹을 사용할 수 있도록 돕기",
        "weights": {
          "quality": 3,
          "fullstack": 1
        }
      }
    ]
  }
];
export const careerRouteQuestion={
 title:"졸업 후 진로는 어떻게 생각하고 있나요?",
 options:[
  {value:"employment" as const,label:"웹·소프트웨어 관련 기업에 취업하여 실무를 배우고 싶어요."},
  {value:"university" as const,label:"컴퓨터공학·소프트웨어 관련 학과에 진학한 뒤 취업하고 싶어요."},
  {value:"explore" as const,label:"현장실습과 전공 탐구 후 취업·진학 경로를 정하고 싶어요."},
 ],
};
export function rankCareerTracks(answers:number[]){
 const scores=Object.fromEntries(careerTracks.map(t=>[t.id,0])) as Record<CareerTrackId,number>;
 careerSurveyQuestions.forEach((q,i)=>{const choice=q.options[answers[i]];if(!choice)return;
  Object.entries(choice.weights).forEach(([id,pt])=>{scores[id as CareerTrackId]+=pt??0;});
 });
 return [...careerTracks].sort((a,b)=>scores[b.id]-scores[a.id]||careerTracks.indexOf(a)-careerTracks.indexOf(b))
  .map(t=>({...t,score:scores[t.id]}));
}
export function getCareerRouteSentence(route:CareerRoute):string{
 if(route==="employment")return "졸업 후에는 웹·소프트웨어 분야의 직무에 지원해 실제 사용자의 문제를 해결하는 경험을 쌓고, 코드 품질과 협업 역량을 지속적으로 키우겠습니다.";
 if(route==="university")return "졸업 후에는 컴퓨터공학·소프트웨어 관련 전공을 심화하며 프로젝트와 현장 경험을 이어가고, 웹·소프트웨어 개발 직무에 취업하겠습니다.";
 return "고교 재학 중 프로젝트와 현장실습을 경험한 뒤 취업과 대학 진학 중 적합한 길을 선택하고, 최종적으로 웹서비스 개발 분야에서 일하겠습니다.";
}
export function makeCareerPlanSamples(track:CareerTrack,route:CareerRoute):{title:string;focus:string;body:string}[]{
 const destination=getCareerRouteSentence(route);
 return [
 {title:"예시 1 · 기술·직무 역량 중심",focus:"학습 계획 → 기능 구현 → 검증 → 취업 목표",body:`저는 ${track.activities}에 관심이 있으며, ${track.role}를 목표로 하고 있습니다. 디미고 웹프로그래밍과에서 ${track.basics}를 꾸준히 익혀 기초를 다지겠습니다. 이어 ${track.advanced}를 학습하고, 실습 결과와 오류 해결 과정을 Git 저장소에 기록하겠습니다. 교내 프로젝트에서는 ${track.project}에 도전하고 싶습니다. 기능을 구현했다는 데 만족하지 않고 ${track.validation}를 작성하여 실제 개선 효과를 확인하겠습니다. 또한 ${track.collaboration}에 참여해 서로의 코드를 검토하고 팀의 의견을 반영하겠습니다. ${destination} 나아가 ${track.outcome} 전문가로 성장하고 싶습니다.`},
 {title:"예시 2 · 프로젝트·문제 해결 중심",focus:"사용자 문제 정의 → 개발 → 테스트 → 개선",body:`제가 희망하는 직업은 ${track.role}입니다. 저는 ${track.activities}을 통해 사람들의 불편을 해결하고 싶습니다. 이를 위해 디미고에서 ${track.basics}를 체계적으로 익히고, ${track.advanced}에 대한 이해를 높이겠습니다. 가장 해보고 싶은 활동은 ${track.project}입니다. 먼저 사용자에게 필요한 기능을 조사하고 작은 기능부터 구현한 뒤, 예상과 다른 결과가 나오면 로그와 테스트를 통해 원인을 찾아 개선하겠습니다. 그 과정은 ${track.validation}로 정리해 다른 사람이 재현할 수 있도록 하겠습니다. 팀 활동에서는 ${track.collaboration}을 경험하며 소통하는 개발자가 되겠습니다. ${destination} 장기적으로는 ${track.outcome} 개발자가 되겠습니다.`},
 {title:"예시 3 · 학년별 성장·사회 기여 중심",focus:"1~3학년 성장 → 협업 → 사회적 활용",body:`저는 ${track.role}가 되어 ${track.activities}을 실천하고 싶습니다. 1학년에는 ${track.basics}를 배우고 간단한 기능을 직접 구현해 원리를 이해하겠습니다. 2학년에는 ${track.advanced}를 심화 학습하고, ${track.collaboration}에 참여하며 협업 습관을 기르겠습니다. 3학년에는 ${track.project}를 완성하는 것을 목표로 삼겠습니다. 구현 중 겪은 오류와 수정 과정을 기록하고, ${track.validation}를 바탕으로 기능을 다시 점검하겠습니다. 완성한 결과물은 이용자에게 시험해 보고 피드백을 받아 개선하겠습니다. ${destination} 또한 ${track.contribution}을 통해 배운 지식을 주변과 나누며, ${track.outcome} 개발자로 성장하고 싶습니다.`},
 ];
}
