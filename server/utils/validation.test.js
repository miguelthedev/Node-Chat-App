const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const string = isRealString(123);
        expect(string).toBe(false);
    })

    it('should reject string with only space', () => {
        const string = isRealString('     ');
        expect(string).toBe(false);
    })

    it('should allow string with non-space characters', () => {
        const string = isRealString('    10X Rule       ');
        expect(string).toBe(true);
    })
})