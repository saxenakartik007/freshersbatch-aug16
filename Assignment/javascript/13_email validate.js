function checkPC(){
var count=0;
var str=document.getElementById("email").value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

if(str.match(mailformat))  
{  

document.getElementById("sol").innerHTML =(str+" is a valid Email");
return true
}  
else  
{  
document.getElementById("sol").innerHTML =(str+" is not a valid Email");
return false;
}  

}