# macite2014.github.io

주식회사 엠에이사이트 (로컬임팩트그룹 마사이트) 공식 홈페이지

- 배포 주소: https://macite2014.github.io/
- 정적 사이트 (빌드 도구·서버 불필요). `index.html` 하나와 `img/` 폴더로 동작합니다.

## 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 사이트 전체 (HTML·CSS·JS 한 파일). 해시 라우팅으로 5개 페이지 동작 |
| `img/` | 포트폴리오·로고·OG 이미지 |
| `favicon.png`, `apple-touch-icon.png` | 파비콘 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리 비활성화 |

## 페이지

- `#/` 홈
- `#/about` 회사소개
- `#/business` 사업분야
- `#/portfolio` 포트폴리오
- `#/contact` 문의

## 수정 방법

콘텐츠는 `index.html` 하단 `<script>` 안의 데이터 배열에 모여 있습니다.

- `DIVS` — 5대 사업부
- `WORKS` — 포트폴리오 항목 (이미지 파일명은 `img/` 안의 이름과 일치)
- `HISTORY` — 연혁
- `FACTS` — 회사개요 표
- `BIO` — 대표 약력

포트폴리오를 추가하려면 이미지를 `img/`에 넣고 `WORKS` 배열에 항목을 하나 추가하면 됩니다.

## 브랜드

로고 그린 `#3CA86C` 단일 주조색. 상세 규칙은 회사 브랜드 가이드라인(2026) 문서 참조.

- 본문: IBM Plex Sans KR
- 제목: 나눔명조

## 자체 도메인 연결

1. 저장소 루트에 `CNAME` 파일을 만들고 도메인만 한 줄 적기 (예: `masite.co.kr`)
2. 도메인 등록기관 DNS에서 A 레코드를 GitHub Pages IP로 설정
3. 저장소 Settings → Pages에서 도메인 확인 및 HTTPS 강제 체크
