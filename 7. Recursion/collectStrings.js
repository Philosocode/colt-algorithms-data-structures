function isObject(val) { if (val === null) return false; return ( (typeof val === 'function') || (typeof val === 'object') );}
function objectIsEmpty(obj) { return Object.keys(obj).length === 0; }
function isString(val) { return typeof val === "string"; }

function collectStrings(obj) {
  const res = [];

  function helper(anObj) {
    if (objectIsEmpty(anObj)) return;

    for (let key in anObj) {

      // CASE 1: Value is a string
      if (isString(anObj[key])) {
        res.push(anObj[key]);
      }

      // CASE 2: Value is another OBJ
      if (isObject(anObj[key])) {
        helper(anObj[key]);
      }

    }
  }

  helper(obj);

  return res;
}

function collectStringsColt(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])