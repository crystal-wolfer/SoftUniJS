window.addEventListener('load', solve);

function solve() {
	// capture elements
	const carModelInput = document.getElementById('car-model');
	const carYearInput = document.getElementById('car-year');
	const partNameInput = document.getElementById('part-name');
	const partNumInput = document.getElementById('part-number');
	const conditionInput = document.getElementById('condition');
	const nextBtn = document.getElementById('next-btn');
	const partInfoUl = document.querySelector('.info-list');
	const confirmListUl = document.querySelector('.confirm-list');
	const completeImg = document.getElementById('complete-img');
	const completeP = document.getElementById('complete-text');

	// attach event listener to next button
	nextBtn.addEventListener('click', nextBtnHandler);

	// function to create the html list structure for the part Info section
	function createPartListItem(carModel, carYear, partName, partNumber, condition) {
		// Create the <li> element with class "part-content"
		const listItem = document.createElement('li');
		listItem.className = 'part-content';

		// Create the <article> element
		const article = document.createElement('article');

		// Create <p> elements for each piece of information
		const carModelP = document.createElement('p');
		carModelP.textContent = 'Car Model: ' + carModel;

		const carYearP = document.createElement('p');
		carYearP.textContent = 'Car Year: ' + carYear;

		const partNameP = document.createElement('p');
		partNameP.textContent = 'Part Name: ' + partName;

		const partNumberP = document.createElement('p');
		partNumberP.textContent = 'Part Number: ' + partNumber;

		const conditionP = document.createElement('p');
		conditionP.textContent = 'Condition: ' + condition;

		// Create the "Edit" button
		const editButton = document.createElement('button');
		editButton.className = 'edit-btn';
		editButton.textContent = 'Edit';

		// Create the "Continue" button
		const continueButton = document.createElement('button');
		continueButton.className = 'continue-btn';
		continueButton.textContent = 'Continue';

		// Append <p> elements and buttons to the <article>
		article.appendChild(carModelP);
		article.appendChild(carYearP);
		article.appendChild(partNameP);
		article.appendChild(partNumberP);
		article.appendChild(conditionP);

		// Append the <article> and buttons to the <li>
		listItem.appendChild(article);
		listItem.appendChild(editButton);
		listItem.appendChild(continueButton);

		return listItem;
	}

	// function to make the html structure for the confirm section
	function confirmPartListItem(model, year, partName, partNumber, condition) {
		// Create the list item element
		const listItem = document.createElement("li");
		listItem.classList.add("part-content");
	
		// Create the article element
		const article = document.createElement("article");
	
		// Create and set the <p> elements
		const modelPara = document.createElement("p");
		modelPara.textContent = `Car Model: ${model}`;
		const yearPara = document.createElement("p");
		yearPara.textContent = `Car Year: ${year}`;
		const namePara = document.createElement("p");
		namePara.textContent = `Part Name: ${partName}`;
		const numberPara = document.createElement("p");
		numberPara.textContent = `Part Number: ${partNumber}`;
		const conditionPara = document.createElement("p");
		conditionPara.textContent = `Condition: ${condition}`;
	
		// Append the <p> elements to the article
		article.appendChild(modelPara);
		article.appendChild(yearPara);
		article.appendChild(namePara);
		article.appendChild(numberPara);
		article.appendChild(conditionPara);
	
		// Create the buttons
		const confirmButton = document.createElement("button");
		confirmButton.classList.add("confirm-btn");
		confirmButton.textContent = "Confirm";
		const cancelButton = document.createElement("button");
		cancelButton.classList.add("cancel-btn");
		cancelButton.textContent = "Cancel";
	
		// Append the article and buttons to the list item
		listItem.appendChild(article);
		listItem.appendChild(confirmButton);
		listItem.appendChild(cancelButton);
	
		return listItem;
	}
	

	function nextBtnHandler(evtProp) {
		evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)

		// valiidate input
		let carYear = Number(carYearInput.value);
		if (carModelInput.value && carYearInput.value && partNameInput.value && partNumInput.value && conditionInput.value && (carYear >= 1980 && carYear <= 2023)) {
			let carModel = carModelInput.value;
			let partName = partNameInput.value;
			let partNumber = Number(partNumInput.value);
			let condition = conditionInput.value;

			console.log(partInfoUl);
			console.log(confirmListUl);


			// listing the info in the Part Info section
			let listItem = createPartListItem(carModel, carYear, partName, partNumber, condition)
			partInfoUl.appendChild(listItem);

			completeImg.style.visibility = "hidden";
			completeP.textContent = ''; 


			// clear the inputs
			carModelInput.value = '';
			carYearInput.value = '';
			partNameInput.value = '';
			partNumInput.value = '';
			conditionInput.value = '';

			// disable the Next button
			nextBtn.disabled = true;

			// attach event listeners to the buttons
			let editBtn = listItem.querySelector('.edit-btn');
			let continueBtn = listItem.querySelector('.continue-btn');

			editBtn.addEventListener('click', editHandler);
			continueBtn.addEventListener('click', continueHandler);
		}
	}

	function editHandler(evtProp){
		let liItem = evtProp.target.parentElement
		let article = evtProp.target.parentElement.children[0];

		carModelInput.value = article.children[0].textContent.replace("Car Model: ","");
		carYearInput.value = article.children[1].textContent.replace("Car Year: ","");
		partNameInput.value = article.children[2].textContent.replace("Part Name: ","");
		partNumInput.value = article.children[3].textContent.replace("Part Number: ","");
		conditionInput.value = article.children[4].textContent.replace("Condition: ","");

		partInfoUl.removeChild(liItem);
		nextBtn.disabled = false;
	}

	function continueHandler(evtProp){
		let partInfoliItem = evtProp.target.parentElement
		let article = evtProp.target.parentElement.children[0];

		let model = article.children[0].textContent.replace("Car Model: ","");
		let year = article.children[1].textContent.replace("Car Year: ","");
		let partName = article.children[2].textContent.replace("Part Name: ","");
		let partNum = article.children[3].textContent.replace("Part Number: ","");
		let condition = article.children[4].textContent.replace("Condition: ","");

		let confirmLiItem = confirmPartListItem(model, year, partName, partNum, condition);
		confirmListUl.appendChild(confirmLiItem);
		partInfoUl.removeChild(partInfoliItem);


		// attach event listeners to the buttons
		let confirmBtn = confirmLiItem.querySelector('.confirm-btn');
		let cancelBtn = confirmLiItem.querySelector('.cancel-btn');

		confirmBtn.addEventListener('click', confrimHandler);
		cancelBtn.addEventListener('click', cancelHandler);
	}

	function confrimHandler(evtProp) {
		let confirmliItem = evtProp.target.parentElement
		confirmListUl.removeChild(confirmliItem);
		completeImg.style.visibility = "visible";
		completeP.textContent = 'Part is Ordered!';
		nextBtn.disabled = false;
	}

	function cancelHandler(evtProp) {
		let confirmliItem = evtProp.target.parentElement
		confirmListUl.removeChild(confirmliItem);
		nextBtn.disabled = false;
	}
}


// 1h 07 min

