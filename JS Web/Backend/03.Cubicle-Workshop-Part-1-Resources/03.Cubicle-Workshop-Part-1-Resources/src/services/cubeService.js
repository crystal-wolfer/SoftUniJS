const uniqid = require('uniqid');
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

exports.createCube = (cubeData) => {
  const newCube = {
    id: uniqid(), //using uniqid npm package to generate unique id for each new cube
    ...cubeData, //spreading the data thata comes
  } 
  cubes.push(newCube);
  return newCube;
}

exports.getAllCubes = (search, from, to) => {
  let filterCubes = [...cubes];

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
  return cubes.find((cube) => cube.id === id);
}


//return [...cubes]; //returns a copy of the array with all cubes available