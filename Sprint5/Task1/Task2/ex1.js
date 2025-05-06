
function replaceAllOccurrences(originalString, targetSubstring, newSubstring) {
    return originalString.replaceAll(targetSubstring, newSubstring);
  }

  const inputString = 'apple banana apple grape apple';
  const result = replaceAllOccurrences(inputString, 'apple', 'orange');
  console.log('EX1 Output:',result);