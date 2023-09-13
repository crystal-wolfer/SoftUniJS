function solve(input){
  let records = {};

  let line = input.shift();

  while(line !== 'Log out'){
    let destructuring = line.split(': '); //splitting into all input
    let command = destructuring.shift(); // taking the command

    //IF command is New Follower
    if (command === 'New follower'){
      let name = destructuring.shift();
      //checking the name doesn't exist in the records
      if(!records[name]){
        records[name] = {
          likes: 0,
          comments: 0
        }
      }
    }

    //IF command is Like
    if (command === 'Like'){
      let [name, count] = destructuring;
      count = Number(count);

      //checking if the name doesn't exist in the records
      if(!records[name]){
        records[name] = {
          likes: count,
          comments: 0
        }
      } else {
        records[name].likes += count;
      }
    }

    //IF command is Comment
    if (command === 'Comment'){
      let name = destructuring;

      //checking if the name doesn't exist in the records
      if(!records[name]){
        records[name] = {
          likes: 0,
          comments: 1
        }
      } else {
        records[name].comments += 1;
      }
    }

    //IF command is Blocked
    if(command === 'Blocked'){
      let name = destructuring;

      //checking if the name is in the records
      if(records[name]){
        delete records[name];
      } else {
        console.log(`${name} doesn't exist.`);
      }
    }


    line = input.shift();
  }

  let count = Object.keys(records).length;
  console.log(`${count} followers`);
  for (let name in records) {
    let sum = records[name].likes + records[name].comments;
    console.log(`${name}: ${sum}`);
  }

}
solve(
  (["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])
);
console.log(`----------------------------`);
solve(
  (["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
);
console.log(`----------------------------`);
solve(
  (["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
);

/*
The possible commands are:
"Log out"
"New follower: {username}"
"Like: {username}: {count}"
"Comment: {username}"
"Blocked: {username}"

The possible outputs are:
"{Username} doesn't exist."
"{count} followers
{username}: {likes+comments}

*/


//https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/EZcmv_KwHOFOssVxA4B7oRIB5o_aLgnEdWnOSI98fpjiZw?e=f3Kn1I
//vhod: https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/ETbt77i3Ut1ArE13cIecg5sB3ypDrXdCgHln5EJFEBcjyw?e=NM2tQd  