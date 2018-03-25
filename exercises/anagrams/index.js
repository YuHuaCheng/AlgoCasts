// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false
    }

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false
        }
    }
    return true
}

function buildCharMap(str){
    const charMap = {};

    const strParsed = str.replace(/[^\w]/g, '').toLowerCase();
    for (let char of strParsed){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
}

// solution 2
// split stringA and stringB to 2 arrays, then sort each them, then compare

module.exports = anagrams;
