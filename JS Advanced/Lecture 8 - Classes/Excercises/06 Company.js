class Company{
  constructor(){
    this.departments = [];
  }

  // HELPER METHODS:
  //getDepartment method receives the department name as input, checks if the department eparamists in out Company collection. If not it creates a template object and returns it. If it eparamists it returns the eparamisting object from the collection
  getDepartment(name){
    const tempDepartment = this.departments.find(department => department.name === name);

    if(!tempDepartment){
      const temp = {name, employees: [], salaries: [], positions: []};
      this.departments.push(temp);
      return temp;
    }

    return tempDepartment; 
  }
  
  //getSalariesSum method receives department name and gets the respective salries array from the collection. The array is then reduced to sum all of the elements inside it and returns that sum.
  getSalariesSum(department) {
    return department.salaries.reduce((acuu, element) => acuu + element, 0);
  }

  // bestSalaryDepartment method sorts the collection of departments and data based on the average salary of each department on descending order (the highest becomes the first element in the collection [0])
  bestSalaryDepartment() {
    return this.departments.sort(
      (a, b) =>
        this.getSalariesSum(b) / b.salaries.length -
        this.getSalariesSum(a) / a.salaries.length
    )[0];
  }


  addEmployee(...parameters){
    let [name, salary, position, departmentName] = parameters;

    // validation if any of the parameters is invalid
    const isInvalidInput = parameters.some((param) => param === undefined || param === null || param === "") || salary < 0;

    if (isInvalidInput) {
      throw new Error("Invalid input!");
    }

    const tempDepartment = this.getDepartment(departmentName);
    tempDepartment.employees.push(name);
    tempDepartment.salaries.push(salary);   
    tempDepartment.positions.push(position);
    return `New employee is hired. Name: ${name}. Position: ${position}`  
  }

  bestDepartment(){
    const bestDep = this.bestSalaryDepartment();

    //Getting the employees of the bestDep sorted by their salary by descending order and by their name in ascending order. Using reduce we loop through the employees and then push them into an array 
    const combinedEmployees = bestDep.employees.reduce((a, v, i) => {
      a[i] = [];
      a[i].push(v, bestDep.salaries[i], bestDep.positions[i]);
      return a;
    }, []);

    // sort by salary first and if there are same salaries we sort by name in ascending order
    const sorted = combinedEmployees.sort((a, b) => {
      return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
    });

    const printEmployees = sorted.map((el) => el.join(' ')).join('\n');


    //Calculates the avarage salary in the best department
    const bestAvSalary = this.getSalariesSum(bestDep) / bestDep.salaries.length;

    // return the expected text:
    return `Best Department is: ${bestDep.name}\nAverage salary: ${bestAvSalary.toFixed(2)}\n${printEmployees}`; 
  }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
