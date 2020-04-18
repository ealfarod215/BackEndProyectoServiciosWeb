var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ingresoAlSistema = require("./routes/IngresoAlSistema");
var AperturaCajaPiccolaRouter= require("./routes/AperturaCajaPiccolaRest");
var AperturaCajaTurinRouter= require("./routes/AperturaCajaTurinRest");
var AperturaCajaNotteRouter= require("./routes/AperturaCajaNotteRest");

var CierreCajaPiccolaRouter =require("./routes/CierreCajaPiccolaRest");
var CierreCajaTurinRouter =require("./routes/CierreCajaTurinRest");
var CierreCajaNotteRouter =require("./routes/CierreCajaNotteRest");

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
var listaComestibesRouter = require("./routes/ListaComestibles");
var registroComestiblesRouter = require("./routes/RegistroComestibles");
var listaDesechablesEmpaques = require("./routes/ListaDesechablesEmpaques");
var registroDesechablesEmpaques = require("./routes/RegistroDesechablesEmpaques");
var listaLimpiezaeHigieneRouter = require("./routes/ListaLimpiezaeHigiene");
var registroLimpiezaeHigieneRouter = require("./routes/RegistroLimpiezaeHigiene");
var listaTecnologiaRouter = require("./routes/ListaTecnologia");
var registroTecnologiaRouter = require("./routes/RegistroTecnologia");
var listaEquipoyUtencilioRouter = require("./routes/ListaEquiposyUtensilios");
var registroEquipoyUtencilioRouter = require("./routes/RegistroEquiposyUtencilios");
var listaProveedoresRouter = require("./routes/ListaProveedores");
var registroProveedoresRouter = require("./routes/RegistroProveedores");
var ListaUsuariosRouter= require("./routes/ListaUsuarios");
var registroUsuariosRouter= require("./routes/RegistroUsuarios");
var ListaConsecutivosRouter= require("./routes/ListaConsecutivos");
var registroConsecutivosRouter= require("./routes/RegistroConsecutivos");
var ListaPaisesRouter= require("./routes/ListaPaises");
var registroNacionRouter= require("./routes/RegistroNacion");
var ListaCajasRouter= require("./routes/ListaCajas");
var registroClientesMesasRouter = require("./routes/ClientesMesas");
var ListaClientesBarraRouter = require("./routes/ListaClientesBarras");

var RestPiccolaStellaRouter = require("./routes/RestPiccolaStella");
var ReporteEntornoDeRestauranteMesasPiccolaRouter = require("./routes/ReporteEntornoDeRestauranteMesasPiccola");
var ReporteEntornoDeRestauranteReservacionesPiccolaRouter = require("./routes/ReporteEntornoDeRestauranteReservacionesPiccola");
var ReporteEntornoDeRestauranteEspecialidadesPiccolaRouter = require("./routes/ReporteEntornoDeRestauranteEspecialidadesPiccola");
var ReporteEntornoDeRestauranteBarraMesasPiccolaRouter = require("./routes/ReporteEntornoDeRestauranteBarraMesasPiccola");

var RestNotteDiFuocoRouter= require("./routes/RestNotteDiFuoco");
var ReporteEntornoDeRestauranteMesasNotteRouter = require("./routes/ReporteEntornoDeRestauranteMesasNotte");
var ReporteEntornoDeRestauranteReservacionesNotteRouter = require("./routes/ReporteEntornoDeRestauranteReservacionesNotte");
var ReporteEntornoDeRestauranteEspecialidadesNotteRouter = require("./routes/ReporteEntornoDeRestauranteEspecialidadesNotte");
var ReporteEntornoDeRestauranteBarraMesasNotteRouter = require("./routes/ReporteEntornoDeRestauranteBarraMesasNotte");

var RestTurinAnivoRouter = require("./routes/RestTurinAnivo");
var ReporteEntornoDeRestauranteMesasTurinRouter = require("./routes/ReporteEntornoDeRestauranteMesasTurin");
var ReporteEntornoDeRestauranteReservacionesTurinRouter = require("./routes/ReporteEntornoDeRestauranteReservacionesTurin");
var ReporteEntornoDeRestauranteEspecialidadesTurinRouter = require("./routes/ReporteEntornoDeRestauranteEspecialidadesTurin");
var ReporteEntornoDeRestauranteBarraMesasTurinRouter = require("./routes/ReporteEntornoDeRestauranteBarraMesasTurin");

var ReporteDeLicoresPiccolaRouter = require("./routes/ReporteDeLicoresPiccola");
var ReporteDeLicoresTurinRouter = require("./routes/ReporteDeLicoresTurin");
var ReporteDeLicoresNotteRouter = require("./routes/ReporteDeLicoresNotte");

var ReporteDeVinosPiccolaRouter = require("./routes/ReporteDeVinosPiccola");
var ReporteDeVinosTurinRouter = require("./routes/ReporteDeVinosTurin");
var ReporteDeVinosNotteRouter = require("./routes/ReporteDeVinosNotte");
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
app.use('/AperturaCajaPiccolaRest',AperturaCajaPiccolaRouter);
app.use('/AperturaCajaTurinRest',AperturaCajaTurinRouter);
app.use('/AperturaCajaNotteRest',AperturaCajaNotteRouter);

app.use('/CierreCajaPiccolaRest',CierreCajaPiccolaRouter );
app.use('/CierreCajaTurinRest',CierreCajaTurinRouter );
app.use('/CierreCajaNotteRest',CierreCajaNotteRouter);

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
app.use('/ListaComestibles',listaComestibesRouter);
app.use('/RegistroComestibles',registroComestiblesRouter);
app.use('/ListaDesechablesEmpaques',listaDesechablesEmpaques);
app.use('/RegistroDesechablesEmpaques',registroDesechablesEmpaques);
app.use('/ListaLimpiezaeHigiene',listaLimpiezaeHigieneRouter);
app.use('/RegistroLimpiezaeHigiene',registroLimpiezaeHigieneRouter);
app.use('/ListaTecnologia',listaTecnologiaRouter);
app.use('/RegistroTecnologia',registroTecnologiaRouter);
app.use('/ListaEquiposyUtensilios',listaEquipoyUtencilioRouter);
app.use('/RegistroEquiposyUtencilios',registroEquipoyUtencilioRouter);
app.use('/ListaProveedores',listaProveedoresRouter);
app.use('/RegistroProveedores',registroProveedoresRouter);
app.use('/ListaUsuarios', ListaUsuariosRouter);
app.use('/RegistroUsuarios',registroUsuariosRouter);
app.use('/ListaConsecutivos', ListaConsecutivosRouter);
app.use('/RegistroConsecutivos', registroConsecutivosRouter);
app.use('/ListaPaises', ListaPaisesRouter);
app.use('/RegistroNacion', registroNacionRouter);
app.use('/ListaCajas', ListaCajasRouter);
app.use('/ClientesMesas',registroClientesMesasRouter);
app.use('/ListaClientesBarras',ListaClientesBarraRouter);

app.use('/RestPiccolaStella', RestPiccolaStellaRouter);
app.use('/ReporteEntornoDeRestauranteMesasPiccola',ReporteEntornoDeRestauranteMesasPiccolaRouter);
app.use('/ReporteEntornoDeRestauranteReservacionesPiccola',ReporteEntornoDeRestauranteReservacionesPiccolaRouter);
app.use('/ReporteEntornoDeRestauranteEspecialidadesPiccola',ReporteEntornoDeRestauranteEspecialidadesPiccolaRouter);
app.use('/ReporteEntornoDeRestauranteBarraMesasPiccola',ReporteEntornoDeRestauranteBarraMesasPiccolaRouter);

app.use('/RestNotteDiFuoco', RestNotteDiFuocoRouter);  
app.use('/ReporteEntornoDeRestauranteMesasNotte',ReporteEntornoDeRestauranteMesasNotteRouter);
app.use('/ReporteEntornoDeRestauranteReservacionesNotte',ReporteEntornoDeRestauranteReservacionesNotteRouter);
app.use('/ReporteEntornoDeRestauranteEspecialidadesNotte',ReporteEntornoDeRestauranteEspecialidadesNotteRouter);
app.use('/ReporteEntornoDeRestauranteBarraMesasNotte',ReporteEntornoDeRestauranteBarraMesasNotteRouter);

app.use('/RestTurinAnivo', RestTurinAnivoRouter);
app.use('/ReporteEntornoDeRestauranteMesasTurin',ReporteEntornoDeRestauranteMesasTurinRouter);
app.use('/ReporteEntornoDeRestauranteReservacionesTurin',ReporteEntornoDeRestauranteReservacionesTurinRouter);
app.use('/ReporteEntornoDeRestauranteEspecialidadesTurin',ReporteEntornoDeRestauranteEspecialidadesTurinRouter);
app.use('/ReporteEntornoDeRestauranteBarraMesasTurin',ReporteEntornoDeRestauranteBarraMesasTurinRouter);

app.use('/ReporteDeLicoresPiccola',ReporteDeLicoresPiccolaRouter);
app.use('/ReporteDeLicoresTurin',ReporteDeLicoresTurinRouter);
app.use('/ReporteDeLicoresNotte',ReporteDeLicoresNotteRouter);

app.use('/ReporteDeVinosPiccola',ReporteDeVinosPiccolaRouter);
app.use('/ReporteDeVinosTurin',ReporteDeVinosTurinRouter);
app.use('/ReporteDeVinosNotte',ReporteDeVinosNotteRouter);
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
