// Reverse a String
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

//   Factorialize a Number
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);

//   Find the Longest Word in a String
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }

    // Confirm the Ending
    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
      
        return str.slice(str.length - target.length) === target;
      }
      
      confirmEnding("He has to give me a new name", "name");

    //   Repeat a String Repeat a String
    function repeatStringNumTimes(str, num) {
        let accumulatedStr = "";
      
        for (let i = 0; i < num; i++) {
          accumulatedStr += str;
        }
      
        return accumulatedStr;
      }

    //   Truncate a String
    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    //   Finders Keepers
      function findElement(arr, func) {
        let num = 0;
      
        for (let i = 0; i < arr.length; i++) {
          num = arr[i];
          if (func(num)) {
            return num;
          }
        }
      
        return undefined;
      }
// Boo Who
      function booWho(bool) {
        return typeof bool === "boolean";
      }
      
      // test here
      booWho(null);