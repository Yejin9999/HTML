//논리데이터 확인 true or false
//논리데이터(boolean)을 다른 숫자데이터와 연결하면 1,0으로 처리되서 계산된다.
//true (1)
//false (0)
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(true+10); //11
console.log(typeof(false+5));//number false+5=5니까

//==========불린함수활용 falsy or truthy 값 구분
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(0)); //false
console.log(Boolean('')); //false 
//====여기까지 모두 flasy값
console.log(Boolean('JS'));//true
console.log(Boolean(234));//true
console.log(Boolean(-234));//true
console.log(Boolean({}));//true
console.log(Boolean([]));//true
//====여기까지 모두 truthy값

//비교연산자
//1. 일치(동등)연산자 : 좌우 값이 같은가? 같으면 참 다르면 거짓
console.log('4'== 4); //true
console.log('4'=== 4); //false
console.log('4' === '4'); //true // === 엄격한 비교가 더 정확하게 비교가 가능해서 더 많이쓰이기도함
//2.불일치(부등)연산자 : 좌우 값이 다른가? 다르면 참 같으면 거짓
console.log(10 != '10'); //false
console.log(10 !== '10');//true
console.log(10 !== 10); //false
//3.대소비교연산자 : 작다,크다,크거나같다,작거나같다
let x = 5;
let y = 7;
console.log(x < y); //true
console.log(x > y); //false
console.log(x <= y); //true
console.log(x >= y); //false
console.log(x === y); //false
console.log(5 == 5); //true
console.log(x == 5); //true
console.log('===========================================================================');
//논리연산자 AND(&&) OR (||) NOT(!)
function print(value){
    const message = value || 'web';
    return console.log(message);
}
print(1); 
//&&인경우 web(둘다 참이니까 마지막의 참을 결과로)
//||인경우 1 (둘중에 하나만 참이여도 되고 1이 참 중 먼저니까)
print(0);
//&&인경우 0 (0이 거짓이니까)
//||인경우 (0은 거짓이고 web이 참이니까 결과는 web)
print([]);
//&&인경우web(둘다 참이니까 마지막의 참을 결과로)
//||인경우[](둘중에 하나만 참이여도 되고 []이 참 중 먼저니까)
//매개변수=value 
//함수호출할때마다 매개변수에 전달하겠다.
//전달받은값과 web을 비교하여 논리결과를 message에 

function bool(value2){//함수(집) 내에서 생성한 매개변수(애완동물)는 이름중복가능 =>함수명은 달라야함
    const message = !value2; //함수(집) 내에서 생성한 지역변수(애완동물)는 이름중복가능
    return console.log(message);
}
bool(1); //1 은 참이니까 반대로 false
bool(0); //0 은 거짓이니까 반대로 true
bool([]); //[]은 참이니까 반대로 false
bool(''); //''은 거짓이니까 반대로 true
bool('bool'); //'bool'은 참이니까 반대로 false
console.log('=====================================================================');
let a = 5;
let b = a+10;
let total = a > b ? 'a는 b보다 크다':'a는 b보다 작다';
console.log(total); // a는 b보다 작다

//나이에 따라 성인/미성년자를 구분하는 JS
/* let age = prompt('몇살인가요?');
//사용자가 대답한 값에 따라서 '성인' , '미성년자' 콘솔 출력 18세 이상 기준
total = age >= 18 ? '성인':'미성년자';
console.log(total); */

//==========================================================================
//1. 'textarea'사용자가 리뷰작성
//2. 'reviewBtn'리뷰 등록하기 버튼 클릭
//3. 'result'(리뷰 50자 이상인 경우) '등록완료되었습니다.' 팝업출력
//4. (리뷰 50자 미만인 경우) '50자 이상 작성부탁드립니다.' 팝업출력
const textarea = document.querySelector('#review');
const reviewBtn = document.querySelector('#reviewBtn');
let result = '';
console.log(textarea,reviewBtn,result);

reviewBtn.addEventListener('click',()=>{
//textarea글자 수 인식 콘솔 로그 
    console.log(textarea.value.length);
    result = textarea.value.length >= 50 ? "등록완료되었습니다.":"50자 이상 작성부탁드립니다.";
    alert(result);
})
//=============================================================================
//0. 초기값 설정 1개당 12500원 , 재고 10개 제한
//1. 사용자가 +클릭 시 수량이 1 증가한다.
//2. 증가 수량에 따라 가격이 증가된다.
//3. 구입수량이 10개 이상이면 + 버튼 클릭 시 ' 최대구매수량입니다.' 출력됨
//4. 구입수량이 1개 미만이면 - 버튼 클릭 시 '최소구매수량입니다.'  출력됨 

let price = 12500; //주문금액
let stock = 10;//재고
let number = 1; //주문수량
let totalPrice = 0; // 총가격저장변수
let result_num; //삼항조건식 결과 담는 변수
const productNum = document.querySelector('#num'); //수량표시DOM
const plusBtn = document.querySelector('#plus');//수량증가버튼DOM
const minusBtn = document.querySelector('#minus'); //수량감소버튼DOM
const priceNode = document.querySelector('.price span');
console.log(price,number,productNum,minusBtn,plusBtn,priceNode);

//수량 주문금액 초기값
productNum.value = number;
priceNode.innerText = price;
//innerText, textContent(속도가 더 빠름) => 둘다 글자 표시하는 속성

//+버튼 클릭 시 
plusBtn.addEventListener('click',()=>{
    //주문수량이 10개 이상 시 ' 최대구매수량입니다.' 출력
    //조건결과를담는변수 = 조건식 ? '조건이 참일때 결과': '조건이 거짓일때 결과';
    result_num = number >= 10? alert('최대구매수량입니다.') : number++;
    productNum.value = number;
    //수량에 따라 주문금액 증가
    totalPrice = price*number;
    priceNode.innerText = totalPrice.toLocaleString('ko-kr') ; //이 방법을 쓰려면 따로 위에 변수를 넣어야함
    //totalPrice를 따로만들지 않는 경우는 그냥 priceNode.innerText = (price*number).toLocaleString('ko-kr');

});

//-버튼 클릭 시
minusBtn.addEventListener('click',()=>{
    //주문수량이 1개 이하 시 '최소구매수량입니다.' 출력
    //조건결과를 담는변수 = 조건식? '조건이 참일때 결과' : '조건이 거짓일때 결과';
    result_num = number <= 1 ? alert('최소구매수량입니다.') : number--;
    productNum.value = number;
    //수량에 따라 주문금액 감소
    priceNode.innerText = (price*number).toLocaleString('ko-kr');
})
console.log('=================================================================');
//=============================================================================
let box1 = 30;
let box2 = 20;

//if(조건식){조건결과가 참인 경우 실행}else{조건결과가 거짓인 경우 실행}
if(box1 === box2){console.log('참');}

//상황1. 관리자만 접속 가능한 페이지
//관리자 ID : admin

//1. 아이디 입력하기
//3. 로그인 버튼 클릭 시
//4. 아이디가 관리자 아이디인 경우 '관리자님 안녕하세요' 출력

const userId = document.querySelector('#user_id');
const loginBtn = document.querySelector('#loginBtn');
console.log(userId,loginBtn);

loginBtn.addEventListener('click',()=>{
    if(userId.value === 'admin'){
        alert('관리자님 안녕하세요');
    }
    console.log(userId.value === 'admin'); 
    // admin아닐땐 false , admin일땐 알림창 뜨고 확인버튼을 눌러야 true(작성순서에 따라서)
    // 먼저나오게 하고싶으면 작성순서를 변경하기
})

//========================================================================================
//나머지 연산자 % 
console.log(2%4); //2
console.log(4%2); // 0
//자바스크립트 나머지 연산자 0, 1 홀,짝 구분 목적
//true+5 = 6 (true=1 숫자옆에 붙이면 숫자로 인식)
//false+5 = 5 (false=0)
//falsy (거짓으로 인식하는 숫자 값 = 0)
//truthy (참으로 인식하는 숫자 값은 0이 아닌 모든 값(대표 1))

//심리테스트 결과 함수

//1.숫자를 입력하고
//2. 결과보기 버튼 클릭 시
//3. 결과가 출력됨
const testNum = document.querySelector('#test_num');
const testBtn = document.querySelector('#testBtn');
const testResult = document.querySelector('.testResult');
console.log(testNum,testBtn,testResult);

testBtn.addEventListener('click', ()=>{
/*     //홀수
    if(testNum.value%2==1){
        testResult.innerHTML = testFunc(testNum.value,'홀');
    }
    //짝수
    if(testNum.value%2==0){
        testResult.innerHTML = testFunc(testNum.value,'짝');
    } */
   //지금은 0아니면 1 (홀 짝 둘중에 하나이기 때문에) 한번에 써도됨

    if(testNum.value%2==1){
        testResult.innerHTML = testFunc(testNum.value,'홀');
    }else{testResult.innerHTML = testFunc(testNum.value,'짝');}
})

//달라지는게 2개니까 매개변수도 2개 만들어야한다.
function testFunc(data1,data2){
    let txt = `당신이 선택한 숫자 ${data1}는 ${data2}수 입니다!`;
    txt += `${data2}수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다.`;
    return txt;
}