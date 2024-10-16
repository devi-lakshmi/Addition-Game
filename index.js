let firstNum = Math.ceil(Math.random() * 100);
let secondNum = Math.ceil(Math.random() * 100);

document.getElementById("firstNumber").textContent = firstNum;
document.getElementById("secondNumber").textContent = secondNum;

function check() {
    let input = parseInt(document.getElementById("userInput").value);
    if (input === firstNum + secondNum) {
        document.getElementById("gameStatus").textContent = "Congratulations! you got it Right.";
        document.getElementById("gameStatus").style.backgroundColor = "#028a0f";


    } else {
        document.getElementById("gameStatus").textContent = "Wrong Answer! Try Again.";
        document.getElementById("gameStatus").style.backgroundColor = "#1e217c";
    }

}
function restart() {
    document.getElementById("gameStatus").textContent = " ";


    firstNum = Math.ceil(Math.random() * 100);
    secondNum = Math.ceil(Math.random() * 100);

    document.getElementById("firstNumber").textContent = firstNum;
    document.getElementById("secondNumber").textContent = secondNum;
    document.getElementById("userInput").value = " ";
    document.getElementById("gameStatus").textContent = "";
}