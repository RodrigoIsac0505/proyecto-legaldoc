const express = require('express');
const router = express.Router();

// Es para la Página principal donde se despliega el listado de todos los registros
  router.get('/', async (req, res) => {
    res.render('index');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
  });

  router.get('/miPerfil', async (req, res) => {
    res.render('miPerfil');
  });

  router.get('/register', async (req, res) => {
    res.render('register');
  });
 
  router.get('/c_revisionGramatical', async (req, res) => {
    res.render('c_revisionGramatical');
  });

  router.get('/c_misOrdenes', async (req, res) => {
    res.render('c_misOrdenes');
  });

  router.get('/c_miOrden', async (req, res) => {
    res.render('c_miOrden');
  });

  router.get('/c_infoHistorialSolicitud', async (req, res) => {
    res.render('c_infoHistorialSolicitud');
  });

  router.get('/c_crearDocumento', async (req, res) => {
    res.render('c_crearDocumento');
  });

  router.get('/c_contratarAsesor', async (req, res) => {
    res.render('c_contratarAsesor');
  });

  router.get('/c_comunicacionAsesor', async (req, res) => {
    res.render('c_comunicacionAsesor');
  });

  router.get('/c_carritoCompra', async (req, res) => {
    res.render('c_carritoCompra');
  });

  router.get('/c_buscarDoumentLegal', async (req, res) => {
    res.render('c_buscarDoumentLegal');
  });

  router.get('/c_asesoresLegales', async (req, res) => {
    res.render('c_asesoresLegales');
  });

  router.get('/terminosCondiciones', async (req, res) => {
    res.render('terminosCondiciones');
  });

  module.exports = router;