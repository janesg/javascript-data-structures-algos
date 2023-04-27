function factorialLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function factorialCalc(n) {
    return n * ((n + 1) / 2);
}

let t1 = performance.now();
factorialLoop(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

t1 = performance.now();
factorialCalc(1000000000);
t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);