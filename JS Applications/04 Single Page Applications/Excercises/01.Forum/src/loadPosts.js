import { createHTMLElement } from "./createHTMLElement.js";
import { viewTopic } from "./viewTopic.js"; 

export async function loadPosts() {
  const url = "http://localhost:3030/jsonstore/collections/myboard/posts"
  const divTopics = document.querySelector(".topic-container");
  divTopics.innerHTML = '';


  try{
    const request = await fetch(url, {method: "GET"});

    if (request.status === 200){
      const response = await request.json();

      for (const post in response) {
        if (response.hasOwnProperty(post)) {
          const divTopNameWrap = createHTMLElement("div",{class: "topic-name-wrapper"});
          const divTopicName = createHTMLElement("div",{class: "topic-name"});
          const aTag = createHTMLElement("a",{class: "normal", href: "#", id: `${response[post]._id}`});
          const h2 = createHTMLElement("h2",{textContent: `${response[post].title}`});
          const divColumns = createHTMLElement("div",{class: "columns"});
          const div = createHTMLElement("div");
          const pDate = createHTMLElement("p",{textContent: "Date: "});
          const time = createHTMLElement("time",{textContent: `${response[post].creationDate}`});
          const divUserName = createHTMLElement("div",{class: "nick-name"});
          const pUser = createHTMLElement("p",{textContent: "User: "});
          const span = createHTMLElement("span",{textContent: `${response[post].username}` });
          
          divTopNameWrap.appendChild(divTopicName);
          divTopicName.appendChild(aTag);
          divTopicName.appendChild(divColumns);
          aTag.appendChild(h2);
          divColumns.appendChild(div)
          div.appendChild(pDate);
          pDate.appendChild(time);
          div.appendChild(divUserName);
          divUserName.appendChild(pUser);
          pUser.appendChild(span);
          
          aTag.addEventListener("click", viewTopic);
          divTopics.appendChild(divTopNameWrap)
        }
      }

    } else {
      alert(`Server error: ${request.status} Message: ${request.message}`)
    }
    
  }
  catch(err){
    alert(err.message);
  }
  
}