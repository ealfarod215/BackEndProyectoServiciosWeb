var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllEmpleados', function (req, res, next) {
    db.query('EXEC sp_allEmpleados', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaEmpleados', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodEmpl;
    var nombre = req.body.inputNomEmpl;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEmpleados', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarEmpleados @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEmpleados', { mensaje: 'Error al Filtrar la Información!!!' });

            } else {
                console.log(recordset.recordset);
                res.render('ListaEmpleados', recordset);
            }
        });
    }

});

router.post('/eliminarEmpleados', function (req, res, next) {
    var codigo = req.body.inputCodEmpl;
    var nombre = req.body.inputNomEmpl;
    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaEmpleados', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarEmpleados  @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaEmpleados', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaEmpleados', { mensaje: 'Se elimino el empleado de manera Exitosa' });
            }
        });
    }

});

module.exports = router;