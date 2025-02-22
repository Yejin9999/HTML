//메인배너 스와이퍼==========
const bnrSlide = new Swiper('.bnr_swiper',{
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
})

//신상품 스와이퍼==========
const newSlide = new Swiper('.new_swiper',{
    slidesPerView:1,
    spaceBetween:28,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
})

//베스트 스와이퍼==========
const bestSlide = new Swiper('.best_swiper',{
    slidesPerView:1,
    spaceBetween:28,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
})

//마스크팩==========
const maskSlide = new Swiper('.mask_swiper',{
    slidesPerView:3,
    spaceBetween:15,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
})

//리뷰==========
const reviewSlide = new Swiper('.review_swiper',{
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2300,
})