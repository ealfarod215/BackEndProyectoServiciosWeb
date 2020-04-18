var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllEspecialidadesEstado', function (req, res, next) {
    db.query('EXEC sp_EspecialidadesNotte', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteEntornoDeRestauranteEspecialidadesNotte', recordset);
        }
    });
});



module.exports = router;