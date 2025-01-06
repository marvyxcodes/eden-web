import L from "leaflet";
// import { checkForLocation, setupMap } from './map.ts';


export function checkForLocation() {
    if("geolocation" in navigator) {
        console.log("Geolocation is available");
    }
    else {
        console.log("Could not gather geolocation information");
    }
}



export function setupMap() {
    let map = L.map('map').setView([36.09, -94.16], 10);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}


// checkForLocation();
setupMap();