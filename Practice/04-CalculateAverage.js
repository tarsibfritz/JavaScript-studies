// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

function findAverage(number) {
    let sum = 0;
    
    for (let num of number){
      sum += num;  // Add each number to sum
    }
    
    let average = sum / number.length;  // Calculate the average by dividing sum by the length of the array
  
    return average;
}
  
console.log(findAverage([1, 2, 3, 10]))