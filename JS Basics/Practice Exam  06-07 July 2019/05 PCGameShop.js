function gameShop(input){
    let gamesSold = Number(input[0]);
    
    let index = 1;

    let counterHearthstone = 0;
    let counterFornite = 0;
    let counterOverwatch = 0;
    let counterOthers = 0;


    for (let i = index; i <= gamesSold; i++) {
        let curGame = input[i];

        switch (curGame) {
            case "Hearthstone":
                counterHearthstone++;
            break;

            case "Fornite":
                counterFornite++;
            break;

            case "Overwatch":
                counterOverwatch++;
            break;
        }  
        
        if (curGame !== "Hearthstone" && curGame!== "Fornite" && curGame!== "Overwatch") {
            counterOthers++;
        }

    }

    let percentageHearthstone = (counterHearthstone/gamesSold)*100
    let percentageFornite = (counterFornite/gamesSold)*100
    let percentageOverwatch = (counterOverwatch/gamesSold)*100
    let percentageOhers = (counterOthers/gamesSold)*100

    console.log(`Hearthstone - ${percentageHearthstone.toFixed(2)}%`)
    console.log(`Fornite - ${percentageFornite.toFixed(2)}%`)
    console.log(`Overwatch - ${percentageOverwatch.toFixed(2)}%`)
    console.log(`Others - ${percentageOhers.toFixed(2)}%`)

}
gameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

