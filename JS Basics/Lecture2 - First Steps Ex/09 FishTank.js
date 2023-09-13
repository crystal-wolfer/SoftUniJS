//1cube cm = 1/1000cube dm

function calulate(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let sandPercent = Number(input[3]);
    let sand = sandPercent/100;

    let aquariumVolume = (lenght*width*height)/1000;
    console.log(aquariumVolume-(aquariumVolume*sand));
}

calulate(["105","77","89","18.5"])