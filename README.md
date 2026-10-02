# chatgpt-web

**Website Hub** 정적 페이지입니다. 이름과 달리 ChatGPT 연동 코드는 없습니다. 빌드 도구 없이 HTML/CSS/JS만 사용합니다.

## 기능

- 카테고리 필터: Education / Games / History (`showCategory`)
- 제목 검색: 입력 즉시 카드 필터링 (`searchLinks`)
- List 보기: 카드 제목을 목록으로 표시하고, 항목을 클릭하면 `alert`로 제목·설명 표시 (`showList`, `showDetails`)
- 페이지 제목 클릭 시 전체 보기로 복귀

## 파일

| 파일 | 설명 |
|---|---|
| `index.html` | 레이아웃과 링크 카드 3개 (예시 데이터) |
| `script.js` | 필터·검색·목록 로직 |
| `styles.css` | 스타일 (약 80줄) |

## 실행

`index.html`을 브라우저로 열거나:

```bash
python3 -m http.server 8000   # http://localhost:8000/
```

## 참고

- 카드 내용은 하드코딩된 예시입니다. 실제 링크는 `index.html`에 직접 추가해야 합니다.
- 같은 허브의 초기 버전(List 보기 없음)이 [`zidudu.github.io`](https://github.com/zidudu/zidudu.github.io)에 있습니다.
- `showDetails`는 TODO 상태로 `alert`만 사용합니다.
