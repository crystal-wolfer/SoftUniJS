function solve() {
   // capture elements
   const addBtns = document.querySelectorAll('.product >.product-add>.add-product');
   const printResultEl = document.querySelector('.shopping-cart>textarea');
   const checkoutBtn = document.querySelector('.shopping-cart > .checkout');
   let result = {};

   // loop through all buttons and print the product info when add button is clicked 
   for (const btn of addBtns) {
      // get the name of the product that applies to this button
      let prodName = btn.parentElement.parentElement.children[1].children[0].textContent // div.product-add-> div.produt -> div.product-details -> div.product-title.textContent
      let prodPrice = btn.parentElement.parentElement.children[3].textContent;
      btn.addEventListener('click', addToCart);


      function addToCart(eventProps) {
         prodPrice = Number(prodPrice);
         printResultEl.textContent = printResultEl.textContent + `Added ${prodName} for ${prodPrice.toFixed(2)} to the cart.\n`

         //creating a record of the product in the result object
         if (!result[prodName]) {
            result[prodName] = {
               prodPrice,
               quantity: 1
            }
         } else {
            result[prodName].prodPrice += prodPrice,
               result[prodName].quantity += 1
         }

         console.log(result);
      }

   }

   checkoutBtn.addEventListener("click", checkoutHandler);
   function checkoutHandler(eventProps) {
      let names = [];
      let totalSum = 0;
      for (const product in result) {
         names.push(product);
         totalSum += result[product].prodPrice;
      }

      printResultEl.textContent = printResultEl.textContent + `You bought ${names.join(', ')} for ${totalSum.toFixed(2)}.`

      disableButtons();

      function disableButtons() {
         let allBtns = Array.from(document.querySelectorAll('button'));
         allBtns.forEach(btn => btn.disabled = true);
      }

   }

}

// // no need to delete the event handlers just disable the buttons
// checkoutBtn.removeEventListener("click", checkoutHandler);

// for (const btn of addBtns) {
//    btn.replaceWith(btn.cloneNode(true)); //removes all event listeners;
//    btn.disabled = true;
// }