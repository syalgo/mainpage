export default function RealWorldCreativeProblemSolvingStudy() {
  return (
    <section className="rw-study-page">
      <header className="rw-study-hero">
        <span className="eyebrow">CREATIVE PROBLEM SOLVING · REAL WORLD</span>
        <h1>현실상황형</h1>
      </header>

      <section className="rw-study-section">

        <article className="rw-reading-card">
          <strong>읽을거리</strong>
          <p>하준이는 그동안 풀던 문제와 전혀 다른 문제를 받았다.</p>
          <p>“우리 반 소풍, 한 곳만 고를 수 있어. 네가 정해봐.”</p>
          <p>에버랜드, 부산 바다, 가까운 산. 셋 다 좋아 보였다.</p>
          <p>“정답이 … 뭐지?” 아무리 봐도 딱 떨어지는 답이 없었다.</p>

          <h3>정답이 하나가 아닐 때</h3>
          <p>
            세상의 많은 문제에는 정해진 정답이 없다. 어디로 소풍을 갈지, 잃어버린 물건을 어떻게
            찾을지, 매점에서 무엇을 팔지. 답이 하나로 정해져 있지 않은 이런 문제 앞에서는, 무작정
            고르는 대신 나만의 기준을 세우는 것이 먼저다.
          </p>
          <p>
            비결은 이렇다. 무엇을 가졌고 무엇이 없는지 따져 보고, 무엇을 가장 중요하게 볼지 기준을
            정한 다음, 그 기준으로 견주어 결정하고, 왜 그렇게 정했는지 설명한다. 신기하게도 이것이
            수학자가 한 번도 풀린 적 없는 문제를 푸는 방식이고, 우리가 살면서 마주하는 진짜 문제를
            푸는 방식이기도 하다. 지금까지 배운 모든 생각의 도구가 여기서 한꺼번에 쓰인다.
          </p>

          <div className="rw-reading-question">
            하준이는 무엇을 기준으로 소풍 장소를 정해야 할까? 정답이 없는 문제에서는 무엇이
            “좋은 답”을 가를까?
          </div>
        </article>

        <div className="rw-choice-scene">
          <p>셋 다 좋아 보이는데… 정답이 뭐지?</p>
          <strong>어디로 소풍을 갈까?</strong>
          <div><span>에버랜드</span><span>부산 바다</span><span>가까운 산</span></div>
        </div>

        <div className="rw-guide-grid">
          <article className="rw-guide-card">
            <h3>무엇을 기준으로 고를까?</h3>
            <table className="rw-table">
              <thead>
                <tr><th></th><th>재미</th><th>비용</th><th>걸리는 시간</th></tr>
              </thead>
              <tbody>
                <tr><th>에버랜드</th><td>☆</td><td>☆</td><td>☆</td></tr>
                <tr><th>부산 바다</th><td>☆</td><td>☆</td><td>☆</td></tr>
                <tr><th>가까운 산</th><td>☆</td><td>☆</td><td>☆</td></tr>
              </tbody>
            </table>
            <p>정답이 하나가 아니라, 무엇을 가장 중요하게 보느냐에 따라 답이 달라져요.</p>
          </article>

          <article className="rw-guide-card">
            <h3>정답이 없는 문제를 푸는 순서</h3>
            <ol>
              <li>가진 것과 없는 것을 따져 본다</li>
              <li>가장 중요한 기준을 정한다</li>
              <li>기준으로 견주어 결정한다</li>
              <li>왜 그렇게 정했는지 설명한다</li>
            </ol>
          </article>
        </div>

        <div className="rw-reading-question rw-reading-question-wide">
          정답이 없는 문제에서는 무엇이 ‘좋은 답’을 가를까? 하준이는 무엇을 기준으로 정해야 할까?
        </div>

        <article className="rw-problem-card">
          <header><span>문제1</span><h3>모둠 나누기</h3></header>
          <p>우리 반에서 5명짜리 모둠을 만들어야 해. 아래 친구 8명 중에서 골라서 한 모둠을 만들어보자.</p>

          <table className="rw-table rw-name-table">
            <thead><tr><th>이름</th><th>친한 친구</th><th>수학을 잘함</th></tr></thead>
            <tbody>
              <tr><td>이준</td><td>서아</td><td>○</td></tr>
              <tr><td>서아</td><td>이준</td><td></td></tr>
              <tr><td>진하</td><td>민재</td><td>○</td></tr>
              <tr><td>민재</td><td>진하</td><td></td></tr>
              <tr><td>유나</td><td>소율</td><td></td></tr>
              <tr><td>소율</td><td>유나</td><td>○</td></tr>
              <tr><td>도윤</td><td>없음</td><td></td></tr>
              <tr><td>예린</td><td>없음</td><td></td></tr>
            </tbody>
          </table>

          <div className="rw-condition-box">
            <p>선생님이 조건을 줬어.</p>
            <p>조건 1 : 친한 친구끼리 같은 모둠은 좋지만, 한 모둠에 친한 짝은 2쌍까지만.</p>
            <p>조건 2 : 수학을 잘하는 친구들이 한 모둠에 다 들어가면 안 돼. 1~2명만 넣어줘.</p>
          </div>

          <div className="rw-question-list">
            <p><b>01</b> 위 표 말고, 모둠을 나눌 때 더 생각하면 좋은 기준이 있을까? 1가지 만들어봐.</p>
            <p><b>02</b> 8명 중 5명을 골라 모둠을 만들어봐. 조건 1, 2를 지키면서. 누구를 골랐는지, 왜 그렇게 골랐는지 써봐.</p>
            <p><b>03</b> 친한 친구랑 꼭 같은 모둠이 되고 싶은 친구가 있는데, 조건 때문에 안 됐어. 그 친구에게 뭐라고 말해줄 거야?</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 채점 포인트</h4>
            <p>추가 기준 예시: 남녀 비율, 발표 잘하는 친구 분산, 조용한 친구와 활발한 친구 섞기, 리더 역할 한 명씩.</p>
            <p>★ 표에 없는 새 기준을 스스로 만들면 “상”</p>
            <p>▲ “친한 친구”처럼 이미 준 조건 반복하면</p>

            <h4>② 정답 예시</h4>
            <p>이준·서아·진하·민재·유나 → 친한 짝 2쌍(이준-서아, 진하-민재), 수학 잘하는 친구 2명(이준·진하).</p>
            <p>조건 만족.</p>
            <p>★ 조건 1, 2를 둘 다 지키고 + 왜 그렇게 골랐는지 이유 있으면 “상”</p>
            <p>▲ 수학 잘하는 친구(이준·진하·소율) 3명을 한 모둠에 다 넣으면 조건 2 위반. 1~2명만 넣어야 함.</p>

            <h4>③ 채점 포인트</h4>
            <p>★ 상대방 마음을 헤아리는 말 + 이유 설명</p>
            <p>(예: “다음에 같은 모둠 하자, 이번엔 골고루 섞어야 한대”)</p>
            <p>▲ “안 돼”만 하면 “하”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>네가 만든 모둠에서 가장 신경 쓴 조건은 뭐야? 두 조건이 부딪힐 때 어떤 걸 먼저 지켰어?</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제2</span><h3>급식 줄이 너무 길어</h3></header>
          <div className="rw-situation-box">
            <p>점심시간마다 급식 줄이 너무 길어서 20분씩 기다려. 다 먹고 나면 쉴 시간이 없어.</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 급식 줄이 왜 이렇게 길어지는 걸까? 이유를 2가지 이상 생각해봐.</p>
            <p><b>02</b> 지금은 음식을 받는 곳(배식대)이 1군데야. 만약 배식대를 2군데로 늘리면 기다리는 시간이 어떻게 될까?</p>
            <p><b>03</b> 배식대를 2군데로 늘리면 20분이 몇 분으로 줄어들까? 숫자로 어림잡아봐. 4군데로 늘리면?</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 채점 포인트</h4>
            <p>이유 예시: 학생 수가 많다. 배식대가 1개뿐이다. 한 명당 받는 시간이 길다. 메뉴가 많다.</p>
            <p>★ 2가지 이상 + “왜 그게 시간을 늘리는지” 설명되면 “상”</p>

            <h4>② 예시</h4>
            <p>배식대가 2군데면 줄도 2개로 나뉘어서 동시에 받을 수 있다 → 기다리는 사람이 반으로.</p>
            <p>★ “동시에 받으니까 빨라진다”는 원리를 짚으면 “상”</p>
            <p>▲ “줄만 2개로 나눈다”고 쓰고 배식대는 그대로면</p>
            <p>★★ 실제로 안 빨라짐. 이걸 구분하면 “최상”</p>

            <h4>③ 정답</h4>
            <p>2군데 → 20÷2 = 10분.</p>
            <p>4군데 → 20÷4 = 5분.</p>
            <p>★ 나눗셈으로 어림하면 “상”</p>
            <p>단, “정확히 반”이 아니라 “대략”임을 알면 더 좋음.</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>배식대를 10군데로 늘리면 진짜 2분이 될까?</p>
              <p>끝없이 줄일 수 있을까, 아니면 한계가 있을까?</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제3</span><h3>로봇세, 찬성? 반대?</h3></header>
          <div className="rw-situation-box">
            <p>가까운 미래, 사람 대신 일하는 로봇이 공장에 많이 들어왔어.</p>
            <p>회사들이 사람 대신 로봇을 쓰기 시작했지.</p>
            <p>정부가 고민해. “로봇한테도 세금을 걷어야 할까?” 이걸 로봇세라고 해.</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 로봇세에 찬성하는 사람은 왜 찬성할까? 이유를 생각해봐.</p>
            <p><b>02</b> 반대하는 사람은 왜 반대할까? 이유를 생각해봐.</p>
            <p><b>03</b> 너는 찬성이야, 반대야? 하나를 고르고, 반대편 사람을 설득할 가장 강한 이유 1가지를 써봐.</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 찬성 이유 예시</h4>
            <p>로봇이 사람 일자리를 뺏으니 그 세금으로 일자리 잃은 사람을 도와야 한다. 로봇도 도로·전기를 쓰니 사용료를 내야 한다.</p>

            <h4>② 반대 이유 예시</h4>
            <p>세금 때문에 회사가 로봇을 안 만들면 기술 발전이 느려진다. 로봇은 기계일 뿐인데 세금을 매기는 건 이상하다.</p>

            <h4>③ 채점 포인트</h4>
            <p>★ 한쪽을 고르고, 반대편을 설득하는 강한 이유 1가지 “상”</p>
            <p>★★ 반대편이 할 말을 미리 예상하고 그걸 막는 논리면 “최상”</p>
            <p>▲ 그냥 “내 생각엔 찬성”만 있고 설득 논리 없으면 “하”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>네 반대편 사람이 가장 강하게 말할 것 같은 한마디는 뭘까? 거기에 뭐라고 답할 거야?</p>
            </div>
            </div>
          </details>
        </article>
      </section>

      <section className="rw-study-section">

        <article className="rw-problem-card">
          <header><span>문제4</span><h3>지하철에서 폰을 잃어버렸다</h3></header>
          <div className="rw-situation-box">
            <p>가족과 상하이 지하철 이동 중 폰이 없어짐. 소매치기 추정.</p>
            <p>낯선 역, 가족과 다른 칸을 타서 이미 떨어진 상태.</p>
            <p>보유 자원 : 교통카드 / 한국 돈 5,000원 / 지하철 노선도 1장 / 호텔 명함 1장 (주소 중국어로만 적혀 있음)</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 지금 쓸 수 있는 것과 쓸 수 없는 것 나누기</p>
            <table className="rw-table">
              <thead><tr><th>쓸 수 있는 것</th><th>어떻게 쓸 수 있나</th></tr></thead>
              <tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody>
            </table>
            <p><b>02</b> 도움을 요청할 수 있는 사람이나 장소 3가지 + 각각 어떻게 도움받을 수 있는지 쓰기</p>
            <p><b>03</b> 최종 결정 + “기준”이 드러나게 서술</p>
            <p className="rw-hint">💡 지금 가장 위험한 것이 뭔지, 가장 먼저 해결해야 할 것이 뭔지 생각해 봐.</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 자원 분류 예시</h4>
            <p>교통카드 → 지하철 탑승 /</p>
            <p>한국 돈 5,000원 → 중국에서 바로 사용 불가 (이걸 인식하면 ★) /</p>
            <p>지하철 노선도 → 현재 역·호텔 근처 역 파악 /</p>
            <p>호텔 명함 → 중국인에게 보여주며 도움 요청 (언어 장벽 해결 도구로 쓰면 ★)</p>

            <h4>② 도움 장소 예시</h4>
            <p>역무원(명함+몸짓) / 편의점 직원(영어 시도) / 호텔 카운터(명함 보여주고 전화 부탁)</p>

            <h4>③ 채점 포인트</h4>
            <p>★ 기준이 한 문장으로 드러남 (예: “가장 빨리 가족과 연락할 수 있는 방법을 기준으로”)</p>
            <p>“경찰에 신고한다” → 언어 소통 방법도 함께 써야 “상”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>“네가 고른 방법에서 가장 위험한 상황이 생긴다면 어떻게 될까?”</p>
              <p>“호텔 명함을 어떻게 쓸 수 있을지 더 생각해봤어?”</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제5</span><h3>소풍 장소를 결정해야 해</h3></header>
          <div className="rw-situation-box">
            <p>26명이 소풍 장소를 결정하려고 한다.</p>
            <p>의견 : 민준(에버랜드) / 서연(부산 해변) / 지호(근처 산)</p>
            <p>선생님 : “한 곳만 고를 수 있어. 네가 결정해 봐.”</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 비교 기준 3가지 직접 만들기</p>
            <p><b>02</b> 기준으로 아래 표 채우기 (○ △ ×)</p>
            <table className="rw-table">
              <thead><tr><th>기준</th><th>에버랜드</th><th>부산 해변</th><th>근처 산</th></tr></thead>
              <tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody>
            </table>
            <p><b>03</b> 최종 선택 + 친구들이 납득할 설득 문장 쓰기</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 기준 예시</h4>
            <p>비용, 이동 시간, 날씨 영향, 모두가 즐길 수 있는지, 안전</p>

            <h4>② 채점 포인트</h4>
            <p>★ ○△×가 기준에 일관되게 적용됨</p>
            <p>▲ 기준을 만들어 놓고 표에서 다른 판단을 하면 감점</p>

            <h4>③ 채점 포인트</h4>
            <p>★ “우리 반 전체가 즐길 수 있어야 한다”처럼 상대방 입장이 들어감</p>
            <p>▲ 나는 에버랜드가 좋아서”처럼 주관만 있으면 “하”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>네가 만든 기준 중에서 가장 중요한 것 하나만 고른다면 뭐야? 왜?</p>
              <p>반 친구 중 네 설득에 반대할 것 같은 친구는 누구야? 그 친구를 어떻게 설득할 거야?</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제6</span><h3>수학자라면 잔반 문제를 어떻게 해결할까?</h3></header>
          <div className="rw-situation-box">
            <p>급식 잔반 : 월요일 최다, 금요일 최소.</p>
            <p>영양 선생님 : “왜 그럴까? 어떻게 줄일 수 있을까?” → 수학자 시점으로 접근</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 필요한 자료(데이터) 3가지 이상 쓰기</p>
            <p><b>02</b> 자료 수집 방법을 순서대로 쓰기</p>
            <p><b>03</b> 잔반 줄이기 수학적 방법 제안</p>
            <p className="rw-hint">💡 평균, 비율, 그래프 중 하나 반드시 포함</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 자료 예시</h4>
            <p>요일별 잔반량, 그날 메뉴, 날씨, 체육 수업 여부, 학생 선호도 조사</p>
            <p>★ 잔반량에 영향을 주는 변수(메뉴, 날씨 등)까지 쓰면 “상”</p>
            <p>▲ 잔반량만 쓰면 “중”</p>

            <h4>② 예시 순서</h4>
            <p>① 1주일 요일별 잔반량 측정 → ② 그날 메뉴·날씨 기록 → ③ 표로 정리 → ④ 패턴 확인</p>

            <h4>③ 예시+채점 포인트</h4>
            <p>예: “월요일 메뉴를 선호도 1위 메뉴로 바꾼다. 잔반이 평균 대비 30% 줄 것으로 예상.”</p>
            <p>★ 비율·평균·그래프 중 하나+수치 있으면 “상”</p>
            <p>▲ “좋아하는 메뉴로 바꾼다”만 있으면 “중”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>자료를 모은 다음 어디서 패턴이 보였어?</p>
              <p>잔반을 줄이는 방법이 한 가지가 아닐 수 있어. 또 다른 방법은 없을까?</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제7</span><h3>학교 축제 매점 창업</h3></header>
          <div className="rw-situation-box">
            <p>우리 반이 학교 축제에서 매점을 운영한다.</p>
            <p>선생님 : “예산은 50,000원이야. 뭘 팔지, 얼마에 팔지 너희가 결정해.”</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 팔 물건 3가지 선택 + 개당 원가 + 몇 개 살지 결정. 합계 50,000원 이하.</p>
            <table className="rw-table">
              <thead><tr><th>물건</th><th>개당 원가</th><th>수량</th><th>소계</th></tr></thead>
              <tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><th>합계</th><td colSpan={3}></td></tr></tbody>
            </table>
            <p><b>02</b> 각 물건 판매가 결정 + 왜 그 가격인지 이유 쓰기</p>
            <p><b>03</b> 물건이 다 팔리면 얼마를 벌 수 있어? 계산하기</p>
            <p><b>04</b> 인기 없는 물건이 절반 남았어. 어떻게 할 거야? 이유도 쓰기</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 채점 포인트</h4>
            <p>★ 합계 50,000원 이하+상품 선택 이유 있음</p>

            <h4>② 채점 포인트</h4>
            <p>★ 원가보다 높게 팔아야 이익이 난다는 개념 이해+원가 대비 이유 있음</p>
            <p>▲ “1,000원에 팔겠다”만 있으면 “중”</p>

            <h4>③ 채점 포인트</h4>
            <p>총 수익 = (판매가-원가)×판매 개수. 계산 정확도 체크.</p>

            <h4>④ 채점 포인트</h4>
            <p>★ “가격을 낮춘다 / 묶음 판매한다”처럼 수학적 판단+이유 있음</p>
            <p>▲ “버린다 / 그냥 판다”만 있으면 “하”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>네가 설정한 판매가가 원가보다 얼마나 높아? 그 차이가 왜 중요해?</p>
              <p>남은 물건을 묶음으로 팔면 한 개씩 팔 때보다 뭐가 달라져?</p>
            </div>
            </div>
          </details>
        </article>

        <article className="rw-problem-card">
          <header><span>문제8</span><h3>우리 반 자리 배치</h3></header>
          <div className="rw-situation-box">
            <p>교실 : 한 줄에 3자리씩, 앞·중간·뒤 세 줄.</p>
            <p>조건 1 : 키 큰 아이 → 뒤쪽 /</p>
            <p>조건 2 : 사이 안 좋은 짝 → 분리 /</p>
            <p>조건 3 : 시력 나쁜 아이 → 앞쪽</p>
            <p>상황 : 지호(키 크고 시력 나쁨) / 민준·서연(사이 안 좋고 둘 다 시력 나쁨)</p>
          </div>
          <div className="rw-question-list">
            <p><b>01</b> 조건 1과 조건 3이 지호한테 동시에 만족될 수 있어? 왜 그런지 쓰기</p>
            <p><b>02</b> 민준·서연을 앞쪽에 앉히되 옆자리에 앉히지 않는 배치. 아래 표 이름 써넣기</p>
            <table className="rw-table">
              <thead><tr><th></th><th>왼쪽</th><th>가운데</th><th>오른쪽</th></tr></thead>
              <tbody><tr><th>앞줄</th><td></td><td></td><td></td></tr><tr><th>중간줄</th><td></td><td></td><td></td></tr><tr><th>뒷줄</th><td></td><td></td><td></td></tr></tbody>
            </table>
            <p><b>03</b> 조건이 충돌할 때 어떤 조건을 먼저 해결할 거야? 우선순위 기준 + 이유 쓰기</p>
          </div>

          <details className="rw-inline-answer">
            <summary>정답 및 해설 확인</summary>
            <div className="rw-inline-answer-body">
              <h4>① 예시 답안</h4>
            <p>지호는 키가 크니까 뒤에, 시력이 나쁘니까 앞에 앉아야 한다. 동시에 만족 불가능.</p>
            <p>★ “불가능하다”+두 조건 명시 → “상”</p>
            <p>▲ “불가능하다”만 → “중”</p>

            <h4>② 정답 예시</h4>
            <p>앞줄 왼쪽: 민준 / 앞줄 오른쪽: 서연 (가운데 한 칸 띄기)</p>
            <p>민준·서연이 앞줄에 있고 옆자리가 아니면 정답</p>

            <h4>③ 채점 포인트</h4>
            <p>★ 우선순위 기준+이유 명확 (예: “안전(시력)이 관계(사이) 문제보다 중요하다”)</p>
            <p>▲ 조건3을 먼저”만 쓰고 이유 없으면 “중”</p>

            <div className="rw-followup">
              <strong>채점 후 질문</strong>
              <p>지호를 중간줄에 앉히면 조건 1, 3이 둘 다 완전히 만족되진 않지만 절충은 돼. 그게 나을까, 한 조건만 완전히 지키는 게 나을까?</p>
              <p>조건이 충돌할 때 규칙이 정해져 있지 않으면 어떻게 결정해야 할까?</p>
            </div>
            </div>
          </details>
        </article>
      </section>
    </section>
  );
}
