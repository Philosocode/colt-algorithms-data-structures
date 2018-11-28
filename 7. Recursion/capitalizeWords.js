function capitalizeWords(arr, res = []) {
    if (!arr.length) return res;

    res.push(arr[0].toUpperCase());

    return capitalizeWords(arr.slice(1), res);
}
