import { expect, it, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {

    it('should throw an Error if an empty variable is provided', () => {
        const input = "";
        const secInput = [];
    
        const resultFn = () => {
            validateStringNotEmpty(input);
        };
        const resultFnTwo = () => {
            validateStringNotEmpty(secInput);
        };
    
        expect(resultFn).toThrow();
        expect(resultFnTwo).toThrow();
    });

    it('should thorw an Error if any other value than string is provided', () => {
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};
    
        const validationFnNum = () => validateStringNotEmpty(inputNum);
        const validationFnBool = () => validateStringNotEmpty(inputBool);
        const validationFnObj = () => validateStringNotEmpty(inputObj);
    
        expect(validationFnNum).toThrow();
        expect(validationFnBool).toThrow();
        expect(validationFnObj).toThrow();
    });

});


describe('validateNumber()', () => {

    it('should throw an Error if no value is passed into the function', () => {
        const resultFn = () => {
            validateNumber();
        }
    
        expect(resultFn).toThrow();
    });
    
    it('should throw an Error if no number value is passed into the function', () => {
        const input = "Hi";
    
        const resultFn = () => {
            validateNumber(input);
        }
    
        expect(resultFn).toThrow();
    });

});
