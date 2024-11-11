// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    let str = x.replace(/\s/g, "")
    return str
}
  
console.log(noSpace("The quick brown fox jumps over the lazy dog"))