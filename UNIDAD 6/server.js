// Importar express, body-parser, fs y cors
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express(); // Crear una instancia de Express
const port = 3000; // Asignar el puerto para la aplicación

app.use(cors()); // Habilitar Cors
app.use(bodyParser.json()); // Habilitar BodyParser
app.use(express.static('public')); // Habilitar la carpeta public

// Ruta para obtener datos desde un archivo JSON
app.get('/api/data', (req,res) => {
    fs.readFile('data.json', 'utf-8',(err, data) => {  
        if (err){
            console.error('Error al leer el archivo JSON', 'err');
            res.status(500).json({ message: 'Error al leer los datos'});
            return;
        };
        res.json(JSON.parse(data));
      });
})

// Iniciar el servidor en el puerto asignado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})