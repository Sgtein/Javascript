// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum){
       return [];
    } else {
      const num = rangeOfNumbers(startNum, endNum - 1);
      num.push(endNum);
      return num;
    }
  
  };
  