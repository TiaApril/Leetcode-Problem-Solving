/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    for(let i = 0; i< s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if(current < next) {
            total -= current
        } else {
            total += current
        }
    } return total
};

// Step-by-Step Iteration:
// Initialize total = 0.

// First Iteration (i = 0, s[i] = 'D'):

// current = romanMap['D'] = 500
// next = romanMap['C'] = 100
// Since 500 > 100, add 500 to total.
// total = 0 + 500 = 500
// Second Iteration (i = 1, s[i] = 'C'):

// current = romanMap['C'] = 100
// next = romanMap['X'] = 10
// Since 100 > 10, add 100 to total.
// total = 500 + 100 = 600
// Third Iteration (i = 2, s[i] = 'X'):

// current = romanMap['X'] = 10
// next = romanMap['L'] = 50
// Since 10 < 50, subtract 10 from total.
// total = 600 - 10 = 590
// Fourth Iteration (i = 3, s[i] = 'L'):

// current = romanMap['L'] = 50
// next = romanMap['I'] = 1
// Since 50 > 1, add 50 to total.
// total = 590 + 50 = 640
// Fifth Iteration (i = 4, s[i] = 'I'):

// current = romanMap['I'] = 1
// next = romanMap['X'] = 10
// Since 1 < 10, subtract 1 from total.
// total = 640 - 1 = 639
// Sixth Iteration (i = 5, s[i] = 'X'):

// current = romanMap['X'] = 10
// No next value since this is the last character.
// Add 10 to total.
// total = 639 + 10 = 649
// Final Result:
// The function returns 649, which is the integer value of the Roman numeral "DCXLIX".
// Summary of the Iteration:
// D: Added 500 → total = 500
// C: Added 100 → total = 600
// X: Subtracted 10 → total = 590
// L: Added 50 → total = 640
// I: Subtracted 1 → total = 639
// X: Added 10 → total = 649
// This is how the Roman numeral "DCXLIX" is correctly converted to the integer 649 using the given algorithm.