function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    
    let grade = Number(input[index]);
    index++;
    let i = 1;
    let sumGrade = 0;

    let badGradeCounter = 0;
    while (i <= 12){
        if(grade < 4.00){
            badGradeCounter++;
            if (badGradeCounter === 2){
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;
        }
        i++;
        sumGrade += grade;
        grade = Number(input[index]);
        index++;
    }
    if (i === 13){
    console.log(`${name} graduated. Average grade: ${(sumGrade/12).toFixed(2)}`);
    } else {
    console.log(`${name} has been excluded at ${i} grade`)
    }


} 
graduation (["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
