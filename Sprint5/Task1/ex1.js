
function squareNumbersTraditional(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i]);
  }
  return result;
}

const squareNumbersArrow = (numbers) => {
  return numbers.map(num => num * num);
};

const input = [1, 2, 3, 4, 5];

const traditionalOutput = squareNumbersTraditional(input);
const arrowOutput = squareNumbersArrow(input);

console.log("Example Input:", input);
console.log("Output using Traditional Function:", traditionalOutput);
console.log("Output using Arrow Function:", arrowOutput);