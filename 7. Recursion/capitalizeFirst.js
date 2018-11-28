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

function capitalizeWords (array) {
  if (array.length === 1) return [array[0].toUpperCase()];

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
