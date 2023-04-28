// Sorted an array of values
// The left of the array is taken to be the sorted area and each element outside this area
// is inserted into the correct place in the sorted area. This requires all larger sorted elements to be moved 
// across to create the necessary slot to put the element into.

// Note: using the counts, it can be shown that for a specific size array the number of
//       operations (iterations), moves and inserts all vary depending on the data in the array.
//       **** Performs very well on 'nearly sorted' data ****
//       **** Also good for handling streamed values since 'left side' of array is always sorted ****

function insertionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Total count of the number of operations (i.e. loop iterations)
    let opsCount = 0;
    // Total count of the number of moves
    let moveCount = 0;
    // Total count of the number of inserts
    let insertCount = 0;

    // Start from the 2nd element as the 1st is deemed to be in the sorted section of the array
    for (let i = 1; i < arr.length; i++) {
        opsCount++;

        let valueToInsert = arr[i];
        let insertIdx = i;

        // Iterate backwards through sorted section of the array
        for (let j = i - 1; j >= 0; j--) {
            opsCount++;

            if (valueToInsert < arr[j]) {
                // Move sorted element up one place
                arr[j + 1] = arr[j];
                insertIdx = j;
                moveCount++;
            } else {
                break;
            }   
        }

        if (insertIdx !== i) {
            arr[insertIdx] = valueToInsert;
            insertCount++;    
        }
    }

    console.log(`TOTAL: ${opsCount + moveCount + insertCount} / Ops Count: ${opsCount} / Moves: ${moveCount} / Inserts: ${insertCount}`);

    return arr;
}

// console.log(insertionSort([12]));   // [12]
// console.log(insertionSort([3,2,1]));   // [1,2,3]
// console.log(insertionSort([5,3,2,4,1]));   // [1,2,3,4,5]
// console.log(insertionSort([37,45,29,-4,8,12,0,18,44]));   // [-4,0,8,12,18,29,37,44,45]

const randomArray = (length, max) => 
    [...new Array(length)].map(() => Math.round(Math.random() * max));

const runExample = (length, max) => {
    const randomInts = randomArray(length, max);
    console.log('=============================');    
    console.log(`UNSORTED (${length}): ${randomInts}`);
    console.log(`SORTED   (${length}): ${insertionSort(randomInts)}`);    
}

runExample(5, 999);
runExample(10, 999);
runExample(20, 999);
runExample(30, 999);
runExample(50, 999);
