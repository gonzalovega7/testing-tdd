import { describe, expect, it } from "vitest";
import { transformToNumber } from "./numbers";

describe('transformToNumber()', () => {
    it('should yield a number if a number string value is provided', () => {
        const number = "1";
    
        const result = transformToNumber(number);
    
        expect(result).toBeTypeOf('number');
    });
    
    it('should yield NaN if value is not a number or string number', () => {
        const input = "hello World";
    
        const result = transformToNumber(input);
    
        expect(result).toBeNaN();
    });
});
