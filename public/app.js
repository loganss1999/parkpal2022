class Spot {
    constructor(lat, lon, length, time) {
        this.lat = lat;
        this.lon = lon;
        this.time = time;
        this.length = length;
    }
}

let markers = new Map();

var gif1 = document.getElementById("gif1")
gif1.style.visibility = 'hidden';
var gif2 = document.getElementById("gif2")
gif2.style.visibility = 'hidden';

window.addEventListener('DOMContentLoaded', (_) => {
	let websocket = new WebSocket("wss://" + window.location.host + "/websocket");
	let gif = document.getElementById("parking-space");
	websocket.addEventListener("message", function (e) {
		let data = JSON.parse(e.data);
		let parkingSpace = new Spot(${data.Y},${data.X},${data.size},${data.time})
	});
	
	let form = document.getElementById("input-form");
	form.addEventListener("submit", function (event) {
    event.preventDefault();
    let car = document.getElementById("car")
    if (car.value != 0) {
		if(car.value == 1) {
			gif1.style.visibility = 'visible';
			gif2.style.visibility = 'hidden';
		}
		if(car.value == 2) {
			gif2.style.visibility = 'visible';
			gif1.style.visibility = 'hidden';
		}
		websocket.send(
		  car: car.value,
		);
	}
	car.value = 0;
	
});
