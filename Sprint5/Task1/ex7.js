
function findOccurrences(arr, element) {
    return {
      firstOccurrence: arr.indexOf(element),
      lastOccurrence: arr.lastIndexOf(element)
    };
  }
  
  
  const numbers2 = [1, 2, 3, 2, 4, 2, 5];
  const result4 = findOccurrences(numbers2, 2);
  console.log(result4);  