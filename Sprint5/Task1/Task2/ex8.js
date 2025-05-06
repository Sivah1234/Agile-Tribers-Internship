
function sumRestParams(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log('EX8 Output:',sumRestParams(1, 2, 3, 4, 5)); 