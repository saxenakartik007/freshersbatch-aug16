function checkprime(){
	var  num1;
	var num2;
	var result;
	num1=parseInt(document.getElementById("num1").value);
	num2=parseInt(document.getElementById("num2").value);
	var b=true;
	result="";
	
	for(var i=num1;i<=num2;i++){
		for(var j=(i-1);j>1;j++){
			if(i%j===0){
			b=true;
			}			
		}
		if(b===false){
			result="</br>"+result+" "+ i;
			b=true;
		}		
	}
	
	if(result.length>0){
		document.getElementById("ans").innerHTML = result;
		
	}
	else{
		result="No prime number between "+num1+" and "+num2;

		document.getElementById("ans").innerHTML = result;
		
	}
	

	
}