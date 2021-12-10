const cal = require('./index');
const inputString = require('./index');


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


it('stringLength characters count', () => {
  expect(inputString.stringLength('mihreteab')).toBe(9);
});

it('stringLength is at least 1 character long', () => {
  expect(inputString.stringLength('mre')).toBeGreaterThan(0);
});

it('stringLength is longer than 10 characters', () => {
  expect(inputString.stringLength('mre')).toBeLessThan(10);
});
