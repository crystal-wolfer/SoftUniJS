function search() {
   const searchText = document.querySelector('#searchText').value;
   let result = document.querySelector('#result');
   let arrayList = Array.from(document.querySelectorAll('#towns li')); // selecting all li elements
   let counter = 0;

   arrayList.forEach(element => {
      if (element.textContent.includes(searchText)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         return counter++;
      }
      element.style.fontWeight = '';
      element.style.textDecoration = 'none';
   });

   result.textContent = `${counter} matches found`;
  
}
