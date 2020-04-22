var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var select1 = "select codigo as codTbTipCom, nombre as nomTbTipCom  from tbTipoComestibles";
var select2 = "select codigo as codUM, unidad from tbUnidadDeMedida";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(select1, function (err, rows) {
        if (err) throw err;
        db.query(select2, function (err, rows1) {
            if (err) throw err;
            console.log(rows);
            console.log(rows1);
            res.render('RegistroComidaBuffet', { tipo: rows.recordset, UM: rows1.recordset });
        });
    });
});

router.post('/insertarBuffet', function (req, res, next) {
    var nombre = req.body.inputNombre;
    var precio = req.body.inputPrecio;
    var tipo = req.body.inputSelectTCB;
    var unidadMedida = req.body.inputSelectUM;


    db.query("exec sp_insertarBuffet @nombre = '" + nombre + "',@precio = '" + precio + "',@tipo = '" + tipo + "',@unidadMedida = '" + unidadMedida + "', @foto =''", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroComidaBuffet/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroComidaBuffet/listarInfoDropMenus');
        }
    });


});

module.exports = router;