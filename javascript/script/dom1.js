//==========DOM(Document Object Model) 변수대입 복습하기
//변수가 변하지 않는 고정 데이터라면? (dom은 보통 const)
//const 변수명 대입연산자 반복되는 대입값;

//변수가 변할 수 있는 수동데이터라면?
//let 변수명 대입연산자 반복되는 대입값;
//var 변수명 대입연산자 반복되는 대입값;

//=========변수대입 DOM요소가 태그노드라면? -> 선언 후 배열형태확인 사용
//const 변수명 대입연산자 document.getElementsByTagName('태그')
//=========변수대입 DOM요소가 클래스노드라면? -> 선언 후 배열형태확인 사용
//const 변수명 대입연산자 document.getElementsByClassName('클래스명');
//===배열형태 노드라면 직접 사용시 [0] 인덱스 숫자 이용

//=========변수대입 DOM요소가 아이디노드라면?
//const 변수명 대입연산자 document.getElementById('아이디명');

const headerTag = document.getElementsByTagName('header');
console.log(headerTag); //단순 테스트확인 시 배열 전체 확인가능
headerTag[0].style = 'background-color:yellow' //애니메이션  및 동적 ,디자인 기능 등 직접 사용시 배열 직접 접근(인덱스를 활용하기)

console.log(typeof headerTag); // object(객체)
const logo = document.getElementsByTagName('h1');
logo[0].style = 'color:red';
/* 
const logo = document.getElementsByTagName('h1')[0]; 
처음부터 선언할때 인덱스를 활용하면 기눙적용할땐 안써도됨(처음부터 쓰는경우는 딱 하나일때)
logo.style = 'color:red'; */
const searchDiv = document.getElementsByClassName('search')[0];
searchDiv.style = 'border:2px solid blue';

const searchInput = document.getElementById('txt');
console.log(searchInput);
searchInput.style = 'background-color:lime';

const searchBtn = document.getElementById('btn');
console.log(searchBtn);
searchBtn.style = 'background-color:orange';

//querySelector 메소드는 body태그에 작성한 태그 순서상 먼저 시작한 대상을 인식한다. header태그가 두개라면 먼저 선언 된 header태그만 인식해서 변수에 대입한다.
const hea = document.querySelector('header'); 
console.log(hea);
hea.style = 'background-image:url(https://i.pinimg.com/736x/1a/48/f3/1a48f32bfd80aa5d5b564aa2ce9de1cd.jpg)';
//querySelector는 getElement명령어처럼 class, id , tag 선언이 함께 하지 않기 때문에 querySelector의 메소드괄호 안에서 class, id , tag를 구분할 수 있는 표시를 함께 적는다. 태그는 태그이름만 / 클래스는 .클래스명 / 아이디는 #아이디명
const sear = document.querySelector('.search');
console.log(sear);
sear.style = 'border-top:2px solid hotpink';

const searTxt = document.querySelector('#txt');
console.log(searTxt);
searTxt.style = 'color:red';

//============================================================
/* const gnbLi = document.querySelector('.gnb li');
console.log(gnbLi);  */// 첫번째 li만 잡힘
const gnb = document.querySelector('.gnb');
console.log(gnb);
gnb.querySelector('a').style = 'background-color:black'; //여기서 a는 첫번째 a만 잡음

const gnbLi = document.querySelectorAll('.gnb li');
console.log(gnbLi); // 네개 다 잡힘
gnbLi[0].style = 'background-color:yellow';
gnbLi[1].style = 'background-color:orange';
gnbLi[2].style = 'background-color:pink';
gnbLi[3].style = 'background-color:white';

/* const gnbA = document.querySelectorAll('.gnb a') */
const gnbA = gnb. querySelectorAll('a');
//document.querySelector('.gnb').querySelectorAll('a') 위와 동일
console.log(gnbA);
/* gnbA[0].style = 'color:red'; */
gnbA[1].style = 'color:brown';
gnbA[2].style = 'color:blue';
gnbA[3].style = 'color:hotpink';