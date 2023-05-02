// Take an unsorted array, pick a pivot value, move values less than pivot to
// its left and return the index of the pivot
function pivot(arr, start = 0, end = arr.length - 1) {
    // ES 2015 version of swap
    // const swap = (arr, i , j) => {
    //     [arr[i], arr[j]] = [arr[j], arr[i]]; 
    // }
    function swap(arr, i , j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }

    // Choose the start element as the pivot
    let pivotIdx = start;
    // Index of element to be swapped
    let swapIdx = start;

    for (let idx = start + 1; idx <= end; idx++) {
        if (arr[pivotIdx] > arr[idx]) {
            swapIdx++;
            swap(arr, idx, swapIdx);
        }
    }

    // Now swap the original pivot for the element at the final swap index
    swap(arr, pivotIdx, swapIdx);
    console.log(arr);

    return swapIdx;
}

// Big O of n*2 which happens if data is already sorted and we use start element as pivot
function quickSort(arr, left = 0, right = arr.length - 1) {
    console.log(`Left: ${left}, Right: ${right} / [${arr}]`);

    // Recursion base case
    if (left < right) {
        let pIdx = pivot(arr, left, right);

        // Sort elements on the left side of the pivot
        quickSort(arr, left, pIdx - 1);
        // Sort elements on the right side of the pivot
        quickSort(arr, pIdx + 1, right);    
    }

    return arr;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3])); // 4
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]