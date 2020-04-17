var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarLyH', function (req, res, next) {
    var restaurante = req.body.inputNombreRest
    var nombre = req.body.inputArticuloLyH;
    var marca = req.body.inputSelectMarca;
    var cantidad = req.body.inputCantidad;
    var descripcion = req.body.inputDescripcion;
    var tipo = req.body.inputSelectTipo;
    var cantMedida = req.body.inputCanMedida;
    var unidadMedida = req.body.inputSelectUnidadDeMedida
    var esLiquido = req.body.adentro;

    db.query("EXEC sp_insertarLimpiezaHigiene @restaurante = '"+restaurante+"',@nombre = '"+nombre+"',@marca = '"+marca+"',@cantidad = '"+cantidad+"',@descripcion = '"+descripcion+"',@tipo = '"+tipo+"',@cantidadMedida = '"+cantMedida+"',@unidadMedida = '"+unidadMedida+"', @esLiquido = '"+esLiquido+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('RegistroLimpiezaeHigiene');
        } else {
            res.render('RegistroLimpiezaeHigiene');
        }
    });


});

module.exports = router;