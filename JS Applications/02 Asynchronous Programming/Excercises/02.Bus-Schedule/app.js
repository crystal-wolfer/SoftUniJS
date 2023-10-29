function solve() {
  // capture elements
  const info = document.querySelector(".info");
  const baseURL = "http://localhost:3030/jsonstore/bus/schedule/"
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  let stopId = 'depot'
  let previousStop = '';

  function depart() {
    async function retrieveDepart() {
      try {
        let curURL = `${baseURL}${stopId}`
        const response = await fetch(curURL, { method: "GET" });
        const data = await response.json();

        if (response.status !== 200) {
          info.textContent = `Error`;
        } else {
          previousStop = stopId;
          info.textContent = `Next stop ${data.name}`;
          departBtn.disabled = true;
          arriveBtn.disabled = false;
          stopId = data.next;
          console.log(stopId);
        }

      }
      catch (err) {
        info.textContent = `Fetching Error`;
      }
    }
    retrieveDepart()
  }

  function arrive() {
    async function retrieveArrive() {
      try {
        let curURL = `${baseURL}${previousStop}`
        const response = await fetch(curURL, { method: "GET" });
        const data = await response.json();

        if (response.status !== 200) {
          info.textContent = `Error`;
        } else {
          info.textContent = `Arriving at ${data.name}`;
          departBtn.disabled = false;
          arriveBtn.disabled = true;
        }

      }
      catch (err) {
        info.textContent = `Fetching Error`;
      }
    }
    retrieveArrive()
  }

  return {
    depart,
    arrive
  };
}

let result = solve();