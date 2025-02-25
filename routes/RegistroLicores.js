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
                res.render('RegistroLicores', { restaurante: rows.recordset, marca: rows1.recordset, nacionalidad: rows2.recordset });
            });
        });

    });
});


router.post('/insertarLicor', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var marca = req.body.inputSelectMarca;
    var pais = req.body.inputSelectNacionalidad;
    var precioU = req.body.inputPrecioUnitario;
    var precioB = req.body.inputPrecioBotella;
    var restaurante = req.body.inputNombreRest
    var cantidad = req.body.inputCantidadBebida
    var descripcion = req.body.inputDescripcion

    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precioU + "',@restaurante='" + restaurante + "',@ingredientes='Azucar',@descripcion='" + descripcion + "',@foto=' ',@marca='" + marca + "', @nacionalidad='" + pais + "', @cantidad='" + cantidad + "', @precioBotella='" + precioB + "', @yearCosecha=0, @tipo ='licor'", function (error, recordset) {
        if (error) {
            console.log("wrong");
            req.flash('errorRegistro', 'Error al realizar el Registro!!!');
            res.redirect('/RegistroLicores/listarInfoDropMenus');

        } else {
            req.flash('exitoRegistro', 'Exito al realizar el Registro!!!');
            res.redirect('/RegistroLicores/listarInfoDropMenus');
        }
    });


});

module.exports = router;