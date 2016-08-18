function cal(){
var arr=new Array();
arr[0]=22;
arr[1]=13;
arr[2]=79;
arr[3]=58;
arr[4]=45;
arr[5]=34;
	arr.sort();
	document.getElementById("min").innerHTML = "max"+arr[0];
	document.getElementById("max").innerHTML = "max"+arr[5];
	var temp=0;
	var i=0;
	for(; i<arr.length;i++){
		temp=temp+arr[i];
	}
	
	temp=temp/i;
	document.getElementById("avg").innerHTML = temp;

}