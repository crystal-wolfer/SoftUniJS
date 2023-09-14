function commonDivisor(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}
commonDivisor(2154, 458);