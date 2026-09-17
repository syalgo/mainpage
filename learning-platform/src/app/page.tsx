import Link from "next/link";

const sections = [
  {
    href: "/materials",
    label: "기본 교재",
    tag: "ALL STUDENTS",
    description: "수업에서 공통으로 사용하는 기본 교재와 실습 자료를 정리합니다.",
  },
  {
    href: "/specialized",
    label: "특성화고 대비반",
    tag: "SPECIALIZED HS",
    description: "디미고·대덕소마고 등 특성화고 준비를 위한 전용 학습 공간입니다.",
  },
  {
    href: "/koi",
    label: "정보올림피아드 대비반",
    tag: "KOI · ALGORITHM",
    description: "알고리즘 개념, 기출 유형, 문제 풀이 자료를 단계별로 구성합니다.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">SEYOUNG ONLINE CLASSROOM</span>
          <h1>수업 자료를 한곳에서<br />깔끔하게 관리합니다.</h1>
          <p>
            기본 교재부터 특성화고, 정보올림피아드 대비반까지.
            승인된 학생만 필요한 과정에 접근할 수 있도록 구성할 예정입니다.
          </p>
          <div className="hero-actions">
            <Link href="/login" className="primary-button">로그인</Link>
            <Link href="#courses" className="secondary-button">과정 둘러보기</Link>
          </div>
        </div>
        <div className="hero-panel">
          <span className="panel-badge">ACCESS CONTROL</span>
          <h2>승인 기반 학습 공간</h2>
          <ul>
            <li><span>01</span> 이메일 회원가입</li>
            <li><span>02</span> 관리자 승인</li>
            <li><span>03</span> 과정별 권한 부여</li>
            <li><span>04</span> 승인된 교재만 열람</li>
          </ul>
        </div>
      </section>

      <section id="courses" className="section-block">
        <div className="section-heading">
          <span className="eyebrow">COURSES</span>
          <h2>학습 메뉴</h2>
          <p>학생의 수강 과정에 따라 접근 권한을 각각 부여하는 구조입니다.</p>
        </div>
        <div className="course-grid">
          {sections.map((section) => (
            <Link href={section.href} className="menu-card" key={section.href}>
              <span className="menu-tag">{section.tag}</span>
              <h3>{section.label}</h3>
              <p>{section.description}</p>
              <span className="menu-arrow">바로가기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="admin-strip">
        <div>
          <span className="eyebrow">ADMIN</span>
          <h2>관리자 승인과 과정별 권한 관리</h2>
          <p>가입 신청자를 확인하고 기본 교재·특성화고·KOI 권한을 각각 지정할 수 있게 확장합니다.</p>
        </div>
        <Link href="/admin" className="secondary-button light">관리자 화면 미리보기</Link>
      </section>
    </>
  );
}
