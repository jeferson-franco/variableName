const solution = require('./variableName.js');

test('test 1', () => {
    expect(solution("var_1__Int")).toBe(true);
});

test('test 2', () => {
    expect(solution("qq-q")).toBe(false);
});

test('test 3', () => {
    expect(solution("2w2")).toBe(false);
});

test('test 4', () => {
    expect(solution(" variable")).toBe(false);
});

test('test 5', () => {
    expect(solution("va[riable0")).toBe(false);
});

test('test 6', () => {
    expect(solution("variable0")).toBe(true);
});

test('test 7', () => {
    expect(solution("a")).toBe(true);
});

test('test 8', () => {
    expect(solution("_Aas_23")).toBe(true);
});

test('test 9', () => {
    expect(solution("a a_2")).toBe(false);
});

test('test 10', () => {
    expect(solution("0ss")).toBe(false);
});
