# Popol

React + Vite 기반의 개인 포트폴리오 사이트입니다.

## 개발 환경
- Node.js 20 이상 권장 (GitHub Actions 빌드 환경과 동일)
- 패키지 설치: `npm install`
- 개발 서버: `npm run dev`
- 정적 빌드: `npm run build` → `dist/` 생성
- 빌드 미리보기: `npm run preview`
- 코드 품질 검사: `npm run lint`

## 배포
- `.github/workflows/deploy.yml` 워크플로가 `main` 브랜치에 푸시되거나 수동 실행 시 프로젝트를 빌드하고 GitHub Pages로 배포합니다.
- GitHub Pages 설정에서 **GitHub Actions**를 소스로 선택해야 합니다.
- 워크플로는 `dist/` 디렉터리를 Pages 아티팩트로 업로드한 뒤 `actions/deploy-pages`로 게시합니다.

## 기타
- 빌드 산출물(`dist/`)과 종속성(`node_modules/`) 등은 `.gitignore`로 버전 관리에서 제외되어 있습니다.
