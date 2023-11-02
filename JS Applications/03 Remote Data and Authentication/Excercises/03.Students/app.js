//cpature elements
const tBody = document.querySelector("#results > tbody");
const form = document.getElementById("form");
form.addEventListener("submit", loadStudents);
const URL = 'http://localhost:3030/jsonstore/collections/students'

function returnNewRowElement(fName, lName, facNum, grade) {
  let newRowHTML = '<tr>' +
    `<td>${fName}</td>` +
    `<td>${lName}</td>` +
    `<td>${facNum}</td>` +
    `<td>${grade}</td>` +
    '</tr>';
  
  return newRowHTML;
}

function loadStudents(e) {
  e.preventDefault();
  let formData = new FormData(form);

  const fName = formData.get('firstName')
  const lName = formData.get('lastName')
  const facNum = formData.get('facultyNumber')
  const grade = formData.get('grade')

  if (fName && lName && grade && facNum) {
    const postReq = new XMLHttpRequest();
    const obj = {
      "firstName": fName,
      "lastName": lName,
      "facultyNumber": facNum,
      "grade": Number(grade).toFixed(2),
    }

    // send tht data to the server
    postReq.open('POST', URL, false);
    postReq.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify(obj);
    postReq.send(data);

    const getReq = new XMLHttpRequest();
    getReq.open('GET', URL);
    getReq.send();

    getReq.addEventListener("readystatechange", function () {
      if (getReq.readyState === 4 && getReq.status === 200) {
        const result = JSON.parse(getReq.responseText);
        for (const key in result) {
          const fName = result[key].firstName;
          const lName = result[key].lastName;
          const facNum = result[key].facultyNumber;
          const grade = result[key].grade

          let row = returnNewRowElement(fName, lName, facNum, grade);
          tBody.innerHTML += row;
        }

        form.reset() // resets the form inputs
      }
    });
  }

};

//http://localhost:3030/jsonstore/collections/students
