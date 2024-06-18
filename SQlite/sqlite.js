const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('sqlite.db');

db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL
)`);

function crearProducto(nombre, precio, stock) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO productos(nombre, precio, stock)
        VALUES (?, ?, ?)`, [nombre, precio, stock], (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function leerProductos() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM productos`, (err, rows) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

function leerProductoPorId(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM productos WHERE id = ?`, [id], (err, row) => {
            if(err) {
                return;
            }
            if(!row) {
                reject(new Error ('Producto no encontrado'));
                return;
            }
            resolve(row);
        });
    });
}

function actualizarProducto(id, nombre, precio, stock) {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?`, 
            [nombre, precio, stock, id], (err) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve();
            });
    });
}

function eliminarProducto(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM productos WHERE id = ?`, [id], (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}