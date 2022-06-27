const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeeDisplay = document.querySelector('#time');
const messageDisplay = document.querySelector('#message');

const GAME_TIME = 5;

let words = ['banana', 'key', 'car', 'javascript', 'scalper'];
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;

wordInput.addEventListener('input', (e) => {
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if (typedText.toUpperCase() === currentText.toUpperCase()) {
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