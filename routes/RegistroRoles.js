var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarRoles', function (req, res, next) {
    
    var nombre= req.body.inputNombreRol;
    var descripcion = req.body.inputDescripcionRol;

    db.query("exec sp_insertarEventosRoles @nombre='" + nombre + "',@descripcion='" + descripcion + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.render('RegistroRoles');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.render('RegistroRoles');
        }
    });


});

module.exports = router;

  