function createAssemblyLine() {

  // Creating the functions 1 by 1 by keeping the results in an object called template and then assigning it to the main onject obj

  // Case hasClima
  function hasClima(obj) {
    const template = {
      temp: 21,
      tempSettings: 21,
      adjustTemp: function adjustTemp() {
        if (obj.temp < obj.tempSettings) {
          obj.temp++;
        } else if (obj.temp > obj.tempSettings) {
          obj.temp--;
        }
      }
    };
    // taking the input obj and adding to it the template created by this function to it
    return Object.assign(obj, template);
  };

  // Case hasAudio
  function hasAudio(obj) {
    const template = {
      currentTrack: {
        name: null,
        artist: null,
      },
      
      nowPlaying: function nowPlaying() {
        if (obj.currentTrack !== null){
          console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        }
      }
    }

    // taking the input obj and adding to it the template created by this function to it
    return Object.assign(obj, template);
  }

  // Case hasParktronic 

  function hasParktronic(obj){
    const template = {
      checkDistance: function checkDistance(distance){
        if (distance < 0.1){
          console.log("Beep! Beep! Beep!");
        } else if (0.1 <= distance < 0.25){
          console.log("Beep! Beep!");
        } else if (0.25 <= distance < 0.5 ) {
          console.log("Beep!");
        }
      } 
    }

    // taking the input obj and adding to it the template created by this function to it
    return Object.assign(obj, template);
  }

  return {
    hasClima,
    hasAudio,
    hasParktronic
  }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
