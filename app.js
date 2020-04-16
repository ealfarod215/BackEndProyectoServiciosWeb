var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ingresoAlSistema = require("./routes/IngresoAlSistema");
var reporteAyudaSistem = require("./routes/ReporteDeAyudaDeSistema");
var reporteAyudaSeguridad = require("./routes/ReporteAyudaDeSeguridad");
var listaDeRestaurantesRouter = require("./routes/ListaDeRestaurantes");
var restaurantesRegistroRouter = require("./routes/RestaurantesRegistro");
var registroComidaBuffetRouter = require("./routes/RegistroComidaBuffet");
var buffetRouter = require("./routes/Buffet");
var listaBebidasCalientesRouter = require("./routes/ListaBebidasCalientes");
var registroBebidasCalientesRouter = require("./routes/RegistroBebidasCalientes");
var listaBebidasHeladasRouter = require("./routes/ListaBebidasHeladas");
var registroBebidasHeladasRouter = require("./routes/RegistroBebidasHeladas");
var listaBebidasGaseosasRouter = require("./routes/ListaBebidasGaseosas");
var registroBebidasGaseosasRouter = require("./routes/RegistroBebidasGaseosas");
var listaLicoresRouter = require("./routes/ListaLicores");
var registroLicoresRouter = require("./routes/RegistroLicores");
var listaVinosRouter = require("./routes/ListaVinos");
var registroVinosRouter = require("./routes/RegistroVinos");
var ListaEspecialesRouter = require("./routes/ListaEspeciales");
var registroEpecialesRouter = require("./routes/RegistroEpeciales");
var ListaMesasRouter = require("./routes/ListaMesas");
var registroMesasRouter = require("./routes/RegistroMesas");
var ListaEmpleadosRouter = require("./routes/ListaEmpleados");
var registroEmpleadosRouter = require("./routes/RegistroEmpleados");
var ListaPuestosRouter= require("./routes/ListaPuestos");
var registroPuestosRouter= require("./routes/RegistroPuestos");
var ListaClientesRouter= require("./routes/ListaClientes");
var listaMarcasRouter = require("./routes/ListaMarcas");
var registroMarcasRouter = require("./routes/RegistroMarcas");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ingresoAlSistema',ingresoAlSistema);
app.use('/ReporteDeAyudaDeSistema', reporteAyudaSistem);
app.use('/ReporteAyudaDeSeguridad', reporteAyudaSeguridad);
app.use('/ListaDeRestaurantes',listaDeRestaurantesRouter);
app.use('/RestaurantesRegistro',restaurantesRegistroRouter);
app.use('/Buffet',buffetRouter);
app.use('/RegistroComidaBuffet',registroComidaBuffetRouter);
app.use('/ListaBebidasCalientes', listaBebidasCalientesRouter);
app.use('/RegistroBebidasCalientes', registroBebidasCalientesRouter);
app.use('/ListaBebidasHeladas', listaBebidasHeladasRouter);
app.use('/RegistroBebidasHeladas', registroBebidasHeladasRouter);
app.use('/ListaBebidasGaseosas', listaBebidasGaseosasRouter);
app.use('/RegistroBebidasGaseosas', registroBebidasGaseosasRouter);
app.use('/ListaLicores', listaLicoresRouter);
app.use('/RegistroLicores', registroLicoresRouter);
app.use('/ListaVinos', listaVinosRouter);
app.use('/RegistroVinos', registroVinosRouter);
app.use('/ListaEspeciales', ListaEspecialesRouter);
app.use('/RegistroEpeciales', registroEpecialesRouter);
app.use('/ListaMesas', ListaMesasRouter);
app.use('/RegistroMesas', registroMesasRouter);
app.use('/ListaEmpleados', ListaEmpleadosRouter);
app.use('/RegistroEmpleados', registroEmpleadosRouter);
app.use('/ListaPuestos', ListaPuestosRouter);
app.use('/RegistroPuestos', registroPuestosRouter); 
app.use('/ListaClientes', ListaClientesRouter);
app.use('/ListaMarcas',listaMarcasRouter);
app.use('/RegistroMarcas',registroMarcasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
