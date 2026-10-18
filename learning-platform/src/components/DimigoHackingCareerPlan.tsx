import styles from "./DimigoApplicationCareer.module.css";
import DimigoCareerInterestSurvey from "@/components/DimigoCareerInterestSurvey";

const results = [
  { department: "해킹방어과", graduate: 65, university: "59명 (90.8%)", employed: "2명 (3.1%)" },
  { department: "웹프로그래밍과", graduate: 63, university: "59명 (93.7%)", employed: "4명 (6.3%)" },
  { department: "E-비즈니스과", graduate: 30, university: "23명 (76.7%)", employed: "2명 (6.7%)" },
  { department: "디지털콘텐츠과", graduate: 32, university: "25명 (78.1%)", employed: "3명 (9.4%)" },
];
const subjects = [
  { field: "프로그래밍·알고리즘", names: "프로그래밍, 파이썬 프로그래밍, 자료구조, 정보과학", application: "보안 도구 제작·탐지 알고리즘 구현·코드 분석" },
  { field: "시스템·네트워크", names: "컴퓨터구조, 컴퓨터시스템일반, 정보통신", application: "시스템 작동 원리와 통신 과정의 취약점 이해" },
  { field: "소프트웨어 개발", names: "응용프로그래밍개발, 데이터베이스프로그래밍", application: "웹서비스의 취약점 진단과 안전한 프로그램 개발" },
  { field: "정보보안·선택", names: "정보 보호 관리, 컴퓨터 보안 (편제표상 택 1 구성에 포함)", application: "보안 관리·보호 체계·위협 대응 역량" },
  { field: "인공지능·선택", names: "인공지능기초, 인공지능일반, 인공지능 모델링 (선택 구성 포함)", application: "AI 기반 피싱·악성코드·이상행동 탐지" },
];
const trends = [
  { title: "AI 기반 보안 및 AI 자체의 안전성", body: "AI를 이용한 피싱·악성코드·이상행동 탐지뿐 아니라 AI 서비스 자체의 취약점 평가도 중요해지고 있습니다.", jobs: "AI 보안 솔루션 개발자 · 보안 데이터 분석가" },
  { title: "악성코드 분석 및 침해사고 대응", body: "랜섬웨어 등 악성코드의 행동을 분석하고, 공격 흔적을 추적해 피해 확산을 막는 분야입니다.", jobs: "악성코드 분석가 · 침해대응 분석가 · 디지털 포렌식 전문가" },
  { title: "클라우드 및 제로트러스트 보안", body: "클라우드 환경에서 계정·접근 권한·데이터를 보호하고 접속 신뢰성을 지속 검증합니다.", jobs: "클라우드 보안 엔지니어 · 보안 아키텍트" },
  { title: "웹·애플리케이션 보안", body: "SQL 인젝션, XSS, 인증·권한 오류 등 웹서비스의 취약점을 찾아 수정하고 안전한 설계를 추진합니다.", jobs: "모의해킹 전문가 · 애플리케이션 보안 엔지니어" },
  { title: "소프트웨어 공급망 보안", body: "외부 라이브러리, 설치 파일, 개발·배포 파이프라인을 통한 악성코드 유입을 방지합니다.", jobs: "소프트웨어 보안 분석가 · DevSecOps 엔지니어" },
  { title: "IoT·스마트 산업 보안", body: "스마트 기기, 자동차, 제조설비 등 연결된 시스템을 대상으로 보안을 설계하고 검증합니다.", jobs: "IoT 보안 전문가 · 임베디드 보안 엔지니어" },
];
const careerJobs = [
  ["모의해킹 전문가", "웹·시스템 취약점 진단 및 개선", "정보보호학·컴퓨터공학"],
  ["침해사고 대응 전문가", "공격 탐지, 분석, 차단, 복구", "정보보안학·사이버보안학"],
  ["악성코드 분석가", "악성 프로그램의 구조와 동작 분석", "컴퓨터공학·소프트웨어학"],
  ["AI 보안 개발자", "AI 기반 사이버 위협 탐지 기술 개발", "인공지능학·컴퓨터공학"],
  ["클라우드 보안 전문가", "클라우드 인프라 및 접근 권한 보호", "컴퓨터공학·정보보호학"],
  ["보안 솔루션 개발자", "정보보호 소프트웨어 설계·구현", "소프트웨어학·컴퓨터공학"],
  ["디지털 포렌식 전문가", "디지털 증거 수집과 침해사고 조사", "정보보호학·디지털포렌식 관련 전공"],
];
const projects = [
  { topic: "웹 배포 프로그램의 악성코드 탐지", job: "소프트웨어 보안 분석가", growth: "설치·배포 파일 분석 → 소프트웨어 공급망 위협 탐지 → 안전한 배포 체계 설계" },
  { topic: "SLM 기반 피싱 사이트 탐지", job: "AI 기반 사이버 위협 분석가", growth: "URL·브랜드·사이트 특징 분석 → 피싱 판단 정확도 개선 → 실시간 탐지·대응 시스템" },
  { topic: "화자 인증 및 AI 음성 탐지를 활용한 보이스피싱 예방", job: "AI 보안 솔루션 개발자", growth: "음성 일치 판별·합성음 탐지 → 보안 성능 및 오탐 분석 → 신원 인증·금융사기 예방 기술" },
];
const sources = [
  { label: "학교알리미: 졸업생의 취업 등 진로 현황 (원자료 확인)", url: "https://www.schoolinfo.go.kr/" },
  { label: "2025년 11월 학교알리미 공시 학과별 재집계", url: "https://eduhankook.blogspot.com/2026/08/blog-post_29.html" },
  { label: "디미고 공식 2026학년도 교육과정 편제표", url: "https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1865&mi=13566" },
  { label: "디미고 2027학년도 입학생 교육과정 게시판", url: "https://dimigo-h.goeas.kr/dimigo-h/na/ntt/selectNttList.do?bbsId=7007&mi=13791" },
  { label: "교육부 HIFIVE: 한국디지털미디어고등학교 학과 소개", url: "https://www.hifive.go.kr/search/schoolInfo.do?sch_seq=653&vType=1" },
  { label: "KISA: 사이버 위협 동향 보고서 (2026년 상반기)", url: "https://www.krcert.or.kr/kr/bbs/view.do?bbsId=B0000127&menuNo=205021&nttId=72145&pageIndex=1" },
  { label: "KISA: AI 보안 위협 대응 매뉴얼 (2026.07)", url: "https://www.krcert.or.kr/kr/bbs/view.do?bbsId=B0000127&categoryCode=&menuNo=205021&nttId=72124&pageIndex=1" },
  { label: "디미고 공식 신입생 전형요항", url: "https://dimigo-h.goeas.kr/dimigo-h/cm/cntnts/cntntsView.do?cntntsId=1889&mi=13632" },
];

export default function DimigoHackingCareerPlan() {
  return (
    <div className={styles.guide}>
      <section className={styles.guideSection}>
        <h2>01. 해킹방어과의 교육 목표</h2>
        <p>해킹방어과는 컴퓨터와 네트워크의 작동 원리, 프로그래밍, 보안 이론을 바탕으로 취약점을 분석하고 대응할 수 있는 IT 보안 전문가를 양성하는 학과입니다. 보안 도구를 직접 개발하거나, 사고의 원인을 찾아 예방하는 역량이 중요합니다.</p>
        <div className={styles.note}><strong>취업계획서의 중심:</strong> ‘화이트해커가 되고 싶다’라는 포부에 그치지 않고, 목표 직무 → 디미고에서 기를 역량 → 졸업 후 취업 경로 → 장기적 기여를 이어서 설명합니다. 자기추천·대회입상 등 특별전형의 취업희망 취지를 고려해 최종 직업 목표를 분명하게 적습니다.</div>
      </section>

      <section className={styles.guideSection}>
        <h2>02. 졸업생 대학 진학·취업 현황</h2>
        <p>아래는 <strong>2025년 11월 학교알리미 공시자료를 제3자가 재집계한 수치</strong>입니다. 학교알리미 학과별 원자료의 직접 대조 전이므로 보조 통계로 활용합니다.</p>
        <div className={styles.kpiGrid}>
          <div className={styles.kpi}><span>해킹방어과 졸업생</span><b>65명</b><small>전체 기준</small></div>
          <div className={styles.kpi}><span>대학 진학</span><b>59명</b><small>90.8%</small></div>
          <div className={styles.kpi}><span>4년제 대학</span><b>58명</b><small>89.2%</small></div>
          <div className={styles.kpi}><span>취업</span><b>2명</b><small>졸업생 대비 3.1%</small></div>
        </div>
        <p className={styles.muted}>전문대학 진학 1명, 진학·취업 이외 인원 4명으로 집계됩니다. 3.1%는 졸업생 전체 대비 취업 비율로, 진학자를 제외해 계산하는 공식 ‘취업률’과는 다릅니다.</p>
        <h3>학과별 진로 비교</h3>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead><tr><th>학과</th><th>졸업생</th><th>대학 진학</th><th>취업 (졸업생 대비)</th></tr></thead>
            <tbody>{results.map((item) => <tr key={item.department}><td><strong>{item.department}</strong></td><td>{item.graduate}명</td><td>{item.university}</td><td>{item.employed}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.note}>해킹방어과는 대학 진학 비중이 높습니다. 다만 해킹방어과 출신의 <strong>대학교별 합격 인원, 실제 전공, 기업별 취업 인원, 취업 직무</strong>는 위 공시 재집계에 공개되지 않았습니다. 특정 대학·기업을 졸업생 진출 실적으로 단정해 쓰지 않습니다.</div>
      </section>

      <section className={styles.guideSection}>
        <h2>03. 전공 관련 교과목</h2>
        <p>디미고 공식 <strong>2026학년도 전체 교육과정 편제표</strong>에 실린 관련 교과목을 진로별로 묶었습니다. 타 학과 과목과 선택과목이 섞여 있으므로 해킹방어과의 전원 필수 과목 목록으로 해석하지 않아야 합니다. 2027학년도 입학생은 최신 편제표를 별도로 확인해야 합니다.</p>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead><tr><th>분야</th><th>교과목</th><th>취업계획서 연계</th></tr></thead>
            <tbody>{subjects.map((item) => <tr key={item.field}><td><strong>{item.field}</strong></td><td>{item.names}</td><td>{item.application}</td></tr>)}</tbody>
          </table>
        </div>
        <h3>학년별 추천 성장 계획</h3>
        <p className={styles.muted}>아래는 학교의 확정 시간표가 아니라, 취업계획서 작성에 사용할 수 있는 학습 목표의 예시입니다.</p>
        <div className={styles.steps}>
          <div className={styles.step}><span>1학년 · 기초</span><strong>프로그래밍과 시스템 원리</strong><p>코딩·알고리즘·운영체제·기초 네트워크를 학습하고 간단한 보안 분석 도구를 제작합니다.</p></div>
          <div className={styles.step}><span>2학년 · 심화</span><strong>보안 취약점 분석</strong><p>웹·네트워크 취약점을 분석하고 테스트 절차를 체계화하며 팀 프로젝트를 수행합니다.</p></div>
          <div className={styles.step}><span>3학년 · 실전</span><strong>보안 프로젝트와 진로 준비</strong><p>관심 분야의 탐지·예방 프로그램을 완성하고 포트폴리오와 취업·진학 이후 학습계획을 정리합니다.</p></div>
        </div>
        <p>학교에서 안내하는 <strong>IT전공UP·IT연구 동아리·방과후 활동</strong>을 프로젝트 및 전공 역량 심화에 연결할 수 있습니다. 실제 개설 동아리와 활동 내용은 해당 학년도 운영 정보를 확인해야 합니다.</p>
      </section>

      <section className={styles.guideSection}>
        <h2>04. 정보보안 산업의 주요 트렌드</h2>
        <p>2026년 KISA 사이버 위협 동향 보고서는 AI를 이용한 취약점 분석, 오픈소스 공급망 침해, 보안체계의 변화 등을 다룹니다. 아래 6개 분야는 직무 선택과 취업계획서의 미래 방향을 정하는 데 활용할 수 있습니다.</p>
        <div className={styles.trendGrid}>
          {trends.map((item, index) => <article className={styles.trend} key={item.title}>
            <b>{String(index+1).padStart(2,"0")}. {item.title}</b>
            <p>{item.body}</p>
            <p><strong>연관 직무:</strong> {item.jobs}</p>
          </article>)}
        </div>
        <p className={styles.muted}>‘유망 분야’는 산업·기술 중요도를 설명하는 참고 정보입니다. 개별 기업의 채용 보장이나 향후 취업자 수 예측을 뜻하지 않습니다.</p>
      </section>

      <section className={styles.guideSection}>
        <h2>05. 구체적인 희망 직업과 연계 전공</h2>
        <p>직업 이름이 구체적일수록 학생이 학업·실습·프로젝트를 선택한 이유가 뚜렷해집니다. 아래 대학 전공은 진로 설계용 예시이며 디미고의 실제 진학 대학·학과 실적이 아닙니다.</p>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead><tr><th>희망 직업</th><th>주요 업무</th><th>대학 연계 전공 예시</th></tr></thead>
            <tbody>{careerJobs.map(([job,task,major]) => <tr key={job}><td><strong>{job}</strong></td><td>{task}</td><td>{major}</td></tr>)}</tbody>
          </table>
        </div>
        <h3>고교 졸업 이후의 진로 선택</h3>
        <div className={styles.flow}>
          <article><strong>경로 A · 고졸 취업</strong><p>교과·실습·프로젝트 경험을 축적 → 보안 관련 현장실습과 채용 기회 탐색 → 보안 개발·관제·기술지원 등 직무 진입 → 현장 역량 심화</p></article>
          <article><strong>경로 B · 대학 진학 후 취업</strong><p>디미고에서 보안 기초와 프로젝트 완성 → 정보보호·컴퓨터공학 등으로 진학 → 전공 심화·인턴십·연구 → 보안 전문 직무 취업</p></article>
        </div>
        <div className={styles.note}>대학 진학을 계획하더라도 취업(창업)계획서는 <strong>최종적으로 어떤 보안 전문가가 되어 어떤 문제를 해결할지</strong>를 명확히 제시하는 것이 좋습니다. 졸업 직후 취업과 대학 진학을 모두 보장되는 경로처럼 표현하지 않습니다.</div>
      </section>

      <section className={styles.guideSection}>
        <h2>06. 기존 프로젝트를 진로로 발전시키는 방법</h2>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead><tr><th>프로젝트 소재</th><th>추천 직업 목표</th><th>발전 방향</th></tr></thead>
            <tbody>{projects.map((item) => <tr key={item.topic}><td><strong>{item.topic}</strong></td><td>{item.job}</td><td>{item.growth}</td></tr>)}</tbody>
          </table>
        </div>
        <p>유행하는 용어를 나열하기보다 <strong>실제로 구현한 기능, 해결하지 못한 한계, 앞으로 보완할 기술</strong>을 중심으로 계획을 잡습니다. 프로젝트 경험과 장기 진로가 자연스럽게 이어지도록 작성합니다.</p>
      </section>

      <section className={styles.guideSection}>
        <h2>07. 취업(창업)계획서 작성 순서</h2>
        <ol className={styles.bullets}>
          <li><strong>희망 직무:</strong> 정보보안 전문가 중 구체적으로 어떤 일을 하고 싶은가?</li>
          <li><strong>관심을 갖게 된 계기:</strong> 어떤 경험이나 문제의식 때문에 해당 직무를 목표로 삼았는가?</li>
          <li><strong>디미고에서의 학습:</strong> 관련 교과에서 어떤 지식을 배우고 실습으로 어떻게 검증할 것인가?</li>
          <li><strong>교내 활동:</strong> 동아리, 팀 프로젝트, 방과후 활동을 통해 어떤 결과물을 만들 것인가?</li>
          <li><strong>졸업 후 경로:</strong> 취업 또는 전공 심화 학습을 어떤 순서로 추진할 것인가?</li>
          <li><strong>장기적 목표:</strong> 어떤 사이버 위협을 예방하고, 누구에게 어떤 도움이 되는 기술을 만들 것인가?</li>
        </ol>
        <h3>문장 개선 예시</h3>
        <p><strong>막연한 표현:</strong> “디미고에서 열심히 공부한 뒤 훌륭한 화이트해커가 되겠습니다.”</p>
        <div className={styles.note}><strong>구체적인 표현 예시:</strong> “프로그래밍과 컴퓨터 시스템에 대한 이해를 바탕으로 웹서비스의 취약점을 분석하는 보안 전문가가 되고 싶습니다. 디미고에서 자료구조와 정보통신을 충실히 학습하고, 교내 프로젝트에서 취약점 탐지 도구를 구현하며 탐지 정확도와 한계를 분석하겠습니다. 이후 실무 역량을 꾸준히 심화하여 실제 사이버 공격을 예방하는 기술을 개발하고 싶습니다.”</div>
        <p className={styles.muted}>위 문장은 작성 구조 학습용 예시입니다. 실제 제출 서류는 지원자 본인의 경험과 계획을 바탕으로 직접 작성하고, 전형요항의 항목·분량·금지 사항을 반드시 확인해야 합니다.</p>
      </section>

      <section className={styles.guideSection}>
        <h2>08. 조사 자료 및 공식 원문</h2>
        <p>진학·취업 인원은 학교알리미 공시 재집계, 교육과정은 학교 원문, 산업 동향은 KISA 보고서로 출처를 구분해 확인합니다.</p>
        <div className={styles.sourceList}>{sources.map(item => <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} ↗</a>)}</div>
        <p className={styles.muted}>자료 정리 기준일: 2026년 10월 18일. 교육과정 편제와 전형요항은 추후 변경될 수 있습니다.</p>
      </section>
      <DimigoCareerInterestSurvey />
    </div>
  );
}
