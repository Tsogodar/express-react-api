const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

require('./configs/database');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./controllers/main.controller.js'));
app.use('/todo', require('./controllers/todo-list/todo-list.controller.js'));

module.exports = app;
