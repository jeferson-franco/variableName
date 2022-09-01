function solution(name) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test variableName
