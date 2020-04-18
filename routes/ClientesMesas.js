var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarCliente', function (req, res, next) {

    var cedula = req.body.inputCedCliente;
    var nombre = req.body.inputNomCliente;
    var apellidoUno = req.body.inputApClienteUno;
    var apellidoDos = req.body.inputApClienteDos;

    var montoPagado = req.body.inputMontoPago;
    var detalle = req.body.inputDetalle;
    var fecha = req.body.inputFecha;
    /*Usar para validar*/
    var reserva = req.body.inputReservacion;
    var restaurante = req.body.inputNombreRest;

    /*Para segundo query */
    var mesa = req.body.inputSelectNomMesa;


    db.query("EXEC sp_insertarClientes @cedula = '" + cedula + "', @nombre = '" + nombre + "', @apellidoUno = '" + apellidoUno + "', @apellidoDos = '" + apellidoDos + "', @montoPagado = '" + montoPagado + "', @detalle = '" + detalle + "',@fecha = '" + fecha + "',@reservacion = '" + reserva + "', @barra = 'No', @restaurante = '" + restaurante + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.render('ClientesMesas');
        } else {
            if (reserva == "Si") {
                db.query("EXEC sp_insertarReservacion @codigoMesa = '" + mesa + "', @cedula = '" + cedula + "', @restaurante = '" + restaurante + "'", function (error, recordset) {
                    if (error) {
                        console.log("wrong en segundo query");
                        res.render('ClientesMesas');
                    } else {

                        res.render('ClientesMesas');
                    }
                });
            } else {
                res.render('ClientesMesas');
            }

        }
    });


});

module.exports = router;