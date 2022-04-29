let markers = new Map();
const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener('DOMContentLoaded', (_) => {
	var map = L.map('map').setView([42.3463, -71.0421], 15);
      L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=DNCiULABgsnLAzJKiWCp',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 5,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
      }).addTo(map);
	const post = async (activeElement) => {
		if(activeElement == "1") {
			var marker = L.marker([42.342834, -71.045756], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.4 + ' meters');
			var marker = L.marker([42.342467, -71.046437], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(8.9 + ' meters');
			var marker = L.marker([42.343482, -71.045493], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(2.9 + ' meters');
			await delay(2000);
			var marker = L.marker([42.344402, -71.044560], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.1 + ' meters');
			var marker = L.marker([42.345305, -71.043351], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.0 + ' meters');
			await delay(2000);
			var marker = L.marker([42.345380, -71.042644], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(9.3 + ' meters');
			await delay(2000);
			var marker = L.marker([42.345713, -71.042322], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.0 + ' meters');
			var marker = L.marker([42.346117, -71.042494], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.5 + ' meters');
			await delay(2000);
		}
		if(activeElement == "2") {
		}
		if(activeElement == "3") {
		}
		if(activeElement == "4") {
		}
		if(activeElement == "5") {
		}
	}
	

	let f = document.getElementById("parking-space");
	
	//sends button press to main.go via websocket
	let form = document.getElementById("input-form");
	form.addEventListener("submit", function (event) {
    event.preventDefault();
    var activeElement = document.activeElement;
	post(activeElement.value);
	if(activeElement.value == "1") {
		document.getElementById("gif").src="gifs/1.gif";
	}
	if(activeElement.value == "2") {
		document.getElementById("gif").src="gifs/2.gif";
	}
	if(activeElement.value == "3") {
		document.getElementById("gif").src="gifs/3.gif";
	}
	if(activeElement.value == "4") {
		document.getElementById("gif").src="gifs/4.gif";
	}
	if(activeElement.value == "5") {
		document.getElementById("gif").src="gifs/5.gif";
	}
	});
	//end of sending
	  	
	  var greenIcon = L.icon({
    iconUrl: 'https://i.ibb.co/CQ1sxd0/Map-Marke2r-PN2-G-Clipart-removebg-preview.png',
    shadowUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC',
    // iconSize:     [23, 37],
    //custom marker is already correct size
    shadowSize:[80,100],
    iconAnchor:[32, 72],
    shadowAnchor:[29.5,95]

});
    

      function onClick(e) {
    alert(this.getLatLng());
}

function onMouseover(e) {
    this.openPopup();
}

    var marker = L.marker([40.7440, -74.0324], {icon: greenIcon}).addTo(map).on('click', onClick);
      markers.set(40.7440.toString() + -74.0324.toString(), marker); // tester code for Map of markers
	marker.bindPopup(4 + ' meters');
      var marker = L.marker([40.731966, -74.039354], {icon: greenIcon}).addTo(map).on('click', onClick);

      var marker = L.marker([40.740153, -74.033861], {icon: greenIcon}).addTo(map).on('click', onClick);

      var marker = L.marker([40.739098, -74.032499], {icon: greenIcon}).addTo(map).on('click', onClick);
	
		//receive coordinates from websocket
	websocket.addEventListener("message", function (e) {
		let data = JSON.parse(e.data);
		let y = data.y;
		let x = data.x;
		let size = data.size;
		let lat = y*0.000008706 + 42.337098;
        let lon = x*0.0000123172 + -71.036649;
        var marker = L.marker([lat,lon], {icon: greenIcon}).addTo(map).on('click', onClick);
        marker.bindPopup(size + 'meters');
	});
	//end receive coordinates
});
