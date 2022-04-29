let markers = new Map();
const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener('DOMContentLoaded', (_) => {
	var map = L.map('map').setView([42.3433, -71.0411], 16);
      L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=DNCiULABgsnLAzJKiWCp',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 5,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
      }).addTo(map);
	const post = async (activeElement) => {
		if(activeElement == "1") {
			var marker = L.marker([42.339800, -71.042016], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.4 + ' meters');
			var marker = L.marker([42.340006, -71.041737], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(8.9 + ' meters');
			await delay(2000);
			var marker = L.marker([42.341099, -71.040497], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.1 + ' meters');
			var marker = L.marker([42.341099, -71.040497], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.0 + ' meters');
			var marker = L.marker([42.341189, -71.040554], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(9.3 + ' meters');
			await delay(2000);
			var marker = L.marker([42.341791, -71.039755], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.0 + ' meters');
			var marker = L.marker([42.342604, -71.039063], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.5 + ' meters');
			await delay(2000);
			await delay(2000);
		}
		if(activeElement == "2") {
			var marker = L.marker([42.343712, -71.038356], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(7.0 + ' meters');
			var marker = L.marker([42.343874, -71.038571], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.4 + ' meters');
			await delay(2000);
			var marker = L.marker([42.343930, -71.038660], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.9 + ' meters');
			var marker = L.marker([42.343986, -71.038773], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(2.9 + ' meters');
			await delay(2000);
			await delay(2000);
			await delay(2000);
		}
		if(activeElement == "3") {
			var marker = L.marker([42.343830, -71.036328], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.2 + ' meters');
			delay(2000)
			var marker = L.marker([42.343828, -71.036014], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.4 + ' meters');
			delay(2000)
			var marker = L.marker([42.343911, -71.035692], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.0 + ' meters');
			var marker = L.marker([42.343719, -71.034998], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.0 + ' meters');
		}
		if(activeElement == "4") {
			var marker = L.marker([42.344722, -71.030020], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(7.0 + ' meters');
			var marker = L.marker([42.344761, -71.031540], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.4 + ' meters');
			await delay(2000);
			await delay(2000);
			var marker = L.marker([42.344679, -71.032755], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(5.9 + ' meters');
			var marker = L.marker([42.344688, -71.033973], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(2.9 + ' meters');
			await delay(2000);
			await delay(2000);
			await delay(2000);
		}
		if(activeElement == "5") {
			var marker = L.marker([42.344700, -71.036215], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.9 + ' meters');
			var marker = L.marker([42.344482, -71.036377], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.9 + ' meters');
			await delay(2000);
			var marker = L.marker([42.344400, -71.037377], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.1 + ' meters');
			var marker = L.marker([42.344582, -71.036487], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(4.0 + ' meters');
			var marker = L.marker([42.344512, -71.035555], {icon: greenIcon}).addTo(map).on('click', onClick);
			marker.bindPopup(3.3 + ' meters');
			await delay(2000);
			await delay(2000);
			await delay(2000);
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
});
   window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

	//end receive coordinates

