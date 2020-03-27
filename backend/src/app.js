const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());

// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*
* Rota / Recurso
*/

/*
* Métods HTTP
*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no Back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
* Tipos de parâmetros
*
* Query Params:Parâmetros nomeados enviados na rota após "?" (?nome=Levi) Filtros e Paginação
* Route Params: Parâmetros utilizados para identificar recursos (/users/id)
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NOSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

// Rodar app node index.js
// npm start
//npm install nodemmon -D (o -D para instalar somente no ambiente de desenvolvimento)