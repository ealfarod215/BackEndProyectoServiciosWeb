var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

router.get('/listarAllListaUnidadesMedida', function (req, res, next) {
    db.query('EXEC sp_allUnidadDeMedida', function (error, recordset) {
        if (error) {
            console.log('error en el listado');
            return;
        } else {
            console.log(recordset.recordset);
            res.render('ListaUnidadesMedida', recordset);
        }
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodUniMed; 
    var unidad = req.body.inputNomUniMed;

    if (codigo == "" || unidad == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaUnidadesMedida', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_listarUnidadDeMedida @codigo = '" + codigo + "', @unidad = '" + unidad + "'", function (error, recordset) {
            if (error) {
                console.log("wrongselect");
                res.render('ListaUnidadesMedida', {mensaje:'Error al Filtrar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaUnidadesMedida', recordset);
            }
        });
    }

});

router.post('/eliminarUnidadesMedida', function (req, res, next) {
    var codigo = req.body.inputCodUniMed; 
    var unidad = req.body.inputNomUniMed;

    if (codigo == "" || unidad == ""){
        console.log("Debe llenar todos los campos");
        res.render('ListaUnidadesMedida', {mensaje:'Debe llenar toda la Información!!!'});

    } else {
        db.query("EXEC sp_borrarlistarUnidadDeMedida @codigo = '" + codigo + "', @unidad = '" + unidad + "'",  function (error, recordset) {
            if (error) {
                console.log("wrongborrar");
                res.render('ListaUnidadesMedida', {mensaje:'Error al Eliminar la Información!!!'});
            } else {
                console.log(recordset.recordset);
                res.render('ListaUnidadesMedida', {mensaje:'Se elimino de manera exitosa'});
            }
        });
    }

});

module.exports = router;