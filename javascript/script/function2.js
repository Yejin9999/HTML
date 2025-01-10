//250110 - 구구단 함수 복습
//1. 'danInput' input요소에 사용자 원하는 구구단 입력 후
//2. 'danBtn' button요소 클릭 시
//3. 'dan99' 2번 조건달성 시 호출할 수 있는 구구단 함수 생성
//3-1. (함수 안) 함수 실행할때마다 위 1번의 입력값을 받기 위해 '매개변수' 생성
//3-2. (함수 안) 매개변수를 이용 구구단 식 제작 2x1=2 ~ 2x9=18
//3-3. (함수 안) 출력하기위한 'danResult' 변수 생성
//3-4. (함수 안) 위 변수에 대입 후 완성
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.danResult');
console.log(danInput, danBtn, danResult); //항상 console.log로 error,undefined,null 확인하기

//danBtn.addEventListener('click',function(){ dan99(Number(danInput.value)); }) //버튼 클릭시 dan99를 호출한다 는 뜻
danBtn.addEventListener('click',()=> dan99(Number(danInput.value))) //화살표함수식
function dan99(dan){
    let total =''; //지역변수인식
    total = `${dan}x1= ${dan*1}<br>`;
    total += `${dan}x2= ${dan*2}<br>`;
    total += `${dan}x3= ${dan*3}<br>`;
    total += `${dan}x4= ${dan*4}<br>`;
    total += `${dan}x5= ${dan*5}<br>`;
    total += `${dan}x6= ${dan*6}<br>`;
    total += `${dan}x7= ${dan*7}<br>`;
    total += `${dan}x8= ${dan*8}<br>`;
    total += `${dan}x9= ${dan*9}`;
    return danResult.innerHTML = total;

    //첫번째에 복합연산자를 쓰지않는 이유는 이전에 실행한거까지 복합된다. 
    //함수가 새롭게 실행될때 이전의 값을 지워야하니까 첫번째 값에는 대입으로만 적는다.
    //danResult.innerHTML = `${dan}x1= ${dan*1}<br>`; 
    /* danResult.innerHTML += `${dan}x2= ${dan*2}<br>`;
    danResult.innerHTML += `${dan}x3= ${dan*3}<br>`;
    danResult.innerHTML += `${dan}x4= ${dan*4}<br>`; //앞의값이 지워지지 않기위해 복합연산자 사용
    danResult.innerHTML += `${dan}x5= ${dan*5}<br>`; 
    danResult.innerHTML += `${dan}x6= ${dan*6}<br>`; 
    danResult.innerHTML += `${dan}x7= ${dan*7}<br>`; 
    danResult.innerHTML += `${dan}x8= ${dan*8}<br>`; 
    danResult.innerHTML += `${dan}x9= ${dan*9}`; 
    return */
} //dan -> 매개변수
//====================================================================================================
// 매개변수가 없는 화살표 함수
const greet = ()=> console.log('hello');
const greet2 = ()=> {
    let a = 10;
    return console.log(a+10);
}
greet();
greet2();

// 매개변수가 있는 화살표 함수
//일반 함수인 경우
function func1(a){
    return a+100;
}
console.log(func1(10));
//화살표 함수인 경우
const func2 = (a) => a+100;
console.log(func2(10));
console.log('=======================================')
//=========================================================================================================
//DOM , Node 관계 속성 공부
const nav_a1 = document.querySelector('nav a'); // a 중 첫번째를 잡은것 (부모를 잡는게 목적이라면 querySelector만 써도됨)
const nav_a2 = document.querySelectorAll('nav a'); // a 모두다 잡은것
const header = document.querySelector('header'); 

console.log('======================next,previous 관계속성 공부');
nav_a2[1];
console.log(nav_a2[1].nextElementSibling); //menu3
console.log(nav_a2[1].nextElementSibling.nextElementSibling); //menu4
console.log(nav_a2[1].previousElementSibling); //menu1



//=======================================================================================================
console.log(nav_a1 , nav_a2);
console.log(nav_a1.parentElement); //DOM요소만 반환하니까 nav
//console.log(nav_a2.parentElement); // undefined가 나옴 (배열이라 index를 이용해야 값이 나옴)
console.log(nav_a2[0].parentElement);//DOM요소 nav
console.log(nav_a2[1].parentNode); //요소 노드 nav(공백,텍스트까지 포함해서 검사)

/* nav_a1.parentElement.style = 'background-color:aqua;'
nav_a2[2].parentNode.style = 'padding:20px;' */ //대입연산자는 하나니까 이거 적으면 배경색쓴건 제거됨

//style을 같은 DOM요소에 두번 이상 적용하고 싶은 경우 css속성명을 자바스크립트 키워드 방식으로 camel표기법으로 작성해야한다.
nav_a1.parentElement.style.backgroundColor = 'aqua';
nav_a1.parentElement.style.padding = '20px';
nav_a1.addEventListener('mouseover',()=>nav_a1.parentElement.style.borderBottom = '2px solid #000');
nav_a2[3].addEventListener('mouseover',()=>nav_a2[3].parentNode.style.backgroundColor='yellow');
nav_a2[3].addEventListener('mouseout',()=>nav_a2[3].parentNode.style.background='none');

//자식노드 childNodes, children (자손x 자식만 인식)
console.log(nav_a1.childNodes); //text
console.log(nav_a1.children);//없음
console.log(header.childNodes);//text,h1,text,nav,text(여기서 text는 공백)
console.log(header.children);//h1,nav
console.log(header.children[0]);//h1
console.log(header.children[0].innerHTML);//h1안의 내용이 나옴 <a href="#">logo</a>
console.log(header.children[0].innerText);//logo
console.log(header.children[1]);//nav
console.log(header.children[1].innerHTML);//nav안의 내용 (4개의 a내용나옴)
console.log(header.children[1].innerText);//menu1 menu2 menu3 menu4 

//header에 마우스 올렸을때 자식 h1의 'logo' -> '로고' 글자 변경하기
header.addEventListener('mouseover',()=>{
    console.log(header.children[0].children[0].innerText); //logo
    header.children[0].children[0].innerText = '로고';

    /* header.children[0].children[0].innerText = '<em>로고</em>'; // <em>로고</em>
    header.children[0].children[0].innerHTML = '<em>로고</em>'; // em이니까 글씨가 기울어짐 */
});
console.log('=========childElementCount 자식노드개수==================');
console.log(header.childElementCount); //2
//================================마켓컬리 쇼핑몰 장바구니 개수
// 1. 'cart_num'장바구니 초기값 0
// 2. 'cart_item'사용자가 장바구니에 물건 2개를 담았다.
// 3. 'cart_num_all'2번의 물건 개수에 따라 장바구니 페이지에 전체 상품 개수 출력
let cart_num =  0;
const cart_num_all = document.querySelector('.all_cart_num');
const cart_item = document.querySelector('.cart_contents')
cart_num_all.innerText = cart_num; //장바구니 0으로 초기값을 선언시키기
//사용자가 물건 2개를 담았다.(상황2)
cart_num = cart_item.childElementCount; // 장바구니의 상품을 담는 개수에 따라 장바구니 초기값이 변경되야하니까
console.log(cart_num); // 2 (html태그에 지금 item이 두개 있으니까)
cart_num_all.innerText = cart_num; //현재 진행기준 장바구니 개수 대입

console.log('=============================================================')

console.log(header.firstChild); //공백
console.log(header.firstElementChild); // h1
console.log(header.lastchild); //공백
console.log(header.lastElementChild) // nav




