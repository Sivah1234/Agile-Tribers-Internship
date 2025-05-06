
function findFirstEvenNumber(numbers) {
    return numbers.find(num => num % 2 === 0);
  }
  
  const numbers = [1, 3, 7, 10, 2];
  console.log('Task 6 Output:', findFirstEvenNumber(numbers));