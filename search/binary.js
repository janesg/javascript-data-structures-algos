function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] < val) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([], 23)); // -1
console.log(binarySearch([23], 23)); // 0
console.log(binarySearch([-78, -2, -1, 0, 4, 12, 23, 25, 33, 35, 41], 23)); // 6
console.log(binarySearch([-78, -2, -1, 0, 4, 12, 23, 25, 33, 35, 41], 21)); // -1
console.log(binarySearch(['anne', 'beryl', 'cheryl', 'enid', 'ethel', 'lynn', 'mabel'], 'cheryl')); // 2
console.log(binarySearch(['anne', 'beryl', 'cheryl', 'enid', 'ethel', 'lynn', 'mabel'], 'florence')); // -1

