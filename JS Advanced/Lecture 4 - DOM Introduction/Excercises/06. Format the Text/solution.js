function solve() {
  let textInput = document.querySelector('#input').value;
  let textArrayFiltered = Array.from(textInput.split('.').filter(elm => elm)); // filter out the empty strings


  for (let i = 0; i < textArrayFiltered.length; i += 3) {
    const p = document.createElement('p'); //creating a new <p> element
    const node = document.createTextNode(`${textArrayFiltered[i]}.`); //add text to the <p> element, you must create a text node first. This code creates a text node
    p.appendChild(node); // append the text node to the <p> element

    if (textArrayFiltered[i + 1] !== undefined) { // validating the element excists and repeating the above process
      const node2 = document.createTextNode(`${textArrayFiltered[i + 1]}.`);
      p.appendChild(node2);
    }

    if (textArrayFiltered[i + 2] !== undefined) {
      const node3 = document.createTextNode(`${textArrayFiltered[i + 2]}.`);
      p.appendChild(node3);
    }

    const output = document.getElementById("output");
    output.appendChild(p);
  }

}