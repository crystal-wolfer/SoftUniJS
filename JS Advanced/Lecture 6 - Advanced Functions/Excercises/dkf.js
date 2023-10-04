function calculator() {
  // calculate obj with functions
  const calculate = {
      init: (selector1, selector2, resultSelector) => {
          selector1 = document.querySelector(selector1);
          selector2 = document.querySelector(selector2);
          result = document.querySelector(resultSelector);

          rertun = (selector1, selector2, result);
      },
      add: (selector1, selector2, result) => {
          result.value = Number(selector1.value) + Number(selector2.value);
          return result.value;
      },
      subtract: (selector1, selector2, result) => {
          result.value = Number(selector1.value) - Number(selector2.value);
          return result.value;
      },
  };

  return calculate;
}
