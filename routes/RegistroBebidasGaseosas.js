var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var select1 = "select codigo as codRes, nombre as nomRes from tbRestaurante";
var select2 = "select codigo as codMarca, nombre as nomMarca from tbMarcas";
var select3 = "select codigo as codPais, nombre as nomPais from tbPais";

router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(select1, function (err, rows) {
        if (err) throw err;
        db.query(select2, function (err, rows1) {
            if (err) throw err;
            db.query(select3, function (err, rows2) {
                if (err) throw err;
                console.log(rows);
                console.log(rows1);
                console.log(rows2);
                res.render('RegistroBebidasGaseosas', { restaurante: rows.recordset, marca: rows1.recordset, nacionalidad: rows2.recordset });
            });
        });

    });
});

router.post('/insertarBebidaGaseosa', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var cantidad = req.body.inputCantidadBebida;
    var precio = req.body.inputPrecioBebida;
    var nomRestaurante = req.body.inputNombreRest;
    var descripcion = req.body.inputDescripcion;
    var pais = req.body.inputSelectNacionalidad;
    var marca = req.body.inputSelectMarca;


    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precio + "',@restaurante='" + nomRestaurante + "',@ingredientes='NoAplica',@descripcion='" + descripcion + "',@foto=' ',@marca='" + marca + "', @nacionalidad='" + pais + "', @cantidad='" + cantidad + "', @precioBotella=0, @yearCosecha=0, @tipo ='gaseosa'", function (error, recordset) {
        if (error) {
            console.log("wrong ");
            res.redirect('/RegistroBebidasGaseosas/listarInfoDropMenus');
        } else {
            res.redirect('/RegistroBebidasGaseosas/listarInfoDropMenus');
        }
    });


});

module.exports = router;