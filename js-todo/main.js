const inputText = document.querySelector('.input-text');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.list');
const likeButtons = document.querySelectorAll('.like');

addButton.addEventListener('click', function() {
    // like
    const like = document.createElement('span');
    const likeIcon = document.createElement('i');
    like.classList.add('like');
    likeIcon.classList.add('material-symbols-outlined');
    likeIcon.innerText = 'favorite';
    like.appendChild(likeIcon);

    // item
    const item = document.createElement('span');
    item.classList.add('item');
    item.innerText = inputText.value;

    // manage
    const manage = document.createElement('span');
    const checkIcon = document.createElement('i');
    const clearIcon = document.createElement('i');
    checkIcon.classList.add('material-symbols-outlined', 'check');
    clearIcon.classList.add('material-symbols-outlined', 'clear');
    checkIcon.innerText = 'done';
    clearIcon.innerText = 'close';
    manage.classList.add('manage');
    manage.appendChild(checkIcon);
    manage.appendChild(clearIcon);

    const li = document.createElement('li');
    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    list.appendChild(li);
})