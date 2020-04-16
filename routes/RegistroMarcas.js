var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


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
            return;
        } else {
            db.query("EXEC sp_insertarEmpresa @nombre = '"+nombreEmpresa+"',@detalle='"+empresaDescripcion+"',@telefono = '"+telefono+"',@fotoEmpresa=''", function (error, recordset) {
                 if (error) {
                     console.log("wrong 2");
                     return;
                 } else {
                     res.render('RegistroMarcas');
                 }
             });
        }
    });


});

module.exports = router;