var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlPuesto = "select codigo as codRol, nombre as nomRol from tbRolesEventos";



router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlPuesto, function (err, rows) {
        if (err) throw err;
        
        res.render('RegistroPuestos', { rolPuesto: rows.recordset });
    });
});

router.post('/insertarPuestos', function (req, res, next) {

    var nombrePuesto = req.body.inputNombrePuesto;
    var interno = req.body.adentro;
    var externo = req.body.afuera;
    var rol = req.body.inputSelectRoles;



    db.query("exec sp_insertarPuestos @nombre='" + nombrePuesto + "',@internoAlRestaurante='" + interno + "',@externoAlRestaurante='" + externo + "',@rolEnRestaurante='" + rol + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroPuestos/listarInfoDropMenus');

        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroPuestos/listarInfoDropMenus');
        }
    });


});

module.exports = router;