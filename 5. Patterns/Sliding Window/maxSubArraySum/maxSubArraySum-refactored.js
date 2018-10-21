function maxSubArraySum(arr, num) {
  // num can't be greater than arr.length
  if (arr.length < num) return null;

  // Keep track of greatest sum and current sum
  let maxSum = 0;
  let tempSum = 0;

  // Start: get sum of first <num> digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // maxSum will be compared w/ tempSum
  tempSum = maxSum;

  // Now for the fun part...
  for (let i = num; i < arr.length; i++) {
    // Remove the first entry in the "window"
    // Add the next entry to the window
    // If the new sum is greater than current, then change maxSum
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

function maxSubarraySum(arr, num) {
	// If 
  if (arr.length < num) return null;

  let total = 0;

  for (let i = 0; i < num; i++) {
     total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }

  return total;
}