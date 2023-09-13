function solve(numPages, pagesPerHour, deadline){
  let hoursToFinishBook = numPages / pagesPerHour;
  let hoursPerDay = hoursToFinishBook / deadline;

  console.log(hoursPerDay);
}
solve(432,
  15 ,
  4
  )