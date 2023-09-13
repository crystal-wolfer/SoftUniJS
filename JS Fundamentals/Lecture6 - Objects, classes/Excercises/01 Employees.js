function solve(input) {
  class Employees{
    constructor (name, personalNum){
    this.name = name,
    this.personalNum = personalNum
    }

    print() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
    }
  }
  
  for (let name of input){
    let personalNum = name.length; 
    let temp = new Employees(name, personalNum);
    temp.print();
  }
  
}
solve([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]
  );

  //Solution2

  function solve2(array) {

    let object = {};
    //Assigning value to key that is the name of input array result: Silas Butler: 12
    for (const name of array) {
      object[name] = name.length;
      console.log(`Name: ${name} -- Personal Number: ${object[name]}`);
    }
    // Going through each element in the object and printing the result
    /*for (const name in object) {
      console.log(`Name: ${name} -- Personal Number: ${object[name]}`);
    }*/

  }
  solve2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );