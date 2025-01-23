// 일정 시간 후 한번 실행하고 끝나는 setTimeout 함수
// const 변수명 = setTimeout(실행함수, 시간)
// setTimeout(실행함수, 시간)
// setTimeout 내 함수를 별도로 생성하고 타이머안에서 호출식으로도 많이 이용한다.


const timer1 = setTimeout(function(){
    console.log('한 번 실행하는 문구')
},2000)

//함수 별도 생성 후 호출하는 방법
const timer2 = setTimeout(test, 1000)
function test(){
   //return alert('한번 실행하는 경고창')
}

//claerTimeout 실행 중 타이머 정지
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    clearTimeout(timer2)
    console.log('timer2 정지')
    clearTimeout(timer1)
    console.log('timer1 정지')
})

// 무한으로 반복되며 올라가는 공지사항
// 최종목표 : 공지 1->2->3->4->1->2->3->4->........무한반복

// 목표1 . 공지 1->2->3->4

// 1. 어느방향으로 이동하는지, 그 방향에 따른 가로,세로 크기는 무엇인지? 체크하기!!
// 아래 -> 위 이동한다 == top, translateY, 크기는 세로크기
// 좌 -> 우 이동한다 == left, translateX, 크기는 가로크기

// 2. 가로 또는 세로 크기가 결정됐다면? 이동요소 개수가 몇개인지? 인덱스 확인하기!
// 아래 -> 위로 이동한다면 ? 세로크기 * 인덱스 로 계산해야함
// 좌우로 이동한다면 ? 가로크기*인덱스로 계산하기

//3. 변수 준비
// 공지 1,2,3,4를 모두 가지고 있는 움직이는 대상 ul 'newsList'
// 개별요소 파악을 위한 li 'newsItems'
// 개별요소 크기를 위한 'itemsHeight'
// 인덱스 판단을 위한 'currentIndex'

const newsList = document.querySelector('#list'); //움직이는 대상
const newsItems = document.querySelectorAll('#list li')
const itemsHeight = newsItems[0].offsetHeight//40;  offsetHeight: 그 요소에 크기를 인식한다.
let currentIndex = 0; //인덱스
console.log(newsList, newsItems, itemsHeight, currentIndex)

const newsTimer = setInterval(()=>{
    currentIndex++; //인덱스가 1씩 증가할때
    newsList.style.transform = `translateY(-${itemsHeight*currentIndex}px)`//li를 y축방향으로 -(요소높이*현재인덱스)px만큼 움직이고
    newsList.style.transition = 'transform 0.5s ease';// 그걸 0.5초씩 ease하게 움직이겠다.
    
    //모든 list가 이동했을 때 초기화하는 조건문과 setTimeout
    if(currentIndex == newsItems.length){  //만약 현재 인덱스가 li의 갯수와 같아지면
        console.log('초기화 조건문 실행') 
        setTimeout(()=>{                  // 멈추겠다.(원래 처음 li의 자리로)
            currentIndex = 0;              
            newsList.style.transition = 'none';
            newsList.style.transform = 'translateY(0)'
        },500) //transition 시간과 동일하게 설정하기
    }
}, 1000)
//무한 스크롤 동작을 위한 원본 공지사항 복제 후 리스트 끝에 추가하기
for (let i of newsItems){
    const clone = i.cloneNode(true); 
    //cloneNode(true) 자식자손까지 포함해서 복제하겠다. 그리고 변수에 담겠다.
    newsList.appendChild(clone);
}

//-------------------------------------------------------------------------------------------
const newsList2 = document.querySelector('.news_container2 #list')
const newsItems2 = document.querySelectorAll('.news_container2 #list li')
const itemsHeight2 = newsItems2[0].offsetHeight
let currentIndex2 = 0;
console.log(newsList2,newsItems2,itemsHeight2,currentIndex2)

const newsTimer2 = setInterval(()=>{
    currentIndex2++;
    newsList2.style.transform = `translateY(-${itemsHeight2*currentIndex2}px)`
    newsList2.style.transition = 'transform 0.5s ease'

    //모든 list가 이동했을 시 초기화시키고 setTimeout 
    if(currentIndex2 == newsItems2.length){
        setTimeout(()=>{
            currentIndex2 = 0; //초기화
            newsList2.style.transition ='none'
            newsList2.style.transform = 'translateY(0)' //공지사항 마지막꺼 나오고 다시 처음으로 
        },500) //여기서 시간은 transition에서 지정한 시간과 동일하게 설정해야한다.
    }
},1000)
//(마지막공지사항나오고 처음으로 넘어가기 전 여백이 나오는 그 부분 없애기)무한 스크롤 동작을 위한 원본 공지사항 복제 후 리스트 끝에 추가하기
for (let i of newsItems2){
    //변수 생성
    const clone2 = i.cloneNode(true); //자식자손까지 포함해서 복제한다.
    //복제하고 마지막 자식에 추가하기
    newsList2.appendChild(clone2)
}

//================================================================================

const newsList3 = document.querySelector('.news_container3 #list')
const newsItems3 = document.querySelectorAll('.news_container3 #list li')
const itemsWidth = newsItems3[0].offsetWidth
let currentIndex3 = 0;
console.log(newsList3,newsItems3,itemsWidth,currentIndex3)

const newTimer3 = setInterval(()=>{
    currentIndex3++;
    newsList3.style.transform = `translateX(-${itemsWidth*currentIndex3}px)`
    newsList3.style.transition = 'transform 0.5s ease'
    if(currentIndex3 == newsItems3.length){
        setTimeout(()=>{
            currentIndex3 = 0;
            newsList3.style.transition = 'none'
            newsList3.style.transform = 'translateX(0)'
        },500)
    }
},1000)

for(let i of newsItems3){
    const clone3 = i.cloneNode(true);
    newsList3.appendChild(clone3);
}