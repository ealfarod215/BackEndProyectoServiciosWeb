var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllClientes', function (req, res, next) {
    db.query('EXEC sp_allClientes', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaClientes', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodC;
    var nombre = req.body.inputNomC;
    var restaurante = req.body.inputNomRe;
    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaClientes', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarClientes @codigo = '" + codigo + "', @nombre= '" + nombre + "', @restaurante= '" + restaurante +"'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                res.render('ListaClientes', {mensaje:'Error al Filtrar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaClientes', recordset);
            }
        });
    }

});

router.post('/eliminarClientes', function (req, res, next) {
     var codigo = req.body.inputCodC;
    var nombre = req.body.inputNomC;
    if (codigo == "" || nombre == "" ) {
        console.log("Debe llenar todos los campos");
        res.render('ListaClientes', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarClientes @codigo = '" + codigo + "', @nombre= '" + nombre +"'", function (error, recordset) {
            if (error) {
                console.log("wrongborr");
                res.render('ListaClientes', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaClientes', {mensaje:'Se eliminó de manera Exitosa'});
            }
        });
    }

});

module.exports = router;