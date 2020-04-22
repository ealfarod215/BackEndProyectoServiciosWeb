var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarEpeciales', function (req, res, next) {
    
    var nombrePlatillo= req.body.inputNombreEsp;
    var ingredientes = req.body.inputIngredienteEsp;
    var precio = req.body.inputPrecioEsp;
    var detalle = req.body.inputDescripcionEsp;


    db.query("exec sp_insertarEspecialidades @nombrePlatillo='" + nombrePlatillo + "',@ingredientes='" + ingredientes + "',@precio='" + precio + "',@detalle='" + detalle + "',@foto=''", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.render('RegistroEpeciales');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.render('RegistroEpeciales');
        }
    });


});

module.exports = router;