let markers = new Map();

window.addEventListener('DOMContentLoaded', (_) => {
	let websocket = new WebSocket("wss://" + window.location.host + "/websocket");
	let gif = document.getElementById("parking-space");
	var gif1 = document.getElementById("gif1")
	gif1.style.visibility = 'hidden';
	var gif2 = document.getElementById("gif2")
	gif2.style.visibility = 'hidden';
	var oldgif;
	
	//sends button press to main.go via websocket
	let form = document.getElementById("input-form");
	form.addEventListener("submit", function (event) {
    event.preventDefault();
    var activeElement = document.activeElement;
	if(activeElement.value == "1") {
		gif1.style.visibility = 'visible';
		oldgif.style.visibility = 'hidden';
		oldgif = gif1;
	}
	if(activeElement.value == "2") {
		gif2.style.visibility = 'visible';
		oldgif.style.visibility = 'hidden';
		oldgif = gif2;
	}
	websocket.send(
      JSON.stringify({
		scene: activeElement.value
      })
    );
	//end of sending
	
	//receive coordinates from websocket
	websocket.addEventListener("message", function (e) {
		let data = JSON.parse(e.data);
		let y = data.y;
		let x = data.x;
		let size = data.size;
	});
	//end receive coordinates
	
	});
});
