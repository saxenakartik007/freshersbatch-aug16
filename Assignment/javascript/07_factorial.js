function findfact(){
	var num;
	   num=document.getElementById("num").value;
	  var sol=1;
	  num=parseInt(num);
	  for(var i=1;i<=num;i++){
		  sol=sol*i;
	  }
	  document.getElementById("ans").innerHTML = sol;
	  
}

