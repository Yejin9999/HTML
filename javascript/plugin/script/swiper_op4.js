//const newSlide = new Swiper('.new_slide_wrap'); //가장 기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    //속성:값,
    autoplay:{
        delay:2000, //다음 슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행해라 (기본값 true는 멈추게하는것)
    },
    loop:true, // 무한 반복 설정 마지막에서 처음으로 넘어갈때 같은방향으로 자연스럽게
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용 
    slidesPerView:3, //한번에 표시되는 슬라이드 개수
    //(위) 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!
    spaceBetween:20,
    //slidesPerGroup:3, //perview랑 같은 개수로 많이씀
    breakpoints:{
        1200:{slidesPerView:3,}, //1200이상일때 3개
        800:{slidesPerView:2,}, //800이상일때 2개
        320:{slidesPerView:1,}, //320이상일때 1개

    },
});
//delay와 speed를 조정해서 넘어가는 느낌 조절하기 

