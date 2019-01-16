function chgBtnDisplay()
{
	document.getElementById("c").style.display="none";
}


 function chgBtnColor(okBtn)
 {
	 document.getElementById("okBtn").style.backgroundColor="orange"
	 document.getElementById("okBtn").style.Color="white"
	 var ele=document.getElementsByClassName("okCal");
	 var i;
	 for(i=0;i<ele.length;i++)
	 {
		document.getElementsByClassName("okCal")[i].style.backgroundColor="white";
	 }
 }
 function chgBtnColor(cancelBtn)
 {
	document.getElementById("cancelBtn").style.backgroundColor="orange"
	document.getElementById("cancelBtn").style.Color="white"
    var ele=document.getElementsByClassName("okCal");
	var i;
	for(i=0; i<ele.length;i++)
	{
		document.getElementsByClassName("okCal")[i].style.backgroundColor="white";
	}
 }