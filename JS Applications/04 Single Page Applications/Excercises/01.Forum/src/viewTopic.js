import { loadHome } from "./app.js";
import { createHTMLElement } from "./createHTMLElement.js";
import  * as Utils  from "./utils.js";

export async function viewTopic(e) {
  e.preventDefault();
  const id = e.target.parentElement.getAttribute("id");
  const main = document.querySelector('main');
  const divHome = document.querySelector('.new-topic-border')
  const divTopics = document.querySelector('.topic-container');
  divHome.style.display = 'none';
  divTopics.style.display = 'none';
  const aHome = document.querySelector('li > a');
  aHome.addEventListener('click', loadHome)
  const url = `http://localhost:3030/jsonstore/collections/myboard/posts`

  
  try {
    const request = await fetch(url, { method: "GET" });

    if (request.status === 200) {
      const response = await request.json();

      for (const post in response) {
        if (response.hasOwnProperty(post)) {
          // Check if the comment is about this topic
          if (post === id) {
            // Create the post structure and show it
            const divTopic = createHTMLElement('div', { class: 'comment' });
            const divTitle = createHTMLElement('div', { class: 'topic-name', id: post });
            const h2 = createHTMLElement('h2', {textContent:`${response[post].title}` });
            const divHeader = createHTMLElement('div', { class: 'header' });
            const img = createHTMLElement('img', { src: "./static/avatar.png", alt: "avatar" });
            const spanName = createHTMLElement('span', { textContent: `${response[post].username}` });
            const time = createHTMLElement('time', { textContent: `${response[post].creationDate}`});
            const p = createHTMLElement('p');
            const pContent = createHTMLElement('p', { class: "post-content", textContent: `${response[post].postText}` });

            divTopic.appendChild(divTitle);
            divTitle.appendChild(h2);
            divTopic.appendChild(divHeader);
            divHeader.appendChild(img);
            divHeader.appendChild(p);
            divHeader.appendChild(pContent);
            p.appendChild(spanName)
            p.appendChild(document.createTextNode(" posted on "));
            p.appendChild(time)
            main.appendChild(divTopic);
          }
        }
      }

      Utils.loadCommentForm();
      Utils.loadComments();
    } else {
      alert(`Server error: ${request.status} Message: ${request.message}`)
    }
    
  }
  catch (err) {
    alert(err.message);
  }

}