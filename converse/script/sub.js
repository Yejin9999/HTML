/* //
const bestTab = document.querySelectorAll ('.best_wrap .b_left .b_tab a')
console.log(bestTab);
console.log(bestTab[0]);
console.log(bestTab[3]);

//활성화되는부분 리셋시키는 함수생성
function besttab_remove() {
    bestTab[0].parentElement.classList.remove('active');
    bestTab[1].parentElement.classList.remove('active');
    bestTab[2].parentElement.classList.remove('active');
    bestTab[3].parentElement.classList.remove('active');
    bestTab[4].parentElement.classList.remove('active');
}

//
//마우스올렸을때 활성화된부분 제거-> 활성화되게하기
bestTab[0].addEventListener('mousover',(e)=>{
    besttab_remove();
    e.preventDefault();
    bestTab[0].parentElement.classList.add('active')
})
bestTab[1].addEventListener('mousover',(e)=>{
    besttab_remove();
    e.preventDefault();
    bestTab[1].parentElement.classList.add('active')
})
bestTab[2].addEventListener('mousover',(e)=>{
    besttab_remove();
    e.preventDefault();
    bestTab[2].parentElement.classList.add('active')
})
bestTab[3].addEventListener('mousover',(e)=>{
    besttab_remove();
    e.preventDefault();
    bestTab[3].parentElement.classList.add('active')
})
bestTab[4].addEventListener('mousover',(e)=>{
    besttab_remove();
    e.preventDefault();
    bestTab[4].parentElement.classList.add('active')
})

 */
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