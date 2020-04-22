var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.post('/confirmarCredenciales', function (req, res, next) {
    var login = req.body.inputUsuario;
    var password = req.body.inputPassword2;


    db.query("select count(*) as respuesta from tbUsuarios where loginUsuario = '" + login + "' and contrasena = '" + password + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else if (recordset.recordset[0]['respuesta'] == 1) {
            console.log("permisos concedidos");
            res.render('Funcionalidades');
        } else {
            console.log("permisos denegados");
            console.log(recordset);
            req.flash('errorRegistro', 'Acceso denegado, Credenciales Invalidas !!!');
            res.render('IngresoAlSistema', recordset);
        }
    });


});

module.exports = router;