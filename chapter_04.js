// array
const animals = ['lion', 'rabbit', 'monkey'];
// console.log(animals[0]); // lion 가져오기
// animals[3] = 'tiger'; // 배열 인덱스 자리에 추가
animals.push('tiger'); // 배열 뒤에 넣기
animals.unshift('dog'); // 배열 앞에 넣기
// console.log(animals);

const Animals = ['lion', 'rabbit', 'monkey'];
const Fruits = 'lion, rabbit, monkey';
// console.log(Array.isArray(Animals));
// console.log(Array.isArray(Fruits));
// console.log(Animals.indexOf('rabbit'));

const isAnimals = ['lion', 'rabbit', 'monkey', 'dog', 'cat'];
// splice : 배열자체를 바꿈
// slice : 배열을 바꾸지는 않고 값만 반환
isAnimals.splice(1, 3); // 인덱스 시작, 빼고 싶은 만큼의 개수
isAnimals.splice(isAnimals.indexOf('monkey'), 3);
const slicedAnimals = isAnimals.slice(2, 4);
// console.log(slicedAnimals);

// object
// key(키): value(밸류)
const monkey = {
    name: 'kiki',
    age: 5,
    weight: 40,
    gender: 'male',
    isCute: true,
    food: ['banana', 'carrot', 'potato'],
    home: {
        location: 'zoo',
        size: 'big',
        price: 3000,
    }
}
// console.log(monkey); // 오브젝트 접근하기
// console.log(monkey['name']); // 오브젝트 값에 접근하기
// console.log(monkey.weight); // 오브젝트 값에 접근하기
monkey.gender = 'female'; // 오브젝트 값 변경하기
// console.log(monkey.gender);

// json 데이터를 주고 받을 때 (전송)
// console.log(monkey);
const monkeyJSON = JSON.stringify(monkey);
// console.log(monkeyJSON);
const parsedJSON = JSON.parse(monkeyJSON);
// console.log(parsedJSON);