function linearSearch(arr, val) {
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === val) {
            return idx;
        }
    }

    return -1;
}

console.log(linearSearch([-1, 0, 4, -2, 23, -78, 12], 23)); // 4
console.log(linearSearch([-1, 0, 4, -2, 23, -78, 12], 21)); // -1
console.log(linearSearch(['anne', 'enid', 'ethel', 'beryl'], 'ethel')); // 2
console.log(linearSearch(['anne', 'enid', 'ethel', 'beryl'], 'florence')); // -1
