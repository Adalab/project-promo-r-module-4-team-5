// Fichero src/index.js

//random number para el id
// const randomId = () => {
//   return Math.random();
// };
// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

const Database = require('better-sqlite3');

// Creamos el servidor
const server = express();
//Configurador motor de plantillas ejs
server.set('view engine', 'ejs');

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// URL nueva base de datos
const db = new Database('./src/db/database.db', { verbose: console.log });

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
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
      // id: randomId(),
      ...req.body,
    };
    // savedCards.push(newCard);
    //INSERT
    const insertStn = db.prepare(
      'INSERT INTO card (palette, name, email, image, phone, linkedin, github, job) VALUES (?,?,?,?,?,?,?,?)'
    );
    const result = insertStn.run(
      newCard.palette,
      newCard.name,
      newCard.email,
      newCard.photo,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.job
    );
    console.log(result);
    //PROBARLO EN POSTMAN
    //AÑADIRLE LASTINSERTROWID
    const responseSuccess = {
      cardURL: `https://project-promo-r-module-4-team-5-production.up.railway.app/card/${result.lastInsertRowid}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});
<<<<<<< HEAD

server.get('/card/:cardId', (req, res) => {
  console.log(req.params);
  res.render({});
  // 'card', {
  //   palette: req.params.palette,
  //   name: req.params.name,
  //   job: req.params.job,
  //   photo: req.params.photo,
  //   phone: req.params.phone,
  //   email: req.params.email,
  //   linkedin: req.params.linkedin,
  //   github: req.params.github,
  // });
=======
server.get('/card/:id', (req, res) => {
  const id = req.params.id;
  const query = db.prepare('SELECT * FROM card WHERE id = ?');
  const userCard = query.get(id);
  res.render('card', userCard);
  console.log(userCard);
>>>>>>> nayra
});

//// NO NOS RENDERIZA NADA DE NADA

//FALTA POR AÑADIR ERROR TAMAÑO FOTO

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
<<<<<<< HEAD

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
=======
>>>>>>> nayra
