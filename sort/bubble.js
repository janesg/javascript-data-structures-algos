// Sorted an array of values
// In each pass (which gets one shorter each time), the highest remaining value is moved to the 'end'
// Optimised by finishing once no element swapping has occurred

// Note: using the counts, it can be shown that for a specific size array the number of
//       both operations (iterations) and swaps varies depending on the data in the array.
//       **** The number of swaps is significantly more than used by selectionSort for same array ****

function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Total count of the number of operations (i.e. loop iterations)
    let opsCount = 0;
    // Total count of the number of swaps
    let swapCount = 0;
    
    for (let end = arr.length - 1; end > 0; end--) {
        opsCount++;

        let swapped = false;

        for (let idx = 0; idx < end; idx++) {
            opsCount++;

            if (arr[idx] > arr[idx + 1]) {
                let temp = arr[idx];
                arr[idx] = arr[idx + 1];
                arr[idx + 1] = temp;
                swapped = true;
                swapCount++;
            }
        }

        // No swaps so array already fully sorted
        if (!swapped) {
            break;
        }
    }

    console.log(`Ops Count: ${opsCount} / Swaps: ${swapCount}`);

    return arr;
}

console.log(bubbleSort([12]));   // [12]
console.log(bubbleSort([5,3,2,4,1]));   // [1,2,3,4,5]
console.log(bubbleSort([37,45,29,-4,8,12,0,18,44]));   // [-4,0,8,12,18,29,37,44,45]

const randomArray = (length, max) => 
    [...new Array(length)].map(() => Math.round(Math.random() * max));

const runExample = (length, max) => {
    const randomInts = randomArray(length, max);
    console.log('=============================');    
    console.log(`UNSORTED (${length}): ${randomInts}`);
    console.log(`SORTED   (${length}): ${bubbleSort(randomInts)}`);    
}

runExample(5, 999);
runExample(10, 999);
runExample(20, 999);
runExample(30, 999);
runExample(50, 999);
