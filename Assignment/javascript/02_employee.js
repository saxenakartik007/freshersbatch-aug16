function employee(empid, ename, empsalary,deptno)
{
this.empid=empid;
this.ename=ename;
this.empsalary=empsalary;
this.deptno=deptno;

this.getEmpID = function getEmpId()
{
return this.empid;
}
}


function employeeList(){
	var count=0;
	var emplist=new Array();
	emplist.push(new employee("X123", "ABC", "30000", "ENGG"))
	emplist.push(new employee("X987", "XYZ", "25000", "ENGG"))
	emplist.push(new employee("X567", "JFK", "65000", "HR"))
	emplist.push(new employee("X456", "PQR", "45000", "ADMIN"))
	
	
}
	function sortEMployee{
		
	}
