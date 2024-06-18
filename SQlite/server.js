import sqlite3 from 'sqlite3';
let sql = "";
const db = new sqlite3.Database('./data.db', sqlite.OPEN_READWRITE, (error) => {
    if(error) {
        console.error(error);
    }
})