var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllBarraMesasEstado', function (req, res, next) {
    db.query('EXEC sp_BarraMesasPiccola', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteEntornoDeRestauranteBarraMesasPiccola', recordset);
        }
    });
});




module.exports = router;