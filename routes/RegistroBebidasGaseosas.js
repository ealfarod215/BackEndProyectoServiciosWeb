var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarBebidaGaseosa', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var cantidad = req.body.inputCantidadBebida;
    var precio = req.body.inputPrecioBebida;
    var nomRestaurante = req.body.inputNombreRest;
    var descripcion = req.body.inputDescripcion;
    var pais = req.body.inputSelectNacionalidad;
    var marca = req.body.inputSelectMarca;


    db.query("EXEC sp_insertarBebidas @nombre='"+nombre+"',@precioUnitario='"+precio+"',@restaurante='"+nomRestaurante+"',@ingredientes='NoAplica',@descripcion='"+descripcion+"',@foto=' ',@marca='"+marca+"', @nacionalidad='"+pais+"', @cantidad='"+cantidad+"', @precioBotella=0, @yearCosecha=0, @tipo ='gaseosa'", function (error, recordset) {
        if (error) {
            console.log("wrong ");
            return;
        } else {
            res.render('RegistroBebidasGaseosas');
        }
    });


});

module.exports = router;