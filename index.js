const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ['http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <meta charset="utf-8"/>
      <title> Prueba </title>
      <style>
        body {
          background-color: red;
        }
        h1 {
          color: white;
          font-family: "Roboto"
        }
        p {
          color: white;
          font-family: "Roboto"
        }
        div {
          display:flex;
          justify-content: center
        }
        button {
          width: 80px;
          height: 50px;
          border-radius: 20px;
          cursor: pointer
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Hola Esta es mi pagina</h1>
      </div>
      <div>
        <p>Viva el </br> Perú</p>
      </div>
      <button>
      Click Aquí
      </button>
    </body>
  </html>

  `);
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port)
});
