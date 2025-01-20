// 반복문 forEach와 for..of
const list1Li = document.querySelectorAll('.list1 li')
const contentsP = document.querySelectorAll('.contents p')
console.log(list1Li, contentsP);
//1. for..of 객체 요소 접근
for(let i of list1Li){
    console.log(i);
    i.style.backgroundColor = 'yellow';
    i.addEventListener('mouseover',()=>{
        i.style.backgroundColor = 'aqua'
    })
    //for..of 을 이용한 DOM요소접근방법은 실제 요소 개수 상관없이 for의 변수를 이용하여 이벤트 및 속성, 메소드 등을 한번에 해결가능하다.(for문 안에서 작성)
}
console.log('======================================');
//2. forEach 객체 요소,인덱스,배열 접근 반복문
//list1Li.forEach(function(){}) (//요소 인덱스 배열은 매개변수처럼 이름 설정하면됨)
list1Li.forEach((target, index, array)=>{
    console.log(target, index, array);
    //요소 종류가 2개 이상이면서 인덱스 개수가 일치할때
    target.addEventListener('mouseover',()=>{
        target.style.borderTop = '2px dashed red';
        console.log(contentsP, index);
        contentsP[index].style.backgroundColor ='lime'
    })
})

console.log('=======================================================================');
/* 탭 제목과 내용 자바스크립트 알고리즘 정리 */
//1.(초기세팅)
//1-1. 'tabC'탭내용 모두 숨기기(모두숨기기 함수생성 - 'tabCHide')
//1-2. 탭내용 1 보이기
//1-3. 'tabT'탭제목 클래스(active 활성화) 초기화 (초기화 함수 생성 - 'tabClsReset')
//1-4. 탭제목 1 클래스(active 활성화) 적용

//2. 탭제목을 클릭 했을 때 (1,2,3,4 모두 가능)
//2-1. 탭제목 클래스 초기화 'tabClsReset'
//2-2. 탭제목 클래스 적용(현재 이벤트 대상)
//2-3. 탭내용 모두 숨기기
//2-4. 탭내용 보이기(현재 이벤트 대상과 같은 인덱스 탭내용)

const tabC = document.querySelectorAll('.tab_contents > div')
const tabT = document.querySelectorAll('.tab_title a')
console.log(tabC,tabT);
function tabCHide(){ //탭내용모두숨기기용 함수
    for(let i of tabC) i.style.display = 'none'
}
tabCHide(); //내용 숨기기함수 (호출해야 내용이 보임)
tabC[0].style.display = 'block';

function tabClsReset(){ //탭제목 클래스 모두 초기화 함수(생성)
    for(let i of tabT) i.classList.remove('active')
}
tabClsReset() //초기화 함수 호출
tabT[0].classList.add('active') //1-4 적용

tabT.forEach((target,index)=>{
    console.log(target,index);
    target.addEventListener('click',()=>{
        //console.log(target);
        tabClsReset(); 
        target.classList.add('active');
        tabCHide();
        tabC[index].style.display = 'block'
    })
})

console.log('=====================================')
// 중첩반복문
// for(초기값; 조건식; 증감식){ for(초기값; 조건식; 증감식){}}
//1단 for문이 한번 실행 될때 2단 for은 거짓이 될때까지 모두 반복시킨다.
for(let i = 1; i<3; i++){ /* 1,2 출력되는 1단 반복문 */
    for(let j = 7; j<10; j++){ /* 7,8,9 출력되는 2단 반복문 */
        console.log(`1단 : ${i}, 2단 : ${j}`)
    }
}

//구구단
let danResult = '';
const dan99 = document.querySelector('.dan99')

for(let i = 2; i<=9; i++){/* 2단~9단 for */
    for(let j = 1; j<=9; j++){ 
        danResult +=`${i}x${j}=${i*j}<br>`;
        //console.log(danResult)
    }danResult += '<hr>'
}
dan99.innerHTML = danResult;

console.log('==========================================================')
//다중반복문이용 태그생성하기

//ul>li*4 구조 생성하기
const testDiv = document.querySelector('.test');
const ul = document.createElement('ul') //createElement html에 없는데 자바에서 태그 생성하고 싶을때
console.log(ul);
for(let i=1; i<=4; i++){
    ul.innerHTML += `<li>list${i}</li>`;
}
testDiv.appendChild(ul)

console.log('=======================================================================')
//while() 반복문
//주방장 입장
//주문이 완료될때까지 '주문요청' 무한반복

/* let orderFood = prompt('주문요청');
while(orderFood != 'y'){
    orderFood = prompt('주문요청');
} */

/* let quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요');
while(quiz1 != 'x'){ //whilie에 조건식을 쓸때는 정답이 ~가 아니면 으로 쓰는게 
    quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요');
}
alert('정답입니다!'); //while 종료 시 인식 위치 */

//css 무한문제풀기
/* let quiz2 = prompt('특정 태그에 묶인 자식 요소를 선택 시 > (꺽새)를 사용한다. 정답을 ox 중 하나로 입력하세요');
while(quiz2 != 'x'){
    quiz2 = prompt('특정 태그에 묶인 자식 요소를 선택 시 > (꺽새)를 사용한다. 정답을 ox 중 하나로 입력하세요');7
}
alert('정답입니다!'); */
//================================================================================
//continue, break 반복문 흐름제어

for(let i=1; i<=10; i++){
    //if(i==7) break; // 7부터 10까지 생략
    if(i==7) continue; //7만 생략되고 10까지 다나옴
    console.log(i)
}