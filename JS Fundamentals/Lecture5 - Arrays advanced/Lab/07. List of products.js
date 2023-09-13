function solve(products){
    let productsOrdered = products.sort();

    for(let i=0; i<productsOrdered.length; i++) {
      console.log(`${i+1}.${productsOrdered[i]}`);
    }
    
}
solve(['Watermelon', 'Banana', 'Apples'] );