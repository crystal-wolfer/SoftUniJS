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
  }]; // Array of all cubes available

exports.createCube = (cubeData) => {
  const newCube = {
    id: uniqid(), //using uniqid npm package to generate unique id for each new cube
    ...cubeData, //spreading the data thata comes
  } 
  cubes.push(newCube);
  return newCube;
}

exports.getAllCubes = () => {
  return [...cubes]; //returns a copy of the array with all cubes available
};

