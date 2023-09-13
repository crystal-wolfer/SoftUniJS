function trainers(input){
    let n = Number(input[0]); // number of trainers
    let index = 1;
    let presentationName = input[index];
    let avarageGrade = 0;
    let curGrade = 0;
    let sumGrades = 0;
    let sumTotalGrade = 0;
    let counter = 0;
    
    
    while (presentationName !== "Finish"){
        presentationName = input[index];
        if (presentationName === "Finish"){
            break;        
        }

        index++;
                
        for (let i = 0; i < n; i++){
            curGrade = Number(input[index]);
            sumGrades += curGrade;
            sumTotalGrade += curGrade;
            counter++;
            index++;
        }
        
        avarageGrade = sumGrades / n;
        console.log(`${presentationName} - ${avarageGrade.toFixed(2)}.`);
        sumGrades = 0;    
  
    }
    let avarageTotalGrade = sumTotalGrade / counter;    
    console.log(`Student's final assessment is ${avarageTotalGrade.toFixed(2)}.`);
    
}
trainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])