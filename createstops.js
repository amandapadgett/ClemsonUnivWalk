// This array contains the coordinates for all bus stops between MIT and Harvard
const myStops = [
  [-82.838282, 34.679739],
  [-82.838781, 34.677061],
  [-82.836295, 34.676850],
  [-82.832742, 34.676973],
  [-82.831545, 34.676881],
  [-82.831293, 34.677529]
];


mapboxgl.accessToken =
  'pk.eyJ1IjoiYW1hbmRhcGFkZ2V0dCIsImEiOiJjbDNhdHpqejEwMGx6M2Rud2FyZGtqaWxpIn0.aYCPf3hHJDlgpzIAHrcaOw';


let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-82.837409, 34.680013],

  zoom: 14,
});


let marker = new mapboxgl.Marker().setLngLat([-82.837409, 34.680013]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
 
  setTimeout(() => {
    if (counter >= myStops.length) return;
    marker.setLngLat(myStops[counter]);
    counter++;
    move();
  }, 1000);
}


if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, myStops };
}

