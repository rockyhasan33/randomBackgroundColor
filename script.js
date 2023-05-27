const colorValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.querySelector('.btn');
const body = document.body;
const hexCode = document.querySelector('.hex');

btn.addEventListener('click', getHex);

function getHex() {
    let hex = '#';
    for(let i = 0; i < 6; ++i) {
        let random = Math.floor(Math.random() * colorValue.length);
        hex += colorValue[random];
    }

    body.style.background = hex;
    hexCode.innerHTML = hex;
}