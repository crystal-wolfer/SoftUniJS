function listOfNames(array){
  let sorted = array.sort((a, b) => a.localeCompare(b));
  let i = 1;
  
  sorted.forEach(element => {
    console.log(`${i}.${element}`);
    i++;
  });
}
listOfNames(
  ["John", "Bob", "Christina", "Ema"]
);