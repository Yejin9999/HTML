//타이머 함수
//일정시간마다 반복하는 setInterval
//setInterval(실행함수, 실행시간)
//const 타이머변수 = setInterval(실행함수, 실행시간) (이 방법을 추천!)
let num = 5;
const timerDiv = document.querySelector('.timer')
const timer1 = setInterval(function(){
    timerDiv.innerText = num;
    num--;
/*     if(num == 0){
        window.location.href = './index.html';
    } */
}, 1000); //1000 -> 1초

//=================================================================================================

//애니메이션 진행 시간에 맞춰 1초씩 증가하는 타이머
const boxTimer = document.querySelector('.box_timer span')
let num2 = 0;

let timer2 = setInterval(timerFunc,1000)
function timerFunc(){
    num2++;
    boxTimer.innerText = num2;
}
//html에 span안만드는 경우에는
//boxTimer.innerText = `진행시간 : ${} 초` 
//밑에서도 반복해서 써야하니까 함수를 생성해서 호출하는 방식으로 하기

const boxAni = document.querySelector('.box')
//STOP버튼 클릭 시 진행시간, 애니메이션이 모두 정지(paused) (paused와 running은 animationPlayState 이 속성에서만 사용됨)
const stopBtn = document.querySelector('#stop');
//replay버튼 클릭 시 진행시간, 애니메이션이 다시 재생(running)
const replayBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer2) //괄호안에는 setInterval을 가지고 있는 변수명
    //boxAni.style.animation = 'none'; //애니메이션 원래 있던 자리에서 멈추기
    boxAni.style.animationPlayState = 'paused'; // 정지눌렀을때 위치해있는 곳에서 바로 멈추기
})
replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'running'
    timer2 = setInterval(timerFunc,1000)
})
//============================================================================================
//한글자씩 작성하는 자바스크립트

const text = 'Portfolio 2025'
let i = 0; //글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');
const timer3 = setInterval(writer,200);

function writer() {
    if(i <= text.length){
        textSpan.innerHTML += text.charAt(i); //charAt 글자 한글자씩 인식하기
        i++;
        console.log(i, text.charAt(i)); //1 'o'
    }
}
writer() //함수호출

//한글자씩 작성하면서 줄바꿈하는 자바스크립트
const text2 = '제 이름은 000 입니다.'
let j = 0;
const textSpan2 = document.querySelector('.container2 .text')
const timer4 = setInterval(writer2,200)

function writer2(){
    if(j <= text2.length){
        textSpan2.innerHTML += text2.charAt(j);
        j++;
        console.log(j, text.charAt(j));
        if(j == 5 ) textSpan2.innerHTML += '<br>'
    }
    //if문을 사용해서 text 글자개수까지만 인식해라 라는 구문만들어주기

}
writer2() // 함수호출