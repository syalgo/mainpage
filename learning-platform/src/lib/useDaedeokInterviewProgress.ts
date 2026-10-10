"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const endpoint = "/api/daedeok/interview/progress";
const oldKey = "daedeok-interview-practice-v1";

export type InterviewProgress = {
  notes: Record<string, string>;
  completed: number[];
  checklist: number[];
};

type Patch = {
  notes: Record<string, string>;
  completed: Record<string, boolean>;
  checklist: Record<string, boolean>;
};
type SaveStatus = "saved" | "pending" | "saving" | "error";
type LoadStatus = "loading" | "ready" | "error";

const emptyProgress: InterviewProgress = { notes: {}, completed: [], checklist: [] };
const emptyPatch = (): Patch => ({ notes: {}, completed: {}, checklist: {} });
const hasPatch = (patch: Patch) =>
  Object.keys(patch.notes).length > 0 ||
  Object.keys(patch.completed).length > 0 ||
  Object.keys(patch.checklist).length > 0;

function readPreviousBrowserProgress(): InterviewProgress | null {
  try {
    const raw = localStorage.getItem(oldKey);
    if (!raw) return null;
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;
    const value = data as Record<string, unknown>;
    const notes: Record<string, string> = {};
    if (value.notes && typeof value.notes === "object" && !Array.isArray(value.notes)) {
      for (const [id, note] of Object.entries(value.notes)) {
        if (/^(?:[1-9]|[1-5][0-9]|60)$/.test(id) && typeof note === "string" && note.trim()) {
          notes[id] = note;
        }
      }
    }
    const completed = Array.isArray(value.completed)
      ? value.completed.filter((n): n is number => Number.isInteger(n) && n >= 1 && n <= 60)
      : [];
    const checklist = Array.isArray(value.checklist)
      ? value.checklist.filter((n): n is number => Number.isInteger(n) && n >= 0 && n < 12)
      : [];
    if (!Object.keys(notes).length && !completed.length && !checklist.length) return null;
    return { notes, completed: [...new Set(completed)], checklist: [...new Set(checklist)] };
  } catch {
    return null;
  }
}

export function useDaedeokInterviewProgress() {
  const [progress, setProgress] = useState<InterviewProgress>(emptyProgress);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>("loading");
  const [loadError, setLoadError] = useState("");
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("saved");
  const [saveError, setSaveError] = useState("");
  const [legacy, setLegacy] = useState<InterviewProgress | null>(null);

  const accountUid = useRef("");
  const pending = useRef<Patch>(emptyPatch());
  const saving = useRef(false);
  const timer = useRef<number | null>(null);
  const importPending = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    async function load() {
      try {
        const response = await fetch(endpoint, {
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal,
        });
        const data = (await response.json()) as {
          accountUid?: string;
          progress?: InterviewProgress;
          error?: string;
        };
        if (!response.ok || !data.accountUid || !data.progress) {
          throw new Error(data.error || "저장된 답변을 불러오지 못했습니다.");
        }
        if (!active) return;
        accountUid.current = data.accountUid;
        setProgress(data.progress);
        setLegacy(readPreviousBrowserProgress());
        setLoadStatus("ready");
      } catch (error) {
        if (!active) return;
        setLoadError(error instanceof Error ? error.message : "저장된 답변을 불러오지 못했습니다.");
        setLoadStatus("error");
      }
    }
    void load();
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const saveNow = useCallback(async () => {
    if (saving.current || !accountUid.current || !hasPatch(pending.current)) return;
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    const changes = pending.current;
    pending.current = emptyPatch();
    saving.current = true;
    setSaveStatus("saving");
    let succeeded = false;
    try {
      const response = await fetch(endpoint, {
        method: "PATCH",
        credentials: "same-origin",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountUid: accountUid.current, changes }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "서버에 답변을 저장하지 못했습니다.");
      }
      succeeded = true;
      setSaveError("");
    } catch (error) {
      // Preserve uncommitted changes, preferring edits made during the request.
      pending.current = {
        notes: { ...changes.notes, ...pending.current.notes },
        completed: { ...changes.completed, ...pending.current.completed },
        checklist: { ...changes.checklist, ...pending.current.checklist },
      };
      setSaveStatus("error");
      setSaveError(error instanceof Error ? error.message : "저장하지 못했습니다.");
    } finally {
      saving.current = false;
      if (succeeded) {
        if (hasPatch(pending.current)) {
          setSaveStatus("pending");
          timer.current = window.setTimeout(() => { void saveNow(); }, 200);
        } else {
          setSaveStatus("saved");
          if (importPending.current) {
            try { localStorage.removeItem(oldKey); } catch { /* no effect on server save */ }
            importPending.current = false;
          }
        }
      }
    }
  }, []);

  const enqueue = useCallback((change: Partial<Patch>) => {
    pending.current = {
      notes: { ...pending.current.notes, ...change.notes },
      completed: { ...pending.current.completed, ...change.completed },
      checklist: { ...pending.current.checklist, ...change.checklist },
    };
    setSaveStatus("pending");
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => { void saveNow(); }, 800);
  }, [saveNow]);

  useEffect(() => {
    const beforeUnload = (event: BeforeUnloadEvent) => {
      if (hasPatch(pending.current) || saving.current) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden" && hasPatch(pending.current)) {
        void saveNow();
      }
    };
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [saveNow]);

  function toggleCompleted(id: number) {
    const checked = !progress.completed.includes(id);
    setProgress((current) => ({
      ...current,
      completed: checked
        ? [...current.completed, id].sort((a, b) => a - b)
        : current.completed.filter((n) => n !== id),
    }));
    enqueue({ completed: { [String(id)]: checked } });
  }

  function toggleCore(index: number) {
    const checked = !progress.checklist.includes(index);
    setProgress((current) => ({
      ...current,
      checklist: checked
        ? [...current.checklist, index].sort((a, b) => a - b)
        : current.checklist.filter((n) => n !== index),
    }));
    enqueue({ checklist: { [String(index)]: checked } });
  }

  function updateNote(id: number, value: string) {
    setProgress((current) => ({
      ...current,
      notes: { ...current.notes, [String(id)]: value },
    }));
    enqueue({ notes: { [String(id)]: value } });
  }

  function clearCore() {
    const checklist: Record<string, boolean> = {};
    for (const id of progress.checklist) checklist[String(id)] = false;
    setProgress((current) => ({ ...current, checklist: [] }));
    if (Object.keys(checklist).length) enqueue({ checklist });
  }

  function importLegacy() {
    if (!legacy) return;
    if (!window.confirm(
      "이 브라우저의 이전 기록이 현재 로그인한 학생 본인의 기록인지 확인했나요? 다른 학생의 기록이라면 가져오지 마세요.",
    )) return;
    if (Object.values(legacy.notes).some((note) => note.length > 3000)) {
      window.alert("기존 답변 중 3000자를 넘는 기록이 있어 자동 가져오기를 중단했습니다. 해당 답변은 직접 복사하여 옮겨 주세요.");
      return;
    }

    const notes: Record<string, string> = {};
    const completed: Record<string, boolean> = {};
    const checklist: Record<string, boolean> = {};
    for (const [id, note] of Object.entries(legacy.notes)) {
      if (!progress.notes[id]?.trim()) notes[id] = note;
    }
    for (const id of legacy.completed) {
      if (!progress.completed.includes(id)) completed[String(id)] = true;
    }
    for (const id of legacy.checklist) {
      if (!progress.checklist.includes(id)) checklist[String(id)] = true;
    }

    if (Object.keys(notes).length || Object.keys(completed).length || Object.keys(checklist).length) {
      setProgress((current) => ({
        notes: { ...current.notes, ...notes },
        completed: [...new Set([...current.completed, ...Object.keys(completed).map(Number)])].sort((a,b) => a-b),
        checklist: [...new Set([...current.checklist, ...Object.keys(checklist).map(Number)])].sort((a,b) => a-b),
      }));
      importPending.current = true;
      enqueue({ notes, completed, checklist });
    } else {
      try { localStorage.removeItem(oldKey); } catch { /* local cleanup optional */ }
    }
    setLegacy(null);
  }

  return {
    progress,
    loadStatus,
    loadError,
    saveStatus,
    saveError,
    saveNow,
    legacy,
    importLegacy,
    dismissLegacy: () => setLegacy(null),
    toggleCompleted,
    toggleCore,
    updateNote,
    clearCore,
  };
}
