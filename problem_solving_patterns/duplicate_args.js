// Accept variable number of args and dermine whether duplicates exist

function areThereDuplicates(...args) {
    const argFreq = {};

    if (args.length < 2) {
        return false;
    }

    for (let arg of args) {
        if (argFreq[arg]) {
            return true;
        } else {
            argFreq[arg] = 1;    
        }
    }

    return false;
}

console.log(areThereDuplicates());      // false
console.log(areThereDuplicates(1));     // false
console.log(areThereDuplicates(1,2,3,1));      // true
console.log(areThereDuplicates('a', 'b', 'c', 'd'));      // false
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));      // true
