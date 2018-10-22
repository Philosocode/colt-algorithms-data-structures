function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) swap(arr, i, j);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[j+1];
  arr[j+1] = arr[j];
  arr[j] = temp;
}

let arr = [4,5,3,1,2];
bubbleSort(arr);
console.log(arr);
