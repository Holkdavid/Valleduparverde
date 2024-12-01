document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el mapa centrado en Valledupar
    const map = L.map('mapa').setView([10.46314, -73.25322], 13);  // Coordenadas de Valledupar

    // Capas base
    const baseMaps = {
        "Mapa Estándar": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }),
        "Mapa Satelital": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenTopoMap contributors'
        }),
    };

    L.control.layers(baseMaps).addTo(map);
    baseMaps["Mapa Estándar"].addTo(map);

    // Agregar un marcador inicial en Valledupar
    L.marker([10.46314, -73.25322]).addTo(map)
        .bindPopup('Valledupar: Centro.')
        .openPopup();

    // Agregar un círculo en un área específica
    L.circle([10.46514, -73.25722], {
        color: 'green',
        fillColor: '#0f0',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map).bindPopup("Área reforestada en Valledupar.");

    // Agregar un polígono para delimitar una región
    L.polygon([
        [10.47000, -73.26000],
        [10.46800, -73.25500],
        [10.46300, -73.25700],
        [10.46500, -73.26200]
    ], {
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.4
    }).addTo(map).bindPopup("Zona delimitada: Parque en reforestación en Valledupar.");
});


// Función para enviar sugerencias
function enviarSugerencia() {
    const sugerencia = document.getElementById("sugerencia").value;
    if (sugerencia) {
        alert(`Gracias por tu aporte: "${sugerencia}".`);
        document.getElementById("sugerencia").value = "";
    } else {
        alert("Por favor, escribe una descripción de la zona.");
    }
}
function actualizarDatosClimaticos() {
    document.getElementById("temperatura").textContent = "30";
    document.getElementById("humedad").textContent = "60";
    document.getElementById("calidad-aire").textContent = "Buena";
}

function simularAlerta() {
    const alerta = document.getElementById("alerta");
    if (alerta) {
        alerta.textContent = "Alerta: Onda de calor detectada en la zona.";
        alert("Alerta temprana: Prepárate para altas temperaturas.");
    }
}

function enviarSugerencia() {
    const sugerencia = document.getElementById("sugerencia").value;
    if (sugerencia) {
        alert(`Gracias por tu aporte: "${sugerencia}".`);
        document.getElementById("sugerencia").value = "";
    } else {
        alert("Por favor, escribe una descripción de la zona.");
    }
}
