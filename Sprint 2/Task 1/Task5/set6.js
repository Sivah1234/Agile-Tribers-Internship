function average(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum / array.length;
}
console.log(average([10, 20, 30, 40, 50]));
