import { $ } from './dom.js';
import { isValidNumeric } from './validators.js';

//DOM elements for results
let abs = $('#abs'); //let can be sub with const because we will not change the value.
let round = $('#round');
let ceiling = $('#ceiling');
let floor = $('#floor');
let square = $('#square');
let squareRoot = $('#squareRoot');
let power = $('#power');
let root = $('#root');
let sine = $('#sine');
let cos = $('#cos');
let tan = $('#tan');

let maxNumber = $('#maxNumber');
let minNumber = $('#minNumber');
let randomNumber = $('#randNumber');

//Element to store the form:
const mathForm = $('#myMathForm');

//DOM Query for Form
//Add event listener with Form Element
mathForm.addEventListener('submit', function (evt) {
	let absInput = this.elements.txtAbs.value;
	if (isValidNumeric(absInput)) {
		abs.innerText = Math.abs(absInput);
	}

	let roundInput = this.elements.txtRound.value;
	if (isValidNumeric(roundInput)) {
		round.innerText = Math.round(roundInput);
	}

	let rand = Math.floor(Math.random() * 101); //generate a random number
	randomNumber.innerText = rand;

	//get using form element selection:
	let val1Input = this.elements.txtValue1.value;
	let val2Input = this.elements.txtValue2.value;

	if (isValidNumeric(val1Input) && isValidNumeric(val2Input)) {
		let max = Math.max(val1Input, val2Input);
		let min = Math.min(val1Input, val2Input);
		maxNumber.innerText = max;
		minNumber.innerText = min;
	}

	console.log(val1Input);
	console.log(val2Input);

	evt.preventDefault();
});
