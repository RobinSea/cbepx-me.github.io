function jb(val){
if(main_ret == 179 || main_ret == 0){
	localStorage.Fail--;
	setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Exploit Complete ✔";
	if(val){load_payload('hen');}
	else{document.getElementById("jailbreak").style.display="block";document.getElementById("exploit").style.display="none";}}, 500);
} else{
	document.getElementById("fail").innerHTML="Fail: "+localStorage.Fail;
	alert("Jailbreak Failed!! Please Restart and Start Fresh!!!");
}
}