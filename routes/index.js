var express = require('express');
var router = express.Router();

/*Se crea un render para cada archivo cada template */
/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('IngresoAlSistema', { title: 'Express' });
});

router.get('/IngresoAlSistema', function(req, res, next) {
  res.render('IngresoAlSistema', { title: 'IngresoAlSistema' });
});
/*Apertura de Caja */
router.get('/AperturaCajaPiccolaRest', function(req, res, next) {
  res.render('AperturaCajaPiccolaRest', { title: 'AperturaCajaPiccolaRest' });
});
/*Apertura de Caja */
router.get('/AperturaCajaTurinRest', function(req, res, next) {
  res.render('AperturaCajaTurinRest', { title: 'AperturaCajaTurinRest' });
});
/*Apertura de Caja */
router.get('/AperturaCajaNotteRest', function(req, res, next) {
  res.render('AperturaCajaNotteRest', { title: 'AperturaCajaNotteRest' });
});

/*Buffet */
router.get('/Buffet', function(req, res, next) {
  res.render('Buffet', { title: 'Buffet' });
});

/*Cierre de Caja */
router.get('/CierreCajaPiccolaRest', function(req, res, next) {
  res.render('CierreCajaPiccolaRest', { title: 'CierreCajaPiccolaRest' });
});

/*Cierre de Caja */
router.get('/CierreCajaNotteRest', function(req, res, next) {
  res.render('CierreCajaNotteRest', { title: 'CierreCajaNotteRest' });
});

/*Cierre de Caja */
router.get('/CierreCajaTurinRest', function(req, res, next) {
  res.render('CierreCajaTurinRest', { title: 'CierreCajaTurinRest' });
});


/*ClientesMesas */
router.get('/ClientesMesas', function(req, res, next) {
  res.render('ClientesMesas', { title: 'ClientesMesas' });
});

/*Especialidades */
router.get('/Especialidades', function(req, res, next) {
  res.render('Especialidades', { title: 'Especialidades' });
});

/*Funcionalidades */
router.get('/Funcionalidades', function(req, res, next) {
  res.render('Funcionalidades', { title: 'Funcionalidades' });
});

/*ListaBebidasCalientes*/
router.get('/ListaBebidasCalientes', function(req, res, next) {
  res.render('ListaBebidasCalientes', { title: 'ListaBebidasCalientes' });
});

/*ListaBebidasGaseosas */
router.get('/ListaBebidasGaseosas', function(req, res, next) {
  res.render('ListaBebidasGaseosas', { title: 'ListaBebidasGaseosas' });
});

/*ListaBebidasHeladas*/
router.get('/ListaBebidasHeladas', function(req, res, next) {
  res.render('ListaBebidasHeladas', { title: 'ListaBebidasHeladas' });
});

/*ListaBitacora*/
router.get('/ListaBitacora', function(req, res, next) {
  res.render('ListaBitacora', { title: 'ListaBitacora' });
});

/*ListaCajas*/
router.get('/ListaCajas', function(req, res, next) {
  res.render('ListaCajas', { title: 'ListaCajas' });
});

/*ListaClientes*/
router.get('/ListaClientes', function(req, res, next) {
  res.render('ListaClientes', { title: 'ListaClientes' });
});

/*ListaClientesBarras*/
router.get('/ListaClientesBarras', function(req, res, next) {
  res.render('ListaClientesBarras', { title: 'ListaClientesBarras' });
});

/*ListaComestibles*/
router.get('/ListaComestibles', function(req, res, next) {
  res.render('ListaComestibles', { title: 'ListaComestibles' });
});

/*ListaConsecutivos*/
router.get('/ListaConsecutivos', function(req, res, next) {
  res.render('ListaConsecutivos', { title: 'ListaConsecutivos' });
});

/*ListaDeRestaurantes*/
router.get('/ListaDeRestaurantes', function(req, res, next) {
  res.render('ListaDeRestaurantes', { title: 'ListaDeRestaurantes' });
});

/*ListaDesechablesEmpaques*/
router.get('/ListaDesechablesEmpaques', function(req, res, next) {
  res.render('ListaDesechablesEmpaques', { title: 'ListaDesechablesEmpaques' });
});

/*ListaEmpleados*/
router.get('/ListaEmpleados', function(req, res, next) {
  res.render('ListaEmpleados', { title: 'ListaEmpleados' });
});

/*ListaEquiposyUtensilios*/
router.get('/ListaEquiposyUtensilios', function(req, res, next) {
  res.render('ListaEquiposyUtensilios', { title: 'ListaEquiposyUtensilios' });
});

/*ListaEspeciales*/
router.get('/ListaEspeciales', function(req, res, next) {
  res.render('ListaEspeciales', { title: 'ListaEspeciales' });
});

/*ListaLicores*/
router.get('/ListaLicores', function(req, res, next) {
  res.render('ListaLicores', { title: 'ListaLicores' });
});

/*ListaLimpiezaeHigiene*/
router.get('/ListaLimpiezaeHigiene', function(req, res, next) {
  res.render('ListaLimpiezaeHigiene', { title: 'ListaLimpiezaeHigiene' });
});

/*ListaMarcas*/
router.get('/ListaMarcas', function(req, res, next) {
  res.render('ListaMarcas', { title: 'ListaMarcas' });
});

/*ListaMesas*/
router.get('/ListaMesas', function(req, res, next) {
  res.render('ListaMesas', { title: 'ListaMesas' });
});

/*ListaPaises*/
router.get('/ListaPaises', function(req, res, next) {
  res.render('ListaPaises', { title: 'ListaPaises' });
});

/*ListaProveedores*/
router.get('/ListaProveedores', function(req, res, next) {
  res.render('ListaProveedores', { title: 'ListaProveedores' });
});

/*ListaPuestos*/
router.get('/ListaPuestos', function(req, res, next) {
  res.render('ListaPuestos', { title: 'ListaPuestos' });
});

/*ListaRoles*/
router.get('/ListaRoles', function(req, res, next) {
  res.render('ListaRoles', { title: 'ListaRoles' });
});

/*ListaTecnologia*/
router.get('/ListaTecnologia', function(req, res, next) {
  res.render('ListaTecnologia', { title: 'ListaTecnologia' });
});

/*ListaUnidadesMedida*/
router.get('/ListaUnidadesMedida', function(req, res, next) {
  res.render('ListaUnidadesMedida', { title: 'ListaUnidadesMedida' });
});

/*ListaUsuarios*/
router.get('/ListaUsuarios', function(req, res, next) {
  res.render('ListaUsuarios', { title: 'ListaUsuarios' });
});

/*ListaVinos*/
router.get('/ListaVinos', function(req, res, next) {
  res.render('ListaVinos', { title: 'ListaVinos' });
});

/*RegistroBebidasCalientes*/
router.get('/RegistroBebidasCalientes', function(req, res, next) {
  res.render('RegistroBebidasCalientes', { title: 'RegistroBebidasCalientes' });
});

/*RegistroBebidasGaseosas*/
router.get('/RegistroBebidasGaseosas', function(req, res, next) {
  res.render('RegistroBebidasGaseosas', { title: 'RegistroBebidasGaseosas' });
});

/*RegistroBebidasHeladas*/
router.get('/RegistroBebidasHeladas', function(req, res, next) {
  res.render('RegistroBebidasHeladas', { title: 'RegistroBebidasHeladas' });
});

/*RegistroClientesBarra*/
router.get('/RegistroClientesBarra', function(req, res, next) {
  res.render('RegistroClientesBarra', { title: 'RegistroClientesBarra' });
});

/*RegistroComestibles*/
router.get('/RegistroComestibles', function(req, res, next) {
  res.render('RegistroComestibles', { title: 'RegistroComestibles' });
});

/*RegistroComidaBuffet*/
router.get('/RegistroComidaBuffet', function(req, res, next) {
  res.render('RegistroComidaBuffet', { title: 'RegistroComidaBuffet' });
});

/*RegistroConsecutivos*/
router.get('/RegistroConsecutivos', function(req, res, next) {
  res.render('RegistroConsecutivos', { title: 'RegistroConsecutivos' });
});

/*RegistroDesechablesEmpaques*/
router.get('/RegistroDesechablesEmpaques', function(req, res, next) {
  res.render('RegistroDesechablesEmpaques', { title: 'RegistroDesechablesEmpaques' });
});

/*RegistroEmpleados*/
router.get('/RegistroEmpleados', function(req, res, next) {
  res.render('RegistroEmpleados', { title: 'RegistroEmpleados' });
});

/*RegistroEpeciales*/
router.get('/RegistroEpeciales', function(req, res, next) {
  res.render('RegistroEpeciales', { title: 'RegistroEpeciales' });
});

/*RegistroEquiposyUtencilios*/
router.get('/RegistroEquiposyUtencilios', function(req, res, next) {
  res.render('RegistroEquiposyUtencilios', { title: 'RegistroEquiposyUtencilios' });
});

/*RegistroLicores*/
router.get('/RegistroLicores', function(req, res, next) {
  res.render('RegistroLicores', { title: 'RegistroLicores' });
});

/*RegistroLimpiezaeHigiene*/
router.get('/RegistroLimpiezaeHigiene', function(req, res, next) {
  res.render('RegistroLimpiezaeHigiene', { title: 'RegistroLimpiezaeHigiene' });
});

/*RegistroMarcas*/
router.get('/RegistroMarcas', function(req, res, next) {
  res.render('RegistroMarcas', { title: 'RegistroMarcas' });
});

/*RegistroMesas*/
router.get('/RegistroMesas', function(req, res, next) {
  res.render('RegistroMesas', { title: 'RegistroMesas' });
});

/*RegistroNacion*/
router.get('/RegistroNacion', function(req, res, next) {
  res.render('RegistroNacion', { title: 'RegistroNacion' });
});

/*RegistroProveedores*/
router.get('/RegistroProveedores', function(req, res, next) {
  res.render('RegistroProveedores', { title: 'RegistroProveedores' });
});

/*RegistroPuestos*/
router.get('/RegistroPuestos', function(req, res, next) {
  res.render('RegistroPuestos', { title: 'RegistroPuestos' });
});


/*RegistroRoles*/
router.get('/RegistroRoles', function(req, res, next) {
  res.render('RegistroRoles', { title: 'RegistroRoles' });
});

/*RegistroTecnologia*/
router.get('/RegistroTecnologia', function(req, res, next) {
  res.render('RegistroTecnologia', { title: 'RegistroTecnologia' });
});

/*RegistroUnidadMedida*/
router.get('/RegistroUnidadMedida', function(req, res, next) {
  res.render('RegistroUnidadMedida', { title: 'RegistroUnidadMedida' });
});

/*RegistroUsuarios*/
router.get('/RegistroUsuarios', function(req, res, next) {
  res.render('RegistroUsuarios', { title: 'RegistroUsuarios' });
});

/*RegistroVinos*/
router.get('/RegistroVinos', function(req, res, next) {
  res.render('RegistroVinos', { title: 'RegistroVinos' });
});

/*ReporteAyudaDeSeguridad*/
router.get('/ReporteAyudaDeSeguridad', function(req, res, next) {
  res.render('ReporteAyudaDeSeguridad', { title: 'ReporteAyudaDeSeguridad' });
});

/*ReporteDeAyudaDeSistema*/
router.get('/ReporteDeAyudaDeSistema', function(req, res, next) {
  res.render('ReporteDeAyudaDeSistema', { title: 'ReporteDeAyudaDeSistema' });
});

/*ReporteDeClientes*/
router.get('/ReporteDeClientes', function(req, res, next) {
  res.render('ReporteDeClientes', { title: 'ReporteDeClientes' });
});

/*ReporteDeFacturacion*/
router.get('/ReporteDeFacturacion', function(req, res, next) {
  res.render('ReporteDeFacturacion', { title: 'ReporteDeFacturacion' });
});

/*ReporteDeLicores*/
router.get('/ReporteDeLicores', function(req, res, next) {
  res.render('ReporteDeLicores', { title: 'ReporteDeLicores' });
});

/*ReporteDeVinos*/
router.get('/ReporteDeVinos', function(req, res, next) {
  res.render('ReporteDeVinos', { title: 'ReporteDeVinos' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteMesasPiccola', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteMesasPiccola', { title: 'ReporteEntornoDeRestauranteMesasPiccolaPiccola' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteReservacionesPiccola', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteReservacionesPiccola', { title: 'ReporteEntornoDeRestauranteReservacionesPiccola' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteEspecialidadesPiccola', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteEspecialidadesPiccola', { title: 'ReporteEntornoDeRestauranteEspecialidadesPiccola' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteBarraMesasPiccola', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteBarraMesasPiccola', { title: 'ReporteEntornoDeRestauranteBarraMesasPiccola'});
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteMesasNotte', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteMesasNotte', { title: 'ReporteEntornoDeRestauranteMesasNotte' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteReservacionesNotte', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteReservacionesNotte', { title: 'ReporteEntornoDeRestauranteReservacionesNotte' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteEspecialidadesNotte', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteEspecialidadesNotte', { title: 'ReporteEntornoDeRestauranteEspecialidadesNotte' });
});

/*ReporteEntornoDeRestaurante*/
router.get('/ReporteEntornoDeRestauranteBarraMesasNotte', function(req, res, next) {
  res.render('ReporteEntornoDeRestauranteBarraMesasNotte', { title: 'ReporteEntornoDeRestauranteBarraMesasNotte'});
});
/*RestaurantesRegistro*/
router.get('/RestaurantesRegistro', function(req, res, next) {
  res.render('RestaurantesRegistro', { title: 'RestaurantesRegistro' });
});

/*RestNotteDiFuoco*/
router.get('/RestNotteDiFuoco', function(req, res, next) {
  res.render('RestNotteDiFuoco', { title: 'RestNotteDiFuoco' });
});

/*RestPiccolaStella*/
router.get('/RestPiccolaStella', function(req, res, next) {
  res.render('RestPiccolaStella', { title: 'RestPiccolaStella' });
});

/*RestTurinAnivo*/
router.get('/RestTurinAnivo', function(req, res, next) {
  res.render('RestTurinAnivo', { title: 'RestTurinAnivo' });
});

/*TiposDeBebidas*/
router.get('/TiposDeBebidas', function(req, res, next) {
  res.render('TiposDeBebidas', { title: 'TiposDeBebidas' });
});

/*VentanaAdministracion*/
router.get('/VentanaAdministracion', function(req, res, next) {
  res.render('VentanaAdministracion', { title: 'VentanaAdministracion' });
});

/*VentanaProductos*/
router.get('/VentanaProductos', function(req, res, next) {
  res.render('VentanaProductos', { title: 'VentanaProductos' });
});

/*VentanaProveedores*/
router.get('/VentanaProveedores', function(req, res, next) {
  res.render('VentanaProveedores', { title: 'VentanaProveedores' });
});

/*VentanaReportes*/
router.get('/VentanaReportes', function(req, res, next) {
  res.render('VentanaReportes', { title: 'VentanaReportes' });
});

/*VentanaSeguridad*/
router.get('/VentanaSeguridad', function(req, res, next) {
  res.render('VentanaSeguridad', { title: 'VentanaSeguridad' });
});

module.exports = router;
