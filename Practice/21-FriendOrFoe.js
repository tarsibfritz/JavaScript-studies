// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
    // Filter the friends array to include only names with exactly 4 characters
    return friends.filter(name => name.length === 4);
}
  
console.log(friend(["Alex", "Hugo", "Ana", "Carol", "Tina"]));