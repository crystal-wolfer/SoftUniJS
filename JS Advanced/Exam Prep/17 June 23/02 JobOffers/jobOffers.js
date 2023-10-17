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
      salary = '50,000';
    } else if (selectedCandidate.education === "Master") {
      salary = '60,000';
    } else {
      salary = '40,000';
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

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

// 1:24h 100/100

//  You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
//  Welcome aboard, our newest employee is John Doe.
//  Welcome aboard, our newest employee is Peter Parker.
//  John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
//  Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!

