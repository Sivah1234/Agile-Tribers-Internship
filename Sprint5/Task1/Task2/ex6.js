
function logPersonDetails(person) {
    const { name, age, city } = person;
    console.log('EX6 Output:',name);
    console.log(age);
    console.log(city);
  }
  logPersonDetails({ name: 'Alice', age: 25, city: 'New York' });