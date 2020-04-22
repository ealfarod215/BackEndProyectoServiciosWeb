var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarProveedor', function (req, res, next) {

    var cedula = req.body.inputCedula;
    var fecha = req.body.inputFecha;
    var nombre = req.body.inputNombre;
    var apellidoUno = req.body.inputPrimerA;
    var apellidoDos = req.body.inputSegundoA;
    var correo = req.body.inputCorreo;
    var direccion = req.body.inputDireccion;
    var oficina = req.body.inputOficina;
    var fax = req.body.inputFax;
    var celular = req.body.inputCelular;


    db.query("EXEC sp_insertarProveedores @cedula = '" + cedula + "',@fechaIngreso = '" + fecha + "',@nombre = '" + nombre + "',@apellidoUno = '" + apellidoUno + "',@apellidoDos = '" + apellidoDos + "',@correoElectronico = '" + correo + "',@direccion = '" + direccion + "',@foto = ''", function (error, recordset) {
        if (error) {
            console.log("wrong 1");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.render('RegistroProveedores');
        } else {
            db.query("EXEC sp_insertarProveedorTelefonos @cedulaProveedor = '" + cedula + "',@oficina = '" + oficina + "',@fax = '" + fax + "',@celular = '" + celular + "'", function (error, recordset) {
                if (error) {
                    console.log("wrong 2");
                    req.flash('errorRegistro', 'Error al realizar el Registro!!!');
                    res.render('RegistroProveedores');
                } else {
                    req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
                    res.render('RegistroProveedores');
                }
            });
        }
    });


});

module.exports = router;