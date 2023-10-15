class Triathlon {
  constructor(competitionName){
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant (participantName, participantGender){
    if (this.participants.hasOwnProperty(participantName)){
      return `${participantName} has already been added to the list`
    }

    this.participants[participantName] = participantGender;
    return `A new participant has been added - ${participantName}`;

  }

  completeness(participantName, condition){
    if (!this.participants.hasOwnProperty(participantName)){
      throw new Error(`${participantName} is not in the current participants list`);
    }

    if (condition < 30){
      throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
    }

    const completedCount = Math.floor(condition/30);

    if (completedCount <= 2){
      return `${participantName} could only complete ${completedCount} of the disciplines`
    } else {
      const participantGender = this.participants[participantName];
      this.listOfFinalists.push({
        name: participantName,
        gender: participantGender,
      });
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }

  rewarding (participantName){
    // a bool inList that checks if the participantName is in the listOfFinalists
    const inList = this.listOfFinalists.some(
      (finalist) => finalist.name === participantName
    );

    if (!inList || inList.length === 0) {
      return `${participantName} is not in the current finalists list`
    }else{
      return `${participantName} was rewarded with a trophy for his performance`
    }
  }

  
  showRecord (criteria){
    const matchGen = this.listOfFinalists.some((finalist) => finalist.gender === criteria);
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`
    };

    if (criteria === 'all'){
      let sorted = this.listOfFinalists.sort((a,b) => a.name.localeCompare(b.name));
      let result = [`List of all ${this.competitionName} finalists:`]
      sorted.forEach(element => {
        result.push(`${element.name}`);
      });
      return result.join('\n');
    }

    if (!matchGen){
      return `There are no ${criteria}'s that finished the competition`
    } 
    
    if (matchGen){
      const participant = this.listOfFinalists.find(finalist => finalist.gender === criteria);
      return `${participant.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    };
  }

}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Nina", "female"));
console.log(contest.participants);
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Nina", 100));
console.log(contest.completeness("Sasha", 100));
console.log(contest.listOfFinalists);
//console.log(contest.completeness("George", 20));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord('female'));