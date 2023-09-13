// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function sum(input){
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let percentInput = Number(input[2]);
    let actualPercent = percentInput / 100

    let lease = (deposit*actualPercent)/12

    console.log(deposit + (period*lease))
}

sum(["200","3","5.7"])