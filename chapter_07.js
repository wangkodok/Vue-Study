// 삼항연산자
const num = 10;
if (num > 10) {
    console.log(true);
} else {
    console.log(false);
}
// (조건) ? 맞으면(성립할 때) : 틀리면(성립하지 않을 때)
const count = 10;
count < 100 ? console.log(true) : console.log(false);

const coronaCases = [
    { city: 'Seoul', case: 1000 },
    { city: 'Daejeon', case: 500 },
    { city: 'Daegu', case: 300 },
    { city: 'Busan', case: 100 },
    { city: 'Gwangju', case: 50 },
]
// forEach, map, filter, reduce
// 단순하게 반복하는 forEach
// 의미가 명확한 이름으로 작성하기
coronaCases.forEach(function (corona, index) {
    // corona 원소, index 인덱스
    console.log(corona, index);
})

// map 배열을 재정의 할 때 (새로운 배열 만들 때)
// 어떠한 값을 새롭게 가공해서 재정의하기 때문에 return 이 필요
const coronaCities = coronaCases.map((corona) => {
    console.log(corona);
    return `${corona.city}의 확진자 발생 수는 ${corona.case}`;
})
console.log(coronaCities);

// filter
// 배열에서 특정한 값을 가진 데이터를 필터링 할 때
// 어떠한 조건에서 가져오고 싶을 때
// return 사용해서 제어하기
const dangerousCity = coronaCases.filter(function (corona, index) {
    return corona.case > 300;
})
console.log(dangerousCity);

// reduce
// 배열이 가지고 있는 어떠한 값들은 합치거나, 어떠한 값을 계산할 때
// 배열의 값을 이용하여 특정 값을 도출하거나 재가공 할 때
const numbers = [10, 123, 22, 33, 44, 55];
// 인자 총 4개
// acc 현재까지 쌓여진 값
// cur 현재의 값
// index 인덱스
// src 원본 배열
const totalNumber = numbers.reduce((acc, cur, index) => {
    console.log(index);
    console.log(acc);
    console.log(cur);
    console.log(acc, cur);
    return acc + cur;
})
console.log(totalNumber);

// coronaCases 상수 사용하기
// 오브젝트의 프로퍼티의 숫자를 더하고 싶을 때 값을 초기화
// 조건 넣어서 제어할 때
const totalCases = coronaCases.reduce((acc, cur) => {
    // console.log(acc, cur);
    return acc + cur.case;
}, 0)
console.log(totalCases);