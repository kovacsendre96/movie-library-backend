const express = require('express');
const movieListController = require('./movieList.controller');
const movieListRouter = express.Router();

const { store, index, show, deleteMovie, update } = movieListController;

movieListRouter.post('/movie-list', store);
movieListRouter.get('/movie-list', index);
movieListRouter.get('/movie-list/:id', show);
movieListRouter.delete('/movie-list/:id', deleteMovie);
movieListRouter.patch('/movie-list/:id', update);

module.exports = movieListRouter;
