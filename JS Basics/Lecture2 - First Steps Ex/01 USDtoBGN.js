//USD to BGN 1USD = 1.79549 BGN

function converterUSDtoBGN(input){
    let usd = Number(input[0]);
    let convert = usd * 1.79549;

    console.log(convert);
}

converterUSDtoBGN(["12.5"])
