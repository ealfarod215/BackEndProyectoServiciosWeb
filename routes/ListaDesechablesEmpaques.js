var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllDesechablesEmpaques', function (req, res, next) {
    db.query('EXEC sp_allDesechablesEmpaques', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaDesechablesEmpaques', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodEmpaque;
    var nombre = req.body.inputNomEmpaque;
    var restaurante = req.body.inputNomRestaurante;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaDesechablesEmpaques', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarDesechablesEmpaques @codigo = '"+codigo+"',@nombre = '"+nombre+"',@restaurante = '"+restaurante+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaDesechablesEmpaques', { mensaje: 'Error al filtrar' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaDesechablesEmpaques', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodEmpaque;
    var nombre = req.body.inputNomEmpaque;
    var restaurante = req.body.inputNomRestaurante;

    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaDesechablesEmpaques', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarDesechablesPaquetes @codigo = '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaDesechablesEmpaques', { mensaje: 'Error al eliminar Registro' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaDesechablesEmpaques', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;