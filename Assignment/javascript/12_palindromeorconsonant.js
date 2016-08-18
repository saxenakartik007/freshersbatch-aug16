function checkPC(){
var count=0;
var str=document.getElementById("word").value;
var b=true;
var len = str.length;
for ( var i = 0; i < Math.floor(len/2); i++ ) {
    if (str[i] !== str[len - 1 - i]) {
        b=false;
        
    }
}
if(b)
document.getElementById("sol").innerHTML =(str+" is a pelindrome");
else
	document.getElementById("sol").innerHTML =(str+" is a consonant");
	

}