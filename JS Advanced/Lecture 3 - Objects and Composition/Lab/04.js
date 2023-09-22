function objFactory(library, orders) {
  let result = [];

  for (const order of orders) {
    // Creating a copy of the orders object, so that the original object remains unchanged
    let obj = Object.assign({}, order.template);

    for (const methodName of order.parts) {
      obj[methodName] = library[methodName];
    }
    result.push(obj);
  }
  return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: 'ACME Printer'},
    parts: ['print']      
  },
  {
    template: { name: 'Initech Scanner'},
    parts: ['scan']      
  },
  {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']      
  },
  {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']      
  }
];

objFactory(library, orders);