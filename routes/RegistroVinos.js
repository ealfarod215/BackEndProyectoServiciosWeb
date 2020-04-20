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
                res.render('RegistroVinos', { restaurante: rows.recordset, marca: rows1.recordset, nacionalidad: rows2.recordset });
            });
        });

    });
});

router.post('/insertarVino', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var marca = req.body.inputSelectMarca;
    var pais = req.body.inputSelectNacionalidad;
    var precioUnitario = req.body.inputPrecioUnitario;
    var precioBotella = req.body.inputPrecioBotella;
    var cantidad = req.body.inputCantidad;
    var cosecha = req.body.inputCosecha;
    var restaurante = req.body.inputNombreRest;
    var descripcion = req.body.inputDescripcion;

    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precioUnitario + "',@restaurante='" + restaurante + "',@ingredientes='Azucar',@descripcion='" + descripcion + "',@foto=' ',@marca='" + marca + "', @nacionalidad='" + pais + "', @cantidad='" + cantidad + "', @precioBotella='" + precioBotella + "', @yearCosecha='" + cosecha + "', @tipo ='vino'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            res.redirect('/RegistroVinos/listarInfoDropMenus');
        } else {
            res.redirect('/RegistroVinos/listarInfoDropMenus');
        }
    });


});

module.exports = router;