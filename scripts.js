//Add eventlistener for all 16 buttons
var myBtn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var myCal = '';//To store all the typed values

for(var i = 0; i<myBtn.length; i++){
	myBtn[i].addEventListener('click', function(){
		var myValue = this.innerHTML;

		myCal = myCal +  myValue;
		output.innerHTML = myCal;
	});
}