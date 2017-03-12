//Add eventlistener for all 16 buttons
var btn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var calcResult = '';//To store all the typed values
var reset = false;//Boolean for reset - when = or c or 0 is pressed
var calcSwitch = false;//Boolean for update result when calc buttons +, -, *, / are pressed
var operators = ["+","-","*","/"];//Operators array

for(var i = 0; i<btn.length; i++){
	btn[i].addEventListener('click', function(){
		var pressedVal = this.innerHTML;
		if(reset || calcResult == "0"){
			reset = false;
			calcResult = '';
		}

		if(pressedVal == "="){
			reset = true;//Clear everytime = is pressed
			if(operators.indexOf(calcResult.slice(-1)) == -1){
				calcResult = eval(calcResult); //JS function to evaluate mathematical expression
			}
		}else if(pressedVal == "C"){
			calcResult = 0;
			reset = true;//Clear
		}else{
			calcResult = calcResult +  pressedVal;
		}

		if(pressedVal=="+"||pressedVal=="*"||pressedVal=="-"||pressedVal=="/"){
			if(calcSwitch){
				calcSwitch = false;
				if(operators.indexOf(calcResult.slice(-1)) > -1){	
					//If operator pressed twice remove the last one
					calcResult = calcResult.substring(0,calcResult.length-1);//take a substring starting from zero to length - 1
				}else{
					//Check if the last character typed in not in the operators array
					calcResult = eval(calcResult); //JS function to evaluate mathematical expression
				}
			}		
			calcSwitch = true;
		}
		output.innerHTML = calcResult;
	});
}