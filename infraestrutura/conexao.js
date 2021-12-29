const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    name: 'agenda-petshop',
    password: 'admin',
    database: 'agenda-petshop'
})



module.exports = conexao