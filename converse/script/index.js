//신상품 스와이퍼=================================================
const newSlide = new Swiper('.new_swiper',{
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation:{
        prevEl:'.new_wrap .n_left .n_title .prev',
        nextEl:'.new_wrap .n_left .n_title .next',
    },
});

//신상품 탭메뉴
//1. 다음/이전 버튼 클릭 시
//2. 카테고리탭 메뉴 


//하이탑 스와이퍼==============================================

const hightopSlide = new Swiper('.hightop_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation:{
        prevEl:'.hightop_wrap .swiper-scrollbtn .prev',
        nextEl:'.hightop_wrap .swiper-scrollbtn .next',
    },
    scrollbar:{
        el: ".swiper-scrollbar",
    },
});
//로우탑 스와이퍼==============================================
const rowtopSlide = new Swiper('.rowtop_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation:{
        prevEl:'.rowtop_wrap .swiper-scrollbtn .prev',
        nextEl:'.rowtop_wrap .swiper-scrollbtn .next',
    },
    scrollbar:{
        el: ".swiper-scrollbar",
    },
});
