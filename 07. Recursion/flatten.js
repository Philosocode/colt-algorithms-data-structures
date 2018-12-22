function flatten(arr) {
  const res = [];

  function helper(ary) {
    if (ary.length === 0) return;

    const firstEl = ary[0];

    if (typeof firstEl === "number") res.push(firstEl);
    if (Array.isArray(firstEl)) helper(firstEl);

    helper(ary.slice(1));
  }

  helper(arr);

  return res;
}

function flattenColt(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ])
// flatten([1, [2, [3, 4], [[5]]]])
// flatten([[1],[2],[3]])
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
