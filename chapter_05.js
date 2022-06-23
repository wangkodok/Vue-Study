// function
const item1 = 3000;
const item2 = 2000;
const item3 = 5000;
const loyalty = 1000;

// 함수 외부에 선언된 변수를 함수 안에서 사용 가능
function showPrice(price) {
    console.log(price + loyalty);
    return price + loyalty;
}
// return 함수의 리턴값을 어디에 담아두고 싶을 때 사용
const price1 = showPrice(item1);
const price2 = showPrice(item2);
const price3 = showPrice(item3);
console.log(price1);
console.log(price2);
console.log(price3);

// 변수에 담아서 사용하는 함수
const nameShowPrice = function(price) {
    return price + loyalty;    
}
console.log(nameShowPrice(item1)); // 4000

// ES6: 화살표 함수
const arrShowPrice = (price) => {
    console.log(price + loyalty);
}
arrShowPrice(item1); // 4000

// 1. 함수 선언 > 윈도우에 등록 > 함수 선언하기 전에 함수호출 가능
// 2. 변수로 선언한 함수 > 윈도우 등록 x 함수 선언하기 전에 함수호출 불가능 함수 선언한 후 밑에다가 호출하기 Lexical Scope 함수가 바라보는 시점으로 고정하는 효과..?
// 3. 화살표 2번이랑 동일

console.log(window);
console.log(this); // window

const obj = {
    name: 'test',
    test1: function() {
        console.log(this); // obj 자체를 가리키다
    },
    test2: () => {
        console.log(this); // window 고정으로 가리키다
    }
}
obj.test1();
obj.test2();
const a = obj.test1;
const b = obj.test2;
a(); // 함수가 변수에 담아졌으니 '()' 로 함수 실행한다.
b(); // 함수가 변수에 담아졌으니 '()' 로 함수 실행한다.
console.log(a());
console.log(b());