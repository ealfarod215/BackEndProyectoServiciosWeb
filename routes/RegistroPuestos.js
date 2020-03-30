var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarPuestos', function (req, res, next) {
    
    var nombrePuesto= req.body.inputNombrePuesto;
    var interno = req.body.inputInternoAlRestaurante;
    var externo = req.body.inputExternoAlRestaurante;
    var rol = req.body.inputSelectRoles;


    db.query("exec sp_insertarPuestos @nombre='" + nombrePuesto + "',@internoAlRestaurante='" + interno + "',@externoAlRestaurante='" + externo + "',@rolEnRestaurante='" + rol + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroPuestos');
        }
    });


});

module.exports = router;