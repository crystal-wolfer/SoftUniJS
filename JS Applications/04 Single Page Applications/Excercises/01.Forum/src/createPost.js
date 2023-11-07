import { loadPosts } from "./loadPosts.js";
export function createPost() {
  const form = document.querySelector('form');
  const cancelBtn = document.querySelector('.cancel');
  form.addEventListener('submit', createPostSubmit)
  cancelBtn.addEventListener('click', cleanFields)


  async function createPostSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const title = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    const date = new Date
    const formatedDate = `${date.toDateString()} at ${date.toLocaleTimeString()}`;


    const post = {
      title: title,
      username: username,
      postText: postText,
      creationDate: formatedDate
    }

    const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
    const reqBody = {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }

    if (title && username && postText) {
      try {
        const request = await fetch(url, reqBody);

        if (request.status === 200) {
          const response = await request.json();
          form.reset();
          loadPosts();
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

}

export function cleanFields(e) {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  form.reset() // resets the form inputs
}

