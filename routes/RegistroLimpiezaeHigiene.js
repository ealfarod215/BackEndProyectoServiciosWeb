var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var sqlMarcas = "select codigo as codMarca, nombre as nomMarca from tbMarcas";
var sqlUnidadMedida = "select codigo as codUM, unidad from tbUnidadDeMedida";
var sqlLimHig = "select idTiposArticulos as codTipLim, nombre as nomTipLim from tbTiposLimpiezaArticulos";


router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;
        db.query(sqlMarcas, function (err, rows1) {
            if (err) throw err;
            db.query(sqlLimHig, function (err, rows2) {
                if (err) throw err;
                db.query(sqlUnidadMedida, function (err, rows6) {
                    if (err) throw err;
                    res.render('RegistroLimpiezaeHigiene', { restaurante: rows.recordset, marca: rows1.recordset, tipoLimHig: rows2.recordset, unidadMedida: rows6.recordset });
                });
            });
        });
    });
});

router.post('/insertarLyH', function (req, res, next) {
    var restaurante = req.body.inputNombreRest
    var nombre = req.body.inputArticuloLyH;
    var marca = req.body.inputSelectMarca;
    var cantidad = req.body.inputCantidad;
    var descripcion = req.body.inputDescripcion;
    var tipo = req.body.inputSelectTipo;
    var cantMedida = req.body.inputCanMedida;
    var unidadMedida = req.body.inputSelectUnidadDeMedida
    var esLiquido = req.body.adentro;

    db.query("EXEC sp_insertarLimpiezaHigiene @restaurante = '" + restaurante + "',@nombre = '" + nombre + "',@marca = '" + marca + "',@cantidad = '" + cantidad + "',@descripcion = '" + descripcion + "',@tipo = '" + tipo + "',@cantidadMedida = '" + cantMedida + "',@unidadMedida = '" + unidadMedida + "', @esLiquido = '" + esLiquido + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroLimpiezaeHigiene/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroLimpiezaeHigiene/listarInfoDropMenus');
        }
    });


});

module.exports = router;