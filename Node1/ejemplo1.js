const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const object = {
        nombre: 'Luis',
        edad: 22
    }
    res.end(JSON.stringify(object));
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})