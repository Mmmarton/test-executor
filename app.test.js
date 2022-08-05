const { multiply } = require('./app');

test('multiply 4 by 8 results 32', () => {
    expect(multiply(4, 8)).toBe(32);
});