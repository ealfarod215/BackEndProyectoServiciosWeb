var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var sqlMarcas = "select codigo as codMarca, nombre as nomMarca from tbMarcas";
var sqlPais = "select codigo as codPais, nombre as nomPais from tbPais";

var sqlComestibles = "select codigo as codTbTipCom, nombre as nomTbTipCom  from tbTipoComestibles";
var sqlClaseComestible = "select idClaseComestible as codClaseComestible, nombre as nomClaseComestible from tbClaseComestible";
var sqlLineaComestible = "select idLineaComestible as codLineaComestible, nombre as nomLineaComestible from tbLineaComestible";
var sqlUnidadMedida = "select codigo as codUM, unidad from tbUnidadDeMedida";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;
        db.query(sqlMarcas, function (err, rows1) {
            if (err) throw err;
            db.query(sqlPais, function (err, rows2) {
                if (err) throw err;
                db.query(sqlComestibles, function (err, rows3) {
                    if (err) throw err;
                    db.query(sqlClaseComestible, function (err, rows4) {
                        if (err) throw err;
                        db.query(sqlLineaComestible, function (err, rows5) {
                            if (err) throw err;
                            db.query(sqlUnidadMedida, function (err, rows6) {
                                if (err) throw err;
                                res.render('RegistroComestibles', { restaurante: rows.recordset, marca: rows1.recordset, nacionalidad: rows2.recordset, tipoComestible: rows3.recordset, claseCamestible: rows4.recordset, lineaComestible: rows5.recordset, unidadMedida: rows6.recordset });
                            });
                        });
                    });
                });
            });
        });

    });
});

router.post('/insertarComestible', function (req, res, next) {

    var nombre = req.body.inputNombreComestible;
    var cantidad = req.body.inputCantCompestible;
    var tipoComestible = req.body.inputSelectTipoComestible;
    var restaurante = req.body.inputNombreRest;
    var marca = req.body.inputSelectMarca;
    var claseComestible = req.body.inputSelectClaseComestible
    var linea = req.body.inputSelectLineaComestible
    var unidadMedida = req.body.inputSelectUnidadMedida

    db.query("EXEC sp_insertarComestible @nombre = '" + nombre + "',@cantidad = '" + cantidad + "',@tipoComestible = '" + tipoComestible + "',@restaurante = '" + restaurante + "',@marca = '" + marca + "',@claseComestible = '" + claseComestible + "',@lineaComestible = '" + linea + "',@unidadMedida = '" + unidadMedida + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroComestibles/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroComestibles/listarInfoDropMenus');
        }
    });


});

module.exports = router;