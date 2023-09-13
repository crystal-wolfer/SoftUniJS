// Queue with Array (front to back)
const queue1 = []
queue1.push(42) // add at the end
const val1 = queue1.shift() // remove from the start

// Queue with Array (back to front)
const queue2 = []
queue2.unshift(42) // add at the start
const val2 = queue2.pop() // remove from the end

// Queue with Set is also possible
// [similar to UniqueStack impl.]