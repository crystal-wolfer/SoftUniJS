function solve(input){
  let parking = new Set();

  for (const entry of input) {
    let [direction, carNum] = entry.split(', ');

    if (direction === 'IN') {
      parking.add(carNum);
    } else if (direction === 'OUT') {
      parking.delete(carNum);
    }
  }

  if (parking.size === 0) {
    console.log(`Parking Lot is Empty`);
  }else{
    let sortedParking = Array.from(parking).sort((a, b) => a.localeCompare(b));
    // shorthand logging each element of the sortedParking array
    sortedParking.forEach(carNum => console.log(carNum));
  }

  
}
solve(
['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);