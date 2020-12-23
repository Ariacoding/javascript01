function handleClickPlus() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const result = Number(num1) + Number(num2);
    document.getElementById("result").innerText = result;

}
function handleClickMinus() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const result = (num1) - (num2);
    document.getElementById("result").innerText = result;
}
function handleClickDivide() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const result = (num1) / (num2);
    const finalResult = (Math.round(result * 1000) / 1000).toFixed(3);
    document.getElementById("result").innerText = finalResult;
}
function handleClickMultiply() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const result = (num1) * (num2);
    document.getElementById("result").innerText = result;
}
