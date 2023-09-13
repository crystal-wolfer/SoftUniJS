function solve(input){
  let text = input[0];

  //let pattern = /[#|\|](?<name>[\w]+\s?\w*)[#|\|](?<date>\d{2}\/\d{2}\/\d{2})[#|\|](?<calories>\d*)[#|\|]/g
  let pattern = /([|#])([a-zA-Z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g //from chatGPT

  let match = text.match(pattern);  // extracting all the matches
  let totalCals = 0;

  if(!match){
    console.log(`You have food to last you for: 0 days!`);
    return;
  } 

  // taking the calories and calculating the total
  for (let item of match) {
    if (item.startsWith('#')) {
      item = item.split('#');
      item.shift();
      item.pop();
    } else{
      item = item.split('|');
      item.shift();
      item.pop();
    }

    totalCals += Number(item[2]);    
  }

  let days = totalCals/2000; 

  console.log(`You have food to last you for: ${Math.floor(days)} days!`);

  // taking gain each item from the matches and printing it
  for (let item of match) {
    if (item.startsWith('#')) {
      item = item.split('#');
      item.shift();
      item.pop();
    } else{
      item = item.split('|');
      item.shift();
      item.pop();
    }

    console.log(`Item: ${item[0]}, Best before: ${item[1]}, Nutrition: ${item[2]}`);
  }


}
solve(
  [
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ]
    
);

console.log(`-------------------------------------`);

solve(
  [
    'Hello|#Invalid food#19/03/20#450|$5*(@'
  ]
    
);

console.log(`-------------------------------------`);

solve(
  [
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ]
    
);

// 55min

// Better solution

function adAstra(params) {
  let data = params.shift();
  let pattern = /(#|\|)(?<item>[A-z\s]*)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,4}|10000)\1/gm;
  let matchesArr = data.matchAll(pattern);
  let sumCalories = 0;
  for(let el of matchesArr){
      sumCalories += Number(el.groups['calories']);  
  }
  
  function daysCalculator(sumCalories) {
      let days = sumCalories = Math.floor(sumCalories / 2000);
      return days;
  }
  console.log(`You have food to last you for: ${daysCalculator(sumCalories)} days!`);
  matchesArr = data.matchAll(pattern);
  for(let el of matchesArr) {
      console.log(`Item: ${el.groups.item}, Best before: ${el.groups['date']}, Nutrition: ${el.groups['calories']}`);//groups can be axxcesed by 2 diff ways!!
  }
}