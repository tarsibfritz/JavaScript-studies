// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let totalSum = 0;  // This variable will hold the sum of the squares of each number in the numbers array. Starting it at 0 allows us to accumulate values by adding to it as we loop through the array.
    
    for (let num of numbers){  // for...of loop, which iterates over each element in the numbers array. In each iteration, the current element (a number) is assigned to the variable num.
      totalSum += Math.pow(num, 2);
    }
    
    return totalSum;  // Returns the final value of totalSum
  }
  
  console.log(squareSum([1, 2, 3]));  // Calls the squareSum function with [1, 2, 3] as the argument.