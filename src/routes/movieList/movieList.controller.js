const db = require('../../database/dbconfig');
const Movie = require('../../models/Movie');

function store(req, res) {
  const body = req.body;
  const sql = 'INSERT INTO movies SET ?';
  console.log(body);
  db.query(sql, body, (error, result) => {
    if (error) {
      console.log('error', error);
      throw error;
    }
  });

  return res.status(200).json(body);
}

function index(req, res) {
  const sql = 'SELECT * FROM movies';
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    return res.status(200).json(result);
  });
}

function show(req, res) {
  const sql = `SELECT * FROM movies WHERE id = '${req.params.id}'`;
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    return res.status(200).json(result[0]);
  });
}

function deleteMovie(req, res) {
  const sql = `DELETE  FROM movies WHERE id = '${req.params.id}'`;
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    return res.status(200).json(result[0]);
  });
}

function update(req, res) {
  const sql = `UPDATE movie_list SET ? WHERE id = '${req.params.id}'`;
  const body = req.body;
  const movie = new Movie(body);
  db.query(sql, movie, (error, result) => {
    if (error) {
      throw error;
    }

    return res.status(200).json(result[0]);
  });
}

module.exports = {
  store,
  index,
  show,
  deleteMovie,
  update,
};
