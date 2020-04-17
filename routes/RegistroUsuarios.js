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
    var AdmSistema = req.body.inputAdmSistema;
    var AdmSeguridad = req.body.inputAdmSeguridad;
    var AdmRestaurante = req.body.inputAdmRestaurante;
    var AdmCuentas = req.body.inputAdmCuentas;
    var contrasena = req.body.inputClave;
    var confirmar = req.body.inputConfirmarClave;

    if (AdmSistema == false || AdmSeguridad == false || AdmRestaurante == false || AdmCuentas == true || contrasena == confirmar) {
        db.query("EXEC sp_insertarUsuario @nombre = '"+nombre+"',@apellidoUno='"+apellidoUno+"',@apellidoDos='"+apellidoDos+"',@telefonoFijo='"+telefonoFijo+ 
        "',@telefonoCelular='"+telefonoCelular+ "',@privilegios='"+1+ "',@loginUsuario='"+loginUsuario+ "',@contrasena='"+contrasena+"'", function (error, recordset) {
            if (error) {
                alert("Verifique que las dos contrasenas coincidan y que se seleccionara un privilegio");
                console.log("wronginsert");
                return;
            } else {
                res.render('RegistroUsuarios');
            }
        });
    } else if (AdmSistema == true ||  AdmSeguridad == false || AdmRestaurante == false ||  AdmCuentas == false || contrasena == confirmar) {
        db.query("EXEC sp_insertarUsuario @nombre = '"+nombre+"',@apellidoUno='"+apellidoUno+"',@apellidoDos='"+apellidoDos+"',@telefonoFijo='"+telefonoFijo+ 
        "',@telefonoCelular='"+telefonoCelular+ "',@privilegios='"+2+ "',@loginUsuario='"+loginUsuario+ "',@contrasena='"+contrasena+"'", function (error, recordset) {
            if (error) {
                alert("Verifique que las dos contrasenas coincidan y que se seleccionara un privilegio");
                console.log("wronginsert");
                return;
            } else {
                res.render('RegistroUsuarios');
            }
        });
    } else if (AdmSistema == false ||  AdmSeguridad == true || AdmRestaurante == false ||  AdmCuentas == false || contrasena == confirmar) {
    db.query("EXEC sp_insertarUsuario @nombre = '"+nombre+"',@apellidoUno='"+apellidoUno+"',@apellidoDos='"+apellidoDos+"',@telefonoFijo='"+telefonoFijo+ 
    "',@telefonoCelular='"+telefonoCelular+ "',@privilegios='"+3+ "',@loginUsuario='"+loginUsuario+ "',@contrasena='"+contrasena+"'", function (error, recordset) {
        if (error) {
            alert("Verifique que las dos contrasenas coincidan y que se seleccionara un privilegio");
            console.log("wronginsert");
            return;
        } else {
            res.render('RegistroUsuarios');
        }
    });
    } else if (AdmSistema == false ||  AdmSeguridad == false || AdmRestaurante == true ||  AdmCuentas == false || contrasena == confirmar) {
    db.query("EXEC sp_insertarUsuario @nombre = '"+nombre+"',@apellidoUno='"+apellidoUno+"',@apellidoDos='"+apellidoDos+"',@telefonoFijo='"+telefonoFijo+ 
    "',@telefonoCelular='"+telefonoCelular+ "',@privilegios='"+4+ "',@loginUsuario='"+loginUsuario+ "',@contrasena='"+contrasena+"'", function (error, recordset) {
        if (error) {
            alert("Verifique que las dos contrasenas coincidan y que se seleccionara un privilegio");
            console.log("wronginsert");
            return;
        } else {
            res.render('RegistroUsuarios');
        }
    });
    } else {
    res.render('RegistroUsuarios');
}

});

module.exports = router;