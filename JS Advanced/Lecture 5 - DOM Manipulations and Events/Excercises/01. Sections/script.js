function create(words) {
   //capture elements
   const contentDiv = document.querySelector('#content');

   // iterate over each element from the input array and create the div and p elements; add event listener and append them
   for (const el of words) {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = el;
      pEl.style.display = 'none';
      divEl.appendChild(pEl);
      divEl.addEventListener('click', divHandler);
      contentDiv.appendChild(divEl);
   }

   function divHandler(eventParams) {
      const p = eventParams.target.children[0];
      p.style.display = 'block';
   }
}