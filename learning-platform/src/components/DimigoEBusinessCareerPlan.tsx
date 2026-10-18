import styles from "./DimigoApplicationCareer.module.css";
import DimigoBusinessCareerInterestSurvey from "@/components/DimigoBusinessCareerInterestSurvey";

const results=[
  {department:"E-비즈니스과",graduate:30,university:"23명 (76.7%)",employment:"2명 (6.7%)",other:5},
  {department:"디지털콘텐츠과",graduate:32,university:"25명 (78.1%)",employment:"3명 (9.4%)",other:4},
  {department:"웹프로그래밍과",graduate:63,university:"59명 (93.7%)",employment:"4명 (6.3%)",other:0},
  {department:"해킹방어과",graduate:65,university:"59명 (90.8%)",employment:"2명 (3.1%)",other:4},
];
const subjects=[
  {area:"경제·경영·회계",names:"상업경제, 회계원리, 회계정보처리시스템, 회계실무",connection:"비용·수익·예산·거래 기록을 이해하고 사업성을 평가하는 기본기"},
  {area:"마케팅·광고",names:"마케팅과 광고",connection:"고객 이해, 브랜드 메시지와 마케팅 성과 분석"},
  {area:"국제 비즈니스",names:"무역일반, 수출입관리, 비즈니스 영어",connection:"해외 전자상거래, 글로벌 유통·거래 과정 이해"},
  {area:"인공지능·데이터",names:"인공지능기초, 인공지능일반",connection:"AI 활용, 디지털 비즈니스의 데이터 기반 의사결정"},
  {area:"콘텐츠·디지털 표현",names:"컴퓨터그래픽, 영상제작기초, 방송일반",connection:"제품·서비스를 설명하는 콘텐츠 제작과 비즈니스 홍보"},
  {area:"선택과목·융합",names:"빅데이터 분석, 청소년 기업가정신, 파이썬 프로그래밍 등 편제표상 선택 과목",connection:"데이터 분석, 창업 아이디어 검증, 서비스 자동화"},
];
const trends=[
  {title:"온라인 유통·전자상거래 성장",description:"2025년 주요 유통업체 매출에서 온라인 비중은 약 59%였으며, 온라인 매출 증가율은 전년 대비 11.8%로 집계되었습니다. 온라인 거래와 사용자 경험을 개선하는 역량이 중요합니다.",jobs:"전자상거래 운영 · 유통 플랫폼 기획"},
  {title:"데이터 기반 경영·고객 분석",description:"과학기술정보통신부의 2025 데이터산업현황조사는 국내 데이터산업 시장을 약 33.2조 원(2025년 추정치)으로 파악했습니다. 데이터를 해석하고 판단 근거를 제시하는 역량이 요구됩니다.",jobs:"비즈니스 데이터 분석 · CRM 분석"},
  {title:"AI 활용 서비스·업무 혁신",description:"2026년 정부는 소상공인의 AI 활용 모델부터 비즈니스 모델 구현까지 지원하는 사업을 공고했습니다. AI 기능 자체보다 현장 문제를 해결하는 활용 능력이 중요합니다.",jobs:"AI 서비스 기획 · 디지털 전환 기획"},
  {title:"디지털 마케팅·개인화",description:"광고 성과와 이용자 반응을 측정해 서비스와 캠페인을 개선하는 분야입니다. 개인정보 보호, 과장 광고 예방, 사용자 동의 등 윤리적 판단도 함께 고려해야 합니다.",jobs:"디지털 마케팅 기획 · 그로스 마케팅"},
  {title:"핀테크·합리적 소비 지원",description:"간편결제, 소비 기록, 자산 관리 등 디지털 금융 서비스를 설계할 때 사용자가 이해하기 쉬운 안내와 안전한 데이터 활용이 중요합니다.",jobs:"핀테크 서비스 기획 · 금융 서비스 운영"},
  {title:"스타트업·창업 모델 검증",description:"중소벤처기업부는 2026년 AI 활용을 통한 서비스·제품 차별화와 창업 지원 사업을 추진했습니다. 아이디어를 시제품으로 만들고 고객 반응으로 검증하는 경험이 연결됩니다.",jobs:"디지털 서비스 창업 · 사업개발"},
];
const jobs=[
  ["비즈니스 데이터 분석가","판매·고객·서비스 데이터를 분석해 의사결정 지원","경영정보학·통계학·데이터사이언스"],
  ["전자상거래 운영 전문가","온라인 판매, 주문·배송, 고객 관리 개선","전자상거래학·경영학·유통물류학"],
  ["디지털 마케팅 기획자","고객 분석, 광고·브랜드 전략과 성과 측정","경영학·광고홍보학·마케팅 관련 전공"],
  ["디지털 서비스 기획자(PM)","사용자 문제 정의, 기능 기획, 서비스 개선","경영정보학·컴퓨터공학·경영학"],
  ["핀테크 서비스 기획자","결제·소비 관리 서비스를 쉽고 안전하게 설계","경제학·금융학·경영정보학"],
  ["무역·글로벌 이커머스 담당","해외 판매·수출입·유통 운영","국제통상학·무역학·경영학"],
  ["디지털 스타트업 창업가","고객 조사·시제품·사업모델 수립과 운영","경영학·창업학·융합 소프트웨어"],
];
const projects=[
 {project:"합리적인 선택을 돕는 스마트 소비 관리 서비스",job:"핀테크 서비스 기획자 · 데이터 기반 서비스 기획자",next:"가상 소비 데이터를 분류하고 예산 알림·의사결정 기준을 검증하며 사용자 피드백을 반영"},
 {project:"온라인 쇼핑몰 구매 경험 개선",job:"전자상거래 운영 전문가 · 디지털 서비스 기획자",next:"고객 여정 설계, 주문 이탈 지점 분석, 검색·결제 화면 시제품 및 사용성 실험"},
 {project:"AI 기반 맞춤형 제품·콘텐츠 추천",job:"AI 비즈니스 기획자 · 비즈니스 데이터 분석가",next:"가상·동의받은 데이터로 추천 기준을 설계하고 정확성·편향·개인정보 위험을 검토"},
 {project:"소상공인 홍보·매출 분석 대시보드",job:"디지털 마케팅 기획자 · 데이터 분석가",next:"가상 광고·매출 지표를 시각화하고 채널별 효율과 개선안을 비교"},
 {project:"지역 문제 해결 창업 서비스",job:"디지털 서비스 창업가",next:"문제 인터뷰부터 수익·비용 가설, 최소 기능 시제품, 고객 검증으로 확장"},
];
const sources=[
 {label:"디미고 2027학년도 신입생 입학전형요항 (모집인원 및 전형)",url:"https://www.goeas.kr/upload/dimigo-h/ba/2026/06/4ddeb5ad-dd71-4afc-a538-ed14876bbf66.pdf"},
 {label:"디미고 2026학년도 전체 교육과정 편제표 (학과별 시간표)",url:"https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1865&mi=13566"},
 {label:"디미고 2027학년도 입학생 교육과정 편제표 게시판",url:"https://dimigo-h.goeas.kr/dimigo-h/na/ntt/selectNttList.do?bbsId=7007&mi=13791"},
 {label:"교육부 HIFIVE 디미고 e-비즈니스과 소개",url:"https://www.hifive.go.kr/search/schoolClassInfo.do?sch_seq=653"},
 {label:"학교알리미 (학과별 졸업생 진로 원자료 확인)",url:"https://www.schoolinfo.go.kr/"},
 {label:"2025년 11월 학교알리미 공시 학과별 수치 재집계 (민간 분석)",url:"https://dlabgj.kr/dimigo"},
 {label:"2025년 주요 유통업체 온라인 매출 동향 (산업통상부 발표·연합뉴스)",url:"https://www.yna.co.kr/amp/view/AKR20260128052300003"},
 {label:"과학기술정보통신부 2025 데이터산업현황조사 (공공데이터포털)",url:"https://www.data.go.kr/data/15074828/fileData.do"},
 {label:"2026년 혁신 소상공인 AI 활용지원 사업 (중소벤처기업부)",url:"https://bizinfo.go.kr/sii/siia/selectSIIA200Detail.do?pblancId=PBLN_000000000123187"},
 {label:"2026년 AI 활용 창업·사업화 지원 (과학기술정보통신부)",url:"https://www.msit.go.kr/bbs/view.do?bbsSeqNo=100&mId=311&mPid=121&nttSeqNo=3186488&sCode=user"},
];

export default function DimigoEBusinessCareerPlan(){
return <div className={styles.guide}>
<section className={styles.guideSection}>
<h2>01. E-비즈니스과의 교육 목표 및 2027학년도 모집</h2>
<p>E-비즈니스과는 <strong>전자상거래와 경영·경제의 이해</strong>를 바탕으로, 정보기술과 데이터를 활용해 새로운 사업 모델을 구상하고 실무적 문제를 해결하는 역량을 기르는 학과입니다. 교육부 HIFIVE는 전자상거래 실무 지식·기술을 배우고 차세대 경영 인재를 양성하는 학과로 소개합니다.</p>
<div className={styles.kpiGrid}>
<div className={styles.kpi}><span>2027학년도 모집정원</span><b>29명</b><small>1개 학급</small></div>
<div className={styles.kpi}><span>진로적성 특별전형</span><b>8명</b><small>취업희망자 전형</small></div>
<div className={styles.kpi}><span>일반전형</span><b>21명</b><small>정원 내</small></div>
<div className={styles.kpi}><span>학과 특성</span><b style={{fontSize:"21px"}}>경영 + IT</b><small>전자상거래·데이터·창업</small></div>
</div>
<div className={styles.note}><strong>지원 전략:</strong> 단순히 ‘돈을 많이 버는 사업가’를 목표로 쓰기보다, 어떤 소비자 문제를 발견했고 어떤 서비스·데이터·비즈니스 모델로 해결하려는지 설명합니다. 2027학년도 공식 입학전형요항에는 E-비즈니스과가 29명 모집 학과로 명시되어 있습니다.</div>
</section>

<section className={styles.guideSection}>
<h2>02. 졸업생 대학 진학·취업 현황</h2>
<p>아래는 <strong>2025년 11월 학교알리미 공시를 민간에서 학과별로 재집계한 수치</strong>입니다. 학교알리미 원표의 학생별 진로·대학·기업명을 직접 확인한 자료가 아닙니다.</p>
<div className={styles.kpiGrid}>
<div className={styles.kpi}><span>E-비즈니스과 졸업생</span><b>30명</b><small>공시 재집계 기준</small></div>
<div className={styles.kpi}><span>대학 진학</span><b>23명</b><small>76.7%</small></div>
<div className={styles.kpi}><span>4년제 대학</span><b>23명</b><small>전문대학 0명</small></div>
<div className={styles.kpi}><span>취업</span><b>2명</b><small>졸업생 대비 6.7%</small></div>
</div>
<p className={styles.muted}>진학·취업 외 5명. 6.7%는 졸업생 전체 대비 취업 비율로서, 진학자를 제외하는 방식의 공식 취업률과 다릅니다.</p>
<h3>디미고 학과별 진로 비교</h3>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>학과</th><th>졸업생</th><th>대학 진학</th><th>취업 (졸업생 대비)</th><th>기타</th></tr></thead><tbody>{results.map(r=><tr key={r.department}><td><strong>{r.department}</strong></td><td>{r.graduate}명</td><td>{r.university}</td><td>{r.employment}</td><td>{r.other}명</td></tr>)}</tbody></table></div>
<div className={styles.note}>E-비즈니스과 졸업생의 다수는 대학 진학 경로를 선택했습니다. 다만 <strong>대학별 진학 인원, 구체적 학과, 기업별 채용 인원과 취업 직무</strong>는 확인된 학과별 재집계에 없습니다. 특정 대학·회사명을 실적으로 단정하지 마세요.</div>
</section>

<section className={styles.guideSection}>
<h2>03. E-비즈니스과 전공 관련 교과목</h2>
<p>학교의 <strong>2026학년도 전체 교육과정 편제표</strong>에서 E-비즈니스과 열에 편성된 관련 교과목을 추렸습니다. 학년·입학 연도별로 편성이 다르며 일부는 선택과목입니다. <strong>2027학년도 입학생의 실제 수강 과정은 별도 공개된 최신 편제표로 재확인</strong>해야 합니다.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>영역</th><th>공식 편제표 과목</th><th>진로 연결</th></tr></thead><tbody>{subjects.map(s=><tr key={s.area}><td><strong>{s.area}</strong></td><td>{s.names}</td><td>{s.connection}</td></tr>)}</tbody></table></div>
<h3>학년별 추천 성장 계획</h3><p className={styles.muted}>아래는 공식 필수 시간표가 아니라, 학생의 취업(창업)계획서 작성을 위한 학습 목표 예시입니다.</p>
<div className={styles.steps}>
<article className={styles.step}><span>1학년 · 탐색</span><strong>경영·경제와 IT 기초 이해</strong><p>상업경제와 기초 AI·데이터 이해를 바탕으로 소비자의 불편을 관찰하고 문제를 기록합니다.</p></article>
<article className={styles.step}><span>2학년 · 실험</span><strong>데이터·마케팅·창업 탐구</strong><p>소비자 조사, 온라인 서비스 기획, 광고와 분석 실험을 수행하며 가설을 검증합니다.</p></article>
<article className={styles.step}><span>3학년 · 실전</span><strong>프로젝트·포트폴리오 완성</strong><p>서비스 운영 계획, 손익과 사용성 분석, 사업 모델 검증을 통해 실제 진로를 구체화합니다.</p></article>
</div>
<p>학교에 게시된 <strong>스타트UP·창업 동아리·IT전공UP·방과후 활동</strong>은 탐구 계획을 설명할 때 참고할 수 있습니다. 다만 참여 자격과 실제 프로그램 개설 여부는 입학 연도별로 달라질 수 있습니다.</p>
</section>

<section className={styles.guideSection}>
<h2>04. 2026년 디지털 비즈니스 산업 주요 트렌드</h2>
<p>정부·공공기관의 자료와 발표를 바탕으로 전자상거래·데이터·AI 활용·창업에 관련된 주요 방향을 정리했습니다.</p>
<div className={styles.trendGrid}>{trends.map((t,i)=><article className={styles.trend} key={t.title}><b>{String(i+1).padStart(2,"0")}. {t.title}</b><p>{t.description}</p><p><strong>관련 직무:</strong> {t.jobs}</p></article>)}</div>
<div className={styles.note}>온라인 유통 매출 비중 통계는 조사 대상 주요 유통업체 기준입니다. 데이터산업 규모도 2025년 추정치이며, 이 수치만으로 학생 개개인의 취업 전망을 보장할 수 없습니다.</div>
</section>

<section className={styles.guideSection}>
<h2>05. 구체적인 희망 직업과 대학 전공</h2>
<p>E-비즈니스과는 창업만을 위한 학과가 아닙니다. 기업의 데이터 분석·마케팅·유통·서비스 기획·금융 플랫폼 운영 등 다양한 진로를 선택할 수 있습니다.</p>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>희망 직업</th><th>주요 업무</th><th>관련 대학 전공 예시</th></tr></thead><tbody>{jobs.map(([job,task,major])=><tr key={job}><td><strong>{job}</strong></td><td>{task}</td><td>{major}</td></tr>)}</tbody></table></div>
<h3>졸업 후 진로 경로</h3>
<div className={styles.flow}>
<article><strong>A. 고졸 취업</strong><p>전공 프로젝트·현장실습 → 전자상거래 운영·디지털 마케팅·데이터 보조 직무 탐색 → 업무 역량 심화</p></article>
<article><strong>B. 대학 진학 후 취업</strong><p>고교에서 경영·데이터·IT 기초 축적 → 경영정보·경제·마케팅 등 관련 전공 심화 → 직무 취업</p></article>
<article><strong>C. 창업 경로</strong><p>고객의 실제 불편 조사 → 최소 기능 시제품 제작 → 시장·비용·고객 검증 → 개선 및 사업화 검토</p></article>
<article><strong>D. 취업 후 계속 교육</strong><p>관련 분야 실무 경험 → 학업 병행이 가능한 제도·교육과정 확인 → 직무 전문성 확대</p></article>
</div>
<p className={styles.muted}>위 경로는 진로 설계를 위한 선택지이지 학교가 개별 진학·취업·창업을 보장한다는 의미가 아닙니다.</p>
</section>

<section className={styles.guideSection}>
<h2>06. 기존 프로젝트를 진로로 발전시키는 방법</h2>
<div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>학생 프로젝트 소재</th><th>추천 직업 목표</th><th>후속 탐구 방향</th></tr></thead><tbody>{projects.map(p=><tr key={p.project}><td><strong>{p.project}</strong></td><td>{p.job}</td><td>{p.next}</td></tr>)}</tbody></table></div>
<p>프로젝트의 ‘기능을 얼마나 많이 만들었는가’보다 <strong>누구의 어떤 문제를 해결하는지, 어떻게 성능·효과를 검증했는지, 사용자의 반응에 따라 무엇을 고쳤는지</strong>를 강조합니다.</p>
</section>

<section className={styles.guideSection}>
<h2>07. 취업(창업)계획서 작성 순서</h2>
<ol className={styles.bullets}>
<li><strong>관심 분야:</strong> 데이터 분석·커머스·마케팅·서비스 기획·핀테크·창업 중 어떤 분야를 희망하나요?</li>
<li><strong>관심 계기:</strong> 소비·거래·생활에서 발견한 실제 문제나 관심 경험은 무엇인가요?</li>
<li><strong>고교 학습 목표:</strong> 경제·마케팅·회계·AI·데이터 중 어떤 교과 지식을 어떻게 활용할 건가요?</li>
<li><strong>교내 활동:</strong> 고객 조사, 팀 프로젝트, 창업동아리 또는 실험을 통해 어떤 결과를 낼 건가요?</li>
<li><strong>검증 과정:</strong> 효과를 보여 주는 지표·사용자 피드백·비용을 어떻게 점검할 건가요?</li>
<li><strong>졸업 이후:</strong> 취업·진학·창업 중 어떤 경로가 관심 직무에 도움이 되나요?</li>
<li><strong>사회적 기여:</strong> 누구의 선택을 더 합리적이고 편리하게 만들고 싶나요?</li>
</ol>
<h3>막연한 표현에서 구체적인 표현으로</h3>
<p><strong>막연한 표현:</strong> “경영을 잘 배우고 성공한 창업가가 되고 싶습니다.”</p>
<div className={styles.note}><strong>구체적인 표현 예시:</strong> “소비자가 지출 내용을 쉽게 이해하지 못해 불필요한 소비를 반복하는 문제에 관심이 있습니다. 디미고에서 회계원리와 상업경제, 데이터 분석 역량을 기르고, 청소년의 가상 소비 기록을 시각화하는 서비스를 제작하겠습니다. 사용성 테스트와 설문을 통해 기능을 개선하며, 장기적으로 합리적인 소비를 돕는 서비스 기획자로 성장하고 싶습니다.”</div>
<p className={styles.muted}>위 글은 학습용 구조 예시입니다. 지원자 본인의 실제 경험과 실현 가능한 계획을 사용하고, 모집요강의 분량과 기재 제한을 확인해 작성합니다.</p>
</section>

<section className={styles.guideSection}>
<h2>08. 조사 자료 및 공식 원문</h2>
<p>학교의 모집요강·교육과정과 민간 재집계 통계, 국가 산업 조사, 정부 정책 자료를 출처 유형별로 구분해 두었습니다.</p>
<div className={styles.sourceList}>{sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>)}</div>
<p className={styles.muted}>정리 기준일: 2026년 10월 18일. 학교 진로 통계는 2025년 11월 공시를 재집계한 비공식 자료이며, 최신 학과 편제·동아리 운영 내용은 별도 확인이 필요합니다.</p>
</section>
<DimigoBusinessCareerInterestSurvey />
</div>;
}
