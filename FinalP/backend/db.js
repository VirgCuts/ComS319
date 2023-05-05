const mysql = require('mysql')
const db = mysql.createConnection({
host: "127.0.0.1",
user: "sqluser",
password: "password",
database:"database_name"
})
module.exports = db;
