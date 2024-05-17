const uniqid = require('uniqid');
//const db = require('../movieDb.json') //keeping all the data in a separate json file
const fs = require('fs');

const newMovie = {
  name: 'Jungle Cuise2',
  genre: 'Comedy',
  director: 'Jaume Collet-Serra',
  year: 2023,
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Wza4t41h5iuKpxEVWmWToXilhmQwJNDgoOT5dIXJQ&s',
  rating: 4,
  description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans. And, sooner or later, the jungle always wins. '
}

const arr = [{ name: 'Pete', age: 28 }]


exports.createMovie = (newMovie) => {
    fs.readFile('src/movieDb.json','utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      try{ 
        let obj = JSON.parse(data);
        obj.movies.push(newMovie);
        
        fs.writeFile('src/movieDb.json', JSON.stringify(obj, null, 2), err => {
          if (err) {
            console.log(err);
          };
        })

        console.log(obj);
      } catch (e){
        console.log("Error parsing JSON", e);
      }
    }
  })
  
}

exports.getAllMovies = () => {
  fs.readFile('src/movieDb.json','utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      try{ 
        const obj = JSON.parse(data);
        console.log(obj.movies);
      } catch (e){
        console.log("Error parsing JSON", e);
      }
    }
  })
}

