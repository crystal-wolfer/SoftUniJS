function solution() {
  // capture elements
  const main = document.querySelector("body>main");
  main.innerHTML = ""; // clean the loading
  let URL = "http://localhost:3030/jsonstore/cookbook/recipes";

  function createRecipePreviewElement(hParam, imgSrc) {
    const article = document.createElement("article");
    article.addEventListener("click", showRecipe)
    article.classList.add("preview");

    const div1 = document.createElement("div");
    div1.classList.add("title");

    const h2 = document.createElement("h2");
    h2.textContent = `${hParam}`

    const div2 = document.createElement("div");
    div2.classList.add("small");

    const img = document.createElement("img");
    img.src = `${imgSrc}`;

    // Append the elements to the <article> element
    div1.appendChild(h2);
    div2.appendChild(img);
    article.appendChild(div1);
    article.appendChild(div2);

    return article;
  }

  async function retrieveInfo() {
    try {
      const response = await fetch(URL, { method: "GET" });
      const data = await response.json();
      console.log(data);

      if (response.status !== 200) {
        throw new Error(`Status code: ${response.status} ${response.statusText}`)
      } else {
        arr = Object.values(data);
        arr.forEach(element => {
          let name = element.name;
          let scr = element.img;
          let articleEl = createRecipePreviewElement(name, scr);
          main.appendChild(articleEl);
        });
      }

    }
    catch (err) {
      throw new Error(`Failed to fetch info: server is down!\n${err}`);
    }
  }

  function showRecipe(evtProp) {
    let articleMain = evtProp.target;
    articleMain.classList.remove("preview")
    const num = articleMain.children[0].children[0].textContent.replace("Recipe ", "");
    let recipeID = `0${num}`;
    let baseURL = `http://localhost:3030/jsonstore/cookbook/details/${recipeID}`;
    
    
    async function retriveDetails() {
      try {
        const response = await fetch(baseURL, { method: "GET" });
        const data = await response.json();
        console.log(data);

        if (response.status !== 200) {
          throw new Error(`Status code: ${response.status} ${response.statusText}`)
        } else {
          articleMain.innerHTML = ""
          arr = Object.values(data);
          let title = data.name;
          let ingredientsArr = data.ingredients //array
          let stepsArr = data.steps;
          let imgSrc = data.img;

          //Create and add the h2 title
          let h2Title = document.createElement("h2");
          h2Title.textContent = title;
          articleMain.appendChild(h2Title);

          //Create the outer band DIV
          let divBand = document.createElement("div");
          divBand.classList.add("band")
          articleMain.appendChild(divBand)

          // div thumb
          let divThumb = document.createElement("div");
          divThumb.classList.add("thumb")
          divBand.appendChild(divThumb)

          // img
          const img = document.createElement("img");
          img.src = `${imgSrc}`;
          divThumb.appendChild(img)

          // div ingredients
          let divIngr = document.createElement("div");
          divIngr.classList.add("ingredients")
          divBand.appendChild(divIngr)

          // ingredients ul and h3
          let ul = document.createElement("ul")
          let h3 = document.createElement("h3")
          h3.textContent = "Ingredients:"
          divIngr.appendChild(ul,h3)

          // list all ingredients
          ingredientsArr.forEach(ingredient => {
            const li = document.createElement("li")
            li.textContent = ingredient;
            ul.appendChild(li)
          });

          // div description
          let divDescription = document.createElement("div");
          divDescription.classList.add("description");
          articleMain.appendChild(divDescription)

          // h3 Preparation
          const h3Prep = document.createElement("h3");
          h3Prep.textContent = "Preparation:"
          divDescription.appendChild(h3Prep)

          stepsArr.forEach(step => {
            const p = document.createElement("p");
            p.textContent = step;
            divDescription.appendChild(p);
          });

        }

      }
      catch (err) {
        throw new Error(`Failed to fetch info: server is down!\n${err}`);
      }
    }

    retriveDetails()
  }

  retrieveInfo()

};

