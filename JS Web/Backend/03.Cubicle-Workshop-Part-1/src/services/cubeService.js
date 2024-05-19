const uniqid = require('uniqid');
const Cube = require('../models/Cube.js')

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

//attaching accessory to a cube
exports.attachAcc = async (cubeId, accessoryId) => {
  const cube = await Cube.findById(cubeId);
  cube.accessories.push(accessoryId);

  return cube.save();
}
 
