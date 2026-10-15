"use client";

import { useMemo, useState } from "react";

type SimKey = "binary" | "graph" | "heap" | "sort" | "dp";
type GraphMode = "bfs" | "dfs";

const binarySteps = [
  { left: 0, right: 6, mid: 3, note: "가운데 값 11을 확인합니다. 19는 11보다 크므로 오른쪽 절반만 남깁니다." },
  { left: 4, right: 6, mid: 5, note: "남은 구간의 가운데 값은 19입니다. 목표값을 찾았습니다." },
];

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

const bfsSteps = [
  { current: "A", visited: ["A"], container: ["B", "C"], note: "A를 방문하고, 연결된 B와 C를 큐 뒤에 넣습니다." },
  { current: "B", visited: ["A", "B"], container: ["C", "D", "E"], note: "큐의 맨 앞 B를 꺼내 방문하고 D, E를 뒤에 넣습니다." },
  { current: "C", visited: ["A", "B", "C"], container: ["D", "E", "F"], note: "다음으로 C를 방문하고 F를 큐에 넣습니다." },
  { current: "D", visited: ["A", "B", "C", "D"], container: ["E", "F"], note: "D는 새로 이어지는 정점이 없어 다음으로 넘어갑니다." },
  { current: "E", visited: ["A", "B", "C", "D", "E"], container: ["F"], note: "E를 방문합니다." },
  { current: "F", visited: ["A", "B", "C", "D", "E", "F"], container: [], note: "F를 방문하면 모든 정점을 확인했습니다." },
];

const dfsSteps = [
  { current: "A", visited: ["A"], container: ["C", "B"], note: "A를 방문하고, 한 방향으로 깊게 들어가기 위해 B를 먼저 선택합니다." },
  { current: "B", visited: ["A", "B"], container: ["C", "E", "D"], note: "B에서 다시 깊게 들어가 D를 선택합니다." },
  { current: "D", visited: ["A", "B", "D"], container: ["C", "E"], note: "D에서 더 갈 곳이 없으므로 이전 갈림길로 돌아갑니다." },
  { current: "E", visited: ["A", "B", "D", "E"], container: ["C"], note: "B의 다른 이웃 E를 방문합니다." },
  { current: "C", visited: ["A", "B", "D", "E", "C"], container: ["F"], note: "A의 다른 이웃 C로 돌아와 방문합니다." },
  { current: "F", visited: ["A", "B", "D", "E", "C", "F"], container: [], note: "C에서 F까지 방문하면 탐색이 끝납니다." },
];

const heapSteps = [
  { heap: [9, 6, 7, 1, 4], focus: -1, note: "현재 최대 힙입니다. 부모는 항상 자식보다 크거나 같습니다." },
  { heap: [9, 6, 7, 1, 4, 12], focus: 5, note: "12를 배열의 마지막에 삽입합니다." },
  { heap: [9, 6, 12, 1, 4, 7], focus: 2, note: "12가 부모 7보다 크므로 서로 교환합니다." },
  { heap: [12, 6, 9, 1, 4, 7], focus: 0, note: "12가 다시 부모 9보다 크므로 교환합니다. 최대 힙 조건이 회복됐습니다." },
];

const sortSteps = [
  { values: [5, 2, 4, 1, 3], fixed: 0, focus: 1, note: "삽입 정렬은 왼쪽을 정렬된 구간으로 보고, 다음 값을 알맞은 위치에 끼워 넣습니다." },
  { values: [2, 5, 4, 1, 3], fixed: 1, focus: 2, note: "2를 5 앞에 삽입해 [2, 5]를 정렬했습니다." },
  { values: [2, 4, 5, 1, 3], fixed: 2, focus: 3, note: "4를 2와 5 사이에 삽입했습니다." },
  { values: [1, 2, 4, 5, 3], fixed: 3, focus: 4, note: "1은 앞의 모든 값보다 작으므로 맨 앞으로 이동합니다." },
  { values: [1, 2, 3, 4, 5], fixed: 4, focus: 4, note: "3을 2와 4 사이에 삽입하면 정렬이 끝납니다." },
];

const dpSteps = [
  { n: 1, table: [1], note: "1칸에 도착하는 방법은 1가지입니다. dp[1] = 1" },
  { n: 2, table: [1, 2], note: "2칸은 1+1 또는 2, 총 2가지입니다. dp[2] = 2" },
  { n: 3, table: [1, 2, 3], note: "3칸에 오려면 2칸에서 1칸 오거나, 1칸에서 2칸 오면 됩니다. dp[3] = 2 + 1 = 3" },
  { n: 4, table: [1, 2, 3, 5], note: "dp[4] = dp[3] + dp[2] = 3 + 2 = 5" },
  { n: 5, table: [1, 2, 3, 5, 8], note: "dp[5] = dp[4] + dp[3] = 5 + 3 = 8" },
  { n: 6, table: [1, 2, 3, 5, 8, 13], note: "이전 결과를 재사용해 dp[6] = 13을 얻습니다. 같은 계산을 다시 하지 않는 것이 핵심입니다." },
];

const meta: Record<SimKey, { title: string; oneLine: string; use: string; complexity: string; interview: string }> = {
  binary: {
    title: "이분 탐색",
    oneLine: "정렬된 자료에서 가운데를 확인하고, 필요 없는 절반을 계속 버리는 탐색입니다.",
    use: "정렬된 배열에서 값을 찾거나, ‘가능/불가능’이 한 방향으로 바뀌는 답을 찾을 때 사용합니다.",
    complexity: "O(log N)",
    interview: "정렬된 범위의 가운데를 확인한 뒤 답이 있을 수 없는 절반을 제거하므로 탐색 범위가 매번 절반으로 줄어듭니다.",
  },
  graph: {
    title: "DFS / BFS",
    oneLine: "그래프에서 연결된 정점을 어떤 순서로 방문할지 정하는 대표 탐색 방법입니다.",
    use: "연결 요소, 경로 탐색, 최단 거리(가중치 없는 그래프), 모든 경우 탐색 등에 사용합니다.",
    complexity: "O(V + E)",
    interview: "DFS는 한 방향으로 깊게 들어가며 스택·재귀를 사용하고, BFS는 가까운 정점부터 방문하며 큐를 사용합니다.",
  },
  heap: {
    title: "힙 / 우선순위 큐",
    oneLine: "가장 크거나 가장 작은 값을 빠르게 꺼내기 위해 완전이진트리 형태로 관리하는 자료구조입니다.",
    use: "최솟값·최댓값을 반복해서 꺼내야 하는 문제, 다익스트라, 스케줄링 등에 사용합니다.",
    complexity: "삽입·삭제 O(log N), 최댓값/최솟값 확인 O(1)",
    interview: "삽입과 삭제 때 부모·자식 관계를 다시 맞추며 트리 높이가 log N이므로 O(log N)에 처리할 수 있습니다.",
  },
  sort: {
    title: "정렬",
    oneLine: "데이터를 일정한 기준에 따라 순서대로 배치하는 과정입니다.",
    use: "이분 탐색의 전처리, 중복 처리, 순서 관계 비교, 그리디 문제 등에서 자주 사용합니다.",
    complexity: "삽입 정렬 O(N²), 병합·힙 정렬 O(N log N)",
    interview: "정렬 자체보다 정렬 후 무엇이 쉬워지는지를 설명하는 것이 중요합니다. 예를 들어 정렬 후 이분 탐색이나 인접 값 비교가 가능해집니다.",
  },
  dp: {
    title: "동적 계획법(DP)",
    oneLine: "같은 작은 문제가 반복될 때, 한 번 계산한 값을 저장해 다시 사용하는 방법입니다.",
    use: "최적값, 경우의 수, 수열, 경로 문제에서 작은 상태의 답으로 큰 상태의 답을 만들 수 있을 때 사용합니다.",
    complexity: "상태 수 × 상태 하나를 계산하는 비용",
    interview: "DP에서는 dp[i]가 무엇을 의미하는지 상태를 먼저 정의하고, 이전 상태에서 현재 상태를 만드는 점화식을 설명해야 합니다.",
  },
};

const tabs: { key: SimKey; label: string }[] = [
  { key: "binary", label: "이분 탐색" },
  { key: "graph", label: "DFS / BFS" },
  { key: "heap", label: "힙" },
  { key: "sort", label: "정렬" },
  { key: "dp", label: "DP" },
];

export default function AlgorithmInterviewSimulator() {
  const [active, setActive] = useState<SimKey>("binary");
  const [step, setStep] = useState(0);
  const [graphMode, setGraphMode] = useState<GraphMode>("bfs");

  const maxStep = useMemo(() => {
    if (active === "binary") return binarySteps.length - 1;
    if (active === "graph") return (graphMode === "bfs" ? bfsSteps : dfsSteps).length - 1;
    if (active === "heap") return heapSteps.length - 1;
    if (active === "sort") return sortSteps.length - 1;
    return dpSteps.length - 1;
  }, [active, graphMode]);

  function changeTab(key: SimKey) {
    setActive(key);
    setStep(0);
  }

  function changeGraphMode(mode: GraphMode) {
    setGraphMode(mode);
    setStep(0);
  }

  const info = meta[active];

  return (
    <section className="algo-sim">
      <div className="algo-sim-heading">
        <span>VISUAL SIMULATOR</span>
        <h3>시뮬레이터로 알고리즘 이해하기</h3>
        <p>
          버튼을 눌러 한 단계씩 따라가며 <b>“무엇이 변하는지”</b>를 눈으로 확인하세요.
          시뮬레이션이 끝나면 아래 면접 설명을 자신의 말로 다시 말해보는 것이 목표입니다.
        </p>
      </div>

      <div className="algo-sim-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={active === tab.key ? "selected" : ""}
            onClick={() => changeTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="algo-sim-explain">
        <div>
          <span>한 문장 설명</span>
          <strong>{info.oneLine}</strong>
        </div>
        <div>
          <span>언제 쓰나?</span>
          <p>{info.use}</p>
        </div>
        <div>
          <span>대표 복잡도</span>
          <b>{info.complexity}</b>
        </div>
      </div>

      <div className="algo-sim-stage">
        <div className="algo-sim-stage-head">
          <div>
            <span>{info.title}</span>
            <strong>STEP {step + 1} / {maxStep + 1}</strong>
          </div>
          {active === "graph" && (
            <div className="algo-sim-mode">
              <button type="button" className={graphMode === "bfs" ? "selected" : ""} onClick={() => changeGraphMode("bfs")}>BFS</button>
              <button type="button" className={graphMode === "dfs" ? "selected" : ""} onClick={() => changeGraphMode("dfs")}>DFS</button>
            </div>
          )}
        </div>

        {active === "binary" && <BinaryView step={step} />}
        {active === "graph" && <GraphView step={step} mode={graphMode} />}
        {active === "heap" && <HeapView step={step} />}
        {active === "sort" && <SortView step={step} />}
        {active === "dp" && <DpView step={step} />}

        <div className="algo-sim-controls">
          <button type="button" onClick={() => setStep(0)} disabled={step === 0}>처음</button>
          <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>이전</button>
          <button type="button" className="primary" onClick={() => setStep((s) => Math.min(maxStep, s + 1))} disabled={step === maxStep}>다음 단계</button>
        </div>
      </div>

      <div className="algo-sim-interview">
        <span>면접에서는 이렇게 설명</span>
        <p>{info.interview}</p>
      </div>
    </section>
  );
}

function BinaryView({ step }: { step: number }) {
  const values = [2, 5, 8, 11, 15, 19, 27];
  const state = binarySteps[step];

  return (
    <div className="algo-sim-view">
      <div className="algo-sim-target">목표값 <b>19</b></div>
      <div className="algo-array">
        {values.map((value, index) => {
          const outside = index < state.left || index > state.right;
          const mid = index === state.mid;
          return (
            <div key={value} className={(outside ? "outside " : "") + (mid ? "focus" : "")}>
              <span>{value}</span>
              {mid && <b>mid</b>}
            </div>
          );
        })}
      </div>
      <p className="algo-sim-note">{state.note}</p>
    </div>
  );
}

function GraphView({ step, mode }: { step: number; mode: GraphMode }) {
  const state = (mode === "bfs" ? bfsSteps : dfsSteps)[step];
  const nodes = Object.keys(graph);

  return (
    <div className="algo-sim-view">
      <div className="algo-graph-layout">
        <div className="algo-graph">
          <svg viewBox="0 0 360 220" aria-hidden="true">
            <line x1="180" y1="35" x2="95" y2="95" />
            <line x1="180" y1="35" x2="265" y2="95" />
            <line x1="95" y1="95" x2="45" y2="175" />
            <line x1="95" y1="95" x2="145" y2="175" />
            <line x1="265" y1="95" x2="265" y2="175" />
          </svg>
          {[
            ["A", 50, 10], ["B", 26, 38], ["C", 73, 38],
            ["D", 12, 75], ["E", 40, 75], ["F", 73, 75],
          ].map(([name, left, top]) => (
            <span
              key={String(name)}
              style={{ left: String(left) + "%", top: String(top) + "%" }}
              className={(state.visited.includes(String(name)) ? "visited " : "") + (state.current === name ? "current" : "")}
            >
              {name}
            </span>
          ))}
        </div>
        <div className="algo-container-state">
          <span>{mode === "bfs" ? "QUEUE" : "STACK"}</span>
          <div>
            {state.container.length ? state.container.map((item) => <b key={item}>{item}</b>) : <i>비어 있음</i>}
          </div>
          <p>방문 순서: {state.visited.join(" → ")}</p>
        </div>
      </div>
      <p className="algo-sim-note">{state.note}</p>
    </div>
  );
}

function HeapView({ step }: { step: number }) {
  const state = heapSteps[step];

  return (
    <div className="algo-sim-view">
      <div className="algo-heap-tree">
        {state.heap.map((value, index) => (
          <div
            key={index}
            className={index === state.focus ? "focus" : ""}
            style={{ gridColumn: index === 0 ? "1 / -1" : undefined }}
          >
            <span>{value}</span>
            <small>index {index}</small>
          </div>
        ))}
      </div>
      <div className="algo-heap-array">
        {state.heap.map((value, index) => <span key={index} className={index === state.focus ? "focus" : ""}>{value}</span>)}
      </div>
      <p className="algo-sim-note">{state.note}</p>
    </div>
  );
}

function SortView({ step }: { step: number }) {
  const state = sortSteps[step];

  return (
    <div className="algo-sim-view">
      <div className="algo-sort-bars">
        {state.values.map((value, index) => (
          <div key={index}>
            <span
              className={(index <= state.fixed ? "fixed " : "") + (index === state.focus ? "focus" : "")}
              style={{ height: String(34 + value * 22) + "px" }}
            >{value}</span>
          </div>
        ))}
      </div>
      <p className="algo-sim-note">{state.note}</p>
    </div>
  );
}

function DpView({ step }: { step: number }) {
  const state = dpSteps[step];

  return (
    <div className="algo-sim-view">
      <div className="algo-dp-formula">dp[n] = dp[n-1] + dp[n-2]</div>
      <div className="algo-dp-table">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className={index < state.table.length ? "filled" : ""}>
            <span>dp[{index + 1}]</span>
            <b>{state.table[index] ?? "?"}</b>
          </div>
        ))}
      </div>
      <p className="algo-sim-note">{state.note}</p>
    </div>
  );
}
