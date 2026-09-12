// alert('hello');

const mapElement = document.querySelector('#map');
var map = L.map(mapElement, { maxZoom: 18, zoomSnap: 0 }).setView([39.95, -75.16], 12);

const mapboxKey = 'pk.eyJ1IjoiZXZ6aG9uZyIsImEiOiJjbXR1amU4NTgwbDJiMndvcHk0cDY1cXZwIn0.04V1QlAtr7xLGktkYOsBfw';
const mapboxStyle = 'mapbox/streets-v11';

L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
  tileSize: 512,
  zoomOffset: -1,
  detectRetina: true,
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('pa_pres_results.geojson')
  .then(response => response.json())
  .then(data => {
    console.log(data.features[0].properties); // check this in the console first

    const resultsLayer = L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(feature.properties.NAME); // fix once you see real keys
      }
    }).addTo(map);

    map.fitBounds(resultsLayer.getBounds());
  })
  .catch(error => console.error('GeoJSON load failed:', error));

function getColor(feature) {
  const { party } = feature.properties;
  if (party === 'DEMOCRAT') return 'blue';
  if (party === 'REPUBLICAN') return 'red';
  return 'gray';
}