class Movie {
  id = 0;
  title = '';
  poster_path = '';
  release_date = '';
  vote_average = 0;
  rate = 0;

  constructor(params) {
    Object.assign(this, params);
  }
}

module.exports = Movie;
