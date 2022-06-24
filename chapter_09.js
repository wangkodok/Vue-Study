// DOM
// const title = document.getElementById('title');
// const list = document.getElementsByClassName('list');
// title.style.color = 'red';
// console.log({ title, list });

// querySelector
const idTit = document.querySelector('#title');
const classList = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const btn = document.querySelector('#btn');
const naver = document.querySelector('.naver');
title.style.color = 'red';
title.style.backgroundColor = 'green'; // css 에서 하이픈(-) 들어가는 것들 카멜케이스로 변경
title.innerHTML = '<input type=text>';
btn.innerText = 'button';
// classList.remove();
// classList.firstElementChild.remove();
// classList.lastElementChild.remove();
classList.lastElementChild.innerHTML = '<a href="#">link</a>';
console.log(idTit, classList, items);

// addEventListener
// 객체가 기본적으로 제공한다. 파라미타부분에 작성해서 가져오기
btn.addEventListener('click', function() {
    alert('탕수육');
})
naver.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    alert('네이버');
})