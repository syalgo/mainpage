type CourseItem = {
  title: string;
  description: string;
};

type CoursePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: CourseItem[];
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
          <strong>승인된 계정 전용 학습 공간</strong>
          <p>현재 페이지는 서버에서 로그인 상태와 과정 권한을 확인한 뒤 표시됩니다.</p>
        </div>
      </div>

      <div className="content-grid">
        {items.map((item, index) => (
          <article className="content-card" key={item.title}>
            <span className="content-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
