async function loadCommits() {
  const userName = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const ul = document.getElementById("commits");
  const URL = `https://api.github.com/repos/${userName}/${repo}/commits`

  ul.innerHTML = null;

  try {
    const response = await fetch(URL, {method: 'GET'})
    const data = await response.json();

    // Handle error response from GitHub API
    if (response.status !== 200){
      const li = document.createElement("li");
      li.textContent = `Status code: ${response.status} (Not Found)`;
      ul.appendChild(li);
    } else {
      let dataArray = Object.values(data);

      dataArray.forEach(element => {
        const li = document.createElement("li");
        li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
        ul.appendChild(li);
      });
    }
  }
  catch (err) {
    const li = document.createElement("li");
    li.textContent = `Fetch Error: ${err}`;
    ul.appendChild(li);
  }
}

//https://api.github.com/repos/<username>/<repository>/commits

//Flappy-Nakov
//TestRepoVS
//"<commit.author.name>: <commit.message>"
//testnakov