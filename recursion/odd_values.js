function collectOddValuesHelper(arr) {
    // Result storage defined inside top-level function
    const results = [];

    // Inner recursive helper function
    function helper(arr) {
        // Base case
        if (arr.length === 0) {
            return;
        }

        if (arr[0] % 2 !== 0) {
            results.push(arr[0]);
        }

        return helper(arr.slice(1));
    }

    helper(arr);

    return results;
}

function collectOddValuesPure(arr) {
    const results = [];

    if (arr.length === 0) {
        return results;
    }

    if (arr[0] % 2 !== 0) {
        results.push(arr[0]);
    }

    return results.concat(collectOddValuesPure(arr.slice(1)));
}

console.log(collectOddValuesHelper([0,1,2,3,4,5,6,7,8,9]));
console.log(collectOddValuesPure([0,1,2,3,4,5,6,7,8,9]));