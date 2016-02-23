
window.addEventListener("load", init, false);

function init(){
	calc();
	trip();
	bmi(); 
	mortgage();
}

function calc() {

var button = document.getElementById("basic-calc");
console.log(button);
button.addEventListener("click", calculate1);

function calculate1()
{

	var number1 = parseInt(document.getElementById("basic-num-1").value);

	var number2 = parseInt(document.getElementById("basic-num-2").value);

	var operators = document.getElementById("basic-operation").value;

	var answers = document.getElementById("basic-answer-alert");

	console.log(operators);

	function addition() {
		
			console.log("add");
			var result = number1 + number2;
			answers.innerText = result;

	}

	function minus()
	{
			var result = number1 - number2;
			answers.innerText = result;

	}

	function times()
	{
			var result = number1 * number2;
			answers.innerText = result;
	}
	function divide()
	{
			var result = number1 / number2;
			answers.innerText = result;
	}

	if(operators == "+")
	{
		addition();
	}
	else if(operators == "-")
	{
		minus();
	}
	else if(operators == "*")
	{
		times();
	}
	else if(operators == "/")
	{
		divide();
	}
}

}

	
function trip() {

var button2 = document.getElementById("trip-calc");
console.log(button2);
button2.addEventListener("click", calculate2);

	function calculate2() {

		var distance = parseInt(document.getElementById("trip-distance").value);

		var mpg = parseInt(document.getElementById("trip-mpg").value);

		var cost = parseInt(document.getElementById("trip-cost").value);

		var speed = parseInt(document.getElementById("trip-speed").value);

		var answersTrip = document.getElementById("trip-answer-alert");

		if(distance <= 60) {

		var result = distance / mpg * cost;
		answersTrip.innerText = result; 

		}

		else if(distance > 60) {

		var result = distance / (mpg - (speed - 60) * 2) * cost;
		answersTrip.innerText = result; 
		}

	}

}

function bmi() {

var button3 = document.getElementById("bmi-calc");
console.log(button3);
button3.addEventListener("click", calculate3);

	function calculate3 () {

		var mass = parseFloat(document.getElementById("bmi-mass").value);


		var height = parseFloat(document.getElementById("bmi-height").value);

		var answerbmi = document.getElementById("bmi-answer-alert");
		var operators2 = document.getElementById("bmi-units").value

 		console.log(operators2)
		
		if (operators2 === "imperial") {

			bmiImperial(); 

		}

		if (operators2 === "metric") {
			bmiMetric();
		}
		
		function bmiImperial () { 
			console.log('imperial executed')
			console.log(mass,height)
			var result = (mass / (height*height) )* 703 ; 
			console.log(result)
			answerbmi.innerText = result


		}

		function bmiMetric () {
			console.log('metric executed')
			var result = mass / (height * height) ;
			answerbmi.innerText = result
		}

	}


}


function mortgage() {

var button4 = document.getElementById("mortgage-calc");
console.log(button4);
button4.addEventListener("click", calculate4);

	function calculate4 () {

		var loan = parseFloat(document.getElementById("mortgage-loan").value);

		var apr = parseFloat(document.getElementById("mortgage-apr").value);

		var term = parseInt(document.getElementById("mortgage-term").value);

		var answerMortgage = document.getElementById("mortgage-answer-alert");

		mortgagecalc();
		
		function mortgagecalc () { 

		var result = loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1); 
		answerMortgage.innerText = result.toFixed(2); 


		}

	}


}