var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlEmpleado = "select codigo as codPuesto, nombre as nomPuesto from tbPuestos";
var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var sqlPais = "select codigo as codPais, nombre as nomPais from tbPais";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;
        db.query(sqlEmpleado, function (err, rows1) {
            if (err) throw err;
            db.query(sqlPais, function (err, rows2) {
                if (err) throw err;
                console.log(sqlEmpleado);
                res.render('RegistroEmpleados', { restaurante: rows.recordset, puestoEmp: rows1.recordset, nacionalidad: rows2.recordset });
            });
        });
    });
});

router.post('/insertarEmpleados', function (req, res, next) {

    var cedula = req.body.inputCedulaEmpleado;
    var nombre = req.body.inputNombreEmpleado;
    var apellidoUno = req.body.inputApellidoUnoEmpleado;
    var apellidoDos = req.body.inputApellidoDosEmpleado;
    var telefonoUno = req.body.inputTelefonoUnoEmpleado;
    var telefonoDos = req.body.inputTelefonoDosEmpleado;
    var puesto = req.body.inputSelectPuesto;
    var nacionalidad = req.body.inputSelectNacionalidad;
    var restaurante = req.body.inputSelectRestaurante;


    db.query("exec sp_insertarEmpleados @cedula='" + cedula + "',@nombre='" + nombre + "',@apellidoUno='" + apellidoUno + "',@apellidoDos='" + apellidoDos + "',@telefonoUno='" + telefonoUno + "',@telefonoDos='" + telefonoDos + "',@puesto='" + puesto + "',@nacionalidad='" + nacionalidad + "',@restaurante='" + restaurante + "',@foto=' '", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroEmpleados/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroEmpleados/listarInfoDropMenus');
        }
    });


});

module.exports = router;