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


class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let addedCandidates = [];
    for (const candidate of candidates) {
      let [name, education, yearsExperience] = candidate.split('-');
      yearsExperience = Number(yearsExperience);

      const existingCandidate = this.jobCandidates.find((c) => c.name === name);

      if (existingCandidate) {
        if (existingCandidate.yearsExperience < yearsExperience) {
          existingCandidate.yearsExperience = yearsExperience;
        }
      } else {
        this.jobCandidates.push({ name, education, yearsExperience });
        addedCandidates.push(name);
      }
    }

    if (addedCandidates.length > 0) {
      return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    } else {
      return "No new candidates were added.";
    }
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split('-');
    minimalExperience = Number(minimalExperience);

    const selectedCandidate = this.jobCandidates.find((c) => c.name === name);

    if (!selectedCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (selectedCandidate.yearsExperience < minimalExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }

    selectedCandidate.yearsExperience = "hired";

    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const selectedCandidate = this.jobCandidates.find((c) => c.name === name);

    if (!selectedCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    let salary = 0;
    if (selectedCandidate.education === "Bachelor") {
      salary = 50000;
    } else if (selectedCandidate.education === "Master") {
      salary = 60000;
    } else {
      salary = 40000;
    }

    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error("Candidate Database is empty!");
    }

    const sortedCandidates = this.jobCandidates
      .slice() // Create a copy of the array to avoid modifying the original array
      .sort((a, b) => a.name.localeCompare(b.name));

    const candidatesList = sortedCandidates.map(
      (candidate) => `${candidate.name}-${candidate.yearsExperience}`
    );

    return ["Candidates list:", ...candidatesList].join("\n");
  }
}

  let Jobs = new JobOffers ("Google", "Strategy Analyst");
  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
  console.log(Jobs.jobOffer("John Doe-8"));
  console.log(Jobs.jobOffer("Peter Parker-4"));
  console.log(Jobs.jobOffer("Jordan Cole-4"));
  console.log(Jobs.salaryBonus("Jordan Cole"));
  console.log(Jobs.salaryBonus("John Doe"));
  console.log(Jobs.candidatesDatabase());
 


}
