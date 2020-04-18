var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarNacion', function (req, res, next) {

    var nombre = req.body.inputNombrePais;

    db.query("EXEC sp_insertarPais @nombre = '" + nombre + "',@fotoBandera=''", function (error, recordset) {
        if (error) {
            console.log("wronginsert");
            res.render('RegistroNacion');
        } else {
            res.render('RegistroNacion');
        }
    });


});

module.exports = router;