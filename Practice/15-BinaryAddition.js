/*
    Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
    The binary number returned should be a string.
    
    Examples:
    1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
    let sum = a + b;  // Adds a and b in decimal
    return sum.toString(2);  // Converts the sum to binary
}
  
console.log(addBinary(10, 13));  // Outputs "10111"


/* PERSONAL NOTES:
    In JavaScript, toString(2) is used to convert a number to a binary (base-2) string representation.
    By default, numbers in JavaScript are stored in decimal (base-10). The toString() method can take an optional parameter, known as the "radix," which is the base you want to convert the number to:
        # toString(2) converts the number to binary (base-2).
        # toString(10) converts it to decimal (base-10).
        #  toString(16) converts it to hexadecimal (base-16), and so on.
    So, when you use sum.toString(2), JavaScript takes the decimal number sum and translates it into binary, returning a string representation of that binary number.
*/