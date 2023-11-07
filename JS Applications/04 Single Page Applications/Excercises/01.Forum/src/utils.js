// Keep reusable functions
import { createHTMLElement } from "./createHTMLElement.js";
import { viewTopic } from "./viewTopic.js";

export function loadCommentForm() {
  const main = document.querySelector('main');
  const divComment = createHTMLElement('div', { class: 'comment-form' });
  const divTItle = createHTMLElement('div', { class: 'header-title' });
  const spanUser = createHTMLElement('span', { class: 'user', textContent: "Leave " });
  const spanNormal = createHTMLElement('span', { class: 'normal', textContent: " a comment:" });

  const form = createHTMLElement('form');
  const divNewTopic = createHTMLElement('div', { class: 'new-topic-content' });
  const textarea = createHTMLElement('textarea', { type: 'text', name: "postText", id: "postText", rows: "8", class: "height" });

  const divNewCommentTItle = createHTMLElement('div', { class: 'new-comment-title' });
  const label = createHTMLElement('label', { for: "username", textContent: "Username" });
  const spanStar = createHTMLElement('span', { class: "red", textContent: "*" });
  const input = createHTMLElement('input', { type: "text", name: "username", id: "username" });

  const divButton = createHTMLElement('div', { class: 'new-topic-buttons' });
  const button = createHTMLElement('button', { class: 'public', textContent: "Post" });

  divComment.appendChild(divTItle)
  divTItle.appendChild(spanUser)
  spanUser.appendChild(spanNormal);
  divComment.appendChild(form);
  form.appendChild(divNewTopic);
  divNewTopic.appendChild(textarea)
  form.appendChild(divNewCommentTItle);
  divNewCommentTItle.append(label, input);
  label.appendChild(spanStar);
  form.appendChild(divButton);
  divButton.appendChild(button);
  button.addEventListener("click", postComment);

  main.appendChild(divComment);
}

async function postComment(e) {
  e.preventDefault();
  const form = e.target.parentElement.parentElement
  const formData = new FormData(form);

  const username = formData.get('username');
  const postText = formData.get('postText');
  const date = new Date
  const formatedDate = `${date.toDateString()} at ${date.toLocaleTimeString()}`;
  const topicId = document.querySelector('.comment .topic-name').id;



  const post = {
    postedBy: username,
    postText: postText,
    creationDate: formatedDate,
    topicId: topicId
  }

  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
  const reqBody = {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  }

  if (username && postText) {
    try {
      const request = await fetch(url, reqBody);

      if (request.status === 200) {
        const response = await request.json();
        form.reset();
        loadComments();
      } else {
        alert(`Server error: ${request.status} Message: ${request.message}`)
      }
    }
    catch (err) {
      alert(err.message);
    }
  } else {
    alert('You must fill all required fields!');
  }
}

export async function loadComments() {
  const form = document.querySelector('.comment-form');
  const divComment = document.querySelector('.comment');
  const topicId = document.querySelector('.comment .topic-name').id;
  const divTopicName = document.querySelector('.comment .topic-name')
  const divTopicHeader = document.querySelector('.comment .header')

  divComment.innerHTML = '';
  divComment.appendChild(divTopicName);
  divComment.appendChild(divTopicHeader);
  

  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";

  try {
    const request = await fetch(url, { method: 'GET' });

    if (request.status === 200) {
      const response = await request.json();

      for (const comment in response) {
        if (response.hasOwnProperty(comment)) {

          if (response[comment].topicId === topicId) {
            // create the comment structure
            const divUserComment = createHTMLElement('div', { id: 'user-comment' })
            const divTopicWrap = createHTMLElement('div', { class: 'topic-name-wrapper' });
            const divTopicName = createHTMLElement('div', { class: 'topic-name' });
            const pName = createHTMLElement('p',)
            const time = createHTMLElement('time', {textContent: `${response[comment].creationDate}`})
            const divPostContent = createHTMLElement('div', {class: 'post-content'});
            const pContent = createHTMLElement('p', {textContent: `${response[comment].postText}`});

            divUserComment.appendChild(divTopicWrap)
            divTopicWrap.appendChild(divTopicName)
            divTopicName.appendChild(pName);
            pName.innerHTML = `<strong>${response[comment].postedBy}</strong> commented on `
            pName.appendChild(time);
            divTopicName.appendChild(divPostContent);
            divPostContent.appendChild(pContent);
            
            divComment.appendChild(divUserComment);
          }

        }
      }




    } else {
      alert(`Server error: ${request.status} Message: ${request.message}`)
    }
  }
  catch (err) {
    alert(err.message);
  }

}