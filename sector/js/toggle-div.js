function toggle(toggleId) {
	var x = document.getElementById(toggleId);
    if (x.style.display === "block") {
        closeAll();
    } else {
		closeAll();
        x.style.display = "block";
    }
}

function closeAll() {
	if (document.getElementById("myDIV")) {
		document.getElementById("myDIV").style.display = "none";
	}
	
	if (document.getElementById("myDIV1")) {
		document.getElementById("myDIV1").style.display = "none";
	}
	
	if (document.getElementById("myDIV2")) {
		document.getElementById("myDIV2").style.display = "none";
	}
	
	if (document.getElementById("myDIV3")) {
		document.getElementById("myDIV3").style.display = "none";
	}
	
	if (document.getElementById("myDIV4")) {
		document.getElementById("myDIV4").style.display = "none";
	}
	
	if (document.getElementById("myDIV5")) {
		document.getElementById("myDIV5").style.display = "none";
	}
}