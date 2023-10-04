function solve(...args) {
  const obj = {};

  args.forEach(arg => {
    typeArg = typeof arg
    console.log(`${typeArg}: ${arg}`);

    if (!obj[typeArg]) {
      obj[typeArg] = 0;
    } 

    obj[typeArg] += 1;
  });
  
  // sort arguments in descending order
  const sorted = Object.entries(obj)
    .sort(([,a],[,b]) => b - a);

  for (const item of sorted) {
    console.log(`${item[0]} = ${item[1]}`);
  }
}

solve(
  'cat', 42, 35, function () { console.log('Hello world!'); }
)