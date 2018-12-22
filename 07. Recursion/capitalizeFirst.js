function capitalizeFirst (arr) {
    const res = [];

    function recurse(arrOfStrings) {
        if (!arrOfStrings.length) return;

        const str = arrOfStrings[0];

        res.push(str.charAt(0).toUpperCase() + str.slice(1));
        recurse(arrOfStrings.slice(1));
    }

    recurse(arr);

    return res;
}

function capitalizeFirstColt (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }

    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

function capitalizeWords (array) {
  if (array.length === 1) return [array[0].toUpperCase()];

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
