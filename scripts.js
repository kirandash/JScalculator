//Add eventlistener for all 16 buttons
var btn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var calcResult = '';//To store all the typed values
var reset = false;//Boolean for reset - when = or c or 0 is pressed
var calcSwitch = false;//Boolean for update result when calc buttons +, -, *, / are pressed
var operators = ["+", "-", "*", "/"];//Operators array

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var pressedValue = this.innerHTML;
        if (reset || calcResult == "0") {
            reset = false;
            calcResult = '';
        }
        if (pressedValue == "+" || pressedValue == "-" || pressedValue == "*" || pressedValue == "/") {
            if (calcSwitch) {
                calcSwitch = false; //Clear everytime an operator is pressed
                if (operators.indexOf(output.innerHTML.slice(-1)) > -1) {
                    calcResult = calcResult.substring(0, calcResult.length - 1); //take a substring starting from zero to length - 1
                } else {
                    //Check if the last character typed in not in the operators array
                    calcResult = eval(calcResult); //JS function to evaluate mathematical expression
                }
            }
            calcSwitch = true;
        }
        if (pressedValue == "=") {
            pressedValue = ''; //Clear everytime = is pressed
            if (operators.indexOf(output.innerHTML.slice(-1)) == -1) {
                calcResult = eval(calcResult); //JS function to evaluate mathematical expression
            }
        } else if (pressedValue == "C") {
            calcResult = 0;
            reset = true;
        } else if (output.innerHTML.indexOf(".") > -1 && pressedValue == ".") {
            //Don't allow two dots
            pressedValue = ''; //Clear last dot
        } else {
            calcResult = calcResult + pressedValue;
        }
        output.innerHTML = calcResult;
    });
}