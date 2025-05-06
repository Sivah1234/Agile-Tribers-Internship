
function calculateProduct(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
  }
  
  const numbers1 = [1, 2, 3, 4, 5];
  const result3 = calculateProduct(numbers1);
  console.log(result3);