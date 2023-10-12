class Stringer{
  constructor(string, length){
    this.innerString = string;
    this.innerLength = length;
  }

  increase(length){
    this.innerLength += length;
  }
  decrease(length){
    const value = this.innerLength - length;
    this.innerLength = value < 0 ? 0 : value; // check if the resulting value is negative if yes set it to 0, otherwise leave the value as is
  }
  toString(){
    if (this.innerLength === 0){
    return `...`;
    } 

    if (this.innerString.length > this.innerLength){
      const modifiedString = this.innerString.slice(0, this.innerLength);
      return `${modifiedString}...`
    }

    return this.innerString;
  }   

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
