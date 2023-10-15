class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }


  newAdditions(footballPlayers) {
    let addedPlayers = [];
    footballPlayers.forEach(element => {
      const [name, age, playerValue] = element.split('/');
      // a bool inList that checks if the participantName is in the listOfFinalists
      const inList = this.invitedPlayers.some(
        (player) => player.name === name
      );

      if (!inList) {
        this.invitedPlayers.push({
          name: name,
          age: Number(age),
          playerValue: Number(playerValue)
        })
        addedPlayers.push(name);
      }

      let playerN = this.invitedPlayers.find((player) => player.name === name);
      let value = playerN.playerValue;
      if (value < playerValue) {
        const index = this.invitedPlayers.findIndex((player) => player.name === name);
        this.invitedPlayers[index].playerValue = playerValue;
      }
    });

    return `You successfully invite ${addedPlayers.join(', ')}.`
  }


  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);
    // a bool inList that checks if the participantName is in the listOfFinalists
    const inList = this.invitedPlayers.some(
      (player) => player.name === name
    );

    if (!inList) {
      throw new Error(`${name} is not invited to the selection list!`)
    }

    let buff = this.invitedPlayers.find((player) => player.name === name);
    let value = buff.playerValue;
    if (playerOffer < value) {
      const priceDifference = value - playerOffer;
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
    }

    // changing the value to Bought
    const index = this.invitedPlayers.findIndex((player) => player.name === name);

    this.invitedPlayers[index].playerValue = 'Bought';
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
  }

  ageLimit(name, age) {
    // a bool inList that checks if the participantName is in the listOfFinalists
    const inList = this.invitedPlayers.some(
      (player) => player.name === name
    );

    if (!inList) {
      throw new Error(`${name} is not invited to the selection list!`)
    }

    let buff = this.invitedPlayers.find(player => player.name === name);
    let ageRecord = buff.age;

    if (age > ageRecord){
      const ageDiff = age - ageRecord;
      if (ageDiff < 5 && ageDiff > 0){
        return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
      }
    } else {
      return `${name} is above age limit!`
    }
  }

  transferWindowResult(){
    // sorting the players by name in ascending order
    let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
    let result = [`Players list:`]

    sorted.forEach(player => {
      result.push (`Player ${player.name}-${player.playerValue}`)
    });

    return result.join('\n')
  }

}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Pau Torres/25/65"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
console.log(fTeam.invitedPlayers[2]);


// 1:20