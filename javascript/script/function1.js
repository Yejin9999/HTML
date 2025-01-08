//================함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프 위치)
let a;
let b = 20;
let c = 30;
//함수 내부
//function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부(지역스코프 위치)
    a = 10;
    console.log(a+b); 
}
//선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야한다.
//호출방법 : 함수명()
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출
/* console.log(a+b); */ //에러 -> a를 함수 안(지역스코프)에서 만들었을땐 인식못함
console.log(c+b); //50
console.log(a+b);//30 함수를 호출했기때문에 10이 전역변수에 대입이됨
//함수 호출이 이 자리에 있을땐 NaN이 뜸 (함수 호출 전이니까 10 인식못함)
//==========================================================================
//최종 결과 값순서가 6, 16으로 출력되도록 함수스코프와 호출을 이용한 문제 풀기
let x = 1;
let y;
function func1(){
    y = 5;
    console.log(x+y);
}
function func2(){
    /* func1(); */ //함수2 안에 함수1 호출식이 존재한다면 함수2호출할 때 함수1이 함께 출력되는 경우를 의미한다.
    let z = 10;
    console.log(x+y+z);
}
func1(); //작성 순서에 따라서 개별로 호출하여 출력시키기
func2();
//선언 순서는 달라져도 결과는 바뀌지 않고 호출식은 순서가 달라지면 결과가 달라진다.
//그래서 호출을 먼저 하고 선언을 하는 경우도 많다. (깔끔하게 잘 보이기 위해서)

//===============================================================================
//1. 변수 생성 (버튼)
const btn1 = document.getElementById('btn1');
console.log(btn1);
//2. 변수 이벤트 생성
//이벤트대상.addEventListener('이벤트종류',이벤트 만족 시 실행함수); 이벤트식에서는 함수를 따로 호출안해도 나옴
//이벤트 대상이란 ? 이벤트종류를 적용하고 싶은 대상
//이벤트 종류란? 태그의 인라인script로 적용 시 on을 붙이고 스크립트에서 바로 작성 시 on없이 바로 이벤트만 작성한다.
btn1.addEventListener('click',function(){
    alert('안녕하세요 hello'); //함수명 안씀
}) 
//==================================================================
const btn2 = document.getElementById('btn2');
console.log(btn2);
btn2.addEventListener('click',function(){ //버튼 클릭 시
    let answer = prompt('1+1은?'); //1+1에 대한 입력창 제공
    alert(answer);//입력한 답 띄우기
})
//===========================================================
//수량 증가 버튼 만들기
//1.제어 노드 변수 생성하기
const numInput = document.getElementById('num');
const numPlus = document.getElementById('numPlus');
const numMinus = document.getElementById('numMinus');
console.log(numInput);
console.log(numPlus);
console.log(numMinus);
//2. 위 1에서 생성한 변수 중 이벤트 대상에 해당되는 것부터 작성하기
//버튼을 클릭했을때
numPlus.addEventListener('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //기존 수량의 값에 1을 더해서 수량 칸에 대입하기
    num.value = Number(numInput.value)+1;
    //numInput.value를 숫자로 변환해서 1더해서 대입해라
    //대입대상 = 기존의 값
    console.log(typeof(num.value)); 
    //데이터타입 -> string(문자) 그래서 111111 이렇게 뜨는거였음 -> 그러므로 숫자로 바꿔야된다   
})
numMinus.addEventListener('click',function(){ //-버튼을 눌렀을때 실행함수는
    //기존 수량값에 1을 빼서 수량칸 대입한다.
    num.value = numInput.value-1;
    //+ 데이터와 데이터의 연결로도 쓰기 때문에 문자로 인식해서 Number을 붙여야하지만 빼기 곱하기 나누기는 문자-문자 이런 형식은 말이 안되기 때문에 처음부터 숫자로 인식
})
console.log('============================================================')

/* 목표1. 위 input 2개 무시하고 prompt이용 월급,보너스를 받고 총 수입 계산하기 버튼을 클릭하면 prompt에 입력한 월급+보너스 결과 출력하기 */
//1.월급입력받기 
/* prompt const price1 = prompt('이번 달 월급 입력'); */
//2.보너스입력받기 
/* prompt const price2 = prompt('이번 달 보너스 입력'); */
//3.계산버튼 클릭 시 click 
//const totalBtn = document.getElementById('total');
//totalBtn.addEventListener('click',function(){}
//4. 월급+보너스 더하기 +
/* totalBtn.addEventListener('click',function(){
    const total_price = Number(price1)+Number(price2)
} */
//5. 더한 금액 결과 출력 (어디에 출력하느냐에 따라 alert,console)
/* totalBtn.addEventListener('click',function(){
    const total_price = Number(price1)+Number(price2)
    alert(total_price);
} /* 
const price1 = prompt('이번 달 월급 입력');
const price2 = prompt('이번 달 보너스 입력');
const totalBtn = document.getElementById('total');
console.log(totalBtn);
totalBtn.addEventListener('click',function(){
    const total_price = Number(price1)+Number(price2);  
    ('price1을 넘버로 바꾸고 2도 넘버로 바꿔서 더해라' 라는 뜻)
    alert(total_price);
}) */

// 목표: input에 값을 각각 쓰고 button을 누르면 월급+보너스 결과 출력되게 하기
const price1 = document.querySelector('#price1');
const price2 = document.querySelector('#price2');
const totalBtn = document.getElementById('total');
totalBtn.addEventListener('click',function(){
    console.log(price1);
    console.log(price1.value);
    console.log(typeof(price1)) //object
    console.log(typeof(price1.value)) //string 
    const total_price = Number(price1.value)+ Number(price2.value);
    alert(total_price);
})