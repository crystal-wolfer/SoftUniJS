function solve(bandName, albumName, trackName){
  let songDuration = (albumName.length*bandName.length) * (trackName.length/2);
  let vynilRotations = songDuration / 2.5;

  console.log(`The plate was rotated ${Math.ceil(vynilRotations)} times.`);
  
  }
solve('Rammstein', 'Sehnsucht', 'Engel')