"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    try {
      await fetch("/api/auth/session", { method: "DELETE" });
      window.location.assign("/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" className="logout-button" onClick={logout} disabled={loading}>
      {loading ? "..." : "로그아웃"}
    </button>
  );
}
