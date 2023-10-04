function solve(arrNum, sortType){
  // keep the type values
  const dict = {
    asc: (a, b) => a - b, //ascending sort
    desc: (a, b) => b - a //descending sort
  };

 const res = arrNum.sort(dict[sortType]);
 return res
}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');