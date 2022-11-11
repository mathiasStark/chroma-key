function changeColor() {
    let container = document.getElementById('chromaKey');
    let input = document.getElementById('inputColor');
    container.style.backgroundColor = input.value;
}

function defaultColor() {
    let container = document.getElementById('chromaKey');
    container.style.backgroundColor = 'rgb(0, 255, 0)'
}