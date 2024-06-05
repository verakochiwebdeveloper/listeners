const button = document.getElementById('btn');
const inputColor = document.getElementById('text');
const square = document.getElementById('square');
const circleButton = document.getElementById('e_btn');
circleButton.style.display = 'none';
const rangeInput = document.getElementById('range');
const circle = document.getElementById('circle');


button.addEventListener('click', function() {
    const color = inputColor.value;
    square.style.backgroundColor = color;
});

rangeInput.addEventListener('input', function() {
    const value = rangeInput.value;
    circle.style.width = value + '%';
    circle.style.height = value + '%';
});