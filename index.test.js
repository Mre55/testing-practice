const cal = require('./index');

describe('calculator', () => {
    test('add', () => {
        expect(cal.calculator.add(1,1)).toBe(2);
    });

    test('multiply', () => {
        expect(cal.calculator.multiply(5,6)).toBe(30);
    });

    test('subtract', () => {
        expect(cal.calculator.subtract(3,2)).toBe(1);
    });

    test('divide', () => {
        expect(cal.calculator.divide(4,2)).toBe(2);
    });
});