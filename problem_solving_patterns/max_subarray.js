// Given an array of integers and a number, finds the maximum sum of a subarray with the 
// length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function maxSubarraySum(arr, len) {
    if (len > arr.length) {
        return null;
    }

    let maxSum = arr.slice(0, len).reduce((a, b) => a + b, 0);
    let prevSum = maxSum;

    for (let i = 0; i < arr.length - len; i++) {
        let nextSum = prevSum - arr[i] + arr[i + len];
        // console.log(`i = ${i} - Arr[i]: ${arr[i]} / Arr[i+len]: ${arr[i + len]} / Max: ${maxSum} / New: ${nextSum}`);
        if (nextSum > maxSum) {
            maxSum = nextSum;
        }
        prevSum = nextSum;
    }

    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));      // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))        // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5
console.log(maxSubarraySum([2,3], 3));                   // null