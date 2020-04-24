var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllLimpHigiene', function (req, res, next) {
    db.query('EXEC sp_allLimpiezaHigiene', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaLimpiezaeHigiene', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodLyH;
    var nombre = req.body.inputNomLyH;
    var restaurante = req.body.inputNomLyHRest;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLimpiezaeHigiene', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarLimpiezaHigiene @codigo = '"+codigo+"', @nombre = '"+nombre+"',@restaurante = '"+restaurante+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaLimpiezaeHigiene', { mensaje: 'Error al Filtrar!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaLimpiezaeHigiene', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodLyH;
    var nombre = req.body.inputNomLyH;
    var restaurante = req.body.inputNomLyHRest;

    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLimpiezaeHigiene', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarLimpiezaHigiene @codigo = '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaLimpiezaeHigiene', { mensaje: 'Error al Borrar!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaLimpiezaeHigiene', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;