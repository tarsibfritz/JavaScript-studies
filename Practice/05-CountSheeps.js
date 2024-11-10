// If you can't sleep, just count sheeps!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    let result = ''  // Empty string variable result which will be used to accumulate the string values (i.e., the "sheep" counting sequence) as the loop runs.   

    for (let i = 1; i <= num; i++) {  // for loop that will run from i = 1 up to i = num and increases i by 1 after each loop iteration.
      result += `${i} sheep...`;
    }
    
    return result;
}
  
console.log(countSheep(5)); 