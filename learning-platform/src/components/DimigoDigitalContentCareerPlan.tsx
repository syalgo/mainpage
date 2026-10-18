import styles from "./DimigoApplicationCareer.module.css";
import DimigoDigitalContentCareerInterestSurvey from "@/components/DimigoDigitalContentCareerInterestSurvey";

const results = [
  {name:"디지털콘텐츠과",graduates:32,university:"25명 (78.1%)",college:"전문대 2명 / 4년제 23명",employed:"3명 (9.4%)",others:4},
  {name:"웹프로그래밍과",graduates:63,university:"59명 (93.7%)",college:"전문대 0명 / 4년제 59명",employed:"4명 (6.3%)",others:0},
  {name:"해킹방어과",graduates:65,university:"59명 (90.8%)",college:"전문대 1명 / 4년제 58명",employed:"2명 (3.1%)",others:4},
  {name:"E-비즈니스과",graduates:30,university:"23명 (76.7%)",college:"전문대 0명 / 4년제 23명",employed:"2명 (6.7%)",others:5},
];
const subjects = [
  {area:"시각·그래픽",names:"컴퓨터그래픽",connection:"레이아웃·색·타이포그래피와 이미지 편집을 활용한 그래픽 표현"},
  {area:"영상 제작",names:"영상제작기초, 방송일반",connection:"영상 구성, 촬영·편집, 방송 콘텐츠 제작 흐름 이해"},
  {area:"애니메이션",names:"애니메이션콘텐츠제작",connection:"캐릭터의 움직임과 장면 연출, 애니메이션 제작 과정"},
  {area:"콘텐츠 기획·제작 선택",names:"광고 콘텐츠 제작, 음악 콘텐츠 제작, 방송 콘텐츠 제작",connection:"홍보 영상·음향·방송 등 관심 장르의 결과물 제작"},
  {area:"디지털 서비스 선택",names:"스마트 문화 앱 콘텐츠 제작, 프로그래밍·파이썬 프로그래밍",connection:"상호작용형 콘텐츠 및 앱·게임형 콘텐츠 제작의 기술적 기초"},
  {area:"AI·융합 기초",names:"인공지능기초, 인공지능일반",connection:"AI 기술의 개념과 콘텐츠 창작·평가의 책임 있는 활용"},
];
const trends = [
  {title:"생성형 AI와 창작자의 역할 변화",body:"한국콘텐츠진흥원은 2026년 전망 키워드로 ‘AI 리셋’을 제시했습니다. 이미지·영상 생성 도구를 활용하더라도 기획 의도, 원본의 출처, 편집 품질과 저작권·윤리를 직접 검증하는 역량이 중요합니다.",jobs:"AI 콘텐츠 제작자 · 영상 편집자 · 디지털 디자이너"},
  {title:"콘텐츠 IP와 캐릭터·브랜드 확장",body:"2026년 산업 전망의 ‘콘텐츠 IP 리그’는 원작·캐릭터·세계관이 장르와 플랫폼을 넘나들며 확장되는 흐름을 뜻합니다. 한 장면뿐 아니라 시리즈와 브랜드 경험을 일관되게 기획하는 능력이 필요합니다.",jobs:"캐릭터 디자이너 · 3D 아티스트 · 브랜드 디자이너"},
  {title:"게임·인터랙티브 콘텐츠",body:"콘진원은 2026년 게임콘텐츠 제작지원에 약 236억 원, 82개 내외 과제를 계획하고, 기능성 게임·AI 게임 분야를 포함했습니다. 재미와 사용자 학습·경험의 효과를 함께 검증할 수 있습니다.",jobs:"게임 콘텐츠 디자이너 · 게임 UI 디자이너"},
  {title:"XR·VR과 몰입형 경험",body:"2026년 뉴콘텐츠아카데미 쇼케이스에서는 AI, XR·VR, 인터랙티브 미디어아트 등 21개 팀의 프로젝트가 공개됐습니다. 3D 표현과 사용자가 직접 체험하는 스토리 설계가 연결됩니다.",jobs:"XR 콘텐츠 기획자 · 3D 제작자 · 인터랙티브 디자이너"},
  {title:"영상·음향·모션그래픽 융합",body:"짧은 영상·설명 영상부터 방송·홍보 콘텐츠까지 기획, 촬영, 자막, 음향, 모션그래픽을 일관되게 연결하는 제작 역량이 중요합니다. 매체별 크기와 시청 환경에 따른 이해도도 검증해야 합니다.",jobs:"영상 편집자 · 모션그래픽 디자이너 · 방송 콘텐츠 제작자"},
  {title:"이용자 중심 UI·UX와 접근성",body:"콘텐츠를 감상하는 것을 넘어 앱·웹에서 직접 참여하는 이용자 경험이 중요합니다. 디자인의 아름다움뿐 아니라 정보의 이해도, 화면 조작의 편리함, 접근성, 사용자 피드백을 함께 평가할 수 있습니다.",jobs:"UI·UX 디자이너 · 디지털 프로덕트 디자이너"},
];
const jobs = [
  ["영상 편집·모션그래픽 디자이너","영상 편집·자막·전환·모션그래픽으로 메시지 전달","미디어영상학·방송영상학·디지털미디어학"],
  ["그래픽·브랜드 디자이너","이미지·타이포그래피·광고·캐릭터 시각화","시각디자인학·커뮤니케이션디자인학"],
  ["3D 모델러·애니메이터","3D 모델링·움직임·렌더링·영상 효과 제작","애니메이션학·영상디자인학·게임그래픽학"],
  ["게임 그래픽·콘텐츠 디자이너","캐릭터·게임 UI·인터랙션·플레이 경험 기획","게임디자인학·게임콘텐츠학·디지털미디어학"],
  ["UI·UX 디자이너","앱·웹 화면 구조, 사용자 조사, 시제품·사용성 개선","UX디자인학·산업디자인학·HCI 관련 전공"],
  ["AI·XR 융합 콘텐츠 제작자","AI·AR·VR 기반 상호작용형 콘텐츠 기획·제작","디지털콘텐츠학·융합미디어학·실감미디어학"],
  ["방송·음향 콘텐츠 제작자","방송 기획, 음향 편집과 다양한 장르의 콘텐츠 제작","방송영상학·음향제작학·미디어콘텐츠학"],
];
const projects = [
  {topic:"학교 홍보·생활 안내 영상",job:"영상 편집·모션그래픽 디자이너",next:"시나리오·스토리보드 → 촬영·편집 → 시청자 이해도·자막 품질 개선"},
  {topic:"지역 행사·환경 캠페인 디자인",job:"그래픽·브랜드 디자이너",next:"디자인 콘셉트 수립 → 로고·포스터·카드뉴스 제작 → 대상자 전달력 비교"},
  {topic:"3D 캐릭터 기반 단편 애니메이션",job:"3D 콘텐츠·애니메이션 제작자",next:"캐릭터·배경 모델링 → 움직임·렌더링 → 피드백을 통한 장면 수정"},
  {topic:"안전 교육용 인터랙티브 게임",job:"게임 콘텐츠 디자이너",next:"플레이 규칙·화면 디자인 → 시제품 제작 → 이해도·난이도 플레이 테스트"},
  {topic:"학교 앱 UI·UX 리디자인",job:"UI·UX 디자이너",next:"사용자 불편 조사 → 화면 구성·시제품 → 이용자 과제 수행률 비교"},
  {topic:"AI·AR로 만드는 지역 문화 체험",job:"AI·XR 융합 콘텐츠 제작자",next:"지역 문화 조사 → 체험 시나리오·콘텐츠 제작 → 사용성·저작권·정보 정확성 검증"},
];
const sources = [
  {label:"디미고 2027학년도 신입생 입학전형요항 (학교 공식 확정안)",url:"https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1889&mi=13632"},
  {label:"디미고 디지털콘텐츠과 공식 학과 소개",url:"https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1870&mi=13575"},
  {label:"교육부 HIFIVE 디미고 디지털콘텐츠과 교육내용·관련 대학",url:"https://www.hifive.go.kr/search/schoolClassInfo.do?sch_seq=653"},
  {label:"디미고 2026학년도 전체 교육과정 편제표",url:"https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1865&mi=13566"},
  {label:"디미고 2027학년도 입학생 교육과정 편제표 게시판",url:"https://dimigo-h.goeas.kr/dimigo-h/na/ntt/selectNttList.do?bbsId=7007&mi=13791"},
  {label:"학교알리미: 학과별 졸업생 진로 원자료 확인",url:"https://www.schoolinfo.go.kr/"},
  {label:"2025년 11월 학교알리미 공시 학과별 재집계 (민간 분석)",url:"https://dlabgj.kr/dimigo"},
  {label:"한국콘텐츠진흥원 2026 콘텐츠산업 전망 발표 (NEXT K 2026)",url:"https://welcon.kocca.kr/ko/info/business/1956845"},
  {label:"한국콘텐츠진흥원 2026 K-콘텐츠 인재양성 로드맵",url:"https://welcon.kocca.kr/ko/info/business/1956962"},
  {label:"한국콘텐츠진흥원 2026 게임콘텐츠 제작지원",url:"https://welcon.kocca.kr/ko/info/business/1957176"},
  {label:"한국콘텐츠진흥원 2026 뉴콘텐츠아카데미 쇼케이스",url:"https://welcon.kocca.kr/ko/info/business/1958529"},
];
export default function DimigoDigitalContentCareerPlan(){
return <div className={styles.guide}>
<section className={styles.guideSection}>
<h2>01. 디지털콘텐츠과의 교육 목표 및 모집</h2>
<p>디지털콘텐츠과는 방송 장비 활용, 영상 편집, 컴퓨터그래픽, 애니메이션과 다양한 콘텐츠 제작을 통해 <strong>디지털 미디어를 기획하고 표현하는 인재</strong>를 양성하는 학과입니다. 교육부 HIFIVE는 영상 편집·3D·음악 등 콘텐츠 전반의 제작 역량을 교육 방향으로 설명합니다.</p>
<div className={styles.kpiGrid}>
<div className={styles.kpi}><span>2027학년도 모집 정원</span><b>29명</b><small>1개 학급</small></div>
<div className={styles.kpi}><span>진로적성 특별전형</span><b>8명</b><small>취업희망자 전형</small></div>
<div className={styles.kpi}><span>일반전형</span><b>21명</b><small>정원 내</small></div>
<div className={styles.kpi}><span>관심 역량</span><b style={{fontSize:"20px"}}>기획 + 제작</b><small>표현·기술·사용자 경험</small></div>
</div>
<div className={styles.note}><strong>취업(창업)계획서 핵심:</strong> 단순히 ‘디자인을 잘하는 사람이 되겠다’보다 <strong>어떤 콘텐츠를 만들고 누구에게 전달하며 어떤 기준으로 작품의 효과를 검증할 것인지</strong>를 설명하는 편이 설득력 있습니다. 최신 모집인원은 2027학년도 학교 입학전형요항 기준입니다.</div>
</section>

<section className={styles.guideSection}>
<h2>02. 졸업생 대학 진학·취업 현황</h2>
<p>아래는 <strong>2025년 11월 학교알리미 공시자료를 제3자가 학과별로 재집계한 수치</strong>입니다. 공식 원표를 직접 대조한 학과별 데이터가 아니므로 참고용으로 활용하세요.</p>
<div className={styles.kpiGrid}>
<div className={styles.kpi}><span>디지털콘텐츠과 졸업생</span><b>32명</b><small>공시 재집계 기준</small></div>
<div className={styles.kpi}><span>대학 진학</span><b>25명</b><small>78.1%</small></div>
<div className={styles.kpi}><span>4년제 대학</span><b>23명</b><small>전문대학 2명</small></div>
<div className={styles.kpi}><span>졸업 직후 취업</span><b>3명</b><small>전체 졸업생 대비 9.4%</small></div>
</div>
<p className={styles.muted}>진학·취업 이외 인원 4명. 표에 기재된 취업 비율은 전체 졸업생 대비 비율로서, 대학 진학자를 제외하고 계산하는 공식 ‘취업률’과는 다릅니다.</p>
<h3>디미고 학과별 진로 비교</h3>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>학과</th><th>졸업생</th><th>대학 진학</th><th>진학 유형</th><th>취업 (전체 대비)</th><th>기타</th></tr></thead>
<tbody>{results.map(x=><tr key={x.name}><td><strong>{x.name}</strong></td><td>{x.graduates}명</td><td>{x.university}</td><td>{x.college}</td><td>{x.employed}</td><td>{x.others}명</td></tr>)}</tbody></table></div>
<div className={styles.note}>대학 진학과 고졸 취업을 모두 검토할 수 있습니다. 다만 <strong>실제 대학 이름·전공별 진학 인원·기업별 취업 인원·취업 직무</strong>는 위 공시 재집계에서 확인되지 않았습니다. 특정 기업이나 대학을 검증된 학과 실적으로 소개하지 않습니다.</div>
</section>

<section className={styles.guideSection}>
<h2>03. 디지털콘텐츠과의 전공 관련 교과목</h2>
<p>학교 공식 <strong>2026학년도 전체 교육과정 편제표</strong>에서 디지털콘텐츠과와 관련된 교과목을 추렸습니다. 입학 학년도와 학년, 선택과목에 따라 수강 과목이 달라집니다. 2027학년도 입학생의 실제 편성은 학교가 2026년 8월 28일 게시한 별도 편제표를 확인해야 합니다.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>분야</th><th>편제표의 교과목·선택 과목</th><th>진로·활동 연계</th></tr></thead><tbody>{subjects.map(x=><tr key={x.area}><td><strong>{x.area}</strong></td><td>{x.names}</td><td>{x.connection}</td></tr>)}</tbody></table></div>
<p className={styles.muted}>‘광고 콘텐츠 제작·음악 콘텐츠 제작·방송 콘텐츠 제작·스마트 문화 앱 콘텐츠 제작’ 등은 이전 입학 연도 일부 선택과목 묶음에 나타납니다. 모든 학생이 이수하는 필수 과목이 아닙니다. Blender, Premiere Pro 등 소프트웨어 이름은 가능한 개인 학습 도구이지 학교 공식 교과목 이름이 아닙니다.</p>
<h3>학년별 추천 성장 계획</h3><p className={styles.muted}>다음은 학교의 확정 수업 시간표가 아니라 취업계획서 작성에 활용할 수 있는 3년간 목표 예시입니다.</p>
<div className={styles.steps}>
<div className={styles.step}><span>1학년 · 탐색</span><strong>디자인·영상·표현 기초</strong><p>컴퓨터그래픽·영상 제작 기초를 학습하고 작은 결과물을 만들어 표현 과정과 창작 의도를 기록합니다.</p></div>
<div className={styles.step}><span>2학년 · 심화</span><strong>관심 장르와 협업</strong><p>영상·애니메이션·UI·게임 중 관심 분야를 선택해 스토리보드와 제작 역할을 나누는 팀 프로젝트에 참여합니다.</p></div>
<div className={styles.step}><span>3학년 · 실전</span><strong>작품 제작·포트폴리오</strong><p>기획서·시제품·최종 결과물과 평가자료를 연결해 작품의 완성도와 발전 과정을 보여주는 포트폴리오를 만듭니다.</p></div>
</div>
<p>학교에서 소개하는 <strong>IT연구 동아리, 자율·창업 동아리, 방과후 활동</strong> 등을 활용한 탐구도 검토할 수 있습니다. 실제 개설과 참여 여부는 해당 학년도에 확인해야 합니다.</p>
</section>

<section className={styles.guideSection}>
<h2>04. 2026년 콘텐츠 산업 주요 트렌드</h2>
<p>한국콘텐츠진흥원의 2026년 전망·인재양성·게임·실감형 콘텐츠 지원 발표를 바탕으로, 미래 직무와 연결할 수 있는 6개 방향을 정리했습니다.</p>
<div className={styles.trendGrid}>{trends.map((t,i)=><article className={styles.trend} key={t.title}><b>{String(i+1).padStart(2,"0")}. {t.title}</b><p>{t.body}</p><p><strong>연관 직무:</strong> {t.jobs}</p></article>)}</div>
<div className={styles.note}><strong>산업 참고:</strong> 콘진원은 2026년 콘텐츠 지원 예산 7,050억 원(전년 대비 8.2% 증액)을 발표하고, AI 창작 인력·게임·IP·해외 진출 등을 강조했습니다. 이는 정책 예산과 산업 동향이지 특정 직무의 채용 규모나 개인 취업 가능성을 나타내는 값은 아닙니다.</div>
</section>

<section className={styles.guideSection}>
<h2>05. 구체적인 희망 직업과 관련 전공</h2>
<p>콘텐츠 제작은 시각적 표현만이 아니라 기획·편집·기술·사용자 평가를 포함합니다. 자신의 작업 성향에 맞는 세부 직무를 선택하여 고교 학습과 연결해 보세요.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>희망 직업</th><th>주요 업무</th><th>관련 대학 전공 예시</th></tr></thead><tbody>{jobs.map(([job,task,major])=><tr key={job}><td><strong>{job}</strong></td><td>{task}</td><td>{major}</td></tr>)}</tbody></table></div>
<h3>졸업 후 진로 선택</h3>
<div className={styles.flow}>
<article><strong>A. 고졸 취업</strong><p>포트폴리오·학교 프로젝트 → 관련 제작사·디자인사·콘텐츠 기업의 직무 탐색 → 실무 참여와 꾸준한 역량 향상</p></article>
<article><strong>B. 대학 진학 후 취업</strong><p>고교에서 기획·제작 기본기 축적 → 미디어영상·시각디자인·애니메이션·게임·융합콘텐츠 전공 심화 → 취업</p></article>
<article><strong>C. 콘텐츠 제작·창업</strong><p>작품 아이디어 → 시제품과 대상자 검증 → 콘텐츠 유통·저작권·비용 구조 검토 → 협업·사업화 가능성 탐색</p></article>
</div>
<p className={styles.muted}>위 내용은 학습·진로 설계를 위한 경로 예시이며 해당 학과의 취업·대학 진학·창업을 보장하지 않습니다.</p>
</section>

<section className={styles.guideSection}>
<h2>06. 프로젝트를 진로로 확장하는 방법</h2>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>학생 프로젝트 예시</th><th>연계 직업</th><th>확장·검증 방법</th></tr></thead><tbody>{projects.map(p=><tr key={p.topic}><td><strong>{p.topic}</strong></td><td>{p.job}</td><td>{p.next}</td></tr>)}</tbody></table></div>
<p>제작 툴을 많이 사용했다는 사실보다 <strong>어떤 문제를 해결하기 위해 왜 그런 표현을 선택했는지, 다른 사람의 반응으로 무엇을 수정했는지, 결과물이 어떤 도움을 주었는지</strong>가 드러나도록 작성합니다.</p>
</section>

<section className={styles.guideSection}>
<h2>07. 취업(창업)계획서 작성 순서</h2>
<ol className={styles.bullets}>
<li><strong>희망 직무:</strong> 영상·그래픽·애니메이션·게임·UI/UX·AI/XR 중 어떤 분야의 제작자가 되고 싶은가요?</li>
<li><strong>관심 계기:</strong> 어떤 콘텐츠를 접하거나 제작하면서 흥미를 느꼈나요?</li>
<li><strong>학교 교육:</strong> 컴퓨터그래픽·영상제작기초·애니메이션콘텐츠제작 등을 어떤 능력으로 연결하고 싶나요?</li>
<li><strong>창작 활동:</strong> 어떤 콘셉트와 대상을 위해 어떤 작품을 기획·제작할 예정인가요?</li>
<li><strong>협력과 검증:</strong> 팀에서 맡을 역할과 이용자·시청자의 피드백을 어떻게 반영할 건가요?</li>
<li><strong>졸업 이후:</strong> 어떤 작품집과 경험을 준비하여 취업·진학·창업 경로를 선택할 건가요?</li>
<li><strong>사회적 가치:</strong> 작품을 통해 누구에게 어떤 정보·경험·즐거움을 전하고 싶은가요?</li>
</ol>
<h3>막연한 표현에서 구체적인 계획으로</h3>
<p><strong>막연한 표현:</strong> “멋진 디자이너가 되어 많은 사람들이 제 작품을 좋아하게 만들겠습니다.”</p>
<div className={styles.note}><strong>구체적인 표현 예시:</strong> “많은 사람이 이해하기 어려워하는 학교생활 정보를 그림과 영상으로 쉽고 정확하게 전달하는 디자이너를 목표로 합니다. 디미고에서 컴퓨터그래픽과 영상제작기초를 배우고, 학생들의 의견을 바탕으로 안내용 카드뉴스와 짧은 영상을 제작하겠습니다. 시청자의 이해도와 피드백을 조사해 장면 구성과 정보 전달 방식을 개선하며, 사용자 중심의 콘텐츠 제작 역량을 기르겠습니다.”</div>
<p className={styles.muted}>예시문은 글쓰기 방향 참고용입니다. 학생의 실제 경험과 실현 가능한 학습·제작 계획을 사용하고, 모집요강의 글자 수·금지 사항을 별도 확인하세요.</p>
</section>

<section className={styles.guideSection}>
<h2>08. 조사 자료 및 공식 원문</h2>
<p>학교의 입학·교육과정과 대학 진학·취업 공시 재집계, 콘텐츠 산업 정책 자료를 출처별로 구분하여 확인할 수 있습니다.</p>
<div className={styles.sourceList}>{sources.map(x=><a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer">{x.label} ↗</a>)}</div>
<p className={styles.muted}>자료 정리 기준일: 2026년 10월 18일. 진학·취업 수치는 2025년 11월 공시의 비공식 재집계입니다. 공식 교육과정은 실제 입학 연도와 선택과목 편성에 따라 달라질 수 있습니다.</p>
</section>
<DimigoDigitalContentCareerInterestSurvey />
</div>;
}
