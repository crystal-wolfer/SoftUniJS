export function createHTMLElement(tagName, attributes) {
  const element = document.createElement(tagName);

  if (attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        if (key === "value" && (tagName === "input" || tagName === "textarea")) {
          element.value = attributes[key];
        } else if (key === "textContent") {
          element.textContent = attributes[key];
        } else {
          element.setAttribute(key, attributes[key]);
        }
      }
    }
  }

  return element;
}

// Example usage:
// const divElement = createHTMLElement("div", { id: "myDiv", class: "my-class", textContent: "This is a div" });
// const inputElement = createHTMLElement("input", { id: "myInput", class: "input-class", value: "Input Value" });

// document.body.appendChild(divElement);
// document.body.appendChild(inputElement);