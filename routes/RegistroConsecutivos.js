var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarConsecutivos', function (req, res, next) {

    var tipoConsecutivo = req.body.inputTipoConsecutivo;
    var valor = req.body.inputValorConsecutivo;
    var descripcion = req.body.inputDesConsecutivo;
    var poseePrefijo = req.body.inputPoseePrefijo;
    var prefijo = req.body.inputPrefConsecutivo;


    db.query("exec sp_insertarConsecutivo @tipoConsecutivo='" + tipoConsecutivo + "',@valor='" + valor + "',@descripcion='" + descripcion + "',@poseePrefijo='" + poseePrefijo + "',@prefijo='" + prefijo + "'", function (error, recordset) {
        if (error) {
            console.log("wronginsert");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.render('RegistroConsecutivos');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.render('RegistroConsecutivos');
        }
    });


});

module.exports = router;