var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarVino', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var marca = req.body.inputSelectMarca;
    var pais = req.body.inputSelectNacionalidad;
    var precioUnitario = req.body.inputPrecioUnitario;
    var precioBotella = req.body.inputPrecioBotella;
    var cantidad = req.body.inputCantidad;
    var cosecha = req.body.inputCosecha;
    var restaurante = req.body.inputNombreRest;
    var descripcion = req.body.inputDescripcion;

    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precioUnitario + "',@restaurante='" + restaurante + "',@ingredientes='Azucar',@descripcion='" + descripcion + "',@foto=' ',@marca='" + marca + "', @nacionalidad='" + pais + "', @cantidad='" + cantidad + "', @precioBotella='" + precioBotella + "', @yearCosecha='" + cosecha + "', @tipo ='vino'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroVinos');
        }
    });


});

module.exports = router;