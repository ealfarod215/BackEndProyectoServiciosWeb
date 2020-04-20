var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var select1 = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var select2 = "EXEC sp_allLicores";
var select3 = "select codigo as codPais, nombre as nomPais from tbPais";
router.get('/listarAllLicores', function (req, res, next) {

    db.query(select1, function (err, rows1) {
        if (err) throw err;
        db.query(select2, function (err, rows) {
            if (err) throw err;
            db.query(select3, function (err, rows3) {
                if (err) throw err;
                console.log(rows);
                console.log(rows1);
                res.render('ListaLicores', { Bebidas: rows.recordset, restaurante: rows1.recordset, nacionalidad: rows3.recordset });
            });
        });
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodLicor;
    var nombre = req.body.inputNomLicor;
    var pais = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputNombreRest;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLicores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarLicores @codigo= '" + codigo + "', @nombre = '" + nombre + "', @nacionalidad = '" + pais + "', @restaurante = '" + restaurante + "'", function (error, rows) {
            if (error) {
                console.log("wrong");
                res.render('ListaLicores', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(rows.recordset);
                res.render('ListaLicores', {Bebidas: rows.recordset});
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodLicor;
    var nombre = req.body.inputNomLicor;
    var pais = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputNombreRest;

    if (codigo == "" || nombre == "" || pais == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLicores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarLicores @codigo= '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaLicores', { mensaje: 'Error al Eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaLicores', { mensaje: 'Se elimino el Restaurante de manera Exitosa' });
            }
        });
    }

});

module.exports = router;