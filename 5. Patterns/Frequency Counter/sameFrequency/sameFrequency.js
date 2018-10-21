function sameFrequency(num1, num2) {
    let num1String = num1.toString();
    let num2String = num2.toString();
    if (num1String.length !== num2String.length) return false;

    let counter = {};

    // Add digits & their frequencies to counter
    for (let digit of num1String) {
        counter[digit] ? counter[digit]++ : counter[digit] = 1;
    }

    // Now, we have a counter with key = each digit, val = freq. of digit
    for (let digit of num2String) {
        if (!(digit in counter)) return false;
        if (counter[digit] == 0) return false;

        counter[digit]--;
    }

    return true;
}
