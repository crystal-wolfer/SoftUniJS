function solve(input){
  // taking the first element and puting it into an array with separate elements
  let list = input.shift().split("!");
  let i = 0;
  let iterate = input[i];

  while (iterate !== "Go Shopping!"){
    let [command, item1, item2] = input[i].split(" ");

    switch (command) {
      case "Urgent":
        if (!list.includes(item1)){
          list.unshift(item1);
        }
        break;
      case "Unnecessary":
        if (list.includes(item1)){
          let index = list.indexOf(item1);
          list.splice(index, 1);
        }
        break;
      case "Correct":
        if (list.includes(item1)){
          let index = list.indexOf(item1);
          list.splice(index, 1, item2);
        }
        break;
      case "Rearrange":
        if (list.includes(item1)){
          let index = list.indexOf(item1);
          list.splice(index, 1);
          list.push(item1);
        }
        break;
    }
    iterate = input[i];
    i++;
  }
  
  console.log(list.join(", "));
}
solve(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);