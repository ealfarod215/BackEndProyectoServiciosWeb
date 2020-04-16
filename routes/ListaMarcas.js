var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllMarcas', function (req, res, next) {
    db.query('exec sp_allMarcas', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaMarcas', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodMarca;
    var nombre = req.body.inputNomMarca;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaMarcas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarMarcas @codigo = '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaMarcas', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodMarca;
    var nombre = req.body.inputNomMarca;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaMarcas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarMarcas @codigo = '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaMarcas', { mensaje: 'Error, No se pudo eliminar el registro' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaMarcas', { mensaje: 'Se elimino el Restaurante de manera Exitosa' });
            }
        });
    }

});

module.exports = router;