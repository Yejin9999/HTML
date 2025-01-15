//관리자 정보 ID:admin PW:admin1234
let userId ='ad';
let userPw ='admin1234';

if(userId === 'admin' && userPw == 'admin1234'){ //&& 둘다 참이여하기때메 왼쪽이 거짓이면 오른쪽은 확인안함
    console.log('관리자님 어서오세요');
}else{
    console.log('로그인 실패');
}

//============================================================================
/* //비교연산자와 논리연산자를 이용한 게임만들기
//w - 전진 s - 후진 a - 좌 d - 우
const charMove = prompt('이동방향을 입력하세요 wsad')
console.log(charMove);
if(charMove == 'w' || charMove =='s' || charMove =='a' || charMove =='d'){ 
    alert(`${charMove}로 1칸 이동`)
    //w 1칸 이동
    //s 1칸 이동
    //a 1칸 이동
    //d 1칸 이동
}else{
    alert('잘못입력하였습니다.');
}

elseif를 활용하여 쓸 수 있음
if(charMove == 'w'){alert('w')}
elseif(charMove =='s'){alert('s')}
elseif(charMove =='a'){alert('a')}
elseif(charMove =='d'){alert('d')}
else{alert('잘못입력하였습니다.')} */

//=======점수에 따라 등급 출력============================================
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하면 F
const score =prompt('0~100사이 시험점수를 입력하세요');
if(score >= 0 && score <= 100){
    if(score >= 90){
        alert('A');
    }else if(score >= 80){
        alert('B');
    }else if(score >= 70){
        alert('c');
    }else if(score >= 60){
        alert('D');
    }else{
        alert('F');
    }
}else{
    alert('잘못입력했습니다.')
}