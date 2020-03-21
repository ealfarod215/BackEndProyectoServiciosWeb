var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.post('/insertarRestaurante', function (req, res, next) {
    var nombre = req.body.nombreRestaurante;
    var especialidad = req.body.especialidadRestaurante;
    var direccion = req.body.direccionRestaurante;
    var telefono = req.body.telefonoRestaurante
    var estado = req.body.inpEstadoRes;

    console.log(nombre);
    db.query("EXEC sp_insertarRestaurante @nombre ='"+nombre+"', @especialidad = '"+especialidad+"', @direccion = '"+direccion+"', @telefono = '"+telefono+"', @estado = '"+estado+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RestaurantesRegistro');
        }
    });


});

module.exports = router;