function solve(numCenturies){
  let cenToYears = numCenturies*100;
  let yearsToDays = Math.trunc(cenToYears * 365.2422);
  let daysToHours = yearsToDays * 24;
  let hoursToMinutes = daysToHours * 60;

  console.log(`${numCenturies} centuries = ${cenToYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);
}
solve(1)