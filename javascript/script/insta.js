//인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
// off -> on
// like 이미지 클릭 시 off -> on 변경되는 결과

/* const like = document.querySelector('.like img');
console.log(typeof like);
console.log(like.src); */

//insta.js 위치에서 like_on.png 연결 시 프로젝트 최상위 폴더 기준(html) 연결 
//like.src = './images/like_on.png'; //자바스크립트 이미지연결은 html에서 이미지 연결할때랑 같음

//insta.css 위치에서 like_on.png 상대경로 연결
// ../images/like_on.png

//mouseover, mouseout 마우스 올렸을때, 나갔을때 이벤트
//off 이미지에서 마우스를 올리면 on 으로 변경
//on 이미지에서 마우스를 나가면(떼면) off 로 변경
const likeIcon = document.querySelector('.like img'); 
const commentsIcon = document.querySelector('.comments img');
const paperIcon = document.querySelector('.paper img');

console.log(likeIcon);
console.log(commentsIcon);
console.log(paperIcon);

//함수생성 매개변수생성
function iconSrc(target,name,status){
    return target.src = `./images/${name}_${status}.png`;
    //status 매개변수를 호출할때 값이 대입이 되면 ${status}에 들어간다.
} //바뀌는 부분을 매개변수로 지정하기

likeIcon.addEventListener('mouseover',function(){
    iconSrc(likeIcon,'like','on'); // let icons = 'like' let status = 'on'
}) 
likeIcon.addEventListener('mouseout' , function(){
    iconSrc(likeIcon,'like','off'); // let icons = 'like' let status = 'off'
})

commentsIcon.addEventListener('mouseover', function(){
    //commentsIcon.src = './images/comment_on.png';
    iconSrc(commentsIcon,'comment','on');
})
commentsIcon.addEventListener('mouseout',function(){
    //commentsIcon.src = './images/comment_off.png';
    iconSrc(commentsIcon,'comment','off');
})

paperIcon.addEventListener('mouseover', function(){
    //paperIcon.src = './images/paper_on.png';
    iconSrc(paperIcon, 'paper', 'on');
})
paperIcon.addEventListener('mouseout',function(){
    //paperIcon.src = './images/paper_off.png';
    iconSrc(paperIcon, 'paper', 'off');
})
//css에서 hover는 백그라운드이미지만 변경이 가능함 클릭이나 다른 이벤트는 자바스크립트에서 해야됨