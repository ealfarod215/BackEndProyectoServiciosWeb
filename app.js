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
