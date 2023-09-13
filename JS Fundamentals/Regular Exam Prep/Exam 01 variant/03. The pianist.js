function solve(list) {
  let pieces = Number(list.shift());
  let partituras = {};
  let currentPiece = list.shift();
  createParituras();
  manipulatingPartituras();

  //Object creation
  function createParituras() {
      while (pieces > 0) {
          //extracting info
          let [piece, composer, key] = currentPiece.split('|');
          if (!partituras[piece]) {
              partituras[piece] = {
                  composer,
                  key,
              };
          }
          currentPiece = list.shift();
          pieces--;
      }  // end of Object creation
  }
  // Add, Remove or Change Object properties
  function manipulatingPartituras() {
      let line = currentPiece;
      while (line !== 'Stop') {
          let destructing = line.split('|');
          let command = destructing.shift();


          //IF command is Add
          if (command === 'Add') {
              let [piece, composer, key] = [destructing[0], destructing[1], destructing[2]];
              //check if piece didn't exist - add it
              if (!partituras[piece]) {
                  partituras[piece] = {
                      composer,
                      key,
                  }
                  console.log(`${piece} by ${composer} in ${key} added to the collection!`);
              }
              //IF exist skip adding and print response
              else {
                  console.log(`${piece} is already in the collection!`);
              }
          }
          //IF command is Remove
          else if (command === 'Remove') {
              let piece = destructing[0];
              // check IF exist
              if (partituras[piece]) {
                  delete partituras[piece];
                  console.log(`Successfully removed ${piece}!`);
              }
              // IF not exist
              else {
                  console.log(`Invalid operation! ${piece} does not exist in the collection.`);
              }
          }
          //IF command is Change key
          else if (command === 'ChangeKey') {
              let [piece, key] = [destructing[0], destructing[1]];
              // check IF exist
              if (partituras[piece]) {
                  partituras[piece].key = key;
                  console.log(`Changed the key of ${piece} to ${key}!`);
              }
              // IF not exist 
              else {
                  console.log(`Invalid operation! ${piece} does not exist in the collection.`);
              }
          }
          line = list.shift();
      } // end of While to Stop
  }
  //iterate and print info
  for(let piece in partituras){
      console.log(`${piece} -> Composer: ${partituras[piece].composer}, Key: ${partituras[piece].key}`);
  }
}
solve(
  [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  
);
