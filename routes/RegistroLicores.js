var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarLicor', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var marca = req.body.inputSelectMarca;
    var pais = req.body.inputSelectNacionalidad;
    var precioU = req.body.inputPrecioUnitario;
    var precioB = req.body.inputPrecioBotella;
    var restaurante = req.body.inputNombreRest
    var cantidad = req.body.inputCantidadBebida
    var descripcion = req.body.inputDescripcion

    db.query("EXEC sp_insertarBebidas @nombre='"+nombre+"',@precioUnitario='"+precioU+"',@restaurante='"+restaurante+"',@ingredientes='Azucar',@descripcion='"+descripcion+"',@foto=' ',@marca='"+marca+"', @nacionalidad='"+pais+"', @cantidad='"+cantidad+"', @precioBotella='"+precioB+"', @yearCosecha=0, @tipo ='licor'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroLicores');
        }
    });


});

module.exports = router;