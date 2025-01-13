//1. 키 입력하기  /값 인식속성 value
//2. 몸무게입력하기 /값 인식속성 value
//3. 키 몸무게 인식하는 버튼생성 / 이벤트 click
//3-1. 버튼을 누르면 적정체중결과를 담는 결과변수
//3-2. 결과를 p에 출력 (innerHTML)
//적정체중 = (본인신장-100)*0.9
//적정체중은 ?kg이며 ?kg 초과되셨습니다.
const userHeight = document.querySelector('#userHeight');
const userWeight = document.querySelector('#userWeight');
const resultBtn = document.querySelector('button');
const goal = document.querySelector('.goal')
const excess = document.querySelector('.excess')
console.log(userHeight, userWeight, resultBtn ,goal);

resultBtn.addEventListener('click',userFunc1);
function userFunc1(){
    let result = (Number(userHeight.value)-100)*0.9;
    console.log(result);
    goal.innerHTML = `${result} kg입니다.` ;
}

resultBtn.addEventListener('click',userFunc2);
function userFunc2(){
    let excessResult = (Number(userHeight.value)-100)*0.9 - Number(userWeight.value);
    console.log(excessResult);
    excess.innerHTML = `${excessResult} kg초과 되었습니다.` ;
}