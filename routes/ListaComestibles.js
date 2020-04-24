var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllComestibles', function (req, res, next) {
    db.query('EXEC sp_allComestibles', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaComestibles', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    
    var codigo = req.body.inputCodComestible;
    var nombre = req.body.inputNomComestible;
    var restaurante = req.body.inputNomRestaurante;

    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaComestibles', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarComestibles @codigo = '"+codigo+"',@nombre = '"+nombre+"',@restaurante = '"+restaurante+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaComestibles', { mensaje: 'Error al tratar de filtrar.' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaComestibles', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodComestible;
    var nombre = req.body.inputNomComestible;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaComestibles', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarComestibles @codigo = '"+codigo+"',@nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaComestibles', { mensaje: 'Error al tratar de borrar.' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaComestibles', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;