# 세영 학습 플랫폼 - 기본 골격

현재 단계는 Vercel/Next.js 전환을 위한 화면 및 라우팅 기본 구조입니다.

## 포함된 메뉴
- `/` 공개 메인페이지
- `/login` 로그인 UI
- `/materials` 기본 교재
- `/specialized` 특성화고 대비반
- `/koi` 정보올림피아드 대비반
- `/admin` 관리자 페이지 미리보기

## 다음 단계
1. Firebase Authentication 이메일/비밀번호 로그인 연결
2. Firestore `users` 문서에 `approved`, `basic`, `specialized`, `koi`, `admin` 권한 저장
3. 관리자 화면에서 승인/권한 변경 기능 구현
4. 서버 측 권한 검사 추가
5. Firebase Storage 또는 보호된 스토리지에 실제 교재 저장
6. Vercel 프로젝트의 Root Directory를 `learning-platform`으로 지정해 배포

> 실제 학생 데이터나 교재 파일은 GitHub public 저장소에 저장하지 않습니다.
