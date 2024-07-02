document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let position = document.getElementById('position').value;
    let department = document.getElementById('department').value;
    let startDate = document.getElementById('startDate').value;

    if(name && email && position && department && startDate) {
        let employeeData = {
            name: name,
            email: email,
            position: position,
            department: department,
            startDate: startDate
        };

        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(employeeData);
        localStorage.setItem('employees', JSON.stringify(employees));

        document.getElementById('message').textContent = 'Employee data submitted successfully!';
        this.reset();
    } else {
        document.getElementById('message').textContent = 'Please fill in all the fields.';
    }
});
