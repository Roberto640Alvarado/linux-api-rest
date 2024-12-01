const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hola Este es una prueba tarea LINUX"
    });
});

app.get('/chambas', (req, res) => {
    res.json({
        status: 200,
        areas: [
            "Desarrollo de Software",
            "Ciencia de Datos",
            "Seguridad Informática",
            "Inteligencia Artificial",
            "Redes y Telecomunicaciones",
            "Administración de Sistemas",
            "Computación en la Nube",
            "Bases de Datos",
            "Desarrollo Web",
            "Desarrollo Móvil"
        ]
    });
});

if (require.main === module) {
    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
}

module.exports = app;
