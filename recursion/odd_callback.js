// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to 
// the callback. Otherwise it returns false.

function someRecursive(arr, f) {
    if (arr.length === 0) {
        return false;
    }

    return f(arr[0]) || someRecursive(arr.slice(1), f);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd))            // true
console.log(someRecursive([4,6,8,9], isOdd))            // true
console.log(someRecursive([4,6,8], isOdd))              // false
console.log(someRecursive([4,6,8], val => val > 10));   // false