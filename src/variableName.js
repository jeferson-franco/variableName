function solution(name) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test variableName

// alternative solution
// function solution(name) {
//     return /^[a-z_]\w*$/i.test(name);
// }

// alternative solution
// function solution(name) {
//     let array = name.split('');
//     for (let i = 0; i < array.length; i++) {
//         if (i === 0 && isDigit(array[i])) return false;
//         if (!(isDigit(array[i]) || isLetter(array[i]) || isUnderscore(array[i]))) return false;
//     }
//     return true;
// }
// function isDigit(c) {
//     return '0123456789'.indexOf(c) !== -1;
// }
// function isUnderscore(c) {
//     return '_'.indexOf(c) !== -1;
// }
// function isLetter(c) {
//     return c.toLowerCase() != c.toUpperCase();
// }
