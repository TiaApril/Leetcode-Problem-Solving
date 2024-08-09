// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    const str = x.toString()
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}