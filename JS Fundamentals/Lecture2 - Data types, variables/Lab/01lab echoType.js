function solve(paramType){
  console.log(typeof(paramType));
  if(typeof(paramType)==="string" || typeof(paramType)==="number"){
    console.log(paramType);
  } else {
    console.log(`Parameter is not suitable for printing`);
  }

}
solve(null)