function countVWL(){
var count=0;
var vowel="the crazy fox jumps over the lazy dog";
//vowel=document.getElementById("alphabet").value;
var i=0;
for(;i<vowel.length;i++){
	 if(vowel[i]=='a'||vowel[i]=='e'||vowel[i]=='i'||vowel[i]=='o'||vowel[i]=='u'||vowel[i]=='A'||vowel[i]=='E'||vowel=='I'||vowel[i]=='O'||vowel[i]=='U'){
		count++;
		 
	  }	
}
document.getElementById("sol").innerHTML =("Number of vowels "+count);

}