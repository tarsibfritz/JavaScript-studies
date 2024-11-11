// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let words = s.split(" ");  // Split the string by spaces to get each word
    let shortestWord = Math.min(...words.map(word => word.length));  // Map each word to its length, then find the minimum length    
    return shortestWord;
}
  
  console.log(findShort("The quick brown fox jumps over the lazy dog"));