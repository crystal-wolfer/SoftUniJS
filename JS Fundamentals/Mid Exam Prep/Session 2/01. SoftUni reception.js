function solve(input){
  let receptionist1 = Number(input.shift());
  let receptionist2 = Number(input.shift());
  let receptionist3 = Number(input.shift());
  let numberPeople = Number(input.shift());

  let sumPeoplePerHour = receptionist1 + receptionist2 + receptionist3;
  let servedPeople = 0;
  let hoursCount = 0;

  while(servedPeople < numberPeople){
    hoursCount++;
    servedPeople += sumPeoplePerHour;
    
    if (hoursCount % 4 === 0){
      servedPeople -= sumPeoplePerHour;
    }
  }
  
  hoursCount = Math.ceil(hoursCount);
  console.log(`Time needed: ${hoursCount}h.`);

}
solve(['1','2','3','45']);