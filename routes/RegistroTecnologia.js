var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var sqlMarcas = "select codigo as codMarca, nombre as nomMarca from tbMarcas";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;
        db.query(sqlMarcas, function (err, rows1) {
            if (err) throw err;

            res.render('RegistroTecnologia', { restaurante: rows.recordset, marca: rows1.recordset });
        });
    });
});

router.post('/insertarTecnologia', function (req, res, next) {


    var restaurante = req.body.inputNombreRest
    var nombre = req.body.inputnombreTec;
    var marca = req.body.inputSelectMarca;
    var cantidad = req.body.inputCantidad
    var descripcion = req.body.inputDescripcion

    db.query("EXEC sp_insertarTecnologia @restaurante = '" + restaurante + "',@nombre = '" + nombre + "',@marca = '" + marca + "',@cantidad = '" + cantidad + "',@descripcion = '" + descripcion + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroTecnologia/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroTecnologia/listarInfoDropMenus');
        }
    });


});

module.exports = router;