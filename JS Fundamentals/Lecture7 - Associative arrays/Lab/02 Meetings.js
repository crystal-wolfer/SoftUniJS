function solve(data) {
  let meetings = {};

  for (const element of data) {
    let [key, value] = element.split(' ');

    if (!meetings.hasOwnProperty(key)) {
      meetings[key] = value;
      console.log(`Scheduled for ${key}`);
    } else {
      console.log(`Conflict on ${key}!`);
    }
    
  }
  
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }  
}
solve(
  ['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim']
);