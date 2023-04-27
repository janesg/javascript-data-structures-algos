// Given 2 positive integers, determine whether the 2 numbers have the same frequency of digits

function sameFrequency(int1, int2) {
    const int1Freq = {};
    const int2Freq = {};

    const int1Str = int1.toString();
    const int2Str = int2.toString();

    if (int1Str.length !== int2Str.length) {
        return false;
    }

    for (let c of int1Str) {
        int1Freq[c] = (int1Freq[c] || 0) + 1;
    }

    for (let c of int2Str) {
        int2Freq[c] = (int2Freq[c] || 0) + 1;
    }

    for (let c of int1Str) {
        if (!int2Freq[c]) {
            return false;
        } else {
            if (int2Freq[c] !== int1Freq[c]) {
                return false;
            }
        }
    }

    return true;
}

console.log(sameFrequency(182, 821));   // true
console.log(sameFrequency(34, 14));     // false
console.log(sameFrequency(3589578, 5879385));   // true
console.log(sameFrequency(22, 222));    // false