function loadRepos() {
	const baseUrl = 'https://api.github.com/users/'
	const userValue = document.querySelector("#username").value;
	const ulElement = document.querySelector("#repos");
	let URL = `${baseUrl}${userValue}/repos`;

	let request = new Request(URL, {
		method: 'GET'
	}
	)

	async function getRepos() {
		ulElement.innerHTML = null;
		try {
			const response = await fetch(request)
			const data = await response.json();

			if (response.status !== 200) {
				let liEl = document.createElement("li");
				liEl.textContent = `Error: Username ${data.message}`;
				ulElement.appendChild(liEl);
			} else {
				const ulElement = document.querySelector("#repos");
				data.forEach(element => {
					// Create the html elements that will be appended to the UL
					let liEl = document.createElement("li");
					let a = document.createElement("a");
					a.href = element.url;
					a.textContent = element.full_name;

					// append the elements
					liEl.appendChild(a);
					ulElement.appendChild(liEl);
				});
			}

		} catch (err) {
			let liEl = document.createElement("li");
			liEl.textContent = `Fetch failed: ${err}`;
			ulElement.appendChild(liEl);
		}
	}

	getRepos()
}

//testnakov
// https://api.github.com/users/USERNAME/repos