class Movie {
  id = "";
  title = "";
  overview = "";
  release_date = "";
  poster_path = "";
  original_language = "";
  genre_ids = [];
  rate = 0;
  opinion = "";

  constructor(params) {
    Object.assign(this, params);
  }
}

module.exports = Movie;