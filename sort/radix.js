function getDigit(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10; 
}

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

function mostDigits(arr) {
    let maxDigits = 0;

    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }

    return maxDigits;
}

// Only works on array of positive decimal (i.e. base 10) integers
// This is not a comparison sort
// Big O of nk - where n is number of elements and k is number of digits
function radixSort(arr) {
    let iterations = mostDigits(arr);

    for (let k = 0; k < iterations; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        // Put each array element in bucket according to k'th digit
        for (let i = 0; i < arr.length; i++) {
            buckets[getDigit(arr[i], k)].push(arr[i]);
        }

        // Repopulate original array with all bucket entries
        arr = [].concat(...buckets);
    }

    return arr;
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0

console.log(digitCount(1));     // 1
console.log(digitCount(25));    // 2
console.log(digitCount(345));   // 3

console.log(radixSort([23, 3, 678, 12, 8, 4567, 33, 982])); // [3, 8, 12, 23, 33, 678, 982, 4567]