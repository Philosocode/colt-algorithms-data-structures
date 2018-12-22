function reverse(str) {
    if (str === "") return "";
    const strLen = str.length;

    return str[strLen - 1] + reverse(str.slice(0, strLen - 1));
}
