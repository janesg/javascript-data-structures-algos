// Function takes in two strings and checks whether the characters in the first string 
// form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string 
// appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    if (str2.length < str1.length) {
        return false;
    } else if (str2 === str1) {
        return true;
    }

    let matchIdx = 0;

    for (let idx2 = 0; idx2 <= str2.length; idx2++) {
        if (matchIdx < str1.length) {
            if (str2[idx2] == str1[matchIdx]) {
                matchIdx++;
            }
        } else {
            return true;
        }
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world'));       // true
console.log(isSubsequence('sing', 'sting'));       // true
console.log(isSubsequence('abc', 'abracadabra'));       // true
console.log(isSubsequence('abc', 'acb'));       // false
