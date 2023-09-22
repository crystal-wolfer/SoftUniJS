function carFactory(obj){
  // creating the car object
  const car = {
    model: obj.model,
    engine: {
      power: 0,      
      volume: 0
      },
    carriage: {
      type: obj.carriage,
      color: obj.color
    },
    wheels: new Array(4),
  }

  // Writting the values in the object

  // Engine properties
    if(obj.power <= 90){
      car.engine.power = 90;
      car.engine.volume = 1800;
    } else if (obj.power <= 120){
      car.engine.power = 120;
      car.engine.volume = 2400;
    } else {
      car.engine.power = 200;
      car.engine.volume = 3500;
    }

  //Wheels properties
  const wheels = obj.wheelsize;
  if (wheels %2 == 0){
    car.wheels.fill(wheels - 1);
  } else {
    car.wheels.fill(wheels);
  };
    
  return car;
}

carFactory(
  { model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
);

carFactory(
  { model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }
)