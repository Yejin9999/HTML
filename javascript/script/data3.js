//객체공부
//변수생성키워드 변수명={속성:값, 속성:값, 속성:값};
//변수명은 객체명으로도 부를 수 있다.
//값이 문자인 경우 따옴표를 묶고 숫자 또는 다른 데이터타입(null,undefined ..)인 경우 값만 작성한다.
//객체값(속성:값에서 값)을 호출할 때는 변수명.속성을 작성한다.
//객체 선언 시 속성명은 대입하는 값과 동일한 의미를 가지는 속성으로 의미있게 지정한다.
//객체명.속성;
let cat1 = {
    age:1,
    name:'나비',
    color:'검정',
    charact:'착하고 애교많음'
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.color);
//나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color}고양이이고 ${cat1.age}살이에요.`)
//변수명은 항상 다르게 선언해야하고 대입되는 객체 속성은 중복이 가능하다.
let cat2 = {
    color:['검정','흰색','노랑'], //2개 이상 값 설정시 값으로 배열 활용
    age:2,
    name:'삼색이'
};
console.log(cat2);
console.log(cat2.color[0], cat2.color[1], cat2.color[2]);
console.log(cat2.color.length);//객체.속성.속성;
//속성이나 메소드 선언 시 반드시 앞에선 객체를 먼저 선언한다.
//객체 뒤 속성이 배열인 경우는 배열의 속성(length)를 연결해서 작성할 수 있다.
//맨 앞에 객체가 선언됐다면 필요한 경우 속성.속성.속성을 속성끼리 연결할 수 있다.
//객체 선언
//고양이 종은 코리안 숏헤어, 털은 흰색과 검은색, 나이는 1살, 성별은 암컷,입양전,중성화전,건강상태 양호에 대한 정보로 객체 생성하기
let cat3 = {
    species:'코리안 숏헤어',
    color:['흰색','검은색'],
    age:1,
    gender:'암컷',
    adoptionState:'전', //입양상태
    neutralizationState:'전', //중성화상태
    conditionState:'양호' //건강상태
};
console.log(cat3);
console.log(cat3.gender);
console.log(cat3.color[1]);
console.log(cat3.color[0]);
console.log(cat3.color.length);
console.log(cat3.adoptionState, cat3.neutralizationState, cat3.conditionState);
//====================================================================================================
//cgv 영화페이지 조사 기준 '하얼빈' 반복되는 데이터 조사 후 객체 생성하기
//const movie = [{속성:값, 속성:값, ...},{속성:값, 속성:값, ...},{속성:값, 속성:값, ...},...];
const movie = [{
    nameKr:'하얼빈',
    nameEng:'HARBIN',
    releaseDate:'2024.12.24',
    reservationRate:'21.5%',
    eggPoint:'89%',
    director:'우민호',
    actor:['현빈','박정민','조우진','전여빈','박훈','유재명','릴리 프랭키','이동욱'],
    genre:['드라마','액션'],
    ageLimit:'15세이상',
    screeningTime:114,
    country:'한국',
    poster:'./images/harbin_poster.jpg',
    story:'1908년 함경북도 신아산에서안중근이 이끄는 독립군들은 일본군과의 전투에서큰 승리를 거둔다.'
},{
    nameKr:'페라리',
    nameEng:'FERRARI',
    releaseDate:'2025.01.08',
    reservationRate:'12.6%',
    eggPoint:'99%',
    director:'마이클 만',
    actor:['아담 드라이버', '페넬로페 크루즈', '쉐일린 우들리'],
    genre:['드라마','액션'],
    ageLimit:'15세이상',
    screeningTime:131,
    country:['미국','영국','이탈리아'],
    poster:'./images/ferrari_poster.jpg',
    story:'1957년, 전세계를 뒤흔든 페라리의 충격 실화가 드러난다!'
}];
//===================================================================================================
//배열과 객체 함께 사용하기
//고양이 보호소 정보
//봄이,코숏,1살,남,갈색,흰색,검은색, 중성화 유
//여름이,코숏,2살,여.검은색,흰색,중성화 무
//가을이,러시안블루,1살,남,회색,중성화 유
//겨울이,페르시안,2살,남,흰색,노랑,중성화 무
let catShelter = [{
    name:'봄이',
    species:'코숏',
    age:1,
    gener:'수컷',
    color:['갈색','흰색','검은색'],
    neutralizationState:'유'
},{
    name:'여름이',
    species:'코숏',
    age:2,
    gener:'암컷',
    color:['검은색','흰색'],
    neutralizationState:'무'
},{
    name:'가을이',
    species:'러시안블루',
    age:1,
    gener:'수컷',
    color:['회색'],
    neutralizationState:'유'
},{
    name:'겨울이',
    species:'페르시안',
    age:2,
    gener:'수컷',
    color:['흰색','노랑'],
    neutralizationState:'무'
}];
console.log(catShelter);
console.log(catShelter[2].name);
console.log(catShelter[2].color[0]);
console.log(catShelter[0].name);
console.log(catShelter[0].color[0],catShelter[0].color[1],catShelter[0].color[2]);
console.log(catShelter[3].species);
console.log(catShelter[0].color.length);
//==================================================================================================
//window 객체 활용한 메서드 종류
/* let msg = window.alert('제작중 입니다.')
let msg2 = window.prompt('언제완성되나요?')
let msg3 = window.confirm('확인되었습니다.')
console.log(msg);
console.log(msg2);
console.log(msg3); */ //확인 누르면 true 취소 누르면 false
//let msg_print = window.print();
//confirm() -> print() 순서로 confirm메소드의 '확인'클릭 시 print가 실행되게 만드는 순서로 인쇄기능을 제작한다.
//확인 클릭시 ->이벤트 (사용자 동작이 이벤트다.)
//클릭시 실행된다->메소드 (사용자 동작으로 인해 벌어지는 결과가 메소드다.)
//====================================================================================================
function gg(){
    console.log('test')
    window.location.href ='http://google.com';
    /* window.location.replace('http://google.com'); */ //뒤로가기가 안되서 불편함
    //loacation은 속성
}
window.document.write('test');
window.document.body.style = 'background-color:pink;' 
//자바스크립트에서 적용하는 css(style)은 태그의 인라인 스타일 구조로 적용되기 때문에 가장 우선순위가 됨 
//window --> 최상위 개념(워낙 최상위개념이라 생략이 가능한거라고 인식하기!) 
//prompt('질문'); => window.prompt('질문'); 
//window 객체명이 기본값이라 생략한 상태이므로 기본내장으로 매소드 혼자만 있는 상태가 동작된다고 생각하면 절대 안됨!
//document.body.style
//document == 웹브라우저 화면
//body == 웹브라우저 화면 내에서 제어하고 싶은 객체대상(속성)
//style == body에 적용하고 싶은 추가 속성, 속성 뒤는 대입연산자(=)로 값을 대입한다.