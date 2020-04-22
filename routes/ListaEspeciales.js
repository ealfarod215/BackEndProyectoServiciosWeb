var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllEspeciales', function (req, res, next) {
    db.query('EXEC sp_allEspeciales', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaEspeciales', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodEsp;
    var nombrePlatillo = req.body.inputNomEsp;
    if (codigo == "" || nombrePlatillo == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEspeciales', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarEspeciales @codigo = '" + codigo + "', @nombrePlatillo= '" + nombrePlatillo + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEspeciales', {mensaje:'Error al Filtrar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaEspeciales', recordset);
            }
        });
    }

});

router.post('/eliminarEspeciales', function (req, res, next) {
    var codigo = req.body.inputCodEsp;
    var nombrePlatillo = req.body.inputNomEsp;
    if (codigo == "" || nombrePlatillo == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEspeciales', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarEspeciales @codigo = '" + codigo + "', @nombrePlatillo= '" + nombrePlatillo + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEspeciales', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaEspeciales', {mensaje:'Se elimino el Especial de manera Exitosa'});
            }
        });
    }

});

module.exports = router;