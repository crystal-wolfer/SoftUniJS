// Stack, implemented with Set
class UniqueStack {
  constructor(arr) {
    this._stack = new Set(arr)
  }
  push(val) {
    this._stack.add(val)
  }
  pop() {
    const arr = Array.from(this._stack)
    const val = arr.pop() // mutates arr
    this._stack = new Set(arr)
    return val
  }
  peek() {
    const arr = Array.from(this._stack)
    const val = arr[arr.length - 1]
    return val
  }
}

const uniqueStack = new UniqueStack()
uniqueStack.push(42) // add at the end
uniqueStack.push(42) // no-op, duplicate
const val3 = uniqueStack.pop() // remove from the end
const val4 = uniqueStack.peek() // peek at the end