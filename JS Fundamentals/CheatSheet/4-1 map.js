// Map = ordered + key-value pairs

const map = new Map([
  ['foo', 'Foo'],
  ['bar', 'Bar'],
])

// size
map.size //=> 2

// access
map.has('foo') //=> true
map.get('bar') //=> 'Bar'

// iteration
map.keys() //=> ['foo', 'bar']
map.values() //=> ['Foo', 'Bar']
map.entries() //=> [['foo', 'Foo'], ['bar', 'Bar']]
map.forEach(([k, v]) => {})
for (const [key, value] of map) {
}

// mutation
map.set('baz', 'Baz') //setting specific value for specific key, it overrides if entry exists or adds it if it doesnt exist
map.delete('foo')
map.clear()

// conversion
new Map() // 2d array -> Map
Array.from(map) // Map -> 2d array
new Map(Object.entries(address)) // Object -> Map
Object.fromEntries(map) // Map -> Object