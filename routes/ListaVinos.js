var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllVinos', function (req, res, next) {
    db.query('EXEC sp_allVinos', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaVinos', recordset);
        }
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
        db.query("EXEC sp_listarVinos @codigo = '" + codigo + "',@nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaVinos', recordset);
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
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaVinos', { mensaje: 'Se elimino el Restaurante de manera Exitosa' });
            }
        });
    }

});

module.exports = router;