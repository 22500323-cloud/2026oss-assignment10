1. 프로젝트 제목 : Habit tracker web app
2. 프로젝트 소개 : 일상 속에서 습관을 기록하고 관리하는 웹 사이트이다. 습관 추가, 달력, 통계, 진행률을 확인할 수 있는 기능들이 있다.
3. 선택 이유 : 일상 생활에서 습관 형성과 자기 관리가 중요하다고 생각하는 도중 React와 JavaScript를 활용한 프로젝트라 수업에서 배운 내용을 적용하기 좋다고 생각해서 선택하게 되었다.
4. 원본 GitHub URL 및 라이선스 : https://github.com/TheUnknown550/Habit-Tracker-Web-App.git
5. Installation: [Installation.png]
6. 주요 파일, 컴포넌트
- App.jsx : 전체 화면을 구성하고 주요 기능을 관리한다
- AddHabitForm.jsx : 새로운 습관을 추가하는 기능 
- HabitList.jsx : 등록한 습관 목록을 표시
- HabitItem.jsx : 각각의 습관 정보와 완료 표시
- ProgressBar.jsx : 습관을 완료한 갯수와 달성률 표시
- CalendarView.jsx : 날짜별 습관 기록 
- StatisticsDashboard.jsx : 습관 실천 통계
- DataExport.jsx : 데이터 내보내기
- useLocalStorage.jsx : 브라우저 LocalSrotage에 데이터를 저장하고 불러오기
- index.css : 전체적인 스타일과 움직이는 효과
- main.jsx : React 앱을 HTML 화면에 연결
7. 수정한 3가지 내용
- text : 한국어 문구 변경
- style : 파랑 게열 -> 민트, 그린 계열 배경 색상 변경
- UI/Data : 습관 진행 현황과 달성률을 한 눈에 확인할 수 있도록 변경함
8. Vercel URL : https://2026oss-assignment10.vercel.app/
9. 새롭게 배운 내용 3가지 
- 하나의 화면을 여러 컴포넌트로 나누어 구성하는 방법과 컴포넌트 사이에 데이터를 전달하는 방법
- LocalStorage를 활용하면 서버 없이 데이터를 저장하고 새로고침한 후에도 데이터를 유지 할 수 있다
- 배경색, 글자색, 버튼 디자인을 수정하고 전체적인 화면의 분위기를 바꾸는 방법
10. 어려웠던 점과 해결 방법 : 달성률 대시보드를 수정하는 과정에서 remaining is not defined 오류가 발생했다. 원인을 살펴보니 남은 습관의 개수를 계산하는 변수를 선언하지 않았었다. 전체 습관 개수에서 완료한 습관의 개수를 빼서 remaining 변수를 선언하였다
11. AI활용 내용 및 느낀 점 : React 코드의 구조와 기능을 이해하는 데, 오류 메시지의 원인을 파악하고 해결법을 찾는 데, 기존 css와 Tailwind css 코드를 분석하고 원하는 디자인인 민트와 그린 계열로 변경하는 과정에서 활용하였다.
AI를 활용하면서 원하는 디자인을 구현하는데에 쉽게 도움을 받을 수 있지만 코드를 직접 확인하고 실행하면서 결과를 이해하는 과정이 중요하다는것을 깨달았다.