function capitalizeWords(arr, res = []) {
    if (!arr.length) return res;

    res.push(arr[0].toUpperCase());

    return capitalizeWords(arr.slice(1), res);
}


function capitalizeWordsColt (array) {
    if (array.length === 1) return [array[0].toUpperCase()];

    let res = capitalizeWords(array.slice(0, -1));
    
    res.push(array.slice(array.length-1)[0].toUpperCase());
    
    return res;
}