	var counter=0;
function validate(){

  var validemail="kartik@xoriant.com";
  var validpass="0123456789"
 var	email=document.getElementById("email").value;
 var	password=document.getElementById("password").value;
counter=counter+1;
	if(validemail==email && validpass==password){
		//welcome screen
		console.log("Welcome");
	}
	else if (counter>3) {
		console.log("Account BLocked");
	}
	
	else{
		document.getElementById("ans").innerHTML ="Wrong Email id Or password ";
		console.log(counter);
	}
	

}