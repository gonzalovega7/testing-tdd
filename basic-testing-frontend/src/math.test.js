import { describe, expect, it } from 'vitest';
import { add } from './math';

describe('math()', () => {

    it('should summarize all number values in an array', () => {
        // Arrange
        const numbers = [1,2,3];
        const expectedResult = numbers.reduce(( prevValue, curValue) => prevValue + curValue, 0);
    
        // Act
        const result = add(numbers);
    
        // Assert
        expect(result).toBe(expectedResult);
    });
    
    it('should yield NaN if at least one invalid numbers is provided', () => {
        const inpunts = ['invalid', 1];
        
        const result = add(inpunts);
    
        expect(result).toBeNaN();
    });
    
    it('should yield a correct sum if an array of number string values is provided', () => {
        const numbers = ['1', '2'];
        const expectedResult = numbers.reduce(( prevValue, curValue) => prevValue + +curValue, 0);
    
        const result = add(numbers);
    
        expect(result).toBe(expectedResult);
    });
    
    it('should yield 0 if an empty array is provided', () => {
        const numbers = [];
    
        const result = add(numbers);
    
        expect(result).toBe(0);
    });
    
    it('should not yield 0 if all are number values in an array', () => {
        const numbers = [1,2];
    
        const result = add(numbers);
    
        expect(result).not.toBe(0);
    })
    
    it('should throw an error if no value is passed into the function', () => {
        const resultFn = () => {
            add();
        };
        
        expect(resultFn).toThrow();
    
    });
    
    it('should throw an error if provided with multiple arguments instead of an array', () => {
        const numOne = 1;
        const numTwo = 2;
        
        const resultFn = () => {
            add(numOne,numTwo);
        }
    
        expect(resultFn).toThrow(/is not iterable/);
    });

});


