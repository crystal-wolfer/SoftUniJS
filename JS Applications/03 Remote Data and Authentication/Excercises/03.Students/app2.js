function students() {

  const url = 'http://localhost:3030/jsonstore/collections/students/';

  const tbody = document.querySelector('tbody');
  let studentsData = [];
  let studentEntry = '';

  loadStudents();
  document.querySelector('#form').addEventListener('submit', submit);

  async function loadStudents() {
      tbody.innerHTML = '';
      const response = await fetch(url);
      const data = await response.json();
      for (let student of Object.values(data)) {
          studentEntry =
              `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.facultyNumber}</td><td>${student.grade}</td></tr>`;
          studentsData.push(studentEntry);
      }

      tbody.innerHTML = studentsData.join('');
      studentsData = [];
  }

  async function submit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries([...formData.entries()]);

      if (Object.values(data).some(x => x === '')) return;

      const response = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })

      if(response.ok){
          event.target.reset();
          loadStudents();
      }
  }
}

students();