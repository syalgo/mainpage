export default function GiftedApplicationWritingStudy() {
  const handwritingRules = [
    {
      title: "문항을 먼저 정확히 읽기",
      body: "자기소개를 묻는지, 지원 동기를 묻는지, 학업계획을 묻는지 먼저 표시합니다. 준비한 내용을 무조건 쓰기보다 질문에 직접 답하는 것이 우선입니다.",
    },
    {
      title: "1~2분 안에 뼈대부터 잡기",
      body: "바로 문장을 쓰기 시작하지 말고 핵심 단어 3~4개를 먼저 메모합니다. 경험 → 내가 한 행동 → 배운 점 → 앞으로의 계획 순서를 잡아 두면 중간에 글이 꼬이는 것을 줄일 수 있습니다.",
    },
    {
      title: "읽을 수 있는 글씨가 가장 중요",
      body: "예쁘게 쓰는 것보다 일정한 크기와 간격으로 또박또박 쓰는 것이 중요합니다. 급해져도 글씨가 지나치게 작아지거나 줄 위아래로 크게 흔들리지 않게 연습합니다.",
    },
    {
      title: "짧고 완전한 문장으로 쓰기",
      body: "한 문장에 여러 생각을 몰아넣지 않습니다. 한 문장에는 하나의 핵심 내용을 담고, 문단이 바뀌면 생각도 바뀌도록 작성합니다.",
    },
    {
      title: "고쳐 쓰는 일을 최소화",
      body: "실제 시험의 수정 방법과 허용 필기구는 당일 안내가 가장 우선입니다. 연습에서는 검정 볼펜으로 쓰되, 처음부터 개요를 잡아 큰 수정 없이 완성하는 훈련을 합니다.",
    },
    {
      title: "마지막 2~3분은 검토",
      body: "문항에 빠뜨린 내용은 없는지, 주어와 서술어가 맞는지, 같은 말을 반복하지 않았는지, 마지막 문장이 질문에 맞게 끝나는지 확인합니다.",
    },
  ];

  const selfIntroSteps = [
    ["01", "나는 어떤 학생인가", "관심 분야나 나의 학습 태도를 한 문장으로 시작합니다.", "저는 궁금한 것이 생기면 직접 만들어 보거나 실험해 확인하는 학생입니다."],
    ["02", "구체적인 경험 하나", "대회 이름이나 수상보다 실제로 무엇을 해 보았는지 한 가지 경험을 고릅니다.", "센서 값이 불안정하게 측정되어 원인을 찾았던 경험, 알고리즘 문제를 여러 방법으로 다시 풀어 본 경험 등"],
    ["03", "내가 한 생각과 행동", "문제가 생겼을 때 내가 어떤 판단을 하고 어떻게 해결했는지를 씁니다.", "처음 방법이 왜 잘되지 않았는지 확인하고 조건을 바꾸어 다시 실험했습니다."],
    ["04", "배운 점과 변화", "경험 뒤에 무엇을 새롭게 이해했고 내 학습 방식이 어떻게 달라졌는지 연결합니다.", "정답을 빨리 찾는 것보다 원인을 설명할 수 있어야 제대로 이해한 것이라는 점을 배웠습니다."],
    ["05", "영재교육과 연결", "앞의 경험이 지원 분야와 어떻게 연결되고 무엇을 더 배우고 싶은지 마무리합니다.", "융합정보 과정에서 알고리즘과 프로그래밍을 이용해 실제 문제를 해결하는 방법을 더 깊게 탐구하고 싶습니다."],
  ];

  const planSteps = [
    ["01", "탐구하고 싶은 질문", "막연히 '코딩을 더 배우고 싶다'보다 내가 궁금한 문제를 한 문장으로 정합니다."],
    ["02", "왜 궁금해졌는가", "수업·생활·프로젝트 경험 중 그 질문이 생긴 실제 계기를 씁니다."],
    ["03", "무엇을 배울 것인가", "필요한 원리·알고리즘·과학 개념·도구를 구체적으로 적습니다."],
    ["04", "어떻게 탐구할 것인가", "자료 조사 → 실험/코딩 → 결과 비교 → 수정처럼 실제 활동 순서를 씁니다."],
    ["05", "어디까지 확장할 것인가", "결과를 다른 문제에 적용하거나 개선하고 싶은 방향으로 마무리합니다."],
  ];

  const practicePrompts = [
    "나의 강점이 가장 잘 드러나는 학습 경험 한 가지와, 그 과정에서 내가 실제로 한 행동을 쓰시오.",
    "지원 분야에 관심을 가지게 된 계기와 그 관심을 스스로 확장해 본 경험을 쓰시오.",
    "어려운 문제를 해결하지 못했을 때 방법을 바꾸어 다시 시도한 경험을 쓰시오.",
    "영재교육원에서 가장 탐구해 보고 싶은 질문 또는 주제와 그 이유를 쓰시오.",
    "그 주제를 어떤 순서와 방법으로 탐구할 것인지 구체적인 학업계획을 쓰시오.",
    "영재교육원에서 배운 내용을 이후 학교생활이나 새로운 프로젝트에 어떻게 활용하고 싶은지 쓰시오.",
  ];

  return (
    <section className="gifted-writing-page">
      <header className="gifted-writing-hero">
        <span className="eyebrow">HANDWRITTEN WRITING PRACTICE</span>
        <h1>자기소개서 및 학업계획서 작성</h1>
        <p>
          현장에서 처음 문항을 받아도 자신의 경험과 생각을 정리해
          <b> 직접 자필로 완성할 수 있도록</b> 연습합니다.
        </p>
      </header>

      <section className="gifted-writing-official">
        <div className="gifted-writing-section-heading">
          <span>OFFICIAL CONTEXT</span>
          <h2>먼저 알아둘 전형의 방향</h2>
        </div>
        <div className="gifted-writing-official-grid">
          <article>
            <strong>화성시 영재교육원의 교육 방향</strong>
            <p>
              공식 사업 소개에서는 과학 분야는 관찰·분석·응용·확장 중심의 탐구,
              정보 분야는 <b>알고리즘적 사고와 프로그래밍을 활용한 문제 해결</b>을 강조합니다.
              따라서 글에서도 결과를 자랑하기보다 내가 어떻게 질문하고, 시도하고, 해결했는지를 보여 주는 것이 좋습니다.
            </p>
          </article>
          <article>
            <strong>자필 작성 대비가 필요한 이유</strong>
            <p>
              화성시인재육성재단의 2026년 공식 선발 자료에는 지필평가에서
              <b> 자체 영재성 판별 검사와 자기소개서·학업계획서 작성</b>이 함께 실시된 전례가 있습니다.
              현장에서 바로 써야 하는 상황을 가정해 연습하는 것이 안전합니다.
            </p>
          </article>
        </div>
        <div className="gifted-writing-notice">
          <strong>중요</strong>
          <p>
            필기구 종류, 수정 방법, 문항 수, 글자 수나 답안 분량은 연도별 세부 안내에 따라 달라질 수 있습니다.
            현재 연습에서는 검정 볼펜을 기준으로 하되, <b>실제 시험 당일의 감독 안내와 답안지 지시사항을 최우선</b>으로 따릅니다.
          </p>
        </div>
      </section>

      <section className="gifted-writing-section">
        <div className="gifted-writing-section-heading">
          <span>HANDWRITING</span>
          <h2>현장에서 자필로 쓸 때 지켜야 할 6가지</h2>
          <p>좋은 내용을 알고 있어도 제한된 시간 안에 읽기 좋게 완성하지 못하면 전달력이 떨어집니다.</p>
        </div>
        <div className="gifted-writing-rule-grid">
          {handwritingRules.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gifted-writing-section">
        <div className="gifted-writing-section-heading">
          <span>PERSONAL STATEMENT</span>
          <h2>자기소개서 작성법</h2>
          <p>
            자기소개서는 “저는 성실합니다”라고 선언하는 글이 아니라,
            <b> 실제 경험을 근거로 내가 어떤 학생인지 보여 주는 글</b>입니다.
          </p>
        </div>

        <div className="gifted-writing-step-list">
          {selfIntroSteps.map(([number, title, body, example]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="gifted-writing-mini-example"><b>예</b>{example}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="gifted-writing-template">
          <strong>자기소개서 기본 뼈대</strong>
          <p>
            저는 <u>어떤 점에 관심을 갖고 행동하는 학생인지</u> 보여 주는 학생입니다.
            <br />
            <u>구체적인 경험</u>에서 저는 <u>문제·궁금증</u>을 발견했습니다.
            처음에는 <u>첫 시도</u>를 했지만 <u>잘되지 않은 이유</u>를 확인했고,
            이후 <u>내가 바꾼 방법</u>으로 다시 시도했습니다.
            그 과정에서 <u>배운 점</u>을 알게 되었고,
            앞으로 <u>지원 분야에서 더 탐구하고 싶은 내용</u>을 깊이 공부하고 싶습니다.
          </p>
        </div>

        <div className="gifted-writing-compare">
          <article className="is-weak">
            <span>아쉬운 표현</span>
            <p>
              “저는 어릴 때부터 컴퓨터를 좋아하고 코딩도 잘합니다.
              여러 대회에도 참가했고 영재교육원에 들어가서 더 열심히 공부하겠습니다.”
            </p>
            <b>왜 아쉬울까?</b>
            <p>무엇을 어떻게 했는지 보이지 않고, 다른 학생에게도 그대로 적용될 수 있는 표현입니다.</p>
          </article>
          <article className="is-strong">
            <span>더 좋은 방향</span>
            <p>
              “프로그램이 예상과 다르게 동작했을 때 답을 바로 찾기보다 입력값을 바꾸어 원인을 하나씩 확인했습니다.
              그 과정에서 오류를 고치는 것보다 왜 오류가 생겼는지를 설명하는 것이 더 중요하다는 점을 배웠습니다.”
            </p>
            <b>무엇이 좋은가?</b>
            <p>실제 행동과 사고 과정이 보여서 학생의 특성과 문제 해결 태도를 확인할 수 있습니다.</p>
          </article>
        </div>
      </section>

      <section className="gifted-writing-section">
        <div className="gifted-writing-section-heading">
          <span>STUDY PLAN</span>
          <h2>학업계획서 작성법</h2>
          <p>
            학업계획서는 “열심히 공부하겠습니다”가 아니라
            <b> 무엇이 궁금하고, 무엇을 배우며, 어떤 방법으로 탐구할 것인지</b>를 보여 주는 글입니다.
          </p>
        </div>

        <div className="gifted-writing-plan-grid">
          {planSteps.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="gifted-writing-template">
          <strong>학업계획서 기본 뼈대</strong>
          <p>
            영재교육원에서 저는 <u>탐구하고 싶은 질문·주제</u>를 알아보고 싶습니다.
            평소 <u>실제 경험</u>을 하면서 <u>궁금증</u>이 생겼기 때문입니다.
            먼저 <u>필요한 원리·개념</u>을 공부하고,
            <u>실험·프로그래밍·자료 수집 등 구체적인 방법</u>으로 확인해 보겠습니다.
            결과를 비교해 문제가 있다면 <u>어떻게 수정할지</u> 생각하고,
            마지막에는 <u>다른 상황이나 실제 문제에 어떻게 확장할지</u>까지 탐구하고 싶습니다.
          </p>
        </div>

        <div className="gifted-writing-field-examples">
          <article>
            <span>융합정보 예시</span>
            <h3>“센서 데이터는 왜 항상 정확하지 않을까?”</h3>
            <p>
              센서의 측정값을 여러 번 수집하고 평균·최댓값·최솟값을 비교한 뒤,
              이상값을 줄이는 간단한 알고리즘을 만들어 결과가 어떻게 달라지는지 확인해 보는 식으로 계획할 수 있습니다.
            </p>
          </article>
          <article>
            <span>융합과학 예시</span>
            <h3>“조건이 달라지면 결과는 어떻게 변할까?”</h3>
            <p>
              한 번에 여러 조건을 바꾸지 않고 한 가지 조건만 달리해 반복 실험하고,
              측정값을 표와 그래프로 정리한 뒤 결과의 원인을 설명하는 식으로 계획할 수 있습니다.
            </p>
          </article>
        </div>
      </section>

      <section className="gifted-writing-section">
        <div className="gifted-writing-section-heading">
          <span>WRITING PROCESS</span>
          <h2>현장에서 쓰는 순서</h2>
        </div>
        <div className="gifted-writing-flow">
          <div><span>1</span><strong>질문 읽기</strong><p>무엇을 묻는지 밑줄</p></div>
          <i>→</i>
          <div><span>2</span><strong>키워드 메모</strong><p>3~4개 핵심어</p></div>
          <i>→</i>
          <div><span>3</span><strong>문단 구성</strong><p>경험·행동·배움·계획</p></div>
          <i>→</i>
          <div><span>4</span><strong>자필 작성</strong><p>짧고 구체적으로</p></div>
          <i>→</i>
          <div><span>5</span><strong>검토</strong><p>누락·반복·맞춤법 확인</p></div>
        </div>
      </section>

      <section className="gifted-writing-section">
        <div className="gifted-writing-section-heading">
          <span>PRACTICE</span>
          <h2>자필 연습 문제</h2>
          <p>아래 문제는 공식 기출이 아니라 현장 작성 능력을 기르기 위한 연습 문항입니다.</p>
        </div>
        <div className="gifted-writing-prompts">
          {practicePrompts.map((prompt, index) => (
            <article key={prompt}>
              <span>연습 {index + 1}</span>
              <p>{prompt}</p>
            </article>
          ))}
        </div>
        <div className="gifted-writing-practice-rule">
          <strong>추천 연습 방법</strong>
          <p>
            처음에는 문항당 <b>20분</b> 정도로 충분히 생각해 작성하고,
            익숙해지면 <b>15분 → 10분</b>으로 줄여 봅니다.
            매번 새 글을 쓰기보다 같은 경험을 서로 다른 질문에 맞게 다시 구성해 보는 연습이 효과적입니다.
          </p>
        </div>
      </section>

      <section className="gifted-writing-section gifted-writing-check">
        <div className="gifted-writing-section-heading">
          <span>FINAL CHECK</span>
          <h2>완성 후 스스로 확인하기</h2>
        </div>
        <div className="gifted-writing-check-grid">
          <label><input type="checkbox" /> 질문에 직접 답했는가?</label>
          <label><input type="checkbox" /> 실제 경험을 한 가지 이상 넣었는가?</label>
          <label><input type="checkbox" /> “열심히 했다”가 아니라 무엇을 했는지 썼는가?</label>
          <label><input type="checkbox" /> 문제를 해결한 과정과 생각이 드러나는가?</label>
          <label><input type="checkbox" /> 배운 점이 앞의 경험과 자연스럽게 연결되는가?</label>
          <label><input type="checkbox" /> 학업계획에 구체적인 탐구 방법이 들어갔는가?</label>
          <label><input type="checkbox" /> 외운 문장처럼 과장되거나 어른스러운 표현은 없는가?</label>
          <label><input type="checkbox" /> 글씨 크기와 간격이 끝까지 읽기 쉬운가?</label>
        </div>
      </section>

      <section className="gifted-writing-sources">
        <strong>확인 자료</strong>
        <p>
          화성시인재육성재단 영재교육원 공식 모집 공고 및 공식 사업 소개를 기준으로 전형 방향을 확인하고,
          자기소개서·학업계획서 작성법은 학생이 직접 작성하는 영재교육 선발 자료의 공통 원칙을 참고해 구성했습니다.
        </p>
        <div>
          <a href="https://www.hstree.org/news/noticeView.do?seq=2478" target="_blank" rel="noreferrer">2027학년도 모집 공고</a>
          <a href="https://hstree.org/foundation/giftedEduCenterBizIntro.do" target="_blank" rel="noreferrer">영재교육원 사업 소개</a>
        </div>
      </section>
    </section>
  );
}
