const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database');
const helmet = require('helmet');
const routes = require('./routes')
require('dotenv').config()

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

const port = 3010;
const server = express();

server.use(helmet());
server.use(parser.json());
server.use(express.static(path.join(__dirname, '../client/dist')))

server.use(parser.urlencoded({extended: false}));

server.use('/api/reviews', routes);

server.listen(port, () => console.log(`Server is listening on port ${port}`));
