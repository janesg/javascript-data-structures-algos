// Take a sorted (lowest to highest) array of integers
// Return the count of unique values

function countUniqueValues(arr) {
    let idxStart = 0;
    let idx = 1;
    let uniqueValues = 1;

    if (arr === false || arr.length === 0) {
        return 0;
    }

    while (idx < arr.length) {
        if (arr[idxStart] === arr[idx]) {
            idx++;
        } else {
            idxStart = idx;
            uniqueValues++;
        }
    }

    return uniqueValues;
}

console.log(countUniqueValues([1,1,1,1,2]));            // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,12,12]));  // 6
console.log(countUniqueValues([]));                     // 0
console.log(countUniqueValues([-2, -1,-1,0,1]));        // 4