const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const weightconditionEl = document.getElementById("weight-condition");

function calcBMI() {
  const heightvalue = document.getElementById("height").value / 100;
  const weightvalue = document.getElementById("weight").value;
  const bmivalue = weightvalue / (heightvalue * heightvalue);
  resultEl.value = bmivalue;
  if (bmivalue < 18.5) {
    weightconditionEl.innerText = "Under weight";
  } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
    weightconditionEl.innerText = "Normal weight";
  } else if (bmivalue >= 25 && bmivalue <= 29.9) {
    weightconditionEl.innerText = "Over weight";
  } else if (bmivalue > 30) {
    weightconditionEl.innerText = "Obesity";
  }
}
btnEl.addEventListener("click", calcBMI);
