var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllMesasEstado', function (req, res, next) {
    db.query('EXEC sp_MesasOcupadasTurin', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteEntornoDeRestauranteMesasTurin', recordset);
        }
    });
});



module.exports = router;