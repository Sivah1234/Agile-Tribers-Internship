
function findFirstPositive(numbers) {
    return numbers.find(num => num > 0);
  }
  
  const numbers = [-5, -3, 0, 9, 2];
  console.log('Task 1 Output:', findFirstPositive(numbers)); 