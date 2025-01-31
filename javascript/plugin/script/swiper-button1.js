const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    //(기본) 페이지번호
    pagination:{
        el:'.event-swiper + .swiper-pagination',
        type:'bullets',
        clickable:true, //clickable은 잘 사용안함
        dynamicBullets:true, //활성화,비활성화 크기 차이나는 효과
    },
    navigation:{
        nextEl:'.event-swiper+.btn .next',
        prevEl:'.event-swiper+.btn .prev',
    },
});