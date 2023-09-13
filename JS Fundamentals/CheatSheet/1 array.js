// Array = ordered + indexed + duplicate values
// a.k.a. List

const arr = [1, 2, 3]

// size
arr.length //=> 3

// random-access
arr[1] // 2

// iteration
arr.map((x) => x + 10) //=> 11, 12, 13
arr.forEach()
for (const x of arr) {
  x
}

// mutation
arr[1] = 20 // update any index
arr.unshift() // add at the start
arr.push() // add at the end
arr.shift() // remove from the start
arr.pop() // remove at the end

// conversion
const obj = { foo: 'Foo', bar: 'Bar' }
Object.values(obj) //=> ['Foo', 'Bar']
Object.entries(obj) //=> [ [ 'foo', 'Foo' ], ... ]