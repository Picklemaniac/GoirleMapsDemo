const map = L.map('map').setView([51.5237, 5.0642], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

locs.forEach(item => {
    let marker = L.marker([item.long, item.lat]).addTo(map);
    marker.bindPopup(`
            <b>${item.address}</b>.
            <br>
            <span>${item.description == null ? '' : item.description + '<br>'}</span>
            <a href="https://www.google.com/maps/search/?api=1&query=${item.long}+${item.lat}">Google maps directies</a>`)
});

