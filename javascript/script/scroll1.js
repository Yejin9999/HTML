//스크롤을 감지하는 이벤트 scroll, wheel(마우스 휠에만 동작(터치스크린,키보드에선 안됨)) 
//스크롤 이벤트 적용 객체는 가능한 window로 사용한다.
window.addEventListener('scroll', function(){
    //console.log('scroll')
    console.log(box[2].offsetTop)
    console.log(box[2].getBoundingClientRect().y)
    if(window.scrollY > box[1].offsetTop-500){ //더 빨리 나오고싶은경우에는 임의로 px를 빼준다
        topDiv.style.right = '50px'
    }else{topDiv.style.right = '-70px'}
})
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',function(e){
    //console.log(e)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

//위로 클릭 시 스크롤 이동시키기
const topDiv = document.querySelector('.top')
const box = document.querySelectorAll('.box')
topDiv.addEventListener('click',()=>{
    //원하는 요소의 위치로 이동시킬 때 많이 쓰임(인덱스번호사용)
    window.scrollTo({left:0, top:box[1].offsetTop})
    //window.scrollTo(0,0)
    //확 올라가는게 싫다 하면 요로케
    //window.scrollTo({left:0,top:0, behavior:'smooth'})
})