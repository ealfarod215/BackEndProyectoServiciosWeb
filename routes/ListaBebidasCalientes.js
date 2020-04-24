var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllBebidasCalientes', function (req, res, next) {
    db.query('EXEC sp_allBebidasCalientes', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaBebidasCalientes', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodBC;
    var nombre = req.body.inputNomBC;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasCalientes', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarBebidasCalientes @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasCalientes', {mensaje:'Erro al Filtrar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasCalientes', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodBC;
    var nombre = req.body.inputNomBC;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasCalientes', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarBebidasCalientes @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasCalientes', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasCalientes', {mensaje:'Se eliminó de manera Exitosa'});
            }
        });
    }

});

module.exports = router;