// Given array of sorted integers and a target average, determine if there are a pair
// of values in the array where the average of the pair matches the target average.

function averagePair(data, avg) {
    if (data.length < 2) {
        return false;
    }

    let leftIdx = 0;
    let rightIdx = data.length - 1;

    while (leftIdx < rightIdx) {
        let pairAvg = (data[leftIdx] + data[rightIdx]) / 2;
        if (pairAvg === avg) {
            return true;
        } else if (pairAvg > avg) {
            rightIdx--;
        } else {
            leftIdx++;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5));     // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));     // true
console.log(averagePair([-1, 0, 3, 4, 5], 4.1));     // false
console.log(averagePair([], 4));     // false
