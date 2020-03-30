var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarMesas', function (req, res, next) {
    
    var nombrePlatillo= req.body.inputNombreMesa;
    var ingredientes = req.body.inputNumMesa;
    var precio = req.body.inputCanSillas;
    var detalle = req.body.inputSelectRest;


    db.query("exec sp_insertarMesa @nombrePlatillo='" + nombrePlatillo + "',@ingredientes='" + ingredientes + "',@precio='" + precio + "',@detalle='" + detalle + "',@foto=''", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroMesas');
        }
    });


});

module.exports = router;