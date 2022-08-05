const { multiply } = require('./app');

describe('multiplier', () => {
    it('should return 32 for 4 and 8', () => {
        expect(multiply(4, 8)).toBe(32);
    });

    it('should return 0 for 0 and 8', () => {
        expect(multiply(0, 8)).toBe(0);
    });

    it('should return Infinity for Infinity and 8', () => {
        expect(multiply(Infinity, 8)).toBe(Infinity);
    });

    it('should return -Infinity for Infinity and -Infinity', () => {
        expect(multiply(Infinity, -Infinity)).toBe(-Infinity);
    });

    it('should return 0 for Infinity and 0', () => {
        expect(multiply(Infinity, 0)).toBe(0);
    });
});