var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarRestaurantes', function (req, res, next) {
    db.query('SELECT codigo, consecutivo,nombre,direccion,especialidad,telefono FROM tbRestaurante', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset);
            res.render('ListaDeRestaurantes', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodRest;
    var nombre = req.body.inputNomRest;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaDeRestaurantes', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarRestaurantes @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaDeRestaurantes', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaDeRestaurantes', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodRest;
    var nombre = req.body.inputNomRest;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaDeRestaurantes', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarRestaurante @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaDeRestaurantes', { mensaje: 'Error al eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaDeRestaurantes', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;