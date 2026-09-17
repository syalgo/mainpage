import Link from "next/link";

export default function Home() {
  return (
    <section className="home-minimal">
      <Link href="/admin" className="secondary-button admin-home-button">
        관리자 화면
      </Link>
    </section>
  );
}
