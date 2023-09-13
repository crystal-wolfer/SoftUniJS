function solve(input) {
  let temp = [];
 
  input.forEach(element => {
    let newElement = element.split(' ');

    let name = newElement[2].split(',')[0];
    let oldGrade = newElement[4].split(',')[0];
    let score = newElement[10];

    let student = {
      name: name,
      oldGrade: oldGrade,
      score: score
    }

    temp.push(student);
  });

  // Sorting the grade in ascending order
  temp.sort((a,b) => a.oldGrade - b.oldGrade);

  
  
}
solve(
  [ "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);