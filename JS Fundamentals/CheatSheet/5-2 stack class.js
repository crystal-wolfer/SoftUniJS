// Stack, implemented with Array
class Stack {
  constructor(arr) {
    this._stack = arr
  }
  push(val) {
    this._stack.push(val)
  }
  pop() {
    return this._stack.pop() // mutates arr
  }
  peek() {
    return this._stack[this._stack.length - 1]
  }
}

const stack = new Stack()
stack.push(42) // add at the end
stack.push(42) // add at the end
const val1 = stack.pop() // remove from the end
const val2 = stack.peek() // peek at the end