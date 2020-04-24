var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllConsecutivos', function (req, res, next) {
    db.query('EXEC sp_allConsecutivos', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaConsecutivos', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodConsecutivo;
    var descripcion = req.body.inputDescripcionConsecutivo;
    if (codigo == "" || descripcion == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaConsecutivos', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarConsecutivos @idConsecutivos = '" + codigo + "', @descripcion= '" + descripcion + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselec");
                res.render('ListaConsecutivos', {mensaje:'Error al Filtrar la Información!!!'});

            } else {
                console.log(recordset.recordset);
                res.render('ListaConsecutivos', recordset);
            }
        });
    }

});

router.post('/eliminarConsecutivos', function (req, res, next) {
    var codigo = req.body.inputCodConsecutivo;
    var descripcion = req.body.inputDescripcionConsecutivo;
    if (codigo == "" || descripcion == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaConsecutivos', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarConsecutivos @idConsecutivos = '" + codigo + "', @descripcion= '" + descripcion + "'", function (error, recordset) {
            if (error) {
                console.log("wrongborr");
                res.render('ListaConsecutivos', {mensaje:'Error al Eliminar el consecutivo'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaConsecutivos', {mensaje:'Se eliminó de manera Exitosa'});
            }
        });
    }

});

module.exports = router;