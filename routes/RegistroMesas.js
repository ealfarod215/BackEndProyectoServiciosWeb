var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";


router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;

        res.render('RegistroMesas', { restaurante: rows.recordset });
    });
});

router.post('/insertarMesas', function (req, res, next) {

    var nombreMesa = req.body.inputNombreMesa;
    var numeroMesa = req.body.inputNumMesa;
    var cantidadSillas = req.body.inputCanSillas;
    var idRestaurante = req.body.inputSelectRest;


    db.query("EXEC sp_insertarMesa @nombre = '" + nombreMesa + "',@numero='" + numeroMesa + "',@cantidadSillas='" + cantidadSillas + "',@restaurante='" + idRestaurante + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroMesas/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroMesas/listarInfoDropMenus');
        }
    });


});

module.exports = router;