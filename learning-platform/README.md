# 세영 학습 플랫폼

Vercel + Next.js + Firebase 기반의 승인형 학습 사이트입니다.

## 메뉴
- `/` 공개 메인페이지
- `/login` 이메일 로그인 / 회원가입
- `/account` 내 승인 상태와 과정 권한 확인
- `/materials` 기본 교재
- `/specialized` 특성화고 대비반
- `/koi` 정보올림피아드 대비반
- `/admin` 관리자 전용 승인 / 과정별 권한 관리

## 인증 구조
1. Firebase Authentication 이메일/비밀번호 인증
2. 로그인 직후 Firebase ID Token을 서버의 `/api/auth/session`으로 전송
3. 서버가 Firebase Admin SDK로 토큰을 검증하고 HTTP-only 세션 쿠키 발급
4. 제한 페이지는 서버에서 세션과 Firestore의 승인/권한을 확인
5. 관리자는 `/admin`에서 학생별 `approved`, `basic`, `specialized`, `koi`를 변경

## Firebase 연결
`FIREBASE_SETUP.md`와 `.env.example`을 참고하세요.

> 실제 학생 데이터와 교재 원본 파일은 public GitHub 저장소에 저장하지 않습니다.
