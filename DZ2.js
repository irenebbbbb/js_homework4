function pad(input, repeatedString, targetLength, direction) {
    const inputLength = input.length;
    const repeatedStringLength = repeatedString.length;
    const padCount = targetLength - inputLength;

    const padString = repeatedString.repeat(padCount / repeatedStringLength + 1).slice(0, padCount);

    if (direction) {
        return padString + input;
    }
    else {
        return input + padString;
    }
}

const test1 = pad('qwerty', '+', 8, true);
const test2 = pad('qwerty', '+', 8, false);
console.log(`my pad start: ${test1}`);
console.log(`my pad end: ${test2}`);