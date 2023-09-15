function cooking(...args) {
  let num = Number(args[0]);

  let operationsObj = {
    // receives operation "chop" with argument X and executes the actions in the {}
    chop: (x) => {
      let res = x / 2
      console.log(res)
      return res
    },

    dice: (x) => {
      let res = Math.sqrt(x)
      console.log(res)
      return res
    },

    spice: (x) => {
      let res = x + 1
      console.log(res)
      return res
    },

    bake: (x) => {
      let res = x * 3
      console.log(res)
      return res
    },


    fillet: (x) => {
      let res = x * 0.8
      console.log(res)
      return res
    },
  };

  for (let index = 1; index < args.length; index++) {
    num = operationsObj[args[index]](num);
  }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');