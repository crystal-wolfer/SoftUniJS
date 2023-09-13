function solve(input) {
 
  let numberOfStudents = Number(input[0]);
  let totalLectures = Number(input[1]);
  let additionalBonus = Number(input[2]);

  let eachStudentBonus = 0;
  let studentWithMaxBonus = 0;
  let winningStudentLectures = 0;

  for (let i = 3; i < input.length; i++) {
      let currentAttendance = Number(input[i]);
      eachStudentBonus = currentAttendance / totalLectures * (5 + additionalBonus);

      if (studentWithMaxBonus < eachStudentBonus) {
          studentWithMaxBonus = eachStudentBonus;
          winningStudentLectures = currentAttendance;
      }

  }
  console.log(`Max Bonus: ${Math.ceil(studentWithMaxBonus)}.`);
  console.log(`The student has attended ${winningStudentLectures} lectures.`);
}
solve(['10','30','14','8','23','27','28','15','17','25','26','5','18']);

// Solution 2:
function bonusScoringSys(input){
  let totalNumStudents = Number(input.shift());
  let totalNumLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
 
  let arrayLength = input.length;
  let totalBonusArray = [];
  // covering case when input is empty and there is no attendance
  if(input.length == 0){
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
    return;
  }
 
  for(let i = 0; i < arrayLength; i++){
    let curAttendance = Number(input[i]);
    let curBonus = (curAttendance / totalNumLectures) * (5 + additionalBonus);
 
    totalBonusArray.push(curBonus);
  }
 
  let maxNum = Math.max(...totalBonusArray);
  let indexMaxNum = totalBonusArray.indexOf(maxNum);
 
  console.log(`Max Bonus: ${Math.ceil(maxNum)}.`);
  console.log(`The student has attended ${input[indexMaxNum]} lectures.`);
 
}
//bonusScoringSys(['10','30','14','8','23','27','28','15','17','25','26','5','18']);

bonusScoringSys(['10', '30', '14']);