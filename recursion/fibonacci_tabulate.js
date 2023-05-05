// Adding tabulation reduces Big O time complexity from O[2^n] to O[n]
// Space complexity of tabulation is better than that for memoization due to recursion
function fib(num) {
    if (num === 1 || num === 2) {
        return 1;
    }

    let fibNums = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    
    return fibNums[num];
}

console.log(fib(4));    // 3
console.log(fib(10));   // 55
console.log(fib(28));   // 317811
console.log(fib(35));   // 9227465
console.log(fib(100));  // 354224848179262000000