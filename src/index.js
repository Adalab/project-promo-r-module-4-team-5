// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "25mb" }));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  // rq.body
  //respuesta si todo va bien
  const responseSuccess = {
    cardURL: "https://dev.adalab.es/card/167153696701333",
    success: true,
  };
  //respuesta si falla algún campo
  res.json(responseSuccess);
});
