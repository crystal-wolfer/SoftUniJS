function solve(input) {
  let n = input.shift();
  let type = input.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }

    print() {
      console.log(`${this.name}`);
    }

  }


  for (let i = 0; i < n; i++){
    let [typeList, name, time] = input[i].split('_');
    let curSong = new Song(typeList, name, time);

    if (type === "all"){
      curSong.print();
    }

    if (type == curSong.typeList) {
      curSong.print();
    }
  }  
  
}
solve([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all']  
  );