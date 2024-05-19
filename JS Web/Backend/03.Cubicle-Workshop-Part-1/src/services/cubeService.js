const uniqid = require('uniqid');
const Cube = require('../models/Cube.js')
const cubes = [  {
    id: 'gibth5klw9556l6',
    name: 'cube1',
    description: 'dsadswa',
    imageUrl: 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg',
    difficultyLevel: 1
  },
  {
    id: 'gibth5klw955k9d',
    name: 'cube2',
    description: 'sdadsa',
    imageUrl: 'https://preview.redd.it/i-need-help-with-big-rubiks-cube-notation-so-i-can-teach-v0-5zy6s4lnrq4c1.jpg?width=640&crop=smart&auto=webp&s=2a89a4a5711f9aed913048e0aeca5550995be738',
    difficultyLevel: 5
  },
  {
    id: 'gibtgzslw9cv5ww',
    name: 'Razor Blade 100',
    description: 'dsddsfds',
    imageUrl: 'https://m.media-amazon.com/images/I/51X4nrZYW8L._AC_UF894,1000_QL80_DpWeblab_.jpg',
    difficultyLevel: 6
  }
  
  ]; // Array of all cubes available

exports.createCube = async (cubeData) => {
  const newCube = await Cube.create(cubeData);
  return newCube;
}

exports.getAllCubes = async (search, from, to) => {
  let filterCubes = await Cube.find().lean();

  //TODO: use mongoose to filter in the DB not in the server
  if (search){
    filterCubes = filterCubes.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (from){  
    filterCubes = filterCubes.filter(c => 
    c.difficultyLevel >= Number(from)
    );
  }

  if (to){
    filterCubes = filterCubes.filter(c => 
    c.difficultyLevel <= Number(to)
    );
  }

  return filterCubes;
};

exports.getCube = (id) => {
  return Cube.findById(id);//the thing that uses this function should await it here it's simple so no need to await it because this is just a query
}

