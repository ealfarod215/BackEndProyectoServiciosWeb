var express = require('express');
var router = express.Router();
var db = require('./DBconnection');

var select1 = "select codigo as codRes, nombre as nomRes from tbRestaurante";


router.get('/listarInfoDropMenus', function (req, res, next) {
    db.query(select1, function (err, rows) {
        if (err) throw err;
        res.render('RegistroBebidasHeladas', { restaurante: rows.recordset });

    });
});

router.post('/insertarBebidaHelada', function (req, res, next) {

    var nombre = req.body.inputNombreBebida;
    var ingredientes = req.body.inputIngredientesBebida;
    var precio = req.body.inputPrecioBebida;
    var nomRestaurante = req.body.inputNombreRest;
    var descripcion = req.body.inputDescripcion;


    db.query("EXEC sp_insertarBebidas @nombre='" + nombre + "',@precioUnitario='" + precio + "',@restaurante='" + nomRestaurante + "',@ingredientes='" + ingredientes + "',@descripcion='" + descripcion + "',@foto=' ',@marca=1, @nacionalidad=1, @cantidad=1, @precioBotella=0, @yearCosecha=0, @tipo ='helada'", function (error, recordset) {
        if (error) {
            console.log("wrong " + nombre + " " + ingredientes + " " + precio + " " + nomRestaurante + " " + descripcion);
            res.redirect('/RegistroBebidasHeladas/listarInfoDropMenus');
        } else {
            res.redirect('/RegistroBebidasHeladas/listarInfoDropMenus');
        }
    });


});

module.exports = router;