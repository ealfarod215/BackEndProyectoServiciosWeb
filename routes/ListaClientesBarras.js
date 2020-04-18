var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllClientes', function (req, res, next) {
    db.query('EXEC sp_allClientesBarras', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaClientesBarras', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodCliBarra;
    var nombre = req.body.inputNomCliBarra;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaClientesBarras', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarClientesBarra @codigo = '" + codigo + "', @nombre= '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                res.render('ListaClientesBarras', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaClientesBarras', recordset);
            }
        });
    }

});

router.post('/eliminarClientes', function (req, res, next) {
    var codigo = req.body.inputCodC;
    var nombre = req.body.inputNomC;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaClientesBarras', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarClientes @codigo = '" + codigo + "', @nombre= '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrongborr");
                res.render('ListaClientesBarras', { mensaje: 'Error al Eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaClientesBarras', { mensaje: 'Se elimino el registro del cliente de manera Exitosa' });
            }
        });
    }

});

module.exports = router;