var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.get('/mostrarInfoReporteLicores', function (req, res, next) {
    db.query('EXEC sp_ReporteLicores', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ReporteDeLicoresTurin', recordset);
        }
    });
});

module.exports = router;