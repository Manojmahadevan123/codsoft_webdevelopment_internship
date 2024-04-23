const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operator'));
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;
buttons.map( button => {
	button.addEventListener('click', (e) => {
		currentNum += e.target.value;
		display.value = currentNum;
	});
});

operators.map( operator => {
	operator.addEventListener('click', (e) => {
		if (currentOperator!== null) calculate();
		currentOperator = e.target.value;
		prevNum = currentNum;
		currentNum = '';
	});
});

decimal.addEventListener('click', () => {
	if (!currentNum.includes('.')) currentNum += '.';
	display.value = currentNum;
});

clear.addEventListener('click', () => {
	currentNum = '';
	prevNum = '';
	result = null;
	currentOperator = null;
	display.value = '';
});

equals.addEventListener('click', () => {
	if (currentOperator === null || currentNum === '') return;
	calculate();
});

function calculate() {
	let num1 = Number(prevNum);
	let num2 = Number(currentNum);
	let calculation;

	switch (currentOperator) {
		case '+':
			calculation = num1 + num2;
			break;
		case '-':
			calculation = num1 - num2;
			break;
		case '*':
			calculation = num1 * num2;
			break;
		case '/':
			if (num2 === 0) {
				alert('Cannot divide by zero');
				return;
			}
			calculation = num1 / num2;
			break;
	}
}
