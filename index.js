const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

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

app.listen(port, () => {
  console.log('Mi port ' + port)
});
