class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);

        // Now bubble-up to correct position
        let idx = this.values.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.values[parentIdx] < val) {
                // Swap the 2 values
                this.values[idx] = this.values[parentIdx];
                this.values[parentIdx] = val;
                idx = parentIdx;
            } else {
                break;
            }
        }

        console.log(`Inserted Val = ${val} / Values: ${this.values}`);
        return this.values;
    }

    extractMax() {
        if (this.values.length === 0) {
            return undefined;
        }

        // Get the max which is always the first value in the values array
        let max = this.values[0];
        let poppedVal = this.values.pop();
        
        // No further processing required if we popped the only element
        if (this.values.length > 0) {
            // Overwrite the first value with the popped value
            this.values[0] = poppedVal;

            // Trickle down the new first value until it reachs the correct place in binary heap
            this.trickleDown();
        }

        console.log(`Extracted Max = ${max} / Values: ${this.values}`);
        return max;
    }

    trickleDown() {
        let idx = 0;
        let val = this.values[0];

        while (true) {
            // Find the child indices
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = leftChildIdx + 1;

            let leftChild = 
                leftChildIdx < this.values.length ? this.values[leftChildIdx] : null;

            let rightChild = 
                rightChildIdx < this.values.length ? this.values[rightChildIdx] : null;

            let swapIdx = null;

            // We have to swap with the larger of the left and right children
            // Explicitly check for null rather than using truthy as value of zero is falsey
            if (leftChild !== null && rightChild !== null) {
                if (leftChild >= rightChild) {
                    if (leftChild > val) {
                        swapIdx = leftChildIdx;
                    }
                } else {
                    if (rightChild > val) {
                        swapIdx = rightChildIdx;
                    }
                }
            } else if (leftChild !== null) {
                if (leftChild > val) {
                    swapIdx = leftChildIdx;
                }
            } else if (rightChild !== null) {
                if (rightChild > val) {
                    swapIdx = rightChildIdx;
                }
            }

            // Finish if we never found a value to swap with
            if (!swapIdx) {
                break;
            } else {
                this.values[idx] = this.values[swapIdx];
                this.values[swapIdx] = val;
            }

            idx = swapIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(12);
heap.insert(34);
heap.insert(14);
heap.insert(29);
heap.insert(-3);
heap.insert(0);
heap.insert(50);
heap.insert(31);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
