
function getEvenSquares(numbers) {
    return numbers
      .filter(num => num % 2 === 0)
      .map(num => num ** 2);
  }
  const numbers1 = [1, 2, 3, 4, 5, 6];
  console.log("Task 6 Output:", getEvenSquares(numbers));