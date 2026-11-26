# Q24 당구회원 프리미엄 서비스 (Demo)

Q24-가브리엘당구클럽 회원용 게임 리뷰 · 게임 코칭 페이지입니다.

- 첫 화면: https://q24gogo.github.io/Billiard/Demo/
- 게임 리뷰(4417): https://q24gogo.github.io/Billiard/Demo/4417-replay.html
- 게임 코칭(4417): https://q24gogo.github.io/Billiard/Demo/4417-coach.html

## 올리는 위치
저장소 `q24gogo/Billiard` 맨 위에 이 `Demo` 폴더를 통째로 올립니다.
(처음 한 번: Settings → Pages → Branch `main` / `(root)` → Save)

## 새 경기 올리기
1. 파일 이름을 **경기번호-종류.html**로 맞춰 `Demo` 폴더에 올립니다.
   예) `4501-replay.html`(게임 리뷰), `4501-coach.html`(게임 코칭)
2. 새 파일의 `</head>` 바로 앞에 4417 파일과 같은 줄(아이콘 · 상단 타이틀 스타일 · sw.js 등록)을 넣고,
   `<body>` 바로 뒤에 4417 파일의 `<header class="q24h …">…</header>` 한 줄을 그대로 복사해 넣습니다.
3. 3Q 스튜디오에서 만든 파일에는 **가로보기**(폰을 가로로 돌리면 왼쪽 테이블 · 오른쪽 버튼, `⛶ 전체 영상`)가 이미 들어 있으니 따로 넣을 것은 없습니다.
4. `index.html` 안의 목록에 한 줄씩 추가합니다. 날짜 순서는 자동으로 정렬됩니다.

```js
const REVIEWS=[
 {file:'4501-replay.html', date:'2026-12-01 20:30', p1:'선수A', s1:26, p2:'선수B', s2:18},
 {file:'4417-replay.html', date:'2026-11-24 21:45', p1:'구름달', s1:26, p2:'달빛사냥', s2:5},
];
const COACHES=[
 {file:'4501-coach.html', date:'2026-12-01 20:30', player:'선수B', opp:'선수A', score:'18 : 26', res:'L', shots:20},
 {file:'4417-coach.html', date:'2026-11-24 21:45', player:'달빛사냥', opp:'구름달', score:'5 : 26', res:'L', shots:28},
];
```
`res`는 승 `W`, 패 `L`, 무 `D`. 올린 지 7일 안의 항목에는 **NEW** 표시가 붙습니다.

## 파일
| 파일 | 역할 |
|---|---|
| index.html | 첫 화면 (게임 리뷰 목록 · 게임 코칭 목록 · 홈 화면 추가 안내) |
| 4417-replay.html / 4417-coach.html | 경기 페이지 (위쪽 "◀ 이전"으로 첫 화면 복귀) |
| premium-*.png | 첫 화면 · 홈 화면 설치 아이콘 |
| review-*.png / coach-*.png | 게임 리뷰 · 게임 코칭 아이콘 |
| manifest.webmanifest | 홈 화면 설치 정보 |
| sw.js | 한 번 본 페이지를 인터넷이 약할 때도 열리게 저장 |
