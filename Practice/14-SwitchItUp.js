// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

function switchItUp(number){  
    if (number >= 0 && number <=9 ){
      switch (number){
          case 1:
            return "One";
            break
          case 2:
            return "Two";
            break
          case 3:
            return "Three";
            break
          case 4:
            return "Four";
            break
          case 5:
            return "Five";
            break
          case 6:
            return "Six";
            break
          case 7:
            return "Seven";
            break
          case 8:
            return "Eight";
            break
          case 9:
            return "Nine";
            break
      }
        
    } else {
        console.log("Try again!")
    }
}
  
console.log(switchItUp(9))