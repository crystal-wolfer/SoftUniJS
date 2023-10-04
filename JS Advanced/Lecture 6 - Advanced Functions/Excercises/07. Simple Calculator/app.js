function calculator() {
    // query selector obj
    const selector = {
        s1: null,
        s2: null,
        result: null,
    };

    // operations obj
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    // calculating function
    function calc(s1, s2, operation){
        return operations[operation](Number(s1), Number(s2));
    }

    return {
        init: (selector1, selector2, resultSelector) => {
            selector.s1 = document.querySelector(selector1);
            selector.s2 = document.querySelector(selector2);
            selector.result = document.querySelector(resultSelector);
        },
        add: () => {
            selector.result.value = calc(selector.s1.value, selector.s2.value, "+")
        },
        subtract: () => {
            selector.result.value = calc(selector.s1.value, selector.s2.value, "-")
        },
    };
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


// // elements creation helper functions
// function p(...content) {
//     return createElement("p", {}, ...content);
//   }
  
//   function td(...content) {
//     return createElement("td", {}, ...content);
//   }
  
//   function createElement(type, props, ...content) {
//     const element = document.createElement(type);
//   }
