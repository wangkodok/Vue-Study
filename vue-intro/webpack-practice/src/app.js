const monkey = require('./monkey.js');
console.log(monkey);

require('./css/main.css');

const components = () => {
    const h1 = document.createElement('h1');
    h1.innerText = 'hello Webpack!';
    return h1;
}

monkey.food.forEach( (f) => {
    console.log(f);
})

document.body.appendChild(components());