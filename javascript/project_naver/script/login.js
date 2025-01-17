//QR코드 메세지팝업 X 닫기 기능
//1. 'messageX' x 클릭 시 
//2. 'messagePopup' QR코드 메세지 팝업 숨기기

const messageX = document.querySelector('.title .message .close');
const messagePopup = document.querySelector('.title .message');
console.log(messageX,messagePopup);
messageX.addEventListener('click',()=>{
    /* messagePopup.style.display = 'none'; */
    messageX.parentElement.style.display = 'none';
});

// 로그인 탭&내용 js 
//0. 초기세팅 ID로그인 제목 활성화디자인, 일회용&QR내용 숨기기 , ID로그인 내용보이기
const loginTitle = document.querySelectorAll('.title h2')
const loginContent = document.querySelectorAll('.login_box')
console.log(loginTitle, loginContent);
//0-1 제목 활성화(id)/ 비활성화(일회용,QR) == active클래스 활성기준
loginTitle[0].classList.add('active');
loginTitle[1].classList.remove('active');
loginTitle[2].classList.remove('active');
//0-2 내용(id)보이기 / 내용(일회용,QR)숨기기
loginContent[0].style.display = 'block'
loginContent[1].style.display = 'none'
loginContent[2].style.display = 'none'

//1. 일회용번호 제목을 클릭 시
loginTitle[1].addEventListener('click',()=>{
    //모든 제목 디자인 해제하기
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    //일회용번호만 제목 활성화 디자인 적용하기
    loginTitle[1].classList.add('active');
    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none'
    loginContent[1].style.display = 'none'
    loginContent[2].style.display = 'none'
    //3. 일회용번호 내용만 보이기
    loginContent[1].style.display = 'block'
})


//1. QR 제목을 클릭 시
loginTitle[2].addEventListener('click', ()=>{
     //모든 제목 디자인 해제하기
     loginTitle[0].classList.remove('active');
     loginTitle[1].classList.remove('active');
     loginTitle[2].classList.remove('active');
    //QR만 제목 활성화 디자인 적용하기
    loginTitle[2].classList.add('active');
    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none'
    loginContent[1].style.display = 'none'
    loginContent[2].style.display = 'none'
    //3. QR 내용만 보이기
    loginContent[2].style.display = 'block'
})


//1. id로그인 제목을 클릭 시
loginTitle[0].addEventListener('click',()=>{
     //모든 제목 디자인 해제하기
     loginTitle[0].classList.remove('active');
     loginTitle[1].classList.remove('active');
     loginTitle[2].classList.remove('active');
    //id로그인만 제목 활성화 디자인 적용하기
    loginTitle[0].classList.add('active');
    //2. 모든 내용 숨기기
    loginContent[0].style.display = 'none'
    loginContent[1].style.display = 'none'
    loginContent[2].style.display = 'none'
    //3. id로그인 내용만 보이기
    loginContent[0].style.display = 'block'
})

//============아이디&비밀번호 유효성 검사
//1. 아이디 입력 오류 '아이디를 입력해 주세요'
//1-1 'userId'사용자가 아이디를 입력안하고 => '' 빈문자열 사용
//1-2 'loginBtn'로그인 버튼 클릭 시
//1-3 'errorMsg'오류 메세지 출력 '아이디를 입력해주세요'

//2. 비밀번호 입력 오류 '비밀번호를 입력해주세요'
//2-1. (선행조건) 아이디 입력하고 비밀번호만 입력안했을 경우 
//2-2. 'userPw' 사용자가 아이디는 입력하고 비밀번호를 입력안하고
//2-3. 'loginBtn' 로그인 버튼 클릭 시
//2-4. 'errorMsg'오류 메세지 출력 '비밀번호를 입력해주세요'

//3. 로그인 오류 '아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요'
//3-1. (선행조건) 아이디와 비밀번호를 모두 입력했을때 기준
//3-2. 사용자가 아이디와 비밀번호를 모두 입력 후
//3-3. 'loginBtn' 로그인 버튼 클릭 시
//3-4. 'errorMsg'오류 메세지 출력 '아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요'

const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelector('#login')
const errorMsg = document.querySelector('.error_message')
console.log(userId,userPw,loginBtn,errorMsg);

errorMsg.style.color = 'red';
errorMsg.style.fontSize = '0.88rem';
errorMsg.style.margin = '30px 0';

loginBtn.addEventListener('click',()=>{
    if(userId.value === '') errorMsg.textContent = '아이디를 입력해주세요'; //(짧아서 옆으로 적을땐 {중괄호} 안적어도되지만 엔터 치고 쓰려면 {}써야함)
    //userId값이 빈문자열인가(거짓)일때 인식하는 두번째 조건식(아래)
    else if(userPw.value === ''){
        errorMsg.textContent = '비밀번호를 입력해주세요';
    }
    //userId빈문자열인가(거짓)이고 userPw빈문자열인가(거짓)일때 (모든조건이 거짓일때)
    else {
        errorMsg.textContent = '아이디와 비밀번호가 잘못되었습니다. 다시확인해주세요'
    }
})

//1.일회용 로그인번호 오류 '일회용번호를 입력해주세요'
//1-1 'numInput'일회용번호를 입력하지 않고
//1-2 'loginBtn' 로그인 버튼 클릭 시
//1-3 오류메시지 출력

const numInput = document.querySelector('#one_time_num');
const onetimeloginBtn = document.querySelector('#one_time_loginBtn');
const onetimeMsg = document.querySelector('.onetime_error_message');
console.log(numInput,onetimeloginBtn,onetimeMsg)

onetimeMsg.style.color = 'red';
onetimeMsg.style.fontSize = '0.88rem';
onetimeMsg.style.margin = '30px 0';


onetimeloginBtn.addEventListener('click',()=>{
    if(numInput.value === '') onetimeMsg.textContent = '일회용 번호를 입력해주세요.';
})

// =========ip 보안 on/off 글자 변경 js
//0. check#op_on 체크되어있는경우 ON / 체크해제 경우 OFF
//1. ON 기본 활성화(html,css 준비)
//2. 'ipCheckbox' 체크박스의 상태를 변경(change)했을때 (눌렀을때)
//3. 'switchState' 체크가 되어있었다면 switch_state 글자를 ON->OFF 로 변경
//4. 체크가 해제상태라면 switch_state 글자를 OFF->ON 로 변경

const ipCheckbox = document.querySelector('#ip_on');
const switchState = document.querySelector('.switch_state')
console.log(ipCheckbox,switchState);

ipCheckbox.addEventListener('change',()=>{
    /* console.log('상태변경'); */
    //css에서 체크했을때는 태그:checked
    //자바스크립트에선 객체.checked
    switchState.textContent = ipCheckbox.checked ? 'ON' : 'OFF';
})