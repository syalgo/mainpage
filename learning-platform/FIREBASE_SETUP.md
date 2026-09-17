# Firebase 연결 체크리스트

코드는 이미 `회원가입 → 로그인 → 승인 대기 → 관리자 승인 → 과정별 권한 검사` 흐름으로 구성되어 있습니다.
Firebase 프로젝트와 Vercel 환경변수만 연결하면 실제 인증이 활성화됩니다.

## 1. Firebase 프로젝트 만들기
1. Firebase Console에서 새 프로젝트 생성
2. Web App 추가
3. Authentication → Sign-in method → Email/Password 활성화
4. Firestore Database 생성
5. Firestore Rules에 저장소의 `firestore.rules` 내용 적용

## 2. Web App 설정값
Firebase Web App 설정에서 다음 값을 Vercel Environment Variables에 등록합니다.

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

이 값들은 Firebase 웹 클라이언트 설정값이며 브라우저에서 사용됩니다.

## 3. Admin SDK 서비스 계정
Firebase Console → Project settings → Service accounts에서 새 비공개 키를 발급한 뒤 다음 값만 서버 환경변수로 등록합니다.

- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY`

비공개 키는 GitHub에 올리지 않습니다.

## 4. 최초 관리자 지정
Vercel에 `ADMIN_EMAIL`을 관리자 본인 이메일로 설정합니다.
해당 이메일로 회원가입/로그인하면 서버가 자동으로 `admin: true`, `approved: true`로 보정합니다.

## 5. 재배포
환경변수 저장 후 Vercel에서 Production을 Redeploy 합니다.

## 동작 흐름
1. 학생이 이름/이메일/비밀번호로 회원가입
2. 서버가 사용자 문서를 `approved: false`로 생성
3. 학생 로그인 시 `/account`에서 승인대기 상태 확인
4. 관리자가 `/admin`에서 승인 및 과정별 권한 부여
5. `/materials`, `/specialized`, `/koi`는 서버에서 세션과 권한을 확인한 뒤에만 렌더링

> 실제 교재 PDF/이미지는 public GitHub 경로에 두지 말고, 이후 보호된 Storage 경로로 연결합니다.
