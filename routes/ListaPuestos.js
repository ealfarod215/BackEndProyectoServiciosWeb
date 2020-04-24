var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllPuestos', function (req, res, next) {
    db.query('EXEC sp_allPuestos', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaPuestos', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodRestPU;
    var nombre = req.body.inputNomRestPU;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaPuestos', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarPuestos @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaPuestos', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaPuestos', recordset);
            }
        });
    }

});

router.post('/eliminarPuestos', function (req, res, next) {
    var codigo = req.body.inputCodRestPU;
    var nombre = req.body.inputNomRestPU;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaPuestos', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarPuestos  @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaPuestos', { mensaje: 'Error al Eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaPuestos', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;