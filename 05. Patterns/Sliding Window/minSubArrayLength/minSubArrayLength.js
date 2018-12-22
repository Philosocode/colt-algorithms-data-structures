function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < arr.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if (total < sum && end < arr.length) {
      total += arr[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end-start);
			total -= arr[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}