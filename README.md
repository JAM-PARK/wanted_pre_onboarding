# 원티드 프리온보딩 코스
- 구현한 방법과 이유에 대한 간략한 내용
  + Toggle, Modal, Tab, Tag : `useState` 사용해서 상태 관리
  + AutoComplete, ClickToEdit : `useEffect` 추가 사용 => 현재 입력 또는 수정 상태인지 확인
  + ClickToEdit : `useRef` 추가 사용 => 수정시 `<input>` 포커스
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  + `Tag.scss`에서 태그의 색상을 규칙적으로 변경하는데 시행착오를 겪었습니다.
  + [참고한 링크 : SCSS For loop](http://megaton111.cafe24.com/2017/02/08/scss-nth-child-loop-%EB%B0%98%EB%B3%B5%ED%95%B4%EC%84%9C-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0/)
  + `Sass(.scss)` 문법을 학습하고 적용하는데, `styled-component`에서 사용 가능한 `props` 문법 기능이 없어 아쉬웠습니다.
  + `styled-component`의 `props`기능은 `AutoComplete.js`에서 상태에 따른 조건 분기로 클래스를 적용해서 해결했습니다.
- 자세한 실행 방법
  + git clone
  + cd wanted_pre_onboarding
  + cd custom-component
  + npm install
  + npm start
