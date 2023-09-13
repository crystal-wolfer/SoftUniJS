function solve(input){
  let n = Number(input.shift());
  let pattern = /^(\$|%)([A-Z][a-z]{3,})\1:[ ]\[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/g;

  //exrtracting all matches
  while(n > 0){
    let message = input.shift();
    let match = message.match(pattern);

    if (match){
      let matchClean = match.join().split(/[\W]+/).slice(1,-1); //removing the weird characters and keeping a clean array with the names only by deleting the first and last elements
      let decrypted = '';
      
    for (let i = 1; i < matchClean.length; i++) {
      let num = Number(matchClean[i]);
      let letter = String.fromCharCode(num);
      decrypted += letter
    }  
    
    console.log(`${matchClean[0]}: ${decrypted}`);
    } else{
      console.log(`Valid message not found!`);
    }
    n--;
  }

}
solve(
  (["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"])
);
console.log(`-----------------------------`);
solve(
  (["3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true"])
);


//https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/Efu34mm-1BBPlE5GDPN2YkwBce_SErFHaCjmS9EviWeErA?e=a1ti5I
// vhod: https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/EQL-_7retANPhMVVtpMRYvUBDX5KWylebji0OdhyPXnAzQ?e=AxzDts
//30min