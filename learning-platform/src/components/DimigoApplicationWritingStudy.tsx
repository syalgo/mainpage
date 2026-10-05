const officialWarnings = [
  {
    title: "반드시 지원자 본인이 작성",
    body: "자기소개서는 지원자 본인이 직접 작성하고, 사실에 근거해 자신의 능력·특성·경험을 정직하게 기술해야 합니다. 대리 작성, 허위 작성, 표절은 입학 취소 등 불이익으로 이어질 수 있습니다.",
  },
  {
    title: "학교생활기록부 밖의 외부활동은 주의",
    body: "학교생활기록부에 기록된 활동 외의 사교육 유발요인이 큰 외부활동은 작성하지 않습니다. 공인어학성적, 교외 수상실적·대회, 각종 영재원, 해외어학연수·해외체험학습·해외봉사활동 등이 여기에 해당합니다.",
  },
  {
    title: "개인·가정 배경을 드러내지 않기",
    body: "지원자 성명, 출신 중학교, 출신·거주 지역명, 부모·친인척의 실명이나 직종명·직업명·직장명·직위명 등 사회적·경제적 지위를 암시하는 내용은 기재하지 않습니다.",
  },
  {
    title: "분량 제한을 반드시 지키기",
    body: "각 문항은 정해진 박스 범위 안에서 작성합니다. 대략, 공백 포함 539자/공백 제외 433자 이하 정도입니다.",
  },
];

const imageExamples = [
  {
    image: "원인을 끝까지 추적하는 학생",
    keywords: "분석 · 끈기 · 개선",
    subject: "어려운 수학 개념을 답만 외우지 않고 풀이 과정을 다시 정리한 경험",
    activity: "학교 프로젝트에서 오류 원인을 나누어 확인하고 수정한 경험",
    character: "팀원이 막혔을 때 역할을 조정하고 함께 해결한 경험",
  },
  {
    image: "배운 것을 직접 적용해 보는 학생",
    keywords: "탐구 · 실행 · 확장",
    subject: "교과에서 배운 원리를 다른 문제에 적용해 본 경험",
    activity: "학교 안에서 배운 내용을 활용해 결과물을 개선한 경험",
    character: "공동 과제에서 아이디어를 실제 행동으로 옮기며 팀을 도운 경험",
  },
];

const basicWriting = [
  ["01", "질문에 먼저 답한다", "준비한 이야기를 쓰는 것이 아니라 문항이 요구하는 내용을 먼저 확인합니다. ‘교과 활동’, ‘학교 내 활동’, ‘공동체 경험’은 서로 다른 소재를 요구합니다."],
  ["02", "한 문항에는 중심 경험 하나", "짧은 분량 안에 여러 활동을 나열하면 어느 경험도 선명해지지 않습니다. 대표 경험 하나를 중심으로 필요한 보조 내용만 붙입니다."],
  ["03", "평가보다 행동을 쓴다", "‘성실했다’, ‘열심히 했다’, ‘협동심이 있다’라고 평가하지 말고, 무엇을 어떻게 했는지 행동으로 보여 줍니다."],
  ["04", "결과보다 과정이 중요하다", "점수 상승이나 완성 결과만 쓰지 않고, 어려움 → 판단 → 시도 → 변화의 흐름을 보여 줍니다."],
  ["05", "배운 점은 경험에서 나온다", "마지막에 갑자기 거창한 교훈을 붙이지 않습니다. 앞에서 한 행동 때문에 실제로 생각이나 학습 방식이 어떻게 달라졌는지 씁니다."],
  ["06", "짧고 구체적인 문장", "한 문장에 생각을 너무 많이 넣지 말고, 추상적인 수식어보다 구체적인 상황·행동·변화를 우선합니다."],
];

const prompts = [
  {
    number: "1",
    title: "교과 활동",
    question: "중학교 재학 중 교과 학업에 기울인 노력과 학습 경험을 통해 배우고 느낀 점을 중심으로 기술하시오.",
    focus: "학교 교과 학습에서 ‘어떻게 공부했는가’를 보여 주는 문항입니다. 좋아하는 과목을 말하는 것보다, 어려움이나 궁금증을 해결하기 위해 학습 방법을 바꾸고 스스로 이해를 넓힌 과정이 중요합니다.",
    structure: ["학습 중 막힌 지점·궁금증", "내가 선택한 공부 방법", "구체적인 시도와 변화", "배우고 느낀 점"],
    bad: "저는 수학을 좋아해서 항상 열심히 공부했습니다. 모르는 문제가 있으면 여러 번 풀었고 성적도 많이 올랐습니다. 앞으로도 성실하게 공부하겠습니다.",
    badWhy: "‘열심히’, ‘성실하게’라는 평가만 있고 무엇을 어떻게 공부했는지 보이지 않습니다. 성적 상승은 결과일 뿐 학습 과정이 드러나지 않습니다.",
    good: "함수 단원에서 식을 외워 문제를 풀 때는 조금만 형태가 달라져도 막혔습니다. 그래서 식에 여러 값을 직접 넣어 좌표를 표로 만들고, 그 값이 그래프에서 어떻게 나타나는지 비교했습니다. 이후 문제를 볼 때 공식을 먼저 떠올리기보다 값의 변화와 관계를 확인하는 습관이 생겼습니다.",
    goodWhy: "어려움 → 구체적 학습 행동 → 학습 방식의 변화가 한 흐름으로 이어집니다.",
  },
  {
    number: "2",
    title: "교과 외 활동",
    question: "중학교 재학 중 본인이 관심을 두고 노력했던 학교 내 활동을 쓰고, 이를 통해 배우고 느낀 점을 기술하시오.",
    focus: "핵심은 ‘학교 내 활동’입니다. 활동 이름이나 실적을 자랑하기보다, 왜 관심을 가졌고 그 안에서 실제로 어떤 역할과 노력을 했는지 보여 줍니다.",
    structure: ["관심을 가진 학교 내 활동", "내가 맡은 역할·문제", "해결을 위해 한 행동", "활동을 통해 배운 점"],
    bad: "저는 코딩에 관심이 많아 여러 외부 대회에 참가했고 좋은 성적도 거두었습니다. 이 경험을 통해 노력하면 좋은 결과를 얻을 수 있다는 것을 배웠습니다.",
    badWhy: "학교생활기록부 밖의 교외 대회·수상실적을 자기소개서 소재로 제시하면 불이익을 받을 수 있습니다. 또한 결과만 있고 학교 내에서의 행동이 없습니다.",
    good: "학교 수업에서 팀별로 프로그램을 만들 때 입력값에 따라 결과가 달라지는 오류가 반복되었습니다. 저는 팀원들과 오류가 발생하는 조건을 나누어 기록하고 한 가지씩 확인하자고 제안했습니다. 역할을 나눠 테스트하니 원인을 더 빨리 찾을 수 있었고, 함께 문제를 해결하려면 아이디어뿐 아니라 확인 과정을 공유하는 것이 중요하다는 점을 배웠습니다.",
    goodWhy: "학교 안 활동이라는 조건을 지키면서 관심, 역할, 행동, 협력 과정이 구체적으로 드러납니다.",
  },
  {
    number: "3",
    title: "도덕·인성",
    question: "중학교 재학 중 나눔, 배려, 협력, 타인존중, 규칙 준수 등 타인과 공동체를 위해 노력한 경험과 이를 통해 배우고 느낀 점을 기술하시오.",
    focus: "‘저는 배려심이 있습니다’라고 선언하는 문항이 아닙니다. 다른 사람이나 공동체를 고려해야 했던 실제 상황에서 내가 어떻게 판단하고 행동했는지를 보여 줍니다.",
    structure: ["공동체 안의 구체적인 상황", "상대 또는 팀의 어려움", "내가 한 행동과 이유", "변화와 내가 배운 점"],
    bad: "저는 친구를 잘 도와주고 규칙을 잘 지킵니다. 친구들과 항상 사이좋게 지내며 다른 사람을 배려하려고 노력합니다. 그래서 협동심이 좋다는 말을 자주 듣습니다.",
    badWhy: "성격을 직접 평가하는 문장만 있고 이를 증명할 실제 장면이 없습니다.",
    good: "모둠 발표를 준비할 때 한 친구가 맡은 부분을 어려워해 진행이 늦어졌습니다. 처음에는 제 부분을 먼저 끝내는 것이 효율적이라고 생각했지만, 전체 발표가 함께 완성되어야 한다고 판단해 역할을 다시 나누었습니다. 제가 정리 방법을 설명하고 친구가 자료를 다시 구성할 수 있도록 기다렸고, 이후 서로의 진행 상황을 확인하며 준비했습니다. 협력은 일을 대신해 주는 것이 아니라 함께 할 수 있는 방법을 만드는 것임을 배웠습니다.",
    goodWhy: "상황, 판단, 구체적인 행동, 배운 점이 모두 연결되어 있어 인성이 행동으로 드러납니다.",
  },
];

export default function DimigoApplicationWritingStudy() {
  return (
    <section className="dimigo-writing-page">
      <header className="dimigo-writing-hero">
        <div>
          <span className="eyebrow">DIMIGO PERSONAL STATEMENT</span>
          <h1>자기소개서 작성</h1>
          <p>
            문항에 대한 답변을 적기 전에, &quot;나는 어떤 학생인가&quot;라는 고찰을 통해,
            <br />
            자신을 대표할 수 있는 몇 가지의 이미지를 세운 뒤 그 이미지를 실제 경험으로 증명하는 방식으로 작성합니다.
          </p>
        </div>
      </header>

      <section className="dimigo-writing-section">
        <div className="dimigo-writing-heading">
          <span>01 · OFFICIAL GUIDE</span>
          <h2>디미고가 안내하는 자기소개서 작성 원칙</h2>
        </div>

        <div className="dimigo-warning-grid">
          {officialWarnings.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="dimigo-prohibited">
          <strong>자기소개서에 기재하지 말아야 할 내용</strong>
          <div>
            <span>공인어학성적</span>
            <span>교외 수상실적·각종 교외 대회</span>
            <span>각종 영재원</span>
            <span>해외어학연수·체험학습·봉사활동</span>
            <span>지원자 성명</span>
            <span>출신 중학교·출신/거주 지역명</span>
            <span>부모·친인척의 직업·직장·직위 등</span>
          </div>
        </div>
      </section>

      <section className="dimigo-writing-section">
        <div className="dimigo-writing-heading">
          <span>02 · PERSONAL IMAGE</span>
          <h2>글을 쓰기 전에, 나를 대표하는 이미지를 먼저 찾자</h2>
          <p>
            대부분의 지원자는 성실하고 공부도 열심히 합니다. 자기소개서에서는 그보다 한 단계 더 나아가
            <b> “그래서 이 학생은 어떤 학생인가?”가 기억에 남아야 합니다.</b>
          </p>
        </div>

        <div className="dimigo-image-principle">
          <strong>여기서 말하는 ‘컨셉’은 만들어낸 캐릭터가 아닙니다.</strong>
          <p>
            여러 실제 경험에서 반복해서 나타나는 나의 행동 방식을 찾아 한 문장으로 정리하는 것입니다.
            자기소개서와 면접에서 같은 단어를 반복하는 것이 아니라, 서로 다른 경험에서도
            <b> 비슷한 태도와 행동이 자연스럽게 보이도록</b> 만드는 것이 핵심입니다.
          </p>
        </div>

        <div className="dimigo-image-flow">
          <article><span>1</span><strong>경험 모으기</strong><p>교과·학교 활동·협력 경험을 충분히 적습니다.</p></article>
          <i>→</i>
          <article><span>2</span><strong>반복 행동 찾기</strong><p>내가 여러 상황에서 자주 보인 행동을 찾습니다.</p></article>
          <i>→</i>
          <article><span>3</span><strong>한 문장으로 정의</strong><p>“나는 ○○할 때 △△하는 학생이다.”</p></article>
          <i>→</i>
          <article><span>4</span><strong>키워드 2~3개</strong><p>행동을 설명하는 핵심어만 남깁니다.</p></article>
          <i>→</i>
          <article><span>5</span><strong>세 문항에 배치</strong><p>각 문항에 컨셉을 증명할 다른 경험을 고릅니다.</p></article>
        </div>

        <div className="dimigo-image-examples">
          {imageExamples.map((item) => (
            <article key={item.image}>
              <span>대표 이미지 예시</span>
              <h3>{item.image}</h3>
              <b>{item.keywords}</b>
              <dl>
                <div><dt>교과 활동</dt><dd>{item.subject}</dd></div>
                <div><dt>교과 외 활동</dt><dd>{item.activity}</dd></div>
                <div><dt>도덕·인성</dt><dd>{item.character}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="dimigo-image-worksheet">
          <strong>나의 대표 이미지 정리</strong>
          <div className="dimigo-image-fill">
            <p>나는 <span>____________________________</span> 하는 학생이다.</p>
            <p>대표 키워드 ① <span>________</span> ② <span>________</span> ③ <span>________</span></p>
            <p>이 이미지를 보여 줄 교과 경험 <span>________________________________________</span></p>
            <p>이 이미지를 보여 줄 학교 내 활동 <span>_____________________________________</span></p>
            <p>이 이미지를 보여 줄 인성·협력 경험 <span>___________________________________</span></p>
          </div>
          <small>
            먼저 컨셉을 정해 놓고 경험을 억지로 끼워 맞추지 않습니다. 실제 경험을 충분히 모은 뒤,
            그 안에서 반복되는 특징을 발견해 대표 이미지를 정합니다.
          </small>
        </div>
      </section>

      <section className="dimigo-writing-section">
        <div className="dimigo-writing-heading">
          <span>03 · WRITING BASICS</span>
          <h2>자기소개서 기본 글쓰기 방법</h2>
          <p>짧은 분량에서는 화려한 표현보다 질문에 맞는 구체적인 경험과 사고 과정이 중요합니다.</p>
        </div>

        <div className="dimigo-basic-grid">
          {basicWriting.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="dimigo-story-formula">
          <span>한 경험을 쓰는 기본 구조</span>
          <div>
            <strong>상황·문제</strong><i>→</i>
            <strong>내 판단</strong><i>→</i>
            <strong>구체적인 행동</strong><i>→</i>
            <strong>변화·결과</strong><i>→</i>
            <strong>배운 점</strong>
          </div>
          <p>
            모든 항목을 같은 분량으로 쓸 필요는 없습니다. 핵심은 <b>‘내가 무엇을 했는가’</b>와
            <b> ‘그 경험 이후 무엇이 달라졌는가’</b>입니다.
          </p>
        </div>

        <div className="dimigo-writing-tip">
          <strong>추상적인 말을 행동으로 바꾸기</strong>
          <div className="dimigo-writing-pairs">
            <p><del>열심히 공부했습니다.</del><span>→</span><b>틀린 문제를 유형별로 나누고 풀이가 막힌 이유를 기록했습니다.</b></p>
            <p><del>협동심을 발휘했습니다.</del><span>→</span><b>팀원의 진행 상황을 확인한 뒤 역할을 다시 나누고 함께 테스트했습니다.</b></p>
            <p><del>책임감 있게 행동했습니다.</del><span>→</span><b>맡은 부분이 끝난 뒤 전체 결과를 다시 확인하고 오류가 난 부분을 함께 수정했습니다.</b></p>
          </div>
        </div>
      </section>

      <section className="dimigo-writing-section">
        <div className="dimigo-writing-heading">
          <span>04 · THREE QUESTIONS</span>
          <h2>세 가지 문항은 이렇게 접근한다</h2>
          <p>
            아래 예시는 그대로 제출하는 모범답안이 아니라, <b>어떤 표현이 약하고 어떤 표현이 구체적인지 비교하기 위한 짧은 학습 예시</b>입니다.
          </p>
        </div>

        <div className="dimigo-prompt-list">
          {prompts.map((item) => (
            <article className="dimigo-prompt-card" key={item.number}>
              <header>
                <span>문항 {item.number}</span>
                <h3>{item.title}</h3>
              </header>

              <blockquote>{item.question}</blockquote>

              <div className="dimigo-prompt-focus">
                <strong>이 문항에서 보여줘야 하는 것</strong>
                <p>{item.focus}</p>
              </div>

              <div className="dimigo-prompt-structure">
                <strong>추천 흐름</strong>
                <div>
                  {item.structure.map((step, index) => (
                    <span key={step}>
                      <b>{index + 1}</b>{step}
                    </span>
                  ))}
                </div>
              </div>

              <div className="dimigo-example-compare">
                <section className="bad">
                  <span>아쉬운 예시</span>
                  <p>{item.bad}</p>
                  <strong>왜 아쉬울까?</strong>
                  <p>{item.badWhy}</p>
                </section>
                <section className="good">
                  <span>좋은 방향의 예시</span>
                  <p>{item.good}</p>
                  <strong>무엇이 좋은가?</strong>
                  <p>{item.goodWhy}</p>
                </section>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dimigo-writing-section dimigo-final-check">
        <div className="dimigo-writing-heading">
          <span>05 · FINAL CHECK</span>
          <h2>초안을 쓴 뒤 확인하기</h2>
        </div>
        <div className="dimigo-check-grid">
          <label><input type="checkbox" /> 질문이 요구하는 경험을 골랐는가?</label>
          <label><input type="checkbox" /> 지원자의 대표 이미지와 자연스럽게 연결되는가?</label>
          <label><input type="checkbox" /> 실제 경험이며 과장하거나 만들어낸 내용이 없는가?</label>
          <label><input type="checkbox" /> 금지된 외부활동이나 개인·가정 배경을 적지 않았는가?</label>
          <label><input type="checkbox" /> ‘열심히’, ‘성실하게’보다 구체적인 행동이 보이는가?</label>
          <label><input type="checkbox" /> 결과만이 아니라 생각과 문제 해결 과정이 들어갔는가?</label>
          <label><input type="checkbox" /> 배우고 느낀 점이 앞의 경험에서 자연스럽게 이어지는가?</label>
          <label><input type="checkbox" /> 공백 포함 539자, 공백 제외 433자 이하인가?</label>
        </div>
      </section>
    </section>
  );
}
