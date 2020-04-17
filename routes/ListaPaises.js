var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllPaises', function (req, res, next) {
    db.query('EXEC sp_allPais', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaPaises', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodPais;
    var nombre = req.body.inputNomPais;

    if (codigo == "" || nombre == "" ) {
        console.log("Debe llenar todos los campos");
        res.render('ListaPaises', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarPais @codigo = '" + codigo + "', @nombre = '" + nombre + "'",  function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaPaises', recordset);
            }
        });
    }

});

router.post('/eliminarPaises', function (req, res, next) {
    var codigo = req.body.inputCodPais;
    var nombre = req.body.inputNomPais;

    if (codigo == "" || nombre == "" ) {
        console.log("Debe llenar todos los campos");
        res.render('ListaPaises', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarPais  @codigo = '" + codigo + "', @nombre = '"+nombre+ "'",  function (error, recordset) {
            if (error) {
                console.log("wrongborr");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaPaises', {mensaje:'Se elimino el pais de manera exitosa'});
            }
        });
    }

});

module.exports = router;