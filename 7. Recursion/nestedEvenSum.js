function isObject(val) {
  if (val === null) return false;
  return ( (typeof val === 'function') || (typeof val === 'object') );
}

function objectIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function isEvenNumber(val) {
  if (typeof val !== "number") return false;
  return val % 2 === 0 ? true : false;
}

function nestedEvenSum(obj) {
  let count = 0;

  function helper(anObj) {
    if (objectIsEmpty(anObj)) return;

    for (let key in anObj) {
      if (isEvenNumber(anObj[key])) {
        count += anObj[key];
      } else if (isObject(anObj[key])) {
        helper(anObj[key]);
      }
    }
  }
  
  helper(obj);

  return count;
}

function nestedEvenSumColt(obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

nestedEvenSum(obj2); // 10

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// };

// nestedEvenSum(obj1); // 6