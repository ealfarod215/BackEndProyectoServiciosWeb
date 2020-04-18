var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllCajas', function (req, res, next) {
    db.query('EXEC sp_allCajas', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaCajas', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodRegistro; 
    var nombre = req.body.inputNomRestaurante; 

    if (codigo == "" || nombre == "" ) {
        console.log("Debe llenar todos los campos");
        res.render('ListaCajas', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarCajas @codigo = '" + codigo + "', @restaurante = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                return;
            } else {
                console.log(recordset.recordset);
                res.render('ListaCajas', recordset);
            }
        });
    }

});
module.exports = router;