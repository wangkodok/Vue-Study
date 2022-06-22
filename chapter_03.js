// string, number, boolean, null, undefined
const js = 'script'; // string
const age = 30; // number
const isMale = true; // boolean
const isFemale = false; // boolean
let money = null; // null
let girlFriend = undefined; // undefined

console.log(typeof isMale);

console.log('my name is' + name + 'and i am ' + age);

// `${}`
console.log(`내 이름은 ${name} 이고 나이는 ${age}`);

// 메소드 사용해서 문자열 가지고 놀기
const animal = 'tiger';
console.log(animal.substring(0, 2));
let fruits = '사과, 딸기, 포도, 참외';
console.log(fruits);
fruits = fruits.split(', ');
console.log(fruits);
console.log(fruits[1]);