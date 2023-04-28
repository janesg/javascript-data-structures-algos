function substringCount(str, sub) {
    let count = 0;

    if (str.length === 0 || sub.length === 0 || str.length < sub.length) {
        return count;
    }

    for (let i = 0; i <= (str.length - sub.length); i++) {
        let match = true;
        for (let j = 0; j < sub.length; j++) {
            if (str[i + j] !== sub[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            count++;
        }
    }

    return count;
}

console.log(substringCount('', ''));    // 0
console.log(substringCount('bob', 'bobajob'));    // 0
console.log(substringCount('bob', 'bob'));    // 1
console.log(substringCount('fozzy bear says hi', 'ear'));   // 1
console.log(substringCount('fozzy bear says hi', 'early'));   // 0
console.log(substringCount('rama lama dinga donga', 'd')); // 2
console.log(substringCount('rama lama dinga donga', 'nga')); // 2
