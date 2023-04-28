// Sorted an array of values
// In each pass (which gets one shorter each time), the minimum remaining value is moved to the 'start'

// Note: using the counts, it can be shown that for a specific size array the number of
//       operations (iterations) is constant, but the number of swaps depends on the data in the array.
//       **** The number of swaps is significantly less than used by bubbleSort for same array ****
//       **** Could be preferred (over bubbleSort) if swapping values is a relatively costly operation ****
//       **** Does not perform very well on 'nearly sorted' data ****

function selectionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Total count of the number of operations (i.e. loop iterations)
    let opsCount = 0;
    // Total count of the number of swaps
    let swapCount = 0;

    // Optimise loop (saving 1 operation) by finishing loop 1 element short of the end
    // At the start of last loop, the last element will already be the largest
    for (let start = 0; start < arr.length - 1; start++) {
        // console.log(arr);
        opsCount++;

        let minIdx = start;

        for (let idx = start + 1; idx < arr.length; idx++) {
            opsCount++;

            if (arr[idx] < arr[minIdx]) {
                minIdx = idx;
            }
        }
        
        // If we found a new minimum, then swap with start element
        if (minIdx !== start) {
            let temp = arr[start];
            arr[start] = arr[minIdx];
            arr[minIdx] = temp;
            swapCount++;
        }
    }

    console.log(`Ops Count: ${opsCount} / Swaps: ${swapCount}`);

    return arr;
}

console.log(selectionSort([12]));   // [12]
console.log(selectionSort([5,3,2,4,1]));   // [1,2,3,4,5]
console.log(selectionSort([37,45,29,-4,8,12,0,18,44]));   // [-4,0,8,12,18,29,37,44,45]

const randomArray = (length, max) => 
    [...new Array(length)].map(() => Math.round(Math.random() * max));

const runExample = (length, max) => {
    const randomInts = randomArray(length, max);
    console.log('=============================');    
    console.log(`UNSORTED (${length}): ${randomInts}`);
    console.log(`SORTED   (${length}): ${selectionSort(randomInts)}`);    
}

runExample(5, 999);
runExample(10, 999);
runExample(20, 999);
runExample(30, 999);
runExample(50, 999);
