const express = require('express');
const cors = require('cors');
const db = require('./database/dbconfig');
const movieListRouter = require('./routes/movieList/movieList.router');

require('dotenv').config();

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

db.connect((error, connection) => {
  if (error) {
    console.log(error);
  } else {
    console.log('db connected');
  }
});

app.use(express.json());

app.use('/api', movieListRouter);

module.exports = app;
