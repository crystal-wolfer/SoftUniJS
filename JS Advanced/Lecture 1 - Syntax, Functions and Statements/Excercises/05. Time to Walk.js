function timeToWalk(steps, footprint, speed){
  // every 500m +1min 

  let speedConverted = speed * 5 / 18; // convert to m/s
  let distance = steps * footprint;
  let addition = Math.floor(distance/500);
  let time = (distance / speedConverted) + (addition*60);
  

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time % 3600 / 60);
  let seconds = Math.ceil(time % 3600 % 60);

  // check if the number is  1 digit
  let hoursNew = hours < 10 ? `0${hours}` : hours; 
  let minNew = minutes < 10 ? `0${minutes}` : minutes;
  let secsNew = seconds < 10 ? `0${seconds}` : seconds;

  console.log(`${hoursNew}:${minNew}:${secsNew}`);

}
timeToWalk(7894, 0.70, 5.5);