var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllRoles', function (req, res, next) {
    db.query('EXEC sp_allRolesEventos', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaRoles', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodRol; 
    var nombre = req.body.inputNomRol;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaRoles', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarRolesEventos @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                res.render('ListaRoles', {mensaje:'Error al Filtrar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaRoles', recordset);
            }
        });
    }

});

router.post('/eliminarRoles', function (req, res, next) {
    var codigo = req.body.inputCodRol; 
    var nombre = req.body.inputNomRol;

    if (codigo == "" || nombre == ""){
        console.log("Debe llenar todos los campos");
        res.render('ListaRoles', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarRolesEventos @codigo = '" + codigo + "',@nombre = '" + nombre + "'",  function (error, recordset) {
            if (error) {
                console.log("wrongborrar");
                res.render('ListaRoles', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaRoles', {mensaje:'Se elimino de manera exitosa'});
            }
        });
    }

});

module.exports = router;