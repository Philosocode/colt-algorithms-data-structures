function isSubsequence(subStr, fullStr) {
  let subPointer = 0;
  let fullPointer = 0;
  
  while (subPointer < subStr.length - 1) {
      if (subStr[subPointer] === fullStr[fullPointer]) {
          subPointer++;
          fullPointer++;
      } else {
          fullPointer++;
      }
      
      if (fullPointer >= fullStr.length) return false;
  }
  
  return true;
}