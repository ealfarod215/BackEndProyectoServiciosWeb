var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllEquiUten', function (req, res, next) {
    db.query('EXEC sp_allEquiposyUtencilios', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaEquiposyUtensilios', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodEyU;
    var nombre = req.body.inputNomEyU;
    var restaurante = req.body.inputNomEyURes;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEquiposyUtensilios', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarEquiposyUtencilios @codigo = '"+codigo+"',@nombre = '"+nombre+"',@restaurante = '"+restaurante+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEquiposyUtensilios', { mensaje: 'Error al filtrar la Información!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaEquiposyUtensilios', recordset);
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodEyU;
    var nombre = req.body.inputNomEyU;
    var restaurante = req.body.inputNomEyURes;

    if (codigo == "" || nombre == "" || restaurante == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEquiposyUtensilios', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarEquiposyUtencilios @codigo = '"+codigo+"',@nombre = '"+nombre+"'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEquiposyUtensilios', { mensaje: 'Error al borrar Registro!!!' });
            } else {
                console.log(recordset.recordset);
                res.render('ListaEquiposyUtensilios', { mensaje: 'Se elimino el Registro de manera Exitosa' });
            }
        });
    }

});

module.exports = router;