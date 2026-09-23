export default function Loading() {
  return (
    <section className="route-loading" aria-live="polite" aria-label="페이지 불러오는 중">
      <div className="route-loading-bar" />
      <div className="route-loading-card">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
