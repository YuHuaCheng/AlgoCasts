// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str
        .split('')
        .reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;

// // solution 1
// function reverse(str) {
//     const strLength = str.length;
//
//     let reversedString = '';
//     let i = 1;
//     while(i <= strLength){
//         reversedString += str[strLength - i];
//         i++;
//     }
//     return reversedString;
// }
//
// // solution 2
// function reverse(str) {
//     let reversed = '';
//
//     for (let char of str){
//         reversed = char + reversed;
//     }
//     return reversed
// }
