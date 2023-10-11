class List{
  constructor(){
    this.list = [];
    this.size = 0;
  }

  // helper method that will be updating the size every time the list changes
  updateSize(){
    this.size = this.list.length;
  }

  // helper method that will be sorting the list
  sortList(){
    return this.list.sort((a, b) => a - b);
  }


  // main functions
  add(element){
    this.list.push(element);
    this.updateSize();
    this.sortList();
  }

  remove(index){
    if (index < 0 || index >= this.size){
      throw new Error ("Invalid index");
    }
    this.list.splice(index, 1); // remove element from list on the given index
    this.updateSize();
    this.sortList();
  }

  get(index){
    if (index < 0 || index >= this.size){
      throw new Error ("Invalid index");
    }
    return this.list[index];
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));