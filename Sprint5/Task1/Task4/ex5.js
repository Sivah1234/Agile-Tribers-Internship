
function describePerson(person) {
    const { firstName, lastName, age } = person;
    return `${firstName} ${lastName} is ${age} years old!`;
  }
  
  const person = { firstName: 'John', lastName: 'Doe', age: 30 };
  console.log("Task 5 Output:", describePerson(person));
  