// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)  // creates a substring of str starting from index 1 (the second character) and going up to the second-to-last character (not including the last character). 
};
  
console.log(removeChar("Calopsita"))