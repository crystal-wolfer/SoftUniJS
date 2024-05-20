const Movie = require("../models/Movie.js");

exports.createMovie = async (movieData) => {
  const newMovie = await Movie.create(movieData);
  return newMovie;
};

exports.getAllMovies = async () => {
  let movies = await Movie.find().lean();
  return movies;
};

exports.getMovie = async (id) => {
  const movie = await Movie.findById(id).lean();
  return movie;
};

exports.getMovieWithCast = (id) => {
  return Movie.findById(id).populate('cast').lean(); //populate is integrated method that automatically poopulates all the data from the cast table it's better to segrerate them
}

exports.addCast = async (castId, movieId) =>{
  const movie = await Movie.findById(movieId);
  movie.cast.push(castId);

  return movie.save();
}

exports.search = async (search, genre, year) => {
  let movies = await Movie.find().lean();

  if (search) {
    movies = movies.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (genre) {
    movies = movies.filter((m) =>
      m.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  if (year) {
    movies = movies.filter((m) => Number(m.year) === Number(year));
  }

  return movies;
};


