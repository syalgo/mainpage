import Link from "next/link";

type AnswerTable = {
  headers: string[];
  rows: string[][];
};

type GraphProblem = {
  number: number;
  statement: string;
  questions: string[];
  insight: string[];
  guideQuestions: string[];
  answers: string[];
  commonMistake?: string[];
  tables?: AnswerTable[];
  visual: "grid" | "gridBlocked" | "spaceship" | "flowers" | "flowersBlocked" | "islands" | "poles" | "complete" | "checker";
};

const problems: GraphProblem[] = [
  {
    number: 1,
    visual: "grid",
    statement: "A에서 B까지 최단 거리로 가려고 합니다.",
    questions: [
      "A에서 B까지 가는 방법은 모두 몇 가지인지 구하시오.",
      "반드시 점 C를 거쳐 가는 방법은 몇 가지인지 구하시오.",
    ],
    insight: [
      "격자 최단경로에서는 한 점에 도착하는 방법 수가 바로 위 점에서 오는 수와 바로 왼쪽 점에서 오는 수의 합으로 정해집니다.",
      "길이 끊긴 곳에서는 그 방향에서 들어오는 수를 0으로 두고 계산합니다.",
      "C를 반드시 거치는 경로는 A→C와 C→B의 두 구간으로 나누어 각각 센 뒤 곱합니다.",
    ],
    guideQuestions: [
      "①의 점에 도착하기 바로 전에 어디에 있었을까?",
      "C 바로 위에는 점이 있어, 없어?",
      "A→C 가는 길이 3가지인데, 그 각각마다 C→B 가는 길이 또 3가지씩 있다면 어떻게 합쳐야 할까?",
    ],
    answers: [
      "① 첫 줄과 첫 칸을 1로 두고, 각 점에 ‘위에서 오는 수 + 왼쪽에서 오는 수’를 채웁니다. 길이 없는 곳은 0으로 처리하면 B에 도착하는 수는 31가지입니다.",
      "② C를 기준으로 나누면 A→C는 3가지, C→B는 3가지입니다. A→C 한 가지를 고를 때마다 C→B 세 가지가 모두 가능하므로 3×3=9가지입니다.",
    ],
    commonMistake: [
      "위쪽 길이 끊긴 점에서 위에서 오는 길을 1로 세지 않습니다. 길이 없으면 그 방향은 0입니다.",
      "대각선으로 보이는 점은 최단 거리 계산에 영향을 주지 않습니다.",
      "C를 거치는 경우는 3+3이 아니라 3×3입니다. 두 구간의 선택이 이어지기 때문입니다.",
    ],
  },
  {
    number: 2,
    visual: "grid",
    statement: "A에서 B까지 최단 거리로 가되, 점 C는 거치지 않아야 합니다.",
    questions: [
      "C를 지나지 않고 A에서 B까지 가는 방법은 모두 몇 가지인지 구하시오.",
    ],
    insight: [
      "직접 세기 어렵다면 반대로 생각합니다.",
      "전체 경로에서 C를 거치는 경로를 빼면 C를 거치지 않는 경로가 남습니다.",
      "앞 문제에서 전체 경로 수와 C를 거치는 경로 수를 이미 구했으므로, 두 값을 이용하면 됩니다.",
    ],
    guideQuestions: [
      "C를 거치지 않는 길을 직접 세려고 하면 어떤 점이 어려울까?",
      "그럼 거꾸로 생각해보자. 전체 길에서 C를 거치는 길을 빼면 무엇이 남을까?",
      "앞 문제에서 이미 구한 두 수는 무엇이었을까?",
    ],
    answers: [
      "전체 A→B 최단경로는 31가지이고, C를 거치는 경로는 9가지입니다.",
      "따라서 C를 거치지 않는 경로는 31-9=22가지입니다.",
    ],
    commonMistake: [
      "전체에서 빼야 하는 것은 ‘C를 거치는 전체 경로 9가지’입니다.",
      "A→C의 3가지나 C→B의 3가지만 빼는 것이 아닙니다.",
    ],
  },
  {
    number: 3,
    visual: "gridBlocked",
    statement: "A에서 B까지 최단 거리로 가려고 합니다. 단, X 표시된 도로 구간은 공사 중이라 지나갈 수 없습니다.",
    questions: [
      "공사 중인 도로를 지나지 않고 A에서 B까지 가는 방법은 모두 몇 가지인지 구하시오.",
    ],
    insight: [
      "막힌 것이 ‘점’인지 ‘도로’인지 구분합니다.",
      "점이 막혔다면 그 점으로 들어오는 모든 길을 막지만, 도로 하나가 막힌 경우에는 그 방향에서 들어오는 길만 0으로 둡니다.",
      "나머지 방향의 길은 그대로 살아 있으므로, 그 점의 경우의 수는 다른 방향에서 들어온 수로 계속 계산합니다.",
    ],
    guideQuestions: [
      "X 표시는 점을 막은 걸까, 길을 막은 걸까?",
      "점은 막히지 않았으니까 다른 방향에서 들어올 수 있을까?",
      "위에서 오는 길이 막혔다면 아래쪽 점의 수를 계산할 때 무엇만 제외하면 될까?",
    ],
    answers: [
      "첫 줄과 첫 칸은 1로 두고 위+왼쪽 규칙으로 채웁니다.",
      "X로 막힌 세로 도로에서는 위에서 내려오는 수만 0으로 처리하고, 왼쪽에서 오는 수는 그대로 더합니다.",
      "계속 채우면 B에 도착하는 방법은 14가지입니다.",
    ],
    commonMistake: [
      "도로 하나가 막혔다고 그 점 자체의 값을 0으로 만들지 않습니다.",
      "점이 막힌 경우와 길이 막힌 경우는 다릅니다.",
    ],
  },
  {
    number: 4,
    visual: "spaceship",
    statement: "우주선 내부에는 방 A, B, C, D가 있고, 방 사이와 우주 바깥으로 통하는 문이 모두 7개 있습니다. 우주인이 모든 문을 정확히 한 번씩 지나 이동하려고 합니다.",
    questions: [
      "우주인이 머무를 수 있는 자리를 모두 몇 곳인지 구하시오.",
      "이동할 수 있는 길(문)은 모두 몇 개인지 구하시오.",
      "자리를 점으로, 문을 선으로 바꾸어 그래프로 나타내시오.",
      "A에서 출발해서 모든 문을 한 번씩 지나는 이동이 가능한지 시도하시오.",
      "우주 밖에서 출발해서 시도하고, ④의 결과와 비교하시오.",
      "가능한 출발점과 불가능한 출발점에는 어떤 공통점이 있는지, 각 점에서 뻗어나가는 선의 개수를 세어 보시오.",
      "A에서 출발해 모든 문을 한 번씩 지나며 어디에서 끝나는지, 출발한 곳으로 돌아올 수 있는지도 구하시오.",
    ],
    insight: [
      "복잡한 공간도 ‘자리=점, 문=선’으로 바꾸면 연결 관계만 남길 수 있습니다.",
      "한 점에 연결된 선의 개수를 차수라고 합니다.",
      "모든 선을 한 번씩 지나 출발점으로 돌아오는 한붓그리기는 홀수점이 0개일 때 가능하고, 출발점과 끝점이 다른 한붓그리기는 홀수점이 2개일 때 가능합니다.",
      "홀수점이 3개 이상이면 한붓그리기가 불가능합니다.",
    ],
    guideQuestions: [
      "방이 4개라고 점이 4개뿐일까? 바깥도 하나의 자리일까?",
      "각 자리에서 연결된 문은 몇 개씩일까?",
      "한붓그리기가 가능한 시작점은 어떤 차수를 가질까?",
      "A에서 출발했다면 끝나는 점은 어디가 되어야 할까?",
    ],
    answers: [
      "① 자리: A, B, C, D, 바깥 → 5곳",
      "② 문은 모두 7개입니다.",
      "③ 연결 관계는 A-바깥, A-B, A-D, B-C, B-D, C-D, D-바깥입니다.",
      "④ A에서 출발하는 한붓그리기는 가능합니다. 예: A→바깥→D→C→B→D→A→B",
      "⑤ 바깥에서 출발하면 한붓그리기가 불가능합니다.",
      "⑥ 차수는 A 3(홀), B 3(홀), C 2(짝), D 4(짝), 바깥 2(짝)입니다. 가능한 출발점은 홀수점 A 또는 B입니다.",
      "⑦ A에서 출발하면 B에서 끝납니다. 홀수점이 2개이므로 출발점으로 돌아오는 회로는 만들 수 없습니다.",
    ],
    commonMistake: [
      "방만 점으로 바꾸고 ‘바깥’을 빼뜨리지 않습니다. 바깥도 하나의 넓은 공간이므로 점 하나로 표현합니다.",
      "한붓그리기가 가능하다는 말과 출발점으로 돌아올 수 있다는 말은 다릅니다.",
    ],
    tables: [
      {
        headers: ["점", "연결된 곳", "차수"],
        rows: [
          ["A", "바깥, B, D", "3 (홀)"],
          ["B", "A, C, D", "3 (홀)"],
          ["C", "B, D", "2 (짝)"],
          ["D", "A, B, C, 바깥", "4 (짝)"],
          ["바깥", "A, D", "2 (짝)"],
        ],
      },
    ],
  },
  {
    number: 5,
    visual: "flowers",
    statement: "꿀벌이 벌집에서 출발해서 꽃밭을 돌아다니려고 합니다. 벌집과 꽃 5송이 사이를 잇는 길이 다음과 같이 있습니다.",
    questions: [
      "각 점(벌집, 꽃1~꽃5)에 연결된 선의 개수를 세어 표로 정리하시오.",
      "꿀벌이 벌집에서 출발해서 모든 길을 한 번씩 지나고 다시 벌집으로 돌아오는 것이 가능한지 판단하시오.",
      "꽃3에서 출발한다면 모든 길을 한 번씩 지나고 꽃3으로 돌아올 수 있는지, 다른 꽃에서 출발해도 같은지 구하시오.",
      "4번 우주선 문제와 비교하여, 한붓그리기 가능 여부에서 어떤 차이가 있는지 구하시오.",
    ],
    insight: [
      "홀수점이 0개이면 어느 점에서 출발해도 모든 선을 한 번씩 지나 출발점으로 돌아오는 회로를 만들 수 있습니다.",
      "홀수점이 2개이면 한붓그리기는 가능하지만 출발점과 끝점이 달라집니다.",
    ],
    guideQuestions: [
      "각 점의 차수를 세어 보자. 홀수점이 있어, 없어?",
      "홀수점이 0개면 사이클을 만들 수 있을까?",
      "벌집이 아닌 다른 꽃에서 출발해도 결과가 같을까?",
    ],
    answers: [
      "① 차수: 벌집 2, 꽃1 4, 꽃2 4, 꽃3 4, 꽃4 4, 꽃5 2로 모두 짝수입니다.",
      "② 가능합니다. 예: 벌집→꽃1→꽃2→꽃3→꽃4→꽃1→꽃3→꽃5→꽃4→꽃2→벌집",
      "③ 꽃3에서도 출발점으로 돌아올 수 있고, 다른 어느 점에서 출발해도 마찬가지입니다. 모든 점의 차수가 짝수이기 때문입니다.",
      "④ 우주선 문제는 홀수점이 2개라 경로만 가능했고, 꽃밭은 홀수점이 0개라 회로가 가능합니다.",
    ],
    commonMistake: [
      "‘한붓그리기 가능’과 ‘출발점으로 돌아올 수 있음’을 같은 뜻으로 생각하지 않습니다.",
      "돌아올 수 있는지는 홀수점의 개수로 판단합니다.",
    ],
    tables: [
      {
        headers: ["점", "연결된 점", "차수"],
        rows: [
          ["벌집", "꽃1, 꽃2", "2 (짝)"],
          ["꽃1", "벌집, 꽃2, 꽃3, 꽃4", "4 (짝)"],
          ["꽃2", "벌집, 꽃1, 꽃3, 꽃4", "4 (짝)"],
          ["꽃3", "꽃1, 꽃2, 꽃4, 꽃5", "4 (짝)"],
          ["꽃4", "꽃1, 꽃2, 꽃3, 꽃5", "4 (짝)"],
          ["꽃5", "꽃3, 꽃4", "2 (짝)"],
        ],
      },
    ],
  },
  {
    number: 6,
    visual: "flowersBlocked",
    statement: "5번의 꽃밭 그래프에서 꽃1과 꽃2 사이의 길이 거미줄 때문에 지나갈 수 없게 되었습니다.",
    questions: [
      "거미줄로 막힌 길을 제거한 뒤 각 점의 차수를 다시 세어 표로 정리하시오.",
      "5번과 비교하여 차수가 변한 점은 어디인지, 왜 그 점들의 차수가 변했는지 구하시오.",
      "꿀벌이 벌집에서 출발해 모든 길을 한 번씩 지나고 벌집으로 돌아올 수 있는지 구하시오.",
      "그래도 모든 길을 한 번씩 지나는 것 자체는 가능한지, 가능하다면 어디에서 출발해야 하는지 구하시오.",
    ],
    insight: [
      "선 하나를 추가하거나 제거하면 그 선의 양 끝 두 점의 차수만 각각 1씩 바뀝니다.",
      "선 하나를 제거하면 홀수점 0개였던 회로가 홀수점 2개의 경로로 바뀔 수 있습니다.",
      "이 원리를 이용하면 한붓그리기 조건을 원하는 형태로 바꿀 수 있습니다.",
    ],
    guideQuestions: [
      "꽃1-꽃2 길 하나를 없애면 어느 점들의 차수만 바뀔까?",
      "홀수점이 2개가 되면 출발점으로 돌아오는 회로는 가능할까?",
      "그래도 한붓그리기 자체는 가능하다면 어디에서 시작해야 할까?",
    ],
    answers: [
      "① 차수: 벌집 2(짝), 꽃1 3(홀), 꽃2 3(홀), 꽃3 4(짝), 꽃4 4(짝), 꽃5 2(짝)",
      "② 차수가 변한 점은 꽃1과 꽃2입니다. 두 점을 잇는 선 하나를 제거했으므로 두 점의 차수가 각각 1씩 줄었습니다.",
      "③ 벌집에서 출발해 벌집으로 돌아오는 회로는 불가능합니다. 홀수점이 꽃1, 꽃2 두 개이기 때문입니다.",
      "④ 한붓그리기 자체는 가능합니다. 꽃1 또는 꽃2에서 출발해야 하며 다른 홀수점에서 끝납니다.",
    ],
    commonMistake: [
      "선 하나를 빼면 양 끝 두 점의 차수만 변합니다.",
      "다른 점의 차수까지 모두 줄어든다고 생각하지 않습니다.",
    ],
    tables: [
      {
        headers: ["점", "연결된 점", "차수"],
        rows: [
          ["벌집", "꽃1, 꽃2", "2 (짝)"],
          ["꽃1", "벌집, 꽃3, 꽃4", "3 (홀)"],
          ["꽃2", "벌집, 꽃3, 꽃4", "3 (홀)"],
          ["꽃3", "꽃1, 꽃2, 꽃4, 꽃5", "4 (짝)"],
          ["꽃4", "꽃1, 꽃2, 꽃3, 꽃5", "4 (짝)"],
          ["꽃5", "꽃3, 꽃4", "2 (짝)"],
        ],
      },
    ],
  },
  {
    number: 7,
    visual: "islands",
    statement: "섬 A, B, C, D, E, F가 있고 섬 사이에 8개의 다리가 놓여 있습니다. 모든 다리를 한 번씩만 건너는 여행을 계획합니다.",
    questions: [
      "각 섬에서 뻗어나가는 다리의 개수를 세어 표로 정리하고, 모든 다리를 한 번씩만 건너는 것이 가능한지 결정하시오.",
      "불가능하다면 섬 사이에 다리 하나를 더 놓아 가능하게 하려고 합니다. 어느 섬과 어느 섬 사이에 놓아야 하는지 한 가지 이상 구하시오.",
      "②에서 다리 하나를 더 놓았을 때 출발한 섬으로 돌아올 수 있는지 구하시오.",
      "출발한 섬으로 돌아오는 한붓그리기를 만들려면 다리를 몇 개 더 놓아야 하는지, 가능하면 추가할 다리를 구하시오.",
    ],
    insight: [
      "다리 하나를 추가하거나 제거하면 양 끝 두 섬의 차수가 각각 1씩 바뀝니다.",
      "홀수점 4개를 한붓그리기 가능한 상태로 바꾸려면 홀수점끼리 연결해 홀수점 수를 줄여야 합니다.",
      "홀수점 2개가 되면 경로, 홀수점 0개가 되면 회로가 가능합니다.",
    ],
    guideQuestions: [
      "홀수점이 몇 개이면 한붓그리기가 가능한데, 지금은 몇 개일까?",
      "홀수점끼리 다리를 하나 더 놓으면 두 홀수점의 차수는 어떻게 바뀔까?",
      "출발점으로 돌아오려면 홀수점이 몇 개여야 할까?",
    ],
    answers: [
      "① 차수: A 2(짝), B 3(홀), C 3(홀), D 3(홀), E 3(홀), F 2(짝). 홀수점이 4개이므로 한붓그리기는 불가능합니다.",
      "② 홀수점 두 개를 연결하면 홀수점이 2개로 줄어듭니다. 가능한 예는 B-E 또는 C-D입니다.",
      "③ 다리 하나만 추가하면 홀수점이 2개 남으므로 한붓그리기는 가능하지만 출발점으로 돌아오는 회로는 만들 수 없습니다.",
      "④ 회로를 만들려면 홀수점 4개를 모두 짝수로 바꾸어야 하므로 다리 2개가 필요합니다. 예: B-E와 C-D를 추가합니다.",
    ],
    commonMistake: [
      "홀수점이 4개라고 아무 다리 하나만 추가하면 회로가 되는 것은 아닙니다.",
      "홀수점끼리 연결해 홀수점을 2개씩 없애야 합니다.",
    ],
    tables: [
      {
        headers: ["섬", "연결된 섬", "차수"],
        rows: [
          ["A", "B, C", "2 (짝)"],
          ["B", "A, C, D", "3 (홀)"],
          ["C", "A, B, E", "3 (홀)"],
          ["D", "B, E, F", "3 (홀)"],
          ["E", "C, D, F", "3 (홀)"],
          ["F", "D, E", "2 (짝)"],
        ],
      },
    ],
  },
  {
    number: 8,
    visual: "poles",
    statement: "어느 군에 전봇대 5개(가, 나, 다, 라, 마)가 있고, 전봇대 사이를 잇는 산책로가 6개 있습니다. 통신관은 모든 산책로를 한 번씩만 걸어 점검하려고 합니다.",
    questions: [
      "각 전봇대에 연결된 산책로 개수를 세어 표로 정리하시오.",
      "어떤 전봇대에서 출발하면 모든 산책로를 한 번씩 걷고 출발한 전봇대로 돌아올 수 있는지 구하시오. 가능하면 어디서 출발해야 하는지, 불가능하면 그 이유를 설명하시오.",
      "산책로 1개를 새로 만들어 출발한 전봇대로 돌아올 수 있게 하려고 합니다. 어느 전봇대 사이에 만들어야 하는지 구하고 그 이유를 설명하시오.",
    ],
    insight: [
      "실생활 문제도 점과 선으로 줄이면 같은 그래프 도구로 풀 수 있습니다.",
      "회로를 만들려면 모든 점의 차수가 짝수여야 합니다.",
      "홀수점이 두 개라면 그 두 점을 직접 연결하는 선 하나를 추가해 두 점을 모두 짝수점으로 만들 수 있습니다.",
    ],
    guideQuestions: [
      "공원에서 전봇대를 점으로, 산책로를 선으로 바꾸면 어떤 그림이 될까?",
      "이 그림에서 각각의 홀수점은 어디일까?",
      "회로가 되려면 홀수점이 몇 개여야 할까?",
    ],
    answers: [
      "① 차수: 가 3(홀), 나 2(짝), 다 3(홀), 라 2(짝), 마 2(짝)",
      "② 홀수점이 가와 다 두 개이므로 출발한 전봇대로 돌아오는 회로는 만들 수 없습니다. 가 또는 다에서 출발하면 다른 홀수점에서 끝나는 한붓그리기는 가능합니다.",
      "③ 가와 다를 잇는 산책로를 하나 추가합니다. 두 점의 차수가 3에서 4로 바뀌어 모든 점이 짝수점이 되므로 회로가 가능합니다.",
    ],
    commonMistake: [
      "산책로를 아무 곳에나 추가하면 회로가 되는 것이 아닙니다.",
      "짝수점끼리 또는 짝수점-홀수점 사이에 추가하는 것이 아니라, 두 홀수점을 서로 연결해야 합니다.",
    ],
    tables: [
      {
        headers: ["전봇대", "연결된 전봇대", "차수"],
        rows: [
          ["가", "나, 라, 마", "3 (홀)"],
          ["나", "가, 다", "2 (짝)"],
          ["다", "나, 라, 마", "3 (홀)"],
          ["라", "가, 다", "2 (짝)"],
          ["마", "가, 다", "2 (짝)"],
        ],
      },
    ],
  },
  {
    number: 9,
    visual: "complete",
    statement: "완전그래프는 모든 점이 서로 다른 모든 점과 선으로 연결된 그래프입니다. 점이 3개, 4개, 5개인 완전그래프를 살펴봅니다.",
    questions: [
      "위 완전그래프에서 각 점에 연결된 선의 개수를 표로 정리하시오.",
      "①의 결과를 보고, 점이 n개인 완전그래프에서 각 점에 연결된 선의 개수를 n으로 나타내시오.",
      "점이 3개, 4개, 5개, 6개, 7개인 완전그래프 각각에서 모든 선을 한 번씩 지나고 출발한 점으로 돌아오는 것이 가능한지 판단하고 표로 정리하시오.",
      "③의 결과에서 가능한 경우와 불가능한 경우의 차이를 n과 어떤 관계가 있는지 구하시오.",
      "점이 100개인 완전그래프에서 모든 선을 한 번씩 지나고 출발점으로 돌아올 수 있는지 구하고 이유를 설명하시오.",
    ],
    insight: [
      "완전그래프에서 각 점의 차수는 n-1입니다.",
      "작은 경우를 직접 조사해 규칙을 찾고, 그 규칙을 일반화하면 큰 수의 경우도 그림을 직접 그리지 않고 판단할 수 있습니다.",
      "회로 가능 여부는 각 점의 차수가 짝수인지에 따라 결정됩니다.",
    ],
    guideQuestions: [
      "한 점은 자기 자신과 연결되지 않는다. 나머지 몇 개의 점과 연결될까?",
      "n이 3, 4, 5일 때 각 점의 차수는 어떻게 변할까?",
      "n이 홀수일 때 n-1의 홀짝은 무엇일까?",
      "n이 짝수일 때는 어떻게 될까?",
    ],
    answers: [
      "① n=3일 때 각 점 차수 2, n=4일 때 3, n=5일 때 4입니다.",
      "② 점이 n개이면 각 점은 자기 자신을 제외한 n-1개의 점과 연결되므로 차수는 n-1입니다.",
      "③ n=3 가능 / n=4 불가능 / n=5 가능 / n=6 불가능 / n=7 가능",
      "④ n이 홀수이면 n-1이 짝수가 되어 모든 점이 짝수점이므로 회로가 가능하고, n이 짝수이면 n-1이 홀수가 되어 모든 점이 홀수점이므로 회로가 불가능합니다.",
      "⑤ 100은 짝수이고 각 점의 차수는 99(홀수)이므로 모든 점이 홀수점입니다. 따라서 회로는 불가능합니다.",
    ],
    commonMistake: [
      "결론만 ‘n이 홀수면 가능, 짝수면 불가능’이라고 외우지 않습니다.",
      "가능 여부는 각 점의 차수 n-1이 짝수인지 홀수인지에서 나옵니다.",
    ],
    tables: [
      {
        headers: ["점의 개수 n", "각 점의 차수", "회로 가능 여부"],
        rows: [
          ["3", "2 (짝)", "가능"],
          ["4", "3 (홀)", "불가능"],
          ["5", "4 (짝)", "가능"],
          ["6", "5 (홀)", "불가능"],
          ["7", "6 (짝)", "가능"],
        ],
      },
    ],
  },
  {
    number: 10,
    visual: "checker",
    statement: "5×5 체커보드의 칸이 흑과 백으로 번갈아 칠해져 있습니다. 말은 한 번에 위·아래·왼쪽·오른쪽의 이웃한 칸으로만 이동하며, 모든 칸을 정확히 한 번씩 방문하고 출발한 칸으로 돌아오려고 합니다.",
    questions: [
      "체커보드에서 흑 칸과 백 칸은 각각 몇 개인지 구하시오.",
      "이웃한 칸으로 이동할 때 말의 색은 어떻게 바뀌는지 구하시오.",
      "모든 칸을 한 번씩 방문하고 출발한 칸으로 돌아오는 경로가 있다면 직접 그려 보시오.",
      "①과 ③의 결과를 비교하여 이러한 경로가 존재할 수 있는지 판단하시오.",
    ],
    insight: [
      "이 문제는 모든 경로를 직접 찾는 문제가 아니라, 답이 없음을 보이는 문제입니다.",
      "체커보드의 색칠을 이용하면 이동할 때마다 색이 반드시 번갈아 나타난다는 성질을 이용할 수 있습니다.",
      "경로를 실제로 모두 찾아보지 않아도 변하지 않는 성질을 이용해 불가능을 증명할 수 있습니다.",
    ],
    guideQuestions: [
      "이웃한 칸으로 한 칸 가면 색이 어떻게 바뀔까?",
      "흑과 백이 번갈아 나오는데, 흑 칸 수와 백 칸 수는 같은가?",
      "출발점으로 돌아오려면 마지막 칸과 출발 칸은 어떤 관계여야 할까?",
    ],
    answers: [
      "① 흑 칸 13개, 백 칸 12개입니다.",
      "② 이웃한 칸으로 이동할 때마다 색은 흑→백→흑→백…처럼 반드시 번갈아 바뀝니다.",
      "③ 그런 경로는 그릴 수 없습니다.",
      "④ 흑 칸이 하나 더 많으므로 25칸을 모두 방문하면서 색을 번갈아 가려면 더 많은 색인 흑에서 시작해 흑에서 끝나야 합니다. 그런데 출발점으로 돌아오려면 마지막 칸과 출발 칸이 서로 이웃해야 하고, 이웃한 칸은 색이 달라야 합니다. 마지막 칸과 출발 칸이 모두 흑이므로 서로 이웃할 수 없어 회로가 불가능합니다.",
    ],
    commonMistake: [
      "‘직접 그려봤는데 안 된다’는 것만으로는 불가능의 증명이 되지 않습니다.",
      "체커보드의 색이 번갈아 나타나는 성질을 이용해 그런 경로가 존재할 수 없음을 설명해야 합니다.",
    ],
  },
];

function AnswerTableView({ table }: { table: AnswerTable }) {
  return (
    <div className="thinking-table-wrap">
      <table className="thinking-table">
        <thead><tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SvgGraph({
  nodes,
  edges,
  blocked,
}: {
  nodes: { id: string; x: number; y: number; label?: string }[];
  edges: [string, string][];
  blocked?: [string, string];
}) {
  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));
  return (
    <svg className="graph-svg" viewBox="0 0 360 230" role="img" aria-label="문제의 점과 선 그래프">
      {edges.map(([from, to]) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        const isBlocked =
          blocked &&
          ((blocked[0] === from && blocked[1] === to) || (blocked[0] === to && blocked[1] === from));
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className={isBlocked ? "graph-edge blocked" : "graph-edge"}
          />
        );
      })}
      {blocked && (() => {
        const a = nodeMap[blocked[0]];
        const b = nodeMap[blocked[1]];
        const x = (a.x + b.x) / 2;
        const y = (a.y + b.y) / 2;
        return <text x={x} y={y + 6} className="graph-x">×</text>;
      })()}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r="8" className="graph-node" />
          {node.label && <text x={node.x + 12} y={node.y - 10} className="graph-label">{node.label}</text>}
        </g>
      ))}
    </svg>
  );
}

function GridGraph({ blocked = false }: { blocked?: boolean }) {
  const nodes = [
    { id: "00", x: 38, y: 32, label: "A" }, { id: "10", x: 98, y: 32 }, { id: "20", x: 158, y: 32 },
    { id: "01", x: 38, y: 86 }, { id: "11", x: 98, y: 86 }, { id: "21", x: 158, y: 86 },
    { id: "31", x: 218, y: 86, label: blocked ? undefined : "C" }, { id: "41", x: 278, y: 86 },
    { id: "02", x: 38, y: 140 }, { id: "12", x: 98, y: 140 }, { id: "22", x: 158, y: 140 },
    { id: "32", x: 218, y: 140 }, { id: "42", x: 278, y: 140 },
    { id: "03", x: 38, y: 194 }, { id: "13", x: 98, y: 194 }, { id: "23", x: 158, y: 194 },
    { id: "33", x: 218, y: 194 }, { id: "43", x: 278, y: 194, label: "B" },
  ];
  const edges: [string,string][] = [
    ["00","10"],["10","20"],
    ["01","11"],["11","21"],["21","31"],["31","41"],
    ["02","12"],["12","22"],["22","32"],["32","42"],
    ["03","13"],["13","23"],["23","33"],["33","43"],
    ["00","01"],["01","02"],["02","03"],
    ["10","11"],["11","12"],["12","13"],
    ["20","21"],["21","22"],["22","23"],
    ["31","32"],["32","33"],
    ["41","42"],["42","43"],
  ];
  if (blocked) {
    const smallNodes = nodes.filter((node) => !["31","41","32","42","33","43"].includes(node.id)).map((node) => ({
      ...node,
      label: node.id === "00" ? "A" : node.id === "23" ? "B" : undefined,
    }));
    const smallEdges = edges.filter(([a,b]) => smallNodes.some(n=>n.id===a) && smallNodes.some(n=>n.id===b));
    return <SvgGraph nodes={smallNodes} edges={smallEdges} blocked={["21","22"]} />;
  }
  return <SvgGraph nodes={nodes} edges={edges} />;
}

function ProblemVisual({ type }: { type: GraphProblem["visual"] }) {
  if (type === "grid") return <GridGraph />;
  if (type === "gridBlocked") {
    const nodes = Array.from({ length: 4 }, (_, row) =>
      Array.from({ length: 4 }, (_, col) => ({
        id: `${col}${row}`,
        x: 55 + col * 72,
        y: 30 + row * 55,
        label: col === 0 && row === 0 ? "A" : col === 3 && row === 3 ? "B" : undefined,
      })),
    ).flat();
    const edges: [string, string][] = [];
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 3; col += 1) edges.push([`${col}${row}`, `${col + 1}${row}`]);
    }
    for (let col = 0; col < 4; col += 1) {
      for (let row = 0; row < 3; row += 1) edges.push([`${col}${row}`, `${col}${row + 1}`]);
    }
    return <SvgGraph nodes={nodes} edges={edges} blocked={["21", "22"]} />;
  }

  if (type === "spaceship") {
    return <SvgGraph
      nodes={[
        { id:"A", x:55, y:65, label:"A" }, { id:"B", x:145, y:65, label:"B" },
        { id:"C", x:235, y:65, label:"C" }, { id:"D", x:145, y:155, label:"D" },
        { id:"O", x:285, y:155, label:"밖" },
      ]}
      edges={[["A","O"],["A","B"],["A","D"],["B","C"],["B","D"],["C","D"],["D","O"]]}
    />;
  }

  if (type === "flowers" || type === "flowersBlocked") {
    const edges: [string,string][] = [
      ["H","1"],["H","2"],["1","2"],["1","3"],["1","4"],["2","3"],["2","4"],["3","4"],["3","5"],["4","5"],
    ];
    return <SvgGraph
      nodes={[
        { id:"H", x:165, y:35, label:"벌집" },
        { id:"1", x:75, y:90, label:"꽃1" }, { id:"2", x:255, y:90, label:"꽃2" },
        { id:"3", x:70, y:165, label:"꽃3" }, { id:"4", x:260, y:165, label:"꽃4" },
        { id:"5", x:165, y:205, label:"꽃5" },
      ]}
      edges={edges}
      blocked={type === "flowersBlocked" ? ["1","2"] : undefined}
    />;
  }

  if (type === "islands") {
    return <SvgGraph
      nodes={[
        { id:"A", x:165, y:35, label:"A" },
        { id:"B", x:80, y:85, label:"B" }, { id:"C", x:250, y:85, label:"C" },
        { id:"D", x:80, y:155, label:"D" }, { id:"E", x:250, y:155, label:"E" },
        { id:"F", x:165, y:205, label:"F" },
      ]}
      edges={[["A","B"],["A","C"],["B","C"],["B","D"],["C","E"],["D","E"],["D","F"],["E","F"]]}
    />;
  }

  if (type === "poles") {
    return <SvgGraph
      nodes={[
        { id:"ga", x:75, y:65, label:"가" }, { id:"na", x:165, y:35, label:"나" },
        { id:"da", x:255, y:65, label:"다" }, { id:"ra", x:85, y:175, label:"라" },
        { id:"ma", x:245, y:175, label:"마" },
      ]}
      edges={[["ga","na"],["ga","ra"],["ga","ma"],["na","da"],["da","ra"],["da","ma"]]}
    />;
  }

  if (type === "complete") {
    return (
      <div className="complete-graphs">
        {[3,4,5].map((n) => {
          const radius=42;
          const cx=70, cy=70;
          const nodes=Array.from({length:n},(_,i)=>({
            id:String(i),
            x:cx+radius*Math.cos(-Math.PI/2 + i*2*Math.PI/n),
            y:cy+radius*Math.sin(-Math.PI/2 + i*2*Math.PI/n),
          }));
          const edges:[string,string][]=[];
          for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) edges.push([String(i),String(j)]);
          return (
            <div key={n} className="complete-graph-item">
              <SvgGraph nodes={nodes} edges={edges} />
              <strong>K{n}</strong>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="checker-board" aria-label="5×5 체커보드">
      {Array.from({length:25},(_,i)=>(
        <span key={i} className={(Math.floor(i/5)+i%5)%2===0 ? "dark" : "light"} />
      ))}
    </div>
  );
}

export default function ThinkingMathGraphPath() {
  return (
    <section className="thinking-page">
      <div className="thinking-topbar">
        <div>
          <span className="eyebrow">THINKING MATH · TOPIC 02</span>
          <h1>그래프 경로</h1>
          <p>복잡한 길을, 점과 선만 남기면</p>
        </div>
        <Link className="secondary-button" href="/specialized/thinking-math">사고력 수학으로</Link>
      </div>

      <article className="thinking-reading">
        <span className="thinking-label">읽을거리</span>
        <h2>다리와 길을 점과 선으로 바꾸면 무엇이 보일까?</h2>
        <p>
          쾨니히스베르크의 일곱 다리를 모두 한 번씩만 건널 수 있는지 묻는 오래된 수수께끼에서,
          오일러는 복잡한 지도를 그대로 보지 않고 육지를 점으로, 다리를 선으로 바꾸어 연결 관계만 남겼습니다.
        </p>
        <p>
          이렇게 점과 선으로 나타낸 것을 그래프라고 합니다. 길 찾기 앱이 빠른 길을 찾는 문제도
          복잡한 지도를 점과 선의 연결 문제로 바꾸어 생각할 수 있습니다.
        </p>
        <div className="thinking-reading-question">
          왜 일곱 다리를 한 번씩만 건너 모두 지나는 것이 어려웠을까? 어느 점에서 막히는 걸까?
        </div>
      </article>

      <div className="thinking-layout">
        <nav className="thinking-nav">
          <strong>TOPIC 02 · 그래프 경로</strong>
          {problems.map((problem) => (
            <a key={problem.number} href={`#graph-problem-${problem.number}`}>
              <span>{String(problem.number).padStart(2, "0")}</span>
              문제 {problem.number}
            </a>
          ))}
        </nav>

        <div className="thinking-content">
          {problems.map((problem) => (
            <article className="thinking-problem" id={`graph-problem-${problem.number}`} key={problem.number}>
              <div className="thinking-problem-head">
                <span>문제 {problem.number}</span>
                <h2>{problem.statement}</h2>
              </div>

              <div className="graph-figure">
                <ProblemVisual type={problem.visual} />
              </div>

              <ol className="thinking-question-list">
                {problem.questions.map((question, index) => (
                  <li key={index}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{question}</p>
                  </li>
                ))}
              </ol>

              <section className="thinking-callout insight">
                <span>Insight</span>
                {problem.insight.map((item, index) => <p key={index}>{item}</p>)}
              </section>

              <section className="thinking-guide">
                <span>Question</span>
                <ul>
                  {problem.guideQuestions.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </section>

              <details className="thinking-answer">
                <summary>정답 및 해설 보기</summary>
                <div className="thinking-answer-body">
                  {problem.answers.map((answer, index) => <p key={index}>{answer}</p>)}
                  {problem.tables?.map((table, index) => <AnswerTableView key={index} table={table} />)}
                </div>
              </details>

              {problem.commonMistake && (
                <section className="thinking-callout mistake">
                  <span>Common Mistake</span>
                  {problem.commonMistake.map((item, index) => <p key={index}>{item}</p>)}
                </section>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
