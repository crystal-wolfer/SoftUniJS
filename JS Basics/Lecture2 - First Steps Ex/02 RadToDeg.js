// DEG to RAD 1 deg = 1 rad * 180/pi

function degToRad(input){
    let rad = Number(input[0]);
    let deg = rad * (180/Math.PI);

    console.log(deg);
}

degToRad(["6.2832"])