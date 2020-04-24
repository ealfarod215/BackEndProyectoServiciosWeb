var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var select1 = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var select2 = "EXEC sp_allVinos";
var select3 = "select codigo as codPais, nombre as nomPais from tbPais";

router.get('/listarAllVinos', function (req, res, next) {
   
    db.query(select1, function (err, rows1) {
        if (err) throw err;
        db.query(select2, function (err, rows) {
            if (err) throw err;
            db.query(select3, function (err, rows3) {
                if (err) throw err;
                console.log(rows);
                console.log(rows1);
                res.render('ListaVinos', { Bebidas: rows.recordset, restaurante: rows1.recordset, nacionalidad: rows3.recordset });
            });
        });
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodVino;
    var nombre = req.body.inputNomVino;
    var pais = req.body.inputYearVino;
    var restaurante = req.body.inputSelectNacionalidad;
    var cosecha = req.body.inputNombreRest;
    var precio = req.body.inputinputPrecioVinoNomVino;

    if (codigo == "" || nombre == "" || pais == "" || restaurante == ""
        || cosecha == "" || precio == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaVinos', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarVinos @codigo = '" + codigo + "',@nombre = '" + nombre + "'", function (error, rows) {
            if (error) {
                console.log("wrong");
                res.render('ListaVinos', { mensaje: 'Error al Filtrar la Información!!!' });

            } else {
                
                console.log(rows.recordset);
                res.render('ListaVinos', {Bebidas: rows.recordset});
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodVino;
    var nombre = req.body.inputNomVino;
    var pais = req.body.inputYearVino;
    var restaurante = req.body.inputSelectNacionalidad;
    var cosecha = req.body.inputNombreRest;
    var precio = req.body.inputinputPrecioVinoNomVino;

    if (codigo == "" || nombre == "" || pais == "" || restaurante == ""
        || cosecha == "" || precio == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaVinos', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarVinos @codigo= '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaVinos', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaVinos', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;