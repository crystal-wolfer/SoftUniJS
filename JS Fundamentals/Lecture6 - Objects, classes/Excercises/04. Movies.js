function solve(input) {
  let movieList = [];

  input.forEach(line => {
    if (line.includes('addMovie')){
      let name = line.split('addMovie ')[1];
      movieList.push({name});
    } else if (line.includes('directedBy')){
      let [name, director] = line.split(' directedBy ');
      // checking if the movie is already in the movie list
      let movie = movieList.find(m => m.name === name);

      if (movie){
        movie.director = director;
      }
    }else if (line.includes('onDate')){
      let [name, date] = line.split(' onDate ');
      // checking if the movie is already in the movie list
      let movie = movieList.find(m => m.name === name);

      if (movie){
        movie.date = date;
      }
    }
    
  });

  movieList.forEach(movie => {
    if (movie.name && movie.director && movie.date){
      console.log(JSON.stringify(movie));
    }
  })
}
solve(
  [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    
);