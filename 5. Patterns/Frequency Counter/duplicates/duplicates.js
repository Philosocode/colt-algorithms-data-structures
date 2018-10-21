function areThereDuplicates(...args) {
    const counter = {};

    for (let entry of args) {
        if (counter[entry]) {
            return true;
        }

        counter[entry] = 1;
    }

    return false;
}
