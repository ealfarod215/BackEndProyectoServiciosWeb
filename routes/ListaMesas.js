var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllMesas', function (req, res, next) {
    db.query('EXEC sp_allMesas', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaMesas', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodMesa;
    var nombre = req.body.inputNomMesa;
    var restaurante= req.body.inputRest;
    var cantidadSillas= req.body.inputCantSillasMesa;

    if (codigo == "" || nombre == "" || restaurante== "" || cantidadSillas=="") {
        console.log("Debe llenar todos los campos");
        res.render('ListaMesas', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarMesas @codigo = '" + codigo + "', @nombre = '" + nombre + "', @restaurante = '" + restaurante + "', @cantidadSillas = '" + cantidadSillas + "'",  function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaMesas', recordset);
            }
        });
    }

});

router.post('/eliminarMesas', function (req, res, next) {
    var codigo = req.body.inputCodMesa;
    var nombre = req.body.inputNomMesa;
    var cantidadSillas= req.body.inputCantSillasMesa;
    var restaurante = req.body.inputRest;
    if (codigo == "" || nombre == "" || cantidadSillas== "" || restaurante =="") {
        console.log("Debe llenar todos los campos");
        res.render('ListaMesas', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarMesas  @codigo = '" + codigo + "', @restaurante = '"+restaurante+"' ,@nombre = '" + nombre + "',@cantidadSillas = '" + cantidadSillas + "'",  function (error, recordset) {
            if (error) {
                console.log("wrong");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaMesas', {mensaje:'Se elimino la mesa de manera Exitosa'});
            }
        });
    }

});

module.exports = router;