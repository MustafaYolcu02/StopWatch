let sec = 0;
let ten = 0;
let intervalId;



function start() {
	intervalId = setInterval(updateTimer, 10);
}

function stop() {
	clearInterval(intervalId);
}

function reset() {
	sec = 0;
	ten = 0;
	document.getElementById('ten').innerText = formatTime(ten);
	document.getElementById('sec').innerText = formatTime(sec);
}

function updateTimer() {
	ten++;
	if (ten == 100) {
		ten = 0;
		sec += 1;
	}
	document.getElementById('ten').innerText = formatTime(ten);
	document.getElementById('sec').innerText = formatTime(sec);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}