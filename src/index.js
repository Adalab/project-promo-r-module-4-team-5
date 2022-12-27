// Fichero src/index.js

//random number para el id
const randomId = () => {
  return Math.random();
};
// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();
//Configurador motor de plantillas ejs
server.set('view engine', 'ejs');

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
const savedCards = [];
// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (
    req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.photo === '' ||
    req.body.linkedin === '' ||
    req.body.github === '' ||
    req.body.email === ''
  ) {
    const responseError = {
      error: 'Faltan datos',
      success: false,
    };
    res.json(responseError);
  } else {
    const newCard = {
      id: randomId(),
      ...req.body,
    };
    savedCards.push(newCard);
    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});
server.get('/card/:id', (req, res) => {
  const id = req.params.id;
  const query = db.prepare('SELECT * FROM cards WHERE id = ?');
  const userCard = query.get(id);
  res.render('card', userCard);
  console.log(userCard);
});

//FALTA POR AÑADIR ERROR TAMAÑO FOTO

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

// Endpoint para gestionar los errores 404
server.get('*', (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = '../src/public-react/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
