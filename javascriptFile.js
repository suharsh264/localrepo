let calculation = "";
let result = " ";
let newString;

let inputValue = document.querySelector('#inputNumber');

let plusSign = document.querySelector('#plus').innerHTML = "<img src='/practice-github/localrepo/images/addsign.svg' alt='plus'>";
let minusSign = document.querySelector('#minus').innerHTML = "<img src='/practice-github/localrepo/images/minussign.svg' alt='minus'>";
let MultipleSign = document.querySelector('#multiple').innerHTML = "<img src='/practice-github/localrepo/images/crosssign.svg' alt='multiple'>";
let divideSign = document.querySelector('#divide').innerHTML = "<img src='/practice-github/localrepo/images/dividesign.svg' alt='divide'>";
let percentSign = document.querySelector('#percent').innerHTML = "<img src='/practice-github/localrepo/images/percentsign.svg' alt='percent'>";
let equalToSign = document.querySelector('#equalTo').innerHTML = "<img src='/practice-github/localrepo/images/equalsign.svg' alt='equalTo'>";
let eraseSign = document.querySelector('#erase').innerHTML = "<img src='/practice-github/localrepo/images/erasesign.svg' alt='erase'>";

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
  result = ''
  inputValue.innerText = calculation;
}


function buttonSum(){
   let finalResult = eval(inputValue.innerText);
    console.log(inputValue.innerText);
    console.log(finalResult);
    inputValue.innerText = finalResult;
}

function eraseOne(){
 let eraseOneText = inputValue.innerText;
 newString = eraseOneText.slice(0,-1);
 inputValue.innerText = newString;
 }

 