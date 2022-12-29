# Alohomora Cards :mage_man: :zap:

![alohomora](https://user-images.githubusercontent.com/97313204/209992312-24c7434c-7608-4df3-b483-aa11d5a5c666.png)

¡Hola! Aquí encontrarás información sobre nuestro proyecto grupal del módulo 4 de ADALAB.

### Nuestro equipo está formado por

- Úrsula Borrego: [@Ursulaborrego](https://github.com/UrsulaBorrego)
- Nayra Romero: [@nayraromero](https://github.com/nayraromero)
- Laura González Calvo: [@lauragonzalezcalvo](https://github.com/lauragonzalezcalvo)
- Bruna Da Silva: [@brunadasilvabz](https://github.com/brunadasilvabz)

y aquí puedes acceder al proyecto final: https://project-promo-r-module-4-team-5-production.up.railway.app/

## Lo que nos pidieron

Este proyecto se dividió en dos módulos:

- En el **módulo 3** recibimos **código heredado** de nuestras compañeras del equipo 4 del módulo 2, y tuvimos que **refactorizar** su código usando **React**, separando en **componentes**. Puedes ver nuestro repositorio del módulo 3 [aquí](https://github.com/Adalab/project-promo-r-module-3-team-5).

- En el **módulo 4** nos enfocamos en consolidar nuestro aprendizaje de Node JS, Express JS, SQL y trabajar con servidores, bases de datos y APIs.

El **objetivo** al terminar ambos módulos era ser capaces de **poner en producción un proyecto completo**, tanto **front end** como **back end**.

## Descripción de nuestra página web

En nuestra página puedes crear una **tarjeta de presentación** totalmente **personalizada**, eligiendo el color que más te guste y añadiendo tu nombre, profesión, foto y links a tu email, teléfono, linkedin y github.

Además, una vez creada la tarjeta, puedes **compartirla en Twitter** (que es la opción que ya ofrecemos) o en **cualquier otra red social** con el link que te damos de la tarjeta.

## Tecnologías utilizadas

- HTML
- CSS/SASS
- React
- Node JS
- Nodemon
- Express JS
- SQL
- SQLite Browser
- Ejs

## Especificaciones

El proyecto tiene 2 páginas:

- Una **landing** para recibir a las usuarias ![landing](https://user-images.githubusercontent.com/97313204/209984757-7293cb0f-8e0d-49c5-8b84-d86e7cc8c982.png)

- Una **página para crear las tarjetas** ![paginaprincipal](https://user-images.githubusercontent.com/97313204/209985462-56213da5-babd-40fb-95af-8daecd91812a.png)

- Diferentes colapsables, el primero siendo **"Diseña"**, que permite seleccionar los **colores de la tarjeta** ![diseña](https://user-images.githubusercontent.com/97313204/209986297-dcc0eb86-6ebb-46ed-96ed-4f9f57ad0d10.png)

- Una sección de **"Rellena"** para que la usuaria añada sus **datos personales** 
  ![rellena](https://user-images.githubusercontent.com/97313204/209992452-b065e406-973e-4d6f-9e42-2eecc014da57.png)

- Una sección de **"comparte"** para generar la tarjeta con el botón de **"crear tarjeta"**
  ![coparte](https://user-images.githubusercontent.com/97313204/210005726-611dd7bd-5480-47fe-8f88-7e422efbd610.png)

- Al hacer click en "crear tarjeta" aparecerá un **mensaje de error** en caso de que la usuaria no haya rellenado todos los campos obligatorios ![rellenatodo](https://user-images.githubusercontent.com/97313204/210005786-8bbcf365-7751-4f40-9b9f-e15799cdba60.png)

- En caso de que todo esté bien, se mostrará el **link generado a la tarjeta** y un botón para compartir la tarjeta en **Twitter** ![compartelinktwitter](https://user-images.githubusercontent.com/97313204/210005847-795f0af7-3aaf-4b09-859d-04c91c03bca0.png)

- El **link** lleva a una página con la tarjeta y el botón de twitter lleva directamente a un tweet formateado con un **mensaje predeterminado** que la usuaria puede modificar a su gusto ![tweet](https://user-images.githubusercontent.com/97313204/210005951-5bd63ee4-604b-4d39-80bc-ba0f2d2971b2.png)

- Por último, en la página principal además de una **preview** para que la usuaria pueda ver cómo está quedando la tarjeta, también hay un **botón de reset** en el que la usuaria puede hacer click para eliminar todos sus datos y empezar desde cero si lo desea ![resetypreview](https://user-images.githubusercontent.com/97313204/210006045-d95f1022-9e43-4022-9676-dcc9c4d5526e.png)

## Cómo utilizar este proyecto en tu ordenador

> Ten en cuenta que el editor de código que hemos usado es Visual Studio Code.

- Asegúrate de tener todas las tecnologías que mencionamos arriba **instaladas** en tu PC, **ejecútalas en tu terminal** y **configúralas** en tu fichero index.js

  `sudo npm install -g nodemon`

  `npm install express`

  `npm install cors`

  `npm install ejs`

- Sqlite browser tiene **diferentes modos de instalación** según el sistema operativo:

  - Windows: Entra en https://sqlitebrowser.org/dl/ y descarga e instala la última versión.

  - Ubuntu: Entra en https://sqlitebrowser.org/dl/, en el apartado de Ubuntu and Derivatives y ejecuta los siguientes comandos en la terminal:

    `sudo add-apt-repository -y ppa:linuxgndu/sqlitebrowser`

    `sudo apt-get update`

    `sudo apt-get install sqlitebrowser`

  - MAC: Entra en https://sqlitebrowser.org/dl/ y descarga e instala la última versión.

    Ejecuta
    `brew install --cask db-browser-for-sqlite` desde la terminal.

- Puedes **clonar el repositorio** o **descargarlo**. Nosotras aconsejamos descargarlo para que funcione sin problemas.

- Una vez que ya tienes el proyecto preparado:

### Arranca el backend:

En la **raíz** del proyecto

1. Ejecuta `npm install`
1. Ejecuta `npm start` o `npm run dev`.

El backend se arrancará en http://localhost:4000

### Arranca el frontend:

En la **raíz** del proyecto:

1. Ejecuta `cd web`.
1. Ejecuta `npm install`.
1. Ejecuta `npm start` o `npm run dev`.
1. Abre la página http://localhost:3000

> Acuérdate de que estamos usando Railway como servidor, así que tendrás que cambiar algunas líneas del código en el back y en el front a http://localhost:4000 para ver los cambios.

¡Gracias por leernos y esperamos que este proyecto te ayude!
