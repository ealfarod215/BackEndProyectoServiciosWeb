// JavaScript source code
var sql = require("mssql/msnodesqlv8");

var config = {
    user:'Proyecto',
    password:'123',
    server: 'LAPTOP-DE-CAOO\\MSSQLSERVER2',
    driver: 'msnodesqlv8',
    database: 'dbSistemaRestaurante',
    options: {
        instanceName:'sql'
    }
};
var conn = new sql.ConnectionPool(config);


conn.connect(function (err) {
    if (err) {
        console.dir("wrongBase");
        console.dir(err);
    }
    else {
        console.dir("Se ha conectado a la base de datos");
    }
});

module.exports = conn;