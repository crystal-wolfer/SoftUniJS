function solve(input){
  let journal = input.shift().split(', ');

  let i = 0;
  let iterator = input[i];

  while(iterator !== 'Craft!'){
    let [command, key] = (input[i]).split(' - ');

    switch (command) {
      case 'Collect':
        if(!journal.includes(key)){
          journal.push(key);
        }
        break;

      case 'Drop':
        if(journal.includes(key)){
          let index = journal.indexOf(key);
          journal.splice(index,1);
        }
        break;
      
      case 'Combine Items':
        let items = key.split(':');
        //check if old item is in the Journal and then adding the new item after it
        if(journal.includes(items[0])){
          let index = journal.indexOf(items[0]);
          journal.splice(index + 1,0, items[1]);
        }
        break;

      case 'Renew':
        if(journal.includes(key)){
          let index = journal.indexOf(key);
          journal.splice(index,1);
          journal.push(key);
        }

        break;
    }

    i++;
    iterator = input[i];
  }

  console.log(journal.join(', '));

}
solve(['Iron, Sword',
'Drop - Bronze',
'Combine Items - Sword:Bow',
'Renew - Iron',
'Craft!'
]);