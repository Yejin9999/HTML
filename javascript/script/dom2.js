// 자바스크립트 동적기능에 의해서 요소가 생성될 경우 creatElement();
const new_child = document.createElement('div'); //괄호안에는 태그명만 작성(클래스나 아이디 x)
const parent = document.querySelector('#parent');
const new_p = document.createElement('p');
const body = document.querySelector('body');
const new_child2 = document.createElement('em');
const parent2 = document.querySelector('.child2');
const childNode = document.querySelectorAll('.child'); // 0 1 2 Nodes
const new_span = document.createElement('span');
const li = document.querySelectorAll('.list li');
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');

console.log(new_child, parent,new_p, body ,new_child2 , parent2,li);
console.log(parent.children[2].previousElementSibling);
console.log(childNode,new_span);
console.log(addBtn,onoffBtn,reBtn);

//기준이 되는 부모변수.appendChild(마지막자식위치에 추가하고 싶은 노드변수);
new_child.innerText = '새로운 요소'; //삽입 전에 준비를 끝내야함 그래서 순서는 요로케 
parent.appendChild(new_p);
new_p.innerHTML = '<em>요소생성연습</em>';
body.appendChild(new_p);
new_child2.innerText = ' 입니다';
parent.firstElementChild.appendChild(new_child2);
parent.children[2].previousElementSibling.appendChild(new_child2);
new_span.innerText = '추가요소';
parent.appendChild(new_span);

//기준 부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p, childNode[2]);
parent.insertBefore(new_span, parent.children[0]);
parent.insertBefore(new_p,new_span)

//삭제대상변수.remove();
//숨기는 개념(style.display='none')이 아닌 요소 삭제('',remove) 개념! 쇼핑몰장바구니 삭제 등으로 이용
//childNode[0].remove();
//숨기는대상의부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[0]);


//style 속성을 이용한 css(최종 적용 속성이 1~2 소수일 경우)
li[0].style.backgroundColor = 'aqua';
li[0].style.fontSize = '2rem';

//동시에 적용해야하는 css속성이 3개 이상 많은 경우 class를 이용한다.
//처음부터 적용된 클래스가 아닌 JS동적결과에 의해 나중에 적용되는 디자인에 이용
/* li[1].className = 'set1'; */
li[1].classList = 'set1'; //주로 list를 많이사용함
//li[1].classList = 'set2'; //따로 적을경우 대입연산자 속성에 따라 set1은 사라짐
//li[1].classList = 'set1 set2'; //둘다 적용됨
li[1].classList += ' set2'; // 문자열 연결하는거라 set2앞에 공백을 줘야함
li[2].classList.add('set1');
li[2].classList.add('set1' , 'set2'); //둘다 적용됨
li[1].classList.remove('set1'); // set1 스타일속성 제거됨 set2는 남아있음
li[1].classList.add('set3');
li[1].classList.remove('set2');
li[3].classList = 'set4';
li[4].classList.add('set3', 'set5');
li[5].classList.add('set4' , 'set5');
li[5].classList.remove('set4');

//버튼으로 제어하는 classList
addBtn.addEventListener('click',()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click',()=>{
    li[7].classList.toggle('set2'); //toggle은 누를때마다 교차로 적용됬다 풀렸다하는 기능 (많이쓰임)
})
reBtn.addEventListener('click',()=>{
    li[8].classList.replace('set2','set1'); //기존 set2를 set1로 변경한다. 
})