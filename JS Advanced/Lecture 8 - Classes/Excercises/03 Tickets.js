function tickets(array, sortCriteria) {
  let result = [];
  let resultSorted;

  class Ticket{
    constructor(destination, price, status){
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  array.forEach(element => {
    let [destination, price, status] = element.split('|');
    price = Number(price);

    result.push(new Ticket(destination, price, status));
  });
  
  console.log(result[0].destination);
  // sorting the result depending on the criteria
  if (typeof(sortCriteria) === 'number') {
    resultSorted = result.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
  } else {
    resultSorted = result.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
  }
  
  //console.log(resultSorted[0]);
  return resultSorted;
}
tickets(
  ['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'
);