document.addEventListener('DOMContentLoaded', function() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let tbody = document.querySelector('#employeeTable tbody');

    employees.forEach(employee => {
        let row = document.createElement('tr');

        Object.values(employee).forEach(value => {
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
});
