function moving(input){

        let a = Number(input[0]);
        let b = Number(input[1]);
        let h = Number(input[2]);
        let volumeAppartment = a*b*h;;
        let currentBoxes = 0;
        let index = 3;
    
        while (volumeAppartment >= 0){
            currentBoxes = input[index];
               
            if(currentBoxes === "Done"){
                console.log(`${volumeAppartment} Cubic meters left.`);
                return;
            }
    
            volumeAppartment -= currentBoxes;
            index++;    
        }
    
        console.log(`No more free space! You need ${Math.abs(volumeAppartment)} Cubic meters more.`);  
    
    
}
moving(["10",

"1",

"2",

"4",

"6",

"Done"])