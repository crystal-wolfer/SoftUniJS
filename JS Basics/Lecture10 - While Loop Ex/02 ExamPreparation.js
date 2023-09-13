function examPrep (input){
    let maxBadGrades = Number(input[0]);
    let index = 1;

    let nameProblem = input[index];
    let gradeProblem = Number(input[index]);
   
    let counterGrades = 0;
    let counterGradesBad = 0;
    let gradesSum = 0;
    let lastNameProblem = 0;
        
    while (nameProblem!== "Enough"){
        
        nameProblem = input[index];
        if (nameProblem === "Enough"){
            lastNameProblem = input[index - 2];
            break;
        }
        index++;
        gradeProblem = Number(input[index]);
        gradesSum = gradesSum + gradeProblem;
        counterGrades++;
        

        if (gradeProblem <= 4) {
            counterGradesBad++;

            if (counterGradesBad >= maxBadGrades) {
                console.log(`You need a break, ${maxBadGrades} poor grades.`);
                return;
            }

        }

        index++;

    }   
    console.log(`Average score: ${(gradesSum / counterGrades).toFixed(2)}`);
    console.log(`Number of problems: ${counterGrades}`);
    console.log(`Last problem: ${lastNameProblem}`);        
}
examPrep(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])