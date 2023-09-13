function solve(input){

  let sorted = input.sort((a,b) => {
    // elements first is sorted by ascending order of length, then sorted by A-Z
    return a.length - b.length || a.localeCompare(b);
    });

  console.log(sorted.join('\n'));

}
solve(['alpha',
'beta',
'gamma']);