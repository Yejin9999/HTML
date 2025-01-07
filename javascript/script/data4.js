//window.document.body.style = 'background-color:aqua';
document.write('250107'); //window 생략(기본 내장 되어있기 때문에)
//DOM
//객체는 변수 선언 먼저해야함
//변수생성키워드 생성변수명 = 변수에 대입되는 값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식됨
//배열로 인식 되기 때문에 각 데이터가 [0] [1] 인덱스로 구분되고 length속성이 자동 추가된다.
const title1 = document.getElementsByTagName('h1'); //태그는 문자로 인식
const subtitle1 = document.getElementsByTagName('h2');
console.log(title1);
console.log(subtitle1);
//DOM객체.속성;          //기존속성읽기
//DOM객체.속성 = '값';  //속성에 새로운 값 대입하기
title1[0].style = 'color:red';
title1[1].style ='background-color:red';
subtitle1[0].style ='color:blue';
subtitle1[1].style ='border:5px solid blue';
subtitle1[2].style ='text-decoration:underline';
const listWrap = document.getElementsByTagName('ul')[0]; //오직 이거 하나일때만 이름 뒤에 인덱스선언가능[]
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aqua'; //적용안됨
listWrap.style = 'background-color:aqua'; //배열식으로 정확하게 써야 적용됨
list[0].style = 'color:coral';
list[1].style = 'color:blue';
list[2].style = 'color:red';
//====================getElementsByTagName===========================================
const linkWrap = document.getElementsByTagName('ul')[1];
const linkList = linkWrap.getElementsByTagName('li');
const link1 = linkList[0].getElementsByTagName('a');
const link2 = linkList[1].getElementsByTagName('a');
const linkAll = linkWrap.getElementsByTagName('a');
console.log(linkWrap);
console.log(linkList);
console.log(link1, link2);
console.log(linkAll);
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style = 'background-color:lime';
linkWrap.style = 'background-color:pink';
/* html, css 작성 시 html의 가족관계를 우선시 하여 li가 형제, a는 외동으로 각각 인식하지만 js는 최종선택 대상 앞의 'document' 자리에 누굴 쓰느냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 html관계에서 a가 외동이든 아니든 'ul' 을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스번호를 적용한다. 하지만 'li'의 경우 li안에는 a 가 하나씩 밖에 배치되어 있지 않아 각 a을 0번째로만 인식하게 된다. */ 
//=============getElementsByClassName=========================
const menuWrap = document.getElementsByClassName('menu')[0];
const menuList = menuWrap.getElementsByTagName('li');
const menuLink = menuWrap.getElementsByTagName('a');
console.log(menuWrap);
console.log(menuList);
console.log(menuLink);
menuWrap.style = 'background-color:yellow';
menuList[0].style = 'border:2px solid blue';
menuList[2].style = 'border:2px solid red';
menuLink[0].style = 'background-color:pink';
menuLink[3].style = 'background-color:orange';
//=================getElementById================================
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
//=====================================
const container = document.getElementById('container');
const title = document.getElementById('title')
const titleA = title.getElementsByTagName('a');
const contents = document.getElementById('contents');
const contentsA = contents.getElementsByTagName('a');
console.log(container);
console.log(title);
console.log(titleA);
console.log(contents);
console.log(contentsA);
container.style ='background-color:orange';
title.style = 'border:2px solid blue';
titleA[0].style = 'background-color:red';
contents.style = 'border:2px solid brown';
contentsA[1].style = 'background-color:red';
//===============================================
console.log('==============================================================');
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbli = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbli = lnb.getElementsByTagName('li');
const lnbliA = lnb.getElementsByTagName('a');
nav.style = 'background-color:pink';
gnb.style = 'border:2px solid blue';
gnbli[0].style = 'color:yellow';
lnb.style = 'background-color:lime';