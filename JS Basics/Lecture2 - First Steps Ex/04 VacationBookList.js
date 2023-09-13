function calculation(input){
    let pagesNumber = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursTotal = (pagesNumber/pagesPerHour);
    let hoursPerDay = (hoursTotal/daysToRead);

    console.log(hoursPerDay);
}

calculation(["432","15","4"])