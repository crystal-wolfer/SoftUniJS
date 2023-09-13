function solve(group, type, day){
  let totalPrice = 0;
  let perPerson = 0;  

  if(type === "Students"){
    switch(day){
      case "Friday": perPerson = 8.45; break;
      case "Saturday": perPerson = 9.80; break;
      case "Sunday": perPerson = 10.46; break;
    }

    totalPrice = group*perPerson;

    if (group >= 30){
      totalPrice = 0.85*totalPrice;
    }
  } else if(type === "Business"){
    switch(day){
      case "Friday": perPerson = 10.90; break;
      case "Saturday": perPerson = 15.60; break;
      case "Sunday": perPerson = 16; break;
    }

    totalPrice = group*perPerson;

    if (group >= 100){
      totalPrice = totalPrice - (10*perPerson);
    }
  } else if(type === "Regular"){
    switch(day){
      case "Friday": perPerson = 15; break;
      case "Saturday": perPerson = 20; break;
      case "Sunday": perPerson = 22.50; break;
    }

    totalPrice = group*perPerson;

    if (group >= 10 && group <= 20){
      totalPrice = 0.95*totalPrice;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
solve(40,"Regular","Saturday")