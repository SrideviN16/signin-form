let form=document.querySelector('form');
form.addEventListener('submit',function(e)
{
	e.preventDefault();
	
	let name=document.getElementById("name").value;
	let pass=document.getElementById("pswd").value;
	let number=document.getElementById("number").value;
	let cpass=document.getElementById("pswd1").value;
	let result=document.querySelector('#result');
	if((name==' ')||(name.length<3)||(name.length>20))
	{
		 result.innerHTML="Please Enter Valid Name";
		 result.style.color="black";
		 
	}
	else if(isNaN(number))
	{
		result.innerHTML="Only number";
	}
	else if(pass.length<9)
	{
		result.innerHTML="please enter valid password";
		result.style.color="hotpink";
	}
	else if(pass!=cpass)
	{
		result.innerHTML="not same";
		result.style.color="red";
	}
		 
	else 
	{
		 alert("succes");
	}
	
		
})