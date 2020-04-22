var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarNacion', function (req, res, next) {

    var nombre = req.body.inputNombrePais;

    db.query("EXEC sp_insertarPais @nombre = '" + nombre + "',@fotoBandera=''", function (error, recordset) {
        if (error) {
            console.log("wronginsert");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.render('RegistroNacion');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.render('RegistroNacion');
        }
    });


});

module.exports = router;