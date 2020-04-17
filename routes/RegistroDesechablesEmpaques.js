var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarDyE', function (req, res, next) {

    var nombre = req.body.inputNombreDyE;
    var marca = req.body.inputSelectMarca;
    var restaurante = req.body.inputNombreRest
    var cantidad = req.body.inputCantidadDyE
    var descripcion = req.body.inputDescripcion

    db.query("EXEC sp_insertarDesechablesPaquetes @restaurante = '"+restaurante+"',@nombre = '"+nombre+"',@marca = '"+marca+"', @cantidad = '"+cantidad+"', @descripcion = '"+descripcion+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('RegistroDesechablesEmpaques');
        } else {
            res.render('RegistroDesechablesEmpaques');
        }
    });


});

module.exports = router;