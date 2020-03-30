var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllLicores', function (req, res, next) {
    db.query('EXEC sp_allLicores', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaLicores', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodLicor;
    var nombre = req.body.inputNomLicor;
    var pais = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputNombreRest;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLicores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarLicores @codigo= '"+codigo+"', @nombre = '"+nombre+"', @nacionalidad = '"+pais+"', @restaurante = '"+restaurante+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaLicores', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodLicor;
    var nombre = req.body.inputNomLicor;
    var pais = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputNombreRest;
    
    if (codigo == "" || nombre == "" || pais == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaLicores', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarLicores @codigo= '"+codigo+"', @nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaLicores', { mensaje: 'Se elimino el Restaurante de manera Exitosa' });
            }
        });
    }

});

module.exports = router;