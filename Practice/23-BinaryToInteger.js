// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    // Join the array elements into a single binary string
    let binaryValue = arr.join('');
    // Join the array elements into a single binary string
    let numberValue = parseInt(binaryValue, 2);
    return numberValue;
};
  
console.log(binaryArrayToNumber([0, 0, 0, 1, 0]))