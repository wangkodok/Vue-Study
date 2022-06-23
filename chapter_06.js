// for
const animals = [
    {name: 'lion', size: 'big'},
    {name: 'monkey', size: 'small'},
    {name: 'dog', size: 'small'},
]
console.log(animals);
for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);
}
for (let animal of animals) {
    console.log(animal.name);
    console.log(animal.size);
}

// while
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

// if
// == 데이터타입 비교 안함
// === 데이터타입까지 비교
// <, > 부등호 사용 가능
const num = 11;
if (num < 10) {
    console.log('10입니다.');
} else if (num === 10) {

} else {
    console.log('10보다 크거나 같습니다.');
}

// switch
const animal = 'lion';
switch(animal) {
    case 'lion':
        console.log('사자입니다.');
        break;
    case 'monkey':
        console.log('원숭이입니다.');
        break;
    default:
        console.log('동물이 아닙니다.');
        break;
}