//"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
function project(input){
    let name=input[0];
    let projetcs=Number(input[1]);
    projetcs.MIN_VALUE=0
    projetcs.MAX_VALUE=100
    let hours= projetcs*3;
    
    console.log('The architect ' + name +' will need ' + hours + ' hours to complete' ,projetcs + ' project/s.');
    
}
project(['Tsani', '105'])