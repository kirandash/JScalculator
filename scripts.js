//Add eventlistener for all 16 buttons
var myBtn = document.getElementsByClassName("cbutton");
console.log(myBtn);
for(var i = 0; i<myBtn.length; i++){
	myBtn[i].addEventListener('click', function(){
		console.log('clicked');
	});
}