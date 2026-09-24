import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getSessionUser } from "@/lib/auth-server";

type LoginPageProps = {
  searchParams: Promise<{ reason?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const user = await getSessionUser();
  if (user) redirect("/account");

  const { reason } = await searchParams;

  return (
    <section className="auth-wrap">
      {reason === "idle" && (
        <div
          className="notice-card"
          style={{
            maxWidth: 520,
            margin: "0 auto 16px",
            borderColor: "#f1d4a8",
            background: "#fffaf2",
          }}
        >
          <div>
            <strong>자동 로그아웃되었습니다.</strong>
            <p>30분 동안 활동이 없어 보안을 위해 로그인 세션을 종료했습니다.</p>
          </div>
        </div>
      )}
      <LoginForm />
    </section>
  );
}
