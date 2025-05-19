const input = document.getElementById("input");
const result = document.getElementById("result");

function encode() {
    let charList = input.value.split("");
    for (let i=0;i < charList.length;i++){
        charList[i] = String.fromCharCode(charList[i].charCodeAt(0) + 1);
    }
    result.textContent = charList.join("");
}