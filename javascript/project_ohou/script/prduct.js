//상품 썸네일 js
//1. 각각의 작은 썸네일 이미지에 마우스를 올렸다.
//2. 위 1번 대상에만 테두리가 적용된다. (다른 모든 요소에 테두리가 제거(마우스 올린 그 대상에만 테두리가 적용됨))
//3. 위 1번 대상이 우측 큰 이미지에 나타났다.
// DOM Node : 작은썸네일이미지, 우측큰이미지
// 속성 , 메소드, 이벤트 : 1.'mouseover' 마우스를 올렸다. 2. classList 테두리가 적용된다. 테두리가 제거된다. 3. 나타났다. image변수 src를 변경

const thumnail = document.querySelectorAll ('.thumnail a img');
const bigImage = document.querySelector('.photo .big img');
console.log(thumnail[0].src , bigImage.src);
console.log(thumnail[0].parentElement);

//모든함수에 적용되는 값 
function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}

function bigSrc(num){
    return bigImage.src = `./images/big${num}.jpg`; 
}

//썸네일(thum.jpg)에 마우스를 올렸을 떄 큰 이미지 경로가 그에 맞는 big.jpg로 변경
thumnail[0].addEventListener('mouseover',()=>{
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList = 'acti ve';
})
thumnail[1].addEventListener('mouseover',()=>{
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
})
thumnail[2].addEventListener('mouseover',()=>{
    bigSrc(3);
    thum_remove();
    thumnail[2].parentElement.classList = 'active';
})
thumnail[3].addEventListener('mouseover',()=>{
    bigSrc(4);
    thum_remove();
    thumnail[3].parentElement.classList = 'active';
})
thumnail[4].addEventListener('mouseover',()=>{
    bigSrc(5);
    thum_remove();
    thumnail[4].parentElement.classList = 'active';
})


//마우스를 나가도 올렸을때 바뀐이미지 그대로 유지되고 있으니까 mouseover만 쓰인거임
//먼저 개별로 다 쓰는 연습을 해야함 (다 쓰고 반복되는 요소를 체크하고 함수생성하는 연습하기)

//========상품 배송 도착정보 JS
//0. 변수생성 (도착예정정보. 도착예정링크)
const schedule = document.querySelector('.ship_schedule');
const scheduleOpen = document.querySelector('.schedule_open');
//1. (시작 전) 도착예정 정보 숨기기(초기세팅)
scheduleOpen.classList.add('hide');
//2. 도착예정 링크 클릭 
schedule.addEventListener('click',(e)=>{
    console.log(e);
    e.preventDefault(); //1.매개변수생성(보통e로 많이씀) 2. a태그 href의 스크롤 위로기능을 막는 매소드
    //js 이벤트 대상으로 a태그 사용 시 href="#" 속성으로 인해 클릭 시 스크롤이 위로 자동으로 올라가는 문제점 발생
    //(위)해결방법 :DOM객체 클릭 시 발생하는 속성(a태그의 경우 href)은 이벤트 내 매개변수로 저장되는 특징이 있는데 이를 이용해 이벤트를 막아주는 매소드를 활용하면 위 문제를 해결할 수 있다.

    /* scheduleOpen.classList.remove('hide'); //클릭하면 숨겨지기만 함 remove */
    scheduleOpen.classList.toggle('hide'); //클릭하면 나왔다 사라졌다 하게 하는 것 toggle
})
//3. 도착예정정보 보이기
//4. 도착예정 링크 클릭
//5. 도착예정정보 숨기기

//==========주문금액+주문수량 js
//초기값 : 주문수량(0) 주문금액 (0) 수량 1개당 39,900원 
let price = 39900; //주문금액//콤마치면 문자처리 되니까 쓰면안됨
let number = 0; //주문수량
let totalPrice = 0; //총 가격 저장변수
const productNum = document.querySelector('#product_num'); //수량표시DOM
const plusBtn = document.querySelector('#plus'); //수량증가버튼DOM
const minusBtn = document.querySelector('#minus'); //수량감소버튼DOM
const orderPrice = document.querySelector('.order_price .price'); //price만 적으면 다른게 잡힐 수있으니까 그 부모까지 적어주기
console.log(productNum, plusBtn, orderPrice, minusBtn);

//수량 주문금액 초기값 세팅하기
productNum.value = number; //productNum은 input이니까 속성에 값을 넣기위해 .value를 적어야함
orderPrice.innerText = price*number; //금액*수량 

//1. + 버튼 클릭 시 
plusBtn.addEventListener('click',()=>{
    //2. 수량 1 증가 (최종수량1)
    number++; //증감연산자
    productNum.value = number;
    //3. 수량에 따라 주문금액이 증가 39900*1
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
    //orderPrice.innerText = (price*number).toLocaleString('ko-kr');

})
//4. 수량 1 증가 (최종수량2)
//5. 수량에 따라 주문금액이 증가 39900*2
//6. ......반복

//1. - 버튼 클릭 시
minusBtn.addEventListener('click',()=>{
    //2. 수량 1 감소
    number--; //감소연산자
    productNum.value = number;
    //3. 수량 감소에 따라 주문금액 감소
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
})
//4. 반복....

//======장바구니 팝업 js

const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_open_bg .link a:nth-child(1)');
console.log(cartPopup, cartBtn, shoppingBtn);

/* classList와 style 속성 구분해서 적용하기
객체.classList 사용
- css 속성 2-3개 이상 사용할 경우
- toggle, remove 교체, 삭제 등으로 다양한 경우에 사용할 경우

객체.style 사용
- css 속성 1-3ro 적게 사용할 경우
- 객체에 css를 단순히 적용만 할 경우
 */


//1. 'cartPopup'초기값: 팝업 숨기기
cartPopup.style.display = 'none';

//2. 'cartBtn'장바구니 클릭 시 
//3. 팝업 보이기
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'; 
    //html태그에서 원래 속성을 쓰면 숨겼던걸 다시 나오게 할 수 있다.(블록은 블록 인라인이면 인라인 플렉스는 플렉스로)
    document.body.style.overflow = 'hidden'; 
    //화면세로로 짧게 할 시 스크롤없애기 안움직이게 하는법
})

//4. 'shoppingBtn' 팝업 내 '쇼핑 계속하기' 클릭 시
//5. 팝업 숨기기
shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    // auto 설정 시내용이 넘치면 스크롤 만들어지고 아니면 안만들어짐
})
//넘치는 내용 숨길때 css에서 overflow:hidden