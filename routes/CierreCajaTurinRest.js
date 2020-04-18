var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarCaja', function (req, res, next) {
    
    var descripcion= req.body.inputDescripcion;
    var aperturaCaja= req.body.inputApertura;
    var cierreCaja = req.body.inputCierre;
    var restaurante = req.body.inputSelectRest;


    db.query("exec sp_insertarCajas @descripcion='" + descripcion + "',@aperturaCaja='" + aperturaCaja + "',@cierreCaja='" + cierreCaja + "',@restaurante='" + restaurante + "'", function (error, recordset) {
        if (error) {
            console.log("wronginsert");
            return;
        } else {
            res.render('IngresoAlSistema');
        }
    });


});

module.exports = router;