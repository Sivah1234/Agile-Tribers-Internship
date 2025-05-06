
function removeDuplicates(numbers) {
  const uniqueNumbers = [...new Set(numbers)];
  
  return uniqueNumbers;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];

const result1 = removeDuplicates(numbers);
console.log(result1); 