var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlPais = "select codigo as codPais, nombre as nomPais from tbPais";

router.get('/listarInfoDropMenus', function (req, res, next) {

    db.query(sqlPais, function (err, rows2) {
        if (err) throw err;

        res.render('RegistroMarcas', { nacionalidad: rows2.recordset });
    });
});

router.post('/insertarMarca', function (req, res, next) {

    var nombreMarca = req.body.inputNombreMarca;
    var nacionalidad = req.body.inputSelectNacionalidad;
    var marcaDescripcion = req.body.inputDescripcion;
    var nombreEmpresa = req.body.inputNombreEmpresa;
    var empresaDescripcion = req.body.inputDescripcionE;
    var telefono = req.body.inputTelefono;


    db.query("EXEC sp_insertarMarcas @nombre = '" + nombreMarca + "',@nacionalidad = '" + nacionalidad + "',@descripcion = '" + marcaDescripcion + "',@fotoLogo = ''", function (error, recordset) {
        if (error) {
            console.log("wrong 1");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroMarcas/listarInfoDropMenus');
        } else {
            db.query("EXEC sp_insertarEmpresa @nombre = '" + nombreEmpresa + "',@detalle='" + empresaDescripcion + "',@telefono = '" + telefono + "',@fotoEmpresa=''", function (error, recordset) {
                if (error) {
                    console.log("wrong 2");
                    req.flash('errorRegistro', 'Error al realizar el Registro!!!');
                    res.redirect('/RegistroMarcas/listarInfoDropMenus');
                } else {
                    req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
                    res.redirect('/RegistroMarcas/listarInfoDropMenus');
                }
            });
        }
    });


});

module.exports = router;