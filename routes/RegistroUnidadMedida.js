var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var sqlEscala = "select codigo as codEscala, detalle as detEscala from tbEscala";
var sqlDetalle = "select codigo as codDetalle, detalle as detDetalle from tbDetalle";


router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(sqlEscala, function (err, rows) {
        if (err) throw err;
        db.query(sqlDetalle, function (err, rows1) {
            if (err) throw err;


            res.render('RegistroUnidadMedida', { escala: rows.recordset, detalle: rows1.recordset});
                });
            });
});
router.post('/insertarUnidadMedida', function (req, res, next) {
    var unidad = req.body.inputNombreUniMed;
    var escala = req.body.inputSelectEscala;
    var detalle = req.body.inputSelectDetalle;
    var simbolo = req.body.inputSimboloUniMed;
    var simbologia = req.body.inputSimbologiaUniMed;

    db.query("EXEC sp_insertarEquiposUtencilio @unidad = '" + unidad + "',@escala= '" + escala + "',@detalle = '" + detalle + "',@simbolo = '" + simbolo + "',@simbologia = '" + simbologia + "'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroUnidadMedida/listarInfoDropMenus');
        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroUnidadMedida/listarInfoDropMenus');
        }
    });


});

module.exports = router;