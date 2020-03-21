var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarBuffet', function (req, res, next) {
    var nombre = req.body.inputNombre;
    var precio = req.body.inputPrecio;
    //var tipo = req.body.inputSelectTCB;
    //var unidadMedida = req.body.inputSelectUM;


    db.query("exec sp_insertarBuffet @nombre = '" + nombre + "',@precio = '" + precio + "',@tipo = '3',@unidadMedida = '5', @foto ='7'", function (error, recordset) {
        if (error) {

            console.log("wrong");
            return;
        } else {
            res.render('RegistroComidaBuffet');
        }
    });


});

module.exports = router;