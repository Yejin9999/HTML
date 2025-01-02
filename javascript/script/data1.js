// =========변수 복습=========================
var a = 2025; //숫자데이터
var b ="자바스크립트"; //문자데이터
var c; //undefined 값이 정의되지 않음(대입값이 존재하지 않음)
//대입했는데도 undefined가 나오는 경우는 뭔가 오류가 있다는 뜻이니 다시 체크해보기!
//console.log();  console -> 객체  log() -> 메소드
console.log(a,b,c);
console.log(a+1); //2026 ,  숫자를 가진 변수 + 숫자데이터
console.log('a'+1); //a1  a가 '' 안에 들어가니까 문자데이터가 된거임
console.log(b+' 공부'); // 자바스크립트 공부 , 문자를 가진 변수 + 문자데이터
console.log(a+c); // 숫자를 가진 변수 + 정의되지 않은 변수 = NaN (not a number)
console.log(a+b); // 숫자를 가진 변수 + 문자를 가진 변수 = 문자 데이터 (숫자변수도 문자변수처리가 되는거)
c = 1; //자바스크립트는 무조건 절차순서이기때문에 여기서 c에 1을 대입했어도 위에 값들은 변하지 않고 이다음부터 적용되는거임
console.log(a+c); //숫자변수 + 숫자변수 = 숫자
console.log(a-c); //숫자변수 - 숫자변수 = 숫자
console.log('-----------------------------------------------------------');
//함수 생성 문법 function 함수명() {실행식;} 
//복잡한 실행식을 함수에 넣어놓고 함수를 다양한 기능(버튼을 눌렀을때 등등)에서 호출하여 사용한다.
function abcPlus() {
    console.log(a+b+c);
}
// 매소드() 공부
/* var d = window.prompt('1+1은?');
console.log(d);  */
//prompt 질문응답창 window창에 뜨니까 console 대신 window 로 써야한다.
//사용자가 입력한 값을 그대로 출력해준다. 그래서 오직 테스트용으로 쓰는 메소드이다.

//prompt와 function 함수 활용
//1. 변수생성 age
//2. 함수 생성 ageFunc
//3. 버튼 클릭 시 2번 함수를 호출 onclick="ageFunc()"

var age; //undefined 나이를 정의하지 않은 상태로 시작
function ageFunc() {
    age = window.prompt('올해 몇살이세요?');
    console.log(age+'살입니다.');
    console.log(typeof age); //함수를 호출해야 보임
}
//1. 변수생성 mbti , bloodtype
//2. 함수 생성 featureFunc
//3. 버튼 클릭 시 2번 함수를 호출 onclick="featureFunc"
var mbti;
var bloodtype;
function featureFunc(){
    mbti = window.prompt('mbti가 무엇입니까?')
    bloodtype = window.prompt('혈액형은 무엇입니까?')/* 
    console.log(mbti+'입니다.')
    console.log(bloodtype+'형 입니다.') */
    console.log('mbti는' , mbti, '이고' , '혈액형은', bloodtype , '형입니다.')
    console.log(typeof mbti);
    console.log(typeof bloodtype);
    //console.log(typeof (mbti, blood))
    //console.log('mbti의 데이터타입은', typeof mbti);
}
//변수 선언 var , let , const
var a; // 상단 a가 존재하는 상태로 중복 a를 만듬
console.log(a); //중복 문제를 발견 못하고 이미 존재하는 값으로 나타남
/* let b; */ // let 중복문제를 바로 발견함
console.log(b); 
// 상수는 선언과 동시에 변하지 않는 값을 바로 대입해야 한다.
const e = 2024 ;
console.log(e);
console.log('==========================================================');
// a = 2025 b = 자바스크립트 c = 1
console.log(typeof a); //a 변수의 데이터타입 확인 number(숫자)
console.log(typeof b); //b 변수의 데이터타입 확인 string(문자)
console.log(typeof(c)); //c 변수의 데이터타입 확인 
console.log(typeof(a+b)); //a와 b변수를 더한 결과 데이터타입 확인 숫자+문자= string(문자) 
console.log(typeof(a+c)); //a와 c변수를 더한 결과 데이터타입 확인 숫자+숫자= number(숫자)
console.log('===================특수데이터연습===========================');
let f;
let g;
console.log(typeof(f , g)); //undefined
f = '';
console.log(typeof (f)); //string 문자
f ='아이디를 입력하세요';
console.log(typeof (f)); //string 문자
f = null; //f 변수의 값을 비운다. 
//문자 데이터를 초기화하는 경우는 null 보다 '' 빈문자데이터를 많이 활용한다.
console.log(typeof (f)); //object 변수라는 객체를 인식
g = 100; //숫자단위가 커져도 ,콤마 쓰면 문자가 되기때문에 숫자만 써야함
console.log(typeof (g)); //number
g = null; 
//숫자데이터 특징이 사라지고 object만 남는다.
console.log(typeof (g)); //object
g= 0;
//숫자데이터는 유지한 상태로 0 초기화 한다.
console.log(typeof (g)); //number
console.log('=======================템플릿문자열============================');
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
//오늘 총 지출액은 ?원입니다.
console.log(`오늘 총 지출액은 ${total}원입니다.`);
// 구구단 출력하기 
/* 2단 구구단 출력하기 ex) 2x1=2
let dan = 2;
console.log(`${dan}x1=${dan * 1}`);
console.log(`${dan}x2=${dan * 2}`);
console.log(`${dan}x3=${dan * 3}`);
console.log(`${dan}x4=${dan * 4}`);
console.log(`${dan}x5=${dan * 5}`);
console.log(`${dan}x6=${dan * 6}`);
console.log(`${dan}x7=${dan * 7}`);
console.log(`${dan}x8=${dan * 8}`);
console.log(`${dan}x9=${dan * 9}`); */
// 구구단 버튼 눌렀을때 출력하기
let dan;
function dan99() {
    dan= window.prompt ('구구단 몇단이 궁금하세요?');
    console.log(`${dan}x1=${dan * 1}`);
    console.log(`${dan}x2=${dan * 2}`);
    console.log(`${dan}x3=${dan * 3}`);
    console.log(`${dan}x4=${dan * 4}`);
    console.log(`${dan}x5=${dan * 5}`);
    console.log(`${dan}x6=${dan * 6}`);
    console.log(`${dan}x7=${dan * 7}`);
    console.log(`${dan}x8=${dan * 8}`);
    console.log(`${dan}x9=${dan * 9}`);
}