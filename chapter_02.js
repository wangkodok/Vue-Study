// var, let, const
var nameVar = 'var';
let nameLet = 'let';
const nameConst = 'const';

// var 어디서든 사용 가능
var name = 'script';
for (var i = 0; i < 10; i++) {
  var name = 'script';
  var engName = 'engScript';
}
console.log(engName);

// let 값이 변화할 때 사용
let score = 0;
score = 1;
console.log(score);

// const 값이 변화하지 않을 때 사용
const myName = 'abc';
console.log(myName);

// 블록 밖에서 선언한 변수 호출 가능
let nameA = 'scalper!!!';
{
  console.log(nameA);
}

// 블록 안에서는 선언한 변수 호출 불가능
{
  let nameB = 'scalper!!!';
}
console.log(nameB);
