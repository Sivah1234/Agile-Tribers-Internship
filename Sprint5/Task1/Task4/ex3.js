
function findEmployeeById(employees, id) {
    return employees.find(employee => employee.id === id);
  }
  
  const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
  ];
  console.log("Task 3 Output:", findEmployeeById(employees, 2));