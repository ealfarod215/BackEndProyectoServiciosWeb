var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllReservacionesEstado', function (req, res, next) {
    db.query('EXEC sp_ReservacionesNotte', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteEntornoDeRestauranteReservacionesNotte', recordset);
        }
    });
});



module.exports = router;