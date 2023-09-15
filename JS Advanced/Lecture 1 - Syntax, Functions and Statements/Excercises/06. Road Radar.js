function roadRadar(speed, zone){
  // check if the speed is in the limit )(true)
  let speedStat = true;
  let limit = 0;

  switch(zone){
    case 'motorway': 
      limit = 130;
      speedStat = speed <= limit ? true : false;
      break;

    case 'interstate':
      limit = 90;
      speedStat = speed <= limit ? true : false;
      break;
    
    case 'city':
      limit = 50;
      speedStat = speed <= limit ? true : false;
      break;
    
    case 'residential':
      limit = 20;
      speedStat = speed <= limit ? true : false;
      break;
  }

  // speed within limits
  if (speedStat === true) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  }else {
    let differenceSpeed = speed - limit;
    let status = '';

    // checking how much over the limit is the speed difference
    if (differenceSpeed <= 20){
      status = 'speeding';
    } else if (differenceSpeed <= 40){
      status = 'excessive speeding';
    } else {
      status = 'reckless driving';
    }

    console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${limit} - ${status}`);
  }
}
roadRadar(50, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');