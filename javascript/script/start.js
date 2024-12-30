// 외부 스크립트 프로그래밍 언어 작성 위치
// 선언과 대입 따로하는 변수 작성법
// var 생성변수명;
// 생성변수명 = 변수에 대입하는 값;
// --------------------------------------------
// 선언과 대입 동시에 작성하는 변수 작성법
// var 생성변수명 = 변수대입값;
var bowl; //그릇 저장소 생성 (대입x == undefined)
bowl = "쌀밥";
// 자바스크립트 중요 개념 . 객체(변수), 속성, 메소드 , 이벤트
// 속성과 메소드 작성 구분 법
// 속성과 메소드 작성 시 반드시 객체가 먼저 시작해야 한다.
// 객체.속성; 속성은 괄호가 안들어가고 바로 세미콜론
// 객체.메소드(); 메소드는 괄호가 무조건 들어감(괄호 안의 값은 있을 수도 있고 없을 수도 있다.)
// 자바스크립트 작성순서 : 목표 정하기-> 절차순서 정하기 -> 코드 쓰기
//목표. 콘솔에 로그 남기기 //콘솔을 남기는 이유 -> 중간절차를 파악하기위해
console.log(bowl);
console.log(bowl);
console.log(1+1);
console.log('1+1');
console.log('1+1=', 1+1); 
// bowl 변수값은 쌀밥
console.log('bowl변수값은' , bowl);
console.log('===========================변수 대입 연습하기==========================='); // 앞 뒤 구분 원할때 경계만들기
var a;
var b = a; // 선언과 대입 동시진행 
// console.log(b); 결과 : undefined (a가 선언되고 대입되기 전에 b를 선언대입을 하였기 때문에)
var c = 30+b;
console.log(a); // 결과 : undefined (대입된 데이터 없음)
a = 10;
// b = a; a의 10을 대입하고나서 b를 대입했기때문에 console.log(b); 결과가 10이 된다.
console.log(a); // 결과 : 10
a = 20; // 새로운 데이터값을 대입하는 순간 기존 데이터 (10) 자동으로 제거된다. 
b = a;
c = a+b;
console.log(a); // 결과 : 20
console.log(b); // 결과 : 20
console.log(c); // 결과 : 40
// NaN = Not a Number 연산자를 이용한 데이터 2개가 계산이 불가능할 경우 출력되는 상태