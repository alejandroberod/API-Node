import express from 'express';
import mysql, { createConnection } from 'mysql';

const app = express();
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
})

app.get('/modules', (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        return res.json(data);
    })
})


const port = 4000;

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})