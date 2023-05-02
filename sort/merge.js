
// Start with the merging of 2 sorted arrays
function merge(leftArr, rightArr) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
        if (leftArr[leftIdx] < rightArr[rightIdx]) {
            result.push(leftArr[leftIdx]);
            leftIdx++;
        } else {
            result.push(rightArr[rightIdx]);
            rightIdx++;
        }
    }

    // Work out which array was exhausted and add in the rest of the elements in the other
    if (leftIdx === leftArr.length) {
        while (rightIdx < rightArr.length) {
            result.push(rightArr[rightIdx]);
            rightIdx++;
        }
    } else {
        while (leftIdx < leftArr.length) {
            result.push(leftArr[leftIdx]);
            leftIdx++;
        }
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
    }
}

console.log(merge([3, 8, 12, 17, 19], [5, 8, 13])) // [3, 5, 8, 8, 12, 13, 17, 19]

const randomArray = (length, max) => 
    [...new Array(length)].map(() => Math.round(Math.random() * max));

const runExample = (length, max) => {
    const randomInts = randomArray(length, max);
    console.log('=============================');    
    console.log(`UNSORTED (${length}): ${randomInts}`);
    console.log(`SORTED   (${length}): ${mergeSort(randomInts)}`);    
}

runExample(5, 999);
runExample(10, 999);
runExample(20, 999);
runExample(30, 999);
runExample(50, 999);
