function solve(data){
  let gradesList = {};
  let gradesListSorted = [];
  for (const element of data) {
    // separating the name and the grades from the input
    let temp = element.split(' ');
    let name = temp.shift();
    // turning the string numbers into integers
    let gradesArray = temp.map(Number);
    
    // checking if the same name is receiving more grades, if yes: the new grades are added to the gradesList array element one by one
    if (gradesList.hasOwnProperty(name)){
      gradesArray.forEach(element => gradesList[name].push(element));   
    }else{
      gradesList[name] = gradesArray;
    }

    // sorting the gradesList in alphabetical order based on the name
    gradesListSorted = Object.entries(gradesList);
    gradesListSorted = gradesListSorted.sort((a,b) => a[0].localeCompare(b[0]));
    
  }

  for (const [name, grades] of gradesListSorted) {
    let avarageGrade = grades.reduce((x,y) => x+y)/grades.length
    console.log(`${name}: ${avarageGrade.toFixed(2)}`);
  }
  
}
solve(
  ['Steven 4',
  'George 4 6',
  'Tammy 2 5 3',
  'Steven 2 3']  
);