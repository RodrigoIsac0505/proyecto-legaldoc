const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Importar rutas
const indexRoutes = require('./routes/index');

//Configuración
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //Carpeta de las vistas
app.set('view engine', 'ejs'); // Motor de plantilla

// middlewares
app.use(express.static("public"));
app.use(morgan('dev')); // Con morgan podemos ver los procesos en la vista de la consola.
app.use(express.urlencoded({extended: false})) //Para interpretar los datos que vienen de un formulario y poder procesarlo

// rutas
app.use('/', indexRoutes);

//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
