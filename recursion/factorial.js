function factorial(num) {
    // Base case
    if (num === 0 || num === 1) {
        return 1;
    }

    // Call recursively with adjusted input
    return num * factorial(num - 1);
}

console.log(factorial(3));  // 6
console.log(factorial(5));  // 120