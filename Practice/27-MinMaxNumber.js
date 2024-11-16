// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    let minimunNum = Math.min(...arr);
    let maximunNum = Math.max(...arr);
    return [minimunNum, maximunNum];
}
  
console.log(minMax([2, 3, 8, 19, 52]));