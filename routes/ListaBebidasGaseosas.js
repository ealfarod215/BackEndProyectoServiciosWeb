var express = require('express');
var router = express.Router();
var db = require('./DBconnection');
var select1 = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var select2 = "EXEC sp_allBebidasGaseosas";
router.get('/listarAllBebidasGaseosas', function (req, res, next) {

    db.query(select1, function (err, rows1) {
        if (err) throw err;
        db.query(select2, function (err, rows) {
            if (err) throw err;
            console.log(rows);
            console.log(rows1);
            res.render('ListaBebidasGaseosas', { Bebidas: rows.recordset, restaurante: rows1.recordset });
        });
    });
});

router.post('/filtrarLista', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;
    var codigoRest = req.body.inputNombreRest;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasGaseosas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_listarBebidasGaseosas @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, rows) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasGaseosas', { mensaje: 'Error al Filtrar la Información!!!' });
            } else {
                console.log(rows.recordset);
                res.render('ListaBebidasGaseosas', {Bebidas: rows.recordset});
            }
        });
    }

});

router.post('/eliminarRestRegistro', function (req, res, next) {
    var codigo = req.body.inputCodBH;
    var nombre = req.body.inputNomBH;

    if (codigo == "" || nombre == "") {
        console.log("Debe llenar todos los campos");
        res.render('ListaBebidasGaseosas', { mensaje: 'Debe llenar toda la Información!!!' });

    } else {
        db.query("EXEC sp_borrarBebidasGaseosas @codigo = '" + codigo + "', @nombre = '" + nombre + "'", function (error, recordset) {
            if (error) {
                console.log("wrong");
                res.render('ListaBebidasGaseosas', { mensaje: 'Error al Eliminar la Información!!!' });

            } else {
                console.log(recordset.recordset);
                res.render('ListaBebidasGaseosas', { mensaje: 'Se elimino el Restaurante de manera Exitosa' });
            }
        });
    }

});

module.exports = router;