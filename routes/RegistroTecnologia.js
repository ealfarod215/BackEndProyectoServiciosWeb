var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarTecnologia', function (req, res, next) {
    

    var restaurante = req.body.inputNombreRest
    var nombre = req.body.inputnombreTec;
    var marca = req.body.inputSelectMarca;
    var cantidad = req.body.inputCantidad
    var descripcion = req.body.inputDescripcion

    db.query("EXEC sp_insertarTecnologia @restaurante = '"+restaurante+"',@nombre = '"+nombre+"',@marca = '"+marca+"',@cantidad = '"+cantidad+"',@descripcion = '"+descripcion+"'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('RegistroTecnologia');
        } else {
            res.render('RegistroTecnologia');
        }
    });


});

module.exports = router;