// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;

  for(var i = arr.length; i > 0; i--){
    noSwaps = true;

    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];

        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);