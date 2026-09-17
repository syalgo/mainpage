import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getSessionUser } from "@/lib/auth-server";

export default async function LoginPage() {
  const user = await getSessionUser();
  if (user) redirect("/account");

  return (
    <section className="auth-wrap">
      <LoginForm />
    </section>
  );
}
