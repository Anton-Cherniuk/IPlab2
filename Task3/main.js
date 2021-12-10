let x = document.querySelector("#x")
let y = document.querySelector("#y")
let result = document.querySelector("#result")
let onBtnclk = document.querySelector("#onBtnclk")

function solve(){

  result.innerHTML=""

  let sum = BigInt(Number(x.value) + Number(y.value));

  result.innerHTML = sum.toString();
}

onBtnclk.addEventListener("click", solve);