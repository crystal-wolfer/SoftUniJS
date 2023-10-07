function notify(message) {
  // collect elements
  const notification = document.querySelector('#notification');
  notification.textContent = message;
  notification.style.display = 'block';

  notification.addEventListener('click', disappearHandler);

  function disappearHandler() {
    notification.textContent = '';
    notification.style.display = 'none';
  }
}