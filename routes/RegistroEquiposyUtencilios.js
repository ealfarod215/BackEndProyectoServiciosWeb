var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarEyU', function (req, res, next) {
    var restaurante = req.body.inputNombreRest;
    var nombre = req.body.inputNomEyU;
    var marca = req.body.inputSelectMarca;
    var cantidad = req.body.inputCantidadEyU;
    var descripcion = req.body.inputDescripcion;

    db.query("EXEC sp_insertarEquiposUtencilio @restaurante = '" + restaurante + "',@nombre= '" + nombre + "',@marca = '" + marca + "',@cantidad = '" + cantidad + "',@descripcion = '" + descripcion + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('RegistroEquiposyUtencilios');
        } else {
            res.render('RegistroEquiposyUtencilios');
        }
    });


});

module.exports = router;