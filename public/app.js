let markers = new Map();

window.addEventListener('DOMContentLoaded', (_) => {
	let websocket = new WebSocket("wss://" + window.location.host + "/websocket");
	let gif = document.getElementById("parking-space");
	var gif1 = document.getElementById("gif1")
	gif1.style.visibility = 'hidden';
	var gif2 = document.getElementById("gif2")
	gif2.style.visibility = 'hidden';
	websocket.addEventListener("message", function (e) {
		let data = JSON.parse(e.data);
	});
	
	let form = document.getElementById("input-form");
	form.addEventListener("submit", function (event) {
    event.preventDefault();
    var activeElement = document.activeElement;
	if(activeElement.value == "1") {
		gif1.style.visibility = 'visible';
		gif2.style.visibility = 'hidden';
	}
	if(activeElement.value == "2") {
		gif2.style.visibility = 'visible';
		gif1.style.visibility = 'hidden';
	}
	websocket.send(
      JSON.stringify({
        username: username.value,
        text: text.value,
      })
    );
	});
});
