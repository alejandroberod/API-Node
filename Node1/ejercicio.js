const fs = require('fs');

const archivo = 'datos.json';
const json = {
    "Nombre": "Alejandro",
    "Edad": 22
}

const contenido = JSON.stringify(json)

fs.writeFile(archivo, contenido, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Archivo escrito correctamente')
})