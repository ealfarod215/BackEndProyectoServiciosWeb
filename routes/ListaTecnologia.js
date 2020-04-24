var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllTecnologia', function (req, res, next) {
    db.query('EXEC sp_allTecnologia', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaTecnologia', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodTec;
    var nombre = req.body.inputNomTec;
    var restaurante = req.body.inputNomTecRes;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaTecnologia', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarTecnologia @codigo = '" + codigo + "',@nombre = '" + nombre + "',@restaurante = '" + restaurante + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaTecnologia', { mensaje: 'Error al Filtrar Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaTecnologia', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodTec;
    var nombre = req.body.inputNomTec;
    var restaurante = req.body.inputNomTecRes;

    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaTecnologia', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarTecnologia @codigo = '"+codigo+"',@nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaTecnologia', { mensaje: 'Error al Eliminar Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaTecnologia', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;