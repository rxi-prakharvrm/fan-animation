function startFan() {
	document.querySelector('#fan-wings').classList.add("fan-animation");
	document.querySelector('.fan-switch-on-btn').style.backgroundColor="#867ae9";
	document.querySelector('.fan-switch-off-btn').style.backgroundColor="#ddd";
	document.querySelector('.fan-switch-on-btn').style.color="#fff";
	document.querySelector('.fan-switch-off-btn').style.color="#000";
}

function stopFan() {
	document.querySelector('#fan-wings').classList.remove("fan-animation");
	document.querySelector('.fan-switch-off-btn').style.backgroundColor="#867ae9";
	document.querySelector('.fan-switch-on-btn').style.backgroundColor="#ddd";
	document.querySelector('.fan-switch-off-btn').style.color="#fff";
	document.querySelector('.fan-switch-on-btn').style.color="#000";
}

function reverseFanDirection() {
	var x = document.querySelector('#fan-wings');
	if(x.style.animationDirection === "reverse") {
		document.querySelector('#fan-wings').style.animationDirection="normal";
		document.querySelector('.reverse-fan-direction-btn').style.backgroundColor="#f1f1f1";
		document.querySelector('.reverse-fan-direction-btn').style.color="#000";
	}
	else {
		document.querySelector('#fan-wings').style.animationDirection="reverse";
		document.querySelector('.reverse-fan-direction-btn').style.backgroundColor="#867ae9";
		document.querySelector('.reverse-fan-direction-btn').style.color="#fff";
	}	
}

function speed1() {
	document.querySelector('#fan-wings').classList.add("speed-1");
	document.querySelector('#fan-wings').classList.remove("speed-2");
	document.querySelector('#fan-wings').classList.remove("speed-3");
	document.querySelector('#fan-wings').classList.remove("speed-4");
	document.querySelector('#fan-wings').classList.remove("speed-5");
}

function speed2() {
	document.querySelector('#fan-wings').classList.add("speed-2");
	document.querySelector('#fan-wings').classList.remove("speed-1");
	document.querySelector('#fan-wings').classList.remove("speed-3");
	document.querySelector('#fan-wings').classList.remove("speed-4");
	document.querySelector('#fan-wings').classList.remove("speed-5");
}

function speed3() {
	document.querySelector('#fan-wings').classList.add("speed-3");
	document.querySelector('#fan-wings').classList.remove("speed-2");
	document.querySelector('#fan-wings').classList.remove("speed-1");
	document.querySelector('#fan-wings').classList.remove("speed-4");
	document.querySelector('#fan-wings').classList.remove("speed-5");
}

function speed4() {
	document.querySelector('#fan-wings').classList.add("speed-4");
	document.querySelector('#fan-wings').classList.remove("speed-2");
	document.querySelector('#fan-wings').classList.remove("speed-3");
	document.querySelector('#fan-wings').classList.remove("speed-1");
	document.querySelector('#fan-wings').classList.remove("speed-5");
}

function speed5() {
	document.querySelector('#fan-wings').classList.add("speed-5");
	document.querySelector('#fan-wings').classList.remove("speed-2");
	document.querySelector('#fan-wings').classList.remove("speed-3");
	document.querySelector('#fan-wings').classList.remove("speed-4");
	document.querySelector('#fan-wings').classList.remove("speed-1");
}