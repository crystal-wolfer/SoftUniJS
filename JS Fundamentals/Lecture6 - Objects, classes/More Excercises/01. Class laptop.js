class Laptop{
  constructor(info, quality){
    this.info = info;
    this.quality = quality;
  }

  isOn = false;
  
  turnOn(){
    this.isOn = true;
    this.quality -= 1;
  }

  turnOff() {
    this.isOn = false;
    this.quality -= 1;
  }

  showInfo(){
    return JSON.stringify(this.info); 
  }
  

  // The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
  get price(){
    return (800 - (this.info.age * 2) + (this.quality * 0.5));
  }

}


let info = {producer: "Dell",
age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)