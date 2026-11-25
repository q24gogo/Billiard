# 3Q 당구 코칭

폰에서 바로 보는 3쿠션 경기 리플레이와 샷 코칭 페이지입니다.

- 목록: https://q24gogo.github.io/Billiard/
- 게임리뷰(4417): https://q24gogo.github.io/Billiard/4417-replay.html
- 게임코칭(4417): https://q24gogo.github.io/Billiard/4417-coach.html

## 처음 한 번: GitHub Pages 켜기
1. 이 폴더의 파일을 저장소 맨 위(루트)에 올립니다. `.nojekyll`도 함께 올리세요.
2. 저장소에서 **Settings → Pages**로 갑니다.
3. **Source: Deploy from a branch**, **Branch: main / (root)** → Save.
4. 1~2분 뒤 위 주소가 열립니다.

## 새 경기 추가
1. `4501-replay.html`, `4501-coach.html`처럼 **경기번호-종류.html** 이름으로 올립니다.
2. 두 파일의 `</head>` 바로 앞에 아래 줄을 넣으면 홈 화면 아이콘과 오프라인 보기가 됩니다.
   - 리뷰: `<link rel="icon" type="image/png" href="./review-192.png"><link rel="apple-touch-icon" href="./review-180.png"><meta name="apple-mobile-web-app-title" content="게임리뷰">`
   - 코칭: `<link rel="icon" type="image/png" href="./coach-192.png"><link rel="apple-touch-icon" href="./coach-180.png"><meta name="apple-mobile-web-app-title" content="게임코칭">`
   - 공통: `<script>if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));</script>`
3. `index.html` 안의 `GAMES` 목록 맨 위에 한 줄을 추가합니다.

## 파일
| 파일 | 역할 |
|---|---|
| index.html | 경기 목록, 링크 보내기, 홈 화면 추가 안내 |
| 4417-replay.html / 4417-coach.html | 경기 페이지 |
| coach-*.png / review-*.png | 홈 화면 아이콘 |
| manifest.webmanifest | 목록 페이지를 앱처럼 설치 |
| sw.js | 한 번 본 페이지를 인터넷이 약할 때도 열리게 저장 |
| .nojekyll | GitHub Pages가 파일을 그대로 올리게 함 |
