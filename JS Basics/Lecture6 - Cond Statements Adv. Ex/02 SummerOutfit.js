function output(input){
    let temperature = Number(input[0]);
    let daytime = input[1];
    let outfit = 0;
    let shoes = 0;

    switch (daytime) {
        case "Morning":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
        break;

        case "Afternoon":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature > 18 && temperature <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
	            console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
        break;

        case "Evening":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
	            console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
            else if (temperature >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log("It's " + temperature + " degrees, get your " + outfit + " and " + shoes + ".");
            }
        break;

}
}
output(["28", "Evening"]);