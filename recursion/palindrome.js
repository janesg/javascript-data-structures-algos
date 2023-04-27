// Write a recursive function called isPalindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

function isPalindrome(str) {
    const strLen = str.length;

    if (strLen === 0 || strLen === 1) {
        return true;
    }

    return (str[0] === str[strLen - 1]) && isPalindrome(str.slice(1, strLen - 1));
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false