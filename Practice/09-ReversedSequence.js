// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let numArray = []; // Start with an empty array
    
    for (let i = n; i >= 1; i--) { // Loop from n down to 1
      numArray.push(i); // Add each number to the array
    }
    
    return numArray;
};
  
console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]