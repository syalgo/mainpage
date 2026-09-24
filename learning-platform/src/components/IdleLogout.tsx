"use client";

import { useEffect, useRef } from "react";

const IDLE_LIMIT_MS = 30 * 60 * 1000;
const CHECK_INTERVAL_MS = 15 * 1000;
const ACTIVITY_WRITE_THROTTLE_MS = 5 * 1000;
const STORAGE_KEY = "seyoung-last-activity";

export default function IdleLogout() {
  const lastWriteRef = useRef(0);
  const loggingOutRef = useRef(false);

  useEffect(() => {
    function readLastActivity() {
      const saved = Number(localStorage.getItem(STORAGE_KEY));
      return Number.isFinite(saved) && saved > 0 ? saved : Date.now();
    }

    function writeActivity(force = false) {
      const now = Date.now();
      if (!force && now - lastWriteRef.current < ACTIVITY_WRITE_THROTTLE_MS) return;

      lastWriteRef.current = now;
      localStorage.setItem(STORAGE_KEY, String(now));
    }

    async function logoutIfAuthenticated() {
      if (loggingOutRef.current) return;
      loggingOutRef.current = true;

      try {
        const status = await fetch("/api/auth/session", {
          method: "GET",
          cache: "no-store",
        });

        const data = await status.json().catch(() => null);

        if (!data?.authenticated) {
          writeActivity(true);
          loggingOutRef.current = false;
          return;
        }

        await fetch("/api/auth/session", { method: "DELETE" });
        localStorage.removeItem(STORAGE_KEY);
        window.location.assign("/login?reason=idle");
      } catch {
        loggingOutRef.current = false;
      }
    }

    function checkIdleTime() {
      const lastActivity = readLastActivity();
      if (Date.now() - lastActivity >= IDLE_LIMIT_MS) {
        void logoutIfAuthenticated();
      }
    }

    function handleActivity() {
      writeActivity();
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        checkIdleTime();
      }
    }

    if (!localStorage.getItem(STORAGE_KEY)) {
      writeActivity(true);
    }

    const activityEvents: Array<keyof WindowEventMap> = [
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "pointerdown",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleActivity, { passive: true });
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const timer = window.setInterval(checkIdleTime, CHECK_INTERVAL_MS);
    checkIdleTime();

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleActivity);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
