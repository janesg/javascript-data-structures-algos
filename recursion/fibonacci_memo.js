// Adding memoization reduces Big O time complexity from O[2^n] to O[n]
function fib(num) {
    let memo = {};

    function fibHelper(num) {
        if (num === 1 || num === 2) {
            return 1;
        }
    
        if (memo[num]) {
            return memo[num];
        }

        let result = fibHelper(num - 1) + fibHelper(num - 2);
        memo[num] = result;

        return result;    
    }
    
    return fibHelper(num);
}

console.log(fib(4));    // 3
console.log(fib(10));   // 55
console.log(fib(28));   // 317811
console.log(fib(35));   // 9227465
console.log(fib(100));  // 354224848179262000000