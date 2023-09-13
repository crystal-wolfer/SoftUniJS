// Object = not ordered + key-value pairs + duplicate values
//          keys are strings
// a.k.a. Map, Dictionary, Associative array/collection,
//        Lookup table, Hash (table/map)

const obj = { user: 'foo', email: 'foo@example.org' }

// size
Object.getOwnPropertyNames(obj).length //=> 2

// random-access
obj.user //=> 'foo'
obj['email'] //=> 'foo@example.org'

// iteration
Object.keys(obj) //=> ['user', 'email']
Object.values(obj) //=> ['foo', 'foo@example.org']
Object.entries(obj) //=> [['user', 'foo'], ...]
for (const [key, value] of Object.entries(obj)) {
  key //=> 'user'
  value //=> 'foo'
}

// mutation
obj.user = 'bar' // add/change the value of a property
delete obj.email // delete a key-value pair

// conversion
const arr = ['a', 'b']
Object.fromEntries(arr) //=> { '0': 'a', '1': 'b' }

// example
const sessions = {
  '194dc20': { user: 'foo', email: 'foo@example.org' },
  '5b631ed': { user: 'bar', email: 'bar@example.org' },
}