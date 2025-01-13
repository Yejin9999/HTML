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
    thumnail[0].parentElement.classList = 'active';
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