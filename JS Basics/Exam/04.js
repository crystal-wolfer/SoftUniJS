function exam(input){
    let numOfStudents = Number(input[0]);
    let index = 0;
    let command = Number(input[index]);
    let count5Abouve = 0;
    let count4Abouve = 0;
    let count3Abouve = 0;
    let countFail = 0;
    let totalGrade = 0;

    for (let index = 1; index <= numOfStudents; index++) {
        command = Number(input[index]); //currGrade

        if(command < 3){
            countFail++;
            totalGrade += command;
        } else if (command >= 3 && command < 4){
            count3Abouve++;
            totalGrade += command; 
        } else if (command >= 4 && command < 5){
            count4Abouve++;
            totalGrade += command;
        } else {
            count5Abouve++;
            totalGrade += command;
        }

    } 

    let topStudents = (count5Abouve/numOfStudents)*100;
    let studentsAbove4 = (count4Abouve/numOfStudents)*100;
    let studentsAbove3 = (count3Abouve/numOfStudents)*100;
    let studentsFail = (countFail/numOfStudents)*100;
    let averageGrade = (totalGrade/numOfStudents);
    
    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(studentsAbove4).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(studentsAbove3).toFixed(2)}%`);
    console.log(`Fail: ${(studentsFail).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade).toFixed(2)}`);
    

}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

