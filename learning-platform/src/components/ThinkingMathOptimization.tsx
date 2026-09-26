import Link from "next/link";

type AnswerTable = {
  headers: string[];
  rows: string[][];
};

type OptimizationProblem = {
  number: number;
  statement: string;
  questions: string[];
  insight: string[];
  guideQuestions: string[];
  answers: string[];
  commonMistake?: string[];
  newTerms?: { term: string; meaning: string }[];
  tables?: AnswerTable[];
  visual:
    | "numbers"
    | "cards"
    | "rectangles"
    | "scores"
    | "triangles"
    | "shopping"
    | "partition"
    | "exam"
    | "stones"
    | "fairGame";
};

const problems: OptimizationProblem[] = [
  {
    number: 1,
    visual: "numbers",
    statement: "1부터 9까지의 수 중에서 서로 다른 세 수를 골라 곱하려고 합니다.",
    questions: [
      "곱이 가장 클 때와 가장 작을 때, 그 세 수와 곱을 구하시오.",
      "곱이 100에 가장 가까울 때, 그 세 수와 곱을 구하시오.",
    ],
    insight: [
      "최댓값과 최솟값처럼 극단을 찾을 때는 큰 수만 또는 작은 수만 보면 됩니다.",
      "100처럼 가운데 목표값에 가까운 값을 찾을 때는 목표보다 조금 큰 후보와 조금 작은 후보를 모두 만든 뒤 차이를 비교합니다.",
    ],
    guideQuestions: [
      "가장 큰 세 수는 무엇일까? 그 곱은?",
      "가장 작은 세 수는 무엇일까? 그 곱은?",
      "100보다 조금 큰 곱과 조금 작은 곱을 각각 만들어 비교하면 어느 쪽이 더 가까울까?",
    ],
    answers: [
      "① 최댓값: 7×8×9=504. 최솟값: 1×2×3=6.",
      "② 120, 105, 96, 96, 90처럼 100의 위아래 후보를 비교합니다. 96은 100과 차이가 4이고, 105는 차이가 5이므로 가장 가깝습니다. 답은 (2,6,8) 또는 (3,4,8), 곱 96입니다.",
    ],
    commonMistake: [
      "‘100 근처면 100을 넘는 후보는 안 봐도 된다’고 생각하지 않습니다.",
      "목표값의 위아래 후보를 모두 만들어 차이를 직접 비교합니다.",
    ],
  },
  {
    number: 2,
    visual: "cards",
    statement: "1, 3, 5, 6, 8 다섯 장의 숫자 카드를 모두 사용하여 (세 자리 수)×(두 자리 수)의 곱셈식을 만듭니다.",
    questions: [
      "곱이 가장 클 때와 가장 작을 때, 그 곱셈식과 곱을 구하시오.",
    ],
    insight: [
      "곱을 크게 만들려면 큰 수를 앞자리에 두는 것이 중요하지만, 어느 자리의 수가 상대 수 전체에 얼마나 크게 곱해지는지도 함께 봐야 합니다.",
      "정해진 자리 배치 순서를 외우기보다 후보 배치를 직접 계산해 비교하는 것이 안전합니다.",
    ],
    guideQuestions: [
      "곱이 크려면 8은 어디에 두는 것이 유리할까? 백의 자리와 십의 자리에 둔 경우를 모두 비교해 보자.",
      "가장 큰 수부터 기계적으로 채우지 말고, 자리별 곱셈 효과를 확인해 보자.",
      "곱을 작게 하려면 맨 앞자리에는 어떤 수를 두는 것이 좋을까?",
    ],
    answers: [
      "① 최댓값은 651×83=54,033입니다. 예를 들어 631×85=53,635보다 큽니다.",
      "② 최솟값은 368×15=5,520입니다. 158×36=5,688, 358×16=5,728, 168×35=5,880 등과 비교해 확인합니다.",
    ],
    commonMistake: [
      "가장 큰 수 8을 무조건 세 자리 수의 백의 자리에 두면 최대가 된다고 단정하지 않습니다.",
      "한 자리의 변화가 상대 수 전체에 곱해지는 효과까지 비교해야 합니다.",
    ],
    newTerms: [
      { term: "자리별 곱셈 효과", meaning: "앞자리에 놓인 수일수록 상대 수 전체에 더 큰 자리값으로 곱해지므로 결과에 미치는 영향이 커지는 현상" },
    ],
  },
  {
    number: 3,
    visual: "rectangles",
    statement: "한 변의 길이가 1cm인 정사각형 타일 12개를 모두 사용하여 빈틈없이 직사각형을 만듭니다.",
    questions: [
      "만들 수 있는 직사각형의 가로와 세로를 모두 구하시오.",
      "둘레가 가장 작은 직사각형은 어느 것인지 구하시오.",
      "둘레가 가장 큰 직사각형은 어느 것인지 구하시오.",
      "타일 수를 바꾸어도 둘레가 가장 작은 직사각형이 항상 정사각형에 가장 가까운 모양이 되는 이유를 설명하시오.",
    ],
    insight: [
      "넓이가 같은 직사각형은 가로×세로가 같지만 둘레는 달라질 수 있습니다.",
      "곱이 같은 두 수는 서로의 차이가 작을수록 합도 작아지므로, 정사각형에 가까운 직사각형일수록 둘레가 짧습니다.",
    ],
    guideQuestions: [
      "12를 두 자연수의 곱으로 나타내는 방법을 모두 적어보자.",
      "각 직사각형의 둘레를 직접 계산하면 어떤 차이가 보일까?",
      "36처럼 다른 넓이에서도 약수쌍이 가까워질수록 둘레가 줄어드는지 확인해 보자.",
    ],
    answers: [
      "① 1×12, 2×6, 3×4의 세 가지입니다.",
      "② 둘레: 1×12는 26cm, 2×6은 16cm, 3×4는 14cm. 가장 작은 것은 3×4입니다.",
      "③ 가장 큰 둘레는 1×12의 26cm입니다.",
      "④ 넓이가 같으면 가로×세로는 일정하고, 둘레는 2×(가로+세로)입니다. 두 변의 차이가 작아질수록 합이 작아져 둘레도 작아집니다.",
    ],
    commonMistake: [
      "넓이가 같으면 둘레도 같다고 생각하지 않습니다.",
      "길쭉한 직사각형일수록 같은 넓이에서도 둘레가 더 길어질 수 있습니다.",
    ],
  },
  {
    number: 4,
    visual: "scores",
    statement: "다섯 명의 학생이 수학 시험을 보았습니다. 평균은 80점이고, 다섯 점수는 서로 다른 100점 이하의 자연수입니다.",
    questions: [
      "가장 높은 점수가 될 수 있는 최댓값과 최솟값을 구하시오.",
    ],
    insight: [
      "평균 80점이므로 다섯 점수의 합은 400점입니다.",
      "가장 높은 점수를 크게 만들려면 나머지 네 점수를 반대쪽으로 작게 보내고, 가장 높은 점수를 작게 만들려면 다섯 점수를 서로 비슷하게 모아야 합니다.",
      "합이 정해져 있을 때 한 값을 극단으로 보내는 방법과, 값들을 고르게 만드는 방법은 서로 반대 방향의 최적화입니다.",
    ],
    guideQuestions: [
      "평균이 80점이면 다섯 점수의 합은 얼마일까?",
      "최고점을 가장 크게 하려면 나머지 네 점수는 어떻게 해야 할까?",
      "최고점을 가장 작게 하려면 다섯 점수가 모두 비슷해야 할까, 한 명만 튀어야 할까?",
    ],
    answers: [
      "① 최댓값은 100점입니다. 예를 들어 나머지 네 점수를 99, 98, 97, 6으로 하면 합이 400이 됩니다.",
      "② 최솟값은 82점입니다. 서로 다른 다섯 점수를 80 근처에 가장 촘촘히 모으면 78,79,80,81,82이고 합이 400입니다.",
    ],
    commonMistake: [
      "평균이 80점이라고 해서 모든 점수가 80 근처여야 한다고 생각하지 않습니다.",
      "평균 조건만 맞으면 한 사람은 100점처럼 극단값을 가질 수도 있습니다.",
    ],
  },
  {
    number: 5,
    visual: "triangles",
    statement: "길이가 37cm인 철사로 삼각형을 만들려고 합니다. 세 변은 자연수이고, 가장 긴 변의 길이는 15cm입니다.",
    questions: [
      "만들 수 있는 삼각형은 모두 몇 가지인지 구하시오.",
      "그 삼각형들을 비교하여 넓이가 가장 큰 삼각형의 세 변의 길이를 구하시오.",
    ],
    insight: [
      "세 변의 합이 37이고 가장 긴 변이 15이므로 나머지 두 변의 합은 22입니다.",
      "가능한 세 변을 빠짐없이 만든 뒤 비교하면, 세 변이 서로 비슷할수록 더 통통한 모양이 되고 넓이가 커집니다.",
    ],
    guideQuestions: [
      "가장 긴 변이 15라면 나머지 두 변의 합은 얼마일까?",
      "두 변이 모두 15 이하인 자연수라는 조건을 만족하는 짝을 모두 적어보자.",
      "그중 길쭉한 모양과 통통한 모양을 직접 비교하면 어느 쪽의 넓이가 더 커 보일까?",
    ],
    answers: [
      "① 가능한 삼각형은 (7,15,15), (8,14,15), (9,13,15), (10,12,15), (11,11,15)의 5가지입니다.",
      "② 다섯 모양을 비교하면 가장 통통한 (11,11,15)의 넓이가 가장 큽니다.",
    ],
    commonMistake: [
      "가장 긴 변이 15라고 해서 길쭉한 삼각형의 넓이가 가장 크다고 생각하지 않습니다.",
      "직접 그려 넓이를 비교하면 세 변이 비슷한 모양일수록 넓이가 커짐을 볼 수 있습니다.",
    ],
    newTerms: [
      { term: "통통한 모양", meaning: "둘레가 같은 도형에서 변의 길이가 서로 비슷하여 정삼각형이나 정사각형에 가까운 모양. 이런 모양일수록 넓이가 커지는 경향이 있습니다." },
    ],
  },
  {
    number: 6,
    visual: "shopping",
    statement: "연필은 한 자루 300원, 지우개는 한 개 500원입니다. 5,000원으로 연필과 지우개를 합하여 정확히 12개 사려고 합니다.",
    questions: [
      "살 수 있는 모든 경우를 구하시오.",
      "거스름돈 없이 정확히 5,000원을 쓸 수 있는 방법을 구하시오.",
      "연필을 지우개보다 많이 사면서 비용이 4,000원 이상이 되는 방법을 모두 구하시오.",
    ],
    insight: [
      "연필과 지우개의 합은 항상 12개입니다.",
      "연필 하나를 줄이고 지우개 하나를 늘릴 때마다 비용은 200원씩 증가합니다.",
      "두 조건이 동시에 걸려 있는 문제는 표로 한 줄씩 정리하면 빠짐없이 비교할 수 있습니다.",
    ],
    guideQuestions: [
      "연필 11개, 지우개 1개부터 시작해 표를 한 줄씩 적어보자. 비용은 어떻게 변할까?",
      "연필을 하나 줄이고 지우개를 하나 더 사면 비용은 얼마씩 늘어날까?",
      "‘연필>지우개’와 ‘비용 4,000원 이상’을 동시에 만족하는 줄만 골라보자.",
    ],
    answers: [
      "① 5,000원 이하에서 가능한 경우는 (연필,지우개)=(11,1),(10,2),(9,3),(8,4),(7,5),(6,6),(5,7)의 7가지입니다.",
      "② 정확히 5,000원인 경우는 연필 5자루, 지우개 7개입니다.",
      "③ 연필이 더 많고 비용이 4,000원 이상인 경우는 (10,2),(9,3),(8,4),(7,5)의 4가지입니다.",
    ],
    commonMistake: [
      "조건을 한꺼번에 머릿속으로 처리하지 않습니다.",
      "먼저 가능한 경우를 표로 정리한 뒤 각 조건을 한 줄씩 적용하는 것이 안전합니다.",
    ],
    tables: [
      {
        headers: ["연필", "지우개", "비용"],
        rows: [
          ["11", "1", "3,800원"],
          ["10", "2", "4,000원"],
          ["9", "3", "4,200원"],
          ["8", "4", "4,400원"],
          ["7", "5", "4,600원"],
          ["6", "6", "4,800원"],
          ["5", "7", "5,000원"],
        ],
      },
    ],
  },
  {
    number: 7,
    visual: "partition",
    statement: "20을 한 개 이상의 자연수의 합으로 나타낸 뒤, 사용된 자연수를 모두 곱했을 때의 최댓값을 구합니다.",
    questions: [
      "곱이 가장 클 때, 그 값을 구하시오.",
      "왜 그렇게 쪼개는 것이 가장 유리한지 설명하시오.",
    ],
    insight: [
      "1은 곱에 도움을 주지 않으므로 쓰지 않는 것이 유리합니다.",
      "4 이상의 수는 더 작은 수로 쪼개면 곱이 커질 수 있습니다.",
      "2와 3 중에서는 같은 합 6을 만들 때 3+3의 곱 9가 2+2+2의 곱 8보다 크므로 3을 가능한 많이 쓰는 것이 효율적입니다.",
    ],
    guideQuestions: [
      "20을 둘로 쪼개며 19+1, 18+2, 10+10의 곱을 비교해 보자.",
      "5를 2+3으로 쪼개면 곱이 어떻게 변할까? 6을 3+3으로 쪼개면?",
      "2와 3 중 합이 같을 때 어느 쪽이 더 효율적인지 비교해 보자.",
    ],
    answers: [
      "① 20=3+3+3+3+3+3+2로 쪼갤 때 곱은 3⁶×2=729×2=1,458입니다.",
      "② 1은 곱을 키우지 못하고, 4 이상은 쪼개는 것이 유리합니다. 2와 3 가운데는 같은 합 6에서 3×3=9가 2×2×2=8보다 크므로 3을 가능한 많이 사용합니다.",
    ],
    commonMistake: [
      "무조건 잘게 쪼갤수록 곱이 커진다고 생각하지 않습니다.",
      "1만 많이 남기면 곱은 커지지 않습니다. 2와 3, 특히 3이 효율적인 단위입니다.",
    ],
    newTerms: [
      { term: "효율적인 쪼개기", meaning: "같은 합을 곱으로 바꿀 때 너무 작지도 너무 크지도 않은 단위로 나누는 것. 이 문제에서는 2와 3이 유리하고 그중 3이 가장 효율적입니다." },
    ],
  },
  {
    number: 8,
    visual: "exam",
    statement: "영재는 시험에서 4문제를 60분 안에 풀어야 합니다. 문제별 배점과 예상 풀이 시간이 다릅니다.",
    questions: [
      "60분 안에 풀 수 있는 문제의 조합을 모두 구하시오.",
      "점수 합계가 가장 높은 조합과 그 점수를 구하시오.",
      "시험 시간이 50분으로 줄어들면 답이 달라지는지, 달라진다면 어떻게 달라지는지 설명하시오.",
    ],
    insight: [
      "모든 문제를 다 풀 수 없을 때는 가능한 조합을 빠짐없이 만들고, 각 조합의 시간과 점수를 함께 비교해야 합니다.",
      "문제 수가 많다고 점수가 높은 것도 아니고, 배점이 높은 문제를 무조건 포함한다고 최적도 아닙니다.",
      "시간 제한이 바뀌면 최적의 조합도 함께 바뀔 수 있습니다.",
    ],
    guideQuestions: [
      "4문제를 모두 풀면 시간이 60분을 넘는가?",
      "60분 안에 들어오는 조합을 한 문제, 두 문제, 세 문제 순으로 모두 적어보자.",
      "가능한 조합 중 점수 합계가 가장 큰 것은 어느 조합일까?",
    ],
    answers: [
      "① 60분 안에 가능한 조합은 1, 2, 3, 4, 1+2, 1+3, 1+4, 2+3, 2+4, 1+2+3의 10가지입니다.",
      "② 가장 높은 점수는 2번+4번의 75점입니다.",
      "③ 시험 시간이 50분이면 2+4는 60분이라 제외됩니다. 가능한 조합 중 가장 높은 점수는 1번+4번의 60점입니다.",
    ],
    commonMistake: [
      "배점이 높은 4번을 무조건 포함해야 한다고 단정하지 않습니다.",
      "문제 수가 많은 조합이 항상 점수가 높은 것도 아닙니다. 제한 시간 안에서 조합 전체를 비교해야 합니다.",
    ],
    tables: [
      {
        headers: ["문제", "배점", "풀이 시간"],
        rows: [
          ["1번", "10점", "10분"],
          ["2번", "25점", "20분"],
          ["3번", "30점", "25분"],
          ["4번", "50점", "40분"],
        ],
      },
    ],
  },
  {
    number: 9,
    visual: "stones",
    statement: "바둑돌 15개를 놓고 A와 B가 번갈아 1개, 2개 또는 3개씩 가져갑니다. 마지막 바둑돌을 가져가는 사람이 집니다. A가 먼저 시작합니다.",
    questions: [
      "바둑돌이 5개 남았을 때 자기 차례가 된 사람은 어떻게 해도 반드시 지게 됨을 설명하시오.",
      "바둑돌이 6개, 7개, 8개 남았을 때 자기 차례인 사람이 이기려면 각각 몇 개를 가져가야 하는지 구하시오.",
      "A가 반드시 이기는 전략을 설명하고, 처음에 몇 개를 가져가야 하는지 구하시오.",
      "바둑돌이 15개가 아니라 N개일 때, 먼저 시작하는 사람이 반드시 지게 되는 N의 조건을 구하시오.",
    ],
    insight: [
      "핵심은 많이 가져가는 것이 아니라, 상대가 1·2·3 중 무엇을 가져가도 두 사람이 한 묶음에서 가져간 합을 4로 만들 수 있게 통제하는 것입니다.",
      "5개 남은 자리는 지는 자리이고, 9개·13개처럼 매번 4씩 차이 나는 자리도 같은 구조로 이어집니다.",
      "따라서 먼저 시작하는 사람이 지는 자리는 N을 4로 나눈 나머지가 1인 경우입니다.",
    ],
    guideQuestions: [
      "마지막 돌을 가져가면 지는 게임에서 1개 남았을 때 내 차례라면 어떻게 될까?",
      "상대가 1개, 2개, 3개를 가져갔을 때 나는 몇 개를 가져가야 둘의 합을 4로 만들 수 있을까?",
      "매 두 턴마다 4개씩 줄이고 마지막 1개를 상대에게 남기려면 처음에는 몇 개를 가져가야 할까?",
    ],
    answers: [
      "① 5개에서 1개를 가져가면 상대가 3개, 2개를 가져가면 상대가 2개, 3개를 가져가면 상대가 1개를 가져가 1개를 다시 내게 남길 수 있습니다. 마지막 1개를 내가 가져가게 되어 집니다.",
      "② 6개면 1개, 7개면 2개, 8개면 3개를 가져가 5개를 상대에게 남기면 됩니다.",
      "③ A는 처음 2개를 가져가 13개를 남깁니다. 이후 상대가 1개면 3개, 2개면 2개, 3개면 1개를 가져가 두 사람의 합을 항상 4로 만들면 마지막 1개를 상대에게 남길 수 있습니다.",
      "④ 먼저 시작하는 사람이 반드시 지는 경우는 N≡1 (mod 4), 즉 N을 4로 나눈 나머지가 1일 때입니다.",
    ],
    commonMistake: [
      "처음에 최대인 3개를 가져가는 것이 항상 좋은 전략은 아닙니다.",
      "이 게임은 마지막 돌을 가져가는 사람이 지므로, 마지막 1개를 상대에게 남기는 것이 목표입니다.",
    ],
    newTerms: [
      { term: "상대 행동과 상관없이 통제 가능한 양", meaning: "상대가 어떤 선택을 해도 내가 일정하게 유지하거나 만들 수 있는 값. 이 게임에서는 두 턴 동안 가져가는 돌의 합 4를 통제합니다." },
    ],
  },
  {
    number: 10,
    visual: "fairGame",
    statement: "상자 안에 빨간 공 4개, 파란 공 3개, 노란 공 1개가 있습니다. 참가비 1,000원을 내고 공 하나를 뽑아 경품과 교환합니다.",
    questions: [
      "이 게임이 참가자에게 손해 보는 게임인 이유를 수학적으로 설명하시오.",
      "공정한 게임을 만들려면 공의 개수나 경품 가치를 어떻게 바꾸면 되는지 한 가지 방법을 제시하시오.",
      "경품 가치는 그대로 두고 공의 개수만 바꾼 여러 게임의 표를 완성하고, 공정한 게임이 되려면 빨간 공·파란 공·노란 공의 개수 사이에 어떤 관계가 있는지 설명하시오.",
    ],
    insight: [
      "한 번 뽑을 때 평균적으로 받는 경품 가치를 구해 참가비와 비교하면 게임이 공정한지 판단할 수 있습니다.",
      "빨간 공은 참가비보다 500원 손해, 노란 공은 참가비보다 1,000원 이익, 파란 공은 참가비와 같아 손익이 0입니다.",
      "손해와 이익이 균형을 이루려면 빨간 공의 수가 노란 공의 수의 2배여야 하고, 파란 공의 개수는 균형에 영향을 주지 않습니다.",
    ],
    guideQuestions: [
      "공이 8개인데 한 번 뽑으면 평균적으로 받는 경품 가치는 얼마일까?",
      "빨간 공을 뽑았을 때 참가비와 비교해 손해는 얼마이고, 노란 공은 이익이 얼마일까?",
      "빨간 공 한 개의 손해와 노란 공 한 개의 이익을 맞추려면 개수 비율이 어떻게 되어야 할까?",
    ],
    answers: [
      "① 경품 총액은 4×500+3×1,000+1×2,000=7,000원이고 공은 8개이므로 평균 경품 가치는 875원입니다. 참가비 1,000원보다 125원 적어 평균적으로 손해입니다.",
      "② 예: 노란 공을 1개 더 넣으면 빨강4·파랑3·노랑2, 총 9개이고 경품 총액 9,000원이라 평균 1,000원이 됩니다. 또는 빨간 공 2개를 빼 빨강2·파랑3·노랑1, 총 6개·경품 총액 6,000원으로 만들 수도 있습니다.",
      "③ 표의 게임1~3은 공정하고 게임4는 손해입니다. 공정한 게임에서는 빨간 공:노란 공=2:1이고, 파란 공은 참가비와 같은 경품이라 개수가 균형에 영향을 주지 않습니다.",
    ],
    commonMistake: [
      "공 개수만 보고 당첨 확률이 높아 보인다고 공정하다고 판단하지 않습니다.",
      "각 경품의 가치를 곱한 평균값을 참가비와 비교해야 합니다.",
    ],
    newTerms: [
      { term: "평균 받는 값", meaning: "한 번 뽑을 때 받을 수 있는 경품들의 평균 가치. 모든 공의 경품 총합을 공 개수로 나누어 구합니다." },
    ],
    tables: [
      {
        headers: ["게임", "빨간 공", "파란 공", "노란 공", "공 합계", "경품 합계", "참가비 합계", "결과"],
        rows: [
          ["게임1", "2", "3", "1", "6", "6,000원", "6,000원", "공정"],
          ["게임2", "4", "3", "2", "9", "9,000원", "9,000원", "공정"],
          ["게임3", "6", "1", "3", "10", "10,000원", "10,000원", "공정"],
          ["게임4", "3", "5", "1", "9", "8,500원", "9,000원", "손해"],
        ],
      },
    ],
  },
];

function AnswerTableView({ table }: { table: AnswerTable }) {
  return (
    <div className="thinking-table-wrap">
      <table className="thinking-table">
        <thead><tr>{table.headers.map((header)=><th key={header}>{header}</th>)}</tr></thead>
        <tbody>{table.rows.map((row,rowIndex)=><tr key={rowIndex}>{row.map((cell,cellIndex)=><td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function NumbersVisual() {
  return <div className="optimization-number-row">{Array.from({length:9},(_,i)=><span key={i}>{i+1}</span>)}</div>;
}

function CardsVisual() {
  return <div className="optimization-card-row">{[1,3,5,6,8].map(n=><span key={n}>{n}</span>)}</div>;
}

function RectanglesVisual() {
  return (
    <div className="optimization-rectangles">
      {[[1,12],[2,6],[3,4]].map(([r,c])=>(
        <div key={`${r}-${c}`}>
          <div className="optimization-tile-grid" style={{gridTemplateColumns:`repeat(${c}, 16px)`}}>
            {Array.from({length:r*c},(_,i)=><i key={i}/>)}
          </div>
          <small>{r}×{c}</small>
        </div>
      ))}
    </div>
  );
}

function ScoresVisual() {
  return (
    <div className="optimization-scores">
      <strong>평균 80점</strong>
      <span>5명 합계 = 400점</span>
      <div>{[78,79,80,81,82].map(n=><b key={n}>{n}</b>)}</div>
    </div>
  );
}

function TrianglesVisual() {
  const labels=["7,15,15","8,14,15","9,13,15","10,12,15","11,11,15"];
  return <div className="optimization-triangles">{labels.map((s,i)=><div key={s} className={i===4?"best":""}><span>△</span><small>{s}</small></div>)}</div>;
}

function ShoppingVisual() {
  return (
    <div className="optimization-shopping">
      <div><strong>연필</strong><b>300원</b></div>
      <div><strong>지우개</strong><b>500원</b></div>
      <span>합계 12개 · 예산 5,000원</span>
    </div>
  );
}

function PartitionVisual() {
  return (
    <div className="optimization-partition">
      <strong>20</strong><span>=</span>
      {[3,3,3,3,3,3,2].map((n,i)=><b key={i}>{n}</b>)}
      <em>곱 1,458</em>
    </div>
  );
}

function ExamVisual() {
  return (
    <div className="optimization-exam-grid">
      {[["1번","10점","10분"],["2번","25점","20분"],["3번","30점","25분"],["4번","50점","40분"]].map(row=>(
        <div key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><small>{row[2]}</small></div>
      ))}
    </div>
  );
}

function StonesVisual() {
  return <div className="optimization-stones">{Array.from({length:15},(_,i)=><i key={i}/>)}</div>;
}

function FairGameVisual() {
  return (
    <div className="optimization-fair-game">
      <div className="balls red">{Array.from({length:4},(_,i)=><i key={i}/>)}</div>
      <div className="balls blue">{Array.from({length:3},(_,i)=><i key={i}/>)}</div>
      <div className="balls yellow"><i/></div>
      <div className="prizes"><span>빨강 500원</span><span>파랑 1,000원</span><span>노랑 2,000원</span></div>
    </div>
  );
}

function ProblemVisual({ type }: { type: OptimizationProblem["visual"] }) {
  if(type==="numbers") return <NumbersVisual/>;
  if(type==="cards") return <CardsVisual/>;
  if(type==="rectangles") return <RectanglesVisual/>;
  if(type==="scores") return <ScoresVisual/>;
  if(type==="triangles") return <TrianglesVisual/>;
  if(type==="shopping") return <ShoppingVisual/>;
  if(type==="partition") return <PartitionVisual/>;
  if(type==="exam") return <ExamVisual/>;
  if(type==="stones") return <StonesVisual/>;
  return <FairGameVisual/>;
}

export default function ThinkingMathOptimization() {
  return (
    <section className="thinking-page">
      <div className="thinking-topbar">
        <div>
          <span className="eyebrow">THINKING MATH · TOPIC 05</span>
          <h1>최적화</h1>
          <p>가장 큰 것만 고르면 정말 1등일까?</p>
        </div>
        <Link className="secondary-button" href="/specialized/thinking-math">사고력 수학으로</Link>
      </div>

      <article className="thinking-reading">
        <span className="thinking-label">읽을거리</span>
        <h2>정해진 조건 안에서 가장 좋은 선택은 무엇일까?</h2>
        <p>
          학교 행사 게임 부스에서 주어진 시간은 60분이고, 미션마다 걸리는 시간과 점수가 다릅니다.
          점수가 가장 높은 미션 A는 55분에 100점이지만, 미션 B와 C를 함께 하면 60분에 120점을 얻을 수 있습니다.
        </p>
        <p>
          교재는 이렇게 여러 후보 중 조건을 만족하는 경우를 빠짐없이 만들고,
          점수·시간·비용·넓이·곱·공정성처럼 정해진 기준으로 비교해 가장 좋은 답을 찾는 과정을 최적화로 다룹니다.
        </p>
        <div className="thinking-reading-question">가장 커 보이는 것을 고르는 것과, 실제로 가장 좋은 선택은 언제 달라질까?</div>
      </article>

      <div className="thinking-layout">
        <nav className="thinking-nav">
          <strong>TOPIC 05 · 최적화</strong>
          {problems.map((problem)=>(
            <a key={problem.number} href={`#optimization-problem-${problem.number}`}>
              <span>{String(problem.number).padStart(2,"0")}</span>
              문제 {problem.number}
            </a>
          ))}
        </nav>

        <div className="thinking-content">
          {problems.map((problem)=>(
            <article className="thinking-problem" id={`optimization-problem-${problem.number}`} key={problem.number}>
              <div className="thinking-problem-head">
                <span>문제 {problem.number}</span>
                <h2>{problem.statement}</h2>
              </div>

              <div className="optimization-figure"><ProblemVisual type={problem.visual}/></div>

              <ol className="thinking-question-list">
                {problem.questions.map((question,index)=>(
                  <li key={index}><span>{String(index+1).padStart(2,"0")}</span><p>{question}</p></li>
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

              {problem.newTerms && (
                <section className="optimization-terms">
                  <span>New Term</span>
                  {problem.newTerms.map((item,index)=><p key={index}><strong>{item.term}</strong> · {item.meaning}</p>)}
                </section>
              )}

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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
