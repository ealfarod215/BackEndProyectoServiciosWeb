var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarVino', function (req, res, next) {


    var codigo = req.body.inputCodVino;
    var nombre = req.body.inputNomVino;
    var pais = req.body.inputYearVino;
    var restaurante = req.body.inputSelectNacionalidad;
    var cosecha = req.body.inputNombreRest;
    var precio = req.body.inputinputPrecioVinoNomVino;

    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precioU + "',@restaurante='" + restaurante + "',@ingredientes='Azucar',@descripcion='" + descripcion + "',@foto=' ',@marca='" + marca + "', @nacionalidad='" + pais + "', @cantidad='" + cantidad + "', @precioBotella='" + precioB + "', @yearCosecha=0, @tipo ='licor'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroLicores');
        }
    });


});

module.exports = router;