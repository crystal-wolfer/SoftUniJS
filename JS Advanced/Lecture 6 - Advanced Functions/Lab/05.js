function solution(){
  let internalStr = ''; // this str will not be exposed to the user this is the closure its only accessible via tha obj bellow

  // this will be the only code executed
  let obj = {
    append(str){ internalStr += str}, // this is the append function
    removeStart(num){ internalStr = internalStr.substring(num)}, // this is the removeStart function
    removeEnd(num){ internalStr = internalStr.substring(0, internalStr.length - num)}, // this is the removeEnd function
    print(){console.log(internalStr);} // this is the print function
  };

  return obj;
};

let firstZeroTest = solution();

firstZeroTest.append('hello'); // same as solution.append() meaning we should write the functions in an object
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
