// Given 2 strings, determine whether 2nd string is an anagram of the 1st
// Ignore case but not whitespace

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let charCount1 = {};
    let charCount2 = {};

    for (let c of str1.toLowerCase()) {
        charCount1[c] = (charCount1[c] || 0) + 1;
    }

    for (let c of str2.toLowerCase()) {
        charCount2[c] = (charCount2[c] || 0) + 1;
    }

    console.log(charCount1);
    console.log(charCount2);

    for (let c in charCount1) {
        if (!charCount2[c]) {
            return false;
        }

        if (charCount1[c] !== charCount2[c]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('horse', 'donkey'));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('querty', 'rtyque'));
console.log(validAnagram('texttwisttime', 'TimeTwistText'));

