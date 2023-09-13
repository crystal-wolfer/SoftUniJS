const users = {
  foo: { name: 'Foo', email: 'foo@example.org' },
  bran: { name: 'Bran', email: 'bran@example.org' },
  bar: { name: 'Bar', email: 'bar@example.org' },
}
const usersAdditional = new WeakMap()
usersAdditional.set(users.bran, { admin: true })

// access object with additional properties:
Object.assign({}, users.bran, usersAdditional.get(users.bran))
//=> { name: 'foo', email: 'bran@example.org', admin: true }