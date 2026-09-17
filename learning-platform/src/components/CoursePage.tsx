import Link from "next/link";

type CoursePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export default function CoursePage({ eyebrow, title, description, items }: CoursePageProps) {
  return (
    <section className="course-layout">
      <div className="course-hero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="notice-card">
        <div>
          <strong>현재는 기본 화면 구축 단계입니다.</strong>
          <p>다음 단계에서 이메일 로그인과 관리자 승인 권한을 연결합니다.</p>
        </div>
        <Link href="/login" className="primary-button">로그인 화면 보기</Link>
      </div>

      <div className="content-grid">
        {items.map((item, index) => (
          <article className="content-card" key={item}>
            <span className="content-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{item}</h2>
            <p>승인된 사용자에게 교재와 학습 자료가 표시될 영역입니다.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
