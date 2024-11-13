// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 === 0);  // Keep only elements at even indices
  }
  
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7]));  // Output:  1, 3, 5, 7