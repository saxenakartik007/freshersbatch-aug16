function calage(){
	var name;
	var age;
	var birthyear;
	var d = new Date();	
	var n = d.getFullYear();
	
	
		name=document.getElementById('name').value;
		age=document.getElementById('age').value;
          birthyear= n-parseInt(age);
          alert(name+", your birthyear is "+birthyear);
	
	
}