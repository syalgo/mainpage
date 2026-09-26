import Link from "next/link";

type AnswerTable = {
  headers: string[];
  rows: string[][];
};

type RuleProblem = {
  number: number;
  statement: string;
  questions: string[];
  insight: string[];
  guideQuestions: string[];
  answers: string[];
  commonMistake?: string[];
  tables?: AnswerTable[];
  extra?: { title: string; paragraphs: string[] };
  visual:
    | "matchsticks"
    | "triangular"
    | "marbles"
    | "numberGrid"
    | "diagonalGrid"
    | "splitSequence"
    | "fractions"
    | "lines"
    | "magicBox"
    | "frames";
};

const problems: RuleProblem[] = [
  {
    number: 1,
    visual: "matchsticks",
    statement: "성냥개비로 정사각형을 옆으로 이어 붙입니다.",
    questions: [
      "1단계, 2단계, 3단계의 성냥개비 수를 각각 쓰시오.",
      "1단계에서 2단계로 갈 때 새로 추가되는 성냥개비를 표시하고, 2→3, 3→4에서도 같은 방법으로 표시하시오.",
      "50단계의 성냥개비 수를 구하시오.",
      "성냥개비 200개로는 몇 단계까지 만들 수 있고, 남는 성냥개비는 몇 개인지 구하시오.",
    ],
    insight: [
      "1단계는 성냥개비 4개에서 시작하고, 다음 단계로 갈 때마다 새 성냥개비가 3개씩 늘어납니다.",
      "따라서 n단계의 성냥개비 수는 ‘시작값 + 증가량×증가 횟수’인 4+3(n-1)=3n+1로 나타낼 수 있습니다.",
      "일정하게 늘어나는 양을 먼저 찾으면 큰 단계도 그림을 모두 그리지 않고 계산할 수 있습니다.",
    ],
    guideQuestions: [
      "1단계에서 2단계로 갈 때 성냥개비가 어디에 새로 들어갔어?",
      "새로 들어간 개수가 2→3, 3→4에서도 계속 같을까?",
      "50단계까지 직접 그리지 않고도 구할 수 있을까?",
      "‘첫 항 + 증가량×횟수’ 꼴로 쓰면 어떻게 될까?",
    ],
    answers: [
      "① 1단계 4개, 2단계 7개, 3단계 10개",
      "② 두 번째 정사각형부터는 왼쪽 변이 앞 도형과 겹치므로 위·오른쪽·아래의 3개만 새로 추가됩니다.",
      "③ 50단계: 4+3×49=151개",
      "④ n단계가 3n+1개이므로 3n+1≤200. n≤66이어서 66단계까지 만들 수 있고, 3×66+1=199개를 쓰므로 1개가 남습니다.",
    ],
    commonMistake: [
      "50단계까지 정사각형을 일일이 그려 세려고 하지 않습니다.",
      "규칙을 찾은 뒤 일반화한 식을 사용하면 큰 단계도 빠르게 계산할 수 있습니다.",
    ],
  },
  {
    number: 2,
    visual: "triangular",
    statement: "점을 삼각형 모양으로 늘어놓습니다.",
    questions: [
      "1번째, 2번째, 3번째, 4번째 점의 수를 각각 쓰시오.",
      "1번째에서 2번째로 갈 때 새로 추가되는 점을 표시하고, 2→3, 3→4에서도 같은 방법으로 표시하시오.",
      "10번째 삼각형의 점의 수를 구하시오.",
      "100번째 삼각형의 점의 수를 구하시오.",
      "합이 169가 되는 연속하는 두 삼각형의 점의 수를 각각 구하시오.",
    ],
    insight: [
      "점의 수는 1, 3, 6, 10, …이고, 단계가 하나 늘 때마다 2, 3, 4, 5, …개씩 더해집니다.",
      "n번째 삼각형의 점의 수는 1+2+3+…+n입니다.",
      "연속한 두 삼각수의 합은 정사각형 수가 됩니다. n번째와 (n+1)번째 삼각수의 합은 (n+1)²입니다.",
    ],
    guideQuestions: [
      "1번째에서 2번째로 갈 때 점이 몇 개 늘었어? 2→3, 3→4에서는?",
      "한 단계 갈 때마다 늘어나는 양도 규칙적으로 변하고 있나?",
      "100번째까지 점을 직접 그리지 않고 합으로 나타낼 수 있을까?",
      "연속한 두 삼각형을 붙이면 어떤 모양이 만들어질까?",
    ],
    answers: [
      "① 1, 3, 6, 10개",
      "② 새로 늘어나는 점은 차례로 2, 3, 4개입니다.",
      "③ 1+2+…+10=55개",
      "④ 1+2+…+100=100×101÷2=5050개",
      "⑤ 169=13²이고, 12번째 삼각수와 13번째 삼각수의 합이 13²입니다. 12번째는 78개, 13번째는 91개입니다.",
    ],
    commonMistake: [
      "100번째까지 직접 그리거나 1부터 100까지 하나씩 더하지 않습니다.",
      "169를 처음부터 식으로 복잡하게 풀기보다, 연속한 두 삼각수의 합이 제곱수라는 규칙을 이용합니다.",
    ],
  },
  {
    number: 3,
    visual: "marbles",
    statement: "흰 바둑돌과 검은 바둑돌을 규칙에 따라 마름모 모양으로 배열합니다.",
    questions: [
      "1번째부터 4번째까지 흰 바둑돌의 수와 검은 바둑돌의 수를 각각 세어 표에 쓰시오.",
      "1번째에서 2번째로 갈 때 흰 바둑돌을 어디에 새로 넣는지 표시하고, 2→3, 3→4도 같은 방법으로 표시하시오.",
      "②에서 새로 넣는 흰 바둑돌의 수를 1→2, 2→3, 3→4 순서대로 쓰시오.",
      "n번째 마름모의 흰 바둑돌 수와 검은 바둑돌 수를 구하시오.",
      "흰 바둑돌이 처음으로 200개를 넘는 것은 몇 번째인지 구하시오.",
      "n번째 마름모의 흰 바둑돌과 검은 바둑돌의 합이 처음으로 500개를 넘는 것은 몇 번째인지 구하시오.",
    ],
    insight: [
      "흰 바둑돌은 1, 4, 9, 16, …으로 n², 검은 바둑돌은 0, 1, 4, 9, …으로 (n-1)²의 규칙을 가집니다.",
      "복잡해 보이는 전체 모양도 흰색과 검은색을 따로 떼어 보면 각각 단순한 제곱수 규칙이 됩니다.",
      "따로 떼어 보는 것이 다음 문제에서도 반복되는 중요한 관찰 방법입니다.",
    ],
    guideQuestions: [
      "흰 바둑돌과 검은 바둑돌을 섞어 보지 말고 따로 보면 어떤 수열이 보일까?",
      "흰 바둑돌은 한 단계마다 몇 개씩 늘어날까?",
      "검은 바둑돌도 같은 방식으로 늘어나는지 살펴볼까?",
      "n번째에서 흰 돌과 검은 돌을 각각 식으로 나타내면 어떻게 될까?",
    ],
    answers: [
      "① 1번째: 흰 1, 검 0 / 2번째: 흰 4, 검 1 / 3번째: 흰 9, 검 4 / 4번째: 흰 16, 검 9",
      "② 가장자리에 새 흰 돌을 한 줄씩 덧붙입니다.",
      "③ 흰 바둑돌이 늘어나는 수는 3, 5, 7개입니다.",
      "④ n번째 흰 바둑돌은 n²개, 검은 바둑돌은 (n-1)²개입니다.",
      "⑤ n²>200인 가장 작은 n은 15이므로 15번째입니다.",
      "⑥ n²+(n-1)²>500. n=16이면 481로 부족하고 n=17이면 545이므로 17번째입니다.",
    ],
    commonMistake: [
      "흰 돌과 검은 돌을 합쳐서 생기는 차이만 보고 일반화하지 않습니다.",
      "두 색을 분리해 보면 각각 제곱수라는 더 단순한 규칙이 드러납니다.",
    ],
    tables: [
      {
        headers: ["단계", "흰 바둑돌", "검은 바둑돌", "전체"],
        rows: [
          ["1", "1", "0", "1"],
          ["2", "4", "1", "5"],
          ["3", "9", "4", "13"],
          ["4", "16", "9", "25"],
        ],
      },
    ],
  },
  {
    number: 4,
    visual: "numberGrid",
    statement: "자연수를 격자에 가로로 5개씩 차례로 써 내려갑니다.",
    questions: [
      "1열, 2열, 3열에 들어 있는 수들을 각각 쓰고, 각 열의 수에 어떤 규칙이 보이는지 설명하시오.",
      "7행에 들어가는 수들을 모두 구하시오.",
      "7행에 있는 수들의 합을 구하시오.",
      "수 100은 몇 행 몇 열에 있는지 구하시오.",
    ],
    insight: [
      "한 행에 5개씩 들어가므로 같은 열의 수는 5씩 커집니다.",
      "행의 시작값과 끝값을 찾으면 행 전체의 합도 빠르게 구할 수 있습니다.",
      "어떤 수의 위치는 5로 나눈 몫과 나머지를 이용해 행과 열로 바꿔 생각할 수 있습니다.",
    ],
    guideQuestions: [
      "1열 첫 수, 2열 첫 수, 3열 첫 수 사이의 차이는 얼마야?",
      "같은 열에서 아래로 한 칸 내려갈 때 수가 얼마씩 커질까?",
      "7행의 첫 수를 알면 나머지 네 수도 바로 찾을 수 있을까?",
      "100을 5로 나눴을 때 나머지가 0인 것은 열을 어떻게 판단해야 할까?",
    ],
    answers: [
      "① 1열: 1, 6, 11, … / 2열: 2, 7, 12, … / 3열: 3, 8, 13, …으로 각 열은 5씩 증가합니다.",
      "② 7행은 31, 32, 33, 34, 35입니다.",
      "③ (31+35)×5÷2=165, 또는 가운데 수 33×5=165입니다.",
      "④ 100÷5=20, 나머지 0이므로 20행 5열입니다.",
    ],
    commonMistake: [
      "100÷5의 결과만 보고 행만 찾고 열을 빼뜨리지 않습니다.",
      "나머지가 0이면 그 행의 마지막 열인 5열입니다.",
    ],
  },
  {
    number: 5,
    visual: "diagonalGrid",
    statement: "자연수를 대각선 단위로 묶어 격자에 채워 나갑니다.",
    questions: [
      "1, 2, 3, 4, 5, 6이 격자 어느 자리에 있는지 찾아 화살표로 이으시오.",
      "1부터 100까지의 수가 어떤 방식으로 묶여 있는지 설명하거나 표로 나타내시오.",
      "격자를 더 크게 그려 나갈 때 8행 1열에 들어가는 수를 구하시오.",
      "수 50은 몇 행 몇 열에 있는지 구하시오.",
    ],
    insight: [
      "1번째 묶음에는 1개, 2번째에는 2개, 3번째에는 3개처럼 묶음의 크기가 하나씩 늘어납니다.",
      "각 묶음의 마지막 수는 삼각수 1, 3, 6, 10, 15, …이 됩니다.",
      "복잡하게 섞여 있는 수도 대각선 묶음으로 잘라 보면 규칙이 보입니다.",
    ],
    guideQuestions: [
      "1, 2, 3, 4가 격자에서 어떤 모양으로 이어져 있지?",
      "한 묶음 안에 들어 있는 수의 개수가 묶음 번호와 어떤 관계일까?",
      "8행 1열은 몇 번째 묶음의 마지막 자리일까?",
      "50은 어느 묶음에 들어 있고 그 묶음의 몇 번째 자리일까?",
    ],
    answers: [
      "① 묶음은 1 / 2,3 / 4,5,6 / 7,8,9,10 / …처럼 대각선으로 이어집니다.",
      "② n번째 묶음에는 n개의 수가 들어갑니다.",
      "③ 8행 1열은 8번째 묶음의 마지막 자리이므로 1+2+…+8=36입니다.",
      "④ 9번째 묶음의 마지막 수가 45이므로 50은 10번째 묶음의 5번째 자리입니다. 10번째 묶음의 자리는 (행, 열)=(m, 11-m)이므로 50은 5행 6열입니다.",
    ],
    commonMistake: [
      "50을 5나 다른 고정된 수로 나누어 위치를 찾으려 하지 않습니다.",
      "이 문제는 묶음의 크기가 1, 2, 3, …으로 계속 변하므로 먼저 어느 묶음에 속하는지 찾아야 합니다.",
    ],
  },
  {
    number: 6,
    visual: "splitSequence",
    statement: "수열 2, 3, 4, 6, 6, 9, 8, 12, 10, 15, …의 규칙을 찾습니다.",
    questions: [
      "이 수열의 다음 두 수를 적으시오.",
      "1번째, 3번째, 5번째, … 수만 따로 모아 표에 적고, 2번째, 4번째, 6번째, … 수만 따로 모아 표에 적으시오. 각 표에서 어떤 규칙이 보이는지 설명하시오.",
      "50번째 수와 51번째 수를 각각 구하시오.",
      "처음으로 100보다 큰 수가 나오는 것은 몇 번째인지 구하시오.",
    ],
    insight: [
      "한 줄로 봤을 때 차이 규칙이 일정하지 않다면, 위치를 홀수 번째와 짝수 번째처럼 나누어 볼 수 있습니다.",
      "홀수 번째 수는 2,4,6,8,…으로 2n, 짝수 번째 수는 3,6,9,12,…으로 3n의 규칙을 가집니다.",
      "한 줄에서 찾기 어려운 규칙이 두 줄로 나누면 단순해질 수 있습니다.",
    ],
    guideQuestions: [
      "연속한 수의 차이만 봐서는 규칙이 잘 보이지 않지?",
      "1,3,5,…번째만 따로 쓰면 어떤 수열이 되나?",
      "2,4,6,…번째만 따로 쓰면 어떤 수열이 되나?",
      "50번째는 홀수 번째 묶음일까, 짝수 번째 묶음일까?",
    ],
    answers: [
      "① 11번째 수는 12, 12번째 수는 18입니다.",
      "② 홀수 번째: 2,4,6,8,10,12,… → n번째 값 2n / 짝수 번째: 3,6,9,12,15,18,… → n번째 값 3n",
      "③ 50번째는 짝수 번째 묶음의 25번째이므로 3×25=75. 51번째는 홀수 번째 묶음의 26번째이므로 2×26=52입니다.",
      "④ 짝수 번째 값에서 3n>100인 가장 작은 n은 34이므로 전체 순서 68번째에서 값 102가 처음으로 100을 넘습니다.",
    ],
    commonMistake: [
      "처음부터 인접한 수의 차이만 계속 계산하다가 규칙이 없다고 판단하지 않습니다.",
      "자리 번호를 홀수·짝수로 나누어 보면 서로 다른 두 규칙이 숨어 있는 것을 볼 수 있습니다.",
    ],
  },
  {
    number: 7,
    visual: "fractions",
    statement: "분수를 1/1, 2/1, 1/2, 3/1, 2/2, 1/3, …과 같은 묶음 규칙으로 나열합니다.",
    questions: [
      "이 수열의 1번째부터 10번째 분수까지 직접 적으시오.",
      "5번째 묶음에 들어 있는 분수를 모두 적으시오.",
      "20번째 분수를 구하시오.",
      "5/3은 몇 번째 분수인지 구하시오.",
    ],
    insight: [
      "같은 묶음 안의 분수들은 ‘분자+분모’가 일정합니다.",
      "n번째 묶음에는 n개의 분수가 있고, 분자와 분모의 합은 n+1입니다.",
      "먼저 어느 묶음인지 찾고, 그 묶음 안에서 몇 번째인지 찾으면 큰 순서도 빠르게 구할 수 있습니다.",
    ],
    guideQuestions: [
      "분수가 어떻게 묶여 있어? 1번째 묶음, 2번째 묶음, 3번째 묶음에 각각 몇 개가 들어가?",
      "같은 묶음 안에서 분자+분모의 값은 일정할까?",
      "20번째가 어느 묶음인지 먼저 찾을 수 있을까?",
      "5/3은 분자와 분모를 더하면 몇이 되고, 그러면 몇 번째 묶음일까?",
    ],
    answers: [
      "① 1/1, 2/1, 1/2, 3/1, 2/2, 1/3, 4/1, 3/2, 2/3, 1/4",
      "② 5번째 묶음: 1/5, 2/4, 3/3, 4/2, 5/1",
      "③ 20=1+2+3+4+5+5이므로 6번째 묶음의 5번째 자리입니다. 분자는 5, 분모는 7-5=2이므로 5/2입니다.",
      "④ 5/3은 분자+분모=8이므로 7번째 묶음입니다. 앞의 6묶음까지 21개가 있고 7번째 묶음의 5번째 자리이므로 26번째입니다.",
    ],
    commonMistake: [
      "20번째까지 분수를 처음부터 하나씩 모두 적어 찾으려 하지 않습니다.",
      "묶음 단위로 먼저 위치를 찾고, 그 안에서 몇 번째인지 두 단계로 나누어 생각합니다.",
    ],
  },
  {
    number: 8,
    visual: "lines",
    statement: "평면 위에 직선을 하나씩 그어 나갑니다. 어떤 두 직선도 평행하지 않고, 세 직선이 한 점에서 만나지 않습니다.",
    questions: [
      "직선이 1개, 2개, 3개, 4개, 5개일 때 교점이 각각 몇 개인지 그림을 그려 직접 세시오.",
      "직선이 4개일 때 그림 후 5번째 직선을 추가해 그리시오. 새로 생긴 교점은 몇 개인지 구하시오.",
      "직선이 n개일 때 교점 수를 n으로 나타내시오.",
      "교점 수가 처음으로 100을 넘는 것은 직선이 몇 개일 때인지 구하시오.",
      "0, 1, 3, 6, 10, 15, …는 어디서 본 적 있는 수열인지, 앞의 문제와 비교하여 설명하시오.",
    ],
    insight: [
      "새 직선 하나가 추가될 때 기존 직선 각각과 한 번씩 만나므로 새 교점은 1, 2, 3, 4, …개씩 늘어납니다.",
      "따라서 n개의 직선이 만드는 교점은 0+1+2+…+(n-1)=n(n-1)/2입니다.",
      "문제2의 삼각수와 같은 규칙이고, 두 개를 고르는 문제에서도 같은 식이 나타납니다.",
    ],
    guideQuestions: [
      "직선이 1개에서 2개, 2개에서 3개로 늘어날 때 새 교점이 몇 개씩 늘었어?",
      "새 직선 1개가 추가되면 기존 직선 각각과 한 번씩 만나지?",
      "0,1,3,6,10이 어디서 본 수열인지 떠오르나?",
    ],
    answers: [
      "① 교점 수는 0, 1, 3, 6, 10개입니다.",
      "② 5번째 직선은 기존 4개의 직선과 한 번씩 만나므로 새 교점 4개가 생깁니다.",
      "③ 0+1+…+(n-1)=n(n-1)/2",
      "④ 14개 직선이면 91개, 15개 직선이면 105개이므로 처음 100을 넘는 것은 직선 15개일 때입니다.",
      "⑤ 0,1,3,6,10,15,…는 삼각수에서 첫 항 1을 뺀 형태이며, 직선 교점·삼각수·두 개 고르기는 모두 n(n-1)/2 또는 그와 연결된 식으로 나타납니다.",
    ],
    commonMistake: [
      "새 직선들이 서로 평행하거나 세 직선이 한 점에서 만나면 교점 수 규칙이 달라집니다.",
      "‘평행하지 않고, 세 직선이 한 점에서 만나지 않는다’는 조건이 있어야 이 일반화가 성립합니다.",
    ],
  },
  {
    number: 9,
    visual: "magicBox",
    statement: "마법상자에 문자열을 넣으면 A는 AB로, B는 A로 동시에 바뀝니다. 처음 A를 넣고 결과를 다시 상자에 반복해서 넣습니다.",
    questions: [
      "4번째 결과를 직접 적으시오.",
      "처음부터 5번째까지 A의 수, B의 수, 전체 문자 수를 표로 채우시오.",
      "n번째 결과의 A의 수는 (n-1)번째 전체 수와 무엇이 같고, n번째 B의 수는 (n-1)번째 A의 수와 무엇이 같은지 설명하시오.",
      "③을 이용하여 n번째 전체 문자 수와 앞의 두 전체 문자 수의 관계를 찾고, 왜 피보나치 수열이 나오는지 설명하시오.",
      "처음에 A 대신 B를 넣었다면 1, 2, 3번째 결과의 전체 수는 어떻게 되는지 구하시오.",
      "처음 A를 넣었을 때 전체 문자 수가 처음으로 100을 넘는 것은 몇 번째 결과인지 구하시오.",
    ],
    insight: [
      "A 하나는 다음 단계에서 A 하나와 B 하나를 만들고, B 하나는 A 하나를 만듭니다.",
      "따라서 다음 단계의 A 수는 직전 단계의 전체 수, 다음 단계의 B 수는 직전 단계의 A 수가 됩니다.",
      "전체 수는 ‘직전 전체 수 + 두 단계 전 전체 수’가 되어 피보나치형 점화식이 생깁니다.",
      "같은 점화식이어도 시작값이 달라지면 수열 전체가 달라질 수 있습니다.",
    ],
    guideQuestions: [
      "A 하나가 상자를 지나면 어떤 두 글자가 되지?",
      "B 하나는 어떤 글자 하나가 되지?",
      "다음 단계 A의 개수를 직전 단계의 A와 B 개수로 표현할 수 있을까?",
      "그 관계를 합치면 다음 전체 수는 앞의 전체 수 몇 개와 연결될까?",
    ],
    answers: [
      "① 4번째 결과는 ABAABABA입니다.",
      "② 전체 수는 처음 1, 1번째 2, 2번째 3, 3번째 5, 4번째 8, 5번째 13입니다. A의 수는 1,1,2,3,5,8 / B의 수는 0,1,1,2,3,5입니다.",
      "③ n번째 A 수 = (n-1)번째 전체 수, n번째 B 수 = (n-1)번째 A 수입니다.",
      "④ n번째 전체 수 = n번째 A 수+n번째 B 수 = (n-1)번째 전체 수+(n-2)번째 전체 수입니다. 그래서 1,2,3,5,8,13,…의 피보나치형 수열이 나옵니다.",
      "⑤ 처음 B라면 1번째 결과 A는 1글자, 2번째 AB는 2글자, 3번째 ABA는 3글자입니다.",
      "⑥ 9번째 전체 수는 89로 100을 넘지 못하고, 10번째는 144이므로 10번째 결과에서 처음 100을 넘습니다.",
    ],
    commonMistake: [
      "표의 위아래 한 줄씩만 읽으면서 숫자만 보고 패턴을 추측하지 않습니다.",
      "왜 그런 규칙이 생기는지 A→AB, B→A의 변화 자체에서 설명해야 합니다.",
      "시작값이 달라지면 같은 점화식이어도 다른 수열이 됩니다.",
    ],
    tables: [
      {
        headers: ["결과", "A의 수", "B의 수", "전체 수"],
        rows: [
          ["처음", "1", "0", "1"],
          ["1번째", "1", "1", "2"],
          ["2번째", "2", "1", "3"],
          ["3번째", "3", "2", "5"],
          ["4번째", "5", "3", "8"],
          ["5번째", "8", "5", "13"],
        ],
      },
    ],
  },
  {
    number: 10,
    visual: "frames",
    statement: "n×n 정사각형 격자에 1×1, 2×2, 3×3, … 크기의 정사각형 액자를 격자선에 맞춰 걸 수 있는 자리를 셉니다.",
    questions: [
      "3×3 격자 안에서 1×1, 2×2, 3×3 액자를 걸 수 있는 자리를 각 크기별로 세시오.",
      "4×4 격자에서도 같은 방법으로 크기별 액자 자리를 세시오.",
      "격자 변이 3×3에서 4×4로 한 칸 커질 때 액자 자리는 얼마나 늘었는지, 4×4에서 5×5로 커질 때는 얼마나 늘었는지 구하시오.",
      "n×n에서 (n+1)×(n+1)로 커질 때 각 크기의 액자 자리에 새로 생기는 부분을 관찰하고, 늘어나는 액자 자리 수를 식으로 나타내시오.",
      "④를 이용하여 10×10 격자 안에 걸 수 있는 전체 액자 자리의 수를 구하시오.",
      "점 삼각수, 직선 교점, 이 액자 자리 문제의 공통점은 무엇인지 설명하시오.",
    ],
    insight: [
      "3×3에서 전체 액자 자리는 9+4+1=14곳이고, 4×4에서는 16+9+4+1=30곳입니다.",
      "n×n 격자에서 k×k 액자 자리는 (n-k+1)²개입니다.",
      "격자가 한 칸 커질 때 늘어나는 전체 액자 수는 1+3+5+…+(2n+1)=(n+1)²입니다.",
      "따라서 n×n 격자의 전체 액자 자리는 1²+2²+…+n²처럼 제곱수의 합으로 나타납니다.",
    ],
    guideQuestions: [
      "3×3 격자에서 1×1 액자는 몇 군데? 2×2는? 3×3은?",
      "2×2 액자의 왼쪽 위 꼭짓점이 들어갈 수 있는 자리를 세면 더 쉽게 셀 수 있을까?",
      "격자가 한 칸 커질 때 오른쪽 한 줄과 아래 한 줄에서 새 자리가 얼마나 생길까?",
      "점 삼각수나 직선 교점 문제처럼 ‘부분별로 세고 모두 더하는’ 구조가 보이나?",
    ],
    answers: [
      "① 3×3: 1×1 액자 9곳, 2×2 액자 4곳, 3×3 액자 1곳 → 총 14곳",
      "② 4×4: 1×1 16곳, 2×2 9곳, 3×3 4곳, 4×4 1곳 → 총 30곳",
      "③ 3×3→4×4는 30-14=16곳 증가, 4×4→5×5는 55-30=25곳 증가합니다.",
      "④ n×n에서 (n+1)×(n+1)로 커질 때 늘어나는 전체 자리는 1+3+5+…+(2n+1)=(n+1)²입니다.",
      "⑤ 10×10 전체 액자 자리 수는 1²+2²+…+10²=385곳입니다.",
      "⑥ 점 삼각수는 1+2+…+n, 직선 교점은 0+1+…+(n-1), 액자 자리는 1²+2²+…+n²처럼 문제를 일정한 단위로 나누어 센 뒤 합산한다는 공통점이 있습니다.",
    ],
    commonMistake: [
      "1×1 액자 자리만 세고 끝내지 않습니다. 크기별로 나누어 모두 세어야 합니다.",
      "10×10에서 385를 구할 때도 각 크기의 액자 자리를 차례로 합산한 결과입니다.",
    ],
    extra: {
      title: "한 걸음 더",
      paragraphs: [
        "정답지에서는 1²+2²+…+n²의 합을 차근차근 더하는 방법에서 더 나아가, 같은 삼각형 모양 세 개를 재배열해 직육면체 모양으로 만드는 그림을 통해 제곱수의 합 공식을 소개합니다.",
        "그 결과 1²+2²+…+n² = n(n+1)(2n+1)/6으로 정리됩니다.",
      ],
    },
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

function MatchstickVisual() {
  return (
    <div className="rule-stage-row" aria-label="성냥개비 정사각형 단계">
      {[1,2,3,4].map((stage) => (
        <div key={stage} className="rule-stage">
          <div className="rule-match-row">
            {Array.from({length:stage},(_,i)=><span key={i} />)}
          </div>
          <small>{stage}단계 · {4+3*(stage-1)}개</small>
        </div>
      ))}
    </div>
  );
}

function DotTriangle({ n }: { n: number }) {
  return (
    <div className="dot-triangle">
      {Array.from({length:n},(_,row)=>(
        <div key={row} className="dot-row">
          {Array.from({length:row+1},(_,i)=><i key={i} />)}
        </div>
      ))}
    </div>
  );
}

function TriangularVisual() {
  return <div className="rule-stage-row">{[1,2,3,4].map(n=><div className="rule-stage" key={n}><DotTriangle n={n}/><small>{n}번째</small></div>)}</div>;
}

function MarblesVisual() {
  return (
    <div className="rule-marbles">
      {[1,2,3,4].map((n)=>(
        <div className="rule-marble-stage" key={n}>
          <div className="rule-square-dots" style={{gridTemplateColumns:`repeat(${n*2-1}, 9px)`}}>
            {Array.from({length:(n*2-1)*(n*2-1)},(_,index)=>{
              const size=n*2-1;
              const r=Math.floor(index/size), c=index%size;
              const center=n-1;
              const dist=Math.abs(r-center)+Math.abs(c-center);
              if(dist>center) return <b key={index} className="empty" />;
              const black=(r+c)%2===0 && n>1 && dist<center;
              return <b key={index} className={black?"black":"white"} />;
            })}
          </div>
          <small>{n}번째</small>
        </div>
      ))}
    </div>
  );
}

function NumberGridVisual() {
  return (
    <div className="rule-number-grid cols-5">
      {Array.from({length:20},(_,i)=><span key={i}>{i+1}</span>)}
    </div>
  );
}

function DiagonalGridVisual() {
  const values=[
    [1,2,4,7,11,16],
    [3,5,8,12,17,23],
    [6,9,13,18,24,31],
    [10,14,19,25,32,40],
    [15,20,26,33,41,50],
    [21,27,34,42,51,61],
  ];
  return (
    <div className="rule-number-grid cols-6">
      {values.flat().map((v,i)=><span key={i}>{v}</span>)}
    </div>
  );
}

function SplitSequenceVisual() {
  return (
    <div className="rule-sequence-box">
      <strong>원래 수열</strong>
      <p>2, 3, 4, 6, 6, 9, 8, 12, 10, 15, …</p>
      <div className="rule-split">
        <span>홀수 번째: 2, 4, 6, 8, 10, …</span>
        <span>짝수 번째: 3, 6, 9, 12, 15, …</span>
      </div>
    </div>
  );
}

function FractionsVisual() {
  const groups=[["1/1"],["2/1","1/2"],["3/1","2/2","1/3"],["4/1","3/2","2/3","1/4"]];
  return (
    <div className="rule-fraction-groups">
      {groups.map((group,i)=><div key={i}><strong>{i+1}번째 묶음</strong><p>{group.join("  ·  ")}</p></div>)}
    </div>
  );
}

function LinesVisual() {
  return (
    <div className="rule-lines-stage">
      {[1,2,3,4,5].map((n)=>(
        <div key={n} className="rule-lines-card">
          <svg viewBox="0 0 120 90" role="img" aria-label={`${n}개의 직선`}>
            {Array.from({length:n},(_,i)=>{
              const angle=-55+i*(110/Math.max(1,n-1));
              const rad=angle*Math.PI/180;
              const dx=Math.cos(rad)*50, dy=Math.sin(rad)*50;
              return <line key={i} x1={60-dx} y1={45-dy} x2={60+dx} y2={45+dy} />;
            })}
          </svg>
          <small>{n}개 직선</small>
        </div>
      ))}
    </div>
  );
}

function MagicBoxVisual() {
  return (
    <div className="rule-magic">
      <div><span>처음</span><strong>A</strong></div>
      <b>→</b><div><span>1번째</span><strong>AB</strong></div>
      <b>→</b><div><span>2번째</span><strong>ABA</strong></div>
      <b>→</b><div><span>3번째</span><strong>ABAAB</strong></div>
    </div>
  );
}

function FrameGrid({ n }: { n: number }) {
  return (
    <div className="rule-frame-grid" style={{gridTemplateColumns:`repeat(${n}, 22px)`}}>
      {Array.from({length:n*n},(_,i)=><span key={i}/>)}
    </div>
  );
}

function FramesVisual() {
  return <div className="rule-frame-row">{[1,2,3,4].map(n=><div key={n}><FrameGrid n={n}/><small>{n}×{n}</small></div>)}</div>;
}

function ProblemVisual({ type }: { type: RuleProblem["visual"] }) {
  if (type==="matchsticks") return <MatchstickVisual />;
  if (type==="triangular") return <TriangularVisual />;
  if (type==="marbles") return <MarblesVisual />;
  if (type==="numberGrid") return <NumberGridVisual />;
  if (type==="diagonalGrid") return <DiagonalGridVisual />;
  if (type==="splitSequence") return <SplitSequenceVisual />;
  if (type==="fractions") return <FractionsVisual />;
  if (type==="lines") return <LinesVisual />;
  if (type==="magicBox") return <MagicBoxVisual />;
  return <FramesVisual />;
}

export default function ThinkingMathRulesGeneralization() {
  return (
    <section className="thinking-page">
      <div className="thinking-topbar">
        <div>
          <span className="eyebrow">THINKING MATH · TOPIC 03</span>
          <h1>규칙과 일반화</h1>
          <p>100번째를 한 번에 아는 법</p>
        </div>
        <Link className="secondary-button" href="/specialized/thinking-math">사고력 수학으로</Link>
      </div>

      <article className="thinking-reading">
        <span className="thinking-label">읽을거리</span>
        <h2>100번째를 직접 만들지 않고도 알 수 있을까?</h2>
        <p>
          성냥개비 정사각형은 1단계 4개, 2단계 7개, 3단계 10개처럼 늘어납니다.
          교재는 여기서 100단계를 직접 그리는 대신 ‘어떻게 늘어나는지’의 규칙을 먼저 찾도록 합니다.
        </p>
        <p>
          달력의 날짜 배열, 지하철 노선의 반복, 1부터 100까지의 합을 빠르게 구한 가우스의 방법처럼
          반복되는 구조를 찾아 식으로 나타내면 멀리 있는 값도 한 번에 계산할 수 있습니다.
        </p>
        <div className="thinking-reading-question">
          100단계에는 성냥개비가 몇 개 필요할까? 일일이 그리지 않고 구할 수 있을까?
        </div>
      </article>

      <div className="thinking-layout">
        <nav className="thinking-nav">
          <strong>TOPIC 03 · 규칙과 일반화</strong>
          {problems.map((problem)=>(
            <a key={problem.number} href={`#rule-problem-${problem.number}`}>
              <span>{String(problem.number).padStart(2,"0")}</span>
              문제 {problem.number}
            </a>
          ))}
        </nav>

        <div className="thinking-content">
          {problems.map((problem)=>(
            <article className="thinking-problem" id={`rule-problem-${problem.number}`} key={problem.number}>
              <div className="thinking-problem-head">
                <span>문제 {problem.number}</span>
                <h2>{problem.statement}</h2>
              </div>

              <div className="rule-figure"><ProblemVisual type={problem.visual}/></div>

              <ol className="thinking-question-list">
                {problem.questions.map((question,index)=>(
                  <li key={index}>
                    <span>{String(index+1).padStart(2,"0")}</span>
                    <p>{question}</p>
                  </li>
                ))}
              </ol>

              <section className="thinking-callout insight">
                <span>Insight</span>
                {problem.insight.map((item,index)=><p key={index}>{item}</p>)}
              </section>

              <section className="thinking-guide">
                <span>Question</span>
                <ul>{problem.guideQuestions.map((item,index)=><li key={index}>{item}</li>)}</ul>
              </section>

              <details className="thinking-answer">
                <summary>정답 및 해설 보기</summary>
                <div className="thinking-answer-body">
                  {problem.answers.map((answer,index)=><p key={index}>{answer}</p>)}
                  {problem.tables?.map((table,index)=><AnswerTableView key={index} table={table}/>)}
                </div>
              </details>

              {problem.commonMistake && (
                <section className="thinking-callout mistake">
                  <span>Common Mistake</span>
                  {problem.commonMistake.map((item,index)=><p key={index}>{item}</p>)}
                </section>
              )}

              {problem.extra && (
                <section className="rule-extra">
                  <span>{problem.extra.title}</span>
                  {problem.extra.paragraphs.map((item,index)=><p key={index}>{item}</p>)}
                </section>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
