// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, level='') {
    if (n === row){
        return;
    }

    const colLength = 2 * n - 1;
    if (level.length === colLength){
        console.log(level);
        return pyramid(n, row + 1)
    }

    const centerIndex = Math.floor(colLength / 2);
    let add;
    if (centerIndex - row <= level.length && centerIndex + row >= level.length){
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add)
}

// function pyramid(n) {
//     for (let row = 0; row < n; row++){
//         let level = '';
//         const colLength = 2 * n - 1; // hardest part is to figure out this 2*n - 1
//         const centerIndex = Math.floor(colLength / 2);
//
//         for (let col = 0; col < colLength; col++){
//             if (centerIndex - row <= col && centerIndex + row >= col){
//                 level += '#';
//             }
//             else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }


module.exports = pyramid;
