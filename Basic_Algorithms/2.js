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

//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// Falsy Bouncer
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

// Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

// Mutations
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}