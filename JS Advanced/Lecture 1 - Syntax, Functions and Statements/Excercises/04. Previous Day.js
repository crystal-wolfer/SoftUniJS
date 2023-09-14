function previousDay(year, month, day) {
  let date = new Date(year, month, day);
  
  if (day === 1 && month !== 1) {
    let dateNew = new Date(year, month-1, 0); // setting the day to 0 gives the last day of the month
    let previousDay = dateNew.getDate();
    console.log(`${year}-${month-1}-${previousDay}`);
  } else if (month === 1 && day === 1) {
    console.log(`${year-1}-12-31`);
  } else {
    console.log(`${year}-${month}-${day-1}`);
  }
}
previousDay(2021, 3, 1);
