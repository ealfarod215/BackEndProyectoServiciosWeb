var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllProveedores', function (req, res, next) {
    db.query('EXEC sp_allProveedores', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaProveedores', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodProveedor;
    var nombre = req.body.inputNomProveedor;
    var cedula = req.body.inputCedProveedor;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaProveedores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarProveedores @codigo = '" + codigo + "',@nombre = '" + nombre + "',@cedula = '" + cedula + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaProveedores', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaProveedores', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodProveedor;
    var nombre = req.body.inputNomProveedor;
    var cedula = req.body.inputCedProveedor;

    if (codigo == "" || nombre == "" || cedula == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaProveedores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarProveedores @codigo = '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaProveedores', { mensaje: 'Error al Eliminar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaProveedores', { mensaje: 'Se elimino el Registro de manera Exitosa' });
            }
        });
    }

});

module.exports = router;