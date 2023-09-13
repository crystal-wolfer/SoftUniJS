function solve(obj) {
  let entries = Object.entries(obj);

  //Use for-of loop to iterate over the object properties by key
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
solve({
  name: "Sofia",
  area: 492,
  country: "Bulgaria",
  postCode: "1000"
 }
 );