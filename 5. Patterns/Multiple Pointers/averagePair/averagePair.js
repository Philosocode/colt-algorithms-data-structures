function averagePair(arr, avg) {
		if (arr.length === 0) return false;

    const targetSum = avg * 2;
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let currSum = arr[left] + arr[right];
        
        if (currSum === targetSum) return true;
        if (currSum < targetSum) left++;
        if (currSum > targetSum) right--;
    }
    
    return false;
}