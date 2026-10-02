import Link from "next/link";

const sections = [
  { href: "/materials", label: "기본교재", tag: "ALL STUDENTS" },
  { href: "/specialized", label: "디미고 입학전형 대비", tag: "DIMIGO" },
  { href: "/specialized/job-basic-literacy", label: "대덕소마고 입학전형 대비", tag: "DAEDEOK SW" },
  { href: "/specialized/hwaseong-gifted", label: "화성시 영재교육원 대비", tag: "HWASEONG GIFTED" },
  { href: "/koi", label: "정보올림피아드 대비", tag: "KOI · ALGORITHM" },
];

export default function Home() {
  return (
    <section className="home-course-section">
      <div className="section-heading">
        <span className="eyebrow">COURSES</span>
        <h1>학습 메뉴</h1>
        <p>학생의 수강 과정에 따라 접근 권한을 각각 부여합니다.</p>
      </div>

      <div className="course-grid home-course-grid">
        {sections.map((section) => (
          <Link
            href={section.href}
            prefetch={false}
            className="menu-card home-menu-card"
            key={section.href}
          >
            <span className="menu-tag">{section.tag}</span>
            <h3>{section.label}</h3>
            <span className="menu-arrow">바로가기 →</span>
          </Link>
        ))}
      </div>

      <div className="admin-home-row">
        <Link href="/admin" prefetch={false} className="secondary-button admin-home-button">
          관리자 화면
        </Link>
      </div>
    </section>
  );
}
