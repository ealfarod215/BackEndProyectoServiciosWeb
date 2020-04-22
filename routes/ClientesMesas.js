var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlRestaurante = "select codigo as codRes, nombre as nomRes from tbRestaurante";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlRestaurante, function (err, rows) {
        if (err) throw err;

        res.render('ClientesMesas', { restaurante: rows.recordset });
    });
});

router.post('/insertarCliente', function (req, res, next) {

    var cedula = req.body.inputCedCliente;
    var nombre = req.body.inputNomCliente;
    var apellidoUno = req.body.inputApClienteUno;
    var apellidoDos = req.body.inputApClienteDos;

    var montoPagado = req.body.inputMontoPago;
    var detalle = req.body.inputDetalle;
    var fecha = req.body.inputFecha;
    var barra = req.body.inputBarra;
    /*Usar para validar*/
    var reserva = req.body.inputReservacion;
    var restaurante = req.body.inputNombreRest;

    /*Para segundo query */
    var mesa = req.body.inputSelectNomMesa;


    db.query("EXEC sp_insertarClientes @cedula = '" + cedula + "', @nombre = '" + nombre + "', @apellidoUno = '" + apellidoUno + "', @apellidoDos = '" + apellidoDos + "', @montoPagado = '" + montoPagado + "', @detalle = '" + detalle + "',@fecha = '" + fecha + "',@reservacion = '" + reserva + "', @barra = '" + barra + "', @restaurante = '" + restaurante + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/ClientesMesas/listarInfoDropMenus');

        } else {
            if (reserva == "Si") {
                db.query("EXEC sp_insertarReservacion @codigoMesa = '" + mesa + "', @cedula = '" + cedula + "', @restaurante = '" + restaurante + "'", function (error, recordset) {
                    if (error) {
                        console.log("wrong en segundo query");
                        req.flash('errorRegistro', 'Error al realizar el Registro!!!');
                        res.redirect('/ClientesMesas/listarInfoDropMenus');
                    } else {
                        req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
                        res.redirect('/ClientesMesas/listarInfoDropMenus');
                    }
                });
            } else {
                req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
                res.redirect('/ClientesMesas/listarInfoDropMenus');
            }

        }
    });


});

module.exports = router;