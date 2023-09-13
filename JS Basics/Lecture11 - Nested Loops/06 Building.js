function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let currFloorRoom = "";
        for (let j = 0; j < rooms; j++) {
            if (i === Number(floors)) {
                currFloorRoom += "L" + i + j + " ";
            } else if (i % 2 === 0) {
                currFloorRoom += "O" + i + j + " ";
            } else{
                currFloorRoom += "A" + i + j + " ";
            }


        }
        console.log(currFloorRoom);
    }

}

building(["4",
"4"]) ;