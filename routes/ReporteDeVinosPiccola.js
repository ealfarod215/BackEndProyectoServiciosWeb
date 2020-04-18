var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/mostrarInfoReporteVinos', function (req, res, next) {
    db.query('EXEC sp_ReporteVinos', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteDeVinosPiccola', recordset);
        }
    });
});
module.exports = router;