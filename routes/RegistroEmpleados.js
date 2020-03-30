var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarEmpleados', function (req, res, next) {
    
    var cedula= req.body.inputCedulaEmpleado;
    var nombre = req.body.inputNombreEmpleado;
    var apellidoUno = req.body.inputApellidoUnoEmpleado;
    var apellidoDos = req.body.inputApellidoDosEmpleado;
    var telefonoUno = req.body.inputTelefonoUnoEmpleado;
    var telefonoDos = req.body.inputTelefonoDosEmpleado;
    var puesto = req.body.inputSelectPuesto;
    var nacionalidad = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputSelectRestaurante;


    db.query("exec sp_insertarEmpleados @cedula='" + cedula + "',@nombre='" + nombre + "',@apellidoUno='" + apellidoUno + "',@apellidoDos='" + apellidoDos + "',@telefonoUno='"+ telefonoUno + "',@telefonoDos='"+ telefonoDos + "',@puesto='" + puesto + "',@nacionalidad='" + nacionalidad + "',@restaurante='" + restaurante + "',@foto=' '", function (error, recordset) {
        if (error) {
            console.log("wrong");
            return;
        } else {
            res.render('RegistroEmpleados');
        }
    });


});

module.exports = router;