
function getUniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  const result = getUniqueElements([1, 2, 3], [3, 4, 5]);
  console.log("Task 8 Output:", result);