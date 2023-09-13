function solve(jsonInput) {
  let obj = JSON.parse(jsonInput);
  
  let entries = Object.entries(obj);
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }

}
solve('{"name": "George", "age": 0, "town": "Sofi"}');