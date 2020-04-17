var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllPaises', function (req, res, next) {
    db.query('EXEC sp_allPaises', function (error, recordset) {
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
    var codigo = req.body.inputCodMesa;
    var nombre = req.body.inputNomMesa;
    var restaurante= req.body.inputRest;
    var cantidadSillas= req.body.inputCantSillasMesa;

    if (codigo == "" || nombre == "" || restaurante== "" || cantidadSillas=="") {
        console.log("Debe llenar todos los campos");
        res.render('ListaPaises', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarMesas @codigo = '" + codigo + "', @nombre = '" + nombre + "', @restaurante = '" + restaurante + "', @cantidadSillas = '" + cantidadSillas + "'",  function (error, recordset) {
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

router.post('/eliminarMesas', function (req, res, next) {
    var codigo = req.body.inputCodMesa;
    var nombre = req.body.inputNomMesa;
    var cantidadSillas= req.body.inputCantSillasMesa;
    var restaurante = req.body.inputRest;
    if (codigo == "" || nombre == "" || cantidadSillas== "" || restaurante =="") {
        console.log("Debe llenar todos los campos");
        res.render('ListaPaises', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarMesas  @codigo = '" + codigo + "', @restaurante = '"+restaurante+"' ,@nombre = '" + nombre + "',@cantidadSillas = '" + cantidadSillas + "'",  function (error, recordset) {
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