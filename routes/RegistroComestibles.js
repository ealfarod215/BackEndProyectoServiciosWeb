var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarComestible', function (req, res, next) {

    var nombre = req.body.inputNombreComestible;
    var cantidad = req.body.inputCantCompestible;
    var tipoComestible = req.body.inputSelectTipoComestible;
    var restaurante = req.body.inputNombreRest;
    var marca = req.body.inputSelectMarca;
    var claseComestible = req.body.inputSelectClaseComestible
    var linea = req.body.inputSelectLineaComestible
    var unidadMedida = req.body.inputSelectUnidadMedida

    db.query("EXEC sp_insertarComestible @nombre = '"+nombre+"',@cantidad = '"+cantidad+"',@tipoComestible = '"+tipoComestible+"',@restaurante = '"+restaurante+"',@marca = '"+marca+"',@claseComestible = '"+claseComestible+"',@lineaComestible = '"+linea+"',@unidadMedida = '"+unidadMedida+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('RegistroComestibles');
        } else {
            res.render('RegistroComestibles');
        }
    });


});

module.exports = router;