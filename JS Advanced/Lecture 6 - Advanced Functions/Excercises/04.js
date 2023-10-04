function solution(){
  // constants
  const SUCCESS_MSG = `Success`;

  // dictionaries
  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const recipes = {
    apple: {carbohydrate: 1, flavour: 2},
    lemonade: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7, flavour: 3},
    eggs: {protein: 5, fat: 1, flavour: 1},
    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
  };

  // error handling
   const getError = (element) => `Error: not enough ${element} in stock`


  const commands = {
    restock: (ingedient, quantity) => {
      stock[ingedient] += Number(quantity);
      return SUCCESS_MSG
    },
    prepare: (recipe, quantity) => {
      let missingElEntry;
      let errorMsg;

      // go through the quantity of the recipe
      for (let i = 0; i < quantity; i++) {
        
        missingElEntry = Object.entries(recipes[recipe]) // getting the needed ingredients from the recipes obj 
          .find((el) => stock[el[0]] < Number(el[1])   // el is the key value pair(kvp) ingredient and qty of the ingredient and compares if the stock has enough qty of the given ingredient 
        );
        // if the qty is not available return the error message by providing the name of the ingredient that's missing
        if (missingElEntry) {
          errorMsg = getError(missingElEntry[0]);
          break;
        }
        // if qty is enough then reduce the stock by 1
        Object.entries(recipes[recipe]).forEach((el) => {
          stock[el[0]] -= Number(el[1]);
        });
      }

      return errorMsg ? errorMsg : SUCCESS_MSG; //if there is an error message return it, if not return the successMsg
    },

    report: () => {
      const res = Object.keys(stock).reduce((accu,key) => {
        accu.push(`${key}=${stock[key]}`) // protein={qty} 
        return accu;
      }, []) // in this case the accu is the empty array that keeps the pairs 
      .join(' ')

      return res;
    },
  };
  
  // this is where the manager() function is calling
  return function(command){
    const [cmd, param1, param2] = command.split(" ");

    if(command.length === 1){
      return commands[cmd]();
    } else{
      return commands[cmd](param1, Number(param2));
    }
  }
}


// let manager = solution(); 
// console.log (manager("restock flavour 50")); // Success 
// console.log (manager("prepare lemonade 4"));
console.log(`=============`);
let manager = solution(); 
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));