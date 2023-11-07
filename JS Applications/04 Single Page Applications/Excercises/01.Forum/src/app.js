import { createPost } from "./createPost.js";
import { loadPosts } from "./loadPosts.js";
const divContainer = document.querySelector(".container");
const main = document.querySelector("main");
const divSubmitTopic = document.querySelector(".new-topic-border")
const divTopics = document.querySelector('.topic-container');
main.innerHTML='';


loadHome()
createPost();
loadPosts();

export function loadHome() {
  main.innerHTML='';

  const divCommentsTopics = Array.from(document.querySelectorAll('.comment'));
  const divCommentForm = Array.from(document.querySelectorAll('.comment-form'));

  divCommentsTopics.forEach(commentT => {
    commentT.style.display = 'none';
  });

  divCommentForm.forEach(comment => {
    comment.style.display = 'none';
  });

  main.appendChild(divSubmitTopic);
  main.appendChild(divTopics);
  divSubmitTopic.style.display = 'block';
  divTopics.style.display = 'block';
}
