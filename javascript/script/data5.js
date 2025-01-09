//=============================연결연산자와 더하기 연산자====================================

let data1 = 'hello'+'js'; //문자+문자 (연결연산자)
let data2 = '1'+2; //문자+숫자 (연결연산자)
let data3 = (1+1)+'number'; //(숫자+숫자)+문자 (더하기연산자)연결연산자
let data4 = 'num'+(2-2)+'ber'; //문자+(숫자-숫자)+문자
console.log(data1, typeof data1); // 변수값 :hellojs 변수데이터종류:string문자
console.log(data2, typeof data2); // 변수값 :12 변수데이터종류:string
console.log(data3, typeof data3); // 변수값 :2number 변수데이터종류:string
console.log(data4, typeof data4); // 변수값 :num0ber 변수데이터종류:string

let data5 = 4; //재료변수
let data6 = 2; //재료변수
//나누기와 나머지 연산자
let data7 =10;
let data8 =3;
let result2 = data7 / data8;
let data9 =5;
let data10 = data9 + 10; //10을 변수 안만든 이유는 일회성 처리할때만 (10을 계산식에서 한번만 쓸 경우)
let result3 = data10;

console.log(result2); // 나눈 값 3.33333333
result2 = data7 % data8;
console.log(result2); // 나눈 나머지값 1
let result = (data5+data6); //재료이용한 결과 담는 변수
console.log(result); //더하기 결과 6
result = data5 -data6;
console.log(result); //빼기 결과 2
result = data5 * data6 ;
console.log(result); //곱한 결과 8
result = data5 / data6;
console.log(result); // 나눈 결과 2
result = data5 % data6;
console.log(result); //나눈 나머지 값 0


//=================이항 연산자 활용 더하기만 되는 계산기 만들기=========================

// 1. 'firstInput' 첫번째 값을 담는 input / 값 인식속성 value
// 2. 'secondInput' 두번째 값을 담는 input / 값 인식속성 value
// 3. 'btn' 위 1,2번을 인식하는 결정 버튼 / 이벤트 click
// 4. 'total' 3번의 버튼 조건 달성 시 1,2 값을 담는 결과 변수 / 더하기(+) /버튼클릭 시 의 함수 안에 써야함
// 5. 'totalP' 4번의 결과변수를 p 출력 명령 / innerHTML 속성 (대소문자 지켜야함)
const firstInput = document.querySelector('#val1');
const secondInput = document.querySelector('#val2');
const btn = document.querySelector('#btn');
const totalP = document.querySelector('#result');
/* console.log(firstInput, secondInput)
console.log(btn);
console.log(total);
console.log(totalP); */
/* 
btn.addEventListener('click',function(){
    let total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value)); //string //문자+문자가 되니까 Number을 붙여야겠구나 생각해내기!
    totalP.innerHTML = total //태그에 결과를 넣고 출력한다
}); */

btn.addEventListener('click',inputFunc);
function inputFunc(){
    let total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value));
    totalP.innerHTML = total;
}

//===========================증감연산자 공부 (전위연산자 , 후위연산자)=====================
let x = 5;
let y = x++; //x++ 증가연산자(무조건 1씩만 증가) 
console.log(x, y); //대입하고나서 증가됬으니까 x=6 증가되기전 먼저 대입했으니까 y=5
//let y = ++x 일때는 증가 시키고 대입했으니까 둘다 6
y = x++;
console.log(x,y); // x가 6인데 1 증가시키기 전 대입하니까 x=7 y=6 
x = ++y; 
console.log(x,y); // y가 6인데 1 증가 시키고 나서 대입하니까 x=7 y=7
x++; //대입 없이 바로 증감연산 
console.log(x); // 8 

//증감연산자 문제
let a = 10;
let b = 20;
let c = 30;
let d = 40;
//===a,b,c,d의 값은? //정답: a-10 b-20 c-30 d-40
console.log(a , b, c, d);

a++;
b--;
c++;
d--;
//===a,b,c,d의 값은? //정답: a-11 b-19 c-31 d-39
console.log(a , b, c, d);

a = ++b; //b의 값에서 1증가하고 대입하니까 a=20 b=20
b = a++; //a의 값에서 증가시키기 전 대입하니까 b=20 a=21
//===a,b,c,d의 값은? //정답: a-21 b-20 c-31 d-39
console.log(a , b, c, d);

c = a+b; //c=41
d = ++c; //c의 값에서 1 증가하고 대입하니까 d=42 c=42
//===a,b,c,d의 값은? //정답: a-21 b-20 c-42 d-42
console.log(a , b, c, d);

a = ++c+10; //c의 값에서 1증가하고 10을 더하고 대입하니까 a=53 c=43
b = --d+1; //d의 값에서 1감소하고 1을 더하고 대입하니까 b= 42 d=41
//===a,b,c,d의 값은? //정답: a-53 b-42 c-43 d-41
console.log(a , b, c, d);

//=======================================복합대입 연산자=======================================
let number = 10;
//number = number + 5;
number += 5; //(기호끼리는 공백 두면은 안됨)
console.log(number); //15
//number = number - 5;
number -= 5;
console.log(number); //10
//number = number * 5;
number *= 5;
console.log(number); //50
//number = number / 5;
number /= 5;
console.log(number); //10
//number = number % 5;
number %= 5;
console.log(number); //0

//================================하루가계부 만들기=======================================
//1. 'transportPay'첫번째값(교통비)를 담는 input / 값 인식속성 value
//2. 'foodPay'두번째값(식비)를 담는 input / 값 인식속성 value
//3. 'coffeePay'세번째 값(커피)를 담는 input / 값 인식속성 value
//4. 'totalBtn'위 3개 의 값을 인식하는 버튼 생성 / 이벤트 click
//4-1. 'totalPrice' 버튼 조건 달성 시 위의 1,2,3의 값을 더한 총 지출금액을 담는 결과변수
//5. 결과를 span에 출력 (innerHTML 속성)
const transportPay = document.querySelector('#money1');
const foodPay = document.querySelector('#money2');
const coffeePay = document.querySelector('#money3');
const totalBtn = document.querySelector('#totalBtn');
const todayResult = document.querySelector('.todayResult span');
console.log(money1 , money2 ,money3, totalBtn, todayResult);
/* 
totalBtn.addEventListener('click',function(){
    let totalprice = Number(transportPay.value)+Number(foodPay.value)+Number(coffeePay.value)
    console.log(totalprice)
    todayResult.innerHTML = totalprice.toLocaleString('ko-kr')
    //toLocalString('나라')  (우리나라는 쉼표, ) 이걸 쓰면 문자가됨
});
 */

totalBtn.addEventListener('click',todayFunc);
function todayFunc(){
    let totalprice = Number(transportPay.value)+Number(foodPay.value)+Number(coffeePay.value);
    console.log(totalprice);
    todayResult.innerHTML = totalprice.toLocaleString('ko-kr');
}

//=======================이자더해지는 은행============================================================
//*. 'bankInput' 입금금액을 담는 input (값 인식속성 value 입금금액)
//*. 'bankTotal' 총 잔액표시 -total잔액변수 출력
//*. 'depositBtn' 입금하기 (버튼 + 이벤트)
//*. 'total' 총 잔액 데이터 초기값 0
//*. 'deposit' 1번 입금금액에 추가되는 이자 1000

//1.'total' 총잔액표시
//2.'bankIput' 입금액 입력
//3.'depositBtn' 입금하기 버튼 클릭
//4.'deposit' 입금액 인식하고 이자 더해짐
//5.'total' 총 잔액에 포함됨
//6. 'bankTotal' 총 잔액에 표시됨
let total = 0;
const bankInput = document.querySelector('#bank_input');
const depositBtn = document.querySelector('#deposit_btn');
const bankTotal = document.querySelector('#bank_total')
/* depositBtn.addEventListener('click',function(){
    let deposit = Number(bankInput.value)+1000;
    total += deposit;
    bankInput.value = 0; //초기화 시키기(0으로 하거나 ''빈문자로 하기) 
    bankTotal.value = total.toLocaleString('ko-kr');
     //bankTotal은 input이니까 inner.HTML이 아닌 value를 써야함
     //toLocalSting쓰면 숫자+문자 = 문자가 되는데 input속성이 number는 숫자만 인식하기때문에 text로 변경해야함
}); */
/* 
depositBtn.addEventListener('click',bankFunc);
function bankFunc(){
    let deposit = Number(bankInput.value)+1000;
    total += deposit;
    bankInput.value = 0;
    bankTotal.value = total.toLocaleString('ko-kr');
} 
*/

//이자가 달라지는 경우

depositBtn.addEventListener('click',function(){
    //bankFunc(500); //괄호안에는 원하는 이자값
    bankFunc(Number(bankInput.value) * 0.1); //입금한 금액의 10% 
});

function bankFunc(interestRate){
    let deposit = Number(bankInput.value) + interestRate;
    total += deposit;
    bankInput.value = 0;
    bankTotal.value = total.toLocaleString('ko-kr');
} 

//=========================함수의 변경되는 데이터 매개변수공부===============================
//function 함수명(매개변수) {함수실행값} => 함수선언식(선언만으로 결과는 출력안됨)
//함수명(매개변수); => 함수호출식 (함수 선언 후 호출은 위,아래 어디든 작성가능)

//매개변수가 없는 함수(데이터가 무조건 고정되는 경우 (변경x))
//카페 키오스크는 아메리카노만 주문 가능하고 수량도 무조건 1잔만 주문 가능
//출력예시) 아메리카노 1잔 나왔습니다.
/* function kiosk(){
    func_result.innerHTML = '아메리카노 1잔 나왔습니다.';
}; */

//매개변수가 있는 함수(수량만 변경가능)
/* function kiosk(num){
    func_result.innerHTML = `아메리카노 ${num}잔 나왔습니다. `;
}; */

//매개변수가 2개 있는 함수(수량/메뉴 변경가능)
function kiosk(menu,num){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다. `;
};

const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('.func_result');
let user_num = 5;
let user_menu = '카페라떼';
//func_btn.addEventListener('click',kiosk); 
// 클릭했을때 바로 키오스크 실행해라
func_btn.addEventListener('click',function(){
    kiosk(user_menu,user_num); //(대입값) 호출할때 매개변수를 대입한다. 
}); 
//클릭했을때 실행함수는 키오스크 함수를 실행해라 

//==================함수의 return(외부반환값 공부)===========================
//return은 함수 하나당 한번쓸 수 있음
function func1(x, y) {
   // console.log(x + y);
   console.log('test');
   return x+y; //실행메소드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
   console.log('test'); //return밑에 있으면 인식못함(그래서 보통 return은 젤 마지막줄에 씀)
}
//func1(1,2);
console.log(func1(1,2)); //실행식을 함수 호출 값을 가진채로 작성한다.
/* alert(func1(2,3)); */

let num1 = 10;
let num2 = 20;
//매개변수명은 반복해서 써도됨
function func2(x,y){
    num1 += num2; //num1 = 30
    num2 = x+y; // 지역매개변수 :x,y num2=6
    num1 += num2; //num1 = 36
    return console.log(num1); //메소드를 항상똑같이 할때는 return옆에다 붙여도됨
}
//console.log(func2(2,4)); //36
func2(2,4);

//============구구단 만들기=====================
//사용자가 2를 입력하면 2x1 ~ 2x9까지 구구단 결과가 p태그에 출력되는 결과
//사용자가 5를 입력하면 5x1 ~ 5x9까지 구구단 결과가 p태그에 출력되는 결과

//1. danInput에 숫자를 입력하는 input 생성 (값 인식속성 value)
//2. danBtn 버튼 생성
//3. 버튼 클릭 시 입력한 숫자의 1~9단까지의 구구단 결과나오게하기
//4. 결과를 p에 출력시키기
const danInput = document.querySelector('#dan')
const danBtn = document.querySelector('#danBtn')
const dan99result = document.querySelector('.dan99result')
function dan99(dan){
    dan99result.innerHTML = `${dan}*1=${dan*1}<br>`; //대입을 먼저 시작해야 이전값 제거하고 해야함
    dan99result.innerHTML += `${dan}*2=${dan*2}<br>`; //innerHTML에 있으니까 태그 <br> 쓸 수 있는거
    dan99result.innerHTML += `${dan}*3=${dan*3}`;
}
danBtn.addEventListener('click',function(){
    dan99(Number(danInput.value));
})