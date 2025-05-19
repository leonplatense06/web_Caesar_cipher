const input = document.getElementById("input");
const result = document.getElementById("result");
const degree = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

function encode() {
    let charList = input.value.split("");
    let encodeDegree = parseInt(degree.value);
    for (let i=0;i < charList.length;i++){
        charList[i] = String.fromCharCode(charList[i].charCodeAt(0) + encodeDegree);
    }
    result.textContent = charList.join("");
}

function updateValue() {
    sliderValue.textContent = degree.value;
}