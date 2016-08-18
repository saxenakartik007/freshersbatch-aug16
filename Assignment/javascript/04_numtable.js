var num;
function genTable(){
	var table;	
	var input;
		num=parseInt(document.getElementById('num').value);

        caltable();	
}

function caltable(){
	
	document.getElementById('num').style.visibility = 'hidden';
	document.getElementById('result').style.visibility = 'hidden';

	table="";
	var temp=0;
	var i=1;
	do{
		temp=num*i;
		table= (table+"</br>")+(num+" *"+i+" ="+ temp);
		i++;
	}while (i<11) 
	
		document.getElementById('ans').style.visibility = 'inline';
	document.getElementById('ans').style.visibility = 'visible';
		document.getElementById("ans").innerHTML = table;
	
	    num++;
	    document.getElementById('continue').style.display="inline";;


}
