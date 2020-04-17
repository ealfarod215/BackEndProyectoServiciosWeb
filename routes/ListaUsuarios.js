var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllUsuarios', function (req, res, next) {
    db.query('EXEC sp_allUsuarios', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaUsuarios', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodUsuario; 
    var nombre = req.body.inputNomUsuario; 
    var loginUsuario = req.body.inputNickNameUsuario; 
    var privilegios = req.body.inputPrivilegios; 

    if (codigo == "" || nombre == "" || loginUsuario == "" ||  privilegios == "" ) {
        console.log("Debe llenar todos los campos");
        res.render('ListaUsuarios', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarUsuarios @codigo = '" + codigo + "', @nombre = '" + nombre +  "',@loginUsuario= '" + loginUsuario  +  "',@privilegios= '" + privilegios + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaUsuarios', recordset);
            }
        });
    }

});

router.post('/eliminarUsuarios', function (req, res, next) {
    var codigo = req.body.inputCodUsuario; 
    var nombre = req.body.inputNomUsuario; 
    var loginUsuario = req.body.inputNickNameUsuario; 
    var privilegios = req.body.inputPrivilegios; 

    if (codigo == "" || nombre == "" || loginUsuario == "" ||  privilegios == "" ){
        console.log("Debe llenar todos los campos");
        res.render('ListaUsuarios', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarUsuarios @codigo = '" + codigo + "', @nombre = '" + nombre +  "',@loginUsuario= '" + loginUsuario  +  "',@privilegios= '" + privilegios + "'",  function (error, recordset) {
            if (error) {
                console.log("wrongborrar");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaUsuarios', {mensaje:'Se elimino el puesto de manera exitosa'});
            }
        });
    }

});

module.exports = router;