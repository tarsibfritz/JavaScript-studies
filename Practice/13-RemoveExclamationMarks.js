// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let removedExclamation = s.replace(/!/g, "");  // '/!/g' = global regular expression to replace all exclamation marks
    return removedExclamation;
  }
  
  console.log(removeExclamationMarks("Hello World! Hi!"));