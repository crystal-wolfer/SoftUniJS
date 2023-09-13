function daysInMonth(month, year) {
  let result = lastDayOfMonth = new Date(year, month, 0).getDate();
  console.log(result);
}

daysInMonth(2, 2021);