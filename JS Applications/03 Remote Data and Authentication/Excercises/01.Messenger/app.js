function attachEvents() {
  // capture elements
  const inputFieldsArr = document.querySelectorAll("input");
  const nameInput = inputFieldsArr[0];
  const messageInput = inputFieldsArr[1];
  const sendBtn = inputFieldsArr[2];
  const refreshBtn = inputFieldsArr[3];
  const textArea = document.getElementById('messages')
  const baseURL = `http://localhost:3030/jsonstore/messenger`;

  // attach event listeners
  sendBtn.addEventListener("click", sendMessage)
  refreshBtn.addEventListener("click", refreshMessages)

  async function sendMessage(e) {
    const message = {
      author: nameInput.value,
      content: messageInput.value,
    }

    const reqBody = {
      method: 'POST',
      headers: {
        'content-type': 'application/json' // for REST API calls that work with JSON
      }, 
      body: JSON.stringify(message) // whatever you want to create as info can also be directly an object
    }

    if (nameInput.value && messageInput.value) {
      let request = await fetch(baseURL, reqBody);
      let response = await request.json();

      if(request.status === 200){
        nameInput.value = '';
        messageInput.value = '';
      } else {
        alert(`Error sending message: ${request.status}`); 
      }

    }
  }

  async function refreshMessages(e) {
    textArea.value = '';
    let request = await fetch(baseURL);
    let response = await request.json();
    let arrResult = [];
    for (const message in response) {
      const author = response[message].author;
      const text = response[message].content;

      arrResult.push(`${author}: ${text}`)
    }

    textArea.value = arrResult.join('\n');

  }

}

attachEvents();

// The url for the requests - http://localhost:3030/jsonstore/messenger


