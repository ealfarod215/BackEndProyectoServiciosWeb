var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarNacion', function (req, res, next) {
    
    var nombre= req.body.inputNombrePais;
    var foto = req.body.inputFotoPais;

    db.query("EXEC sp_insertarPais @nombre = '"+nombre+"',@fotoBandera='"+foto+"'", function (error, recordset) {
        if (error) {
            console.log("wronginsert");
            return;
        } else {
            res.render('RegistroNacion');
        }
    });


});

module.exports = router;