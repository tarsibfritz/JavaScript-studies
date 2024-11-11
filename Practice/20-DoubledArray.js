// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let doubled = x.map(num => num * 2);
    return doubled;
}
  
console.log(maps([2, 8, 32]));