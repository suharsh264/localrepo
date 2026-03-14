let calculation = "";
let result = " ";

let inputValue = document.querySelector('#inputNumber');

console.log(inputValue)
// console.log(inputAttribute);

function buttonOne(){
  calculation = `1`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;

}

function buttonTwo(){
  calculation = `2`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonThree(){
  calculation = `3`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonFour(){
  calculation = `4`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonFive(){
  calculation = `5`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonSix(){
  calculation = `6`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonSeven(){
  calculation = `7`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonEight(){
  calculation = `8`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonNine(){
  calculation = `9`;
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonZero(){
  calculation = `0`
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonPlus(){
  calculation = ` + `
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonMinus(){
  calculation = ` - `;
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonMultipe(){
  calculation = ` * `;
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonDivide(){
  calculation = ` / `
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonPercent(){
  calculation = ` % `
    console.log(calculation);
    result += calculation;
    inputValue.innerText += calculation;
}

function buttonClear(){
  calculation = '';
  console.log(calculation);
  result = ''
  inputValue.innerText = calculation;
}

function buttonSum(){
   let finalResult = eval(result);
    console.log(result);
    console.log(finalResult);
    inputValue.innerText = finalResult;
}

