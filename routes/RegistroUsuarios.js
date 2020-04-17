var express = require('express');
var router = express.Router();
var db = require('./DBconnection');


router.post('/insertarUsuarios', function (req, res, next) {
    
    var nombre= req.body.inputNombreUsuario;
    var apellidoUno = req.body.inputApellidoUno;
    var apellidoDos = req.body.inputApellidoDos;
    var telefonoFijo = req.body.inputTelFijo;
    var telefonoCelular = req.body.inputTelCel;
    var loginUsuario = req.body.inputLogin;
    var privilegios=req.body.inputprivilegios;
    var contrasena = req.body.inputClave;
    var confirmar = req.body.inputConfirmarClave;

    if (contrasena == confirmar) {
        db.query("EXEC sp_insertarUsuario @nombre = '"+nombre+"',@apellidoUno='"+apellidoUno+"',@apellidoDos='"+apellidoDos+"',@telefonoFijo='"+telefonoFijo+ 
        "',@telefonoCelular='"+telefonoCelular+ "',@privilegios='"+privilegios+ "',@loginUsuario='"+loginUsuario+ "',@contrasena='"+contrasena+"'", function (error, recordset) {
            if (error) {
                alert("Verifique que las dos contrasenas coincidan y que se seleccionara un privilegio");
                console.log("wronginsert");
                return;
            } else {
                res.render('RegistroUsuarios');
            }
    });}


    });

module.exports = router;