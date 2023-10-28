function loadRepos() {
   console.log("TODO...");
   const divEl = document.getElementById("res");
   let url = 'https://api.github.com/users/testnakov/repos';
   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener("readystatechange",function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200){
         divEl.textContent = httpRequest.responseText;
      }
   });

   httpRequest.open('GET', url);
   httpRequest.send();
}