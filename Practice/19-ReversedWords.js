// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str) {
    let words = str.split(" ");  // Split the string into an array of words
    let reversedWords = words.reverse();  // Reverse the order of the words
    
    // Join the reversed words back into a single string with a space between each
    return reversedWords.join(" ");
}

console.log(reverseWords("The quick brown fox"));  // Outputs: "fox brown quick The"
