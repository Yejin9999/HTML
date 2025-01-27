//const newSlide = new Swiper('.new_slide_wrap'); //가장 기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    //속성:값,
  /*   autoplay:{
        delay:1000, //다음 슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행해라 (기본값 true는 멈추게하는것)
    }, */
    //loop:true, // 무한 반복 설정 마지막에서 처음으로 넘어갈때 같은방향으로 자연스럽게
    speed:1500, //애니메이션 전환 시 걸리는 시간
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용 
    /* direction:'vertical', */
    effect:'fade',
});
//delay와 speed를 조정해서 넘어가는 느낌 조절하기 

