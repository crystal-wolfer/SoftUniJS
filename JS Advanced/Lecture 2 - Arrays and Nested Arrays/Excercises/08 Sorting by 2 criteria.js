function sortArrayByTwoCriteria(array){
  let res = array.sort((item1, item2) => {
    //if item1 has less letters than item2, move it up (less letters go in front)
    if(item1.length < item2.length){
       return -1;
    // else move item1 down
    }else if(item1.length > item2.length){
       return 1;
    // in case the length is the same sort alphabetically in ascending order(a-z)
    }else{
       return item1.localeCompare(item2);
    }
 });

 console.log(res.join('\n'));
}
sortArrayByTwoCriteria(
['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

console.log(`------`);

sortArrayByTwoCriteria(
['test', 
'Deny', 
'omen', 
'Default']
  );
