function solve(input){
  
  let pattern = /([=\/])([A-Z][a-zA-Z\s]{2,})\1/g;
  let match = input.match(pattern);  // extracting all the matches
  let travelPoints = 0;

  // checking if the input has matches and then cleaning the match array
  if(match){
    let matchClean = match.join().split(/[\W]+/).slice(1,-1); //removing the weird characters and keeping a clean array with the names only by deleting the first and last elements

    for (const el of matchClean) {
      travelPoints += el.length;
    }

    console.log(`Destinations: ${matchClean.join (', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
  } else{
    console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
  }

}
solve(
  ("=Haw=/Cyp/=Invalid/invalid==i5valid=/I5valid/=i=")
);

solve(
  ("ThisIs some InvalidInput")
);

//34min debugging 10min+...