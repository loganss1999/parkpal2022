class Spot {
    constructor(lat, lon, length, time) {
        this.lat = lat;
        this.lon = lon;
        this.time = time;
        this.length = length;
    }
}

let markers = new Map();

window.addEventListener('DOMContentLoaded', (_) => {
	let websocket = new WebSocket("wss://" + window.location.host + "/websocket");
	let gif = document.getElementById("parking-space");
	websocket.addEventListener("message", function (e) {
		let data = JSON.parse(e.data);
		let parkingSpace = new Spot(${data.X},${data.Y},${data.size},${data.time})
	});
	
	let form = document.getElementById("input-form");
	form.addEventListener("submit", function (event) {
    event.preventDefault();
    let car = document.getElementById("car")
    if (car.value != 0) {
		websocket.send(
		  car: car.value,
		);
	}
	car.value = 0;
	
});
