var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/mostrarInfoAyudaSeguridad', function (req, res, next) {
    /*cambiar el mensaje */
    res.render('ReporteAyudaDeSeguridad',
        {
            mensajeDos: 'Administrador de Seguridad: este tipo de administrador ingresa a la pantalla principal, que se explicó en la sección 4, Figura Nº 1, pero solo puede acceder a las Ventanas de Seguridad y en los Reportes, únicamente puede acceder a la Bitácora, no puede acceder a la vista de los restaurantes.'
        });
});

module.exports = router;