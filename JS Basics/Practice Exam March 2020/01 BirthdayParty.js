function bDayParty(input){
    let lease = Number(input);

    let cake = lease*0.2;
    let drinks = cake - (cake*0.45);
    let animation = lease/3;

    let totalPrice = lease + cake + drinks + animation;

    console.log(totalPrice);

}
bDayParty(3720);