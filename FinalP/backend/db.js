const mysql = require('mysql')
const db = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "Vikings0213!",
database:"reactmysql"
})
module.exports = db;
