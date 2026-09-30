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
    title: "대표 문제 2~3개 완전 분석",
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
          <h2>학교가 공개한 심층면접 핵심</h2>
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
          <span>REPRESENTATIVE PROBLEM</span>
          <h2>대표 문제 분석표</h2>
          <p>본선 문제 2~3개를 아래 항목으로 완전히 정리해 두세요.</p>
        </div>
        <div className="contest-analysis-table-wrap">
          <table className="contest-analysis-table">
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
              <tr><td>정당성</td><td>왜 이 풀이가 항상 맞는지 핵심 논리 또는 증명</td></tr>
              <tr><td>예외 케이스</td><td>최솟값·최댓값·중복·경계값 등 실수하기 쉬운 입력</td></tr>
              <tr><td>구현 과정</td><td>가장 어려웠던 부분, 오류 원인, 디버깅 방법</td></tr>
              <tr><td>대안 풀이</td><td>다른 풀이가 가능한지, 장단점과 복잡도 비교</td></tr>
              <tr><td>확장</td><td>입력 제한이나 조건이 바뀌면 어떻게 수정할지</td></tr>
            </tbody>
          </table>
        </div>
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
