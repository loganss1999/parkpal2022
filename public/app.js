let markers = new Map();

window.addEventListener('DOMContentLoaded', (_) => {
	var map = L.map('map').setView([42.3463, -71.0421], 15);
      L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=DNCiULABgsnLAzJKiWCp',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 5,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
      }).addTo(map);
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
		gif2.style.visibility = 'hidden';
	}
	if(activeElement.value == "2") {
		gif2.style.visibility = 'visible';
		gif1.style.visibility = 'hidden';
	}
	websocket.send(
      JSON.stringify({
		scene: activeElement.value
      })
    );
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
