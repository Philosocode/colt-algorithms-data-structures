function areThereDuplicates(...args) {
    const sortedArr = args.sort();
    let curr = 0;

    for (let scout = 1; scout <= sortedArr.length - 1; scout++) {
        if (sortedArr[curr] === sortedArr[scout]) return true;

        curr = scout;
    }

    return false;
}
