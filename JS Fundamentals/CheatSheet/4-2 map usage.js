const users = new Map()
users.set('foo', { name: 'Foo', email: 'foo@example.org' })
users.set('bran', { name: 'Bran', email: 'bran@example.org' })
users.set('bar', { name: 'Bar', email: 'bar@example.org' })

// random-access:
users.get('bran')

// iterate in order:
for (const [username, user] of users) {
  username
  user
}