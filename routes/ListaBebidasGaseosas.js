var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllBebidasGaseosas', function (req, res, next) {
    db.query('EXEC sp_allBebidasGaseosas', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaBebidasGaseosas', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;
    var codigoRest = req.body.inputNombreRest;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasGaseosas', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarBebidasGaseosas @codigo = '"+codigo+"', @nombre = '"+nombre+"', @restaurante = '"+codigoRest+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasGaseosas', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasGaseosas', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarBebidasGaseosas @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasGaseosas', {mensaje:'Se elimino el Restaurante de manera Exitosa'});
            }
        });
    }

});

module.exports = router;