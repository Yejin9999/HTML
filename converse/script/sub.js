
//키즈 베스트상품 스와이퍼================================
const kidbestSlide = new Swiper('.best_swiper',{
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation:{
        prevEl:'.best_wrap .b_left .b_title .prev',
        nextEl:'.best_wrap .b_left .b_title .next',
    },
})

//연령별 스와이퍼====================================
const ageSlide = new Swiper('.age_swiper',{
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation:{
        prevEl:'.agecontent .swiper-scrollbtn .prev',
        nextEl:'.agecontent .swiper-scrollbtn .next',
    },
    scrollbar:{
        el: ".swiper-scrollbar",
    },
});

// 백팩 스와이퍼 ============================
const bagpackSlide = new Swiper('.bagpack_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// all 페이지넘기기
const allkidSlide = new Swiper('.allkid_swiper',{
    navigation: {
        nextEl: ".allkid_swiper .swiper-scrollbtn .next",
        prevEl: ".allkid_swiper .swiper-scrollbtn .prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});