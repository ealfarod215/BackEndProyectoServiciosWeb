var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarMesas', function (req, res, next) {
    
    var nombreMesa= req.body.inputNombreMesa;
    var numeroMesa = req.body.inputNumMesa;
    var cantidadSillas = req.body.inputCanSillas;
    var idRestaurante = req.body.inputSelectRest;


    db.query("EXEC sp_insertarMesa @nombre = '"+nombreMesa+"',@numero='"+numeroMesa+"',@cantidadSillas='"+cantidadSillas+"',@restaurante='"+idRestaurante+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroMesas');
        }
    });


});

module.exports = router;