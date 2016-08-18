function asc(){
var arr=new Array();
arr[0]=22;
arr[1]=13;
arr[2]=79;
arr[3]=58;
arr[4]=45;
arr[5]=34;
	arr.sort();
	var temp="";
	var i=0;
	for(; i<arr.length;i++){
		temp=temp+"</br>"+arr[i];
	}
	

	document.getElementById("sol").innerHTML = temp;

}

function dsc(){
	var arr=new Array();
	arr[0]=22;
	arr[1]=13;
	arr[2]=79;
	arr[3]=58;
	arr[4]=45;
	arr[5]=34;
		arr.sort();
		var temp="";
		var i=arr.length-1;
		for(; i>=0;i--){
			temp=temp+"</br>"+arr[i];
		}
		

		document.getElementById("sol").innerHTML = temp;

	}