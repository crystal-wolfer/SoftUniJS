function solve(input) {
  
  class Cats {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow(){
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let cat of input) {
    // split the input into name, age
    let [name, age] = cat.split(' ');
    // define the curent Cat from the iteration as object
    let curCat = new Cats(name, age);
    // tell the current cat to do the funcion meow
    curCat.meow();
  }
}
solve(['Mellow 2', 'Tom 5']);