import { expect, it, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
    it('should return a string, no matter which valus is passed in', () => {
        const input = "invaid";
        const inputTwo = 1;
        const inputThree = false;

        const result = generateResultText(input);
        const resultTwo = generateResultText(inputTwo);
        const resultThree = generateResultText(inputThree);

        expect(result).toBeTypeOf('string');
        expect(resultTwo).toBeTypeOf('string');
        expect(resultThree).toBeTypeOf('string');
    });

    it('should return an empty string if "no-calc" is provided as a result', () => {
        const input = 'no-calc';
        const resultText = generateResultText(input);
        expect(resultText).toBe('');
    })
});