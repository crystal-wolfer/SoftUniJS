function solve() {
  const input1 = document.getElementById('text');
  const input2 = document.getElementById('naming-convention');
  let result = document.getElementById('result');
  let text = input1.value;
  const namingConvention = input2.value;
  //Covering the Error case
  if (namingConvention !== 'Pascal Case' || namingConvention !== 'Camel Case'){
    result.textContent = 'Error!';
  }
  //Camel Case
  if (namingConvention == "Camel Case"){
    // converting all characters to lowercase
    text = text.toLowerCase();
    // turning the string to camelcase
    text = text.split(" ").reduce((s, c) => s
    + (c.charAt(0).toUpperCase() + c.slice(1)));
    result.textContent = text;
  }
  //Pascal Case
  if (namingConvention == "Pascal Case"){
    text = text.toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .trim()
    .split(' ')
    .map(word => word[0]
    .toUpperCase()
    .concat(word.slice(1)))
    .join('');
    result.textContent = text;
  }
}