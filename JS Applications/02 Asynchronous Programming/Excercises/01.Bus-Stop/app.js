function getInfo() {
  //capture elements
  const busStopName = document.querySelector('#stopName');
  const busUL = document.querySelector('#buses');
  const busInput = document.querySelector('#stopId');

  let busNum = busInput.value;
  const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/'

  async function getBusStopInfo() {
    try {
      const fetchURL = `${baseURL}${busNum}`
      const API_Response = await fetch(fetchURL, { method: 'GET' })
      const dataReceived = await API_Response.json();
      // API error response handling
      if (API_Response.status !== 200) {
        busStopName.textContent = `Error`;
      }
      else {
        busStopName.textContent = `${dataReceived.name}`;

        for (const bus in dataReceived.buses) {
          const li = document.createElement("li");

          if (dataReceived.buses.hasOwnProperty(bus)) {
            li.textContent = `Bus ${bus} arrives in ${dataReceived.buses[bus]} minutes`
          } else {
            li.textContent = `No busses are coming`
          }

          busUL.appendChild(li);
        }
      }
    }
    catch (err) {
      busStopName.textContent = 'Error'
    }
  }
  getBusStopInfo()

}