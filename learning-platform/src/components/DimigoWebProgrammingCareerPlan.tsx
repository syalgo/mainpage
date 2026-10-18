import styles from "./DimigoApplicationCareer.module.css";
import DimigoWebCareerInterestSurvey from "@/components/DimigoWebCareerInterestSurvey";

const results=[
 {name:"웹프로그래밍과",graduates:63,university:"59명 (93.7%)",employed:"4명 (6.3%)",others:0},
 {name:"해킹방어과",graduates:65,university:"59명 (90.8%)",employed:"2명 (3.1%)",others:4},
 {name:"E-비즈니스과",graduates:30,university:"23명 (76.7%)",employed:"2명 (6.7%)",others:5},
 {name:"디지털콘텐츠과",graduates:32,university:"25명 (78.1%)",employed:"3명 (9.4%)",others:4},
];
const subjects=[
 {area:"프로그래밍·알고리즘",names:"프로그래밍, 파이썬 프로그래밍, 자료구조, 정보과학",connection:"문제 해결 능력, 프로그램 설계, 실행 효율 개선"},
 {area:"컴퓨터 시스템",names:"컴퓨터구조, 컴퓨터시스템일반",connection:"프로그램 실행 환경과 서버 작동 원리 이해"},
 {area:"네트워크",names:"정보통신",connection:"HTTP·네트워크 기초와 웹서비스 간 통신 이해"},
 {area:"응용 개발",names:"응용프로그래밍개발",connection:"웹·앱 기능 구현, 테스트, 협업과 유지보수"},
 {area:"데이터베이스",names:"데이터베이스프로그래밍",connection:"정보 저장·조회, 데이터 모델 설계, 서버 연동"},
 {area:"인공지능",names:"인공지능기초, 인공지능일반",connection:"AI의 개념을 이해하고 웹서비스의 AI 기능 기획·검증"},
 {area:"프로젝트·융합",names:"인공지능과 피지컬 컴퓨팅, 공업수학 등",connection:"소프트웨어를 실생활 문제와 연결하는 융합 프로젝트"},
];
const trends=[
 {title:"AI 코딩 도구와 사람 중심 코드 검증",body:"Stack Overflow의 2026년 개발자 설문에서 응답자의 66%가 코딩 보조·에이전트 도구를 사용한다고 답했습니다. AI가 생성한 코드를 읽고 오류·보안·성능을 검증하는 역량이 중요합니다.",jobs:"웹 개발자 · AI 응용 개발자"},
 {title:"AI 기능을 포함한 웹서비스",body:"질의응답, 추천, 검색 보조와 같은 AI 기능을 웹 인터페이스와 API로 연결하는 개발입니다. 기능 구현뿐 아니라 답변의 정확성·출처·개인정보 처리 문제를 확인해야 합니다.",jobs:"AI 응용 웹 개발자 · 풀스택 개발자"},
 {title:"클라우드와 SaaS 기반 서비스",body:"KISDI의 2026년 ICT 전망은 AI·클라우드 서비스 확산을 소프트웨어 산업의 성장 요인으로 분석합니다. 서비스를 배포·운영·모니터링하는 기본기를 함께 갖추는 것이 좋습니다.",jobs:"백엔드 개발자 · 클라우드 엔지니어"},
 {title:"소프트웨어 공급망과 안전한 개발",body:"KISA는 2026년 SW 공급망 보안 강화 로드맵을 발표했습니다. 라이브러리·배포·권한·의존성 관리까지 소프트웨어 개발 과정의 보안이 중요해지고 있습니다.",jobs:"웹 개발자 · DevSecOps 엔지니어"},
 {title:"반응형 웹과 웹 접근성",body:"W3C의 WCAG 2.2는 장애·기기·입력 방식이 달라도 서비스를 이용할 수 있도록 하는 웹 접근성 표준입니다. 사용성과 접근성은 화면을 구현할 때 함께 검토해야 합니다.",jobs:"프론트엔드 개발자 · 웹 품질 엔지니어"},
 {title:"자동화 테스트·안정성·품질 관리",body:"서비스 기능이 많아질수록 자동화 테스트·오류 재현·성능 측정이 중요해집니다. OWASP Top 10:2025가 다루는 인증·접근제어·설정 오류 등도 웹 개발자가 고려할 위험입니다.",jobs:"QA 자동화 엔지니어 · 풀스택 개발자"},
];
const jobs=[
 ["프론트엔드 개발자","웹 화면, 상호작용, 반응형 UI와 접근성 구현","컴퓨터공학·소프트웨어학·HCI 관련 전공"],
 ["백엔드 개발자","API, 인증, 서버, 데이터베이스 설계·운영","컴퓨터공학·소프트웨어학"],
 ["풀스택 개발자","화면·서버·DB를 연결한 전체 서비스 개발","컴퓨터공학·소프트웨어학"],
 ["AI 응용 웹 개발자","AI 모델·API를 웹서비스와 연결하고 성능 검증","소프트웨어학·인공지능학·컴퓨터공학"],
 ["클라우드·DevOps 엔지니어","웹 배포 자동화, 모니터링, 운영 안정성 관리","컴퓨터공학·정보통신공학"],
 ["웹 품질·테스트 자동화 엔지니어","기능 테스트·오류 재현·접근성 점검 자동화","소프트웨어학·컴퓨터공학"],
 ["서비스형 소프트웨어 개발자","기업·학교 등 사용자를 위한 구독형 웹서비스 제작","소프트웨어학·경영정보학"],
];
const projects=[
 {topic:"학교생활·과제 관리 웹앱",job:"풀스택 개발자",direction:"사용자 불편 조사 → 로그인·일정·알림 구현 → 사용자 테스트로 기능 개선"},
 {topic:"AI 학습 도우미 웹서비스",job:"AI 응용 웹 개발자",direction:"AI API 연동 → 응답 출처·오답 평가 → 사용자 입력 보안·개인정보 보호 개선"},
 {topic:"안전한 로그인·게시판 구현",job:"백엔드 개발자",direction:"데이터 모델·로그인 권한 설계 → 유효성 검사·오류 처리 → 테스트 보고서 작성"},
 {topic:"장애 학생을 위한 접근성 웹페이지",job:"프론트엔드·접근성 엔지니어",direction:"키보드 이동·스크린리더·색 대비 점검 → WCAG 기준 참고 → 사용자 피드백 반영"},
 {topic:"자동 배포 및 서비스 상태 확인 시스템",job:"클라우드·DevOps 엔지니어",direction:"Git 협업 → 테스트·배포 자동화 → 장애 알림·복구 절차 기록"},
 {topic:"동아리 프로젝트 통합·검색 플랫폼",job:"풀스택·백엔드 개발자",direction:"자료 분류·검색 설계 → 데이터베이스·API 구축 → 검색 정확성·성능 비교"},
];
const sources=[
 {label:"디미고 2027학년도 9월 확정 입학전형 공고",url:"https://www.goeas.kr/dimigo-h/na/ntt/selectNttInfo.do?bbsId=6915&mi=13631&nttSn=1527496"},
 {label:"교육부 HIFIVE - 웹프로그래밍학과 교육내용 및 관련 전공",url:"https://www.hifive.go.kr/search/schoolClassInfo.do?sch_seq=653"},
 {label:"디미고 2026학년도 전체 교육과정 편제표 (학과별)",url:"https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1865&mi=13566"},
 {label:"디미고 2027학년도 입학생 교육과정 편제표 게시판",url:"https://dimigo-h.goeas.kr/dimigo-h/na/ntt/selectNttList.do?bbsId=7007&mi=13791"},
 {label:"학교알리미 공식 진학·취업 공시 자료 검색",url:"https://www.schoolinfo.go.kr/"},
 {label:"2025년 11월 공시 재집계 (비공식 학과별 자료)",url:"https://dlabgj.kr/dimigo"},
 {label:"Stack Overflow 2026 Developer Survey: AI 활용과 개발 현황",url:"https://survey.stackoverflow.co/2026/ai"},
 {label:"KISDI 2026 ICT 산업 전망 (소프트웨어·클라우드 시장)",url:"https://www.kisdi.re.kr/eng/report/e/fileView.do?arrMasterId=3934545&id=1945136&key=m2102103222221"},
 {label:"KISA 2026 SW 공급망 보안 강화 로드맵",url:"https://www.kisa.or.kr/2060204/form?lang_type=KO&postSeq=24"},
 {label:"W3C 웹 접근성 권고 WCAG 2.2",url:"https://www.w3.org/TR/WCAG22/"},
 {label:"OWASP Top 10:2025 웹 애플리케이션 주요 보안 위험",url:"https://top10.owasp.org/2025/ko/"},
];
export default function DimigoWebProgrammingCareerPlan(){
return <div className={styles.guide}>
<section className={styles.guideSection}>
<h2>01. 웹프로그래밍과의 교육 목표</h2>
<p>디미고 웹프로그래밍과는 프로그래밍·정보통신·데이터베이스 지식을 바탕으로 <strong>웹·소프트웨어 서비스를 설계하고 개발하는 인재</strong>를 양성하는 학과입니다. 교육부 HIFIVE 학과 소개는 정보통신 서비스 기술과 관련한 다양한 프로그래밍 및 서버 구축 학습을 제시하고 있습니다.</p>
<div className={styles.note}><strong>취업계획서 핵심:</strong> ‘개발자가 되겠다’는 선언보다는 <strong>어떤 개발 직무에서, 누구의 어떤 문제를, 어떤 기술과 검증 방법으로 해결할 것인지</strong>를 밝혀야 합니다. 웹 화면·서버·데이터·AI·운영·품질 가운데 관심 있는 분야를 좁혀 보는 것이 좋습니다.</div>
</section>

<section className={styles.guideSection}>
<h2>02. 웹프로그래밍과 졸업생 대학 진학·취업 현황</h2>
<p>아래는 <strong>2025년 11월 학교알리미 진로 공시를 민간에서 학과별로 재집계한 자료</strong>입니다. 공식 원표를 직접 대조한 수치는 아니므로 참고 통계로 활용하세요.</p>
<div className={styles.kpiGrid}>
<div className={styles.kpi}><span>웹프로그래밍과 졸업생</span><b>63명</b><small>공시 재집계</small></div>
<div className={styles.kpi}><span>대학 진학</span><b>59명</b><small>93.7%</small></div>
<div className={styles.kpi}><span>4년제 대학</span><b>59명</b><small>전문대학 진학 0명</small></div>
<div className={styles.kpi}><span>취업</span><b>4명</b><small>졸업생 대비 6.3%</small></div>
</div>
<p className={styles.muted}>진학·취업 외 인원은 0명으로 집계됩니다. 6.3%는 졸업생 전체 대비 취업 비율이며, 진학자를 제외하여 계산하는 공식 취업률과는 다른 수치입니다.</p>
<h3>디미고 학과별 진로 비교</h3>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>학과</th><th>졸업생</th><th>대학 진학</th><th>취업 (졸업생 대비)</th><th>기타</th></tr></thead><tbody>{results.map(item=><tr key={item.name}><td><strong>{item.name}</strong></td><td>{item.graduates}명</td><td>{item.university}</td><td>{item.employed}</td><td>{item.others}명</td></tr>)}</tbody></table></div>
<div className={styles.note}>대학 진학자가 많은 학과이지만 취업(창업)계획서에서는 <strong>희망 직무와 실무 역량</strong>을 중심으로 계획을 세우는 것이 좋습니다. 학과별 <strong>대학 이름·전공별 진학 인원·취업 기업명</strong>은 확인한 재집계 자료에 없으므로 실제 졸업생 진출 사례로 임의 기재하지 않습니다.</div>
</section>

<section className={styles.guideSection}>
<h2>03. 웹프로그래밍과 전공 관련 교과목</h2>
<p>학교 공식 <strong>2026학년도 전체 교육과정 편제표</strong>에 실린 웹프로그래밍과 관련 과목을 모았습니다. 학년별 편성·선택 묶음이 있으므로 모든 학생의 필수 이수 과목으로 해석하면 안 되며, <strong>2027학년도 입학생은 최신 편제표로 다시 확인</strong>해야 합니다.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>영역</th><th>학교 편제표의 과목</th><th>취업계획서와의 연결</th></tr></thead><tbody>{subjects.map(item=><tr key={item.area}><td><strong>{item.area}</strong></td><td>{item.names}</td><td>{item.connection}</td></tr>)}</tbody></table></div>
<p className={styles.muted}>HTML·CSS·JavaScript·React·Node.js·SQL 등의 기술 이름은 학과에서 적용할 수 있는 학습·프로젝트 목표의 예시이지, 학교가 해당 명칭의 정규 교과목을 모두 개설한다는 뜻은 아닙니다.</p>
<h3>3년간의 추천 성장 계획</h3>
<div className={styles.steps}>
<article className={styles.step}><span>1학년 · 기초</span><strong>프로그래밍·웹 기본기</strong><p>프로그래밍과 정보통신 기초를 익히고 작은 웹페이지를 제작하며 Git으로 작업을 정리합니다.</p></article>
<article className={styles.step}><span>2학년 · 심화</span><strong>서버·데이터·협업</strong><p>자료구조와 데이터베이스 원리를 학습하고 API와 화면을 연결하는 팀 프로젝트를 진행합니다.</p></article>
<article className={styles.step}><span>3학년 · 실전</span><strong>서비스 완성과 품질 검증</strong><p>웹서비스를 배포하고 성능·보안·사용성을 점검하여 포트폴리오와 기술 보고서를 완성합니다.</p></article>
</div>
<p className={styles.muted}>위 계획은 공식 학년별 시간표가 아니라 학생이 세울 수 있는 학습 계획 예시입니다. 학교의 IT전공UP·IT연구 동아리 등은 실제 개설 여부와 참여 조건을 확인한 뒤 작성합니다.</p>
</section>

<section className={styles.guideSection}>
<h2>04. 2026년 웹 개발·소프트웨어 산업 트렌드</h2>
<p>KISDI, KISA, W3C, OWASP 및 2026년 개발자 설문을 중심으로 정리한 기술 동향입니다. 시장 전망 수치를 학생 개인의 취업 보장으로 해석해서는 안 됩니다.</p>
<div className={styles.trendGrid}>{trends.map((t,index)=><article className={styles.trend} key={t.title}><b>{String(index+1).padStart(2,"0")}. {t.title}</b><p>{t.body}</p><p><strong>연관 직무:</strong> {t.jobs}</p></article>)}</div>
<div className={styles.note}>KISDI의 2026년 전망에서는 국내 소프트웨어 생산액을 약 <strong>101.5조 원, 전년 대비 3.2% 성장</strong>으로 예상합니다. 이는 전망치이며, 실제 결과나 웹프로그래밍과 졸업생 채용 수치가 아닙니다.</div>
</section>

<section className={styles.guideSection}>
<h2>05. 구체적인 웹 개발 직무와 관련 대학 전공</h2>
<p>‘웹 개발자’라는 큰 이름 안에도 일의 내용이 다릅니다. 가장 재미있게 탐구할 수 있는 분야를 선택하고, 해당 직무의 기술과 작업 결과물을 중심으로 계획하세요.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>희망 직업</th><th>주요 업무</th><th>관련 대학 전공 예시</th></tr></thead><tbody>{jobs.map(([job,task,major])=><tr key={job}><td><strong>{job}</strong></td><td>{task}</td><td>{major}</td></tr>)}</tbody></table></div>
<div className={styles.flow}>
<article><strong>A. 고졸 취업</strong><p>전공 교과·팀 프로젝트 → 현장실습 및 개발 직무 탐색 → 프론트엔드·백엔드·테스트·운영 등 실무 진입</p></article>
<article><strong>B. 대학 진학 후 취업</strong><p>디미고에서 프로그래밍·프로젝트 기초 형성 → 컴퓨터공학·소프트웨어 관련 전공 심화 → 개발 인턴십·취업</p></article>
</div>
<p className={styles.muted}>위 학과명과 직무는 진로 설계를 위한 예시로, 디미고 출신의 실제 진학·취업 대학·기업 목록이 아닙니다.</p>
</section>

<section className={styles.guideSection}>
<h2>06. 웹 개발 프로젝트를 진로로 확장하는 방법</h2>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>프로젝트 소재</th><th>추천 진로</th><th>후속 탐구 방향</th></tr></thead><tbody>{projects.map(p=><tr key={p.topic}><td><strong>{p.topic}</strong></td><td>{p.job}</td><td>{p.direction}</td></tr>)}</tbody></table></div>
<p>외부 기술을 많이 사용했다는 사실보다 <strong>직접 구현한 핵심 기능, 오류를 분석한 과정, 실제 사용자 피드백, 수정 전후의 차이</strong>를 구체적으로 설명하는 편이 설득력 있습니다.</p>
</section>

<section className={styles.guideSection}>
<h2>07. 취업(창업)계획서 작성 순서</h2>
<ol className={styles.bullets}>
<li><strong>희망 직무:</strong> 화면 개발·서버·풀스택·AI 웹앱·클라우드·테스트 중 무엇에 관심이 있나요?</li>
<li><strong>동기:</strong> 어떤 생활 문제나 개발 경험으로 관심을 갖게 되었나요?</li>
<li><strong>기술 학습:</strong> 프로그래밍·자료구조·데이터베이스 등을 어떻게 배울 건가요?</li>
<li><strong>교내 프로젝트:</strong> 실제로 어떤 기능을 만들고 누구에게 사용해 보게 할 건가요?</li>
<li><strong>검증과 협업:</strong> 어떤 테스트와 사용자 의견으로 결과를 개선할 건가요?</li>
<li><strong>졸업 후 경로:</strong> 관련 직무로 취업하거나 전공을 심화하기 위해 무엇을 준비할 건가요?</li>
<li><strong>사회적 가치:</strong> 어떤 사람들의 이용 편의·안전·정보 접근성을 높이고 싶나요?</li>
</ol>
<h3>문장 개선 예시</h3>
<p><strong>막연한 표현:</strong> “웹프로그래밍과에서 코딩을 잘 배워 뛰어난 개발자가 되겠습니다.”</p>
<div className={styles.note}><strong>구체적인 표현 예시:</strong> “학교생활에서 반복되는 일정 확인과 과제 공유의 불편을 웹서비스로 해결하고 싶습니다. 디미고에서 프로그래밍과 자료구조·데이터베이스 원리를 충실히 배우고, 사용자가 직접 입력·조회할 수 있는 서비스를 팀으로 만들겠습니다. 오류와 사용성 문제를 테스트하여 개선한 뒤, 이용자에게 필요한 서비스를 꾸준히 개발하는 풀스택 개발자로 성장하고 싶습니다.”</div>
<p className={styles.muted}>예시는 글쓰기 구조를 보여주기 위한 것으로, 지원자가 실제로 경험한 일이나 실행할 수 있는 계획으로 직접 수정해야 합니다. 제출 분량·기재 제한은 해당 연도 입학전형요항을 반드시 확인하세요.</p>
</section>

<section className={styles.guideSection}>
<h2>08. 조사 자료 및 공식 원문</h2>
<p>학교 공식 자료, 학교알리미 재집계 자료, 산업·개발 표준 자료를 구분해 확인할 수 있습니다.</p>
<div className={styles.sourceList}>{sources.map(src=><a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer">{src.label} ↗</a>)}</div>
<p className={styles.muted}>자료 정리 기준일: 2026년 10월 18일. 진학·취업 통계는 2025년 11월 학교알리미 공시의 민간 재집계로 원자료 직접 대조 전이며, 최신 입학생 교육과정은 학교 게시판에서 확인해야 합니다.</p>
</section>

<DimigoWebCareerInterestSurvey />
</div>;
}
