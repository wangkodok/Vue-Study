const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeeDisplay = document.querySelector('#time');
const messageDisplay = document.querySelector('#message');

const GAME_TIME = 5;
const API_TIME = 'https://random-word-api.herokuapp.com/word?number=100';

let words = ['banana', 'key', 'car', 'javascript', 'scalper'];
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

init();
// function init() {
//     // const res = fetch(API_TIME).then(res => res.json()).then((data) => words = data); res 한 줄 처리

//     const res = fetch(API_TIME).then((res) => {
//         return res.json();
//     }).then((data) => {
//         words = data;
//     });
// }

async function init() {
    const res = await fetch(API_TIME);
    const data = await res.json();
    words = data.filter((item) => {
        return item.length < 7;
    })
    isReady = true;
    // console.log(words);
    // words = data;
}

wordInput.addEventListener('input', (e) => {
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if (typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
        addScore();
        setNewWord();
    }
})

function gameover() {
    isPlaying = false;
    clearInterval(timeInterval);
    timeInterval = null;
    messageDisplay.innerText = 'GAME OVER!!!';
    score = 0;
}

function countDown() {
    time = time - 1;
    timeeDisplay.innerText = time;
    if (time === 0) {
        gameover();
    }
}

function setNewWord() {
    time = GAME_TIME;
    wordInput.value = '';
    messageDisplay.innerText = 'Now Playing!!!';
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex];

    if (!isPlaying) {
        timeInterval = setInterval(countDown, 1000);
        isPlaying = true;
    }
}

function addScore() {
    score = score + 1;
    scoreDisplay.innerText = score;
}