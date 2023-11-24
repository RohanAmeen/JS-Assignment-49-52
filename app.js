  // Task 1: Signup Form
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = `
      <h2>User Data</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
  }

  //   function submitForm() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     // Display form data
//     alert(`Name: ${name}\nEmail: ${email}`);
//   }

  // Task 2: Item Details
  function toggleDetails() {
    const details = document.querySelector('.details');
    details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
  }

  // Task 3: Student Details Table
  function addStudent() {
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = `<button onclick="deleteStudent(this)">Delete</button> <button onclick="editStudent(this)">Edit</button>`;
    // Clear the form
    document.getElementById('studentForm').reset();
  }

  function deleteStudent(row) {
    const index = row.parentNode.parentNode.rowIndex;
    document.getElementById('studentTable').deleteRow(index);
  }

  function editStudent(row) {
    const index = row.parentNode.parentNode.rowIndex;
    const name = document.getElementById('studentTable').rows[index].cells[0].innerHTML;
    const age = document.getElementById('studentTable').rows[index].cells[1].innerHTML;
    // Fill the edit form with the values
    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;
    // Show the edit form
    document.getElementById('editForm').style.display = 'block';
    // Save the index for update
    document.getElementById('editForm').dataset.index = index;
  }

  function updateStudent() {
    const index = document.getElementById('editForm').dataset.index;
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    document.getElementById('studentTable').rows[index].cells[0].innerHTML = name;
    document.getElementById('studentTable').rows[index].cells[1].innerHTML = age;
    // Hide the edit form
    document.getElementById('editForm').style.display = 'none';
    // Clear the form
    document.getElementById('editForm').reset();
  }

  function cancelEdit() {
    // Hide the edit form
    document.getElementById('editForm').style.display = 'none';
    // Clear the form
    document.getElementById('editForm').reset();
  }