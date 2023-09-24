function extract(content) {
  let p = document.getElementById(content);
  let target = p.textContent;
  let regex = /\([^)]*\)/g;
  let array = target.match(regex);
  let result = [];

  array.forEach(element => {
    element = element.slice(1, element.length-1);
    result.push(element);
  });
  
  return result.join('; ');
}

let text = extract("content");