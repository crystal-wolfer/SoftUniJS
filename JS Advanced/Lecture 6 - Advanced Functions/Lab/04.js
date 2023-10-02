function solve(input, criteria){ 
  let data = JSON.parse(input);

  let output = data.filter(filterFn)
  let num = 0;

  function filterFn(dataEntry){
    let [key, value] = criteria.split('-')
    return dataEntry[key] === value;
  }

  for (const entry of output) {
    console.log(`${num}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
    num++;
  }

}

solve (
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'

)