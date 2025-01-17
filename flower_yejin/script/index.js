//1. 년 입력
//2. 월 입력
//3. 일 입력
//4. 결과보기 버튼 클릭시
//5. 각 월에 맞는 탄생화와 꽃말 결과 출력

const yearInput = document.querySelector('#yearInput');
const monthInput = document.querySelector('#monthInput');
const dayInput = document.querySelector('#dayInput');
const resultBtn = document.querySelector('#resultBtn');
const resultP = document.querySelector('.result');
console.log(yearInput,monthInput,dayInput,resultBtn,resultP);

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

console.log(birthday_flower[0]);
console.log(birthday_flower[10]);

console.log(birthday_flower[0].month);
console.log(birthday_flower[0].flower);
console.log(birthday_flower[0].content);

/* 달라지는 변수는? 월 탄생화 꽃말

/* 결과버튼 클릭 시 각 달마다 `${a}월의 탄생화는 ${b}이고 꽃말은 ${c}입니다.` 맞는 문구의 결과가 나와야함


//결과변수만들고 복합대입으로 데이터쌓고 템플릿문자열로 resultP.innerText = 결과변수
resultBtn.addEventListener('click',()=>{
    if(monthInput.value === 1){
        resultP.innerText = birthday_flower[monthInput.value-1.month]
        resultP.innerText = birthday_flower[monthInput.value-1.flower]
        resultP.innerText = birthday_flower[monthInput.value-1.content]
    }
    else if(monthInput.value === 2){}
    else if(monthInput.value === 3){}
    else if(monthInput.value === 4){}
    else if(monthInput.value === 5){}
    else if(monthInput.value === 6){}
    else if(monthInput.value === 7){}
    else if(monthInput.value === 8){}
    else if(monthInput.value === 9){}
    else if(monthInput.value === 10){}
    else if(monthInput.value === 11){}
    else if(monthInput.value === 12){}
    else{resultP.innerText = '생년월일을 다시 입력해주세요'}
    
});

 */