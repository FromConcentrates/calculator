
let num2 = 0;

const add = function(num1, num2) {
	return num1 + num2
};
const subtract = function(num1, num2) {
	return num1 - num2
};
const multiply = function(num1, num2) {
  return num1 * num2
};
const divide = function(num1, num2) {
    return num1 / num2
}


    

function operator(num1, operator, num2){
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {return 'ERROR'}
}

const displayText = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
let number = "";

/* A string of numbers is inputted by user 
The string is stored in the number variable
The string is converted into a number
The number is display as text
  */
numberButtons.forEach(button => {
  button.addEventListener('click', (event)=> {
   let text = event.target.textContent
   number += text;
   number = Number(number);
   displayText.textContent = `${number}`;
  });
});



let calcOperator = "";
let number1 = '';

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {  
  button.addEventListener('click', (event)=> {
   calcOperator = event.target.textContent
   number1 = number;
   number = "";
   displayText.textContent = `${number1} ${calcOperator}`;
   
  });
});



let number2 = '';

numberButtons.forEach(button => {  
  button.addEventListener('click', (event)=> {
    let text2 = event.target.textContent
    number2 += text2;
    number2 = Number(number);
   displayText.textContent = `${number1} ${calcOperator} ${number2}`;
  });
});

const equalitySign = document.querySelectorAll('.equality');

let resultDisplay = operator(number1, calcOperator, number2);
/*
//display can be updated by textContent
//display must be updated and inputs stored simultaneously
//. I want javascript to listen for the click, store the textcontent of the button, then store that as a variable.

To listen for clicks on 15 buttons and store their values into 3 separate variables 
in JavaScript, you can use document.querySelectorAll() to select the buttons, 
then loop through them to add an event listener that updates the variables based 
on the button clicked. Each variable can store the values as needed, 
depending on your specific logic for grouping the button values

Create the functions that update one of your number variables when 
the calculator’s digit buttons are clicked. Your calculator’s display 
should also update to reflect the value of that number variable.*/