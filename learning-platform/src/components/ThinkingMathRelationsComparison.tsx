import Link from "next/link";

type AnswerTable = {
  headers: string[];
  rows: string[][];
};

type RelationProblem = {
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
    | "water"
    | "hourglass"
    | "speedGraph"
    | "work"
    | "clock"
    | "oppositeWalk"
    | "catchGraph"
    | "workMixed"
    | "slowClock"
    | "trainTunnel"
    | "roundTrip"
    | "faucets"
    | "bacteria";
};

const problems: RelationProblem[] = [
  {
    number: 1,
    visual: "water",
    statement: "가 물통에는 물이 30L, 나 물통에는 6L가 들어 있고, 가 물통에서 나 물통으로 4L씩 옮깁니다.",
    questions: [
      "가 물통과 나 물통의 물의 양이 같아지는 것은 몇 회째인지, 그때 각각 몇 L인지 구하시오.",
      "물을 옮기는 횟수가 늘어날수록 두 물통 사이에서 변하는 것과 변하지 않는 것을 각각 설명하시오.",
      "처음에 가 물통이 36L, 나 물통이 4L라면 몇 회째에 같아지는지 구하시오.",
    ],
    insight: [
      "한 번 옮길 때 가 물통은 4L 줄고 나 물통은 4L 늘어나므로, 두 물통의 차이는 한 번에 8L씩 줄어듭니다.",
      "두 물통에 들어 있는 물의 전체 양은 변하지 않습니다.",
      "변하는 값인 ‘차이’와 변하지 않는 값인 ‘합’을 나누어 보면 횟수를 빠르게 찾을 수 있습니다.",
    ],
    guideQuestions: [
      "처음 두 물통의 차이는 얼마일까?",
      "1회 옮긴 뒤 가는 몇 L 줄고 나는 몇 L 늘어날까?",
      "그렇다면 두 물통 사이의 차이는 한 번에 몇 L씩 줄어들까?",
      "처음 차이가 24L 또는 32L라면 몇 번 만에 0이 될까?",
    ],
    answers: [
      "① 처음 차이는 24L이고, 한 번에 8L씩 줄어드므로 3회째 같아집니다. 3회 후 가=30-4×3=18L, 나=6+4×3=18L입니다.",
      "② 변하는 것: 두 물통의 차이(1회마다 8L 감소). 변하지 않는 것: 두 물통에 든 물의 전체 양(항상 36L).",
      "③ 처음 차이는 32L이고 한 번에 8L씩 줄어드므로 4회째 같아집니다. 각각 20L입니다.",
    ],
    commonMistake: [
      "‘4L씩 옮긴다’고 해서 두 물통의 차이도 4L씩 줄어드는 것이 아닙니다.",
      "한쪽은 4L 줄고 다른 쪽은 4L 늘어나므로 차이는 8L씩 줄어듭니다.",
    ],
  },
  {
    number: 2,
    visual: "hourglass",
    statement: "3분짜리와 7분짜리 모래시계가 한 개씩 있습니다. 두 모래시계를 순서대로 사용해서 만들 수 있는 시간을 알아봅니다.",
    questions: [
      "20분 이하에서 만들 수 있는 시간을 모두 구하시오.",
      "만들 수 없는 시간 중 가장 큰 것은 몇 분인지 구하고, 그 이후의 모든 시간은 만들 수 있음을 설명하시오.",
    ],
    insight: [
      "만들 수 있는 시간은 3a+7b 꼴로 생각할 수 있습니다.",
      "7분 모래시계를 0번, 1번, 2번… 사용하는 경우로 나누어 적으면 빠짐없이 정리할 수 있습니다.",
      "12분, 13분, 14분을 만들 수 있고 여기에 3분씩 더하면 이후의 모든 자연수 시간을 만들 수 있습니다.",
    ],
    guideQuestions: [
      "3분짜리만 사용하면 어떤 시간을 만들 수 있을까?",
      "7분짜리를 1번 사용하고 나머지를 3분짜리로 채우면 어떤 시간이 나올까?",
      "12, 13, 14분을 만들 수 있다면 15, 16, 17분은 어떻게 만들 수 있을까?",
    ],
    answers: [
      "① 20분 이하에서 만들 수 있는 시간은 3, 6, 7, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20분입니다.",
      "② 만들 수 없는 가장 큰 시간은 11분입니다. 12, 13, 14분을 만든 뒤 각각에 3분짜리를 한 번씩 더 사용하면 15, 16, 17분이 되고, 같은 방식으로 이후의 모든 시간을 만들 수 있습니다.",
    ],
    commonMistake: [
      "1,2,4,5,8,11처럼 작은 수부터 보이는 것만 확인하고 끝내지 않습니다.",
      "연속한 세 수 12,13,14를 만들 수 있다는 사실을 이용하면 이후의 모든 수를 빠르게 설명할 수 있습니다.",
    ],
    tables: [
      {
        headers: ["7분 모래시계 사용", "가능한 시간(20분 이하)"],
        rows: [
          ["0번", "3, 6, 9, 12, 15, 18"],
          ["1번", "7, 10, 13, 16, 19"],
          ["2번", "14, 17, 20"],
        ],
      },
    ],
  },
  {
    number: 3,
    visual: "speedGraph",
    statement: "민준이는 분속 60m, 서아는 분속 40m로 같은 곳에서 동시에 출발합니다.",
    questions: [
      "가로축을 시간(분), 세로축을 거리(m)로 하여 두 사람의 이동을 그래프로 표현하시오.",
      "그래프에서 두 사람의 선은 어떻게 다른지 속력과 연결하여 설명하시오.",
      "5분 후 두 사람의 거리 차이는 몇 m인지 구하고, 이 차이는 어떻게 변하는지 설명하시오.",
      "같은 곳에서 동시에 출발한 두 사람의 5분 후 거리 차이가 100m였다면 두 사람의 속력 차이는 분속 몇 m인지 구하시오.",
    ],
    insight: [
      "거리-시간 그래프에서 선의 가파른 정도는 속력을 뜻합니다.",
      "같은 곳에서 출발했을 때 두 사람 사이의 거리 차이는 시간이 지날수록 ‘속력 차이×시간’만큼 커집니다.",
      "따라서 일정 시간 뒤의 거리 차이를 그 시간으로 나누면 속력 차이를 구할 수 있습니다.",
    ],
    guideQuestions: [
      "1분 뒤 민준이와 서아는 각각 얼마나 갔을까?",
      "두 그래프 중 어느 선이 더 가파를까?",
      "5분 뒤 거리 차이 100m는 1분마다 몇 m씩 벌어진 결과일까?",
    ],
    answers: [
      "① 민준이의 점: (0,0),(1,60),(2,120),(3,180),(4,240),(5,300). 서아의 점: (0,0),(1,40),(2,80),(3,120),(4,160),(5,200).",
      "② 민준이 선이 더 가파릅니다. 거리-시간 그래프에서 기울기가 클수록 속력이 큽니다.",
      "③ 5분 후 민준이 300m, 서아 200m이므로 차이는 100m입니다. 1분마다 20m씩 늘어납니다.",
      "④ 100÷5=20이므로 속력 차이는 분속 20m입니다.",
    ],
    commonMistake: [
      "5분 후 두 사람이 각각 300m, 200m 갔다고 해서 속력 차이를 300-200=100m/분이라고 하지 않습니다.",
      "거리 차이를 시간으로 나누어야 속력 차이가 됩니다.",
    ],
    newTerms: [
      { term: "가파른 정도", meaning: "가로로 한 칸 갈 때마다 세로로 얼마나 올라가거나 내려가는지의 변화" },
      { term: "기울기", meaning: "거리-시간 그래프에서 속력과 연결되는 선의 가파른 정도" },
    ],
  },
  {
    number: 4,
    visual: "work",
    statement: "어떤 일을 혼자 하면 민준이는 12일, 서아는 6일이 걸립니다.",
    questions: [
      "두 사람이 함께 하면 며칠 만에 끝나는지 구하시오.",
      "민준이가 먼저 3일 혼자 일하고, 나머지를 서아가 혼자 끝낸다면 서아는 며칠 걸리는지 구하시오.",
      "서아가 먼저 혼자 일하다가 민준이와 함께 끝냈더니 총 5일이 걸렸습니다. 서아가 혼자 일한 날은 며칠인지 구하시오.",
    ],
    insight: [
      "전체 일을 1이라고 두고 ‘하루 동안 하는 일의 양’을 비교합니다.",
      "민준이는 하루에 1/12, 서아는 하루에 1/6을 하므로 함께하면 하루에 1/4을 합니다.",
      "함께 일한 날과 혼자 일한 날을 구분해 각 기간의 일한 양을 더하면 전체 1이 되어야 합니다.",
    ],
    guideQuestions: [
      "민준이가 하루에 하는 일의 양은 얼마일까? 서아는?",
      "둘이 함께하면 하루에 하는 양은 어떻게 합칠까?",
      "먼저 혼자 한 일의 양을 전체 1에서 빼면 남은 일을 구할 수 있을까?",
    ],
    answers: [
      "① 1/12+1/6=1/4이므로 함께하면 4일 걸립니다.",
      "② 민준이가 3일 동안 한 일은 3×1/12=1/4. 남은 일은 3/4이고 서아는 하루에 1/6씩 하므로 (3/4)÷(1/6)=9/2=4.5일 걸립니다.",
      "③ 함께 일한 날을 x일이라 두면, 서아 혼자 일한 날은 5-x일입니다. x/4+(5-x)/6=1에서 x=2이므로 서아 혼자 일한 날은 3일입니다.",
    ],
    commonMistake: [
      "‘총 5일 걸렸다’고 해서 두 사람이 5일 내내 함께 일했다고 보지 않습니다.",
      "혼자 일한 기간과 함께 일한 기간의 일률이 다르므로 나누어 계산해야 합니다.",
    ],
    newTerms: [
      { term: "1일치분", meaning: "한 사람이 하루 동안 처리하는 전체 일의 비율" },
    ],
  },
  {
    number: 5,
    visual: "clock",
    statement: "시계의 시침과 분침이 만드는 각과 상대속도를 비교합니다.",
    questions: [
      "3시 이후 시침과 분침이 처음으로 겹치는 시간을 구하시오.",
      "3시 이후 시침과 분침이 처음으로 일직선(180°)이 되는 시간을 구하시오.",
      "분침이 한 바퀴 도는 데 72분이 걸리는 시계에서 3시 이후 시침과 분침이 처음으로 겹치는 실제 시간을 구하시오.",
    ],
    insight: [
      "정상 시계에서 분침은 1분에 6°, 시침은 1분에 0.5° 움직입니다.",
      "분침이 시침을 따라잡는 상대속도는 6-0.5=5.5°/분입니다.",
      "느린 시계에서는 분침의 속력이 달라지므로 상대속도도 다시 계산해야 합니다.",
    ],
    guideQuestions: [
      "3시에 분침과 시침 사이의 각은 몇 도일까?",
      "분침은 1분에 몇 도, 시침은 몇 도 움직일까?",
      "겹치려면 분침이 시침과의 각 차이를 몇 도 줄여야 할까?",
    ],
    answers: [
      "① 3시에는 90° 차이가 있고 상대속도는 5.5°/분이므로 90÷5.5=180/11=16 4/11분 후입니다. 따라서 3시 16 4/11분입니다.",
      "② 일직선이 되려면 분침이 시침보다 270° 앞서야 하므로 270÷5.5=540/11=49 1/11분 후, 3시 49 1/11분입니다.",
      "③ 분침 속도는 360÷72=5°/분, 시침은 0.5°/분이므로 상대속도는 4.5°/분. 90÷4.5=20분 후에 겹칩니다.",
    ],
    commonMistake: [
      "‘분침이 시침보다 빠르다’는 말만으로 해결하지 않고 속력 차이를 구합니다.",
      "느린 시계에서는 분침 속도가 6°/분이 아니므로 반드시 다시 계산해야 합니다.",
    ],
    newTerms: [
      { term: "따라잡는 속도(상대속도)", meaning: "두 대상이 같은 방향으로 움직일 때 빠른 쪽이 느린 쪽과의 간격을 줄이는 속도" },
    ],
  },
  {
    number: 6,
    visual: "oppositeWalk",
    statement: "민준이와 서아가 1000m 떨어진 지점에서 서로를 향해 동시에 출발합니다. 민준이는 분속 60m, 서아는 분속 40m이며 끝에 닿으면 되돌아 계속 걷습니다.",
    questions: [
      "두 사람이 출발 후 몇 분 만에 처음 만나고, 만나는 지점은 민준이 출발점에서 몇 m인지 구하시오.",
      "계속 걸을 때 두 번째로 만나는 것은 출발 후 몇 분 만인지 구하시오.",
      "두 번째 만나는 지점은 민준이 출발점에서 몇 m인지 구하시오.",
    ],
    insight: [
      "서로 마주 올 때 가까워지는 속도는 두 속력의 합입니다.",
      "첫 만남까지 두 사람이 합쳐 1000m를 걷고, 두 번째 만남까지는 합쳐 3000m를 걷습니다.",
      "만나는 횟수가 늘어날 때 두 사람이 합쳐 걷는 거리가 일정한 규칙으로 늘어나는 것을 이용할 수 있습니다.",
    ],
    guideQuestions: [
      "두 사람이 1분 동안 서로 가까워지는 거리는 몇 m일까?",
      "첫 번째 만남까지 둘이 합쳐 몇 m를 걷나?",
      "두 번째 만남까지는 출발점 왕복을 포함해 둘이 합쳐 몇 m를 걷게 될까?",
    ],
    answers: [
      "① 가까워지는 속도는 60+40=100m/분. 1000÷100=10분 후 처음 만나고, 민준이는 60×10=600m 지점까지 갑니다.",
      "② 두 번째 만남까지 두 사람이 합쳐 3000m를 걷게 되므로 3000÷100=30분 후입니다.",
      "③ 30분 동안 민준이는 60×30=1800m를 걷습니다. 1000m 끝점까지 갔다가 800m 되돌아왔으므로 민준이 출발점에서 200m 지점입니다.",
    ],
    commonMistake: [
      "두 번째 만남을 ‘첫 번째 만남 시간의 2배’라고 단순 계산하지 않습니다.",
      "두 번째 만남까지 두 사람이 합쳐 걸은 전체 거리를 기준으로 봅니다.",
    ],
  },
  {
    number: 7,
    visual: "catchGraph",
    statement: "민준이는 분속 60m로 걷고 있고, 서아는 민준이가 300m 앞서갔을 때 같은 방향으로 출발해 따라갑니다.",
    questions: [
      "민준이의 이동을 시간-거리 그래프로 나타내시오.",
      "서아가 출발 후 30분 안에 민준이를 따라잡으려면 분속이 최소 몇 m이어야 하는지 구하시오.",
      "서아의 속력이 ②에서 구한 것보다 느릴 때 두 사람의 거리는 어떻게 변하는지 그래프로 설명하시오.",
    ],
    insight: [
      "서아가 출발하는 순간 민준이는 이미 300m 앞에 있으므로 두 그래프의 시작점이 다릅니다.",
      "서아의 기울기가 민준이보다 커야 거리가 줄어들고, 같으면 평행해 차이가 유지되며, 작으면 차이가 더 커집니다.",
      "30분 안에 따라잡으려면 300m의 차이를 30분 동안 줄여야 하므로 속력 차이가 최소 10m/분이어야 합니다.",
    ],
    guideQuestions: [
      "서아가 출발할 때 민준이는 어디에 있을까?",
      "서아의 그래프가 민준이 그래프와 만나려면 기울기가 더 커야 할까?",
      "300m 차이를 30분 동안 없애려면 1분마다 몇 m씩 줄여야 할까?",
    ],
    answers: [
      "① 서아 출발 시각을 0분으로 두면 민준이의 그래프는 (0,300),(10,900),(20,1500),(30,2100)을 지나는 직선입니다.",
      "② 300÷30=10이므로 서아가 민준이보다 최소 분속 10m 빨라야 합니다. 민준이 60m/분이므로 서아는 최소 70m/분이어야 합니다.",
      "③ 60<서아 속력<70이면 거리는 줄지만 30분 안에는 만나지 못합니다. 서아가 60이면 두 선이 평행해 거리가 300m로 유지되고, 60보다 작으면 거리가 점점 벌어집니다.",
    ],
    commonMistake: [
      "서아가 ‘출발점에서 시작한다’고만 그리고 민준이도 같은 점에서 시작하는 것처럼 그리지 않습니다.",
      "이 문제에서 그래프의 시작점과 기울기를 모두 비교해야 합니다.",
    ],
  },
  {
    number: 8,
    visual: "workMixed",
    statement: "갑은 혼자 하면 15일, 을은 혼자 하면 10일 걸리는 일을 함께 또는 번갈아 처리합니다.",
    questions: [
      "갑이 먼저 혼자 일하다가 을과 함께 일했더니 총 9일이 걸렸습니다. 갑이 혼자 일한 날은 며칠인지 구하시오.",
      "갑과 을이 함께 일하다가 을이 그만두고 갑이 혼자 끝냈더니 총 8일이 걸렸습니다. 함께 일한 날은 며칠인지 구하시오.",
      "갑과 을이 함께 일한 날이 갑 혼자 일한 날보다 하루 적고, 그 뒤 일이 끝났습니다. 함께 일한 날과 갑 혼자 일한 날을 각각 구하시오.",
    ],
    insight: [
      "갑의 1일치분은 1/15, 을의 1일치분은 1/10, 함께하면 1/6입니다.",
      "모든 날을 ‘함께 일했다’고 가정한 뒤, 일부 날을 갑 혼자 일한 날로 바꾸었을 때 줄어드는 일의 양을 비교하면 빠르게 풀 수 있습니다.",
      "총 날짜가 주어지지 않은 경우에는 기간을 직접 변수로 두고 전체 일의 양이 1이 되도록 맞춥니다.",
    ],
    guideQuestions: [
      "둘이 함께 일하면 하루에 얼마를 할까?",
      "함께 일한 하루를 갑 혼자 일한 하루로 바꾸면 일의 양은 얼마나 줄어들까?",
      "전체 일을 1이라고 두고 각 기간의 일한 양을 더하면 어떤 식이 될까?",
    ],
    answers: [
      "① 9일을 모두 함께 일하면 9×1/6=3/2으로 1/2만큼 초과합니다. 함께 하루를 갑 혼자 하루로 바꾸면 1/6-1/15=1/10만큼 줄어드므로 5일을 바꾸어야 합니다. 갑 혼자 5일, 함께 4일입니다.",
      "② 8일을 모두 함께 일하면 8×1/6=4/3으로 1/3 초과. 하루를 갑 혼자로 바꿀 때 1/10씩 줄어드므로 10/3일을 갑 혼자로 바꿉니다. 함께 일한 날은 8-10/3=14/3=4 2/3일입니다.",
      "③ 함께 일한 날을 x일, 갑 혼자 일한 날을 x+1일이라 두면 x/6+(x+1)/15=1. x=4이므로 함께 4일, 갑 혼자 5일입니다.",
    ],
    commonMistake: [
      "분수 형태의 날짜가 나와도 이상하다고 생각하지 않습니다. 일률 문제에서는 하루의 일부만 함께 일한 상황도 가능합니다.",
      "모든 날을 같은 방식으로 일했다고 가정하지 말고 기간별 일률을 구분합니다.",
    ],
  },
  {
    number: 9,
    visual: "slowClock",
    statement: "분침이 한 바퀴 도는 데 72분이 걸리는 느린 시계가 있습니다. 시침은 정상적으로 움직입니다.",
    questions: [
      "3시 이후 시침과 분침이 처음으로 겹치는 시간을 구하고, 5번 문제의 정상 시계와 비교하시오.",
      "이 시계를 실제 오전 9시에 정확히 9시로 맞췄습니다. 정상 시계가 오후 3시를 가리킬 때 이 시계가 가리키는 시각을 구하시오.",
    ],
    insight: [
      "느린 시계의 분침은 1분에 360÷72=5° 움직입니다.",
      "정상 시계와 비교하면 분침의 속도만 달라지고 시침의 속도는 그대로이므로, 겹치는 시간도 달라집니다.",
      "이 시계의 분침은 실제 6분이 지날 때 정상 분침보다 1분만큼 뒤처집니다.",
    ],
    guideQuestions: [
      "느린 분침은 1분에 몇 도 움직일까?",
      "시침과의 상대속도는 몇 도/분일까?",
      "실제 6시간 동안 느린 분침은 정상 분침보다 얼마나 뒤처질까?",
    ],
    answers: [
      "① 상대속도는 5-0.5=4.5°/분. 3시의 90° 차이를 줄이는 데 90÷4.5=20분이므로 3시 20분에 겹칩니다. 정상 시계의 3시 16 4/11분보다 늦습니다.",
      "② 실제 6시간 동안 정상 분침은 360분을 표시하지만 느린 분침은 그보다 60분 늦습니다. 따라서 정상 시계가 오후 3시일 때 이 시계는 오후 2시를 가리킵니다.",
    ],
    commonMistake: [
      "느린 시계라서 ‘겹치는 시간도 같은 비율로 늦어진다’고 단순히 생각하지 않습니다.",
      "시침은 정상 속도이고 분침만 느리므로 두 바늘의 상대속도를 다시 계산해야 합니다.",
    ],
  },
  {
    number: 10,
    visual: "trainTunnel",
    statement: "길이 300m인 기차가 길이 1200m인 터널을 초속 25m로 달립니다.",
    questions: [
      "기차 앞부분이 터널 입구에 들어가는 순간부터 기차 뒷부분이 터널을 완전히 빠져나올 때까지 몇 초인지 구하시오.",
      "기차가 터널 안에 완전히 들어가 있는 시간은 몇 초인지 구하시오.",
      "반대 방향에서 길이 200m, 초속 20m인 기차가 달려옵니다. 두 기차가 완전히 지나치는 데 몇 초인지 구하시오.",
    ],
    insight: [
      "터널을 완전히 통과할 때 기차 앞부분이 이동하는 거리는 ‘터널 길이+기차 길이’입니다.",
      "기차 전체가 터널 안에 들어가 있는 동안 앞부분이 이동하는 거리는 ‘터널 길이-기차 길이’입니다.",
      "반대 방향 두 기차가 지나칠 때는 두 기차 길이의 합을 두 속력의 합으로 나눕니다.",
    ],
    guideQuestions: [
      "기차 뒤가 터널을 완전히 빠져나왔을 때 기차 앞은 터널 입구에서 얼마나 멀리 갔을까?",
      "기차가 완전히 터널 안에 있을 때 앞부분이 움직일 수 있는 거리는 왜 터널 길이보다 짧을까?",
      "마주 오는 두 기차는 1초에 서로 몇 m씩 가까워질까?",
    ],
    answers: [
      "① 이동거리=1200+300=1500m, 시간=1500÷25=60초입니다.",
      "② 완전히 안에 있는 동안 앞부분의 이동거리=1200-300=900m, 시간=900÷25=36초입니다.",
      "③ 두 기차 길이의 합은 300+200=500m, 가까워지는 속도는 25+20=45m/s이므로 500÷45=100/9초, 약 11.1초입니다.",
    ],
    commonMistake: [
      "‘기차가 1200m를 가면 터널을 통과한다’고 계산하지 않습니다.",
      "어디서부터 어디까지 기차의 어느 부분이 움직이는지를 정확히 정해야 합니다.",
    ],
  },
  {
    number: 11,
    visual: "roundTrip",
    statement: "집에서 학교까지 갈 때는 시속 60km, 올 때는 시속 40km로 이동했습니다. 집과 학교 사이 거리는 120km입니다.",
    questions: [
      "집에서 학교까지 갔다가 돌아오는 데 걸린 전체 시간을 구하시오.",
      "왕복 전체의 평균 속력을 구하시오.",
      "(60+40)÷2=50km/h가 평균 속력이 아닌 이유를 설명하시오.",
    ],
    insight: [
      "평균 속력은 속력 두 개를 단순히 평균내는 것이 아니라 ‘총 거리÷총 시간’으로 구합니다.",
      "같은 거리를 이동할 때 느린 구간에서 더 많은 시간을 보내므로 단순 산술평균과 다를 수 있습니다.",
    ],
    guideQuestions: [
      "갈 때 120km를 60km/h로 가면 몇 시간이 걸릴까?",
      "올 때는 몇 시간이 걸릴까?",
      "왕복 총 거리와 총 시간을 각각 구하면 평균 속력은 어떻게 나올까?",
    ],
    answers: [
      "① 갈 때 120÷60=2시간, 올 때 120÷40=3시간이므로 총 5시간입니다.",
      "② 왕복 거리는 240km이므로 평균 속력=240÷5=48km/h입니다.",
      "③ 두 속도로 같은 시간을 이동한 것이 아니라 같은 거리를 이동했습니다. 느린 40km/h 구간에서 더 오래 머물렀으므로 단순 평균 50km/h보다 실제 평균이 작아집니다.",
    ],
    commonMistake: [
      "속력 두 개를 더해서 2로 나누는 계산은 두 속력으로 같은 시간을 이동했을 때만 적용할 수 있습니다.",
      "평균 속력은 항상 총 거리÷총 시간으로 확인합니다.",
    ],
  },
  {
    number: 12,
    visual: "faucets",
    statement: "수조를 채우는 데 A 수도꼭지는 혼자 18분, B 수도꼭지는 혼자 6분이 걸립니다. A는 B보다 3배 느립니다.",
    questions: [
      "둘이 함께 틀면 몇 분 만에 수조를 채우는지 B 혼자 할 때와 비교하시오.",
      "A가 더 느려질수록 함께할 때의 효과가 어떻게 변하는지 A=12분일 때와 A=18분일 때를 비교하여 설명하시오.",
      "A가 B보다 k배 느리고 B 혼자 b분이 걸릴 때, 둘이 함께하면 몇 분 걸리는지 b와 k로 나타내시오.",
    ],
    insight: [
      "A가 18분, B가 6분이면 1분 동안 각각 1/18, 1/6을 채우므로 함께 1분에 2/9를 채웁니다.",
      "느린 수도꼭지가 더 느려질수록 빠른 수도꼭지에 추가로 주는 도움은 작아집니다.",
      "B가 b분, A가 kb분이면 함께 걸리는 시간은 kb/(k+1)분입니다.",
    ],
    guideQuestions: [
      "A와 B가 각각 1분에 수조의 몇 분의 몇을 채울까?",
      "A=12분일 때와 18분일 때 B=6분과 함께하면 시간을 얼마나 줄일 수 있을까?",
      "A가 B보다 k배 느리면 A의 1분치분을 b와 k로 어떻게 나타낼까?",
    ],
    answers: [
      "① 함께 1분치분은 1/18+1/6=2/9이므로 9/2=4분 30초 걸립니다. B 혼자 6분보다 1분 30초 단축됩니다.",
      "② A=12분, B=6분이면 함께 4분 걸려 B 혼자보다 2분 단축됩니다. A=18분이면 4분 30초로 1분 30초 단축됩니다. A가 더 느릴수록 함께하는 효과가 작아집니다.",
      "③ B의 1분치분은 1/b, A는 1/(kb). 함께는 (k+1)/(kb)이므로 걸리는 시간은 kb/(k+1)분입니다.",
    ],
    commonMistake: [
      "느려도 도움이 되니 무조건 절반씩 빨라진다고 생각하지 않습니다.",
      "느린 쪽의 능력이 작아질수록 전체 속력에 더해지는 양도 작아집니다.",
    ],
  },
  {
    number: 13,
    visual: "bacteria",
    statement: "박테리아 한 마리가 30분마다 두 마리로 늘어납니다. 처음 1마리로 시작합니다.",
    questions: [
      "1시간 후, 3시간 후 박테리아 수를 각각 구하시오.",
      "5시간 후 박테리아 수를 구하시오.",
      "박테리아가 1024마리가 되려면 몇 시간이 지나야 하는지 구하시오.",
    ],
    insight: [
      "30분마다 일정한 수를 더하는 것이 아니라 수가 2배씩 늘어납니다.",
      "1, 2, 4, 8, 16, …처럼 곱셈으로 변화하는 현상은 덧셈 규칙이 아니라 배수 규칙으로 봐야 합니다.",
      "1024=2¹⁰이므로 30분짜리 증가가 10번 일어나면 됩니다.",
    ],
    guideQuestions: [
      "30분 지나면 1마리가 몇 마리가 될까? 그 다음 30분이 지나면?",
      "1시간에는 30분이 몇 번 들어갈까?",
      "1024는 2를 몇 번 곱한 수일까?",
    ],
    answers: [
      "① 1시간은 30분이 2번 지나므로 1→2→4, 4마리입니다. 3시간은 6번 증가하므로 2⁶=64마리입니다.",
      "② 5시간은 30분이 10번 지나므로 2¹⁰=1024마리입니다.",
      "③ 1024=2¹⁰이므로 30분 증가가 10번 필요합니다. 30×10=300분=5시간입니다.",
    ],
    commonMistake: [
      "‘30분에 1마리 늘어난다’고 보고 시간을 곱하지 않습니다.",
      "늘어나는 양 자체가 계속 커지는 배수 변화입니다.",
    ],
    newTerms: [
      { term: "배가 시간", meaning: "일정 시간마다 양이 2배가 되는 현상에서 2배가 되는 데 걸리는 시간" },
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

function LineChart({
  lines,
  yMax=2200,
}: {
  lines: { label:string; start:number; speed:number; className:string }[];
  yMax?: number;
}) {
  const width=360, height=220, left=42, bottom=188, top=20, right=340;
  const maxT=30;
  const x=(t:number)=>left+(right-left)*t/maxT;
  const y=(d:number)=>bottom-(bottom-top)*Math.min(d,yMax)/yMax;
  return (
    <svg className="relation-chart" viewBox="0 0 360 220" role="img" aria-label="시간 거리 그래프">
      <line x1={left} y1={bottom} x2={right} y2={bottom} className="relation-axis"/>
      <line x1={left} y1={bottom} x2={left} y2={top} className="relation-axis"/>
      {[0,10,20,30].map(t=><g key={t}><line x1={x(t)} y1={bottom} x2={x(t)} y2={top} className="relation-grid"/><text x={x(t)} y={207} className="relation-tick">{t}</text></g>)}
      {lines.map((line)=>{
        const d0=line.start, d1=line.start+line.speed*maxT;
        return <g key={line.label}>
          <line x1={x(0)} y1={y(d0)} x2={x(maxT)} y2={y(d1)} className={`relation-line ${line.className}`}/>
          <text x={x(26)} y={y(line.start+line.speed*26)-6} className="relation-label">{line.label}</text>
        </g>;
      })}
      <text x={300} y={216} className="relation-axis-label">시간(분)</text>
      <text x={4} y={18} className="relation-axis-label">거리(m)</text>
    </svg>
  );
}

function WaterVisual() {
  return (
    <div className="relation-water">
      <div><strong>가</strong><span style={{height:"84%"}}/><b>30L</b></div>
      <div className="relation-transfer">4L씩 →</div>
      <div><strong>나</strong><span style={{height:"18%"}}/><b>6L</b></div>
    </div>
  );
}

function HourglassVisual() {
  return <div className="relation-hourglass"><div><span>3</span><small>분</small></div><b>+</b><div><span>7</span><small>분</small></div></div>;
}

function WorkVisual({ mixed=false }: { mixed?:boolean }) {
  return (
    <div className="relation-work">
      <div><strong>{mixed?"갑":"민준"}</strong><span>{mixed?"15일":"12일"}</span></div>
      <div><strong>{mixed?"을":"서아"}</strong><span>{mixed?"10일":"6일"}</span></div>
      <div className="relation-work-plus">함께</div>
    </div>
  );
}

function ClockVisual({ slow=false }: { slow?:boolean }) {
  return (
    <div className="relation-clock">
      <div className="clock-face">
        <i className="clock-hour"/>
        <i className={slow?"clock-minute slow":"clock-minute"}/>
        <b>3</b><span>12</span>
      </div>
      <small>{slow?"분침 한 바퀴 72분":"정상 시계"}</small>
    </div>
  );
}

function WalkVisual({ catchup=false }: { catchup?:boolean }) {
  if(catchup) return <LineChart yMax={2200} lines={[
    {label:"민준 60",start:300,speed:60,className:"purple"},
    {label:"서아 70",start:0,speed:70,className:"green"},
    {label:"서아 60",start:0,speed:60,className:"gray"},
  ]}/>;
  return (
    <div className="relation-road">
      <div className="road-end">민준 출발</div>
      <div className="road-line"><span className="walker left">60m/분 →</span><span className="walker right">← 40m/분</span></div>
      <div className="road-end">서아 출발</div>
      <small>1000m</small>
    </div>
  );
}

function TrainVisual() {
  return (
    <div className="relation-train">
      <div className="tunnel"><span>터널 1200m</span></div>
      <div className="train"><span>기차 300m</span></div>
      <small>초속 25m</small>
    </div>
  );
}

function RoundTripVisual() {
  return (
    <div className="relation-roundtrip">
      <div>집</div><span>→ 120km · 60km/h</span><div>학교</div>
      <span className="back">← 120km · 40km/h</span>
    </div>
  );
}

function FaucetsVisual() {
  return (
    <div className="relation-faucets">
      <div><strong>A</strong><span>18분</span></div>
      <div><strong>B</strong><span>6분</span></div>
      <div className="tank">수조</div>
    </div>
  );
}

function BacteriaVisual() {
  return (
    <div className="relation-bacteria">
      {[1,2,4,8,16].map((n,i)=><div key={n}><span>{Array.from({length:Math.min(n,8)},(_,j)=><i key={j}/>)}</span><b>{i*30}분 · {n}마리</b></div>)}
    </div>
  );
}

function ProblemVisual({ type }: { type: RelationProblem["visual"] }) {
  if(type==="water") return <WaterVisual/>;
  if(type==="hourglass") return <HourglassVisual/>;
  if(type==="speedGraph") return <LineChart yMax={400} lines={[{label:"민준",start:0,speed:60,className:"purple"},{label:"서아",start:0,speed:40,className:"green"}]}/>;
  if(type==="work") return <WorkVisual/>;
  if(type==="clock") return <ClockVisual/>;
  if(type==="oppositeWalk") return <WalkVisual/>;
  if(type==="catchGraph") return <WalkVisual catchup/>;
  if(type==="workMixed") return <WorkVisual mixed/>;
  if(type==="slowClock") return <ClockVisual slow/>;
  if(type==="trainTunnel") return <TrainVisual/>;
  if(type==="roundTrip") return <RoundTripVisual/>;
  if(type==="faucets") return <FaucetsVisual/>;
  return <BacteriaVisual/>;
}

export default function ThinkingMathRelationsComparison() {
  return (
    <section className="thinking-page">
      <div className="thinking-topbar">
        <div>
          <span className="eyebrow">THINKING MATH · TOPIC 04</span>
          <h1>관계와 비교</h1>
          <p>쫓아가는 둘의 차이는 어떻게 변할까?</p>
        </div>
        <Link className="secondary-button" href="/specialized/thinking-math">사고력 수학으로</Link>
      </div>

      <article className="thinking-reading">
        <span className="thinking-label">읽을거리</span>
        <h2>둘 사이의 차이는 시간이 지나면 어떻게 변할까?</h2>
        <p>
          교재는 두 물병의 물 높이가 서로 가까워지는 상황에서 시작합니다.
          한쪽은 일정하게 줄고 다른 쪽은 일정하게 늘어나면, 두 양의 차이는 각각의 변화량보다 더 빠르게 줄어듭니다.
        </p>
        <p>
          이후 속력, 일률, 시계 바늘, 기차, 수도꼭지처럼 서로 다른 상황에서도
          ‘둘 사이의 관계’와 ‘그 차이가 변하는 속도’를 비교하는 같은 관점이 반복됩니다.
        </p>
        <div className="thinking-reading-question">두 대상이 동시에 변할 때, 차이는 매번 얼마씩 달라질까?</div>
      </article>

      <div className="thinking-layout">
        <nav className="thinking-nav">
          <strong>TOPIC 04 · 관계와 비교</strong>
          {problems.map((problem)=>(
            <a key={problem.number} href={`#relation-problem-${problem.number}`}>
              <span>{String(problem.number).padStart(2,"0")}</span>
              문제 {problem.number}
            </a>
          ))}
        </nav>

        <div className="thinking-content">
          {problems.map((problem)=>(
            <article className="thinking-problem" id={`relation-problem-${problem.number}`} key={problem.number}>
              <div className="thinking-problem-head">
                <span>문제 {problem.number}</span>
                <h2>{problem.statement}</h2>
              </div>

              <div className="relation-figure"><ProblemVisual type={problem.visual}/></div>

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
                <section className="relation-terms">
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
