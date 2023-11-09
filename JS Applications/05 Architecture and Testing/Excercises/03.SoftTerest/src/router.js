// will take care to re-route to the proper location

export function initialize(routes) {
  // add event listener to the nav
  const nav = document.querySelector('nav')
  nav.addEventListener('click', onNavigate);

  // stote the list items before removing them
  const liCollections = {
    userA: nav.querySelectorAll(".user"),
    guestA: nav.querySelectorAll(".guest")
  }


  // an object that holds the methods inside the onNavigate function
  const context = {
    goTo,
    renderSection,
    updateNav,
  }

  function renderSection(section) {
    document.getElementById("root").replaceChildren(section)
  }


  function onNavigate(event) {
    // setting the trigger only when an a tag is clicked
    if (event.target.tagName === 'A' && event.target.href) {
      event.preventDefault();

      //change the active status of the navigation element
      const allAtags = Array.from(document.querySelectorAll('nav a'))

      const clean = allAtags.map(a => {
        if (a.classList.contains('active')) {
          a.classList.remove('active')
        }
      })

      event.target.classList.add('active');

      //construct URL object
      const urlObj = new URL(event.target.href)
      goTo(urlObj.pathname);

    }

  }

  function goTo(url, ...params) {

    const section = routes[url]; // returns the /*text* path that appears after the home page url this is needed to get the functionality we want to render

    // this will make sure that the links work only if they are attached to a function
    if (typeof section === "function") {
      // if we pass the context obj we will be able to inject it where necessary
      section(context, ...params);
    }

  }

  function updateNav() {
    const user = sessionStorage.getItem("user");
    const ul = document.querySelector('ul')

    if (user) {
      liCollections.userA.forEach((e) => {
        ul.appendChild(e.parentNode);
      });


      liCollections.guestA.forEach((e) => {
        if (ul.contains(e)) {
          ul.removeChild(e.parentNode);
        }
      });
    } else {
      liCollections.guestA.forEach((e) => {
        ul.appendChild(e.parentNode);
      });
      liCollections.userA.forEach((e) => {
        if (ul.contains(e)) {
          ul.removeChild(e.parentNode);
        }
      });
    }

  }

  // when the initialize function is called it will return the onNavigate methods
  return context
}