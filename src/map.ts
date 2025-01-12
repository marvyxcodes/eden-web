import L from "leaflet";

export function checkLocationAvailability() {
    if("geolocation" in navigator) {
        console.log("Geolocation is available");
        return true;
    }
    else {
        console.log("Could not gather geolocation information");
        return false;
    }
}

export async function gatherLocation() {
    function success(pos) {
        setupMap(pos.coords);
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    return navigator.geolocation.getCurrentPosition(success, error);
}

export async function setupMap(pos) {
    let lat = pos.latitude;
    let long = pos.longitude;
    console.log(lat, long)

    let map = L.map('map').setView([lat, long], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

// let marker = L.marker([51.5, -0.09]).addTo(map);
gatherLocation();