function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   // capture elements
   let input = document.querySelector('#inputs textarea');
   let bestRestaurantResult = document.querySelector('#bestRestaurant p');
   let workersResult = document.querySelector('#workers p');



   function onClick () {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach(element => {
         let [name, workers] = element.split(' - ');
         let workersCollections = workers.split(', ');

         // crete dictionary collection for all workers an array of objects
         let workersDictCollection = [];
         for (let worker of workersCollections) {
            let [workerName, salary] = worker.split(" ");
            workersDictCollection.push({name: workerName, salary: Number(salary)});
         }

         // if the restaurant is already given: add the workers only into the workersDictCollection
         if (restaurants[name]){
            workersDictCollection = workersDictCollection.concat(restaurants[name].workers)
         }

         //sorting the workers dictionary by salary
         workersDictCollection.sort((w1, w2) => w2.salary - w1.salary);

         let bestSalary = workersDictCollection[0].salary;
         let totalSalary = workersDictCollection.reduce((sum, w) => sum + w.salary, 0);
         let avgSalary = totalSalary/workersDictCollection.length;

         restaurants[name] = {
            workers: workersDictCollection,
            averageSalary: avgSalary,
            bestSalary,
         }

      });

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (let name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: Number(restaurants[name].bestSalary),
               averageSalary: restaurants[name].averageSalary,
            }

            bestRestaurantSalary = restaurants[name].averageSalary;
         }

      }

      bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      let resultWorkers = [];
      bestRestaurant.workers.forEach(worker => resultWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`));

      workersResult.textContent = resultWorkers.join(' ');

   }
}