var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllBebidasHeladas', function (req, res, next) {
    db.query('EXEC sp_allBebidasHeladas', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaBebidasHeladas', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasHeladas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarBebidasHeladas @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasHeladas', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasHeladas', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasHeladas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarBebidasHeladas @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasHeladas', { mensaje: 'Error al Eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasHeladas', { mensaje: 'Se eliminó de manera Exitosa' });
            }
        });
    }

});

module.exports = router;