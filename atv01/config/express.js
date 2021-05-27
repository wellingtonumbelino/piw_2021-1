// Importando module express
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('../app/routes/router');

// Exportando module
module.exports = function () {
  const app = express();
  // Variable application
  app.set('port', 3333);

  // Usando bodyParser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static("./public"));

  routes(app);

  return app;
};