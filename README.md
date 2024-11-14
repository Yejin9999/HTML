# HTML
## HTML 기초
* `title` 제목태그
* `meta` 문서정보태그
* `markup` HTML을 의미적으로 작성한다 == 마크업
* `Debugging` HTML 포함 프로그래밍 언어들의 오류를 검사하여 정상코드로 만든다.
## VS code 주요 단축키
* `Ctrl+/` 한 줄 주석
* `Shift + Alt + A` 블록 주석
* `Shift + Alt + 방향키` 해당 방향으로 복제
## HTML 기본 작성법
* `<시작태그></닫기태그>`
* `<시작태그 속성="값" 속성="값"></닫기태그>`
* `<빈태그>`
## 타이틀 작성법
* 웹페이지 특성에 따라 타이틀을 작성해야 한다.
* 메인페이지일 경우 -> 사이트명
* 서브페이지일 경우 -> 페이지명 | 사이트명
## HTML 공부 시 주의사항
* HTML 의미적 구조 , CSS 디자인 역할에 따라 HTML 공부 시 시각적 형태로 공부해서 안되고 의미적인 뜻으로 공부해야 한다.
예) H1은 글자가 크고 굵다 (X) H1은 대제목이라는 뜻으로 가장 중요한 역할을 하는 대상에 적용한다 (O)
## HTML 문장 태그
* `h1~h6` 제목태그(block), 1-3 레벨 위주로 사용하는 것이 좋다.
* `p` 단락태그(한 단락씩 묶어준다)(block)
* `br` 줄바꿈태그(블록 태그 내에서만 사용해야 한다)(inline)
* `strong` 경고 등 심각성이 있는 강조 표시태그(블록 내 사용,제목에는 사용안함)(inline)
* `em` 문맥 내 강조표시태그(블록 내 사용, 제목에는 사용안함)(inline)
* `blockquote` 긴 인용문(단락을 통으로 인용해왔을때)(block)
* `q` 짧은 인용문(단락 내에서 부분적으로 인용해왔을때)(inline)
* `blockquote , q의 cite 속성`
* `sup` 아래첨자, `sub` 위첨자
* `code` 다양한 명령어를 화면에 표시할때 (기호그대로 나타나게 하고 싶을때)
* `mark` 형광펜으로 중요표시 ()
* `&lt;` , `&gt;`꺽새만들기 (&->시작 ;->끝) , `&copy;` 저작권마크
* `hr` 사이트 각 영역을 구분하고 싶을때 사용하는 수평선
* `address` 자사 웹사이트의 연락처,소개,고객센터 정보만 담는다(타사 정보는 안됨)
* `del`삭제텍스트 , `s`교체텍스트
## 하이퍼링크태그 a
* `<a href="#" target="_blank"></a>`
* `target="_blank"` 속성은 링크를 새창으로 띄울때만 작성한다.
* 새 창의 기준은 외부 사이트로 이동 시 결정된다.
* 예) 네이버 메인-> 네이버 카페 이동 시는 같은 페이지에서 변경
* 예) 네이버 메인-> 구글 이동 시는 다른 페이지이므로 새창으로 변경
## a 태그 작성 순서
1. `<a href=""></a>`
2. `<a href="">클릭대상</a>`
3. `<a href="연결경로">클릭대상</a>`
## div 태그 작성 순서
1. `<div></div>` 
2. `<div>그룹대상</div>` 
3. `<div class="이름">그룹대상</div>`
* 상황에 따라 2번 3번 순서가 서로 바뀔 수 있음.
## 특정 위치로 바로가기 링크
* 다른 웹페이지가 아닌 같은 페이지 내에 다른 위치로 스크롤 되는 바로가기 기능
### 바로가기링크 제작 순서
1. 클릭대상, 이동대상 먼저 제작하기
2. 각 이동대상의 첫번째 요소에 id 설정하기
3. 위 2번으로 이동 시 클릭해야하는 대상에 href 속성으로 #아이디명 입력하기
## 파비콘 복붙용
*`<link rel="shortcut icon" href="이미지경로작성위치" type="image/x-icon">
<link rel="icon" href="이미지경로작성위치" type="image/x-icon">`
