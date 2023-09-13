// Set = ordered + unique values

const set = new Set([1, 2, 3])

// size
set.size //=> 3

// access
set.has(2) //=> true

// iteration
set.forEach((x) => {})
for (const x of set) {
  x
}

// mutation
set.add(42) // adds 42
set.add(42) // no-op
set.delete(42)
set.clear()

// conversion
new Set([1, 2, 3])
Array.from(set) //=> [1, 2, 3]
new Set(Object.values({ foo: 'Foo' })) //=> Set { 'Foo' }