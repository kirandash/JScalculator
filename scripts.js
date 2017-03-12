//Add eventlistener for all 16 buttons
var btn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var calcResult = '';//To store all the typed values
var reset = false;//Boolean for reset - when = or c or 0 is pressed
var calcSwitch = false;//Boolean for update result when calc buttons +, -, *, / are pressed

for(var i = 0; i<btn.length; i++){
	btn[i].addEventListener('click', function(){
		var pressedVal = this.innerHTML;
		if(reset || calcResult == "0"){
			reset = false;
			calcResult = '';
		}

		if(pressedVal == "="){
			calcResult = eval(calcResult); //JS function to evaluate mathematical expression
			reset = true;//Clear everytime = is pressed
		}else if(pressedVal == "C"){
			calcResult = 0;
			reset = true;//Clear
		}else{
			calcResult = calcResult +  pressedVal;
		}

		if(calcSwitch){
			calcSwitch = false;
			calcResult = eval(calcResult); //JS function to evaluate mathematical expression
		}

		if(pressedVal=="+"||pressedVal=="*"||pressedVal=="-"||pressedVal=="/"){
			calcSwitch = true;
		}
		output.innerHTML = calcResult;
	});
}