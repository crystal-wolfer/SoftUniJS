function solve(input){
 let companies = {};

 input.forEach(pair => {
  let [company, id] = pair.split(' -> ');

  // check if object companies has property company if not then creates a new property with empty array for value
  if (!companies.hasOwnProperty(company)){
    companies[company] = [];
  } 
  // pushing the id into the company property
  if (!companies.hasOwnProperty(id)){
  companies[company].push(id);
  }
 });
 
 let sortedCompanies = Object.entries(companies);
 sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
 

 for (const element of sortedCompanies) {
  let companyName = element[0];
  console.log(companyName);

  // creating new Set to hold the unique employee IDs and looping through its items to print them
  let uniqueIDs = new Set(element[1])
    for (const item of uniqueIDs) {
      console.log(`-- ${item}`);
    }
  
 }
}
solve(
[
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111'
]
    
);