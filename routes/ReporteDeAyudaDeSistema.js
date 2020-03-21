var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/mostrarInfoAyudaSistema', function (req, res, next) {
    /*cambiar el mensaje */
    res.render('ReporteDeAyudaDeSistema', 
    { 
        mensajeUno: 'Administrador de Sistema: este tipo de administrador ingresa a la pantalla principal, que se explicó en la sección 4, Figura Nº 1, pero solo puede acceder a las Ventanas de Proveedores, a las Ventanas de Administración, Listas de Restaurantes, Listado de Clientes y los Reportes de los Clientes (ÚNICAMENTE), no puede acceder a la vista de los restaurantes.', 
    });
});

module.exports = router;