import Link from "next/link";

const deepDiveQuestions = [
  "정보올림피아드에 처음 도전하게 된 계기는 무엇인가요?",
  "본선에서 가장 자신 있게 설명할 수 있는 문제 하나를 선택해 문제를 요약해 보세요.",
  "그 문제에서 가장 중요한 제약 조건은 무엇이었나요?",
  "처음 떠올린 가장 단순한 풀이 방법은 무엇이었나요?",
  "단순한 풀이가 제한시간 안에 통과하기 어려운 이유를 시간복잡도로 설명해 보세요.",
  "최종적으로 선택한 알고리즘은 무엇이며, 왜 그 방법을 선택했나요?",
  "사용한 자료구조는 무엇이고 다른 자료구조보다 적합했던 이유는 무엇인가요?",
  "풀이의 시간복잡도와 공간복잡도를 설명해 보세요.",
  "알고리즘이 항상 올바른 답을 만든다고 생각한 근거를 설명해 보세요.",
  "가장 까다로웠던 예외 상황이나 반례는 무엇이었나요?",
  "구현 과정에서 가장 오래 걸린 오류는 무엇이었고 어떻게 찾았나요?",
  "부분점수를 받은 문제가 있다면 어떤 부분까지 해결했고 무엇이 부족했나요?",
  "대회가 끝난 뒤 다시 풀어 본 문제 중 풀이를 개선한 사례가 있나요?",
  "같은 문제를 다른 알고리즘으로 풀 수 있다면 어떤 방법이 있을까요?",
  "입력 크기가 10배로 커지면 현재 풀이를 그대로 사용할 수 있을까요?",
];

const transferQuestions = [
  "입력 데이터가 거의 정렬되어 있다면 더 유리한 방법이 있을까요?",
  "메모리 제한이 절반으로 줄어든다면 어떤 부분을 바꾸겠나요?",
  "중복되는 값이 매우 많아진다면 현재 알고리즘에 어떤 영향이 있나요?",
  "정답 하나가 아니라 모든 가능한 답을 출력해야 한다면 어떻게 바뀌나요?",
  "온라인으로 데이터가 하나씩 들어온다면 같은 방법을 사용할 수 있나요?",
  "최악의 경우와 평균적인 경우의 수행시간이 다르다면 각각 설명해 보세요.",
  "그리디 풀이가 가능하다고 주장한다면 어떤 근거가 필요할까요?",
  "동적 계획법으로 푼다면 상태와 점화식을 어떻게 정의하겠나요?",
  "그래프 문제라면 BFS와 DFS 중 무엇을 선택할지 어떤 기준으로 판단하나요?",
  "이분 탐색을 적용할 수 있는 문제의 공통적인 특징을 설명해 보세요.",
];

const careerQuestions = [
  "지원 학과와 본인의 알고리즘 역량이 어떻게 연결된다고 생각하나요?",
  "본인이 지원 학과에 적합하다고 생각하는 가장 구체적인 근거는 무엇인가요?",
  "중학교에서 가장 깊게 공부한 과목은 무엇이고, 왜 그 과목을 깊게 공부했나요?",
  "알고리즘 문제풀이 외에 고등학교에서 새롭게 공부하고 싶은 분야는 무엇인가요?",
  "대회 준비 과정에서 수학이 실제 문제 해결에 도움을 준 사례가 있나요?",
  "알고리즘 실력만으로 좋은 개발자가 될 수 있다고 생각하나요? 그 이유는?",
  "입학 후 정보올림피아드 준비를 계속한다면 학교생활과 어떻게 균형을 맞추겠나요?",
  "졸업 후 어떤 분야를 공부하거나 어떤 문제를 해결하는 사람이 되고 싶나요?",
];

const characterQuestions = [
  "대회에서 기대보다 낮은 결과를 받았던 경험이 있다면 어떻게 받아들였나요?",
  "친구가 본인의 풀이를 이해하지 못할 때 어떻게 설명하겠나요?",
  "팀 프로젝트에서 본인의 의견과 팀원의 의견이 충돌하면 어떻게 해결하나요?",
  "자신보다 알고리즘을 더 잘하는 친구와 함께 생활한다면 어떤 태도를 가지겠나요?",
  "정해진 규칙이 본인에게 불리하더라도 지켜야 한다고 생각하나요? 이유는?",
  "기숙사나 단체생활에서 갈등이 생겼을 때 가장 중요하다고 생각하는 것은 무엇인가요?",
  "대회 준비 때문에 다른 학업이나 생활에 어려움이 생겼던 적이 있다면 어떻게 조절했나요?",
  "본인이 다른 사람에게 도움을 준 경험과 도움을 받은 경험을 각각 말해 보세요.",
];

const evidenceQuestions = [
  "수상한 대회의 연도·부문·수상 등급을 정확히 설명해 보세요.",
  "예선과 본선은 각각 어떤 방식으로 진행되었나요?",
  "본선에서 해결한 문제와 해결하지 못한 문제를 구분해서 설명해 보세요.",
  "대회 준비 기간 동안 가장 많이 훈련한 알고리즘 분야는 무엇인가요?",
  "본인이 생각하는 이번 수상의 가장 큰 원인은 무엇인가요?",
  "대회 당일 시간 배분은 어떻게 했나요?",
  "풀 수 있었지만 제출하지 못한 문제가 있다면 이유는 무엇인가요?",
  "수상 결과보다 더 중요하게 얻은 것이 있다면 무엇인가요?",
];

const prepChecklist = [
  {
    title: "출전 대회에 대한 이해",
    body: "대회명 → 연도·부문 → 본선 진행 방식 → 수상 등급 → 내가 증명했다고 생각하는 역량의 순서로 짧게 정리합니다.",
  },
  {
    title: "기출문제 모두 완전 분석",
    body: "문제 요약, 입력 제한, 단순 풀이, 선택 알고리즘, 자료구조, 시간·공간복잡도, 정당성, 예외 케이스, 구현 실수까지 설명할 수 있어야 합니다.",
  },
  {
    title: "부분점수·실패 문제도 준비",
    body: "완벽히 푼 문제만 준비하지 말고, 어디까지 생각했고 왜 막혔으며 대회 후 어떻게 개선했는지를 정리합니다. 문제해결 과정 자체를 보여 줄 수 있습니다.",
  },
  {
    title: "알고리즘 용어를 정의까지 설명",
    body: "DP·그리디·BFS·DFS·이분 탐색 같은 용어 이름만 말하지 않고, 언제 쓰는지와 자신의 문제에서 어떤 역할을 했는지 설명합니다.",
  },
  {
    title: "지원 학과와 연결",
    body: "수상 자체를 자랑하는 데서 끝내지 않고, 알고리즘 문제해결 경험이 지원 학과의 학습과 향후 진로에 어떻게 이어지는지 말할 수 있도록 준비합니다.",
  },
  {
    title: "인성·단체생활 사례 준비",
    body: "경쟁 경험, 실패 경험, 친구와의 협업, 규칙 준수, 갈등 해결 사례를 각각 하나씩 준비하되 결과보다 판단 과정과 행동을 중심으로 말합니다.",
  },
];

const bigOExamples = [
  {
    title: "반복문 1개",
    complexity: "O(N)",
    summary: "N번 반복하면 핵심 연산의 횟수가 N에 비례합니다.",
    problem: "예시 문제: N이 주어졌을 때 1부터 N까지의 합을 구하세요.",
    analysis: "덧셈이 N번 수행되므로 T(N) = N입니다. 따라서 O(N)입니다.",
    nValue: "N = 10,000",
    operationCount: "10,000회",
    operationDetail: "합을 갱신하는 핵심 연산 sum += i가 N번 실행됩니다.",
    highlightContains: ["for (int i = 1; i <= N; i++) {","sum += i;"],
    code: "#include <stdio.h>\n\nint main() {\n    int N;\n    long long sum = 0;\n\n    scanf(\"%d\", &N);\n\n    for (int i = 1; i <= N; i++) {\n        sum += i;\n    }\n\n    printf(\"%lld\\n\", sum);\n    return 0;\n}",
  },
  {
    title: "중첩 반복문",
    complexity: "O(N²)",
    summary: "N번 반복하는 반복문 안에서 다시 N번 반복하면 N × N번 수행됩니다.",
    problem: "예시 문제: 1부터 N까지의 수로 만들 수 있는 순서쌍 (i, j)의 개수를 구하세요.",
    analysis: "바깥 반복문 N번 × 안쪽 반복문 N번 = N²번이므로 O(N²)입니다.",
    nValue: "N = 10,000",
    operationCount: "100,000,000회",
    operationDetail: "10,000 × 10,000 = 100,000,000이므로 count++가 1억 번 실행됩니다.",
    highlightContains: ["for (int i = 1; i <= N; i++) {","for (int j = 1; j <= N; j++) {","count++;"],
    code: "#include <stdio.h>\n\nint main() {\n    int N;\n    long long count = 0;\n\n    scanf(\"%d\", &N);\n\n    for (int i = 1; i <= N; i++) {\n        for (int j = 1; j <= N; j++) {\n            count++;\n        }\n    }\n\n    printf(\"%lld\\n\", count);\n    return 0;\n}",
  },
  {
    title: "순차 실행",
    complexity: "O(N²)",
    summary: "O(N) 작업 뒤에 O(N²) 작업을 실행하면 더 빠르게 증가하는 N²이 남습니다.",
    problem: "예시 문제: 1부터 N까지의 합을 구한 뒤, 모든 순서쌍 (i, j)의 개수도 구하세요.",
    analysis: "첫 번째 반복문은 N번, 두 번째 중첩 반복문은 N²번입니다. T(N) = N + N²이므로 O(N²)입니다.",
    nValue: "N = 10,000",
    operationCount: "100,010,000회",
    operationDetail: "10,000 + (10,000 × 10,000) = 100,010,000입니다. 큰 항 N²이 전체 증가율을 결정합니다.",
    highlightContains: ["for (int i = 1; i <= N; i++) {","sum += i;","for (int j = 1; j <= N; j++) {","count++;"],
    code: "#include <stdio.h>\n\nint main() {\n    int N;\n    long long sum = 0;\n    long long count = 0;\n\n    scanf(\"%d\", &N);\n\n    for (int i = 1; i <= N; i++) {\n        sum += i;\n    }\n\n    for (int i = 1; i <= N; i++) {\n        for (int j = 1; j <= N; j++) {\n            count++;\n        }\n    }\n\n    printf(\"%lld %lld\\n\", sum, count);\n    return 0;\n}",
  },
  {
    title: "상수 제거",
    complexity: "O(N)",
    summary: "3N + 20처럼 상수배와 고정 횟수는 N이 커질수록 영향이 작아져 생략합니다.",
    problem: "예시 문제: 1부터 N까지의 합을 세 번 계산한 뒤, 추가 연산을 20번 수행하세요.",
    analysis: "N번 반복을 3번 수행하고 고정 연산을 20번 수행하므로 T(N) = 3N + 20입니다. 상수 3과 20을 생략하면 O(N)입니다.",
    nValue: "N = 10,000",
    operationCount: "30,020회",
    operationDetail: "(10,000 × 3) + 20 = 30,020입니다. N이 커질수록 상수배 3과 고정값 20의 영향은 상대적으로 작아집니다.",
    highlightContains: ["for (int i = 1; i <= N; i++) {","total += i;","for (int i = 0; i < 20; i++) {","total++;"],
    code: "#include <stdio.h>\n\nint main() {\n    int N;\n    long long total = 0;\n\n    scanf(\"%d\", &N);\n\n    for (int i = 1; i <= N; i++) {\n        total += i;\n    }\n\n    for (int i = 1; i <= N; i++) {\n        total += i;\n    }\n\n    for (int i = 1; i <= N; i++) {\n        total += i;\n    }\n\n    for (int i = 0; i < 20; i++) {\n        total++;\n    }\n\n    printf(\"%lld\\n\", total);\n    return 0;\n}",
  },
  {
    title: "범위를 절반씩 감소",
    complexity: "O(log N)",
    summary: "탐색 범위를 매번 절반으로 줄이면 반복 횟수는 log₂N에 비례합니다.",
    problem: "예시 문제: 오름차순으로 정렬된 N개의 정수에서 목표값 X가 있는지 이분 탐색으로 찾으세요.",
    analysis: "탐색 범위가 N → N/2 → N/4 → …로 줄어듭니다. 약 log₂N번 만에 범위가 1이 되므로 O(log N)입니다.",
    nValue: "N = 1,000,000",
    operationCount: "최대 약 20회",
    operationDetail: "log₂(1,000,000) ≈ 19.93이므로 탐색 범위를 약 20번 절반으로 줄이면 결과를 판단할 수 있습니다.",
    highlightContains: ["while (left <= right) {","int mid = (left + right) / 2;","if (a[mid] == X) {","} else if (a[mid] < X) {","left = mid + 1;","right = mid - 1;"],
    code: "#include <stdio.h>\n\nint main() {\n    int N, X;\n    int a[1000000];\n\n    scanf(\"%d\", &N);\n\n    for (int i = 0; i < N; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n\n    scanf(\"%d\", &X);\n\n    int left = 0;\n    int right = N - 1;\n    int found = 0;\n\n    while (left <= right) {\n        int mid = (left + right) / 2;\n\n        if (a[mid] == X) {\n            found = 1;\n            break;\n        } else if (a[mid] < X) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n\n    printf(\"%d\\n\", found);\n    return 0;\n}",
  },
  {
    title: "정렬 후 한 번 순회",
    complexity: "O(N log N)",
    summary: "O(N log N) 정렬 뒤에 O(N) 순회를 해도 전체는 O(N log N)입니다.",
    problem: "예시 문제: N개의 정수를 정렬한 뒤 서로 다른 값의 개수를 구하세요.",
    analysis: "병합 정렬이 O(N log N), 정렬 후 서로 다른 값을 세는 순회가 O(N)입니다. T(N) = N log N + N이므로 O(N log N)입니다.",
    nValue: "N = 65,536",
    operationCount: "약 1,114,112회 규모",
    operationDetail: "65,536 × log₂65,536 + 65,536 = 65,536 × 16 + 65,536 = 1,114,112입니다. 실제 명령 수와 정확히 같지는 않지만 Big-O 기준의 연산 규모를 비교하기 위한 계산입니다.",
    highlightContains: ["while (i <= mid && j <= right) {","while (i <= mid) {","while (j <= right) {","mergeSort(left, mid);","mergeSort(mid + 1, right);","merge(left, mid, right);","mergeSort(0, N - 1);","if (i == 0 || a[i] != a[i - 1]) {","uniqueCount++;"],
    code: "#include <stdio.h>\n\nint a[100000];\nint temp[100000];\n\nvoid merge(int left, int mid, int right) {\n    int i = left;\n    int j = mid + 1;\n    int k = left;\n\n    while (i <= mid && j <= right) {\n        if (a[i] <= a[j]) {\n            temp[k++] = a[i++];\n        } else {\n            temp[k++] = a[j++];\n        }\n    }\n\n    while (i <= mid) {\n        temp[k++] = a[i++];\n    }\n\n    while (j <= right) {\n        temp[k++] = a[j++];\n    }\n\n    for (int t = left; t <= right; t++) {\n        a[t] = temp[t];\n    }\n}\n\nvoid mergeSort(int left, int right) {\n    if (left >= right) {\n        return;\n    }\n\n    int mid = (left + right) / 2;\n\n    mergeSort(left, mid);\n    mergeSort(mid + 1, right);\n    merge(left, mid, right);\n}\n\nint main() {\n    int N;\n\n    scanf(\"%d\", &N);\n\n    for (int i = 0; i < N; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n\n    mergeSort(0, N - 1);\n\n    int uniqueCount = 0;\n\n    for (int i = 0; i < N; i++) {\n        if (i == 0 || a[i] != a[i - 1]) {\n            uniqueCount++;\n        }\n    }\n\n    printf(\"%d\\n\", uniqueCount);\n    return 0;\n}",
  }
];

const analysisPracticeProblems = [
  {
    title: "최소 길이 배송 구간",
    topic: "투 포인터",
    problem:
      "양의 정수 N개가 일렬로 놓여 있습니다. 연속한 구간의 합이 S 이상이 되는 구간 중 길이가 가장 짧은 구간의 길이를 구하세요. 조건을 만족하는 구간이 없으면 0을 출력합니다.",
    constraints: "1 ≤ N ≤ 200,000, 1 ≤ A[i] ≤ 10,000, 1 ≤ S ≤ 10^9",
    keyConstraint:
      "모든 값이 양수이므로 오른쪽 끝을 늘리면 구간 합은 감소하지 않고, 왼쪽 끝을 줄이면 합이 감소합니다.",
    naive:
      "모든 시작점과 끝점을 확인하면 O(N²)입니다. N=200,000이면 약 400억 개의 구간을 확인해야 하므로 불가능합니다.",
    algorithm:
      "왼쪽 포인터와 오른쪽 포인터를 두고 오른쪽을 한 번씩 늘립니다. 합이 S 이상이 되면 조건을 유지하는 동안 왼쪽을 줄이며 최소 길이를 갱신합니다.",
    correctness:
      "값이 모두 양수이므로 현재 오른쪽 끝에서 합이 S 이상인 순간, 왼쪽을 가능한 만큼 당겨 얻은 구간이 그 오른쪽 끝을 사용하는 최소 길이 구간입니다.",
    time:
      "O(N)",
    operation:
      "N=200,000일 때 두 포인터가 각각 최대 N번 이동하므로 핵심 이동은 대략 400,000회 규모입니다.",
    space:
      "O(1) 추가 공간",
    memory:
      "입력을 배열로 저장하면 O(N), 스트리밍으로 처리 가능한 형태라면 핵심 알고리즘의 추가 변수는 상수 개수입니다.",
  },
  {
    title: "교차하지 않는 신호선",
    topic: "LIS · 이분 탐색",
    problem:
      "왼쪽 기둥의 1번부터 N번 위치에 연결된 신호선이 오른쪽 기둥의 서로 다른 위치 B[i]로 이어집니다. 서로 교차하지 않도록 최대한 많은 신호선을 남기려고 할 때 남길 수 있는 최대 개수를 구하세요.",
    constraints: "1 ≤ N ≤ 200,000, B[i]는 서로 다른 1..N의 값",
    keyConstraint:
      "왼쪽 위치는 이미 증가 순서이므로 교차하지 않으려면 선택한 B[i]도 증가해야 합니다. 결국 B 수열의 최장 증가 부분수열 길이를 구하는 문제입니다.",
    naive:
      "각 위치에서 이전 위치를 모두 확인하는 DP는 O(N²)이라 N=200,000에서 불가능합니다.",
    algorithm:
      "길이별 증가 부분수열의 가능한 최소 마지막 값을 배열에 유지하고, 각 B[i]를 lower_bound로 들어갈 위치를 찾아 갱신합니다.",
    correctness:
      "같은 길이의 증가 부분수열이라면 마지막 값이 작을수록 이후 값을 이어 붙이기 유리하므로 최소 마지막 값만 유지해도 최종 LIS 길이는 보존됩니다.",
    time:
      "O(N log N)",
    operation:
      "N=200,000, log₂N≈17.6이므로 이분 탐색 비교는 대략 350만 회 규모입니다.",
    space:
      "O(N)",
    memory:
      "int 배열 N개를 사용하면 약 200,000×4Byte≈0.8MB가 필요합니다.",
  },
  {
    title: "무료 문이 있는 미로",
    topic: "0-1 BFS",
    problem:
      "H×W 격자에서 상하좌우로 이동합니다. 빈 칸으로 이동하는 비용은 0이고, 잠긴 문이 있는 칸으로 들어가면 비용이 1입니다. 시작점에서 도착점까지 이동할 때 열어야 하는 문의 최소 개수를 구하세요.",
    constraints: "1 ≤ H,W ≤ 1,000, 전체 칸 수 ≤ 1,000,000",
    keyConstraint:
      "간선 비용이 일반적인 여러 값이 아니라 0 또는 1뿐입니다. 따라서 우선순위 큐를 쓰는 다익스트라보다 0-1 BFS가 적합합니다.",
    naive:
      "모든 경로를 탐색하는 방식은 경우의 수가 폭발합니다. 단순 BFS도 이동 횟수만 최소화하므로 비용 0/1을 올바르게 처리하지 못합니다.",
    algorithm:
      "deque를 사용합니다. 비용 0인 간선으로 갱신되면 앞쪽에, 비용 1인 간선으로 갱신되면 뒤쪽에 넣어 작은 비용의 정점을 먼저 처리합니다.",
    correctness:
      "deque의 앞쪽에는 현재 비용을 증가시키지 않는 정점이 유지되므로, 다익스트라에서 가장 작은 거리 정점을 먼저 처리하는 성질을 0/1 가중치에 맞게 구현할 수 있습니다.",
    time:
      "O(HW)",
    operation:
      "칸이 1,000,000개라면 각 칸의 최대 4개 이웃을 확인하므로 대략 수백만 번의 간선 확인 규모입니다.",
    space:
      "O(HW)",
    memory:
      "거리 int 배열만 계산해도 1,000,000×4Byte≈4MB이며, 격자와 deque 저장 공간이 추가됩니다.",
  },
  {
    title: "산간 배송 최단 시간",
    topic: "다익스트라",
    problem:
      "N개의 마을과 M개의 단방향 도로가 있습니다. 각 도로의 이동 시간은 1 이상의 양수입니다. 1번 마을에서 모든 마을까지의 최단 시간을 구하세요. 도달할 수 없는 마을은 -1로 표시합니다.",
    constraints: "1 ≤ N ≤ 200,000, 1 ≤ M ≤ 400,000, 도로 시간 ≤ 10^9",
    keyConstraint:
      "간선 가중치가 모두 양수이고 정점과 간선 수가 매우 커서 O(N²) 다익스트라는 사용할 수 없습니다.",
    naive:
      "방문하지 않은 정점 중 최소 거리를 매번 선형 탐색하면 O(N²)입니다. N=200,000에서는 약 400억 수준이 됩니다.",
    algorithm:
      "인접 리스트와 최소 힙을 사용한 다익스트라를 적용합니다. 더 짧은 거리를 찾을 때만 힙에 새 상태를 넣고, 오래된 상태는 건너뜁니다.",
    correctness:
      "모든 간선 가중치가 음수가 아니므로 힙에서 확정되는 가장 작은 거리의 정점은 이후 다른 경로를 통해 더 짧아질 수 없습니다.",
    time:
      "O((N+M) log N)",
    operation:
      "M=400,000, N=200,000에서 log₂N≈17.6이므로 힙 연산은 대략 수백만~천만 회 규모로 판단합니다.",
    space:
      "O(N+M)",
    memory:
      "거리 배열은 약 0.8MB(int 기준)이지만 큰 가중치 합을 위해 long long을 쓰면 약 1.6MB이며, 인접 리스트가 주 메모리를 차지합니다.",
  },
  {
    title: "점프 에너지 최소화",
    topic: "동적 계획법",
    problem:
      "1번부터 N번까지 돌이 있고 각 돌의 높이 H[i]가 주어집니다. i번 돌에서는 i+1 또는 i+2번 돌로 이동할 수 있고, 이동 비용은 두 돌 높이 차이의 절댓값입니다. 1번에서 N번까지 가는 최소 비용을 구하세요.",
    constraints: "2 ≤ N ≤ 1,000,000, 0 ≤ H[i] ≤ 10^9",
    keyConstraint:
      "N이 매우 크지만 i번째 상태는 바로 앞의 두 상태만 필요합니다.",
    naive:
      "가능한 모든 점프 경로를 재귀적으로 탐색하면 경우의 수가 피보나치처럼 증가해 지수 시간이 걸립니다.",
    algorithm:
      "dp[i]=i번 돌까지의 최소 비용으로 두고 dp[i-1], dp[i-2]에서 오는 두 경우의 최솟값을 사용합니다. 이전 두 값만 보관하면 배열도 필요 없습니다.",
    correctness:
      "마지막 이동은 반드시 i-1 또는 i-2에서 오므로 두 최적 부분문제 중 더 작은 값에 마지막 이동 비용을 더하면 전체 최적해가 됩니다.",
    time:
      "O(N)",
    operation:
      "N=1,000,000이면 각 위치에서 상수 개의 비교와 덧셈만 하므로 약 100만 단계 규모입니다.",
    space:
      "O(1) 추가 공간",
    memory:
      "이전 두 DP 값만 유지하면 long long 변수 몇 개만 필요합니다. 높이를 전부 저장하지 않고 순차 입력 처리도 가능합니다.",
  },
  {
    title: "시험실 최소 개수",
    topic: "정렬 · 우선순위 큐",
    problem:
      "N개의 시험이 각각 시작 시각과 종료 시각을 가집니다. 한 시험실에서는 앞 시험이 끝난 시각과 같거나 이후에 다음 시험을 시작할 수 있습니다. 모든 시험을 배치하기 위한 최소 시험실 수를 구하세요.",
    constraints: "1 ≤ N ≤ 300,000, 0 ≤ 시작 < 종료 ≤ 10^9",
    keyConstraint:
      "동시에 진행되는 시험의 최대 개수가 필요한 시험실 수와 같습니다.",
    naive:
      "시험 하나를 배치할 때마다 모든 기존 시험실의 종료 시각을 확인하면 최악 O(N²)이 됩니다.",
    algorithm:
      "시험을 시작 시각순으로 정렬하고, 사용 중인 시험실의 종료 시각을 최소 힙에 저장합니다. 가장 빨리 끝나는 시험실을 재사용할 수 있으면 pop 후 새 종료 시각을 push합니다.",
    correctness:
      "새 시험이 시작될 때 가장 빨리 끝나는 시험실조차 비어 있지 않다면 다른 모든 시험실도 사용할 수 없으므로 새 시험실이 반드시 필요합니다.",
    time:
      "O(N log N)",
    operation:
      "N=300,000, log₂N≈18.2이므로 정렬과 힙 처리는 각각 수백만 회 비교 규모입니다.",
    space:
      "O(N)",
    memory:
      "최악의 경우 종료 시각 N개를 힙에 저장합니다. long long이면 약 2.4MB의 원소 데이터가 필요하며 컨테이너 오버헤드가 추가됩니다.",
  },
  {
    title: "오른쪽 첫 번째 높은 탑",
    topic: "단조 스택",
    problem:
      "N개의 탑 높이가 왼쪽부터 주어집니다. 각 탑마다 오른쪽에 있으면서 자신보다 처음으로 높은 탑의 번호를 구하세요. 없으면 0을 출력합니다.",
    constraints: "1 ≤ N ≤ 1,000,000, 1 ≤ 높이 ≤ 10^9",
    keyConstraint:
      "각 위치에서 오른쪽을 끝까지 다시 찾으면 O(N²)이지만, 이미 더 낮아서 의미가 없어진 후보는 다시 볼 필요가 없습니다.",
    naive:
      "각 탑마다 오른쪽으로 선형 탐색하면 최악 1조 번 가까운 비교가 생길 수 있습니다.",
    algorithm:
      "높이가 단조 감소하도록 인덱스를 스택에 유지합니다. 새 탑이 스택 top보다 높으면 조건을 만족한 인덱스를 계속 pop하며 정답을 기록합니다.",
    correctness:
      "스택에 남아 있는 인덱스들은 아직 오른쪽에서 더 높은 탑을 만나지 못한 위치들입니다. 처음 pop시키는 현재 탑이 바로 그 위치의 가장 가까운 높은 탑입니다.",
    time:
      "O(N)",
    operation:
      "각 인덱스는 스택에 한 번 push되고 최대 한 번 pop되므로 N=1,000,000일 때 약 200만 회의 스택 연산 규모입니다.",
    space:
      "O(N)",
    memory:
      "인덱스를 int로 최대 N개 저장하면 스택 원소 데이터는 약 4MB입니다.",
  },
  {
    title: "섬을 잇는 최소 비용",
    topic: "크루스칼 · 분리 집합",
    problem:
      "N개의 섬과 M개의 다리 후보가 있고 각 다리를 건설하는 비용이 주어집니다. 모든 섬이 서로 이동 가능하도록 만들 때 필요한 최소 건설 비용을 구하세요.",
    constraints: "2 ≤ N ≤ 200,000, 1 ≤ M ≤ 300,000, 비용 ≤ 10^9",
    keyConstraint:
      "모든 정점을 연결해야 하지만 불필요한 사이클에 비용을 사용할 이유는 없습니다. 최소 신장 트리 문제입니다.",
    naive:
      "다리 부분집합을 모두 시도하는 것은 2^M 경우라 불가능합니다.",
    algorithm:
      "다리를 비용순으로 정렬하고, 서로 다른 컴포넌트를 잇는 다리만 선택합니다. 연결 여부는 경로 압축과 union by size/rank를 적용한 분리 집합으로 관리합니다.",
    correctness:
      "현재 서로 다른 두 컴포넌트를 잇는 가장 싼 간선은 MST의 cut property에 의해 안전하게 선택할 수 있습니다.",
    time:
      "O(M log M)",
    operation:
      "M=300,000이면 log₂M≈18.2이므로 정렬 비교는 대략 550만 회 규모이고, union/find는 거의 상수 시간에 가깝습니다.",
    space:
      "O(N+M)",
    memory:
      "부모·크기 배열은 int 기준 약 1.6MB, 간선 300,000개는 저장 구조체 크기에 따라 수 MB 이상이 필요합니다.",
  },
  {
    title: "선행 작업이 있는 프로젝트",
    topic: "위상 정렬 · DAG DP",
    problem:
      "N개의 작업마다 수행 시간이 있고 M개의 선행 관계가 주어집니다. 서로 선행 관계가 없는 작업은 동시에 수행할 수 있습니다. 모든 작업을 끝내는 데 필요한 최소 시간을 구하세요.",
    constraints: "1 ≤ N ≤ 200,000, 0 ≤ M ≤ 400,000, 작업 시간 ≤ 10^9, 선행 관계에는 사이클이 없음",
    keyConstraint:
      "전체 수행 시간은 단순한 작업 시간 합이 아니라 선행 관계 DAG에서 가장 오래 걸리는 경로의 누적 시간입니다.",
    naive:
      "각 작업에서 가능한 선행 경로를 반복 탐색하면 같은 부분을 여러 번 계산해 매우 느려질 수 있습니다.",
    algorithm:
      "위상 정렬 순서로 작업을 처리하면서 finish[v]=max(finish[v], finish[u]+time[v]) 형태로 가장 늦은 선행 완료 시간을 전파합니다.",
    correctness:
      "위상 순서에서는 모든 선행 작업이 먼저 계산되므로, 어떤 작업을 시작할 수 있는 가장 이른 시각은 모든 선행 작업 중 가장 늦게 끝나는 시각입니다.",
    time:
      "O(N+M)",
    operation:
      "N=200,000, M=400,000이면 각 정점과 간선을 한 번씩 처리하므로 약 600,000개 요소를 중심으로 처리합니다.",
    space:
      "O(N+M)",
    memory:
      "진입차수·완료시간 배열은 O(N), 선행 관계 인접 리스트는 O(M)입니다.",
  },
  {
    title: "대규모 센서 구간 질의",
    topic: "세그먼트 트리",
    problem:
      "N개의 센서 값이 주어지고 Q개의 명령이 들어옵니다. 명령은 한 센서 값을 변경하거나, 구간 [L,R]의 최솟값을 묻는 두 종류입니다. 모든 질의에 답하세요.",
    constraints: "1 ≤ N,Q ≤ 200,000, 센서 값의 절댓값 ≤ 10^9",
    keyConstraint:
      "값이 중간에 계속 바뀌기 때문에 단순 prefix 방식으로는 최솟값 질의를 빠르게 갱신할 수 없습니다.",
    naive:
      "각 질의마다 L부터 R까지 모두 확인하면 O(NQ), 최악 약 400억 번의 확인이 필요합니다.",
    algorithm:
      "세그먼트 트리에 각 구간의 최솟값을 저장합니다. 점 갱신과 구간 최솟값 질의를 트리 높이만큼 처리합니다.",
    correctness:
      "질의 구간을 완전히 포함하는 트리 노드들의 최솟값만 합치면 정확한 구간 최솟값이 되며, 갱신 시 루트까지 영향을 받는 노드만 다시 계산하면 됩니다.",
    time:
      "O((N+Q) log N)",
    operation:
      "N=Q=200,000, log₂N≈17.6이므로 구축·갱신·질의를 합쳐 수백만 회 노드 방문 규모입니다.",
    space:
      "O(N)",
    memory:
      "일반적으로 세그먼트 트리 배열을 약 4N 잡으면 int 기준 800,000×4Byte≈3.2MB입니다.",
  },
];

const koi2026Problems = [
  {
    stage: "1차 대회 · 2교시",
    division: "초등부 1번",
    title: "이웃",
    topic: "완전탐색 · 조건 분기",
    problem:
      "일직선 위에 N명의 학생이 살고 있고 각 학생은 두 학교 중 하나에 다닙니다. 두 학생이 같은 학교인지 다른 학교인지에 따라 허용 거리 K1, K2가 달라질 때, 각 학생의 이웃 수를 구합니다.",
    constraints: "2 ≤ N ≤ 3,000",
    keyConstraint:
      "N이 3,000으로 작아서 모든 학생 쌍을 직접 확인해도 충분합니다. 같은 학교라면 K1, 다른 학교라면 K2를 적용하면 됩니다.",
    naive:
      "이 문제에서는 모든 쌍을 확인하는 완전탐색이 그대로 만점 풀이입니다.",
    algorithm:
      "모든 i < j 쌍을 순회합니다. 학교가 같으면 |i-j| ≤ K1인지, 다르면 |i-j| ≤ K2인지 검사하고 조건을 만족하면 두 학생의 답을 각각 1 증가시킵니다.",
    correctness:
      "모든 서로 다른 학생 쌍을 정확히 한 번씩 확인하므로 이웃 관계를 빠뜨리거나 중복 계산하지 않습니다.",
    time: "O(N²)",
    operation:
      "N=3,000이면 확인하는 학생 쌍은 3,000×2,999/2 = 4,498,500개로 약 450만 쌍입니다.",
    space: "O(N)",
    memory:
      "학교 정보와 각 학생의 이웃 수를 저장하는 배열 정도만 필요합니다.",
  },
  {
    stage: "1차 대회 · 2교시",
    division: "초등부 2번",
    title: "가위바위보",
    topic: "누적 개수 · 필요충분조건",
    problem:
      "가위·바위·보 카드 하나씩을 가진 N명이 일렬로 서 있고, 인접한 두 사람을 계속 대결시켜 한 명만 남깁니다. 각 사람이 최종 우승자가 될 수 있는지 판별합니다.",
    constraints: "1 ≤ N ≤ 200,000",
    keyConstraint:
      "후보 i의 왼쪽과 오른쪽은 i를 통과하지 않고 서로 영향을 주지 못합니다. 후보의 카드를 이기는 카드와 그 카드를 이기는 카드의 존재 여부만 보면 각 방향을 정리할 수 있는지 판정할 수 있습니다.",
    naive:
      "각 후보마다 왼쪽과 오른쪽을 다시 훑으면 O(N²)이 되어 N=200,000에서 불가능합니다.",
    algorithm:
      "S/R/P 각각의 정방향·역방향 누적 등장 횟수를 준비합니다. 각 후보에 대해 왼쪽과 오른쪽에 특정 카드가 존재하는지를 O(1)에 확인하여 우승 가능 여부를 판정합니다.",
    correctness:
      "각 방향에서 후보를 이기는 카드가 없다면 후보가 직접 모두 정리할 수 있고, 그 카드가 있더라도 이를 제거할 수 있는 세 번째 카드가 함께 존재하면 해당 방향을 정리할 수 있습니다. 이 조건을 양쪽 모두 만족해야 합니다.",
    time: "O(N)",
    operation:
      "N=200,000이면 누적 배열 생성과 후보 판정을 포함해 전체를 몇 번만 순회하므로 수십만 회 규모의 상수 연산으로 처리됩니다.",
    space: "O(N)",
    memory:
      "세 카드 종류의 누적 개수 배열을 사용하면 선형 메모리가 필요합니다.",
  },
  {
    stage: "1차 대회 · 2교시",
    division: "초등부 3번 · 중등부 2번",
    title: "수열 정렬하기",
    topic: "첫·마지막 위치 · 관찰",
    problem:
      "기준값 x를 골라 x 이하의 원소를 앞으로, x 초과의 원소를 뒤로 보내는 안정적인 분할 연산을 반복하여 수열을 비내림차순으로 정렬할 때 필요한 최소 연산 횟수를 구합니다.",
    constraints: "1 ≤ N ≤ 300,000, 1 ≤ A[i] ≤ N",
    keyConstraint:
      "같은 기준값을 여러 번 쓸 필요가 없고 기준값들의 적용 순서는 중요하지 않습니다. 결국 값의 범위를 연속 구간들로 나누어 각 구간 내부의 원래 등장 순서가 이미 비내림차순인지 확인하는 문제로 바뀝니다.",
    naive:
      "값 구간마다 실제 부분수열을 만들어 정렬 가능 여부를 검사하면 O(N²) 이상이 되어 큰 N에서 사용할 수 없습니다.",
    algorithm:
      "각 값의 첫 등장 위치와 마지막 등장 위치를 기록합니다. 실제 등장하는 서로 이웃한 값 v, w를 오름차순으로 보면서 last[v] > first[w]이면 둘 사이에는 반드시 기준값이 필요하므로 답을 1 증가시킵니다.",
    correctness:
      "last[v] < first[w]이면 모든 v가 모든 w보다 먼저 등장하므로 같은 값 구간에 둬도 순서가 맞습니다. 반대로 last[v] > first[w]이면 w가 v보다 먼저 나온 역전이 존재하므로 둘을 반드시 분리해야 합니다.",
    time: "O(N)",
    operation:
      "N=300,000에서 첫/마지막 위치 계산과 값 순회를 각각 한 번씩 하므로 약 수십만 단계 규모입니다.",
    space: "O(N)",
    memory:
      "first, last 등의 길이 N 배열을 사용합니다.",
  },
  {
    stage: "1차 대회 · 2교시",
    division: "중등부 1번 · 고등부 1번",
    title: "친구",
    topic: "정렬 · 이분 탐색",
    problem:
      "수직선 위 학생들의 집 좌표와 학교 번호가 주어집니다. 같은 학교 학생은 거리 K1 이하, 다른 학교 학생은 거리 K2 이하일 때 친구이며, 각 학생의 친구 수를 구합니다.",
    constraints: "2 ≤ N ≤ 500,000",
    keyConstraint:
      "학교가 최대 N개라 좌표 전체뿐 아니라 학교별 좌표도 따로 정렬해야 합니다. 다른 학교 친구 수는 '전체 K2 이내 학생 수 - 같은 학교 K2 이내 학생 수'로 계산할 수 있습니다.",
    naive:
      "모든 학생 쌍을 비교하면 O(N²)이라 최대 입력에서는 불가능합니다.",
    algorithm:
      "전체 좌표 배열과 학교별 좌표 벡터를 각각 정렬합니다. 각 학생에 대해 이분 탐색으로 같은 학교 K1 이내 수, 전체 K2 이내 수, 같은 학교 K2 이내 수를 구해 식으로 합칩니다.",
    correctness:
      "같은 학교 친구와 다른 학교 친구를 서로 겹치지 않게 분리하여 정확히 세며, 정렬된 배열의 lower_bound/upper_bound가 거리 구간에 포함되는 학생 수를 정확히 반환합니다.",
    time: "O(N log N)",
    operation:
      "N=500,000이면 정렬 비교가 대략 N log₂N ≈ 950만 회 규모이고, 각 학생당 몇 번의 이분 탐색이 추가됩니다.",
    space: "O(N)",
    memory:
      "전체 좌표와 학교별 좌표를 합쳐 원소를 선형 개수만 저장합니다.",
  },
  {
    stage: "1차 대회 · 2교시",
    division: "중등부 3번 · 고등부 2번",
    title: "산책로",
    topic: "트리 · DSU · LCA · 지름",
    problem:
      "정점에 밀집도, 간선에 길이가 있는 트리에서 두 정점을 잇는 경로의 '간선 길이 합 - 경로 위 최대 밀집도'가 최대가 되도록 두 정점을 고릅니다.",
    constraints: "2 ≤ N ≤ 300,000",
    keyConstraint:
      "밀집도 임계값 X 이하의 정점만 남긴 포레스트에서 가장 긴 경로를 구하면, 그 임계값에서의 후보는 '포레스트의 최대 지름 - X'로 볼 수 있습니다.",
    naive:
      "모든 두 정점 사이 경로를 확인하면 O(N²)개의 경로가 있어 불가능합니다.",
    algorithm:
      "정점을 밀집도 오름차순으로 활성화합니다. DSU로 연결 컴포넌트를 합치면서 각 컴포넌트의 가중 지름 양 끝점을 관리합니다. 두 컴포넌트를 합칠 때 필요한 정점 간 거리는 LCA 전처리로 계산합니다.",
    correctness:
      "임계값 X에서 가능한 경로는 활성화된 포레스트 안의 경로뿐이며, 그중 간선 합이 최대인 것은 컴포넌트 지름입니다. 모든 정점 밀집도를 임계값 후보로 순회하므로 최적 경로의 최대 밀집도도 반드시 고려됩니다.",
    time: "O(N log N)",
    operation:
      "N=300,000이면 정렬과 약 N번의 병합, 각 병합에서 O(log N) 거리 계산이 필요해 수백만 회 수준의 로그 연산이 발생합니다.",
    space: "O(N log N)",
    memory:
      "DSU와 거리 배열은 O(N), LCA binary lifting 테이블이 O(N log N)을 차지합니다.",
  },
  {
    stage: "1차 대회 · 2교시",
    division: "고등부 3번",
    title: "점프",
    topic: "좌표 압축 · 세그먼트 트리 · DAG DP",
    problem:
      "i번 발판은 (X[i], i)에 있고 i<j이면서 |X[i]-X[j]|≤D일 때 앞으로 점프할 수 있습니다. 각 발판에서 출발해 도달 가능한 발판 수를 모두 구합니다.",
    constraints: "1 ≤ N ≤ 300,000",
    keyConstraint:
      "그래프를 직접 만들면 간선이 O(N²)까지 생길 수 있습니다. 하지만 좌표가 더 낮은 방향·더 높은 방향·같은 높이 방향에서 대표적인 다음 발판만 연결해도 도달성 정보를 보존할 수 있습니다.",
    naive:
      "가능한 모든 간선을 만들고 각 정점에서 DFS를 하면 시간과 메모리 모두 O(N²) 이상이 되어 불가능합니다.",
    algorithm:
      "좌표 압축 후 오른쪽에서 왼쪽으로 처리합니다. 좌표 구간에서 필요한 최소 인덱스와 개수를 세그먼트 트리로 관리하여 핵심 간선을 O(N)개 수준으로 압축하고, 도달 가능한 낮은/같은/높은 좌표 발판 수를 DP로 계산합니다.",
    correctness:
      "한 번에 갈 수 있는 범위 안에서 가장 먼저 만나는 대표 발판을 거치면 그보다 뒤의 도달 가능 영역을 모두 이어받을 수 있다는 관찰로 간선을 줄일 수 있습니다. 처리 방향이 DAG 순서와 맞기 때문에 이미 계산된 값을 안전하게 재사용합니다.",
    time: "O(N log N)",
    operation:
      "N=300,000, log₂N≈18.2이므로 세그먼트 트리 질의·갱신은 대략 수백만 회의 트리 단계로 처리됩니다.",
    space: "O(N)",
    memory:
      "좌표 압축 배열, DP 배열, 세그먼트 트리 등 모두 선형 크기로 구성할 수 있습니다.",
  },
  {
    stage: "2차 대회",
    division: "초등부 1번",
    title: "거리두기",
    topic: "그리디",
    problem:
      "N명의 학생을 번호 순으로 수직선에 배치합니다. i번 학생은 A[i]보다 오른쪽에 설 수 없고 인접 학생 사이 거리는 K 이상이어야 할 때, 1번 학생의 위치를 최대화하는 배치를 구합니다.",
    constraints: "1 ≤ N ≤ 100",
    keyConstraint:
      "뒤 학생의 위치가 클수록 앞 학생을 배치하기 불리해지지 않으므로, 뒤에서부터 각 학생을 가능한 한 오른쪽에 두는 것이 항상 유리합니다.",
    naive:
      "가능한 B1을 하나씩 시도하며 전체 배치를 검사할 수 있지만, 직접 그리디하면 더 단순하게 O(N)에 해결됩니다.",
    algorithm:
      "B[N]=A[N]으로 두고 i=N-1..1 순서로 B[i]=min(A[i], B[i+1]-K)로 정합니다.",
    correctness:
      "각 위치를 가능한 한 크게 잡아도 이전 학생이 만족해야 할 상한이 더 작아지지 않습니다. 따라서 뒤에서부터 최대값을 선택한 결과의 B1이 가능한 최대값입니다.",
    time: "O(N)",
    operation:
      "N≤100이므로 최대 100개 위치를 한 번씩 계산합니다.",
    space: "O(N)",
    memory:
      "출력할 B 배열을 저장하는 선형 공간만 필요합니다.",
  },
  {
    stage: "2차 대회",
    division: "초등부 2번 · 중등부 1번",
    title: "주사위 탑 쌓기",
    topic: "개수 세기 · 그리디",
    problem:
      "윗면 숫자가 주어진 주사위들을 방향을 바꾸지 않고 여러 탑으로 쌓습니다. 맞닿는 두 면의 숫자가 같아야 할 때 필요한 탑 수의 최솟값을 구합니다.",
    constraints: "2 ≤ N ≤ 200,000",
    keyConstraint:
      "마주 보는 면의 합이 7이므로 한 탑에서는 (1,6), (2,5), (3,4) 세 쌍이 각각 독립적으로 번갈아 등장합니다.",
    naive:
      "주사위 순서를 직접 구성하거나 조합을 탐색할 필요가 없습니다.",
    algorithm:
      "1..6 윗면의 개수를 셉니다. 각 쌍 (x,7-x)에 대해 둘 다 0이면 0, 아니면 max(1, |cnt[x]-cnt[7-x]|)개의 탑이 필요하므로 세 쌍의 값을 더합니다.",
    correctness:
      "한 탑에서 두 종류의 개수 차이는 최대 1입니다. 반대로 두 종류를 번갈아 배치하면 이 하한을 항상 달성할 수 있습니다.",
    time: "O(N)",
    operation:
      "N=200,000개의 값을 한 번 세고 마지막에 세 쌍만 계산합니다.",
    space: "O(1) 추가 공간",
    memory:
      "숫자 1..6의 개수 6개만 저장하면 됩니다.",
  },
  {
    stage: "2차 대회",
    division: "초등부 3번 · 중등부 2번 · 고등부 1번",
    title: "간식 분배",
    topic: "그리디 · 큐 · 위상정렬형 처리",
    problem:
      "N명의 학생과 N개의 간식이 있고 각 학생은 여러 간식을 좋아합니다. 학생 입장 순서를 정해 모든 학생이 들어올 당시 남아 있는 좋아하는 간식을 정확히 하나씩만 가져가게 해야 합니다.",
    constraints: "1 ≤ N ≤ 200,000, ΣC[i] ≤ 500,000",
    keyConstraint:
      "현재 남은 간식 중 좋아하는 것이 정확히 하나인 학생은 해가 존재한다면 지금 바로 입장시켜도 안전합니다.",
    naive:
      "학생 순서를 순열로 시도하거나 매 단계 모든 학생의 남은 선호 개수를 다시 세면 너무 느립니다.",
    algorithm:
      "학생별 남은 선호 개수 cnt를 관리하고 cnt=1인 학생을 큐에 넣습니다. 학생이 유일하게 남은 간식을 가져가면 그 간식을 좋아하는 모든 학생의 cnt를 1 줄이고 새로 1이 된 학생을 큐에 넣습니다.",
    correctness:
      "해가 존재할 때 cnt=1인 학생을 앞당겨도 다른 학생이 가져갈 간식을 빼앗지 않습니다. 따라서 이 안전한 선택을 반복해 모든 학생을 처리할 수 있는지 확인하면 됩니다.",
    time: "O(N + ΣC[i])",
    operation:
      "최대 N=200,000, 선호 관계 합 500,000이므로 각 학생과 선호 관계를 상수 번 처리해 약 70만 요소 규모로 진행됩니다.",
    space: "O(N + ΣC[i])",
    memory:
      "학생→간식과 간식→학생의 인접 리스트, cnt, 큐를 저장합니다.",
  },
  {
    stage: "2차 대회",
    division: "초등부 4번 · 중등부 3번",
    title: "게임",
    topic: "게임 그래프 · 우선순위 큐",
    problem:
      "여러 방과 통로가 있는 미로에서 Alice가 현재 방의 통로 k개를 고르면 Bob이 그중 하나를 선택해 이동시킵니다. 각 질의 (s,k)에 대해 Alice가 어떤 Bob의 선택에도 출구에 도달하도록 보장할 수 있는지 판정합니다.",
    constraints: "N≤200,000, M≤400,000, Q≤200,000",
    keyConstraint:
      "정점 s에서 이길 수 있는 최대 k를 D[s]라고 두면, k가 작아질수록 승리 조건은 쉬워집니다. 따라서 모든 D[s]를 한 번 계산하면 각 질의는 D[s]≥k 비교 한 번으로 끝납니다.",
    naive:
      "각 질의마다 고정 k에 대해 승리 가능한 정점을 다시 전파하면 O(Q(N+M))이라 불가능합니다.",
    algorithm:
      "출구 정점의 D를 무한대로 시작하고 max-heap을 사용합니다. 큰 D가 확정된 정점부터 인접 정점으로 통로 개수를 누적하여 '확보한 승리 통로 수'를 갱신하는 다익스트라형 역전파를 수행합니다.",
    correctness:
      "Alice가 k개의 통로를 골랐을 때 그 k개가 모두 승리 정점으로 연결되어야 Bob의 선택과 무관하게 이깁니다. 확정된 승리 임계값이 큰 정점부터 통로 수를 누적하면 각 정점이 보장할 수 있는 최대 k를 정확히 구할 수 있습니다.",
    time: "O((N+M) log M + Q)",
    operation:
      "최대 N+M≈600,000이고 log₂M≈19이므로 힙 기반 전파는 대략 천만 회 안팎의 로그 단계 규모입니다.",
    space: "O(N+M)",
    memory:
      "그래프 인접 리스트, D 배열, 힙을 저장하는 선형 그래프 공간이 필요합니다.",
  },
  {
    stage: "2차 대회",
    division: "중등부 4번",
    title: "수열 연산",
    topic: "구성 · 삽입 정렬 · 불변식",
    problem:
      "1..N의 순열 A에서 인접한 증가쌍을 교환하거나 인접한 두 값을 최솟값 하나로 합치는 연산을 이용해, 서로 다른 값으로 이루어진 목표 수열 B를 만들 수 있는지 판정하고 가능하면 연산열을 출력합니다.",
    constraints: "1 ≤ M ≤ N ≤ 3,000",
    keyConstraint:
      "B에 남아야 하는 대표 원소들의 상대 순서에는 되돌릴 수 없는 제약이 있고, B에 없는 원소 중 접미사 최솟값은 왼쪽의 적절한 대표 원소와 합쳐질 수 있어야 합니다.",
    naive:
      "수열의 모든 상태를 탐색하거나 모든 연산열을 시도하는 것은 상태 수가 폭발합니다.",
    algorithm:
      "먼저 B에 없고 접미사 최솟값이 아닌 원소를 오른쪽의 더 작은 값 쪽으로 교환해 제거합니다. 이후 왼쪽부터 대표 원소를 B의 순서에 맞게 삽입 정렬하고, 남은 비대표 원소는 바로 왼쪽의 더 작은 대표 원소와 합칩니다.",
    correctness:
      "교환은 항상 inversion을 한 방향으로만 변화시키므로 대표 원소의 허용되지 않는 상대 순서는 되돌릴 수 없습니다. 두 필요조건이 만족되면 위 두 단계의 모든 교환·합치기가 유효하며 최종적으로 정확히 B가 남습니다.",
    time: "O(N²)",
    operation:
      "N=3,000이면 O(N²)은 약 900만 단계 규모입니다. 실제 출력 연산 수 역시 교환 최대 N(N-1)/2와 합치기 N-M을 합해 N² 이하입니다.",
    space: "O(N) + 출력 연산",
    memory:
      "현재 수열과 위치 정보는 O(N)입니다. 연산을 모두 저장하면 최악 O(N²), 즉 최대 약 900만 개까지 커질 수 있습니다.",
  },
  {
    stage: "2차 대회",
    division: "고등부 2번",
    title: "극솟값 제거",
    topic: "카르테시안 트리 · 단조 스택 · PST",
    problem:
      "부분수열에서 양옆보다 작은 내부 원소를 한 번의 변화마다 모두 동시에 제거합니다. Q개의 (l,r,t) 질의마다 A[l..r]에 이 변화를 t번 적용한 뒤 남는 원소 수를 구합니다.",
    constraints: "N≤200,000, Q≤200,000",
    keyConstraint:
      "반복 제거 과정은 카르테시안 트리의 높이와 연결됩니다. 각 원소의 제거 시각과 왼쪽/오른쪽 경계 체인을 미리 계산하면 질의를 경로·구간 개수 질의로 바꿀 수 있습니다.",
    naive:
      "각 질의마다 실제로 t번 수열을 만들고 극솟값을 지우면 최악 O(NQ)에 가까워집니다.",
    algorithm:
      "단조 스택으로 더 큰 원소로 향하는 L/R 관계와 제거 높이 H를 계산합니다. Persistent Segment Tree 또는 오프라인 Fenwick+binary lifting으로 구간 안 H 조건과 양쪽 경계 체인에서 남는 원소 수를 합산합니다.",
    correctness:
      "카르테시안 트리에서 일반 원소는 자신의 높이만큼 변화가 진행되면 제거되고, 구간 양끝에서 최댓값으로 이어지는 체인은 경계 때문에 살아남을 수 있습니다. 이 두 종류를 정확히 분리해 세면 질의 답이 됩니다.",
    time: "O((N+Q) log N)",
    operation:
      "N=Q=200,000이면 약 400,000개의 원소·질의를 log₂N≈18단계 자료구조로 처리하므로 수백만 회 이상의 트리 연산 규모입니다.",
    space: "O(N log N)",
    memory:
      "Persistent Segment Tree나 binary lifting 테이블을 사용하면 N log N 수준의 노드를 저장합니다.",
  },
  {
    stage: "2차 대회",
    division: "고등부 3번",
    title: "곡예",
    topic: "구간 도달성 · SCC · 세그먼트 트리 그래프",
    problem:
      "Alice는 항상 Bob보다 왼쪽에 있어야 하는 일렬 평균대에서 걷기와 점프대를 이용합니다. Q개의 시작 두 위치와 목표 두 위치가 주어질 때 각 공연 계획이 가능한지 판정합니다.",
    constraints: "N≤200,000, M≤200,000, Q≤500,000",
    keyConstraint:
      "두 곡예사의 상태를 두 위치 사이의 구간으로 보면 걷기로 구간을 줄이는 것은 자유롭고, 핵심은 점프대로 구간을 어디까지 확장할 수 있는지입니다. 모든 구간은 길이 1인 단위 구간들의 도달 범위를 합친 것으로 처리할 수 있습니다.",
    naive:
      "각 단위 구간에서 도달 가능한 다른 단위 구간으로 직접 간선을 만들면 O(N²)개의 간선이 생길 수 있습니다.",
    algorithm:
      "각 단위 구간에서 한 번에 확장 가능한 범위를 계산하고, 구간 간선을 세그먼트 트리 형태로 희소화한 방향 그래프를 만듭니다. SCC를 압축한 뒤 DAG 역순으로 도달 가능한 최소/최대 단위 구간을 전파하고 RMQ로 질의를 처리합니다.",
    correctness:
      "단위 구간들의 최대 확장 범위를 합치면 임의의 시작 구간에서 도달 가능한 최대 구간이 됩니다. SCC 내부는 서로 도달 가능하므로 하나로 압축해도 정보가 보존되며, DAG에서 min/max 범위를 전파하면 모든 확장 가능 영역을 얻습니다.",
    time: "O(N log N + M + Q)",
    operation:
      "N=200,000이면 N log₂N이 약 360만 단계이고, 여기에 최대 M=200,000, Q=500,000의 선형 처리가 더해집니다.",
    space: "O(N log N + M)",
    memory:
      "희소화 그래프와 SCC 정보, RMQ/전처리 테이블을 저장합니다.",
  },
  {
    stage: "2차 대회",
    division: "고등부 4번",
    title: "공장",
    topic: "최소 컷 · 최대 유량 · 기하적 모델링",
    problem:
      "여러 날짜에 걸쳐 근무하는 지원자들을 선택해 주간 생산 이익에서 기본 임금과 야간 수당을 뺀 값을 최대화하고, 최적의 고용자 목록을 구합니다.",
    constraints: "1 ≤ T ≤ N ≤ 500",
    keyConstraint:
      "숙련도 순서와 근무 날짜를 이용해 선택된 지원자 집합을 평면의 영역으로 바꾸면 목적 함수가 '영역 내부 가치 - 영역 경계 비용' 형태가 됩니다.",
    naive:
      "지원자 부분집합을 모두 시도하면 O(2^N)이라 N=500에서 불가능합니다.",
    algorithm:
      "평면 분할의 각 칸을 정점으로 만들고 칸 선택의 이익/손실을 source·sink 간선으로, 인접 칸 선택이 달라질 때 생기는 경계 비용을 양방향 간선으로 모델링합니다. 그러면 최대 이익은 base - 최소 s-t cut으로 계산할 수 있습니다.",
    correctness:
      "어떤 영역 선택과 s-t cut이 일대일 대응하도록 간선 용량을 잡으면 cut 용량이 정확히 선택하지 못한 가치와 발생한 경계 비용의 합이 됩니다. 따라서 최소 컷이 최대 목적값을 주고 잔여 그래프에서 source 쪽 칸으로 실제 고용자를 복원할 수 있습니다.",
    time: "O(N · maxB) 수준의 공식 풀이",
    operation:
      "N≤500, B≤1,000 범위에서 공식 풀이의 Ford-Fulkerson 유량 상한을 이용하면 대략 50만 단위 규모의 유량 증가를 상한으로 분석합니다.",
    space: "O(N)",
    memory:
      "평면 분할의 칸과 경계로 만든 유량 그래프의 정점·간선 수가 N에 비례하도록 구성됩니다.",
  },
];

const cKeywordTokens = new Set([
  "int", "long", "char", "float", "double", "return",
  "if", "else", "for", "while", "break", "continue",
]);

const cFunctionTokens = new Set([
  "main", "printf", "scanf", "merge", "mergeSort",
]);

function getCTokenClass(token: string) {
  if (token.startsWith("//")) return "is-comment";
  if (token.startsWith("#")) return "is-preprocessor";
  if (token.startsWith("<") && token.endsWith(">")) return "is-header";
  if (token.startsWith('"') || token.startsWith("'")) return "is-string";
  if (/^\d+$/.test(token)) return "is-number";
  if (cKeywordTokens.has(token)) return "is-keyword";
  if (cFunctionTokens.has(token)) return "is-function";
  return "";
}

function renderCLine(line: string, keyPrefix: string) {
  if (!line) return " ";

  const tokenPattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*$|#\w+|<[^>\n]+>|\b(?:int|long|char|float|double|return|if|else|for|while|break|continue)\b|\b(?:main|printf|scanf|mergeSort|merge)\b|\b\d+\b)/g;

  return line.split(tokenPattern).filter(Boolean).map((token, index) => {
    const className = getCTokenClass(token);

    if (!className) {
      return token;
    }

    return (
      <span className={`contest-code-token ${className}`} key={`${keyPrefix}-${index}`}>
        {token}
      </span>
    );
  });
}

function getHighlightedLineIndexes(code: string, highlightContains: string[]) {
  const lines = code.split("\n");
  const highlighted = new Set<number>();

  lines.forEach((line, index) => {
    if (highlightContains.some((part) => line.includes(part))) {
      highlighted.add(index);
    }
  });

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!highlighted.has(index) || !trimmed.startsWith("for (")) {
      return;
    }

    let depth =
      (line.match(/{/g) ?? []).length -
      (line.match(/}/g) ?? []).length;

    if (depth <= 0) {
      return;
    }

    for (let next = index + 1; next < lines.length; next++) {
      depth +=
        (lines[next].match(/{/g) ?? []).length -
        (lines[next].match(/}/g) ?? []).length;

      if (depth === 0) {
        highlighted.add(next);
        break;
      }
    }
  });

  return highlighted;
}

function QuestionGroup({
  number,
  title,
  description,
  questions,
}: {
  number: string;
  title: string;
  description: string;
  questions: string[];
}) {
  return (
    <details className="contest-interview-question-group">
      <summary>
        <span>{number}</span>
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <b>{questions.length}문항</b>
      </summary>
      <ol>
        {questions.map((question, index) => (
          <li key={question}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{question}</p>
          </li>
        ))}
      </ol>
    </details>
  );
}

export default function CompetitionWinnerInterviewStudy() {
  return (
    <section className="contest-interview-page">
      <div className="contest-interview-topbar">
        <div>
          <span className="eyebrow">DIMIGO · SPECIAL ADMISSION</span>
          <h1>대회입상자 심화면접</h1>
          <p>
            정보올림피아드 본선 입상자가
            <br />
            자신의 알고리즘 역량과 문제해결 과정을 실제 경험을 근거로 설명할 수 있도록 준비합니다.
          </p>
        </div>
        <Link className="secondary-button" href="/specialized">
          디미고 입학전형으로
        </Link>
      </div>

      <section className="contest-interview-official">
        <div className="contest-section-heading">
          <span>OFFICIAL GUIDE</span>
          <h2>심층면접 핵심</h2>
          <p>2027학년도 한국디지털미디어고등학교 입학안내 기준</p>
        </div>

        <div className="contest-official-grid">
          <div>
            <span>면접 형태</span>
            <strong>학생 1명</strong>
            <p>면접위원 2~3명</p>
          </div>
          <div>
            <span>진행 시간</span>
            <strong>약 10분~15분</strong>
            <p>학생 1명 단독 진행</p>
          </div>
          <div>
            <span>대회입상 부문</span>
            <strong>실적 기반 확인</strong>
            <p>입상 실적과 관련된 소양·역량 확인</p>
          </div>
          <div>
            <span>주요 평가</span>
            <strong>진로·학업 + 인성</strong>
            <p>활동증빙, 단체생활 적응력 포함</p>
          </div>
        </div>

        <div className="contest-official-note">
          <strong>대회입상자는 무엇이 다른가?</strong>
          <p>
            대회입상 부문은 별도의 실적설명서를 작성하지 않고 상장 사본으로
            수상 실적을 증빙합니다. 따라서 면접에서는 단순히 “상을 받았다”는 사실보다
            그 실적에 걸맞은 알고리즘 이해와 문제해결 역량을 실제로 갖추고 있는지
            자신의 말로 설명할 수 있어야 합니다.
          </p>
        </div>

        <div className="contest-koi-score">
          <div>
            <span>KOI 2차 · 동상 이상</span>
            <strong>1등급 · 60점</strong>
          </div>
          <div>
            <span>KOI 2차 · 장려상</span>
            <strong>2등급 · 55점</strong>
          </div>
          <p>
            2027학년도 대회입상 부문 활동증빙 기준입니다. 실제 지원 시에는
            해당 연도의 최종 모집요강과 제출서류 안내를 다시 확인하세요.
          </p>
        </div>
      </section>

      <section className="contest-interview-koi">
        <div className="contest-section-heading">
          <span>ALGORITHM ANSWER GUIDE</span>
          <h2>알고리즘 문제 풀이과정에 대한 답변</h2>
        </div>

        <div className="contest-koi-flow">
          <div><span>01</span><strong>문제 이해</strong><p>무엇을 구하는 문제인지, 핵심 조건과 제한을 설명</p></div>
          <div><span>02</span><strong>단순 접근</strong><p>처음 생각할 수 있는 풀이와 한계를 시간복잡도로 설명</p></div>
          <div><span>03</span><strong>알고리즘 선택</strong><p>왜 이 알고리즘·자료구조를 선택했는지 비교</p></div>
          <div><span>04</span><strong>정당성</strong><p>왜 항상 올바른 답이 나오는지 반례와 함께 검증</p></div>
          <div><span>05</span><strong>구현·디버깅</strong><p>예외 처리, 실수, 디버깅 과정을 구체적으로 설명</p></div>
          <div><span>06</span><strong>확장 질문</strong><p>조건이 바뀌었을 때 풀이가 어떻게 달라지는지 설명</p></div>
        </div>
      </section>

      <section className="contest-interview-prepare">
        <div className="contest-section-heading">
          <span>PREPARATION</span>
          <h2>지원자가 반드시 준비해야 할 6가지</h2>
        </div>
        <div className="contest-prep-grid">
          {prepChecklist.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contest-interview-problem-sheet">
        <div className="contest-section-heading">
          <span>PROBLEM ANALYSIS</span>
          <h2>문제 분석 항목</h2>
          <p>본선 기출문제를 아래 항목으로 빠짐없이 분석해 두세요.</p>
        </div>

        <div className="contest-analysis-columns">
          <div className="contest-analysis-table-wrap">
            <table className="contest-analysis-table contest-analysis-table-compact">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>정리할 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>문제 요약</td><td>문제를 처음 듣는 사람도 이해할 수 있도록 2~3문장으로 설명</td></tr>
                <tr><td>핵심 제약</td><td>N의 범위, 시간·메모리 제한, 입력의 특징</td></tr>
                <tr><td>단순 풀이</td><td>브루트포스 등 가장 먼저 떠올릴 수 있는 방법과 복잡도</td></tr>
                <tr><td>최종 알고리즘</td><td>선택한 알고리즘과 자료구조, 선택 이유</td></tr>
                <tr><td>복잡도</td><td>시간복잡도와 공간복잡도, 실제 제한에서 통과 가능한 이유</td></tr>
              </tbody>
            </table>
          </div>

          <div className="contest-analysis-table-wrap">
            <table className="contest-analysis-table contest-analysis-table-compact">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>정리할 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>정당성</td><td>왜 이 풀이가 항상 맞는지 핵심 논리 또는 증명</td></tr>
                <tr><td>예외 케이스</td><td>최솟값·최댓값·중복·경계값 등 실수하기 쉬운 입력</td></tr>
                <tr><td>구현 과정</td><td>가장 어려웠던 부분, 오류 원인, 디버깅 방법</td></tr>
                <tr><td>대안 풀이</td><td>다른 풀이가 가능한지, 장단점과 복잡도 비교</td></tr>
                <tr><td>확장</td><td>입력 제한이나 조건이 바뀌면 어떻게 수정할지</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="contest-complexity-guide">
          <div className="contest-complexity-heading">
            <span>COMPLEXITY ANALYSIS</span>
            <h3>시간복잡도와 공간복잡도 분석하기</h3>
            <p>
              알고리즘 문제에는 보통 시간 제한, 메모리 제한, 입력 크기의 최댓값이 함께 주어집니다.
              따라서 Big-O만 구하는 데서 끝나지 않고, 실제 최댓값을 대입해 시간과 메모리 제한 안에서 가능한지 판단해야 합니다.
            </p>
          </div>

          <article className="contest-complexity-wide">
            <span>TIME COMPLEXITY</span>
            <h4>시간복잡도 → 최대 N 대입 → 연산량 계산 → 시간 제한과 비교</h4>
            <ol>
              <li>탐색·정렬·반복문 등 핵심 알고리즘의 시간복잡도를 Big-O로 구합니다.</li>
              <li>문제에서 주어진 N의 최댓값을 대입합니다.</li>
              <li>최악의 경우 대략 몇 번 연산하는지 계산합니다.</li>
              <li>그 연산량이 시간 제한 안에 가능한지 판단합니다.</li>
            </ol>

            <div className="contest-complexity-example">
              <strong>예시 · N ≤ 10,000이고 알고리즘이 O(N²)인 경우</strong>
              <p>
                10,000 × 10,000 = <b>100,000,000</b>이므로 최악의 경우 약 1억 번의 연산이 필요합니다.
                알고리즘 문제에서는 빠르게 가능성을 판단할 때 <b>1억 번의 단순 연산 ≈ 1초</b> 정도를 매우 거친 기준으로 사용하기도 합니다.
                따라서 시간 제한이 1초라면 O(N²)은 경계선이거나 위험하다고 판단할 수 있습니다.
              </p>
            </div>

            <div className="contest-complexity-caution">
              <strong>주의</strong>
              <p>
                1억 번 = 정확히 1초라는 공식은 아닙니다. 언어, 연산 종류, 컴퓨터 성능, 입출력 등에 따라 실제 시간은 달라집니다.
                특히 Python은 같은 연산 횟수라도 C/C++보다 오래 걸릴 수 있으므로 대략적인 판단 기준으로 사용합니다.
              </p>
            </div>
          </article>

          <div className="contest-complexity-reference">
            <strong>Big-O 표기법 작성하는 방법</strong>
            <p>
              먼저 핵심 연산이 입력 크기 N에 따라 몇 번 수행되는지 식으로 나타낸 뒤,
              N이 매우 커졌을 때 가장 큰 영향을 주는 항만 남겨 O( ) 안에 적습니다.
            </p>

            <div className="contest-bigo-core">
              <strong>핵심 연산이란?</strong>
              <p>
                알고리즘에서 입력 크기가 커질수록 반복해서 수행되는 주요 작업을 뜻합니다.
                예를 들어 비교, 덧셈·곱셈, 값 대입, 배열 접근, 탐색, 교환 같은 연산이 핵심 연산이 될 수 있습니다.
                Big-O에서는 CPU 명령 하나하나를 정확히 세기보다, 이런 핵심 작업이 N에 따라 몇 번 반복되는지를 중심으로 증가 정도를 분석합니다.
              </p>
            </div>

            <div className="contest-complexity-reference-grid">
              {bigOExamples.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <b>{item.complexity}</b>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>

            <div className="contest-bigo-examples">
              {bigOExamples.map((item, index) => (
                <details className="contest-bigo-example" key={item.title}>
                  <summary className="contest-bigo-example-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{item.title} · {item.complexity}</h4>
                      <p>{item.problem}</p>
                    </div>
                    <b className="contest-bigo-toggle" aria-hidden="true" />
                  </summary>

                  <div className="contest-bigo-analysis">
                    <strong>분석</strong>
                    <p>{item.analysis}</p>
                  </div>

                  <div className="contest-bigo-operation">
                    <div>
                      <span>예시 입력 크기</span>
                      <strong>{item.nValue}</strong>
                    </div>
                    <div>
                      <span>핵심 연산 횟수</span>
                      <strong>{item.operationCount}</strong>
                      <p>{item.operationDetail}</p>
                    </div>
                  </div>

                  <div className="contest-bigo-highlight-note">
                    아래 코드에서 <strong>강조된 글자색</strong>이 시간복잡도를 판단할 때 중심적으로 확인할 코드입니다.
                    나머지 코드는 문법 요소에 따라 색을 구분해 표시했습니다.
                  </div>

                  <pre className="contest-bigo-code"><code>
                    {(() => {
                      const highlightedLines = getHighlightedLineIndexes(
                        item.code,
                        item.highlightContains
                      );

                      return item.code.split("\n").map((line, lineIndex) => {
                        const highlighted = highlightedLines.has(lineIndex);

                        return (
                          <span
                            className={`contest-bigo-code-line${highlighted ? " is-highlighted" : ""}`}
                            key={`${item.title}-${lineIndex}`}
                          >
                            {renderCLine(line, `${item.title}-${lineIndex}`)}
                          </span>
                        );
                      });
                    })()}
                  </code></pre>
                </details>
              ))}
            </div>

            <div className="contest-complexity-caution">
              <strong>기억할 규칙</strong>
              <p>
                상수는 생략하고, 여러 항이 있으면 N이 커질수록 가장 빠르게 증가하는 항만 남깁니다.
                서로 독립적인 입력 크기 N과 M을 각각 처리한다면 O(N + M)처럼 두 변수를 그대로 사용합니다.
              </p>
            </div>
          </div>


          <article className="contest-complexity-wide contest-space-complexity">
            <span>SPACE COMPLEXITY</span>
            <h4>공간복잡도 → 실제 자료구조 크기 계산 → 메모리 제한과 비교</h4>
            <ol>
              <li>알고리즘이 추가로 사용하는 배열·벡터·스택·큐·그래프·재귀 호출 등을 확인합니다.</li>
              <li>추가 공간이 입력 크기 N에 따라 어떻게 증가하는지 O(1), O(N), O(N²)처럼 Big-O로 정리합니다.</li>
              <li>실제로 저장하는 원소 수 × 자료형 크기를 기본값으로 계산하고, 자료구조 자체의 여유 공간과 관리용 메모리도 고려합니다.</li>
              <li>재귀를 사용한다면 최대 재귀 깊이와 한 번 호출할 때 필요한 스택 프레임 크기도 함께 확인합니다.</li>
              <li>전체 사용량을 KB 또는 MB로 환산한 뒤 문제의 메모리 제한과 비교합니다.</li>
            </ol>

            <div className="contest-memory-guide">
              <strong>배열·vector·stack·queue는 모두 원소 수 × 자료형 크기만 계산하면 될까?</strong>
              <p>
                <b>원소 수 × 자료형 크기</b>는 좋은 출발점이지만, 모든 자료구조의 실제 사용량과 정확히 같지는 않습니다.
                배열은 거의 그대로 계산할 수 있지만 STL 컨테이너는 원소 저장 공간 외에 관리용 메모리와 여유 공간이 추가될 수 있습니다.
              </p>

              <div className="contest-memory-structure-grid">
                <div>
                  <span>배열</span>
                  <b>거의 그대로 계산</b>
                  <p>
                    <code>int a[10000]</code>이면 int가 4Byte일 때 약 40,000Byte입니다.
                    전역·static 배열이면 호출 스택이 아니라 정적 메모리 영역에 저장됩니다.
                  </p>
                </div>
                <div>
                  <span>vector</span>
                  <b>capacity 기준으로 생각</b>
                  <p>
                    <code>vector&lt;int&gt;</code>는 보통 실제 확보한 <b>capacity × 4Byte</b>가 원소 저장 공간입니다.
                    vector 객체 자체와 동적 할당 관리 비용도 조금 추가되며, capacity가 size보다 클 수도 있습니다.
                  </p>
                </div>
                <div>
                  <span>stack / queue</span>
                  <b>원소 크기 + 컨테이너 오버헤드</b>
                  <p>
                    C++의 <code>stack</code>, <code>queue</code>는 기본적으로 <code>deque</code>를 사용하므로
                    단순히 원소 수 × 자료형 크기보다 조금 더 사용합니다. 블록·포인터 등의 관리 메모리가 추가됩니다.
                  </p>
                </div>
                <div>
                  <span>그래프 인접 리스트</span>
                  <b>간선 수를 기준으로 계산</b>
                  <p>
                    무방향 그래프에서 간선 M개를 양쪽에 저장하면 실제 정수 저장은 대략 <b>2M개</b>입니다.
                    <code>vector&lt;vector&lt;int&gt;&gt;</code>라면 각 vector 객체와 동적 할당 오버헤드도 추가됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="contest-space-examples">
              <div className="contest-complexity-example">
                <strong>예시 1 · int 배열 10,000개</strong>
                <p>
                  int를 4Byte로 계산하면 <b>10,000 × 4Byte = 40,000Byte</b>입니다.
                  약 <b>40KB = 0.04MB</b>이므로 공간복잡도는 O(N), 실제 메모리 사용량은 약 40KB입니다.
                </p>
              </div>

              <div className="contest-complexity-example">
                <strong>예시 2 · vector&lt;int&gt;에 10,000개 저장</strong>
                <p>
                  capacity가 정확히 10,000이라면 원소 저장 공간은 약 <b>10,000 × 4Byte = 40KB</b>입니다.
                  다만 capacity가 16,384처럼 더 크게 잡혀 있다면 약 <b>65.5KB</b>를 확보한 상태이며 vector 객체·할당 관리 비용이 추가됩니다.
                </p>
              </div>

              <div className="contest-complexity-example">
                <strong>예시 3 · int[1000][1000]</strong>
                <p>
                  원소 수는 1,000 × 1,000 = 1,000,000개이므로
                  <b>1,000,000 × 4Byte ≈ 4MB</b>입니다.
                  N × N 배열이라면 공간복잡도는 O(N²)로 볼 수 있습니다.
                </p>
              </div>

              <div className="contest-complexity-example">
                <strong>예시 4 · 무방향 그래프 M=300,000</strong>
                <p>
                  인접 리스트에 간선을 양쪽으로 저장하면 정수 목적지 정보가 약 <b>600,000개</b>입니다.
                  목적지만 int로 저장한다고 단순 계산하면 약 <b>2.4MB</b>이고, vector와 동적 할당 오버헤드는 별도로 추가됩니다.
                </p>
              </div>
            </div>

            <div className="contest-recursion-memory">
              <div className="contest-recursion-heading">
                <span>RECURSION & STACK MEMORY</span>
                <h5>재귀 호출도 메모리를 사용합니다</h5>
                <p>
                  재귀 함수가 한 번 호출될 때마다 호출 스택에 <b>스택 프레임</b>이 하나씩 쌓입니다.
                  스택 프레임에는 매개변수, 지역 변수, 반환 주소, 저장된 레지스터, 정렬을 위한 여유 공간 등이 들어갑니다.
                </p>
              </div>

              <div className="contest-recursion-grid">
                <div>
                  <strong>공간복잡도 계산</strong>
                  <p>
                    한 호출의 프레임 크기가 상수라면 재귀 깊이가 D일 때 추가 공간은 보통 <b>O(D)</b>입니다.
                    트리 DFS가 최악의 경우 깊이 N까지 내려가면 재귀 스택 공간도 O(N)입니다.
                  </p>
                </div>
                <div>
                  <strong>호출당 메모리는 고정값이 아님</strong>
                  <p>
                    정확한 프레임 크기는 컴파일러, 최적화 옵션, CPU, 매개변수·지역 변수에 따라 달라집니다.
                    따라서 “재귀 1번 = 정확히 몇 Byte”라고 하나의 값으로 외우면 안 됩니다.
                  </p>
                </div>
                <div>
                  <strong>큰 지역 배열은 특히 위험</strong>
                  <p>
                    재귀 함수 안에 <code>int temp[1000]</code>이 있다면 호출 한 번마다 배열만 약 <b>4KB</b>입니다.
                    재귀 깊이가 1,000이면 배열만 단순 계산해도 약 <b>4MB</b>가 스택에 쌓입니다.
                  </p>
                </div>
                <div>
                  <strong>메모리 제한과 스택 제한은 다를 수 있음</strong>
                  <p>
                    문제의 메모리 제한이 512MB여도 프로그램의 호출 스택 한도는 그보다 훨씬 작을 수 있습니다.
                    따라서 총 메모리 제한 안이라고 해서 깊은 재귀가 반드시 안전한 것은 아닙니다.
                  </p>
                </div>
              </div>

              <div className="contest-recursion-example">
                <strong>재귀는 몇 번까지 가능한가?</strong>
                <p>
                  <b>고정된 안전 횟수는 없습니다.</b> 대략적으로는
                  <code> 최대 깊이 ≈ 사용 가능한 스택 크기 ÷ 호출 1회의 스택 프레임 크기</code>로 생각할 수 있습니다.
                  예를 들어 사용할 수 있는 스택이 8MB라고 가정하면 프레임이 1KB인 재귀는 이론상 약 8,000단계,
                  프레임이 4KB라면 약 2,000단계 수준에서 이미 한계에 가까워집니다.
                  실제로는 런타임·정렬·기타 호출 공간이 있으므로 이 계산보다 여유를 두어야 합니다.
                </p>
              </div>

              <div className="contest-complexity-caution">
                <strong>알고리즘 문제에서의 실전 판단</strong>
                <p>
                  깊이가 O(log N)인 이분 탐색·균형 분할 재귀는 대체로 깊이가 작습니다.
                  반면 연결 리스트 모양의 트리 DFS처럼 최악 깊이가 N이고 N이 수십만까지 갈 수 있다면
                  재귀 DFS는 스택 오버플로 위험이 있으므로 <b>명시적인 stack을 사용하는 반복문 DFS</b>도 함께 검토하는 것이 안전합니다.
                  이 경우에도 메모리는 O(N)이지만 호출 스택 대신 동적 메모리 영역의 컨테이너를 사용하게 됩니다.
                </p>
              </div>
            </div>

            <div className="contest-complexity-caution">
              <strong>단위 환산</strong>
              <p>
                빠르게 계산할 때는 1,000Byte ≈ 1KB, 1,000KB ≈ 1MB로 잡아도 됩니다.
                더 정확한 컴퓨터 메모리 단위는 1KB = 1,024Byte, 1MB = 1,024KB입니다.
              </p>
            </div>
          </article>

          <div className="contest-complexity-reference">
            <strong>자주 사용하는 자료형 크기</strong>
            <div className="contest-complexity-reference-grid">
              <div><span>char</span><b>1Byte</b><p>문자·작은 정수</p></div>
              <div><span>short</span><b>2Byte</b><p>일반적인 크기 기준</p></div>
              <div><span>int / float</span><b>4Byte</b><p>대부분의 알고리즘 문제에서 자주 사용</p></div>
              <div><span>long long / double</span><b>8Byte</b><p>큰 정수·실수</p></div>
            </div>
          </div>

          <div className="contest-complexity-summary">
            <strong>핵심 정리</strong>
            <div>
              <p><b>시간</b> : 시간복잡도 → N의 최댓값 대입 → 대략적인 연산 횟수 계산 → 시간 제한과 비교</p>
              <p><b>공간</b> : 공간복잡도 → 원소 개수 × 자료형 크기 → KB/MB 환산 → 메모리 제한과 비교</p>
              <p>
                즉, <b>Big-O는 입력이 커질 때 증가하는 정도</b>를 보는 것이고,
                실제 연산 횟수와 MB 계산은 그 알고리즘이 해당 문제의 제한 안에서 정말 사용할 수 있는지를 확인하는 과정입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contest-analysis-practice">
        <div className="contest-section-heading">
          <span>ANALYSIS PRACTICE</span>
          <h2>문제 분석 연습 10문제</h2>
          <p>
            아래 문제는 실제 정보올림피아드 기출문제가 아니라, 비슷한 수준의 알고리즘 분석 연습을 위해 새로 만든 문제입니다.
            먼저 문제와 제한을 보고 풀이·시간복잡도·공간복잡도를 직접 분석한 뒤 답을 펼쳐 확인하세요.
          </p>
        </div>

        <div className="contest-analysis-practice-list">
          {analysisPracticeProblems.map((item, index) => (
            <details className="contest-analysis-practice-item" key={item.title}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className="contest-analysis-practice-meta">{item.topic}</div>
                  <h3>{item.title}</h3>
                  <p>{item.problem}</p>
                  <b>{item.constraints}</b>
                </div>
                <i aria-hidden="true" />
              </summary>

              <div className="contest-analysis-practice-answer">
                <div>
                  <strong>핵심 제약</strong>
                  <p>{item.keyConstraint}</p>
                </div>
                <div>
                  <strong>단순 접근과 한계</strong>
                  <p>{item.naive}</p>
                </div>
                <div>
                  <strong>선택 알고리즘</strong>
                  <p>{item.algorithm}</p>
                </div>
                <div>
                  <strong>정당성</strong>
                  <p>{item.correctness}</p>
                </div>

                <div className="contest-analysis-practice-complexity">
                  <article>
                    <span>TIME COMPLEXITY</span>
                    <strong>{item.time}</strong>
                    <p>{item.operation}</p>
                  </article>
                  <article>
                    <span>SPACE COMPLEXITY</span>
                    <strong>{item.space}</strong>
                    <p>{item.memory}</p>
                  </article>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="contest-koi-2026-review">
        <div className="contest-section-heading">
          <span>2026 KOI OFFICIAL REVIEW</span>
          <h2>2026 정보올림피아드 1차·2차 문제 분석</h2>
          <p>
            공식 문제와 공식 해설을 기준으로, 시간·공간복잡도 분석에 적합한 프로그래밍 문제 전체를 정리했습니다.
            1차 대회는 2교시 실기 6문제, 2차 대회는 초·중·고 통합 기준 서로 다른 8문제로 총 14문제입니다.
            1차 1교시 사고력·비버챌린지형 문항은 프로그래밍 복잡도 분석과 성격이 달라 이 목록에서는 제외했습니다.
          </p>
          <div className="contest-koi-source-links">
            <a href="https://koi.or.kr/koi/2026/1/" target="_blank" rel="noreferrer">
              2026 KOI 1차 공식 자료
            </a>
            <a href="https://koi.or.kr/koi/2026/2/" target="_blank" rel="noreferrer">
              2026 KOI 2차 공식 자료
            </a>
          </div>
        </div>

        {["1차 대회 · 2교시", "2차 대회"].map((stage) => (
          <div className="contest-koi-stage" key={stage}>
            <div className="contest-koi-stage-heading">
              <strong>{stage}</strong>
              <span>{koi2026Problems.filter((item) => item.stage === stage).length}문제</span>
            </div>

            <div className="contest-analysis-practice-list">
              {koi2026Problems
                .filter((item) => item.stage === stage)
                .map((item, index) => (
                  <details className="contest-analysis-practice-item contest-koi-official-item" key={item.title}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <div className="contest-analysis-practice-meta">
                          {item.division} · {item.topic}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.problem}</p>
                        <b>{item.constraints}</b>
                      </div>
                      <i aria-hidden="true" />
                    </summary>

                    <div className="contest-analysis-practice-answer">
                      <div>
                        <strong>핵심 제약·관찰</strong>
                        <p>{item.keyConstraint}</p>
                      </div>
                      <div>
                        <strong>단순 접근과 한계</strong>
                        <p>{item.naive}</p>
                      </div>
                      <div>
                        <strong>만점 풀이 핵심</strong>
                        <p>{item.algorithm}</p>
                      </div>
                      <div>
                        <strong>정당성</strong>
                        <p>{item.correctness}</p>
                      </div>

                      <div className="contest-analysis-practice-complexity">
                        <article>
                          <span>TIME COMPLEXITY</span>
                          <strong>{item.time}</strong>
                          <p>{item.operation}</p>
                        </article>
                        <article>
                          <span>SPACE COMPLEXITY</span>
                          <strong>{item.space}</strong>
                          <p>{item.memory}</p>
                        </article>
                      </div>
                    </div>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="contest-interview-questions">
        <div className="contest-section-heading">
          <span>PRACTICE QUESTIONS</span>
          <h2>예상·연습 질문</h2>
          <p>
            아래 문항은 공식 기출문항이 아니라, 학교가 공개한 평가 방향을 바탕으로
            대회입상자의 알고리즘·문제해결 역량을 점검하기 위한 연습 질문입니다.
          </p>
        </div>

        <QuestionGroup
          number="01"
          title="입상 실적·진위 확인"
          description="수상 결과가 실제 자신의 경험과 역량에서 나온 것인지 확인합니다."
          questions={evidenceQuestions}
        />
        <QuestionGroup
          number="02"
          title="대표 문제 심층 분석"
          description="문제를 풀었다는 사실이 아니라 풀이를 설계한 사고 과정을 설명합니다."
          questions={deepDiveQuestions}
        />
        <QuestionGroup
          number="03"
          title="조건 변경·응용"
          description="외운 풀이가 아니라 알고리즘을 이해하고 있는지 확인하는 후속 질문입니다."
          questions={transferQuestions}
        />
        <QuestionGroup
          number="04"
          title="진로목표·학업역량"
          description="대회 경험을 지원 학과와 향후 학습 계획으로 연결합니다."
          questions={careerQuestions}
        />
        <QuestionGroup
          number="05"
          title="인성·단체생활"
          description="경쟁과 실패, 협업과 갈등 상황에서의 태도를 준비합니다."
          questions={characterQuestions}
        />
      </section>

      <section className="contest-interview-answer-frame">
        <div className="contest-section-heading">
          <span>ANSWER FRAME</span>
          <h2>답변은 이렇게 구조화합니다</h2>
        </div>
        <div className="contest-answer-grid">
          <article>
            <span>기술 질문</span>
            <h3>문제 → 제약 → 선택 → 근거 → 검증</h3>
            <p>
              문제를 짧게 정의하고 핵심 제한을 말한 뒤, 후보 풀이와 최종 알고리즘을
              비교합니다. 마지막에 복잡도·정당성·예외 케이스로 풀이를 검증합니다.
            </p>
          </article>
          <article>
            <span>경험 질문</span>
            <h3>계기 → 과정 → 난관 → 행동 → 배운 점</h3>
            <p>
              결과만 강조하지 않고 어떤 상황에서 무엇을 판단하고 행동했는지,
              그 경험이 이후 학습 방식에 어떤 변화를 만들었는지 설명합니다.
            </p>
          </article>
          <article>
            <span>진로 질문</span>
            <h3>현재 역량 → 지원 학과 → 다음 목표</h3>
            <p>
              지금까지의 알고리즘 학습을 출발점으로 삼아 지원 학과에서 무엇을
              확장하고 싶은지 구체적인 학습 목표로 연결합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="contest-interview-mock">
        <div className="contest-section-heading">
          <span>10-MINUTE MOCK</span>
          <h2>10분 모의면접 연습 구성</h2>
          <p>학교의 공식 질문 순서가 아니라, 약 10분 면접에 대비하기 위한 연습 구성입니다.</p>
        </div>
        <div className="contest-mock-timeline">
          <div><span>0~2분</span><strong>지원 동기·전공 적합성</strong><p>왜 이 학과인가, 나의 강점은 무엇인가</p></div>
          <div><span>2~6분</span><strong>입상 실적·대표 문제</strong><p>문제 하나를 깊게 설명하고 복잡도·자료구조까지 답하기</p></div>
          <div><span>6~8분</span><strong>꼬리·변형 질문</strong><p>제약 변화, 대안 알고리즘, 반례·예외 케이스</p></div>
          <div><span>8~10분</span><strong>인성·단체생활</strong><p>실패, 협업, 갈등, 학교생활 계획</p></div>
        </div>
      </section>

      <section className="contest-interview-warning">
        <strong>암기한 모범답안보다 중요한 것</strong>
        <p>
          심층면접은 정답 문장을 외워 말하는 시험이 아닙니다. 자신이 실제로 수행한
          대회 준비와 문제풀이 경험을 바탕으로 질문을 듣고 생각을 설명하는 연습을
          반복해야 합니다. 특히 알고리즘 이름을 말하는 것보다 왜 그 방법이 필요한지
          설명할 수 있는지를 기준으로 준비하세요.
        </p>
      </section>

      <section className="contest-interview-past">
        <div className="contest-section-heading">
          <span>PAST QUESTION</span>
          <h2>학교가 공개한 실제 기출의 방향</h2>
          <p>2026학년도 심층면접 기출문항의 취지를 요약했습니다.</p>
        </div>
        <div className="contest-past-grid">
          <article>
            <span>기출 요지 01</span>
            <h3>왜 내가 지원 학과에 적합한 학생인지 전공 역량을 근거로 설명하기</h3>
            <p>
              대회 성적만 말하는 것이 아니라, 그 성적을 만들기까지의 학습 과정과
              문제해결 능력을 지원 학과와 연결해서 설명합니다.
            </p>
          </article>
          <article>
            <span>기출 요지 02</span>
            <h3>가장 열심히 공부한 과목과 그 이유를 구체적으로 설명하기</h3>
            <p>
              어떤 과목을 좋아한다는 수준을 넘어, 무엇을 어떻게 공부했고 그 경험이
              자신의 진로·전공 학습과 어떻게 이어졌는지 준비합니다.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
