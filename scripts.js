//Add eventlistener for all 16 buttons
var btn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var calcResult = '';//To store all the typed values
var reset = false;//Boolean for reset

for(var i = 0; i<btn.length; i++){
	btn[i].addEventListener('click', function(){
		var myValue = this.innerHTML;
		if(reset || calcResult == "0"){
			reset = false;
			calcResult = '';
		}

		if(myValue == "="){
			calcResult = eval(calcResult); //JS function to evaluate mathematical expression
			reset = true;//Clear everytime = is pressed
		}else if(myValue == "C"){
			calcResult = 0;
			reset = true;//Clear
		}else{
			calcResult = calcResult +  myValue;
		}
		output.innerHTML = calcResult;
	});
}