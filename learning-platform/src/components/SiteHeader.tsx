"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function SiteHeader() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/auth/session", { method: "GET", cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (active) setAuthenticated(Boolean(data?.authenticated));
      })
      .catch(() => {
        if (active) setAuthenticated(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">SY</span>
          <span><strong>세영코딩 동탄2 청계점</strong><small>SEYOUNG ONLINE CLASSROOM</small></span>
        </Link>
        <nav className="nav-links">
          {authenticated === null ? (
            <span className="header-auth-placeholder" aria-hidden="true" />
          ) : authenticated ? (
            <span className="header-account">
              <Link href="/account">내 계정</Link>
              <LogoutButton />
            </span>
          ) : (
            <Link className="login-link" href="/login">로그인</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
