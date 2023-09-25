function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let textSearch = document.querySelector('#searchField');
      const text = textSearch.value;
      let arrayRows = Array.from(document.querySelectorAll('tbody tr')); // array with all rows

      arrayRows.forEach(row => {
         let array = row.querySelectorAll('td');

         for (const cell of array) {
            if (cell.textContent.includes(text)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }         
      });
      
   }
}