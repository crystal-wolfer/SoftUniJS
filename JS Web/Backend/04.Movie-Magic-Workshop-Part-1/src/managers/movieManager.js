const uniqid = require('uniqid');
const fs = require('fs');

exports.createMovie = (movieData) => {
    fs.readFile('src/movieDb.json','utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      try{ 
        let obj = JSON.parse(data);

        let newMovie = {
          id: uniqid(), //using uniqid npm package to generate unique id for each new cube
          ...movieData, //spreading the data thata comes
        }; 
        
        obj.movies.push(newMovie);
        
        fs.writeFile('src/movieDb.json', JSON.stringify(obj, null, 2), err => {
          if (err) {
            console.log(err);
          };
        })

        return obj;
      } catch (e){
        console.log("Error parsing JSON", e);
      }
    }
  })
  
}


exports.getAllMovies = () => {
  try {
        // Read the JSON file synchronously
        const data = fs.readFileSync('src/movieDb.json', 'utf8');
        
        // Parse JSON data into a JavaScript object
        const jsonData = JSON.parse(data);

        // Return the 'movies' array
        return jsonData.movies;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
}

//Async version not working can't figureout why
// exports.getAllMovies = () => {
//   fs.readFile("src/movieDb.json", "utf-8", (err, data) => {
//     if (err != null) {
//       console.log(err);
//       return;
//     }

//     const obj = JSON.parse(data);
//     const movies = obj.movies;
//     return movies;
//   });
// };

