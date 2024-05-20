const Movie = require ('../models/Movie.js')

exports.createMovie = async (movieData) => {
  const newMovie = await Movie.create(movieData);
  return newMovie;
}


exports.getAllMovies = async() => {
 let movies = await Movie.find().lean();
 return movies;
}

exports.getMovie = (id) => {
  try {
        const data = fs.readFileSync('src/movieDb.json', 'utf8');
        const jsonData = JSON.parse(data);
        const movies = jsonData.movies;
        return movies.find((movie) => movie.id === id);

    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
}

exports.search = (search, genre, year) => {
    try {
        const data = fs.readFileSync('src/movieDb.json', 'utf8');
        const jsonData = JSON.parse(data);
        let movies = jsonData.movies;

        if (search){
          movies = movies.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (genre){
          movies = movies.filter(m => m.genre.toLowerCase().includes(genre.toLowerCase()));
        }

        if (year){
          movies = movies.filter(m => Number(m.year) === Number(year))
        }

      return movies;       

    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
};

