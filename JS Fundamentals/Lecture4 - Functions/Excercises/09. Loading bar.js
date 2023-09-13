function loadingBar(loadValue){
  
  function percentageLoaded(){
    let loader = '';
    for (let i = 0; i < (loadValue/10); i++){
      loader += `%`
    }
   return loader;
  }

  function percentageLeft(){
    let loaderLeft = '';
    let dots = 10 - (loadValue/10)
    for (let i = dots; i > 0 ; i--){
      loaderLeft += `.`;
    }
    return loaderLeft;
  }

  if (loadValue === 100){
    console.log(`100% Complete!\n[%%%%%%%%%%]`);
  } else{
    console.log(`${loadValue}% [${percentageLoaded()}${percentageLeft()}]\nStill loading...`);
  }
  
}
console.log(loadingBar(0)); 
