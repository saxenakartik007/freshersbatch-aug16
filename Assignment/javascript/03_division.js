function dividenum(){
	var num1;
	var num2;
	
	
		num1=document.getElementById('num1').value;
		num2=document.getElementById('num2').value;
		if(parseInt(num2)==0){
			alert("You cannot divide a number with zero");
		}
		else{
			var div = Math.floor(parseInt(num1)/parseInt(num2));
			document.getElementById("ans").innerHTML = div;
			
		}
	
	
}