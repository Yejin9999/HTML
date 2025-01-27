//const newSlide = new Swiper('.new_slide_wrap'); //가장 기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    //속성:값,
    //수직페이지 전환 시 필요한 값들
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용 
    direction:'vertical',
});

const snsSlide = new Swiper('.sns_portfolio',{
    speed:800,
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false
    }
});

